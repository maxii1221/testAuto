import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';



test('Comercios', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Comercios');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, creacion y edicion de Comercios.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial         

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 10000000);
    const idContribuyenteComercio = `${randomId}`;
    const nameComercio= `$Comercio${randomId}`;
    const codeComercio= `${randomId}`;

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

    //acceder a modulo comercio
    await page.click('a[href="/Merchants"]'); // Haz clic en el enlace
    
    //veriricar que estamos en la url de comercio
    await expect(page).toHaveURL('https://console-beta.ationet.com/Merchants');

    //acceder a crear comercio
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear comercio
    await expect(page).toHaveURL('https://console-beta.ationet.com/Merchants/Create');
    
    //completar los campos necesarios
    await page.locator('#Merchant_TaxPayerId').click();
    await page.locator('#Merchant_TaxPayerId').fill(idContribuyenteComercio);

    await page.locator('#Merchant_Name').click();
    await page.locator('#Merchant_Name').fill(nameComercio);
    
    await page.locator('#NetworksMerchant_MerchantCode').click();
    await page.locator('#NetworksMerchant_MerchantCode').fill(codeComercio);
    
    await page.locator('#Merchant_Street1').click();
    await page.locator('#Merchant_Street1').fill('chacabubo661');
    
    await page.locator('#Merchant_City').click();
    await page.locator('#Merchant_City').fill('san isidro');
    
    await page.locator('#IdCountry').selectOption({ label: 'Argentina' });
    
    await page.locator('#IdState').selectOption({ label: 'Buenos Aires' });

    await page.locator('#NetworksMerchant_ContactName').click();
    await page.locator('#NetworksMerchant_ContactName').fill('soy una prueba');

    await page.locator('#NetworksMerchant_ContactEmail').click();
    await page.locator('#NetworksMerchant_ContactEmail').fill('pruebitaauto@ationinc.com');

    await page.locator('#NetworksMerchant_PhoneNumber1').click();
    await page.locator('#NetworksMerchant_PhoneNumber1').fill('1122445577');

    //comfirmar creacion
    await page.locator('#save').click();
    
    //verificar que la comercio se haya creado
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#name').click();
    await page.locator('#namee').fill(nameComercio);

    await page.locator('#search').click();

    //verificamos que este nuestro comercio
    await expect(page.locator('.dtls tr td a').first()).toHaveText(nameComercio);  // Verificar el texto

    //ingresar a editar comercio
    await page.getByRole('link', { name: 'Editar' }).click();

    //modificamos campo 
    await page.locator('#Merchant_Name').click();
    await page.locator('#Merchant_Name').fill(nameComercio + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificar que el comercio se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('#name').click();
    await page.locator('#name').fill(nameComercio + 'editado');

    await page.locator('#search').click();

    await expect(page.getByRole('cell', { name: nameComercio + 'editado', exact: true })).toBeVisible();

})