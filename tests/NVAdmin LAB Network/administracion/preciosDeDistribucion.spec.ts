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

    //acceder a modulo Precios de distribucion

    await page.locator('#MenuItem_Administration').getByRole('link', { name: 'Precios de distribución' }).click();

    //veriricar que estamos en la url de Precios de distribucion
    await expect(page).toHaveURL('https://console-beta.ationet.com/RackPrices');

    //acceder a crear Precios de distribucion
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear Precios de distribucion
    await expect(page).toHaveURL('https://console-beta.ationet.com/RackPrices/Create');
    
    //completar los campos necesarios
    await page.locator('#RackPricesList_Name').click();
    await page.locator('#RackPricesList_Name').fill(rackPriceName);

    await page.locator('#RackPricesList_Code').click();
    await page.locator('#RackPricesList_Code').fill(rackPriceCode);

    await page.locator('#RackPricesList_IdCurrencyCode').selectOption({ label: 'USD' });
 
    //comfirmar creacion
    await page.locator('#save').click();
    
    //verificar que la Sitios se haya creado
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('label[for="code"]').click();
    await page.locator('label[for="code"]').fill(rackPriceCode);

    await page.locator('#search').click();

    //verificamos que este nuestro Precios de distribucion
    await expect(page.locator('.dtls tr td a').first()).toHaveText(rackPriceCode);  // Verificar el texto

    //ingresar a editar Precios de distribucion
    await page.getByRole('link', { name: 'Editar' }).click();

    //modificamos campo 
    await page.locator('#RackPricesList_Name').click();
    await page.locator('#RackPricesList_Name').fill(rackPriceName + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificar que el Precios de distribucion se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('label[for="name"]').click();
    await page.locator('label[for="name"]').fill(rackPriceName + 'editado');

    await page.locator('#search').click();



})