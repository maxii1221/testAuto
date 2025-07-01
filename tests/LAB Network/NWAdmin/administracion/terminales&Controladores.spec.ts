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

    await allure.step('Navegar y acceder a terminal y controladores',async () => {
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

        await allure.step('acceder a modulo terminales / controladores', async () => {
            await page.locator('#MenuItem_Administration').getByRole('link', { name: 'Terminales / Controladores' }).click();
        });

        await allure.step('veriricar que estamos en la url de terminales / controladores', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Terminals');
        });    
    }); ''

    await allure.step('Crear nuevo terminal y controladores',async () => {

        await allure.step('Click en boton nuevo',async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear terminales / controladores',async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Terminals/Create');
        });

        await allure.step('desplegamos lista y seleccionamos comercio',async () => {
            await page.locator('#IdMerchant').selectOption({ label: 'All In One - Laboratorio' });
        });

        await allure.step('desplegamos lista y seleccionamos sitio',async () => {
            await page.locator('#IdSite').selectOption({ label: '1' });
        });

        await allure.step('desplegamos lista y seleccionamos Terminal / Tipo controlador',async () => {
            await page.locator('#IdTerminalType').selectOption({ label: 'VF-Commander' });
        });

        await allure.step('desplegamos lista y seleccionamos Terminal / modelo controlador',async () => {
            await page.locator('#IdTerminalTypeModel').selectOption({ label: 'VF-Commander' });
        });

        await allure.step('Click en input codigo',async () => {
            await page.locator('#Terminal_Code').click();
        });
            
        await allure.step('Escribir en input codigo',async () => {
            await page.locator('#Terminal_Code').fill(terminalCode);
        });

        await allure.step('Click en input descripcion',async () => {
            await page.locator('#Terminal_Description').click();
        });

        await allure.step('Escribir en input descripcion',async () => {
            await page.locator('#Terminal_Description').fill(terminalDescription);
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });

    });

    await allure.step('filtrar nuevo terminal y controladores',async () => {
        await allure.step('Aseguramos que el filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el filtro, no en todo el panel',async () => {
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
        });({ timeout: 60000 });
        });

        await allure.step('Esperar que se despliegue el filtro',async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input descripcion',async () => {
            await page.locator('label[for="Description"]').click();
        });

        await allure.step('Escribir en input descripcion',async () => {
            await page.locator('label[for="Description"]').fill(terminalDescription);
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestro terminales / controladores',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText('0T8'+ terminalDescription);
        });

    });

    await allure.step('editar nuevo terminal y controladores',async () => {
        
        await allure.step('Click en editar',async () => {
            await page.getByRole('link', { name: 'Edit' }).click();
        });

        await allure.step('Click en input descripcion',async () => {
            await page.locator('#Terminal_Description').click();
        });

        await allure.step('Escribir en input descripcion',async () => {
            await page.locator('#Terminal_Description').fill(terminalDescription + 'editado');
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('filtrar nuevo terminal y controladores editado',async () => {
        await allure.step('Aseguramos que el filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el filtro, no en todo el panel',async () => {
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
        });({ timeout: 60000 });
        });

        await allure.step('Esperar que se despliegue el filtro',async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input descripcion',async () => {
            await page.locator('label[for="Description"]').click();
        });

        await allure.step('Escribir en input descripcion',async () => {
            await page.locator('label[for="Description"]').fill(terminalDescription + 'editado');
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        // await allure.step('verificamos que este nuestro terminales / controladores',async () => {
        //     await expect(page.locator('.dtls tr td a').first()).toHaveText('FOK'+ terminalDescription + 'editado');
        // });

    });

})
