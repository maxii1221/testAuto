# Test info

- Name: Vehiculos
- Location: /home/maximilianodmorales/testAuto/tests/Atio lab Flota/NWCompany/administracion/vehiculos.spec.ts:4:5

# Error details

```
TimeoutError: page.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('a[href="/Vehicles"]')
    - waiting for" https://console.ationet.com/" navigation to finish...

    at body (/home/maximilianodmorales/testAuto/tests/Atio lab Flota/NWCompany/administracion/vehiculos.spec.ts:86:24)
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
    at /home/maximilianodmorales/testAuto/tests/Atio lab Flota/NWCompany/administracion/vehiculos.spec.ts:85:22
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { allure } from 'allure-playwright';
   3 |
   4 | test('Vehiculos', async ({ page }, testInfo) => {
   5 |     
   6 |     //varibles:
   7 |     const urlBETA = testInfo.project.use?.baseURL;
   8 |     
   9 |     // Allure metadata
   10 |
   11 |     //esto aparece en suite para ordenar mejor
   12 |     allure.suite('NWCompany');
   13 |     allure.subSuite('Administracion');
   14 |
   15 |     //usuario que ejecuto la automatizacion
   16 |     allure.owner('Maximiliano');
   17 |     allure.tag('regression');
   18 |
   19 |     //label para funcionalidades allure
   20 |     allure.label('epic', 'NWCompany - Administracion');
   21 |     allure.label('feature', 'Vehiculos');
   22 |     allure.story('Navegar, Crear, editar y eliminar Vehiculos');
   23 |
   24 |     //dentro del test cuando lo abrimos aparece la descripcion
   25 |     allure.description(`
   26 |     Objetivo: Este test automatiza el proceso completo de creación, edición y eliminación de un Vehiculos.
   27 |     `);
   28 |     allure.severity('critical'); // opciones: blocker | critical | normal | minor | trivial
   29 |
   30 |     // Generar un valor aleatorio para cada campo
   31 |     const hoy = new Date();
   32 |     hoy.setDate(hoy.getDate() - 1); // Resta un día
   33 |     const fechaISO = hoy.toISOString().split('T')[0].replace(/-/g, '/');
   34 |
   35 |     const randomId = Math.floor(Math.random() * 10000);
   36 |     const VehiculoAutomatica = `driver${randomId}`;
   37 |
   38 |     await allure.step('Navegar y acceder a Vehiculos',async () => {
   39 |         await allure.step('Acceder a la url de login', async () => {
   40 |             await page.goto(urlBETA!);
   41 |         });
   42 |
   43 |         await allure.step('Hacer click en input nombre de usuario', async () => {
   44 |             await page.locator('#UserName').click();
   45 |         });
   46 |
   47 |         await allure.step('Escribir en input nombre de usuario', async () => {
   48 |             await page.locator('#UserName').fill('QAutomation2@gmail.com');
   49 |         });
   50 |
   51 |         await allure.step('Hacer click en input Contraseña de usuario', async () => {
   52 |             await page.locator('#Password').click();
   53 |         });
   54 |
   55 |         await allure.step('Escribir en input Contraseña de usuario', async () => {
   56 |             await page.locator('#Password').fill('N9VOSBIA');
   57 |         });
   58 |
   59 |         await allure.step('Hacer Click en ingresar', async () => {
   60 |             await page.locator('#submit').click();
   61 |         });
   62 |         
   63 |         await allure.step('espera de carga', async () => {
   64 |             await page.waitForTimeout(2000); // espera 2 segundos
   65 |         });
   66 |
   67 |         // await allure.step('hacer click para cambiar rol', async () => {
   68 |         //     const rolLink = page.getByRole('link', { name: /QAutomation Test \(/ }); // regex para tolerar variantes
   69 |         //     await rolLink.waitFor({ state: 'visible', timeout: 60000 });
   70 |         //     await expect(rolLink).toBeEnabled({ timeout: 60000 });
   71 |         //     await rolLink.click(); 
   72 |         // });
   73 |     
   74 |         // await allure.step('hacer click para desplegar lista de roles', async () => {
   75 |         //     const showAllBtn = page.getByTitle('Show All Items');
   76 |         //     await showAllBtn.waitFor({ state: 'visible', timeout: 60000 });
   77 |         //     await expect(showAllBtn).toBeEnabled({ timeout: 60000 });
   78 |         //     await showAllBtn.click();
   79 |         // });
   80 |
   81 |         // await allure.step('hacer click en rol NW Company - Atio Lab Flota', async () => {
   82 |         //     await page.getByText('NW Company Admin - Atio Lab').click();
   83 |         // });
   84 |
   85 |         await allure.step('acceder a modulo Conductores', async () => {
>  86 |             await page.click('a[href="/Vehicles"]');
      |                        ^ TimeoutError: page.click: Timeout 30000ms exceeded.
   87 |         });
   88 |
   89 |         await allure.step('veriricar que estamos en la url de Conductores', async () => {
   90 |             await expect(page).toHaveURL('https://console.ationet.com/Vehicles');
   91 |         });    
   92 |     });   
   93 |
   94 |     await allure.step('Crear Nuevo Vehiculos' , async () => {
   95 |
   96 |         await allure.step('Click en boton nuevo' , async () => {
   97 |             await page.getByRole('button', { name: 'Nuevo' }).first().click();
   98 |         });
   99 |
  100 |         // await allure.step('veriricar que estamos en url de crear vehiculo' , async () => {
  101 |         //     await expect(page).toHaveURL('NWCompanyAdmin - Atio Lab Flota/Vehicles/Create');
  102 |         // });
  103 |
  104 |         await allure.step('Click en input Codigo' , async () => {
  105 |             await page.locator('#Vehicle_Code').click();
  106 |         });
  107 |
  108 |         await allure.step('Escribir en input Codigo' , async () => {
  109 |             await page.locator('#Vehicle_Code').fill(VehiculoAutomatica);
  110 |         });
  111 |
  112 |         await allure.step('Desplegar y seleccionar flota' , async () => {
  113 |             await page.locator('#IdFleet').selectOption({ label: 'Servicios' }); 
  114 |         });
  115 |
  116 |         // await allure.step('Desplegar y seleccionar clasificacion prueba' , async () => {
  117 |         //     await page.locator('#IdClasification1').selectOption({ label: '123 - prueba' }); 
  118 |         // });
  119 |         
  120 |         await allure.step('Click en boton guardar' , async () => {
  121 |             await page.locator('#save').click();
  122 |         });  
  123 |     });
  124 |
  125 |     await allure.step('Filtrar Nueva Vehiculos' , async () => {
  126 |
  127 |         await allure.step('Aseguramos que el Filtro esté presente' , async () => {
  128 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
  129 |         });
  130 |
  131 |         await allure.step('Click en el filtro, no en todo el panel' , async () => {
  132 |                     await allure.step('Verificamos que el panel de filtro exista',async () => {
  133 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 20000 });
  134 |         });
  135 |
  136 |         await allure.step('Click en el título, no en todo el panel',async () => {
  137 |             const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
  138 |             await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
  139 |             await panelTitle.click();
  140 |         });
  141 |
  142 |         await allure.step('Esperar que se despliegue el contenido',async () => {
  143 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
  144 |         });({ timeout: 60000 });
  145 |         });
  146 |
  147 |         await allure.step('Esperar que se despliegue el contenido' , async () => {
  148 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  149 |         });
  150 |
  151 |         await allure.step('Click en input codigo' , async () => {
  152 |             await page.locator('label[for="code"]').click(); 
  153 |         });
  154 |
  155 |         await allure.step('Escribir en input codigo' , async () => {
  156 |             await page.locator('label[for="code"]').fill(VehiculoAutomatica);
  157 |         });
  158 |
  159 |         await allure.step('Click en boton buscar' , async () => {
  160 |             await page.locator('#search').click();
  161 |         });
  162 |
  163 |         await allure.step('verificamos que este nuestra combustibles' , async () => {
  164 |             await expect(page.locator('.dtls tr td a').first()).toHaveText(VehiculoAutomatica);
  165 |         });
  166 |
  167 |     });
  168 |
  169 |     await allure.step('Editar Nueva Vehiculos' , async () => {
  170 |
  171 |         await allure.step('Click en editar' , async () => {
  172 |             await page.getByRole('link', { name: 'Editar' }).first().click();
  173 |         });
  174 |
  175 |         await allure.step('Click en input descripcion' , async () => {
  176 |             await page.locator('#Vehicle_Code').click();
  177 |         });
  178 |
  179 |         await allure.step('Escribir en input descripcion' , async () => {
  180 |             await page.locator('#Vehicle_Code').fill(VehiculoAutomatica + 'editado');
  181 |         });
  182 |
  183 |         await allure.step('Click en boton guardar' , async () => {
  184 |             await page.locator('#save').click();
  185 |         });
  186 |     });
```