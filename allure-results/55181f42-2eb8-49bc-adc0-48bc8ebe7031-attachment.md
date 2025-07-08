# Test info

- Name: Transacciones
- Location: /home/maxii1221/testAuto/tests/Atio lab Flota/NWCompany/flota/transacciones.spec.ts:5:5

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('tbody tr td:nth-child(2) a').first()
    - waiting for" https://console.ationet.com/Transactions" navigation to finish...

    at body (/home/maxii1221/testAuto/tests/Atio lab Flota/NWCompany/flota/transacciones.spec.ts:98:70)
    at body (/home/maxii1221/testAuto/node_modules/allure-js-commons/src/facade.ts:113:48)
    at call (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:13:56)
    at tryCatch (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at /home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at call (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:13:23)
    at tryCatch (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at AllurePlaywrightTestRuntime.apply (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at AllurePlaywrightTestRuntime.step (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:14:4)
    at callRuntimeMethod (/home/maxii1221/testAuto/node_modules/allure-js-commons/src/facade.ts:21:27)
    at Object.step (/home/maxii1221/testAuto/node_modules/allure-js-commons/src/facade.ts:113:10)
    at Object.step (/home/maxii1221/testAuto/node_modules/allure-playwright/src/legacy.ts:147:48)
    at body (/home/maxii1221/testAuto/tests/Atio lab Flota/NWCompany/flota/transacciones.spec.ts:97:22)
    at body (/home/maxii1221/testAuto/node_modules/allure-js-commons/src/facade.ts:113:48)
    at call (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:13:56)
    at tryCatch (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at /home/maxii1221/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { allure } from 'allure-playwright';
   3 |
   4 |
   5 | test('Transacciones', async ({ page }, testInfo) => {
   6 |     //varibles:
   7 |     const urlBETA = testInfo.project.use?.baseURL; 
   8 |
   9 |     // Allure metadata
   10 |
   11 |     //esto aparece en suite para ordenar mejor
   12 |     allure.suite('NWCompany');
   13 |     allure.subSuite('Flota');
   14 |
   15 |     //usuario que ejecuto la automatizacion
   16 |     allure.owner('Maximiliano');
   17 |     allure.tag('regression');
   18 |
   19 |     //label para funcionalidades allure
   20 |     allure.label('epic', 'NWCompany - Flota');
   21 |     allure.label('feature', 'Transacciones');
   22 |     allure.story('Navegar y Ver detalles');
   23 |
   24 |     //dentro del test cuando lo abrimos aparece la descripcion
   25 |     allure.description(`
   26 |     Objetivo: Este test automatiza el proceso de navegacion y ver detalles de Transacciones.
   27 |     `);
   28 |     allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  
   29 |
   30 |     await allure.step('Navegar y acceder a Transacciones',async () => {
   31 |         await allure.step('Acceder a la url de login', async () => {
   32 |             await page.goto(urlBETA!);
   33 |         });
   34 |
   35 |         await allure.step('Hacer click en input nombre de usuario', async () => {
   36 |             await page.locator('#UserName').click();
   37 |         });
   38 |
   39 |         await allure.step('Escribir en input nombre de usuario', async () => {
   40 |             await page.locator('#UserName').fill('QAutomation2@gmail.com');
   41 |         });
   42 |
   43 |         await allure.step('Hacer click en input Contraseña de usuario', async () => {
   44 |             await page.locator('#Password').click();
   45 |         });
   46 |
   47 |         await allure.step('Escribir en input Contraseña de usuario', async () => {
   48 |             await page.locator('#Password').fill('N9VOSBIA');
   49 |         });
   50 |
   51 |         await allure.step('Hacer Click en ingresar', async () => {
   52 |             await page.locator('#submit').click();
   53 |         });
   54 |         
   55 |         await allure.step('espera de carga', async () => {
   56 |             await page.waitForTimeout(2000); // espera 2 segundos
   57 |         });
   58 |
   59 |         // await allure.step('hacer click para cambiar rol', async () => {
   60 |         //     const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
   61 |         //     await rolLink.waitFor({ state: 'visible', timeout: 60000 });
   62 |         //     await expect(rolLink).toBeEnabled({ timeout: 60000 });
   63 |         //     await rolLink.click(); 
   64 |         // });
   65 |     
   66 |         // await allure.step('hacer click para desplegar lista de roles', async () => {
   67 |         //     const showAllBtn = page.getByTitle('Show All Items');
   68 |         //     await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
   69 |         //     await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
   70 |         //     await showAllBtn.click();
   71 |         // });
   72 |
   73 |         // await allure.step('hacer click en rol NW Company - Atio Lab Flota', async () => {
   74 |         //     await page.getByText('NW Company Admin - Atio Lab').click();
   75 |         // });
   76 |
   77 |         // await allure.step('acceder a modulo Transacciones', async () => {
   78 |         //     await page.click('a[href="/Transactions"]');
   79 |         // });
   80 |
   81 |         
   82 |         await allure.step('acceder a modulo Transacciones', async () => {
   83 |             await page.goto('https://console.ationet.com/Transactions');
   84 |         });
   85 |
   86 |         await allure.step('espera de carga', async () => {
   87 |             await page.waitForTimeout(2000); // espera 2 segundos
   88 |         });
   89 |
   90 |         // await allure.step('veriricar que estamos en la url de Transacciones', async () => {
   91 |         //     await expect(page).toHaveURL('https://console.ationet.com/Transactions');
   92 |         // });    
   93 |     });   
   94 |
   95 |     await allure.step('Ingresar al detalle de transaccion' , async () => {
   96 |
   97 |         await allure.step('Click para ingresar a detalle de transaccion' , async () => {
>  98 |             await page.locator('tbody tr td:nth-child(2) a').first().click();
      |                                                                      ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
   99 |         });
  100 |
  101 |
  102 |
  103 |         await allure.step('Click en boton Ok', async () => {
  104 |         await page.getByRole('button', { name: 'Ok' }).click({ noWaitAfter: true });
  105 |         await page.waitForTimeout(1000); // o un wait por una condición
  106 |         });
  107 |
  108 |
  109 |
  110 |         // await allure.step('Verificamos que volvimos a la url de transacciones' , async () => {
  111 |         //     await expect(page).toHaveURL('https://console.ationet.com/Transactions');
  112 |         // });
  113 |     });
  114 | })
```