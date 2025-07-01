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
            await page.locator('#UserName').fill('QAutomation@gmail.com');
        });

        await allure.step('Hacer click en input Contraseña de usuario', async () => {
            await page.locator('#Password').click();
        });

        await allure.step('Escribir en input Contraseña de usuario', async () => {
            await page.locator('#Password').fill('O06DF3LJ');
        });

        await allure.step('Hacer Click en ingresar', async () => {
            await page.locator('#submit').click();
        });
        
        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });

        // await allure.step('hacer click para cambiar rol', async () => {
        //     const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
        //     await rolLink.waitFor({ state: 'visible', timeout: 60000 });
        //     await expect(rolLink).toBeEnabled({ timeout: 60000 });
        //     await rolLink.click(); 
        // });
   

        // await allure.step('hacer click para desplegar lista de roles', async () => {
        //     const showAllBtn = page.getByTitle('Show All Items');
        //     await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
        //     await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
        //     await showAllBtn.click();
        // });

        // await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
        //     await page.getByText('NW Admin - LAB Network').click();
        // });

        await allure.step('acceder a modulo combustibles', async () => {
            await page.getByRole('link', { name: 'Combustibles', exact: true }).click();
        });

        await allure.step('veriricar que estamos en la url de combustibles', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Fuels');
        });    
    });

    await allure.step('Crear nuevo Combustibles',async () => {
        await allure.step('acceder a crear combustibles',async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear combustibles',async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Fuels/Create');
        });

        await allure.step('desplegar y seleccionar sitio',async () => {
            await page.locator('#IdSite').selectOption({ label: 'All In One' });
        });

        await allure.step('desplegar y seleccionar combustible maestro',async () => {
            await page.locator('#IdFuelMaster').selectOption({ label: 'Super' });
        });

        await allure.step('hacer click en input codigo',async () => {
            await page.locator('#Fuel_Code').click();
        });

        await allure.step('escribir en input codigo',async () => {
            await page.locator('#Fuel_Code').fill(fuelCode);
        });

        await allure.step('click en boton guardar',async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtrar nuevo Combustibles',async () => {
        await allure.step('Verificamos que el panel de filtro exista',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 20000 });
        });

        await allure.step('Click en el título, no en todo el panel',async () => {
            const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
            await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
            await panelTitle.click();
        });

        await allure.step('Esperar que se despliegue el contenido',async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
        });

        await allure.step('Click en input codigo de sitio',async () => {
            await page.locator('#codeFilter').click();
        });

        await allure.step('Escribir en input codigo de sitio',async () => {
            await page.locator('#codeFilter').fill(fuelCode);
        });

        await allure.step('click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que exista nuestro combustibles',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(fuelCode);
        });
    });

    await allure.step('Editar nuevo Combustibles',async () => {
        await allure.step('ingresar a editar combustibles',async () => {
            await page.getByRole('link', { name: 'Editar' }).click()
        });

        await allure.step('Click en input codigo',async () => {
            await page.locator('#Fuel_Code').click();
        });

        await allure.step('Escribir en input codigo',async () => {
            await page.locator('#Fuel_Code').fill(fuelCode + 'editado');
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtrar nuevo Combustibles editado',async () => {
        await allure.step('Verificamos que el panel de filtro exista',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 20000 });
        });

        await allure.step('Click en el título, no en todo el panel',async () => {
            const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
            await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
            await panelTitle.click();
        });

        await allure.step('Esperar que se despliegue el contenido',async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
        });

        await allure.step('Click en input codigo de sitio',async () => {
            await page.locator('#codeFilter').click();
        });

        await allure.step('Escribimos en input codigo de sitio',async () => {
            await page.locator('#codeFilter').fill(fuelCode + 'editado');
        });

        await allure.step('Click en Buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('Verificamos que este nuestro combustible editado',async () => {
            await expect(page.getByRole('cell', { name: fuelCode + 'editado', exact: true })).toBeVisible();
        });
    });

})
