# Test info

- Name: Comercios
- Location: /home/maximilianodmorales/testAuto/tests/LAB Network/NWAdmin/administracion/comercios.spec.ts:4:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('#filterPanel') to be visible

    at body (/home/maximilianodmorales/testAuto/tests/LAB Network/NWAdmin/administracion/comercios.spec.ts:180:48)
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
    at body (/home/maximilianodmorales/testAuto/tests/LAB Network/NWAdmin/administracion/comercios.spec.ts:179:22)
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

# Page snapshot

```yaml
- link:
  - /url: /
- heading [level=1]
- heading "Private Labeling Made Easy" [level=2]
- paragraph:
  - link "QAutomation Test (NWAdmin - LAB Network)":
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
        - link "Canjes":
          - /url: /LoyaltyTransactionsRedemptions
      - listitem:
        - link "Cierres de Lotes":
          - /url: /LoyaltyBatchCloses
      - listitem:
        - link "Clases de Entrada de Servicios":
          - /url: /ServiceEntryClasses
      - listitem:
        - link "- class1":
          - /url: /ServiceEntryClasses/ServiceEntryClass1
      - listitem:
        - link "- Prueba QA":
          - /url: /ServiceEntryClasses/ServiceEntryClass2
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
        - link "- Clasificacion 1":
          - /url: /CompanyContractsClassifications/Classification0
      - listitem:
        - link "- Clasificacion 2":
          - /url: /CompanyContractsClassifications/Classification1
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
- 'heading "Mis Filtros Opciones Ud. esta en: Comercios > Nuevo Comercio" [level=3]':
  - button "Mis Filtros"
  - button "Opciones"
  - text: "Ud. esta en:"
  - link "Comercios":
    - /url: /Merchants
  - text: "> Nuevo Comercio"
- heading "Nuevo Comercio" [level=4]
- table:
  - rowgroup:
    - row "Información":
      - cell "Información":
        - heading "Información" [level=1]
    - row "Activo:":
      - cell "Activo:":
        - paragraph:
          - text: "Activo:"
          - checkbox "Activo:" [checked]
      - cell
      - cell
      - cell
    - 'row "ID Contribuyente: * 2246835 Nombre: * $Comercio2246835"':
      - 'cell "ID Contribuyente: * 2246835"':
        - paragraph:
          - text: "ID Contribuyente: *"
          - 'textbox "ID Contribuyente: *"': "2246835"
      - cell
      - 'cell "Nombre: * $Comercio2246835"':
        - paragraph:
          - text: "Nombre: *"
          - 'textbox "Nombre: *"': $Comercio2246835
      - cell
    - 'row "Código: * 2246835"':
      - 'cell "Código: * 2246835"':
        - paragraph:
          - text: "Código: *"
          - 'textbox "Código: *"': "2246835"
      - cell
      - cell
      - cell
    - row "Generado Automáticamente":
      - cell "Generado Automáticamente":
        - paragraph:
          - text: Generado Automáticamente
          - checkbox "Generado Automáticamente"
    - 'row "Calle: * chacabubo661"':
      - 'cell "Calle: * chacabubo661"':
        - paragraph:
          - text: "Calle: *"
          - 'textbox "Calle: *"': chacabubo661
      - cell
      - cell
      - cell
    - row "Calle 2:":
      - cell "Calle 2:":
        - paragraph:
          - text: "Calle 2:"
          - textbox "Calle 2:"
      - cell
      - cell
      - cell
    - 'row "Cod. Postal: Ciudad: * san isidro"':
      - cell "Cod. Postal:":
        - paragraph:
          - text: "Cod. Postal:"
          - textbox "Cod. Postal:"
      - cell
      - 'cell "Ciudad: * san isidro"':
        - paragraph:
          - text: "Ciudad: *"
          - 'textbox "Ciudad: *"': san isidro
      - cell
    - 'row "Pais: * Argentina Estado: * Buenos Aires"':
      - 'cell "Pais: * Argentina"':
        - paragraph:
          - text: "Pais: *"
          - 'combobox "Pais: *"':
            - option "-- Seleccione --"
            - option "Anguilla"
            - option "Argentina" [selected]
            - option "Aruba"
            - option "Bahamas"
            - option "Barbados"
            - option "Belize"
            - option "Bermuda"
            - option "Bolivia"
            - option "Bonaire"
            - option "Botswana"
            - option "British Virgin Island"
            - option "Canada"
            - option "Cayman Islands"
            - option "Chile"
            - option "Colombia"
            - option "Costa Rica"
            - option "Curacao"
            - option "Ecuador"
            - option "Grenada"
            - option "Guatemala"
            - option "Guyana"
            - option "Honduras"
            - option "Jamaica"
            - option "México"
            - option "Montserrat"
            - option "Namibia"
            - option "Nicaragua"
            - option "Panamá"
            - option "Perú"
            - option "Puerto Rico"
            - option "República Dominicana"
            - option "Reunion"
            - option "Saint Kitts and Nevis"
            - option "Saint Martin"
            - option "Sint Maarten"
            - option "South Africa"
            - option "St Lucia"
            - option "St. Maarten"
            - option "Suriname"
            - option "Trinidad and Tobago"
            - option "Turks and Caicos Islands"
            - option "United States"
            - option "Uruguay"
            - option "Zambia"
      - cell
      - 'cell "Estado: * Buenos Aires"':
        - paragraph:
          - text: "Estado: *"
          - 'combobox "Estado: *"':
            - option "-- Seleccione --"
            - option "Buenos Aires" [selected]
            - option "Catamarca"
            - option "Chaco"
            - option "Chubut"
            - option "Ciudad Autonoma de Buenos Aires"
            - option "Córdoba"
            - option "Corrientes"
            - option "Entre Ríos"
            - option "Formosa"
            - option "Jujuy"
            - option "La Pampa"
            - option "La Rioja"
            - option "Mendoza"
            - option "Misiones"
            - option "Neuquén"
            - option "Río Negro"
            - option "Salta"
            - option "San Juan"
            - option "San Luis"
            - option "Santa Cruz"
            - option "Santa Fe"
            - option "Santiago Del Estero"
            - option "Tierra Del Fuego"
            - option "Tucumán"
      - cell
    - 'row "Nombre del Contacto: * soy una prueba Correo del Contacto: * pruebitaauto@ationinc.com"':
      - 'cell "Nombre del Contacto: * soy una prueba"':
        - paragraph:
          - text: "Nombre del Contacto: *"
          - 'textbox "Nombre del Contacto: *"': soy una prueba
      - cell
      - 'cell "Correo del Contacto: * pruebitaauto@ationinc.com"':
        - paragraph:
          - text: "Correo del Contacto: *"
          - 'textbox "Correo del Contacto: *"': pruebitaauto@ationinc.com
      - cell
    - 'row "Teléfono 1: * 1122445577 El numero debe estar en formato internacional E.164 (ej: +12125551234) Teléfono 2:"':
      - 'cell "Teléfono 1: * 1122445577 El numero debe estar en formato internacional E.164 (ej: +12125551234)"':
        - paragraph:
          - text: "Teléfono 1: *"
          - 'textbox "Teléfono 1: *"': "1122445577"
          - text: "El numero debe estar en formato internacional E.164 (ej: +12125551234)"
      - cell
      - cell "Teléfono 2:":
        - paragraph:
          - text: "Teléfono 2:"
          - textbox "Teléfono 2:"
      - cell
- paragraph:
  - button "Guardar"
  - link "Cancelar":
    - /url: /Merchants
- paragraph
- paragraph:
  - text: v 2.6.7050.0 | Powered by
  - link "ATIONET LLC.":
    - /url: http://www.ationet.com
  - link "Soporte":
    - /url: mailto:support@ationet.com
  - text: "|"
  - link "Feedback":
    - /url: mailto:hello@ationet.com
```

