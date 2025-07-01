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
    Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de Identificadores.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial 

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 100000000000);
    const idEtiqueta = `${randomId}`;
    const idCorreo= `${randomId}@atioinc.com`;

    await allure.step('Navegar y acceder a identificadores',async () => {
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

        await allure.step('acceder a modulo identificadores', async () => {
            await page.click('a[href="/Identifications"]')
        });

        await allure.step('veriricar que estamos en la url de identificadores', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Identifications');
        });    
    });

    await allure.step('Crear nuevo identificador',async () => {

        await allure.step('Click en boton nuevo',async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear identificadores',async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Identifications/Create');
        });

        await allure.step('Desplegamos lista y seleccionamos tipo de identificador',async () => {
            await page.locator('#Identification_Type').selectOption({ label: 'Tarjeta' });
        });

        await allure.step('Desplegamos lista y seleccionamos modelo de identificador',async () => {
            await page.locator('#IdIdentificationsTypesModel').selectOption({ label: 'Tarjeta con PIN' });
        });

        await allure.step('Desplegamos lista y seleccionamos uso',async () => {
            await page.locator('#UseType').selectOption({ label: 'Flota' });
        });

        await allure.step('Desplegamos lista y seleccionamos programa',async () => {
            await page.locator('#IdProgram').selectOption({ label: 'Clasico' });
        });

        await allure.step('Click en input tarjeta',async () => {
            await page.locator('#Identification_Label').click();
        });

        await allure.step('Escribir en input tarjeta',async () => {
            await page.locator('#Identification_Label').fill(idEtiqueta);
        });

        await allure.step('Click en input track',async () => {
            await page.locator('#Identification_TrackNumber').click()
        });

        await allure.step('Escribir en input track',async () => {
            await page.locator('#Identification_TrackNumber').fill(idEtiqueta+'='+idEtiqueta);
        });

        await allure.step('click en input fecha de espiracion',async () => {
            await page.locator('#Identification_ExpirationDate').click();
        });

        await allure.step('Escribir en input fecha de espiracion',async () => {
            await page.locator('#Identification_ExpirationDate').fill('2045/04/22');
        });

        await allure.step('Click en input pan', async () => {
            await page.getByRole('textbox', { name: 'PAN: *' }).click();
        });

        await allure.step('Escribir en input pan', async () => {
            await page.getByRole('textbox', { name: 'PAN: *' }).fill(idEtiqueta);
        });

        await allure.step('Click en input correo',async () => {
            await page.getByRole('textbox', { name: 'Correo: *' }).click();
        });

        await allure.step('Escribir en input correo',async () => {
            await page.locator('#Identification_Email').fill(idCorreo);
        });

        await allure.step('Click en input pin',async () => {
            await page.getByRole('textbox', { name: 'PIN: *' }).click();
        });

        await allure.step('Escribir en input pin',async () => {
            await page.getByRole('textbox', { name: 'PIN: *' }).fill('1234');
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });

    });

    await allure.step('Filtrar nuevo identificador',async () => {

        await allure.step('Aseguramos que el panel filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el título filtro',async () => {
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

        await allure.step('Click en input etiqueta',async () => {
            await page.locator('#label').click();
        });

        await allure.step('Escribir en input etiqueta',async () => {
            await page.locator('#label').fill(idEtiqueta);
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('Nos aseguramos que este presente nuevo identificador',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(idEtiqueta);
        });

    });

    await allure.step('Editar nuevo identificador',async () => {
        await allure.step('Click en editar identificador',async () => {
            await page.getByRole('link', { name: 'Editar' }).click();
        })

        await allure.step('click en track',async () => {
            await page.locator('#Identification_TrackNumber').click();
        })

        await allure.step('escribir track',async () => {
            await page.locator('#Identification_TrackNumber').fill(idEtiqueta+'='+idEtiqueta + 'editado');
        })

        await allure.step('click en guardar',async () => {
            await page.locator('#save').click();
        })

    });

    await allure.step('Filtrar nuevo Comercio editado',async () => {

        await allure.step('Aseguramos que el panel filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el título filtro',async () => {
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

        await allure.step('Click en input etiqueta',async () => {
            await page.locator('#label').click();
        });

        await allure.step('Escribir en input etiqueta',async () => {
            await page.locator('#label').fill(idEtiqueta);
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('entrar al detalle del id creado',async () => {
            await page.getByRole('link', { name: idEtiqueta }).click();
        });
    });

})




