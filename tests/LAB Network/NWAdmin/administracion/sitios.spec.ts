import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Sitios', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Sitios');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de Sitios.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial 

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 1000000);
    const siteShortName = `Sitio ${randomId}`;
    const siteCode = `00000${randomId}`;

    await allure.step('Navegar y acceder a Sitios', async () => {

        await allure.step('Acceder a la url de login', async () => {
            //acceder a pagina
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
        
        await allure.step('Ingresar al modulo sitios', async () => {
            await page.locator('#MenuItem_Administration').getByRole('link', { name: 'Sitios' }).click();
        });

        await allure.step('verificar que estamos en la url de sitios', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Sites');
        });
    }); 

    await allure.step('Crear Nuevo Sitio', async () => {
        
        await allure.step('acceder a crear Sitios', async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear Sitios', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Sites/Create');
        });

        await allure.step('Desplegar lista y seleccionar comercio', async () => {
            await page.locator('#IdMerchant').selectOption({ label: 'All In One - Laboratorio' });
        });

        await allure.step('hacer click en input codigo de sitio', async () => {
            await page.locator('#Site_Code').click();
        });

        await allure.step('Escribir en input codigo de sitio', async () => {
            await page.locator('#Site_Code').fill(siteCode);
        });

        await allure.step('Hacer click en input zona', async () => {
            await page.locator('#token-input-IdZone').click();
        });

        await allure.step('escribir la letra z en input zona', async () => {
            await page.locator('#token-input-IdZone').type('Ca', { delay: 100 });
        });

        await allure.step('seleccionar zona de lista desplegable', async () => {
            await page.getByText('Cabe', { exact: false }).click();
        });

        await allure.step('Desplegar lista y seleccionar bandera', async () => {
            await page.locator('#IdBrand').selectOption({ label: 'DEFAULT' });
        });

        await allure.step('Desplegar lista y seleccionar idioma', async () => {
            await page.locator('#IdLanguage').selectOption({ label: 'Spanish - Argentina' });
        });
        
        await allure.step('Hacer click en input nombre corto de sitio', async () => {
            await page.locator('#Site_ShortName').click();
        });

        await allure.step('Escribir en input nombre corto de sitio', async () => {
            await page.locator('#Site_ShortName').fill(siteShortName);
        });

        await allure.step('Hacer click en input calle de sitio', async () => {
            await page.locator('#Site_Street1').click();
        });

        await allure.step('Escribir en input calle de sitio', async () => {
            await page.locator('#Site_Street1').fill('Chacabuco 661');
        });       
        
        await allure.step('Desplegar lista y seleccionar zona horaria de sitio', async () => {
            await page.locator('#Site_TimeZone').selectOption({ label: '(UTC-03:00) City of Buenos Aires' });
        });

        await allure.step('Hacer click en input ciudad de sitio', async () => {
            await page.locator('#Site_City').click();
        });

        await allure.step('Escribir en input ciudad de sitio', async () => {
            await page.locator('#Site_City').fill('San Isidro');
        });
     
        await allure.step('Desplegar lista y seleccionar pais de sitio', async () => {
            await page.locator('#IdCountry').selectOption({ label: 'Argentina' });
        });

        await allure.step('Desplegar lista y seleccionar ciudad de sitio', async () => {
            await page.locator('#IdState').selectOption({ label: 'Buenos Aires' });
        });

        await allure.step('Desplegar lista y seleccionar moneda de sitio', async () => {
            await page.getByLabel('Moneda: *').selectOption({ label: 'ARS' });
        });

        await allure.step('Hacer click en boton guardar', async () => {
            await page.locator('#save').click();
        });

        await allure.step('Hacer click en boton SI', async () => {
            await page.getByRole('button', { name: 'Si' }).click();
        });
    });
    
    await allure.step('filtrar Nuevo Sitio', async () => {

        await allure.step('Aseguramos que el panel esté presente', async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });      
        })

        await allure.step('Click en el título, no en todo el panel', async () => {
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
        })

        await allure.step('Esperar que se despliegue el contenido', async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });         
        })

        await allure.step('Hacer click en codigo de sitio', async () => {
            await page.locator('label[for="code"]').click();          
        })

        await allure.step('Escribir codigo de sitio', async () => { 
            await page.locator('label[for="code"]').fill(siteCode);          
        })

        await allure.step('Hacer click en buscar', async () => {
            await page.locator('#search').click();          
        })

        await allure.step('Verifiquemos que existe nuestro Sitio', async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(siteCode);         
        })
    });

    await allure.step('Editar Nuevo Sitio', async () => {
        
        await allure.step('Hacer Click en editar Sitio', async () => {
            await page.getByRole('link', { name: 'Editar' }).click();
        });

        await allure.step('Hacer Click en input codigo de sitio', async () => {
            await page.locator('#Site_Code').click();
        });

        await allure.step('Escribir en input codigo de sitio ', async () => {
            await page.locator('#Site_Code').fill(siteCode + 'editado');
        });
        
        await allure.step('Presionar el boton guardar', async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtrar Nuevo Sitio Editado', async () => {

        await allure.step('Aseguramos que el panel esté presente', async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        })

        await allure.step('Click en el título, no en todo el panel', async () => {
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
        })

        await allure.step('Esperamos que de despliege el filtro', async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        })

        await allure.step('Hacer click en input codigo de sitio', async () => {
            await page.locator('label[for="code"]').click();
        })

        await allure.step('Escribir en input codigo de sitio', async () => {
            await page.locator('label[for="code"]').fill(siteCode + 'editado');
        })

        await allure.step('Hacer click en buscar sitio', async () => {
            await page.locator('#search').click();
        })

        await allure.step('nos aseguremos que se encuentre nuestro sitio editado', async () => {
            await expect(page.getByRole('cell', { name: siteCode + 'editado', exact: true })).toBeVisible();
        })
    });
})