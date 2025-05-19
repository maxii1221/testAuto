import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Transacciones Rechazadas', async ({ page }, testInfo) => {
    //varibles:
    const urlBETA = testInfo.project.use?.baseURL; 

    // Allure metadata

    //esto aparece en suite para ordenar mejor
    allure.suite('NWCompany');
    allure.subSuite('Flota');

    //usuario que ejecuto la automatizacion
    allure.owner('Maximiliano');
    allure.tag('regression');

    //label para funcionalidades allure
    allure.label('epic', 'NWCompany - Flota');
    allure.label('feature', 'Transacciones Rechazadas');
    allure.story('Navegar y Ver detalles');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, y ver detalles en Transacciones Rechazaras.<br/>
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
            await page.locator('#UserName').fill('facuna@atioinc.com');
        });

        await allure.step('Hacer click en input Contraseña de usuario', async () => {
            await page.locator('#Password').click();
        });

        await allure.step('Escribir en input Contraseña de usuario', async () => {
            await page.locator('#Password').fill('pipo33');
        });

        await allure.step('Hacer Click en ingresar', async () => {
            await page.locator('#submit').click();
        });
        
        await allure.step('hacer click para cambiar rol', async () => {
            const primerLink = page.locator('p >> a').first();
            await primerLink.click();
        });
    
        await allure.step('hacer click para desplegar lista de roles', async () => {
            await page.getByTitle('Show All Items').click();
        });

        await allure.step('hacer click en rol NW Company Admin- FORMULA1', async () => {
            await page.getByText('NW Company Admin - FORMULA1').click();
        });

        await allure.step('acceder a modulo Transacciones Rechazadas', async () => {
            await page.click('a[href="/TransactionsRejected"]');
        });

        await allure.step('veriricar que estamos en la url de Transacciones Rechazadas', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsRejected');
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
            await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsRejected');
        });
    });

})