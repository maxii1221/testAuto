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

    await allure.step('Navegar y acceder a Reglas',async () => {
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

        await allure.step('acceder a modulo Reglas', async () => {
            await page.click('a[href="/Rules"]');
        });

        await allure.step('veriricar que estamos en la url de Reglas', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Rules');
        });    
    });   

    await allure.step('Crear Nueva Regla' , async () => {

        await allure.step('Click en boton nuevo' , async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en url de crear Reglas' , async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Rules/Create');
        });

        await allure.step('Click en input descripcion' , async () => {
            await page.locator('#Rule_Description').click();
        });

        await allure.step('Escribir en input descripcion' , async () => {
            await page.locator('#Rule_Description').fill(reglaAutomatica);
        });

        await allure.step('Desplegar y selecconar tipo de regla' , async () => {
            await page.locator('#Rule_RuleType').selectOption({ label: 'Solicitudes' });
        });

        await allure.step('Click en checbox vehiculo pin' , async () => {
            await page.locator('#Rule_VehiclePINReprompt').click();
        });

        await allure.step('Desplegar y seleccionar compañia' , async () => {
            await page.locator('#IdCompany').selectOption({ label: 'Atio Lab Flota' });
        });

        await allure.step('Click en boton guardar' , async () => {
            await page.locator('#save').click();
        });

    });

    await allure.step('Filtrar Nueva Regla' , async () => {

        // await allure.step('Aseguramos que el Filtro esté presente' , async () => {
        //     await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        // });

        await allure.step('Click en el filtro, no en todo el panel' , async () => {
            await allure.step('Verificamos que el panel de filtro exista',async () => {
            await page.waitForSelector('#filterPanel', { state: 'visible', timeout: 20000 });
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

        await allure.step('Esperar que se despliegue el contenido' , async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input Regla' , async () => {
            await page.locator('#rule').click();
        });

        await allure.step('Escribir en input Regla' , async () => {
            await page.locator('#rule').fill(reglaAutomatica);
        });

    });

    await allure.step('Editar Nueva Regla' , async () => {

        await allure.step('Click en editar' , async () => {
            await page.getByRole('link', { name: 'Editar' }).first().click();
        });

        await allure.step('Click en input descripcion' , async () => {
            await page.locator('#Rule_Description').click();
        });

        await allure.step('Escribir en input descripcion' , async () => {
            await page.locator('#Rule_Description').fill(reglaAutomatica + 'editado');
        });

        await allure.step('Click en boton guardar' , async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtrar Nueva Regla editada' , async () => {
        await allure.step('Aseguramos que el panel esté presente', async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });      
        })

        await allure.step('Click en el título, no en todo el panel',async () => {
            const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
            await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
            await panelTitle.click();
        });

        await allure.step('Esperar que se despliegue el contenido',async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
        });    

        await allure.step('Click en input Regla' , async () => {
            await page.locator('#rule').click();
        });

        await allure.step('Escribir en input Regla' , async () => {
            await page.locator('#rule').fill(reglaAutomatica + 'editado');
        });

        await allure.step('Click en boton buscar' , async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestra combustibles' , async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(reglaAutomatica + 'editado');
        });
    });

    await allure.step('Elminar Nueva Regla' , async () => {

        await allure.step('Click en eliminar regla' , async () => {
            await page.getByRole('link', { name: 'Eliminar' }).first().click();
        });

        await allure.step('Click en Ok' , async () => {
            await page.getByRole('button', { name: 'Ok' }).click();
        });

    });
    
})