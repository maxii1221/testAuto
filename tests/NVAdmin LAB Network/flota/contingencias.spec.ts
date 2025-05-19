import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Contingencias', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Contigencias');
    allure.story('Navegar, Crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y poder editar Contingencia.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    // Generar un valor aleatorio para cada campo
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); // Resta un día
    const fechaISO = hoy.toISOString().split('T')[0].replace(/-/g, '/');

    const randomId = Math.floor(Math.random() * 1000000);
    const comentarioContingencia = `${randomId}`;

    await allure.step('Navegar y acceder a contingencia',async () => {
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

        await allure.step('acceder a modulo contigencia', async () => {
            await page.click('a[href="/TransactionsContingencies"]');
        });

        await allure.step('veriricar que estamos en la url de contigencia', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsContingencies');
        });    
    });   

    await allure.step('Crear nueva contigencia', async () => {

        await allure.step('Click en boton nuevo', async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear contigencia', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsContingencies/Create');
        });

        await allure.step('Desplegar y seleccionar motivo', async () => {
            await page.locator('#TransactionsContingency_ReasonId').selectOption({ label: 'a3123' });
        });

        await allure.step('Click en input sitio', async () => {
            await page.locator('#token-input-TransactionsContingency_SiteId').click();
        });

        await allure.step('Escribir en input sitio', async () => {
            await page.locator('#token-input-TransactionsContingency_SiteId').type('as', { delay: 100 });
        });

        await allure.step('seleccionar en input sitio', async () => {
            await page.locator('.token-input-dropdown-ationet li', { hasText: 'asd' }).first().click();
        });

        await allure.step('Click en input terminal / controlador', async () => {
            await page.locator('#token-input-TransactionsContingency_TerminalId').click();
        });

        await allure.step('Escribir en input terminal / controlador', async () => {
            await page.locator('#token-input-TransactionsContingency_TerminalId').type('F', { delay: 100 });
        });

        await allure.step('Click en input terminal / controlador', async () => {
            await page.locator('.token-input-dropdown-ationet li', { hasText: 'FOK12' }).first().click();
        });

        await allure.step('Click en input fecha', async () => {
            await page.locator('#TransactionsContingency_LocalDateShortString').click();
        });

        await allure.step('Escribir en input fecha', async () => {
            await page.locator('#TransactionsContingency_LocalDateShortString').fill(fechaISO);
        });

        await allure.step('Click en input hora', async () => {
            await page.locator('#TransactionsContingency_LocalTimeString').click();
        });

        await allure.step('Escribir en input hora', async () => {
            await page.locator('#TransactionsContingency_LocalTimeString').fill('17:00');
        });

        await allure.step('Click en input cuenta primaria', async () => {
            await page.locator('#token-input-primaryAccount').click();
        });

        await allure.step('Escribir en input cuenta primaria', async () => {
            await page.locator('#token-input-primaryAccount').type('max', { delay: 100 });
        });

        await allure.step('Seleccionar en input cuenta primaria', async () => {
            await page.locator('.token-input-dropdown-ationet li', { hasText: '7090420184457065980 - Max, Verstappen (7090420184457065980)' }).first().click();
        });

        await allure.step('Click en input combustible', async () => {
            await page.locator('#token-input-TransactionsContingency_FuelMasterId').click();
        });

        await allure.step('Escribir en input combustible', async () => {
            await page.locator('#token-input-TransactionsContingency_FuelMasterId').type('Die', { delay: 100 });
        });

        await allure.step('Seleccionar en input combustible', async () => {
            await page.locator('.token-input-dropdown-ationet li', { hasText: 'Diesel' }).first().click();
        });

        await allure.step('Click en input volumen de despacho', async () => {
            await page.locator('#TransactionsContingency_ProductVolumeDispensed').click();
        });

        await allure.step('Escribir en input volumen de despacho', async () => {
            await page.locator('#TransactionsContingency_ProductVolumeDispensed').fill('4.000');
        });

        await allure.step('Click en input Precio unitario', async () => {
            await page.locator('#TransactionsContingency_ProductUnitPriceDispensed').click();
        });

        await allure.step('Escribir en input Precio unitario', async () => {
            await page.locator('#TransactionsContingency_ProductUnitPriceDispensed').fill('2.000');
        });

        await allure.step('Click en input monto de despacho', async () => {
            await page.locator('#TransactionsContingency_ProductAmountDispensed').click();
        });

        await allure.step('Escribir en input monto de despacho', async () => {
            await page.locator('#TransactionsContingency_ProductAmountDispensed').fill('2.000');
        });

        await allure.step('Click en input monto de Comentario', async () => {
            await page.locator('#TransactionsContingency_Comments').click();
        });

        await allure.step('Escribir en input monto de Comentario', async () => {
            await page.locator('#TransactionsContingency_Comments').fill(comentarioContingencia);
        });

        await allure.step('Click en boton guardar', async () => {
            await page.locator('#save').click();
        });

        await allure.step('Click en boton crear', async () => {
            await page.locator('div.jquery-msgbox-buttons button', { hasText: 'Crear' }).click();
        });

    });

    await allure.step('editar nueva contigencia', async () => {

        await allure.step('Editar contingencia', async () => {
            await page.getByRole('link', { name: 'Editar' }).first().click();
        });

        await allure.step('Click en input comentario', async () => {
            await page.locator('#TransactionsContingency_Comments').click();
        });

        await allure.step('Escribir en input comentario', async () => {
            await page.locator('#TransactionsContingency_Comments').fill(comentarioContingencia + 'editado');
        });

        await allure.step('Click en boton guardar', async () => {
            await page.locator('#save').click();
        });
    });

})