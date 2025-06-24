import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Transacciones Rechazadas', async ({ page }, testInfo) => {
    //varibles:
    const urlBETA = testInfo.project.use?.baseURL; 

    // Allure metadata

    //esto aparece en suite para ordenar mejor
    allure.suite('NWAdmin');
    allure.subSuite('Flota');

    //usuario que ejecuto la automatizacion
    allure.owner('Maximiliano');
    allure.tag('regression');

    //label para funcionalidades allure
    allure.label('epic', 'NWAdmin - Flota');
    allure.label('feature', 'Transacciones Rechazadas');
    allure.story('Navegar y Ver detalles');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, y ver detalles en Transacciones Rechazaras.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    await allure.step('Navegar y acceder a Transacciones Rechazadas',async () => {
        await allure.step('Acceder a la url de login', async () => {
            await page.goto(urlBETA!);
        });

        await allure.step('Hacer click en input nombre de usuario', async () => {
            await page.locator('#UserName').click();
        });

        await allure.step('Escribir en input nombre de usuario', async () => {
            await page.locator('#UserName').fill('QAutomation@gmail.com');
        });

        await allure.step('Hacer click en input Contraseña de usuario', async () => {
            await page.locator('#Password').click();
        });

        await allure.step('Escribir en input Contraseña de usuario', async () => {
            await page.locator('#Password').fill('SVYTY6KA');
        });

        await allure.step('Hacer Click en ingresar', async () => {
            await page.locator('#submit').click();
        });

        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });
        
        await allure.step('hacer click para cambiar rol', async () => {
            const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
            await rolLink.waitFor({ state: 'visible', timeout: 60000 });
            await expect(rolLink).toBeEnabled({ timeout: 60000 });
            await rolLink.click(); 
        });
    
        await allure.step('hacer click para desplegar lista de roles', async () => {
            const showAllBtn = page.getByTitle('Show All Items');
            await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
            await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
            await showAllBtn.click();
        });

        await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
            await page.getByText('NW Admin - LAB Network').click();
        });

        await allure.step('acceder a modulo Transacciones Rechazadas', async () => {
            await page.click('a[href="/TransactionsRejected"]');
        });

        await allure.step('veriricar que estamos en la url de Transacciones Rechazadas', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/TransactionsRejected');
        });    
    });    

    await allure.step('Ingresar al detalle de transaccion rechazadas' , async () => {

        await allure.step('Click para ingresar a detalle de transaccion rechazadas' , async () => {
            await page.locator('tbody tr td:nth-child(3) a').first().click();
        });

        await allure.step('Click en boton ok' , async () => {
            await page.getByRole('button', { name: 'Ok' }).click();
        });

        await allure.step('Verificamos que volvimos a la url de transacciones rechazadas' , async () => {
            await expect(page).toHaveURL('https://console.ationet.com/TransactionsRejected');
        });
    });

})