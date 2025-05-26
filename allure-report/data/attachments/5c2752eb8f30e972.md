# Test info

- Name: Terminal y controladores
- Location: /home/maximilianodmorales/playwright/tests/NVAdmin LAB Network/administracion/terminales&Controladores.spec.ts:4:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('.dtls tr td a').first()
Expected string: "FOK6264editado"
Received string: "FOK6264"
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.dtls tr td a').first()
    3 × locator resolved to <a href="/Terminals/Details/b5926543-8b57-4511-b5c9-6ec5400843e4">T8997</a>
      - unexpected value "T8997"
    5 × locator resolved to <a href="/Terminals/Details/41b3cd65-218b-41db-93e0-c24d2431ddc1">FOK6264</a>
      - unexpected value "FOK6264"

    at body (/home/maximilianodmorales/playwright/tests/NVAdmin LAB Network/administracion/terminales&Controladores.spec.ts:205:65)
    at body (/home/maximilianodmorales/playwright/node_modules/allure-js-commons/src/facade.ts:113:48)
    at call (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:13:56)
    at tryCatch (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1
    at /home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1
    at call (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:13:23)
    at tryCatch (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1
    at AllurePlaywrightTestRuntime.apply (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at AllurePlaywrightTestRuntime.step (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:14:4)
    at callRuntimeMethod (/home/maximilianodmorales/playwright/node_modules/allure-js-commons/src/facade.ts:21:27)
    at Object.step (/home/maximilianodmorales/playwright/node_modules/allure-js-commons/src/facade.ts:113:10)
    at Object.step (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/legacy.ts:147:48)
    at /home/maximilianodmorales/playwright/tests/NVAdmin LAB Network/administracion/terminales&Controladores.spec.ts:204:22
```

# Page snapshot

```yaml
- link:
  - /url: /
- heading [level=1]
- heading "Private Labeling Made Easy" [level=2]
- paragraph:
  - link "Florencia Acuña (NWAdmin - LAB QA)":
    - /url: "#"
  - text: "|"
  - link "Mis Preferencias":
    - /url: /UsersAtionetPreferences/Edit
  - text: "|"
  - link "Asistencia":
    - /url: "#"
  - text: "|"
  - link "Cerrar Sesion":
    - /url: /Account/LogOff
- heading "Navegacion" [level=3]:
  - link:
    - /url: "#"
  - text: Navegacion
- list:
  - listitem:
    - link "Tablero":
      - /url: /
  - listitem:
    - link "Favoritos":
      - /url: /Favorites
  - listitem:
    - text: Reportes
    - list:
      - listitem:
        - link "Conductores":
          - /url: /Reports/Drivers
      - listitem:
        - link "Identificadores":
          - /url: /Reports/Identifications
      - listitem:
        - link "Lista de Precios de Distribución":
          - /url: /Reports/RackPricesLists
      - listitem:
        - link "Detalle de actividad por Vehiculo":
          - /url: /Reports/ActivityDetailByVehicle
      - listitem:
        - link "Sitios":
          - /url: /Reports/Sites
      - listitem:
        - link "Solicitudes de identificación":
          - /url: /Reports/IdentificationsRequests
      - listitem:
        - link "Solicitudes de Reporte":
          - /url: /ReportRequests
      - listitem:
        - link "Transacciones":
          - /url: /Reports/Transactions
      - listitem:
        - link "Transacciones extendidas":
          - /url: /Reports/ExtendedTransactions
      - listitem:
        - link "Vehículos":
          - /url: /Reports/Vehicles
  - listitem:
    - text: Administración
    - list:
      - listitem:
        - link "Banderas":
          - /url: /Brands
      - listitem:
        - link "Categorías de SKUs":
          - /url: /StockKeepingUnitsCategories
      - listitem:
        - link "Combustibles":
          - /url: /Fuels
      - listitem:
        - link "Comercios":
          - /url: /Merchants
      - listitem:
        - link "Compañias":
          - /url: /Companies
      - listitem:
        - link "Conductores":
          - /url: /Drivers
      - listitem:
        - link "Cotizaciones":
          - /url: /Quotations
      - listitem:
        - link "Depositos":
          - /url: /Warehouses
      - listitem:
        - link "Documentos Externos":
          - /url: /ExternalDocuments
      - listitem:
        - link "Grupos de Combustibles Maestros":
          - /url: /FuelsMastersGroups
      - listitem:
        - link "Grupos de Compañias":
          - /url: /CompaniesGroups
      - listitem:
        - link "Grupos de Compañías - Movimientos":
          - /url: /CompaniesGroupsMovements
      - listitem:
        - link "Identificadores":
          - /url: /Identifications
      - listitem:
        - link "Impuestos":
          - /url: /Taxes
      - listitem:
        - link "Instalaciones":
          - /url: /Installations
      - listitem:
        - link "Locaciones":
          - /url: /Locations
      - listitem:
        - link "Métodos de Pago":
          - /url: /PaymentsMethods
      - listitem:
        - link "Modelos de Identificador":
          - /url: /IdentificationsTypesModels
      - listitem:
        - link "Notificaciones":
          - /url: /NotificationsSuscriber
      - listitem:
        - link "Precios de distribución":
          - /url: /RackPrices
      - listitem:
        - link "Procesos de renovación de identificadores":
          - /url: /IdentificationsRenewerProcesses
      - listitem:
        - link "Proveedores de Identificadores":
          - /url: /IdentificationsProviders
      - listitem:
        - link "Sitios":
          - /url: /Sites
      - listitem:
        - link "SKUs":
          - /url: /StockKeepingUnits
      - listitem:
        - link "Terminales / Controladores":
          - /url: /Terminals
      - listitem:
        - link "Vehículos":
          - /url: /Vehicles
      - listitem:
        - link "Workflows de Aprobaciones":
          - /url: /WorkflowsInstances
      - listitem:
        - link "Zonas":
          - /url: /Zones
  - listitem:
    - text: Flotas
    - list:
      - listitem:
        - link "Alertas de Fraude":
          - /url: /FraudAlerts
      - listitem:
        - link "Aprobaciones de Workflows de Flota":
          - /url: /EntityWorkflows
      - listitem:
        - link "Autorizaciones Pendientes":
          - /url: /TransactionsOutstandingAuthorizations
      - listitem:
        - link "Conceptos":
          - /url: /Products
      - listitem:
        - link "Configuración de Alertas de Fraude":
          - /url: /FraudAlertsConfigurations
      - listitem:
        - link "Configuración de Fast Track":
          - /url: /FastTracks/Configuration
      - listitem:
        - link "Contingencias":
          - /url: /TransactionsContingencies
      - listitem:
        - link "Contratos de Comercios":
          - /url: /MerchantsContracts
      - listitem:
        - link "Contratos de Compañias":
          - /url: /CompanyContracts
      - listitem:
        - link "Cuentas corrientes de Comercio":
          - /url: /MerchantsCurrentAccounts
      - listitem:
        - link "Cuentas corrientes de Compañia":
          - /url: /CurrentAccounts
      - listitem:
        - link "Encargados":
          - /url: /Attendants
      - listitem:
        - link "Excepciones":
          - /url: /TransactionsExceptions
      - listitem:
        - link "Facturas":
          - /url: /CompanyInvoices
      - listitem:
        - link "Familias de Conceptos":
          - /url: /ProductsFamilies
      - listitem:
        - link "Fast Tracks":
          - /url: /FastTracks
      - listitem:
        - link "Identificaciones Solicitadas":
          - /url: /IdentificationsRequests
      - listitem:
        - link "Planificador de Identificadores":
          - /url: /IdentificationsScheduler
      - listitem:
        - link "Programas":
          - /url: /Programs
      - listitem:
        - link "Reglas":
          - /url: /Rules
      - listitem:
        - link "Sobregiro":
          - /url: /CompanyContractsOverLimits
      - listitem:
        - link "Tarjeta de Regalo":
          - /url: /GiftCard
      - listitem:
        - link "Tarjetas de Regalo Solicitadas":
          - /url: /GiftCard/RequestIndex
      - listitem:
        - link "Tipo de Comprobante":
          - /url: /InvoicesTypes
      - listitem:
        - link "Transacciones":
          - /url: /Transactions
      - listitem:
        - link "Transacciones Desconocidas":
          - /url: /TransactionsDisputes
      - listitem:
        - link "Transacciones Despachadas":
          - /url: /TransactionsDispensed
      - listitem:
        - link "Transacciones ERP":
          - /url: /TransactionsERP
      - listitem:
        - link "Transacciones por Conductor":
          - /url: /Transactions/DriverTransactions
      - listitem:
        - link "Transacciones por Flota":
          - /url: /Transactions/FleetTransactions
      - listitem:
        - link "Transacciones por Sitio":
          - /url: /Transactions/SiteTransactions
      - listitem:
        - link "Transacciones por Vehiculo":
          - /url: /Transactions/VehicleTransactions
      - listitem:
        - link "Transacciones Rechazadas":
          - /url: /TransactionsRejected
      - listitem:
        - link "Transacciones sin control":
          - /url: /UncontrolledTransactions
      - listitem:
        - link "Vales":
          - /url: /VoucherIdentifications
      - listitem:
        - link "Vales - Administración":
          - /url: /Vouchers
  - listitem:
    - text: Liquidaciones
    - list:
      - listitem:
        - link "Cargos Externos":
          - /url: /ExternalCharges
      - listitem:
        - link "Comprobantes de Comision":
          - /url: /MerchantCharges
      - listitem:
        - link "Configuración de tipos de liquidación":
          - /url: /BillingTypesConfigurations
      - listitem:
        - link "Documentos de Cargos":
          - /url: /Billing
      - listitem:
        - link "Documentos de Liquidaciones":
          - /url: /BillingDocuments
      - listitem:
        - link "Estados de Cuenta":
          - /url: /Billing/Statements
      - listitem:
        - link "Items Liquidados":
          - /url: /Billing/BilledItems
      - listitem:
        - link "Procesos de Liquidación":
          - /url: /Processes/Billing
  - listitem:
    - text: Tarjeta de Regalo
    - list:
      - listitem:
        - link "Autorizaciones Pendientes":
          - /url: /GiftCardTransactionsOutstandingAuthorizations
      - listitem:
        - link "Contingencias":
          - /url: /GiftCardTransactionsContingencies
      - listitem:
        - link "Movimientos":
          - /url: /GiftCardMovements
      - listitem:
        - link "Programas":
          - /url: /GiftCardPrograms
      - listitem:
        - link "Tarjetas":
          - /url: /GiftCardClients
      - listitem:
        - link "Tarjetas Solicitadas":
          - /url: /GiftCardClientsRequests
      - listitem:
        - link "Transacciones":
          - /url: /GiftCardTransactions
      - listitem:
        - link "Transacciones Rechazadas":
          - /url: /GiftCardTransactionsRejected
  - listitem:
    - text: Consumer Card
    - list:
      - listitem:
        - link "Autorizaciones Pendientes":
          - /url: /ConsumerCardTransactionsOutstandingAuthorizations
      - listitem:
        - link "Contingencias":
          - /url: /ConsumerCardTransactionsContingencies
      - listitem:
        - link "Documentos de Cargos":
          - /url: /ConsumerCardBillingCharges
      - listitem:
        - link "Documentos de Liquidaciones":
          - /url: /ConsumerCardBillingDocuments
      - listitem:
        - link "Errores":
          - /url: /ConsumerCardBillingProcessesErrors
      - listitem:
        - link "Estados de Cuenta":
          - /url: /ConsumerCardBillingStatements
      - listitem:
        - link "Items Liquidados":
          - /url: /ConsumerCardBillingChargesItems
      - listitem:
        - link "Movimientos":
          - /url: /ConsumerCardMovements
      - listitem:
        - link "Procesos de Liquidación":
          - /url: /ConsumerCardBillingProcesses
      - listitem:
        - link "Programas":
          - /url: /ConsumerCardPrograms
      - listitem:
        - link "Recargas":
          - /url: /ConsumerCardRecharges
      - listitem:
        - link "Tarjetas":
          - /url: /ConsumerCardClients
      - listitem:
        - link "Tarjetas Solicitadas":
          - /url: /ConsumerCardClientsRequests
      - listitem:
        - link "Transacciones":
          - /url: /ConsumerCardTransactions
      - listitem:
        - link "Transacciones Rechazadas":
          - /url: /ConsumerCardTransactionsRejected
  - listitem:
    - text: Fidelidad
    - list:
      - listitem:
        - link "Ajustes":
          - /url: /LoyaltyTransactionsAdjustments
      - listitem:
        - link "Almacenes de premios":
          - /url: /LoyaltyStockKeepingUnitsWarehouses
      - listitem:
        - link "Canjes":
          - /url: /LoyaltyTransactionsRedemptions
      - listitem:
        - link "Cierres de Lotes":
          - /url: /LoyaltyBatchCloses
      - listitem:
        - link "Clases de Entrada de Servicios":
          - /url: /ServiceEntryClasses
      - listitem:
        - link "Clientes":
          - /url: /LoyaltyClients/Create
      - listitem:
        - link "Comunidades":
          - /url: /LoyaltyPrograms
      - listitem:
        - link "Conciliaciones":
          - /url: /LoyaltyTransactionsConciliations
      - listitem:
        - link "Configuracion de Comunidad":
          - /url: /CommunitySettings
      - listitem:
        - link "Contingencias":
          - /url: /LoyaltyTransactionsContingencies
      - listitem:
        - link "Cuenta Corriente":
          - /url: /LoyaltyMovementsCurrentAccounts
      - listitem:
        - link "Cupones":
          - /url: /LoyaltyCoupons
      - listitem:
        - link "Excepciones":
          - /url: /LoyaltyTransactionsExceptions
      - listitem:
        - link "Grupos de tipo de entrada de servicios":
          - /url: /ServiceEntryTypesGroups
      - listitem:
        - link "Hojas de Servicio":
          - /url: /ServiceFiles
      - listitem:
        - link "Identidades":
          - /url: /Identities
      - listitem:
        - link "Movimientos de stock":
          - /url: /LoyaltyStockKeepingUnitsMovements
      - listitem:
        - link "Parámetros de liquidaciones":
          - /url: /LoyaltySettlementsParameters
      - listitem:
        - link "Procesos de Contingencias":
          - /url: /LoyaltyTransactionsContingenciesProcessses
      - listitem:
        - link "Procesos de cupones de fidelidad":
          - /url: /LoyaltyCouponsProcesses
      - listitem:
        - link "Reglas de Descuento":
          - /url: /LoyaltyProgramsDiscountRules
      - listitem:
        - link "Reglas de Puntos":
          - /url: /LoyaltyRules
      - listitem:
        - link "Tipos de Entrada de Servicio":
          - /url: /ServiceEntryTypes
      - listitem:
        - link "Transacciones":
          - /url: /LoyaltyTransactions
      - listitem:
        - link "Transferencias":
          - /url: /LoyaltyTransactionsTransfers
      - listitem:
        - link "Unidades":
          - /url: /LoyaltyUnits
  - listitem:
    - text: Alertas
    - list:
      - listitem:
        - link "Formatos":
          - /url: /NotificationsFormats
      - listitem:
        - link "Notificaciones":
          - /url: /Notifications
      - listitem:
        - link "Reglas":
          - /url: /AlertsRules
  - listitem:
    - text: Configuración
    - list:
      - listitem:
        - link "Clasificadores de contratos de compañía":
          - /url: /CompanyContractsClassificationsConfigurations
      - listitem:
        - link "- Cor":
          - /url: /CompanyContractsClassifications/Classification0
      - listitem:
        - link "Clasificadores de Sitio":
          - /url: /SitesClassificationsConfigurations
      - listitem:
        - link "Códigos ERP de Combustibles":
          - /url: /FuelsERPCodes
      - listitem:
        - link "Configuraciones de Procesos":
          - /url: /ProcessesConfigurations
      - listitem:
        - link "Configuraciones de Workflows de Flota":
          - /url: /WorkflowConfigurations
      - listitem:
        - link "Motivos de Contingencias":
          - /url: /TransactionsContingenciesReasons
      - listitem:
        - link "Pasarelas de pago":
          - /url: /PaymentGateways
      - listitem:
        - link "Planificador de Identificadores":
          - /url: /IdentificationsSchedulerConfigurations
      - listitem:
        - link "Proveedores de GPS":
          - /url: /GPSProviders
      - listitem:
        - link "Red":
          - /url: /NetworkConfigurations/Edit
      - listitem:
        - link "Servicios de sitios":
          - /url: /SitesServices
      - listitem:
        - link "Tipos de Documentos Externos":
          - /url: /DocumentTypesAccepted
  - listitem:
    - text: Seguridad
    - list:
      - listitem:
        - link "Bitácora de Auditorias":
          - /url: /AuditLog
      - listitem:
        - link "Bitácora de Procesos":
          - /url: /Processes
      - listitem:
        - link "Roles":
          - /url: /CustomRoles
      - listitem:
        - link "Usuarios":
          - /url: /Users
- 'heading "Mis Filtros Opciones Ud. esta en: Administración > Terminales / Controladores" [level=3]':
  - link:
    - /url: "#"
  - button "Mis Filtros"
  - button "Opciones"
  - text: "Ud. esta en: Administración > Terminales / Controladores"
- heading "Terminales / Controladores" [level=4]
- text: Filtros
- table:
  - rowgroup:
    - row "Código:":
      - cell "Código:":
        - paragraph:
          - text: "Código:"
          - textbox "Código:"
      - cell
      - cell
      - cell
    - 'row "Descripción: 6264editado"':
      - 'cell "Descripción: 6264editado"':
        - paragraph:
          - text: "Descripción:"
          - textbox "Descripción:": 6264editado
      - cell
      - cell
      - cell
    - row "Sitio:":
      - cell "Sitio:":
        - paragraph:
          - text: "Sitio:"
          - list:
            - listitem:
              - textbox "Ingresar Nombre Sitio"
      - cell
      - cell
      - cell
    - row "Buscar Crear Filtro":
      - cell "Buscar Crear Filtro":
        - button "Buscar"
        - button "Crear Filtro"
      - cell
- paragraph:
  - text: 1 - 1 de 1
  - button "Primera Página"
  - button "Página Anterior"
  - textbox: "1"
  - button "Próxima Página"
  - button "Última Página"
  - button "Acciones en Lote"
  - button "Opciones"
  - button "Nuevo"
  - button "Vista Condensada"
  - button "Vista detallada"
  - button "Exportar"
- table:
  - rowgroup:
    - row "Código Descripción Sitio Lector de TAG Instalado Uso del Id del Conductor Uso del Id del Vehículo Combustible Límite máximo de volumen Límite máximo de monto Solo Pre Autorizaciones Asistidas Opciones":
      - cell:
        - checkbox
      - cell "Código":
        - link "Código":
          - /url: "#"
      - cell "Descripción"
      - cell "Sitio"
      - cell "Lector de TAG Instalado"
      - cell "Uso del Id del Conductor"
      - cell "Uso del Id del Vehículo"
      - cell "Combustible"
      - cell "Límite máximo de volumen"
      - cell "Límite máximo de monto"
      - cell "Solo Pre Autorizaciones Asistidas"
      - cell "Opciones"
    - row "FOK6264 6264editado No Ninguno Ninguno No Editar":
      - cell:
        - checkbox
      - cell "FOK6264":
        - link "FOK6264":
          - /url: /Terminals/Details/41b3cd65-218b-41db-93e0-c24d2431ddc1
      - cell "6264editado"
      - cell
      - cell "No"
      - cell "Ninguno"
      - cell "Ninguno"
      - cell
      - cell
      - cell
      - cell "No"
      - cell "Editar":
        - link "Editar":
          - /url: "#"
    - row
- paragraph:
  - text: 1 - 1 de 1
  - button "Primera Página"
  - button "Página Anterior"
  - textbox: "1"
  - button "Próxima Página"
  - button "Última Página"
  - button "Acciones en Lote"
  - button "Opciones"
  - button "Nuevo"
  - button "Vista Condensada"
  - button "Vista detallada"
  - button "Exportar"
- paragraph
- paragraph:
  - text: v 2.6.6750.0 | Powered by
  - link "ATIONET LLC.":
    - /url: http://www.ationet.com
  - link "Soporte":
    - /url: mailto:prodsupport@ationet.com
  - text: "|"
  - link "Feedback":
    - /url: mailto:hello@ationet.com
```

# Test source

```ts
  105 |         });
  106 |
  107 |         await allure.step('Click en input codigo',async () => {
  108 |             await page.locator('#Terminal_Code').click();
  109 |         });
  110 |             
  111 |         await allure.step('Escribir en input codigo',async () => {
  112 |             await page.locator('#Terminal_Code').fill(terminalCode);
  113 |         });
  114 |
  115 |         await allure.step('Click en input descripcion',async () => {
  116 |             await page.locator('#Terminal_Description').click();
  117 |         });
  118 |
  119 |         await allure.step('Escribir en input descripcion',async () => {
  120 |             await page.locator('#Terminal_Description').fill(terminalDescription);
  121 |         });
  122 |
  123 |         await allure.step('Click en boton guardar',async () => {
  124 |             await page.locator('#save').click();
  125 |         });
  126 |
  127 |     });
  128 |
  129 |     await allure.step('filtrar nuevo terminal y controladores',async () => {
  130 |         await allure.step('Aseguramos que el filtro esté presente',async () => {
  131 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
  132 |         });
  133 |
  134 |         await allure.step('Click en el filtro, no en todo el panel',async () => {
  135 |             await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
  136 |         });
  137 |
  138 |         await allure.step('Esperar que se despliegue el filtro',async () => {
  139 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  140 |         });
  141 |
  142 |         await allure.step('Click en input descripcion',async () => {
  143 |             await page.locator('label[for="Description"]').click();
  144 |         });
  145 |
  146 |         await allure.step('Escribir en input descripcion',async () => {
  147 |             await page.locator('label[for="Description"]').fill(terminalDescription);
  148 |         });
  149 |
  150 |         await allure.step('Click en boton buscar',async () => {
  151 |             await page.locator('#search').click();
  152 |         });
  153 |
  154 |         await allure.step('verificamos que este nuestro terminales / controladores',async () => {
  155 |             await expect(page.locator('.dtls tr td a').first()).toHaveText('FOK'+ terminalDescription);
  156 |         });
  157 |
  158 |     });
  159 |
  160 |     await allure.step('editar nuevo terminal y controladores',async () => {
  161 |         
  162 |         await allure.step('Click en editar',async () => {
  163 |             await page.getByRole('link', { name: 'Edit' }).click();
  164 |         });
  165 |
  166 |         await allure.step('Click en input descripcion',async () => {
  167 |             await page.locator('#Terminal_Description').click();
  168 |         });
  169 |
  170 |         await allure.step('Escribir en input descripcion',async () => {
  171 |             await page.locator('#Terminal_Description').fill(terminalDescription + 'editado');
  172 |         });
  173 |
  174 |         await allure.step('Click en boton guardar',async () => {
  175 |             await page.locator('#save').click();
  176 |         });
  177 |     });
  178 |
  179 |     await allure.step('filtrar nuevo terminal y controladores editado',async () => {
  180 |         await allure.step('Aseguramos que el filtro esté presente',async () => {
  181 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
  182 |         });
  183 |
  184 |         await allure.step('Click en el filtro, no en todo el panel',async () => {
  185 |             await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
  186 |         });
  187 |
  188 |         await allure.step('Esperar que se despliegue el filtro',async () => {
  189 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  190 |         });
  191 |
  192 |         await allure.step('Click en input descripcion',async () => {
  193 |             await page.locator('label[for="Description"]').click();
  194 |         });
  195 |
  196 |         await allure.step('Escribir en input descripcion',async () => {
  197 |             await page.locator('label[for="Description"]').fill(terminalDescription + 'editado');
  198 |         });
  199 |
  200 |         await allure.step('Click en boton buscar',async () => {
  201 |             await page.locator('#search').click();
  202 |         });
  203 |
  204 |         await allure.step('verificamos que este nuestro terminales / controladores',async () => {
> 205 |             await expect(page.locator('.dtls tr td a').first()).toHaveText('FOK'+ terminalDescription + 'editado');
      |                                                                 ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  206 |         });
  207 |
  208 |     });
  209 |
  210 | })
  211 |
```