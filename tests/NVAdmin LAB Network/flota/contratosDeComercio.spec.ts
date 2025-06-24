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

    const randomId = Math.floor(Math.random() * 10000);
    const codeContratoDeComercio = `${randomId}`;
    const descContratoDeComercio = `des${randomId}`;

    await allure.step('Navegar y acceder a Contrato de comercio',async () => {
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
            await page.locator('#token-input-MerchantsContract_MerchantId').type('Contr', { delay: 100 });
        });

        await allure.step('Seleccionar opcion en input Comercio' , async () => {
            await page.getByText('Control Truck Lab', { exact: false }).click();
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

        await allure.step('Escribir en input sitio' , async () => {
            await page.locator('#token-input-Site').type('Kitts', { delay: 100 });
        });

        await allure.step('Seleccionar sitio (es normal que falle porque el sitio ya fue asignado en otro contrato de comercio' , async () => {
            await page.getByText('Kitts Nevis P2343 LAB', { exact: false }).click();
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

        await allure.step('Verificamos que este nuestro combustible' , async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(descContratoDeComercio);
        });

    });

    await allure.step('Editamos nuevo contrato de comercio', async () => {

        await allure.step('Click en editar' , async () => {
            await page.getByRole('link', { name: 'Editar' }).first().click();
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

        await allure.step('Verificamos que este nuestro combustible' , async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(descContratoDeComercio + 'editado');
        });
    });

})