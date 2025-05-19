import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';



test('Autorizaciones Pendientes', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Autorizaciones Pendientes');
    allure.story('Navegar y acceder a detalles');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion y acceder a detalles en autorizaciones pendientes.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    await allure.step('Navegar y acceder a Procesos de Liquidación',async () => {
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

        await allure.step('acceder a modulo Autorizaciones Pendientes', async () => {
            await page.click('a[href="/TransactionsOutstandingAuthorizations"]');
        });

        await allure.step('veriricar que estamos en la url de Procesos de Liquidación', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsOutstandingAuthorizations');
        });    
    });    

    await allure.step('Ingresar al detalle de autorizaciones pendientes' , async () => {

        await allure.step('Click para ingresar a detalle de autorizaciones pendientes' , async () => {
            await page.locator('tbody tr td:nth-child(2) a').first().click();
        });

        await allure.step('Click en boton ok' , async () => {
            await page.getByRole('button', { name: 'Ok' }).click();
        });

        await allure.step('Verificamos que volvimos a la url de autorizaciones pendientes' , async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsOutstandingAuthorizations');
        });
    });

})