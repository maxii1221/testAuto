# Test info

- Name: Identificadores
- Location: /home/maxii1221/testAuto/tests/LAB Network/NWAdmin/administracion/Identificadores.spec.ts:4:5

# Error details

```
TimeoutError: page.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('a[href="/Identifications"]')
    - waiting for" https://console.ationet.com/" navigation to finish...
    - navigated to "https://sts.ationet.com/connect/authorize?client_id=Ationet&redirect_uri=https%3a%2f%2fconsole.ationet.com%2f&response_mode=form_post&response_type=code+id_token&scope=openid+profile+email+offline_ac…"
    - waiting for" https://console.ationet.com/" navigation to finish...
    - navigated to "https://console.ationet.com/"

    at body (/home/maxii1221/testAuto/tests/LAB Network/NWAdmin/administracion/Identificadores.spec.ts:82:24)
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
    at /home/maxii1221/testAuto/tests/LAB Network/NWAdmin/administracion/Identificadores.spec.ts:81:22
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { allure } from 'allure-playwright';
   3 |
   4 | test('Identificadores', async ({ page }, testInfo) => {
   5 |     //varibles:
   6 |     const urlBETA = testInfo.project.use?.baseURL; 
   7 |
   8 |     // Allure metadata
   9 |
   10 |     //esto aparece en suite para ordenar mejor
   11 |     allure.suite('NWAdmin');
   12 |     allure.subSuite('Administracion');
   13 |
   14 |     //usuario que ejecuto la automatizacion
   15 |     allure.owner('Maximiliano');
   16 |     allure.tag('regression');
   17 |
   18 |     //label para funcionalidades allure
   19 |     allure.label('epic', 'NWAdmin - Administracion');
   20 |     allure.label('feature', 'Identificadores');
   21 |     allure.story('Navegar, crear y Editar');
   22 |
   23 |     //dentro del test cuando lo abrimos aparece la descripcion
   24 |     allure.description(`
   25 |     Objetivo: Este test automatiza el proceso de navegacion, creacion y edicion de Identificadores.
   26 |     `);
   27 |     allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial 
   28 |
   29 |     // Generar un valor aleatorio para cada campo
   30 |     const randomId = Math.floor(Math.random() * 100000000000);
   31 |     const idEtiqueta = `${randomId}`;
   32 |     const idCorreo= `${randomId}@atioinc.com`;
   33 |
   34 |     await allure.step('Navegar y acceder a identificadores',async () => {
   35 |         await allure.step('Acceder a la url de login', async () => {
   36 |             await page.goto(urlBETA!);
   37 |         });
   38 |
   39 |         await allure.step('Hacer click en input nombre de usuario', async () => {
   40 |             await page.locator('#UserName').click();
   41 |         });
   42 |
   43 |         await allure.step('Escribir en input nombre de usuario', async () => {
   44 |             await page.locator('#UserName').fill('QAutomation@gmail.com');
   45 |         });
   46 |
   47 |         await allure.step('Hacer click en input Contraseña de usuario', async () => {
   48 |             await page.locator('#Password').click();
   49 |         });
   50 |
   51 |         await allure.step('Escribir en input Contraseña de usuario', async () => {
   52 |             await page.locator('#Password').fill('O06DF3LJ');
   53 |         });
   54 |
   55 |         await allure.step('Hacer Click en ingresar', async () => {
   56 |             await page.locator('#submit').click();
   57 |         });
   58 |         
   59 |         await allure.step('espera de carga', async () => {
   60 |             await page.waitForTimeout(2000); // espera 2 segundos
   61 |         });
   62 |
   63 |         // await allure.step('hacer click para cambiar rol', async () => {
   64 |         //     const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
   65 |         //     await rolLink.waitFor({ state: 'visible', timeout: 60000 });
   66 |         //     await expect(rolLink).toBeEnabled({ timeout: 60000 });
   67 |         //     await rolLink.click(); 
   68 |         // });
   69 |     
   70 |         // await allure.step('hacer click para desplegar lista de roles', async () => {
   71 |         //     const showAllBtn = page.getByTitle('Show All Items');
   72 |         //     await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
   73 |         //     await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
   74 |         //     await showAllBtn.click();
   75 |         // });
   76 |
   77 |         // await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
   78 |         //     await page.getByText('NW Admin - LAB Network').click();
   79 |         // });
   80 |
   81 |         await allure.step('acceder a modulo identificadores', async () => {
>  82 |             await page.click('a[href="/Identifications"]')
      |                        ^ TimeoutError: page.click: Timeout 30000ms exceeded.
   83 |         });
   84 |
   85 |         await allure.step('veriricar que estamos en la url de identificadores', async () => {
   86 |             await expect(page).toHaveURL('https://console.ationet.com/Identifications');
   87 |         });    
   88 |     });
   89 |
   90 |     await allure.step('Crear nuevo identificador',async () => {
   91 |
   92 |         await allure.step('Click en boton nuevo',async () => {
   93 |             await page.getByRole('button', { name: 'Nuevo' }).first().click();
   94 |         });
   95 |
   96 |         await allure.step('veriricar que estamos en enlase de crear identificadores',async () => {
   97 |             await expect(page).toHaveURL('https://console.ationet.com/Identifications/Create');
   98 |         });
   99 |
  100 |         await allure.step('Desplegamos lista y seleccionamos tipo de identificador',async () => {
  101 |             await page.locator('#Identification_Type').selectOption({ label: 'Tarjeta' });
  102 |         });
  103 |
  104 |         await allure.step('Desplegamos lista y seleccionamos modelo de identificador',async () => {
  105 |             await page.locator('#IdIdentificationsTypesModel').selectOption({ label: 'Tarjeta con PIN' });
  106 |         });
  107 |
  108 |         await allure.step('Desplegamos lista y seleccionamos uso',async () => {
  109 |             await page.locator('#UseType').selectOption({ label: 'Flota' });
  110 |         });
  111 |
  112 |         await allure.step('Desplegamos lista y seleccionamos programa',async () => {
  113 |             await page.locator('#IdProgram').selectOption({ label: 'Clasico' });
  114 |         });
  115 |
  116 |         await allure.step('Click en input tarjeta',async () => {
  117 |             await page.locator('#Identification_Label').click();
  118 |         });
  119 |
  120 |         await allure.step('Escribir en input tarjeta',async () => {
  121 |             await page.locator('#Identification_Label').fill(idEtiqueta);
  122 |         });
  123 |
  124 |         await allure.step('Click en input track',async () => {
  125 |             await page.locator('#Identification_TrackNumber').click()
  126 |         });
  127 |
  128 |         await allure.step('Escribir en input track',async () => {
  129 |             await page.locator('#Identification_TrackNumber').fill(idEtiqueta+'='+idEtiqueta);
  130 |         });
  131 |
  132 |         await allure.step('click en input fecha de espiracion',async () => {
  133 |             await page.locator('#Identification_ExpirationDate').click();
  134 |         });
  135 |
  136 |         await allure.step('Escribir en input fecha de espiracion',async () => {
  137 |             await page.locator('#Identification_ExpirationDate').fill('2045/04/22');
  138 |         });
  139 |
  140 |         await allure.step('Click en input pan', async () => {
  141 |             await page.getByRole('textbox', { name: 'PAN: *' }).click();
  142 |         });
  143 |
  144 |         await allure.step('Escribir en input pan', async () => {
  145 |             await page.getByRole('textbox', { name: 'PAN: *' }).fill(idEtiqueta);
  146 |         });
  147 |
  148 |         await allure.step('Click en input correo',async () => {
  149 |             await page.getByRole('textbox', { name: 'Correo: *' }).click();
  150 |         });
  151 |
  152 |         await allure.step('Escribir en input correo',async () => {
  153 |             await page.locator('#Identification_Email').fill(idCorreo);
  154 |         });
  155 |
  156 |         await allure.step('Click en input pin',async () => {
  157 |             await page.getByRole('textbox', { name: 'PIN: *' }).click();
  158 |         });
  159 |
  160 |         await allure.step('Escribir en input pin',async () => {
  161 |             await page.getByRole('textbox', { name: 'PIN: *' }).fill('1234');
  162 |         });
  163 |
  164 |         await allure.step('Click en boton guardar',async () => {
  165 |             await page.locator('#save').click();
  166 |         });
  167 |
  168 |     });
  169 |
  170 |     await allure.step('Filtrar nuevo identificador',async () => {
  171 |
  172 |         await allure.step('Aseguramos que el panel filtro esté presente',async () => {
  173 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
  174 |         });
  175 |
  176 |         await allure.step('Click en el título filtro',async () => {
  177 |                     await allure.step('Verificamos que el panel de filtro exista',async () => {
  178 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 20000 });
  179 |         });
  180 |
  181 |         await allure.step('Click en el título, no en todo el panel',async () => {
  182 |             const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
```