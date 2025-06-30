import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Comercios', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Comercios');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de Comercios.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial         

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 10000000);
    const idContribuyenteComercio = `${randomId}`;
    const nameComercio= `$Comercio${randomId}`;
    const codeComercio= `${randomId}`;

    await allure.step('Navegar y acceder a Comercio',async () => {
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

        await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
            await page.getByText('NW Admin - LAB Network').click();
        });

        await allure.step('acceder a modulo comercio', async () => {
            await page.click('a[href="/Merchants"]');
        });

        await allure.step('veriricar que estamos en la url de comercio', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Merchants');
        });    
    });

    await allure.step('Crear nuevo Comercio',async () => {

        await allure.step('acceder a crear comercio',async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear comercio',async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Merchants/Create');
        });

        await allure.step('Click en input id de contribuyente',async () => {
            await page.locator('#Merchant_TaxPayerId').click();
        });

        await allure.step('Escribir en input id de contribuyente',async () => {
            await page.locator('#Merchant_TaxPayerId').fill(idContribuyenteComercio);
        });

        await allure.step('Click en input nombre de comercio',async () => {
            await page.locator('#Merchant_Name').click();
        });

        await allure.step('Escribir en input nombre de comercio',async () => {
            await page.locator('#Merchant_Name').fill(nameComercio);
        });

        await allure.step('Click en input codigo de comercio',async () => {
            await page.locator('#NetworksMerchant_MerchantCode').click();
        });

        await allure.step('Escribir en input codigo de comercio',async () => {
            await page.locator('#NetworksMerchant_MerchantCode').fill(codeComercio);
        });

        await allure.step('Click en input calle de comercio',async () => {
            await page.locator('#Merchant_Street1').click();
        });

        await allure.step('Escribir en input calle de comercio',async () => {
            await page.locator('#Merchant_Street1').fill('chacabubo661');
        });

        await allure.step('Click en input ciudad de comercio',async () => {
            await page.locator('#Merchant_City').click();
        });

        await allure.step('Escribir en input ciudad de comercio',async () => {
            await page.locator('#Merchant_City').fill('san isidro');
        });

        await allure.step('Desplegar lista y seleccionar pais de comercio',async () => {
            await page.locator('#IdCountry').selectOption({ label: 'Argentina' });
        });

        await allure.step('Desplegar lista y seleccionar Estado de comercio',async () => {
            await page.locator('#IdState').selectOption({ label: 'Buenos Aires' });
        });

        await allure.step('Click en input nombre de contacto del comercio',async () => {
            await page.locator('#NetworksMerchant_ContactName').click();
        });

        await allure.step('Escribir en input nombre de contacto del comercio',async () => {
            await page.locator('#NetworksMerchant_ContactName').fill('soy una prueba');
        });

        await allure.step('Click en input correo de contacto del comercio',async () => {
            await page.locator('#NetworksMerchant_ContactEmail').click();
        });

        await allure.step('Escribir en input correo de contacto del comercio',async () => {
            await page.locator('#NetworksMerchant_ContactEmail').fill('pruebitaauto@ationinc.com');
        });

        await allure.step('Click en input Telefono 1 de contacto del comercio',async () => {
            await page.locator('#NetworksMerchant_PhoneNumber1').click();
        });

        await allure.step('Escribir en input Telefono 1 de contacto del comercio',async () => {
            await page.locator('#NetworksMerchant_PhoneNumber1').fill('1122445577');
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });        
    });

    await allure.step('Filtrar nuevo Comercio',async () => {
        await allure.step('Aseguramos que el panel de filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el título filtro, no en todo el panel',async () => {
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

        await allure.step('Click en input nombre de comercio',async () => {
            await page.locator('#name').click();
        });

        await allure.step('Escribir en input nombre de comercio',async () => {
            await page.locator('#name').fill(nameComercio);
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestro comercio',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(nameComercio);
        }); 
    });

    await allure.step('Editar nuevo Comercio',async () => {

        await allure.step('Click en editar comercio',async () => {
            await page.getByRole('link', { name: 'Editar' }).click();
        });

        await allure.step('Click en input nombre de comercio',async () => {
            await page.locator('#Merchant_Name').click();
        });

        await allure.step('Escribir en input nombre de comercio',async () => {
            await page.locator('#Merchant_Name').fill(nameComercio + 'editado');
        });

        await allure.step('Click en guardar',async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtrar nuevo Comercio editado',async () => {
        await allure.step('Aseguramos que el panel de filtro esté presente',async () => {
            await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
        });

        await allure.step('Click en el título filtro, no en todo el panel',async () => {
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

        await allure.step('Click en input nombre de comercio',async () => {
            await page.locator('#name').click();
        });

        await allure.step('Escribir en input nombre de comercio',async () => {
            await page.locator('#name').fill(nameComercio + 'editado');
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestro comercio',async () => {
            await expect(page.getByRole('cell', { name: nameComercio + 'editado', exact: true })).toBeVisible();
        });       
    });
   
})
