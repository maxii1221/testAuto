import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Banderas', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Banderas');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, creacion y edicion de banderas.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial      

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 1000000);
    const banderaName = `bandera automatica${randomId}`
    const banderaFuelName = `00000${randomId}`;
    
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
      

    //acceder a modulo banderas
    await page.getByRole('link', { name: 'Banderas', exact: true }).click();
   
    //veriricar que estamos en la url de banderas
    await expect(page).toHaveURL('https://console-beta.ationet.com/Brands');

    //acceder a crear banderas
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear banderas
    await expect(page).toHaveURL('https://console-beta.ationet.com/Brands/Create');
    
    //completar los campos necesarios
    await page.locator('#BrandDto_Name').click();
    await page.locator('#BrandDto_Name').fill(banderaName);

    await page.locator('#fuelMaster').selectOption({ label: 'Super' });

    await page.locator('#name').click();
    await page.locator('#name').fill(banderaFuelName);
    
    await page.getByText('Alta').click();

    //comfirmar creacion
    await page.locator('#save').click();

    //verificar que la banderas se haya creado

    await expect(page.getByRole('cell', { name: banderaName, exact: true })).toBeVisible();

    //ingresar a editar banderas
    await page.getByRole('link', { name: 'Editar' }).first().click();

    //modificamos campo 
    await page.locator('#BrandDto_Name').click();
    await page.locator('#BrandDto_Name').fill(banderaName + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificamos que se haya guardado el editado
    await expect(page.getByRole('cell', { name: banderaName + 'editado', exact: true })).toBeVisible();
})