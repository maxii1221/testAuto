import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Contratos de compañia', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Contratos de Compañia');
    allure.story('Navegar, Crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y poder editar Contratos de Compañia.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  


    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 100000);
    const companyContractCode = `${randomId}`;
    const fechaISO = new Date().toISOString().split('T')[0].replace(/-/g, '/');
    const companyContractDescription = `Contract${randomId}`

    await allure.step('Navegar y acceder a Contrato de Compañia',async () => {
        await allure.step('Acceder a la url de login', async () => {
            await page.goto(urlBETA!);
        });

        await allure.step('Hacer click en input nombre de usuario', async () => {
            await page.locator('#UserName').click();
        });

        await allure.step('Escribir en input nombre de usuario', async () => {
            await page.locator('#UserName').fill('facuna@atioinc.com');
        });

        await allure.step('Hacer click en input Contraseña de usuario', async () => {
            await page.locator('#Password').click();
        });

        await allure.step('Escribir en input Contraseña de usuario', async () => {
            await page.locator('#Password').fill('pipo33');
        });

        await allure.step('Hacer Click en ingresar', async () => {
            await page.locator('#submit').click();
        });
        
        await allure.step('hacer click para cambiar rol', async () => {
            const primerLink = page.locator('p >> a').first();
            await primerLink.click();
        });
    
        await allure.step('hacer click para desplegar lista de roles', async () => {
            await page.getByTitle('Show All Items').click();
        });

        await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
            await page.getByText('NW Admin - LAB QA').click();
        });

        await allure.step('acceder a modulo contratos de compañia', async () => {
            await page.click('a[href="/CompanyContracts"]');
        });

        await allure.step('veriricar que estamos en la url de contrato de compañia', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/CompanyContracts');
        });    
    });   

    await allure.step('Crear nuevo contrato de compañia' , async () => {

        await allure.step('Click en boton Nuevo' , async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('Verificar que estamos en la url de crear contrato de compañia' , async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/CompanyContracts/Create');
        });

        await allure.step('Click en input compañia' , async () => {
            await page.locator('#token-input-CompanyContract_CompanyId').click();
        });

        await allure.step('Escribir en input compañia' , async () => {
            await page.locator('#token-input-CompanyContract_CompanyId').type('comp', { delay: 100 });
        });

        await allure.step('Selecionar Opcion en input compañia' , async () => {
            await page.locator('.token-input-dropdown-ationet li', { hasText: 'Company PetroMax' }).first().click();
        });

        await allure.step('Click en input Codigo' , async () => {
            await page.locator('#CompanyContract_Code').click();
        });

        await allure.step('Escribir en input Codigo' , async () => {
            await page.locator('#CompanyContract_Code').fill(companyContractCode);
        });

        await allure.step('Click en input Descripcion' , async () => {
            await page.locator('#CompanyContract_Description').click();
        });

        await allure.step('Escribir en input Descripcion' , async () => {
            await page.locator('#CompanyContract_Description').fill(companyContractDescription);
        });

        await allure.step('Click en input fecha de inicio' , async () => {
            await page.locator('#CompanyContract_StartDate').click();
        });

        await allure.step('Escribir en input fecha de inicio' , async () => {
            await page.locator('#CompanyContract_StartDate').fill(fechaISO);
        });

        await allure.step('Click en input duracion' , async () => {
            await page.locator('#CompanyContract_Duration').click();
        });

        await allure.step('Escribir en input duracion' , async () => {
            await page.locator('#CompanyContract_Duration').fill('10');
        });

        await allure.step('Desplegar y seleccionar en input Modo de cuenta corriente' , async () => {
            await page.locator('#CompanyContract_CurrentAccountMode').selectOption({ label: 'Productos' });
        });

        await allure.step('Desplegar y seleccionar en input modo' , async () => {
            await page.locator('#CompanyContract_Mode').selectOption({ label: 'Credito' });
        });

        await allure.step('Desplegar y seleccionar en input Modo de saldo' , async () => {
            await page.locator('#CompanyContract_BalanceMode').selectOption({ label: 'Dispersar' });
        });

        await allure.step('Click en input combustible' , async () => {
            await page.locator('#token-input-Fuel').click();
        });

        await allure.step('Escribir en input combustible' , async () => {
            await page.locator('#token-input-Fuel').type('Prem', { delay: 100 });
        });

        await allure.step('Seleccionar en input combustible' , async () => {
            await page.getByText('Premium Diesel', { exact: false }).click();
        });

        await allure.step('Click en boton guardar' , async () => {
            await page.locator('#save').click();
        });

    });

    await allure.step('filtrar nuevo contrato de compañia' , async () => {

            await allure.step('Aseguramos que el filtro esté presente' , async () => {
                await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
            });

            await allure.step('Click en filtro no en todo el panel' , async () => {
                await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
            });

            await allure.step('Esperar que de desplegue el filtro' , async () => {
                await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
            });

            await allure.step('Click en input codigo' , async () => {
                await page.locator('#Code').click();
            });

            await allure.step('Escribir en input codigo' , async () => {
                await page.locator('#Code').fill(companyContractCode);
            });

            await allure.step('Click en boton buscar' , async () => {
                await page.locator('#search').click();
            });
    
            await allure.step('verificamos que este nuestro contrato de compañia' , async () => {
                await expect(page.locator('.dtls tr td a').first()).toHaveText(companyContractCode);
            });

    });

    await allure.step('editar nuevo contrato de compañia' , async () => {

        await allure.step('Click en boton editar' , async () => {
            await page.getByRole('link', { name: 'Editar' }).click();
        });

        await allure.step('Click en input Descripcion' , async () => {
             await page.locator('#CompanyContract_Description').click();
        });

        await allure.step('Escribir en input Descripcion' , async () => {
            await page.locator('#CompanyContract_Description').fill(companyContractDescription+'editado');
        });

        await allure.step('Click en boton guardar' , async () => {
            await page.locator('#save').click();
        });

    });

    await allure.step('Filtrar contrato de compañia editado' , async () => {

            await allure.step('Aseguramos que el filtro esté presente' , async () => {
                await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
            });

            await allure.step('Click en filtro no en todo el panel' , async () => {
                await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
            });

            await allure.step('Esperar que de desplegue el filtro' , async () => {
                await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
            });

            await allure.step('Click en input descripcion' , async () => {
                await page.locator('#Description').click();
            });

            await allure.step('Escribir en input descripcion' , async () => {
                await page.locator('#Description').fill(companyContractDescription+'editado');
            });

            await allure.step('Click en boton buscar' , async () => {
                await page.locator('#search').click();
            });

            await allure.step('verificamos que se haya guardado el editado' , async () => {
                await expect(page.getByRole('cell', { name: companyContractDescription+'editado', exact: true })).toBeVisible();
            });

    });

})