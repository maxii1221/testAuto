import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Contratos de compañia', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Contratos de Compañia');
    allure.story('Navegar, Crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, creacion y poder editar Contratos de Compañia.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  


    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 100000);
    const companyContractCode = `${randomId}`;
    const fechaISO = new Date().toISOString().split('T')[0].replace(/-/g, '/');
    const companyContractDescription = `Contract${randomId}`

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

    //acceder a modulo contrato de compañia
    await page.click('a[href="/CompanyContracts"]'); // Haz clic en el enlace
    
    //veriricar que estamos en la url de contrato de compañia
    await expect(page).toHaveURL('https://console-beta.ationet.com/CompanyContracts');

    //acceder a crear contrato de compañia
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear contrato de compañia
    await expect(page).toHaveURL('https://console-beta.ationet.com/CompanyContracts/Create');
    
    //completar los campos necesarios

    await page.locator('#token-input-CompanyContract_CompanyId').click();
    await page.locator('#token-input-CompanyContract_CompanyId').type('comp', { delay: 100 });

    await page.locator('.token-input-dropdown-ationet li', { hasText: 'Company PetroMax' }).first().click();


    await page.locator('#CompanyContract_Code').click();
    await page.locator('#CompanyContract_Code').fill(companyContractCode);

    await page.locator('#CompanyContract_Description').click();
    await page.locator('#CompanyContract_Description').fill(companyContractDescription);

    await page.locator('#CompanyContract_StartDate').click();
    await page.locator('#CompanyContract_StartDate').fill(fechaISO);
    
    await page.locator('#CompanyContract_Duration').click();
    await page.locator('#CompanyContract_Duration').fill('10');
    
    await page.locator('#CompanyContract_CurrentAccountMode').selectOption({ label: 'Productos' });

    await page.locator('#CompanyContract_Mode').selectOption({ label: 'Credito' });
    
    await page.locator('#CompanyContract_BalanceMode').selectOption({ label: 'Dispersar' });
    
    await page.locator('#token-input-Fuel').click();
    await page.locator('#token-input-Fuel').type('Prem', { delay: 100 });
    await page.getByText('Premium Diesel', { exact: false }).click();

    //comfirmar creacion
    await page.locator('#save').click();
    
    //verificar que la contrato de compañia se haya creado
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#Code').click();
    await page.locator('#Code').fill(companyContractCode);

    await page.locator('#search').click();

    //verificamos que este nuestro contrato de compañia
    await expect(page.locator('.dtls tr td a').first()).toHaveText(companyContractCode);  // Verificar el texto

    //ingresar a editar contrato de compañia
    await page.getByRole('link', { name: 'Editar' }).click();

    //modificamos campo 
    await page.locator('#CompanyContract_Description').click();
    await page.locator('#CompanyContract_Description').fill(companyContractDescription+'editado');


    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificar que el contrato de compañia se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('#Description').click();
    await page.locator('#Description').fill(companyContractDescription+'editado');

    await page.locator('#search').click();

    //verificamos que se haya guardado el editado
    await expect(page.getByRole('cell', { name: companyContractDescription+'editado', exact: true })).toBeVisible();
})