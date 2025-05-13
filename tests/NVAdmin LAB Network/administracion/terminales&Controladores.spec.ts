import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';



test('Terminal y controladores', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Terminal & Controladores');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de Terminal & Controladores.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial 

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 10000);
    const terminalDescription = `${randomId}`;
    const terminalCode = `${randomId}`;

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

    //acceder a modulo terminales / controladores

    await page.locator('#MenuItem_Administration').getByRole('link', { name: 'Terminales / Controladores' }).click();

    //veriricar que estamos en la url de terminales / controladores
    await expect(page).toHaveURL('https://console-beta.ationet.com/Terminals');

    //acceder a crear terminales / controladores
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear terminales / controladores
    await expect(page).toHaveURL('https://console-beta.ationet.com/Terminals/Create');
    
    //completar los campos necesarios
    await page.locator('#IdMerchant').selectOption({ label: 'fdbdf' });

    await page.locator('#IdSite').selectOption({ label: 'Boca' });
    
    await page.locator('#IdTerminalType').selectOption({ label: 'VF-Commander' });

    await page.locator('#IdTerminalTypeModel').selectOption({ label: 'VF-Commander' });
    
    await page.locator('#Terminal_Code').click();
    await page.locator('#Terminal_Code').fill(terminalCode);

    await page.locator('#Terminal_Description').click();
    await page.locator('#Terminal_Description').fill(terminalDescription);
 
    //comfirmar creacion
    await page.locator('#save').click();
    
    //verificar que la terminales / controladores se haya creado
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('label[for="Description"]').click();
    await page.locator('label[for="Description"]').fill(terminalDescription);

    await page.locator('#search').click();

    //verificamos que este nuestro terminales / controladores
    await expect(page.locator('.dtls tr td a').first()).toHaveText('FOK'+ terminalDescription);  // Verificar el texto

    //ingresar a editar terminales / controladores
    await page.getByRole('link', { name: 'Edit' }).click();
    
    //modificamos campo 
    await page.locator('#Terminal_Description').click();
    await page.locator('#Terminal_Description').fill(terminalDescription + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificar que el terminales / controladores se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('label[for="Description"]').click();
    await page.locator('label[for="Description"]').fill(terminalDescription + 'editado');

    await page.locator('#search').click();

    //verificamos que se haya guardado el editado
    await expect(page.getByRole('cell', { name: terminalDescription + 'editado', exact: true })).toBeVisible();

})