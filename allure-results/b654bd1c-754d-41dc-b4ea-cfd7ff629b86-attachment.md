# Test info

- Name: Transacciones Excepciones
- Location: /home/maximilianodmorales/testAuto/tests/Atio lab Flota/NWCompany/flota/excepciones.spec.ts:5:5

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('tbody tr td:nth-child(3) a').first()
    - locator resolved to <a href="/TransactionsExceptions/Details/5af069e2-ec26-4627-9fee-6382d0e21a3c?origin=1">003435133</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

    at body (/home/maximilianodmorales/testAuto/tests/Atio lab Flota/NWCompany/flota/excepciones.spec.ts:99:70)
    at body (/home/maximilianodmorales/testAuto/node_modules/allure-js-commons/src/facade.ts:113:48)
    at call (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:13:56)
    at tryCatch (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at /home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at call (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:13:23)
    at tryCatch (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at AllurePlaywrightTestRuntime.apply (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at AllurePlaywrightTestRuntime.step (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:14:4)
    at callRuntimeMethod (/home/maximilianodmorales/testAuto/node_modules/allure-js-commons/src/facade.ts:21:27)
    at Object.step (/home/maximilianodmorales/testAuto/node_modules/allure-js-commons/src/facade.ts:113:10)
    at Object.step (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/legacy.ts:147:48)
    at body (/home/maximilianodmorales/testAuto/tests/Atio lab Flota/NWCompany/flota/excepciones.spec.ts:98:22)
    at body (/home/maximilianodmorales/testAuto/node_modules/allure-js-commons/src/facade.ts:113:48)
    at call (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:13:56)
    at tryCatch (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
    at /home/maximilianodmorales/testAuto/node_modules/allure-playwright/src/runtime.ts:2:1
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { allure } from 'allure-playwright';
   3 |
   4 |
   5 | test('Transacciones Excepciones', async ({ page }, testInfo) => {
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
   21 |     allure.label('feature', 'Excepciones');
   22 |     allure.story('Navegar, Ver detalles');
   23 |
   24 |     //dentro del test cuando lo abrimos aparece la descripcion
   25 |     allure.description(`
   26 |     Objetivo: Este test automatiza el proceso de navegacion, ver detalles de excepciones.
   27 |     `);
   28 |     allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  
   29 |
   30 |
   31 |     await allure.step('Navegar y acceder a excepciones',async () => {
   32 |         await allure.step('Acceder a la url de login', async () => {
   33 |             await page.goto(urlBETA!);
   34 |         });
   35 |
   36 |         await allure.step('Hacer click en input nombre de usuario', async () => {
   37 |             await page.locator('#UserName').click();
   38 |         });
   39 |
   40 |         await allure.step('Escribir en input nombre de usuario', async () => {
   41 |             await page.locator('#UserName').fill('QAutomation2@gmail.com');
   42 |         });
   43 |
   44 |         await allure.step('Hacer click en input Contraseña de usuario', async () => {
   45 |             await page.locator('#Password').click();
   46 |         });
   47 |
   48 |         await allure.step('Escribir en input Contraseña de usuario', async () => {
   49 |             await page.locator('#Password').fill('N9VOSBIA');
   50 |         });
   51 |
   52 |         await allure.step('Hacer Click en ingresar', async () => {
   53 |             await page.locator('#submit').click();
   54 |         });
   55 |         
   56 |         await allure.step('espera de carga', async () => {
   57 |             await page.waitForTimeout(2000); // espera 2 segundos
   58 |         });
   59 |
   60 |         // await allure.step('hacer click para cambiar rol', async () => {
   61 |         //     const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
   62 |         //     await rolLink.waitFor({ state: 'visible', timeout: 60000 });
   63 |         //     await expect(rolLink).toBeEnabled({ timeout: 60000 });
   64 |         //     await rolLink.click(); 
   65 |         // });
   66 |     
   67 |         // await allure.step('hacer click para desplegar lista de roles', async () => {
   68 |         //     const showAllBtn = page.getByTitle('Show All Items');
   69 |         //     await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
   70 |         //     await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
   71 |         //     await showAllBtn.click();
   72 |         // });
   73 |
   74 |         // await allure.step('hacer click en rol NW Company - Atio Lab Flota', async () => {
   75 |         //     await page.getByText('NW Company Admin - Atio Lab').click();
   76 |         // });
   77 |         
   78 |         // await allure.step('acceder a modulo Transacciones Exepciones', async () => {
   79 |         //     await page.click('a[href="/TransactionsExceptions"]');
   80 |         // });
   81 |
   82 |         // await allure.step('veriricar que estamos en la url de Transacciones Exepciones', async () => {
   83 |         //     await expect(page).toHaveURL('https://console.ationet.com/TransactionsExceptions');
   84 |         // });    
   85 |
   86 |         await allure.step('acceder a modulo Transacciones excepciones', async () => {
   87 |             await page.goto('https://console.ationet.com/TransactionsExceptions');
   88 |         });
   89 |         
   90 |
   91 |         await allure.step('espera de carga', async () => {
   92 |             await page.waitForTimeout(2000); // espera 2 segundos
   93 |         });
   94 |     });   
   95 |
   96 |     await allure.step('Ver detalle de Excepciones', async () => {
   97 |
   98 |         await allure.step('Click para ingresar a detalle de Excepcion', async () => {
>  99 |             await page.locator('tbody tr td:nth-child(3) a').first().click();
      |                                                                      ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  100 |         });
  101 |
  102 |
  103 |         await allure.step('Click en boton Ok', async () => {
  104 |         await page.getByRole('button', { name: 'Ok' }).click({ noWaitAfter: true });
  105 |         await page.waitForTimeout(1000); // o un wait por una condición
  106 |         });
  107 |   
  108 |
  109 |         await allure.step('espera de carga', async () => {
  110 |             await page.waitForTimeout(5000); // espera 2 segundos
  111 |         });
  112 |     });
  113 | })
```