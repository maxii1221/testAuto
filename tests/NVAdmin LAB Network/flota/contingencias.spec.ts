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
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, creacion y poder editar Contingencia.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    // Generar un valor aleatorio para cada campo
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); // Resta un día
    const fechaISO = hoy.toISOString().split('T')[0].replace(/-/g, '/');

    const randomId = Math.floor(Math.random() * 1000000);
    const comentarioContingencia = `${randomId}`;

    //acceder a pagina
    await page.goto(urlBETA!);
    
    //ingresar credenciales
    await page.locator('#UserName').click();
    await page.locator('#UserName').fill('facuna@atioinc.com');
  
    await page.locator('#Password').click();
    await page.locator('#Password').fill('pipo33');
  
    await page.locator('#submit').click();

    //cambiar a NVComany
    const primerLink = page.locator('p >> a').first();
    await primerLink.click();
    await page.getByTitle('Show All Items').click();
    await page.getByText('NW Admin - LAB QA').click();   

    //acceder a modulo contigencia
    await page.click('a[href="/TransactionsContingencies"]'); // Haz clic en el enlace
   
    //veriricar que estamos en la url de contigencia
    await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsContingencies');

    //acceder a crear contigencia
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear contigencia
    await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsContingencies/Create');
    
    //completar los campos necesarios
    await page.locator('#TransactionsContingency_ReasonId').selectOption({ label: 'a3123' });

    await page.locator('#token-input-TransactionsContingency_SiteId').click();
    await page.locator('#token-input-TransactionsContingency_SiteId').type('as', { delay: 100 });
    await page.locator('.token-input-dropdown-ationet li', { hasText: 'asd' }).first().click();

    await page.locator('#token-input-TransactionsContingency_TerminalId').click();
    await page.locator('#token-input-TransactionsContingency_TerminalId').type('F', { delay: 100 });
    await page.locator('.token-input-dropdown-ationet li', { hasText: 'FOK12' }).first().click();

    await page.locator('#TransactionsContingency_LocalDateShortString').click();
    await page.locator('#TransactionsContingency_LocalDateShortString').fill(fechaISO);

    await page.locator('#TransactionsContingency_LocalTimeString').click();
    await page.locator('#TransactionsContingency_LocalTimeString').fill('17:00');

    await page.locator('#token-input-primaryAccount').click();
    await page.locator('#token-input-primaryAccount').type('max', { delay: 100 });
    await page.locator('.token-input-dropdown-ationet li', { hasText: '7090420184457065980 - Max, Verstappen (7090420184457065980)' }).first().click();

    await page.locator('#token-input-TransactionsContingency_FuelMasterId').click();
    await page.locator('#token-input-TransactionsContingency_FuelMasterId').type('Die', { delay: 100 });
    await page.locator('.token-input-dropdown-ationet li', { hasText: 'Diesel' }).first().click();

    await page.locator('#TransactionsContingency_ProductVolumeDispensed').click();
    await page.locator('#TransactionsContingency_ProductVolumeDispensed').fill('4.000');

    await page.locator('#TransactionsContingency_ProductUnitPriceDispensed').click();
    await page.locator('#TransactionsContingency_ProductUnitPriceDispensed').fill('2.000');

    await page.locator('#TransactionsContingency_ProductAmountDispensed').click();
    await page.locator('#TransactionsContingency_ProductAmountDispensed').fill('2.000');

    await page.locator('#TransactionsContingency_Comments').click();
    await page.locator('#TransactionsContingency_Comments').fill(comentarioContingencia);

    //comfirmar creacion
    await page.locator('#save').click();

    //comfirmar creacion
    await page.locator('div.jquery-msgbox-buttons button', { hasText: 'Crear' }).click();

    
    //editamos 
    await page.getByRole('link', { name: 'Editar' }).first().click();

    //modificamos campo 
    await page.locator('#TransactionsContingency_Comments').click();
    await page.locator('#TransactionsContingency_Comments').fill(comentarioContingencia + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();

})