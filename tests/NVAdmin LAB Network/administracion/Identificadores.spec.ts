import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';



test('Identificadores', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Identificadores');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    <b>Objetivo:</b> Este test automatiza el proceso de navegacion, creacion y edicion de Identificadores.<br/>
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial 

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 100000000000);
    const idEtiqueta = `${randomId}`;
    const idCorreo= `${randomId}@atioinc.com`;

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

    //acceder a modulo Identificadores
    await page.click('a[href="/Identifications"]'); // Haz clic en el enlace
    

    //veriricar que estamos en la url de Identificadores
    await expect(page).toHaveURL('https://console-beta.ationet.com/Identifications');

    //acceder a crear Identificadores
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear identificadores
    await expect(page).toHaveURL('https://console-beta.ationet.com/Identifications/Create');
    
    //completar los campos necesarios
    await page.locator('#Identification_Type').selectOption({ label: 'Tarjeta' });

    await page.locator('#IdIdentificationsTypesModel').selectOption({ label: 'PRUEBA' });
    
    await page.locator('#UseType').selectOption({ label: 'Flota' });

    await page.locator('#IdProgram').selectOption({ label: 'Classic' });
    
    await page.locator('#Identification_Label').click();
    await page.locator('#Identification_Label').fill(idEtiqueta);

    await page.locator('#Identification_TrackNumber').click();
    await page.locator('#Identification_TrackNumber').fill(idEtiqueta+'='+idEtiqueta);
 
    await page.locator('#Identification_ExpirationDate').click();
    await page.locator('#Identification_ExpirationDate').fill('2045/04/22');
    
    await page.locator('#Identification_Email').click();
    await page.locator('#Identification_Email').fill(idCorreo);

    //comfirmar creacion
    await page.locator('#save').click();
    
    //verificar que la identificadores se haya creado
    //abrimos filtro
    // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#label').click();
    await page.locator('#label').fill(idEtiqueta);

    await page.locator('#search').click();

    //verificamos que este nuestro identificadores
    await expect(page.locator('.dtls tr td a').first()).toHaveText(idEtiqueta);  // Verificar el texto

    //ingresar a editar identificadores
    await page.getByRole('link', { name: 'Editar' }).click();

    //modificamos campo 
    await page.locator('#Identification_TrackNumber').click();
    await page.locator('#Identification_TrackNumber').fill(idEtiqueta+'='+idEtiqueta + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    
    //verificar que el identificadores se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('#label').click();
    await page.locator('#label').fill(idEtiqueta);

    await page.locator('#search').click();

    //entrar al detalle del id creado
    await page.getByRole('link', { name: idEtiqueta }).click();

})