# Test source

```ts
   80 |         // });
   81 |
   82 |         await allure.step('acceder a modulo comercio', async () => {
   83 |             await page.click('a[href="/Merchants"]');
   84 |         });
   85 |
   86 |         await allure.step('veriricar que estamos en la url de comercio', async () => {
   87 |             await expect(page).toHaveURL('https://console.ationet.com/Merchants');
   88 |         });    
   89 |     });
   90 |
   91 |     await allure.step('Crear nuevo Comercio',async () => {
   92 |
   93 |         await allure.step('acceder a crear comercio',async () => {
   94 |             await page.getByRole('button', { name: 'Nuevo' }).first().click();
   95 |         });
   96 |
   97 |         await allure.step('veriricar que estamos en enlase de crear comercio',async () => {
   98 |             await expect(page).toHaveURL('https://console.ationet.com/Merchants/Create');
   99 |         });
  100 |
  101 |         await allure.step('Click en input id de contribuyente',async () => {
  102 |             await page.locator('#Merchant_TaxPayerId').click();
  103 |         });
  104 |
  105 |         await allure.step('Escribir en input id de contribuyente',async () => {
  106 |             await page.locator('#Merchant_TaxPayerId').fill(idContribuyenteComercio);
  107 |         });
  108 |
  109 |         await allure.step('Click en input nombre de comercio',async () => {
  110 |             await page.locator('#Merchant_Name').click();
  111 |         });
  112 |
  113 |         await allure.step('Escribir en input nombre de comercio',async () => {
  114 |             await page.locator('#Merchant_Name').fill(nameComercio);
  115 |         });
  116 |
  117 |         await allure.step('Click en input codigo de comercio',async () => {
  118 |             await page.locator('#NetworksMerchant_MerchantCode').click();
  119 |         });
  120 |
  121 |         await allure.step('Escribir en input codigo de comercio',async () => {
  122 |             await page.locator('#NetworksMerchant_MerchantCode').fill(codeComercio);
  123 |         });
  124 |
  125 |         await allure.step('Click en input calle de comercio',async () => {
  126 |             await page.locator('#Merchant_Street1').click();
  127 |         });
  128 |
  129 |         await allure.step('Escribir en input calle de comercio',async () => {
  130 |             await page.locator('#Merchant_Street1').fill('chacabubo661');
  131 |         });
  132 |
  133 |         await allure.step('Click en input ciudad de comercio',async () => {
  134 |             await page.locator('#Merchant_City').click();
  135 |         });
  136 |
  137 |         await allure.step('Escribir en input ciudad de comercio',async () => {
  138 |             await page.locator('#Merchant_City').fill('san isidro');
  139 |         });
  140 |
  141 |         await allure.step('Desplegar lista y seleccionar pais de comercio',async () => {
  142 |             await page.locator('#IdCountry').selectOption({ label: 'Argentina' });
  143 |         });
  144 |
  145 |         await allure.step('Desplegar lista y seleccionar Estado de comercio',async () => {
  146 |             await page.locator('#IdState').selectOption({ label: 'Buenos Aires' });
  147 |         });
  148 |
  149 |         await allure.step('Click en input nombre de contacto del comercio',async () => {
  150 |             await page.locator('#NetworksMerchant_ContactName').click();
  151 |         });
  152 |
  153 |         await allure.step('Escribir en input nombre de contacto del comercio',async () => {
  154 |             await page.locator('#NetworksMerchant_ContactName').fill('soy una prueba');
  155 |         });
  156 |
  157 |         await allure.step('Click en input correo de contacto del comercio',async () => {
  158 |             await page.locator('#NetworksMerchant_ContactEmail').click();
  159 |         });
  160 |
  161 |         await allure.step('Escribir en input correo de contacto del comercio',async () => {
  162 |             await page.locator('#NetworksMerchant_ContactEmail').fill('pruebitaauto@ationinc.com');
  163 |         });
  164 |
  165 |         await allure.step('Click en input Telefono 1 de contacto del comercio',async () => {
  166 |             await page.locator('#NetworksMerchant_PhoneNumber1').click();
  167 |         });
  168 |
  169 |         await allure.step('Escribir en input Telefono 1 de contacto del comercio',async () => {
  170 |             await page.locator('#NetworksMerchant_PhoneNumber1').fill('1122445577');
  171 |         });
  172 |
  173 |         await allure.step('Click en boton guardar',async () => {
  174 |             await page.locator('#save').click();
  175 |         });        
  176 |     });
  177 |
  178 |     await allure.step('Filtrar nuevo Comercio',async () => {
  179 |         await allure.step('Aseguramos que el panel de filtro esté presente',async () => {
> 180 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
      |                                                ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  181 |         });
  182 |
  183 |         await allure.step('Click en el título filtro, no en todo el panel',async () => {
  184 |                     await allure.step('Verificamos que el panel de filtro exista',async () => {
  185 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 20000 });
  186 |         });
  187 |
  188 |         await allure.step('Click en el título, no en todo el panel',async () => {
  189 |             const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
  190 |             await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
  191 |             await panelTitle.click();
  192 |         });
  193 |
  194 |         await allure.step('Esperar que se despliegue el contenido',async () => {
  195 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
  196 |         });({ timeout: 60000 });
  197 |         });
  198 |
  199 |         await allure.step('Esperar que se despliegue el filtro',async () => {
  200 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  201 |         });
  202 |
  203 |         await allure.step('Click en input nombre de comercio',async () => {
  204 |             await page.locator('#name').click();
  205 |         });
  206 |
  207 |         await allure.step('Escribir en input nombre de comercio',async () => {
  208 |             await page.locator('#name').fill(nameComercio);
  209 |         });
  210 |
  211 |         await allure.step('Click en boton buscar',async () => {
  212 |             await page.locator('#search').click();
  213 |         });
  214 |
  215 |         await allure.step('verificamos que este nuestro comercio',async () => {
  216 |             await expect(page.locator('.dtls tr td a').first()).toHaveText(nameComercio);
  217 |         }); 
  218 |     });
  219 |
  220 |     await allure.step('Editar nuevo Comercio',async () => {
  221 |
  222 |         await allure.step('Click en editar comercio',async () => {
  223 |             await page.getByRole('link', { name: 'Editar' }).click();
  224 |         });
  225 |
  226 |         await allure.step('Click en input nombre de comercio',async () => {
  227 |             await page.locator('#Merchant_Name').click();
  228 |         });
  229 |
  230 |         await allure.step('Escribir en input nombre de comercio',async () => {
  231 |             await page.locator('#Merchant_Name').fill(nameComercio + 'editado');
  232 |         });
  233 |
  234 |         await allure.step('Click en guardar',async () => {
  235 |             await page.locator('#save').click();
  236 |         });
  237 |     });
  238 |
  239 |     await allure.step('Filtrar nuevo Comercio editado',async () => {
  240 |         await allure.step('Aseguramos que el panel de filtro esté presente',async () => {
  241 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
  242 |         });
  243 |
  244 |         await allure.step('Click en el título filtro, no en todo el panel',async () => {
  245 |                     await allure.step('Verificamos que el panel de filtro exista',async () => {
  246 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 20000 });
  247 |         });
  248 |
  249 |         await allure.step('Click en el título, no en todo el panel',async () => {
  250 |             const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
  251 |             await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
  252 |             await panelTitle.click();
  253 |         });
  254 |
  255 |         await allure.step('Esperar que se despliegue el contenido',async () => {
  256 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
  257 |         });({ timeout: 60000 });
  258 |         });
  259 |
  260 |         await allure.step('Esperar que se despliegue el filtro',async () => {
  261 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  262 |         });
  263 |
  264 |         await allure.step('Click en input nombre de comercio',async () => {
  265 |             await page.locator('#name').click();
  266 |         });
  267 |
  268 |         await allure.step('Escribir en input nombre de comercio',async () => {
  269 |             await page.locator('#name').fill(nameComercio + 'editado');
  270 |         });
  271 |
  272 |         await allure.step('Click en boton buscar',async () => {
  273 |             await page.locator('#search').click();
  274 |         });
  275 |
  276 |         await allure.step('verificamos que este nuestro comercio',async () => {
  277 |             await expect(page.getByRole('cell', { name: nameComercio + 'editado', exact: true })).toBeVisible();
  278 |         });       
  279 |     });
  280 |    
```