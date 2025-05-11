import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Transacciones Excepciones', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Excepciones');
    allure.story('Navegar, Ver detalles');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, ver detalles de excepciones.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

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
    await page.getByText('NW Company Admin - FORMULA1').click();

    //acceder a modulo contrato de Transacciones Exepciones
    await page.click('a[href="/TransactionsExceptions"]'); // Haz clic en el enlace

    // Buscar el primer enlace de código de autorización dentro del tbody
    await page.locator('tr >> td:nth-child(3) >> a').first().click();

    //presionamos ok en la vista detalles para volver a autorizaciones pendientes
    await page.getByRole('button', { name: 'Ok' }).click();

    //veriricar que estamos en la url de contrato de Transacciones Exepciones
    await expect(page).toHaveURL('https://console-beta.ationet.com/TransactionsExceptions');
})