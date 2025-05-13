import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Combustibles', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Combustibles');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de Combustibles.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial         

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 10000000000);

    const fuelCode = `${randomId}`;

    await allure.step('Navegar y acceder a Combustibles',async () => {
        await allure.step('Acceder a la url de login', async () => {
            await page.goto(urlBETA!);
        });

        await allure.step('Hacer click en input nombre de usuario', async () => {
            await page.locator('#UserName').click();
        });

        await allure.step('Escribir en input nombre de usuario', async () => {
            await page.locator('#UserName').fill('facuna@atioinc.com');
        });

        await allure.step('Hacer click en input Contraseña de usuario', async () => {
            await page.locator('#Password').click();
        });

        await allure.step('Escribir en input Contraseña de usuario', async () => {
            await page.locator('#Password').fill('pipo33');
        });

        await allure.step('Hacer Click en ingresar', async () => {
            await page.locator('#submit').click();
        });
        
        await allure.step('hacer click para cambiar rol', async () => {
            const primerLink = page.locator('p >> a').first();
            await primerLink.click();
        });
    
        await allure.step('hacer click para desplegar lista de roles', async () => {
            await page.getByTitle('Show All Items').click();
        });

        await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
            await page.getByText('NW Admin - LAB QA').click();
        });

        await allure.step('acceder a modulo combustibles', async () => {
            await page.getByRole('link', { name: 'Combustibles', exact: true }).click();
        });

        await allure.step('veriricar que estamos en la url de combustibles', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/Fuels');
        });    
    });

    await allure.step('Crear nueva Combustibles',async () => {

            //acceder a crear combustibles
    await page.getByRole('button', { name: 'Nuevo' }).first().click();
    
    //veriricar que estamos en enlase de crear combustibles
    await expect(page).toHaveURL('https://console-beta.ationet.com/Fuels/Create');
    
    //completar los campos necesarios
    await page.locator('#IdSite').selectOption({ label: 'custom1Pruebaaa' });

    await page.locator('#IdFuelMaster').selectOption({ label: 'TEST' });

    await page.locator('#Fuel_Code').click();
    await page.locator('#Fuel_Code').fill(fuelCode);
  
    //comfirmar creacion
    await page.locator('#save').click();
    });

    await allure.step('Filtrar nueva Combustibles',async () => {
            // Aseguramos que el panel esté presente
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
   
    await page.locator('#codeFilter').click();
    await page.locator('#codeFilter').fill(fuelCode);

    await page.locator('#search').click();

    //verificamos que este nuestra combustibles
    await expect(page.locator('.dtls tr td a').first()).toHaveText(fuelCode);  // Verificar el texto
    });

    await allure.step('Editar nueva Combustibles',async () => {
            //ingresar a editar combustibles
    await page.getByRole('link', { name: 'Editar' }).click();

    //modificamos campo 
    await page.locator('#Fuel_Code').click();
    await page.locator('#Fuel_Code').fill(fuelCode + 'editado');

    //comfirmamos edicion
    await page.locator('#save').click();
    });

    await allure.step('Filtrar nueva Combustibles editada',async () => {
            //verificar que la combustibles se haya editado
    //abrimos filtro
    await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });

    // Click en el título, no en todo el panel
    await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });

    // Esperar que se despliegue el contenido
    await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });

    await page.locator('#codeFilter').click();
    await page.locator('#codeFilter').fill(fuelCode + 'editado');

    await page.locator('#search').click();

    //verificamos que se haya guardado el editado
    await expect(page.getByRole('cell', { name: fuelCode + 'editado', exact: true })).toBeVisible();
    });

})
