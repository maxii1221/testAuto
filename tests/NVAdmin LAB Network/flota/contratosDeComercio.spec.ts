import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Contratos de Comercio', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Contratos de Comercios');
    allure.story('Navegar, Crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y poder editar Contratos de comercio.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    // Generar un valor aleatorio para cada campo
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); // Resta un día
    const fechaISO = hoy.toISOString().split('T')[0].replace(/-/g, '/');

    const randomId = Math.floor(Math.random() * 10000);
    const codeContratoDeComercio = `${randomId}`;
    const descContratoDeComercio = `des${randomId}`;

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
    await page.click('a[href="/MerchantsContracts"]'); // Haz clic en el enlace

    //veriricar que estamos en la url de Reglas
    await expect(page).toHaveURL('https://console-beta.ationet.com/MerchantsContracts');

    //acceder a crear Reglas
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear Reglas
    await expect(page).toHaveURL('https://console-beta.ationet.com/MerchantsContracts/Create');
    
    //completar los campos necesarios
    await page.locator('#token-input-MerchantsContract_MerchantId').click();
    await page.locator('#token-input-MerchantsContract_MerchantId').type('Lab', { delay: 100 });
    await page.getByText('Laboratorio Fisu', { exact: false }).click();

    await page.locator('#MerchantsContract_Code').click();
    await page.locator('#MerchantsContract_Code').fill(codeContratoDeComercio);

    await page.locator('#MerchantsContract_Description').click();
    await page.locator('#MerchantsContract_Description').fill(descContratoDeComercio);
    
    await page.locator('#MerchantsContract_StartDate').click();
    await page.locator('#MerchantsContract_StartDate').fill(fechaISO);

    await page.locator('#MerchantsContract_Duration').click();
    await page.locator('#MerchantsContract_Duration').fill('1');

    await page.locator('#MerchantsContract_CurrentAccountMode').selectOption({ label: 'Importe' });

    await page.locator('#MerchantsContract_CurrencyId').selectOption({ label: 'PAB4' });

    await page.locator('#token-input-Site').click();
    await page.locator('#token-input-Site').type('Lab', { delay: 100 });
    //esta bien que falle porque no laboratorio ya esta asignado a otro contrato
    await page.getByText('Laboratorio', { exact: false }).click();
    
    //comfirmar creacion
    await page.locator('#save').click();
    
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#description').click();
    await page.locator('#description').fill(descContratoDeComercio);

    await page.locator('#search').click();

    //verificamos que este nuestra combustibles
    await expect(page.locator('.dtls tr td a').first()).toHaveText(descContratoDeComercio);  // Verificar el texto

    //ingresar a editar combustibles
    await page.getByRole('link', { name: 'Editar' }).first().click();
    

    //modificamos campo 
    await page.locator('#MerchantsContract_Description').click();
    await page.locator('#MerchantsContract_Description').fill(descContratoDeComercio + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();

    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#description').click();
    await page.locator('#description').fill(descContratoDeComercio + 'editado');

    await page.locator('#search').click();

    //verificamos que este nuestra combustibles
    await expect(page.locator('.dtls tr td a').first()).toHaveText(descContratoDeComercio + 'editado');  // Verificar el texto

})