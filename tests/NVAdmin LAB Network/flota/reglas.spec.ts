import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Reglas', async ({ page }, testInfo) => {
    
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
    allure.label('feature', 'Reglas');
    allure.story('Navegar, Crear, editar y eliminar regla');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso completo de creación, edición y eliminación de una regla.s
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial

    // Generar un valor aleatorio para cada campo
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); // Resta un día
    const fechaISO = hoy.toISOString().split('T')[0].replace(/-/g, '/');

    const randomId = Math.floor(Math.random() * 10000);
    const reglaAutomatica = `regla auto ${randomId}`;

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

    //acceder a modulo Reglas
    await page.click('a[href="/Rules"]'); // Haz clic en el enlace

    //veriricar que estamos en la url de Reglas
    await expect(page).toHaveURL('https://console-beta.ationet.com/Rules');

    //acceder a crear Reglas
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear Reglas
    await expect(page).toHaveURL('https://console-beta.ationet.com/Rules/Create');
    
    //completar los campos necesarios
    await page.locator('#Rule_Description').click();
    await page.locator('#Rule_Description').fill(reglaAutomatica);

    await page.locator('#Rule_RuleType').selectOption({ label: 'Solicitudes' });

    await page.locator('#Rule_VehiclePINReprompt').click();
    
    await page.locator('#IdCompany').selectOption({ label: 'Wano' });

    //comfirmar creacion
    await page.locator('#save').click();
    
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#rule').click();
    await page.locator('#rule').fill(reglaAutomatica);

    await page.locator('#search').click();

    //verificamos que este nuestra combustibles
    await expect(page.locator('.dtls tr td a').first()).toHaveText(reglaAutomatica);  // Verificar el texto

    //ingresar a editar combustibles
    await page.getByRole('link', { name: 'Editar' }).first().click();
    

    //modificamos campo 
    await page.locator('#Rule_Description').click();
    await page.locator('#Rule_Description').fill(reglaAutomatica + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();

    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#rule').click();
    await page.locator('#rule').fill(reglaAutomatica + 'editado');

    await page.locator('#search').click();

    //verificamos que este nuestra combustibles
    await expect(page.locator('.dtls tr td a').first()).toHaveText(reglaAutomatica + 'editado');  // Verificar el texto

    //ingresar a editar combustibles
    await page.getByRole('link', { name: 'Eliminar' }).first().click();

    //borrar regla
    await page.getByRole('button', { name: 'Ok' }).click();
})