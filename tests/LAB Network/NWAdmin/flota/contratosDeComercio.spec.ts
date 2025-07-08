import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Contratos de Comercio', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Contratos de Comercios');
    allure.story('Navegar, Crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y poder editar Contratos de comercio.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  

    // Generar un valor aleatorio para cada campo
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1); // Resta un día
    const fechaISO = hoy.toISOString().split('T')[0].replace(/-/g, '/');
    const randomIdSitio = Math.floor(Math.random() * 1000000);
    const siteShortName = `Sitio ${randomIdSitio}`;
    const siteCode = `00000${randomIdSitio}`;    
    const randomId = Math.floor(Math.random() * 10000);
    const codeContratoDeComercio = `${randomId}`;
    const descContratoDeComercio = `des${randomId}`;

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
    
    await allure.step('Navegar y acceder a Contrato de comercio',async () => {

        await allure.step('acceder a modulo contratos de comercio', async () => {
            await page.click('a[href="/MerchantsContracts"]');
        });

        await allure.step('veriricar que estamos en la url de contrato de comercio', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/MerchantsContracts');
        });    
    });   

    await allure.step('Crear nuevo contrato de comercio', async () => {

        await allure.step('Click en boton Nuevo' , async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('Verificamos que estemos en la url nuevo contrato de comercio' , async () => {
            await expect(page).toHaveURL('https://console.ationet.com/MerchantsContracts/Create');
        });

        await allure.step('Click en input Comercio' , async () => {
            await page.locator('#token-input-MerchantsContract_MerchantId').click();
        });

        await allure.step('Escribir en input Comercio' , async () => {
            await page.locator('#token-input-MerchantsContract_MerchantId').type('All In O', { delay: 100 });
        });

        await allure.step('Seleccionar opcion en input Comercio' , async () => {
            await page.getByText('All In One - Laboratorio', { exact: false }).click();
        });

        await allure.step('Click en input codigo' , async () => {
            await page.locator('#MerchantsContract_Code').click();
        });

        await allure.step('Escribir en input codigo' , async () => {
            await page.locator('#MerchantsContract_Code').fill(codeContratoDeComercio);
        });

        await allure.step('Click en input Descripcion' , async () => {
            await page.locator('#MerchantsContract_Description').click();
        });

        await allure.step('Escribir en input Descripcion' , async () => {
            await page.locator('#MerchantsContract_Description').fill(descContratoDeComercio);
        });

        await allure.step('Click en input fecha de inicio' , async () => {
            await page.locator('#MerchantsContract_StartDate').click();
        });

        await allure.step('Escribir en input fecha de inicio' , async () => {
            await page.locator('#MerchantsContract_StartDate').fill(fechaISO);
        });

        await allure.step('Click en input Duracion' , async () => {
            await page.locator('#MerchantsContract_Duration').click();
        });

        await allure.step('Escribir en input Duracion' , async () => {
            await page.locator('#MerchantsContract_Duration').fill('1');
        });


        await allure.step('Desplegar lista y seleccionar Modo de cuenta corriente' , async () => {
            await page.locator('#MerchantsContract_CurrentAccountMode').selectOption({ label: 'Importe' });
        });

        await allure.step('Desplegar lista y seleccionar Moneda' , async () => {
            await page.locator('#MerchantsContract_CurrencyId').selectOption({ label: 'ARS' });
        });

        await allure.step('Click en input sitio' , async () => {
            await page.locator('#token-input-Site').click();
        });

        await allure.step('Escribir en input sitio (sin último dígito)' , async () => {
        const partialSite = siteShortName.slice(0, -1); // recorta el último carácter
        await page.locator('#token-input-Site').type(partialSite, { delay: 100 });
        });

        await allure.step('Seleccionar sitio' , async () => {
            await page.getByText(siteShortName, { exact: true }).click();
        });

        await allure.step('Click en boton Guardar' , async () => {
            await page.locator('#save').click();
        });

    });
    
    await allure.step('Filtramos nuevo contrato de comercio', async () => {

        await allure.step('Aseguramos que el filtro esté presente' , async () => {
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

        await allure.step('Esperar que se despliegue el filtro' , async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input descripcion' , async () => {
            await page.locator('#description').click();
        });

        await allure.step('Escribir en input descripcion' , async () => {
            await page.locator('#description').fill(descContratoDeComercio);
        });

        await allure.step('Click en boton buscar' , async () => {
            await page.locator('#search').click();
        });

        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });

        await allure.step('Verificamos que existe nuestro contrato de comercio', async () => {
        const row = page.locator('.dtls tr', { hasText: descContratoDeComercio });
        await expect(row).toHaveCount(1, { timeout: 10000 }); // asegurarse que está
        });

        await allure.step('espera de carga', async () => {
            await page.waitForTimeout(2000); // espera 2 segundos
        });

    });

    await allure.step('Editamos nuevo contrato de comercio', async () => {

        await allure.step('Click en editar' , async () => {
           await page.locator('a[title="Editar"]').first().click();
        });

        await allure.step('Click en input descrpcion' , async () => {
            await page.locator('#MerchantsContract_Description').click();
        });

        await allure.step('Escribir en input descrpcion' , async () => {
            await page.locator('#MerchantsContract_Description').fill(descContratoDeComercio + 'editado');
        });

        await allure.step('Click en boton guardar' , async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtramos contrato de comercio editado  ', async () => {

        await allure.step('Aseguramos que el filtro esté presente' , async () => {
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

        await allure.step('Esperar que se despliegue el filtro' , async () => {
            await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en input descripcion' , async () => {
            await page.locator('#description').click();
        });

        await allure.step('Escribir en input descripcion' , async () => {
            await page.locator('#description').fill(descContratoDeComercio + 'editado');
        });

        await allure.step('Click en boton buscar' , async () => {
            await page.locator('#search').click();
        });

        await allure.step('Verificamos que existe nuestro contrato de comercio', async () => {
        const row = page.locator('.dtls tr', { hasText: descContratoDeComercio  + 'editado'});
        await expect(row).toHaveCount(1, { timeout: 10000 }); // asegurarse que está
        });

    });

})