import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Combustibles', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Combustibles');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, creacion y edicion de Combustibles.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial         

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 10000000000);

    const fuelCode = `${randomId}`;

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

    //acceder a modulo combustibles
    await page.getByRole('link', { name: 'Combustibles', exact: true }).click();
   
    //veriricar que estamos en la url de combustibles
    await expect(page).toHaveURL('https://console-beta.ationet.com/Fuels');

    //acceder a crear combustibles
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear combustibles
    await expect(page).toHaveURL('https://console-beta.ationet.com/Fuels/Create');
    
    //completar los campos necesarios
    await page.locator('#IdSite').selectOption({ label: 'custom1Pruebaaa' });

    await page.locator('#IdFuelMaster').selectOption({ label: 'TEST' });

    await page.locator('#Fuel_Code').click();
    await page.locator('#Fuel_Code').fill(fuelCode);
  
    //comfirmar creacion
    await page.locator('#save').click();

    //verificar que la combustibles se haya creado
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#codeFilter').click();
    await page.locator('#codeFilter').fill(fuelCode);

    await page.locator('#search').click();

    //verificamos que este nuestra combustibles
    await expect(page.locator('.dtls tr td a').first()).toHaveText(fuelCode);  // Verificar el texto

    //ingresar a editar combustibles
    await page.getByRole('link', { name: 'Editar' }).click();

    //modificamos campo 
    await page.locator('#Fuel_Code').click();
    await page.locator('#Fuel_Code').fill(fuelCode + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificar que la combustibles se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('#codeFilter').click();
    await page.locator('#codeFilter').fill(fuelCode + 'editado');

    await page.locator('#search').click();

    //verificamos que se haya guardado el editado
    await expect(page.getByRole('cell', { name: fuelCode + 'editado', exact: true })).toBeVisible();

})