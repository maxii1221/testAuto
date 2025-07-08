# Test info

- Name: Autorizaciones Pendientes
- Location: /home/maxii1221/testAuto/tests/Atio lab Flota/NWCompany/flota/autPendientes.spec.ts:6:5

# Error details

```
Error: page.goto: Navigation to "https://console.ationet.com/TransactionsOutstandingAuthorizations" is interrupted by another navigation to "https://sts.ationet.com/connect/authorize?client_id=Ationet&redirect_uri=https%3a%2f%2fconsole.ationet.com%2f&response_mode=form_post&response_type=code+id_token&scope=openid+profile+email+offline_access&state=OpenIdConnect.AuthenticationProperties%3dmlsZss6kBbvufgkM3Hi2Urjp309f3luJ4cF0mBwK5HeZDdiX3lcZ5mtUMZf34sJd4oxyTlRS4JQqMRdDt-h4tEft2kMtAt1AIeDNOt5DPXHpMl6QjcnT1uE9rfdtCJmRBOfuHOg5Duscl9bdWIk6Ot6vuSJidAgasiJ8AoG5a0HTh5FM6_2h2_KYYzj9bG5rlmZw9ghRmI02eARnsAXv7Q&nonce=638875870841969346.ZTRmYmUzYmItMDA3MS00OTczLTk2MDgtZGYwZTA5OTlkZjRlMDNhZWNiYmUtZjA5ZS00YWIwLTljMzEtNjdjODBjNDM3Y2Rl&x-client-SKU=ID_NET&x-client-ver=1.0.40306.1554"
Call log:
  - navigating to "https://console.ationet.com/TransactionsOutstandingAuthorizations", waiting until "load"

    at body (/home/maxii1221/testAuto/tests/Atio lab Flota/NWCompany/flota/autPendientes.spec.ts:87:24)
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
    at /home/maxii1221/testAuto/tests/Atio lab Flota/NWCompany/flota/autPendientes.spec.ts:86:22
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { allure } from 'allure-playwright';
   3 |
   4 |
   5 |
   6 | test('Autorizaciones Pendientes', async ({ page }, testInfo) => {
   7 |     //varibles:
   8 |     const urlBETA = testInfo.project.use?.baseURL; 
   9 |
   10 |     // Allure metadata
   11 |
   12 |     //esto aparece en suite para ordenar mejor
   13 |     allure.suite('NWCompany');
   14 |     allure.subSuite('Flota');
   15 |
   16 |     //usuario que ejecuto la automatizacion
   17 |     allure.owner('Maximiliano');
   18 |     allure.tag('regression');
   19 |
   20 |     //label para funcionalidades allure
   21 |     allure.label('epic', 'NWCompany - Flota');
   22 |     allure.label('feature', 'Autorizaciones Pendientes');
   23 |     allure.story('Navegar y acceder a detalles');
   24 |
   25 |     //dentro del test cuando lo abrimos aparece la descripcion
   26 |     allure.description(`
   27 |     Objetivo: Este test automatiza el proceso de navegacion y acceder a detalles en autorizaciones pendientes.
   28 |     `);
   29 |     allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial  
   30 |
   31 |     await allure.step('Navegar y acceder a Autorizaciopnes pendientes',async () => {
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
   78 |         // await allure.step('acceder a modulo Autorizaciones Pendientes', async () => {
   79 |         //     await page.click('a[href="/TransactionsOutstandingAuthorizations"]');
   80 |         // });
   81 |
   82 |         // await allure.step('veriricar que estamos en la url de Procesos de Liquidación', async () => {
   83 |         //     await expect(page).toHaveURL('https://console.ationet.com/TransactionsOutstandingAuthorizations');
   84 |         // });   
   85 |         
   86 |         await allure.step('acceder a modulo autorizaciones pendientes', async () => {
>  87 |             await page.goto('https://console.ationet.com/TransactionsOutstandingAuthorizations');
      |                        ^ Error: page.goto: Navigation to "https://console.ationet.com/TransactionsOutstandingAuthorizations" is interrupted by another navigation to "https://sts.ationet.com/connect/authorize?client_id=Ationet&redirect_uri=https%3a%2f%2fconsole.ationet.com%2f&response_mode=form_post&response_type=code+id_token&scope=openid+profile+email+offline_access&state=OpenIdConnect.AuthenticationProperties%3dmlsZss6kBbvufgkM3Hi2Urjp309f3luJ4cF0mBwK5HeZDdiX3lcZ5mtUMZf34sJd4oxyTlRS4JQqMRdDt-h4tEft2kMtAt1AIeDNOt5DPXHpMl6QjcnT1uE9rfdtCJmRBOfuHOg5Duscl9bdWIk6Ot6vuSJidAgasiJ8AoG5a0HTh5FM6_2h2_KYYzj9bG5rlmZw9ghRmI02eARnsAXv7Q&nonce=638875870841969346.ZTRmYmUzYmItMDA3MS00OTczLTk2MDgtZGYwZTA5OTlkZjRlMDNhZWNiYmUtZjA5ZS00YWIwLTljMzEtNjdjODBjNDM3Y2Rl&x-client-SKU=ID_NET&x-client-ver=1.0.40306.1554"
   88 |         });
   89 |
   90 |         await allure.step('espera de carga', async () => {
   91 |             await page.waitForTimeout(2000); // espera 2 segundos
   92 |         });
   93 |     });    
   94 |
   95 |     await allure.step('Ingresar al detalle de autorizaciones pendientes' , async () => {
   96 |
   97 |         await allure.step('Click para ingresar a detalle de autorizaciones pendientes' , async () => {
   98 |             await page.locator('tbody tr td:nth-child(2) a').first().click();
   99 |         });
  100 |
  101 |         await allure.step('espera de carga', async () => {
  102 |             await page.waitForTimeout(2000); // espera 2 segundos
  103 |         });
  104 |
  105 |         await allure.step('Click en boton Ok', async () => {
  106 |         await page.getByRole('button', { name: 'Ok' }).click({ noWaitAfter: true });
  107 |         await page.waitForTimeout(1000); // o un wait por una condición
  108 |         });
  109 |         // await allure.step('Verificamos que volvimos a la url de autorizaciones pendientes' , async () => {
  110 |         //     await expect(page).toHaveURL('https://console.ationet.com/TransactionsOutstandingAuthorizations');
  111 |         // });
  112 |     });
  113 |
  114 | })
```