import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Autorizaciones Pendientes', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Autorizaciones Pendientes');
    allure.story('Navegar y acceder a detalles');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion y acceder a detalles en autorizaciones pendientes.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    await allure.step('Navegar y acceder a autorizaciones pendientes',async () => {
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
            await page.locator('#Password').fill('O06DF3LJ');
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

        // await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
        //     await page.getByText('NW Admin - LAB Network').click();
        // });

        // await allure.step('acceder a modulo Autorizaciones Pendientes', async () => {
        //     await page.click('a[href="/TransactionsOutstandingAuthorizations"]');
        // });

        await allure.step('acceder a modulo autorizaciones pendientes', async () => {
            await page.goto('https://console.ationet.com/TransactionsOutstandingAuthorizations');
        });

        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });
    }); 

    await allure.step('Entrar a detalles de autorizaciones pendientes',async () => {

        await allure.step('Entrar a detalles de la autorizacion pendiente',async () => {
            await page.locator('tbody tr td:nth-child(3) a').first().click();
        });


        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });

        await allure.step('Click en boton Ok', async () => {
        await page.getByRole('button', { name: 'Ok' }).click({ noWaitAfter: true });
        await page.waitForTimeout(1000); // o un wait por una condición
        });


    });
})