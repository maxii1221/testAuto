import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Procesos de Liquidación', async ({ page }, testInfo) => {
    //varibles:
    const urlBETA = testInfo.project.use?.baseURL;

    // Allure metadata

    //esto aparece en suite para ordenar mejor
    allure.suite('NWAdmin');
    allure.subSuite('Liquidaciones');

    //usuario que ejecuto la automatizacion
    allure.owner('Maximiliano');
    allure.tag('regression');

    //label para funcionalidades allure
    allure.label('epic', 'NWAdmin - Liquidaciones');
    allure.label('feature', 'Procesos De Liquidacion');
    allure.story('Navegar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion en Procesos de liquidacion.<br/>
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

    //acceder a modulo Procesos de Liquidación
    await page.click('a[href="/Processes/Billing"]'); // Haz clic en el enlace
   
    //veriricar que estamos en la url de Procesos de Liquidación
    await expect(page).toHaveURL('https://console-beta.ationet.com/Processes/Billing');

})