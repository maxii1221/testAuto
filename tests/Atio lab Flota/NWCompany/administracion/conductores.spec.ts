import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Conductores', async ({ page }, testInfo) => {
    
    //varibles:
    const urlBETA = testInfo.project.use?.baseURL;
    
    // Allure metadata

    //esto aparece en suite para ordenar mejor
    allure.suite('NWCompany');
    allure.subSuite('Administracion');

    //usuario que ejecuto la automatizacion
    allure.owner('Maximiliano');
    allure.tag('regression');

    //label para funcionalidades allure
    allure.label('epic', 'NWCompany - Administracion');
    allure.label('feature', 'Conductores');
    allure.story('Navegar, Crear, editar y eliminar Conductores');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso completo de creación, edición y eliminación de un Conductor.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial

    // Generar un valor aleatorio para cada campo
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); // Resta un día
    const fechaISO = hoy.toISOString().split('T')[0].replace(/-/g, '/');

    const randomId = Math.floor(Math.random() * 10000);
    const ConductorAutomatica = `driver${randomId}`;

    await allure.step('Navegar y acceder a Conductores',async () => {
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
            await page.locator('#Password').fill('SVYTY6KA');
        });

        await allure.step('Hacer Click en ingresar', async () => {
            await page.locator('#submit').click();
        });
        
        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });

        await allure.step('hacer click para cambiar rol', async () => {
            const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
            await rolLink.waitFor({ state: 'visible', timeout: 60000 });
            await expect(rolLink).toBeEnabled({ timeout: 60000 });
            await rolLink.click(); 
        });
    
        await allure.step('hacer click para desplegar lista de roles', async () => {
            const showAllBtn = page.getByTitle('Show All Items');
            await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
            await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
            await showAllBtn.click();
        });

        await allure.step('hacer click en rol NW Company - Atio Lab Flota', async () => {
            await page.getByText('NW Company Admin - Atio Lab').click();
        });

        await allure.step('acceder a modulo Conductores', async () => {
            await page.click('a[href="/Drivers"]');
        });

        await allure.step('veriricar que estamos en la url de Conductores', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Drivers');
        });    
    });   

    await allure.step('Crear Nuevo Conductor' , async () => {

        await allure.step('Click en boton nuevo' , async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        // await allure.step('veriricar que estamos en url de crear Reglas' , async () => {
        //     await expect(page).toHaveURL('https://console.ationet.com/Drivers/Create');
        // });

        await allure.step('Click en input Codigo' , async () => {
            await page.locator('#Driver_Code').click();
        });

        await allure.step('Escribir en input Codigo' , async () => {
            await page.locator('#Driver_Code').fill(ConductorAutomatica);
        });

        await allure.step('Click en input apellido' , async () => {
            await page.locator('#Driver_LastName').click();
        });

        await allure.step('Escribir en input apellido' , async () => {
            await page.locator('#Driver_LastName').fill('Moralito');
        });

        await allure.step('Click en input nombre' , async () => {
            await page.locator('#Driver_FirstName').click();
        });

        await allure.step('Escribir en input nombre' , async () => {
            await page.locator('#Driver_FirstName').fill('Max');  
        });

        await allure.step('Click en boton guardar' , async () => {
            await page.locator('#save').click();
        });  
    });

    await allure.step('Filtrar Nueva Conductor' , async () => {

        await allure.step('Aseguramos que el Filtro esté presente' , async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el filtro, no en todo el panel' , async () => {
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

        await allure.step('Esperar que se despliegue el contenido' , async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input codigo' , async () => {
            await page.locator('label[for="code"]').click(); 
        });

        await allure.step('Escribir en input codigo' , async () => {
            await page.locator('label[for="code"]').fill(ConductorAutomatica);
        });

        await allure.step('Click en boton buscar' , async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestra combustibles' , async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(ConductorAutomatica);
        });

    });

    await allure.step('Editar Nueva Conductor' , async () => {

        await allure.step('Click en editar' , async () => {
            await page.getByRole('link', { name: 'Editar' }).first().click();
        });

        await allure.step('Click en input descripcion' , async () => {
            await page.locator('#Driver_Code').click();
        });

        await allure.step('Escribir en input descripcion' , async () => {
            await page.locator('#Driver_Code').fill(ConductorAutomatica + 'editado');
        });

        await allure.step('Click en boton guardar' , async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtrar Nueva Conductor editada' , async () => {
        await allure.step('Aseguramos que el Filtro esté presente' , async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el filtro, no en todo el panel' , async () => {
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

        await allure.step('Esperar que se despliegue el contenido' , async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input codigo' , async () => {
            await page.locator('label[for="code"]').click();
        });

        await allure.step('Escribir en input codigo' , async () => {
            await page.locator('label[for="code"]').fill(ConductorAutomatica + 'editado');
        });

        await allure.step('Click en boton buscar' , async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestro conductor' , async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(ConductorAutomatica + 'editado');
        });
    });

    await allure.step('Elminar Nueva Conductor' , async () => {

        await allure.step('Click en eliminar Combustible' , async () => {
            await page.getByRole('link', { name: 'Eliminar' }).first().click();
        });

        await allure.step('Click en Ok' , async () => {
            await page.getByRole('button', { name: 'Ok' }).click();
        });

    });
})