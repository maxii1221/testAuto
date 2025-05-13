import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';



test('Nofificaciones', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Notificaciones');
    allure.story('Navegar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion en notificaciones.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial 
    
    // Generar un valor aleatorio para cada campo
 
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

    //acceder a modulo Notificaciones
    await page.click('a[href="/NotificationsSuscriber"]'); // Haz clic en el enlace
   
    //veriricar que estamos en la url de Notificaciones
    await expect(page).toHaveURL('https://console-beta.ationet.com/NotificationsSuscriber');

})