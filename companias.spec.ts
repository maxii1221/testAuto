import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Compañias', async ({ page }, testInfo) => {
    //varibles:
    const urlBETA = testInfo.project.use?.baseURL; 
    
    // Allure metadata

    //esto aparece en suite para ordenar mejor
    allure.suite('NWAmin');
    allure.subSuite('administracion');

    //usuario que ejecuto la automatizacion
    allure.owner('Maximiliano');
    allure.tag('regression');

    //label para funcionalidades allure
    allure.label('epic', 'NWAmin - Administración');
    allure.label('feature', 'Compañias');
    allure.story('Navegar, Crear, editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso completo de creación, edición de una compañia.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial
    
    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 1000000);
    const companyName = `Compañia Automatica ${randomId}`;
    const taxPayerId = `00000${randomId}`;
    const companyCode = `00000${randomId}`;

    await allure.step('Navegar y acceder a compañias',async () => {
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
            await page.getByText('NWAdmin - LAB Network').click();
        });

        await allure.step('acceder a modulo compañias', async () => {
            await page.getByRole('link', { name: 'Compañias', exact: true }).click();
        });

        await allure.step('veriricar que estamos en la url de compañia', async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Companies');
        });    
    }); 

    await allure.step('Crear nueva compañia',async () => {

        await allure.step('Click en boton nuevo',async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear compañia',async () => {
            await expect(page).toHaveURL('https://console.ationet.com/Companies/Create');
        });

        await allure.step('Click en input ID Contribuyente',async () => {
            await page.locator('#Company_TaxPayerId').click();
        });

        await allure.step('Escribir en input ID Contribuyente',async () => {
            await page.locator('#Company_TaxPayerId').fill(taxPayerId);
        });

        await allure.step('Click en input codigo',async () => {
            await page.locator('#NetworksCompany_CompanyCode').click();
        });

        await allure.step('Escribir en input codigo',async () => {
            await page.locator('#NetworksCompany_CompanyCode').fill(companyCode);
        });

        await allure.step('Click en input nombre de conpañia',async () => {
            await page.locator('#Company_Name').click();
        });

        await allure.step('Escribir en input nombre de compañia',async () => {
            await page.locator('#Company_Name').fill(companyName);
        });

        await allure.step('Desplegar lista y seleccionar industria de compañia',async () => {
            await page.locator('#IdIndustry').selectOption({ label: 'Gas y Petróleo' });
        });

        await allure.step('Click en input calle de conpañia',async () => {
            await page.locator('#Company_Street1').click();
        });

        await allure.step('Escribir en input calle de conpañia',async () => {
            await page.locator('#Company_Street1').fill('Chacabuco 661');
        });

        await allure.step('Click en input ciudad de conpañia',async () => {
            await page.locator('#Company_City').click();
        });

        await allure.step('Escribir en input ciudad de conpañia',async () => {
            await page.locator('#Company_City').fill('San Isidro');
        });

        await allure.step('Desplegar lista y seleccionar pais de compañia',async () => {
            await page.locator('#IdCountry').selectOption({ label: 'Argentina' });
        });
        
        await allure.step('Desplegar lista y seleccionar estado de compañia',async () => {
            await page.locator('#IdState').selectOption({ label: 'Buenos Aires' });
        });

        await allure.step('Click en input nombre de contacto',async () => {
            await page.locator('#NetworksCompany_ContactName').click();
        });

        await allure.step('Escribir en input nombre de contacto',async () => {
            await page.locator('#NetworksCompany_ContactName').fill('Maxi Morales');
        });

        await allure.step('Click en input mail de contacto',async () => {
            await page.locator('#NetworksCompany_ContactEmail').click();
        });

        await allure.step('Escribir en input mail de contacto',async () => {
            await page.locator('#NetworksCompany_ContactEmail').fill('mmorales@atioinc.com');
        });

        await allure.step('Click en input numero de contacto',async () => {
            await page.locator('#NetworksCompany_PhoneNumber1').click();
        });

        await allure.step('Escribir en input numero de contacto',async () => {
            await page.locator('#NetworksCompany_PhoneNumber1').fill('1125115114');
        });

        await allure.step('Click en boton guardar',async () => {
            await page.locator('#save').click();
        });


    
    

    
    

    
    
   

    });

    await allure.step('filtrar nueva compañia',async () => {

        await allure.step('Aseguramos que el panel filtro esté presente',async () => {
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

        await allure.step('Click en input nombre',async () => {
            await page.locator('label[for="name"]').click();
        });

        await allure.step('Escribir en input nombre',async () => {
            await page.locator('label[for="name"]').fill(companyName);
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestra compañia',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(companyName);
        });

    });

    await allure.step('editar nueva compañia',async () => {

        await allure.step('Click en editar',async () => {
            await page.getByRole('link', { name: 'Editar' }).click();
        });

        await allure.step('Click en input nombre',async () => {
            await page.locator('#Company_Name').click();
        });

        await allure.step('Escribir en input nombre',async () => {
            await page.locator('#Company_Name').fill(companyName + 'editado');
        });

        await allure.step('Click en guardar',async () => {
            await page.locator('#save').click();
        });

    });

    await allure.step('filtrar nueva compañia editada',async () => {
        await allure.step('Aseguramos que el panel filtro esté presente',async () => {
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

        await allure.step('Click en input nombre',async () => {
            await page.locator('label[for="name"]').click();
        });

        await allure.step('Escribir en input nombre',async () => {
            await page.locator('label[for="name"]').fill(companyName + 'editado');
        });

        await allure.step('Click en boton buscar',async () => {
            await page.locator('#search').click();
        });

        await allure.step('verificamos que este nuestra compañia',async () => {
            await expect(page.locator('.dtls tr td a').first()).toHaveText(companyName + 'editado');
        });

    });
})
