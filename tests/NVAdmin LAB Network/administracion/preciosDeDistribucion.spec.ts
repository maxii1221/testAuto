import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';



test('Precios de distribucion', async ({ page }, testInfo) => {
    //varibles:
    const urlBETA = testInfo.project.use?.baseURL; 

    // Allure metadata

    //esto aparece en suite para ordenar mejor
    allure.suite('NWAdmin');
    allure.subSuite('Administracion');

    //usuario que ejecuto la automatizacion
    allure.owner('Maximiliano');
    allure.tag('regression');

    //label para funcionalidades allure
    allure.label('epic', 'NWAdmin - Administracion');
    allure.label('feature', 'Precios De Distribucion');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de Precios De Distribucion.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial 

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 1000000);
    const rackPriceName = `RackPrice ${randomId}`;
    const rackPriceCode = `${randomId}`;

    await allure.step('Navegar y acceder a Precio de distribucion',async () => {
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

        await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
            await page.getByText('NW Admin - LAB QA').click();
        });

        await allure.step('acceder a modulo Precios de distribucion', async () => {
            await page.locator('#MenuItem_Administration').getByRole('link', { name: 'Precios de distribución' }).click();
        });

        await allure.step('veriricar que estamos en la url de Precios de distribucion', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/RackPrices');
        });    
    }); 

    await allure.step('Crear nuevo Precio de distribucion',async () => {

        await allure.step('Click en boton nuevo',async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear Precios de distribucion',async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/RackPrices/Create');
        });

        await allure.step('Click en input nombre precios de distribucion',async () => {
            await page.locator('#RackPricesList_Name').click();
        });

        await allure.step('Escribir en input nombre precios de distribucion',async () => {
            await page.locator('#RackPricesList_Name').fill(rackPriceName);
        });

        await allure.step('Click en input codigo precios de distribucion',async () => {
            await page.locator('#RackPricesList_Code').click();
        });

        await allure.step('Escribir en input codigo precios de distribucion',async () => {
            await page.locator('#RackPricesList_Code').fill(rackPriceCode);
        });

        await allure.step('Desplegar lista y seleccionar moneda',async () => {
            await page.locator('#RackPricesList_IdCurrencyCode').selectOption({ label: 'USD' });
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });
 
    });

    await allure.step('filtrar nuevo Precio de distribucion',async () => {

        await allure.step('Aseguramos que el panel filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el título filtro, no en todo el panel',async () => {
            await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
        });

        await allure.step('Esperar que se despliegue el contenido del filtro',async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input codigo',async () => {
            await page.locator('label[for="code"]').click();
        });

        await allure.step('Escribir en input codigo',async () => {
            await page.locator('label[for="code"]').fill(rackPriceCode);
        });

        await allure.step('Click en buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestro Precios de distribucion',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(rackPriceCode);
        });
    });

    await allure.step('editar nuevo Precio de distribucion',async () => {

        await allure.step('Click en editar',async () => {
            await page.getByRole('link', { name: 'Editar' }).click();
        });

        await allure.step('Click en input nombre',async () => {
            await page.locator('#RackPricesList_Name').click();
        });

        await allure.step('Escribir en input nombre',async () => {
            await page.locator('#RackPricesList_Name').fill(rackPriceName + 'editado');
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('filtrar Precio de distribucion editado',async () => {

        await allure.step('Aseguramos que el panel filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el título filtro, no en todo el panel',async () => {
            await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
        });

        await allure.step('Esperar que se despliegue el contenido del filtro',async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input codigo',async () => {
            await page.locator('label[for="code"]').click();
        });

        await allure.step('Escribir en input codigo',async () => {
            await page.locator('label[for="code"]').fill(rackPriceCode);
        });

        await allure.step('Click en buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestro Precios de distribucion',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(rackPriceCode);
        });
    });

})