import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Transacciones', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Transacciones');
    allure.story('Navegar y Ver detalles');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion y ver detalles de Transacciones.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    await allure.step('Navegar y acceder a Transacciones',async () => {
        await allure.step('Acceder a la url de login', async () => {
            await page.goto(urlBETA!);
        });

        await allure.step('Hacer click en input nombre de usuario', async () => {
            await page.locator('#UserName').click();
        });

        await allure.step('Escribir en input nombre de usuario', async () => {
            await page.locator('#UserName').fill('QAutomation2@gmail.com');
        });

        await allure.step('Hacer click en input Contraseña de usuario', async () => {
            await page.locator('#Password').click();
        });

        await allure.step('Escribir en input Contraseña de usuario', async () => {
            await page.locator('#Password').fill('N9VOSBIA');
        });

        await allure.step('Hacer Click en ingresar', async () => {
            await page.locator('#submit').click();
        });
        
        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });

        // await allure.step('hacer click para cambiar rol', async () => {
        //     const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
        //     await rolLink.waitFor({ state: 'visible', timeout: 60000 });
        //     await expect(rolLink).toBeEnabled({ timeout: 60000 });
        //     await rolLink.click(); 
        // });
    
        // await allure.step('hacer click para desplegar lista de roles', async () => {
        //     const showAllBtn = page.getByTitle('Show All Items');
        //     await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
        //     await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
        //     await showAllBtn.click();
        // });

        // await allure.step('hacer click en rol NW Company - Atio Lab Flota', async () => {
        //     await page.getByText('NW Company Admin - Atio Lab').click();
        // });

        // await allure.step('acceder a modulo Transacciones', async () => {
        //     await page.click('a[href="/Transactions"]');
        // });

        
        await allure.step('acceder a modulo Transacciones', async () => {
            await page.goto('https://console.ationet.com/Transactions');
        });

        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });

        // await allure.step('veriricar que estamos en la url de Transacciones', async () => {
        //     await expect(page).toHaveURL('https://console.ationet.com/Transactions');
        // });    
    });   

    await allure.step('Ingresar al detalle de transaccion' , async () => {

        await allure.step('Click para ingresar a detalle de transaccion' , async () => {
            await page.locator('tbody tr td:nth-child(2) a').first().click();
        });



        await allure.step('Click en boton Ok', async () => {
        await page.getByRole('button', { name: 'Ok' }).click({ noWaitAfter: true });
        await page.waitForTimeout(1000); // o un wait por una condición
        });



        // await allure.step('Verificamos que volvimos a la url de transacciones' , async () => {
        //     await expect(page).toHaveURL('https://console.ationet.com/Transactions');
        // });
    });
})