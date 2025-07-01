import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { format } from 'date-fns';


test('Autorizaciones Pendientes', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Autorizaciones Pendientes');
    allure.story('Navegar y acceder a detalles');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion y acceder a detalles en autorizaciones pendientes.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    await allure.step('Navegar y acceder a Autorizaciopnes pendientes',async () => {
        await allure.step('Acceder a la url de login', async () => {
            await page.goto(urlBETA!);
        });

        await allure.step('Hacer click en input nombre de usuario', async () => {
            await page.locator('#UserName').click();
        });

        await allure.step('Escribir en input nombre de usuario', async () => {
            await page.locator('#UserName').fill('QAutomation3@gmail.com');
        });

        await allure.step('Hacer click en input Contraseña de usuario', async () => {
            await page.locator('#Password').click();
        });

        await allure.step('Escribir en input Contraseña de usuario', async () => {
            await page.locator('#Password').fill('73GOJSWV');
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

        // await allure.step('hacer click en rol NWAdmin - Primax Peru', async () => {
        //     await page.getByText('NW Admin - Primax Peru').click();
        // });

        await allure.step('acceder a modulo Autorizaciones Pendientes', async () => {
            await page.click('a[href="/TransactionsOutstandingAuthorizations"]');
        });

        await allure.step('veriricar que estamos en la url de Procesos de Liquidación', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/TransactionsOutstandingAuthorizations');
        });    
    });    

    await allure.step('Verificar cantidad de autorizaciones pendientes con fecha actual', async () => {
            const today = format(new Date(), 'yyyy/MM/dd');

            // Selecciona todas las filas de la tabla
            const rows = await page.$$('table tbody tr');

            let countToday = 0;

            await allure.step('Conteo de cantidad de autorizaciones pendientes hoy', async () => {
                for (const row of rows) {
                const dateCell = await row.$('td:nth-child(4)'); 
                const dateText = await dateCell?.innerText();

                if (dateText?.trim() === today) {
                    countToday++;
                }
            }
            })

            const mensaje = countToday > 10 
                ? `Hay más de 20 autorizaciones pendientes hoy (${today})` 
                : `Cantidad de autorizaciones pendientes hoy (${today}): ${countToday}`;

            await allure.step('Resultado de cantidad de autorizaciones pendientes hoy', async () => {
                // Agregar mensaje como adjunto en Allure
                await allure.attachment('Resumen del día', mensaje, 'text/plain');
            })

    });

    await allure.step('Ingresar al detalle de autorizaciones pendientes' , async () => {

        await allure.step('Click para ingresar a detalle de autorizaciones pendientes' , async () => {
            await page.locator('tbody tr td:nth-child(3) a').first().click();
        });

        await allure.step('Click en boton ok' , async () => {
            await page.getByRole('button', { name: 'Ok' }).click();
        });

        await allure.step('Verificamos que volvimos a la url de autorizaciones pendientes' , async () => {
            await expect(page).toHaveURL('https://console.ationet.com/TransactionsOutstandingAuthorizations');
        });
    });

})