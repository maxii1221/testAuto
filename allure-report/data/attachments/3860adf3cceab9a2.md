# Test info

- Name: Identificadores
- Location: /home/maximilianodmorales/playwright/tests/NVAdmin LAB Network/administracion/Identificadores.spec.ts:4:5

# Error details

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#filterPanel') to be visible

    at body (/home/maximilianodmorales/playwright/tests/NVAdmin LAB Network/administracion/Identificadores.spec.ts:148:48)
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
    at body (/home/maximilianodmorales/playwright/tests/NVAdmin LAB Network/administracion/Identificadores.spec.ts:147:22)
    at body (/home/maximilianodmorales/playwright/node_modules/allure-js-commons/src/facade.ts:113:48)
    at call (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:13:56)
    at tryCatch (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator._invoke (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at Generator.next (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at asyncGeneratorStep (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at _next (/home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1)
    at /home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1
    at /home/maximilianodmorales/playwright/node_modules/allure-playwright/src/runtime.ts:2:1
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
- 'heading "Mis Filtros Opciones Ud. esta en: Identificadores > Nuevo Identificacion" [level=3]':
  - button "Mis Filtros"
  - button "Opciones"
  - text: "Ud. esta en:"
  - link "Identificadores":
    - /url: /Identifications
  - text: "> Nuevo Identificacion"
- heading "Crear Identificacion" [level=4]
- table:
  - rowgroup:
    - row "Información":
      - cell "Información":
        - heading "Información" [level=1]
    - 'row "Tipo: * Tarjeta Modelo: * PRUEBA"':
      - 'cell "Tipo: * Tarjeta"':
        - paragraph:
          - text: "Tipo: *"
          - 'combobox "Tipo: *"':
            - option "-- Seleccione --"
            - option "Tarjeta" [selected]
            - option "TAG"
            - option "Chipkey"
            - option "Entrada Manual"
            - option "Código de barras"
            - option "Holograma"
            - option "QR"
      - cell
      - 'cell "Modelo: * PRUEBA"':
        - paragraph:
          - text: "Modelo: *"
          - 'combobox "Modelo: *"':
            - option "-- Seleccione --"
            - option "Modelo Basico"
            - option "PRUEBA" [selected]
            - option "Tarjeta Test"
            - option "Prueba Prueba"
            - option "Name1003192908"
            - option "SnoSoporta"
            - option "Name0611064252"
            - option "WanoModelo1212"
            - option "WanoModelo"
            - option "Tarjeta Placa"
            - option "BraianQA"
            - option "Encriptado"
            - option "SIBWANA"
            - option "UnicoUso"
            - option "PruebaJM"
            - option "Sunny Go"
            - option "Name0531162924"
            - option "Name1003201341"
            - option "Encriptado De Track/PAN"
            - option "SIBWANA"
            - option "Inactivacion post 1 Dia"
            - option "okokok"
            - option "pinchange"
            - option "Name0531164613"
            - option "Name1004161435"
            - option "Tarjeta con PIN"
            - option "Modelo Basico"
            - option "PRUEBA"
            - option "Tarjeta Test"
            - option "Prueba Prueba"
            - option "Name1003192908"
            - option "SnoSoporta"
            - option "Name0611064252"
            - option "WanoModelo1212"
            - option "WanoModelo"
            - option "Tarjeta Placa"
            - option "BraianQA"
            - option "Encriptado"
            - option "SIBWANA"
            - option "UnicoUso"
            - option "PruebaJM"
            - option "Sunny Go"
            - option "Name0531162924"
            - option "Name1003201341"
            - option "Encriptado De Track/PAN"
            - option "SIBWANA"
            - option "Inactivacion post 1 Dia"
            - option "okokok"
            - option "pinchange"
            - option "Name0531164613"
            - option "Name1004161435"
            - option "Tarjeta con PIN"
      - cell
      - cell
    - 'row "Tipo de Uso: * Flota Comunidad: -- Seleccione --"':
      - 'cell "Tipo de Uso: * Flota"':
        - paragraph:
          - text: "Tipo de Uso: *"
          - 'combobox "Tipo de Uso: *"':
            - option "-- Seleccione --"
            - option "Flota" [selected]
            - option "Fidelidad"
            - option "Dual"
      - cell
      - 'cell "Comunidad: -- Seleccione --"':
        - paragraph:
          - text: "Comunidad:"
          - combobox "Comunidad:" [disabled]:
            - option "-- Seleccione --" [selected]
            - option "-"
            - option "TESTJM_"
            - option "0.0"
            - option "1b23"
            - option "asd"
            - option "brain vip"
            - option "descripcion"
            - option "descriptiom"
            - option "Dev2"
            - option "forro"
            - option "HKLoyaltyProgram"
            - option "LoyaltyProgram"
            - option "OTI-Puntos"
            - option "PROMO AXION"
            - option "Prueba 23"
            - option "Prueba Promo Napse"
            - option "Prueba QA"
            - option "prueba qa"
            - option "prueba qa 1"
            - option "pruebadual"
            - option "test"
            - option "test"
            - option "test1"
      - cell
      - cell
    - 'row "Programa: * Classic Contrato: -- Seleccione --"':
      - 'cell "Programa: * Classic"':
        - paragraph:
          - text: "Programa: *"
          - 'combobox "Programa: *"':
            - option "-- Seleccione --"
            - option "dfFF"
            - 'option "{{uniqueDesc}}"'
            - option "1"
            - option "111"
            - option "121"
            - option "1231313"
            - option "12345678"
            - option "ApiProgramTest2"
            - option "bbbb"
            - option "Classic" [selected]
            - option "descripcion"
            - option "efgh"
            - option "GCP"
            - option "hgvg"
            - option "juancarrrrrr"
            - option "Laboratorio Fisu"
            - option "Laugh Tale"
            - option "Luffy"
            - option "Luffytaro"
            - option "no soporta offline"
            - option "no, si, no, si"
            - option "Original"
            - option "pipo"
            - option "PRUEBAQA"
            - option "soporta offline"
            - option "TEST"
            - option "TESTHito3"
            - option "testjm"
            - option "TESTjmig"
            - option "Test-vale"
            - option "Wano"
      - cell
      - 'cell "Contrato: -- Seleccione --"':
        - paragraph:
          - text: "Contrato:"
          - combobox "Contrato:":
            - option "-- Seleccione --" [selected]
            - option "APIRESTCONTRACTEDI2 - Credito"
            - option "ApiRestContractEditado2 - Credito"
            - option "BETA2 - Credito"
            - option "Bug925_1 - Credito"
            - option "ContratoDePrueba - Credito"
            - option "ContratoDePrueba2 - Credito"
            - option "HkContract - Credito"
            - option "HKRackContractCode2 - Credito"
            - option "HkTest1231 - Credito"
            - option "HkTest21 - Credito"
            - option "HkTest212 - Credito"
            - option "HkTest34 - Credito"
            - option "HkTest348 - Credito"
            - option "HkTest3635 - Credito"
            - option "Prueba91436 - Credito"
            - option "PruebaPBI91436 - Credito"
            - option "TEST2 - Credito"
            - option "0001 - Debito"
            - option "001 - Credito"
            - option "00401 - Debito"
            - option "01 - Debito"
            - option "1 - Credito"
            - option "100001 - Credito"
            - option "123 - Credito"
            - option "123123123 - Credito"
            - option "12345 - Credito"
            - option "1234561 - Debito"
            - option "1NORMAL - Credito"
            - option "20602609920230314120954 - Credito"
            - option "2304 - Contado"
            - option "232323 - Credito"
            - option "23534535123412355 - Credito"
            - option "24 - Credito"
            - option "25 - Contado"
            - option "26308 - Credito"
            - option "27437 - Credito"
            - option "29999 - Credito"
            - option "312 - Credito"
            - option "35127 - Credito"
            - option "41889 - Credito"
            - option "47457 - Credito"
            - option "5000000220 - Credito"
            - option "5000002912 - Contado"
            - option "50000029120 - Contado"
            - option "54545556654 - Credito"
            - option "55 - Debito"
            - option "55505 - Credito"
            - option "55577 - Credito"
            - option "7878888101 - Debito"
            - option "86800 - Credito"
            - option "95988 - Credito"
            - option "97185 - Credito"
            - option "999999 - Credito"
            - option "A3123 - Debito"
            - option "A31233 - Debito"
            - option "A312334 - Credito"
            - option "APITESTCONTRATO - Contado"
            - option "APITESTJM - Credito"
            - option "APITESTJMtest - Credito"
            - option "AUTOMATED TEST - Contado"
            - option "AUTOMATED TEST2 - Contado"
            - option "BRAIAN PAZ - Credito"
            - option "BRAIAN VIP - Credito"
            - option "BRAIANasa VIP - Credito"
            - option "BRAIANasaqasw VIP - Credito"
            - option "BRAIANasaqsw VIP - Credito"
            - option "BRAIANasaqw VIP - Credito"
            - option "BRAIANVIP - Credito"
            - option "BUG109022 - Credito"
            - option "CONTRATO PRUEBA - Credito"
            - option "CONTRATOCOMPANIAQA - Credito"
            - option "CONTRATOCOMPANIAQA22 - Credito"
            - option "CONTRATODEPRUEBA - Credito"
            - option "CONTRATODEPRUEBA2 - Credito"
            - option "CONTRATOHOLOGRAMAS - Credito"
            - option "ContratoLocacion - Credito"
            - option "ContratoLocacion2 - Credito"
            - option "ContratoLocacion3 - Credito"
            - option "DISPERSION01 - Credito"
            - option "ELMOMO - Credito"
            - option "FORMULA 1 - Credito"
            - option "HKContractPrice - Credito"
            - option "HKTest - Credito"
            - option "HORNO - Credito"
            - option "INACTIVOHGH - Credito"
            - option "KUNI - Credito"
            - option "Local Agent Contract - Contado"
            - option "MONI - Credito"
            - option "MrMArcelCode - Credito"
            - option "NOMONI - Credito"
            - option "PAGANI - NO TOCAR - Credito"
            - option "PNC CONTRACT - Credito"
            - option "PPAGANICONTRACT - Credito"
            - option "PRUEBA - Credito"
            - option "PRUEBA2 - Credito"
            - option "PRUEBA3 - Credito"
            - option "PRUEBABUGAQUOTA - Credito"
            - option "PRUEBABUGAQUOTA2 - Credito"
            - option "PRUEBABUGAQUOTA3 - Debito"
            - option "PRUEBABUGAQUOTA4 - Contado"
            - option "PRUEBADEFECT - Credito"
            - option "PRUEBANATIVEENTREGA - Credito"
            - option "SINDINERO - Credito"
            - option "TEST - Credito"
            - option "TEST PRECIO LA - Credito"
            - option "TEST PRECIO LAA - Credito"
            - option "TEST16316CONTR - Debito"
            - option "TEST222 - Credito"
            - option "TESTCOMPANY - Credito"
            - option "TESTCOMPANY_138 - Credito"
            - option "TESTCOMPANY11 - Credito"
            - option "TESTCOMPANY111 - Credito"
            - option "TESTJM - Contado"
            - option "TestPAE1 - Credito"
            - option "TestPAE2 - Credito"
            - option "TESTPBI95066 - Contado"
            - option "TESTPRUEBAJUAN - Credito"
            - option "TESTV - Credito"
            - option "WANO - Credito"
      - cell
      - cell
    - row "Generado Automáticamente":
      - cell "Generado Automáticamente":
        - paragraph:
          - checkbox
          - text: Generado Automáticamente
      - cell
      - cell
    - 'row "Etiqueta: * 15806565902 Track: * 15806565902=15806565902"':
      - 'cell "Etiqueta: * 15806565902"':
        - paragraph:
          - text: "Etiqueta: *"
          - 'textbox "Etiqueta: *"': "15806565902"
      - cell
      - 'cell "Track: * 15806565902=15806565902"':
        - paragraph:
          - text: "Track: *"
          - 'textbox "Track: *"': 15806565902=15806565902
      - cell
      - cell
    - 'row "PAN: * El campo PAN no puede ser nulo Fecha de expiración: * 2045/04/22"':
      - 'cell "PAN: * El campo PAN no puede ser nulo"':
        - paragraph:
          - text: "PAN: *"
          - 'textbox "PAN: *"'
          - text: El campo PAN no puede ser nulo
      - cell
      - 'cell "Fecha de expiración: * 2045/04/22"':
        - paragraph:
          - text: "Fecha de expiración: *"
          - 'textbox "Fecha de expiración: *"': 2045/04/22
      - cell
      - cell
    - 'row "Correo: * 15806565902@atioinc.com"':
      - 'cell "Correo: * 15806565902@atioinc.com"':
        - paragraph:
          - text: "Correo: *"
          - 'textbox "Correo: *"': 15806565902@atioinc.com
      - cell
      - cell
      - cell
      - cell
- paragraph:
  - button "Guardar"
  - link "Cancelar":
    - /url: /Identifications/Index/cancelButton
  - checkbox "Crear otro"
  - text: Crear otro
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
   48 |             await page.locator('#Password').click();
   49 |         });
   50 |
   51 |         await allure.step('Escribir en input Contraseña de usuario', async () => {
   52 |             await page.locator('#Password').fill('pipo33');
   53 |         });
   54 |
   55 |         await allure.step('Hacer Click en ingresar', async () => {
   56 |             await page.locator('#submit').click();
   57 |         });
   58 |         
   59 |         await allure.step('hacer click para cambiar rol', async () => {
   60 |             const primerLink = page.locator('p >> a').first();
   61 |             await primerLink.click();
   62 |         });
   63 |     
   64 |         await allure.step('hacer click para desplegar lista de roles', async () => {
   65 |             await page.getByTitle('Show All Items').click();
   66 |         });
   67 |
   68 |         await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
   69 |             await page.getByText('NW Admin - LAB QA').click();
   70 |         });
   71 |
   72 |         await allure.step('acceder a modulo identificadores', async () => {
   73 |             await page.click('a[href="/Identifications"]')
   74 |         });
   75 |
   76 |         await allure.step('veriricar que estamos en la url de identificadores', async () => {
   77 |             await expect(page).toHaveURL('https://console-beta.ationet.com/Identifications');
   78 |         });    
   79 |     });
   80 |
   81 |     await allure.step('Crear nuevo identificador',async () => {
   82 |
   83 |         await allure.step('Click en boton nuevo',async () => {
   84 |             await page.getByRole('button', { name: 'Nuevo' }).first().click();
   85 |         });
   86 |
   87 |         await allure.step('veriricar que estamos en enlase de crear identificadores',async () => {
   88 |             await expect(page).toHaveURL('https://console-beta.ationet.com/Identifications/Create');
   89 |         });
   90 |
   91 |         await allure.step('Desplegamos lista y seleccionamos tipo de identificador',async () => {
   92 |             await page.locator('#Identification_Type').selectOption({ label: 'Tarjeta' });
   93 |         });
   94 |
   95 |         await allure.step('Desplegamos lista y seleccionamos modelo de identificador',async () => {
   96 |             await page.locator('#IdIdentificationsTypesModel').selectOption({ label: 'PRUEBA' });
   97 |         });
   98 |
   99 |         await allure.step('Desplegamos lista y seleccionamos uso',async () => {
  100 |             await page.locator('#UseType').selectOption({ label: 'Flota' });
  101 |         });
  102 |
  103 |         await allure.step('Desplegamos lista y seleccionamos programa',async () => {
  104 |             await page.locator('#IdProgram').selectOption({ label: 'Classic' });
  105 |         });
  106 |
  107 |         await allure.step('Click en input tarjeta',async () => {
  108 |             await page.locator('#Identification_Label').click();
  109 |         });
  110 |
  111 |         await allure.step('Escribir en input tarjeta',async () => {
  112 |             await page.locator('#Identification_Label').fill(idEtiqueta);
  113 |         });
  114 |
  115 |         await allure.step('Click en input track',async () => {
  116 |             await page.locator('#Identification_TrackNumber').click()
  117 |         });
  118 |
  119 |         await allure.step('Escribir en input track',async () => {
  120 |             await page.locator('#Identification_TrackNumber').fill(idEtiqueta+'='+idEtiqueta);
  121 |         });
  122 |
  123 |         await allure.step('click en input fecha de espiracion',async () => {
  124 |             await page.locator('#Identification_ExpirationDate').click();
  125 |         });
  126 |
  127 |         await allure.step('Escribir en input fecha de espiracion',async () => {
  128 |             await page.locator('#Identification_ExpirationDate').fill('2045/04/22');
  129 |         });
  130 |
  131 |         await allure.step('Click en input correo',async () => {
  132 |             await page.locator('#Identification_Email').click();
  133 |         });
  134 |
  135 |         await allure.step('Escribir en input correo',async () => {
  136 |             await page.locator('#Identification_Email').fill(idCorreo);
  137 |         });
  138 |
  139 |         await allure.step('Click en boton guardar',async () => {
  140 |             await page.locator('#save').click();
  141 |         });
  142 |
  143 |     });
  144 |
  145 |     await allure.step('Filtrar nuevo identificador',async () => {
  146 |
  147 |         await allure.step('Aseguramos que el panel filtro esté presente',async () => {
> 148 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
      |                                                ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  149 |         });
  150 |
  151 |         await allure.step('Click en el título filtro',async () => {
  152 |             await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
  153 |         });
  154 |
  155 |         await allure.step('Esperar que se despliegue el filtro',async () => {
  156 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  157 |         });
  158 |
  159 |         await allure.step('Click en input etiqueta',async () => {
  160 |             await page.locator('#label').click();
  161 |         });
  162 |
  163 |         await allure.step('Escribir en input etiqueta',async () => {
  164 |             await page.locator('#label').fill(idEtiqueta);
  165 |         });
  166 |
  167 |         await allure.step('Click en boton buscar',async () => {
  168 |             await page.locator('#search').click();
  169 |         });
  170 |
  171 |         await allure.step('Nos aseguramos que este presente nuevo identificador',async () => {
  172 |             await expect(page.locator('.dtls tr td a').first()).toHaveText(idEtiqueta);
  173 |         });
  174 |
  175 |     });
  176 |
  177 |     await allure.step('Editar nuevo identificador',async () => {
  178 |         await allure.step('Click en editar identificador',async () => {
  179 |             await page.getByRole('link', { name: 'Editar' }).click();
  180 |         })
  181 |
  182 |         await allure.step('click en track',async () => {
  183 |             await page.locator('#Identification_TrackNumber').click();
  184 |         })
  185 |
  186 |         await allure.step('escribir track',async () => {
  187 |             await page.locator('#Identification_TrackNumber').fill(idEtiqueta+'='+idEtiqueta + 'editado');
  188 |         })
  189 |
  190 |         await allure.step('click en guardar',async () => {
  191 |             await page.locator('#save').click();
  192 |         })
  193 |
  194 |     });
  195 |
  196 |     await allure.step('Filtrar nuevo Comercio editado',async () => {
  197 |
  198 |         await allure.step('Aseguramos que el panel filtro esté presente',async () => {
  199 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
  200 |         });
  201 |
  202 |         await allure.step('Click en el título filtro',async () => {
  203 |             await page.locator('#filterPanel .collapsibleContainerTitle').click({ timeout: 60000 });
  204 |         });
  205 |
  206 |         await allure.step('Esperar que se despliegue el filtro',async () => {
  207 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  208 |         });
  209 |
  210 |         await allure.step('Click en input etiqueta',async () => {
  211 |             await page.locator('#label').click();
  212 |         });
  213 |
  214 |         await allure.step('Escribir en input etiqueta',async () => {
  215 |             await page.locator('#label').fill(idEtiqueta);
  216 |         });
  217 |
  218 |         await allure.step('Click en boton buscar',async () => {
  219 |             await page.locator('#search').click();
  220 |         });
  221 |
  222 |         await allure.step('entrar al detalle del id creado',async () => {
  223 |             await page.getByRole('link', { name: idEtiqueta }).click();
  224 |         });
  225 |     });
  226 |
  227 | })
  228 |
  229 |
  230 |
  231 |
  232 |
```