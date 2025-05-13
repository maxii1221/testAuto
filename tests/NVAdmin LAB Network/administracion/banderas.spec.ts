import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


test('Banderas', async ({ page }, testInfo) => {
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
    allure.label('feature', 'Banderas');
    allure.story('Navegar, crear y Editar');

    //dentro del test cuando lo abrimos aparece la descripcion
    allure.description(`
    Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de banderas.
    `);
    allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial      

    // Generar un valor aleatorio para cada campo
    const randomId = Math.floor(Math.random() * 1000000);
    const banderaName = `bandera automatica${randomId}`
    const banderaFuelName = `00000${randomId}`;
    
    await allure.step('Navegar y acceder a Banderas', async () => {

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
        
        await allure.step('Ingresar al modulo Banderas', async () => {
            await page.getByRole('link', { name: 'Banderas', exact: true }).click();
        });

        await allure.step('verificar que estamos en la url de Banderas', async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/Brands');
        });    
    }); 

    await allure.step('Crear nueva Bandera',async () => {

        await allure.step('Click en boton Nuevo',async () => {
            await page.getByRole('button', { name: 'Nuevo' }).first().click();
        });

        await allure.step('veriricar que estamos en enlase de crear banderas',async () => {
            await expect(page).toHaveURL('https://console-beta.ationet.com/Brands/Create');
        });

        await allure.step('Click en input nombre de Bandera',async () => {
            await page.locator('#BrandDto_Name').click();
        });

        await allure.step('Escribir en input nombre de Bandera',async () => {
            await page.locator('#BrandDto_Name').fill(banderaName);
        });

        await allure.step('Desplegar lista y seleccionar combustible maestro',async () => {
            await page.locator('#fuelMaster').selectOption({ label: 'Super' });
        });

        await allure.step('Click en input nombre de combustible',async () => {
            await page.locator('#name').click();
        });

        await allure.step('Escribir en input nombre de combustible',async () => {
            await page.locator('#name').fill(banderaFuelName);
        });

        await allure.step('Click en boton Alta',async () => {
            await page.getByText('Alta').click();
        });

        await allure.step('Click en boton Guardar',async () => {
            await page.locator('#save').click();
        });
    });

    await allure.step('Filtrar nueva Bandera',async () => {

        await allure.step('verificar que la banderas se haya creado',async () => {
            await expect(page.getByRole('cell', { name: banderaName, exact: true })).toBeVisible();
        });       
    });

    await allure.step('Editar nueva Bandera',async () => {

        await allure.step('ingresar a editar banderas',async () => {
            await page.getByRole('link', { name: 'Editar' }).first().click();
        });

        await allure.step('Click en input nombre de Bandera',async () => {
            await page.locator('#BrandDto_Name').click();
        });

        await allure.step('Escribir en input nombre de Bandera',async () => {
            await page.locator('#BrandDto_Name').fill(banderaName + 'editado');
        });

        await allure.step('Click en boton Guardar',async () => {
            await page.locator('#save').click();
        });

    });

    await allure.step('Filtrar nueva Bandera editada',async () => {
        await allure.step('Verificar que se haya editado',async () => {
            await expect(page.getByRole('cell', { name: banderaName + 'editado', exact: true })).toBeVisible();
        });
    });
})
