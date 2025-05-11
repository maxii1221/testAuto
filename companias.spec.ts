import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Compañias', async ({ page }, testInfo) => {
    //varibles:
    const urlBETA = testInfo.project.use?.baseURL; 
    
    // Allure metadata

    //esto aparece en suite para ordenar mejor
    allure.suite('NWAmin');
    allure.subSuite('administracion');

    //usuario que ejecuto la automatizacion
    allure.owner('Maximiliano');
    allure.tag('regression');

    //label para funcionalidades allure
    allure.label('epic', 'NWAmin - Administración');
    allure.label('feature', 'Compañias');
    allure.story('Navegar, Crear, editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso completo de creación, edición de una compañia.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial
    
    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 1000000);
    const companyName = `Compañia Automatica ${randomId}`;
    const taxPayerId = `00000${randomId}`;
    const companyCode = `00000${randomId}`;

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
    await page.getByText('NVAdmin - LAB QA').click();   

    //acceder a modulo compañias
    await page.getByRole('link', { name: 'Compañias', exact: true }).click();
   
    //veriricar que estamos en la url de compañia
    await expect(page).toHaveURL('https://console-beta.ationet.com/Companies');

    //acceder a crear compania
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear compañia
    await expect(page).toHaveURL('https://console-beta.ationet.com/Companies/Create');
    
    //completar los campos necesarios
    await page.locator('#Company_TaxPayerId').click();
    await page.locator('#Company_TaxPayerId').fill(taxPayerId);

    await page.locator('#NetworksCompany_CompanyCode').click();
    await page.locator('#NetworksCompany_CompanyCode').fill(companyCode);

    await page.locator('#Company_Name').click();
    await page.locator('#Company_Name').fill(companyName);
    
    await page.locator('#IdIndustry').selectOption({ label: 'Gas y Petróleo' });

    await page.locator('#Company_Street1').click();
    await page.locator('#Company_Street1').fill('Chacabuco 661');
    
    await page.locator('#Company_City').click();
    await page.locator('#Company_City').fill('San Isidro');

    await page.locator('#IdCountry').selectOption({ label: 'Argentina' });
    
    await page.locator('#IdState').selectOption({ label: 'Buenos Aires' });    

    await page.locator('#NetworksCompany_ContactName').click();
    await page.locator('#NetworksCompany_ContactName').fill('Maxi Morales');

    await page.locator('#NetworksCompany_ContactEmail').click();
    await page.locator('#NetworksCompany_ContactEmail').fill('mmorales@atioinc.com');

    await page.locator('#NetworksCompany_PhoneNumber1').click();
    await page.locator('#NetworksCompany_PhoneNumber1').fill('1125115114');
   
    //comfirmar creacion
    await page.locator('#save').click();

    //verificar que la compania se haya creado
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('label[for="name"]').click();
    await page.locator('label[for="name"]').fill(companyName);

    await page.locator('#search').click();

    //verificamos que este nuestra compañia
    await expect(page.locator('.dtls tr td a').first()).toHaveText(companyName);  // Verificar el texto

    //ingresar a editar compañia
    await page.getByRole('link', { name: 'Editar' }).click();

    //modificamos campo 
    await page.locator('#Company_Name').click();
    await page.locator('#Company_Name').fill(companyName + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificar que la compania se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('label[for="name"]').click();
    await page.locator('label[for="name"]').fill(companyName + 'editado');

    await page.locator('#search').click();

    //verificamos que se haya guardado el editado
    await expect(page.getByRole('cell', { name: companyName + 'editado', exact: true })).toBeVisible();

})