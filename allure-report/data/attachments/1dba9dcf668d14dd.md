# Test info

- Name: Reglas
- Location: /home/maximilianodmorales/testAuto/tests/LAB Network/NWAdmin/flota/reglas.spec.ts:4:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('#filterPanel') to be visible

    at body (/home/maximilianodmorales/testAuto/tests/LAB Network/NWAdmin/flota/reglas.spec.ts:138:24)
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
    at body (/home/maximilianodmorales/testAuto/tests/LAB Network/NWAdmin/flota/reglas.spec.ts:137:26)
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
- 'heading "Mis Filtros Opciones Ud. esta en: Reglas > Nueva Regla" [level=3]':
  - button "Mis Filtros"
  - button "Opciones"
  - text: "Ud. esta en:"
  - link "Reglas":
    - /url: /Rules
  - text: "> Nueva Regla"
- heading "Nueva Regla" [level=4]
- text: Ya existe una regla que aplica a la combinación Programa/Compañía/Contrato seleccionada
- table:
  - rowgroup:
    - row "Información":
      - cell "Información":
        - heading "Información" [level=1]
    - 'row "Descripción: * regla auto 8543 Tipo: * Solicitudes"':
      - 'cell "Descripción: * regla auto 8543"':
        - paragraph:
          - text: "Descripción: *"
          - 'textbox "Descripción: *"': regla auto 8543
      - cell
      - 'cell "Tipo: * Solicitudes"':
        - paragraph:
          - text: "Tipo: *"
          - 'combobox "Tipo: *"':
            - option "-- Seleccione --"
            - option "Cuota"
            - option "Ubicacion"
            - option "Solicitudes" [selected]
      - cell
    - row "No Bloqueante:":
      - cell "No Bloqueante:":
        - paragraph:
          - text: "No Bloqueante:"
          - checkbox "No Bloqueante:"
      - cell
    - 'row "Ingresos: Track Secundario: Miscelaneos: Conductor PIN: Id Conductor: Vehículo PIN: Id Vehiculo: PIN Erróneo Bloquea Identificadores: Límite de Ingresos de PIN : Num. Unidad del camion: Num. del Remolque: Odometro actual: Min Odometro Variacion: Max Odometro Variacion: Horas de motor actuales: Min Horas de Motor Variacion: Max Horas de Motor Variacion:"':
      - 'cell "Ingresos: Track Secundario: Miscelaneos: Conductor PIN: Id Conductor: Vehículo PIN: Id Vehiculo: PIN Erróneo Bloquea Identificadores: Límite de Ingresos de PIN : Num. Unidad del camion: Num. del Remolque: Odometro actual: Min Odometro Variacion: Max Odometro Variacion: Horas de motor actuales: Min Horas de Motor Variacion: Max Horas de Motor Variacion:"':
        - table:
          - rowgroup:
            - row "Ingresos:":
              - cell "Ingresos:":
                - paragraph:
                  - text: "Ingresos:"
                  - textbox "Ingresos:"
              - cell
              - cell
              - cell
              - cell
              - cell
            - 'row "Track Secundario: Miscelaneos:"':
              - cell "Track Secundario:":
                - paragraph:
                  - text: "Track Secundario:"
                  - checkbox "Track Secundario:"
              - cell
              - cell "Miscelaneos:":
                - paragraph:
                  - text: "Miscelaneos:"
                  - checkbox "Miscelaneos:"
              - cell
            - 'row "Conductor PIN: Id Conductor:"':
              - cell "Conductor PIN:":
                - paragraph:
                  - text: "Conductor PIN:"
                  - checkbox "Conductor PIN:"
              - cell
              - cell "Id Conductor:":
                - paragraph:
                  - text: "Id Conductor:"
                  - checkbox "Id Conductor:"
              - cell
            - 'row "Vehículo PIN: Id Vehiculo:"':
              - cell "Vehículo PIN:":
                - paragraph:
                  - text: "Vehículo PIN:"
                  - checkbox "Vehículo PIN:" [checked]
              - cell
              - cell "Id Vehiculo:":
                - paragraph:
                  - text: "Id Vehiculo:"
                  - checkbox "Id Vehiculo:"
              - cell
            - 'row "PIN Erróneo Bloquea Identificadores: Límite de Ingresos de PIN :"':
              - cell "PIN Erróneo Bloquea Identificadores:":
                - paragraph:
                  - text: "PIN Erróneo Bloquea Identificadores:"
                  - checkbox "PIN Erróneo Bloquea Identificadores:"
              - cell
              - cell "Límite de Ingresos de PIN :":
                - paragraph:
                  - text: "Límite de Ingresos de PIN :"
                  - textbox "Límite de Ingresos de PIN :" [disabled]
              - cell
            - 'row "Num. Unidad del camion: Num. del Remolque:"':
              - cell "Num. Unidad del camion:":
                - paragraph:
                  - text: "Num. Unidad del camion:"
                  - checkbox "Num. Unidad del camion:"
              - cell
              - cell "Num. del Remolque:":
                - paragraph:
                  - text: "Num. del Remolque:"
                  - checkbox "Num. del Remolque:"
              - cell
            - 'row "Odometro actual: Min Odometro Variacion: Max Odometro Variacion:"':
              - cell "Odometro actual:":
                - paragraph:
                  - text: "Odometro actual:"
                  - checkbox "Odometro actual:"
              - cell
              - cell "Min Odometro Variacion:":
                - paragraph:
                  - text: "Min Odometro Variacion:"
                  - textbox "Min Odometro Variacion:" [disabled]
              - cell
              - cell "Max Odometro Variacion:":
                - paragraph:
                  - text: "Max Odometro Variacion:"
                  - textbox "Max Odometro Variacion:" [disabled]
              - cell
            - 'row "Horas de motor actuales: Min Horas de Motor Variacion: Max Horas de Motor Variacion:"':
              - cell "Horas de motor actuales:":
                - paragraph:
                  - text: "Horas de motor actuales:"
                  - checkbox "Horas de motor actuales:"
              - cell
              - cell "Min Horas de Motor Variacion:":
                - paragraph:
                  - text: "Min Horas de Motor Variacion:"
                  - textbox "Min Horas de Motor Variacion:" [disabled]
              - cell
              - cell "Max Horas de Motor Variacion:":
                - paragraph:
                  - text: "Max Horas de Motor Variacion:"
                  - textbox "Max Horas de Motor Variacion:" [disabled]
              - cell
        - paragraph
    - row "Vigencia":
      - cell "Vigencia":
        - paragraph: Vigencia
      - cell
    - 'row "Fecha desde: (aaaa/mm/dd) Fecha hasta: (aaaa/mm/dd)"':
      - 'cell "Fecha desde: (aaaa/mm/dd)"':
        - paragraph:
          - text: "Fecha desde:"
          - textbox "Fecha desde:"
          - text: (aaaa/mm/dd)
      - cell
      - 'cell "Fecha hasta: (aaaa/mm/dd)"':
        - paragraph:
          - text: "Fecha hasta:"
          - textbox "Fecha hasta:"
          - text: (aaaa/mm/dd)
      - cell
    - 'row "Hora desde: (HH:mm) Hora hasta: (HH:mm)"':
      - 'cell "Hora desde: (HH:mm)"':
        - paragraph:
          - text: "Hora desde:"
          - textbox "Hora desde:" [disabled]
          - text: (HH:mm)
      - cell
      - 'cell "Hora hasta: (HH:mm)"':
        - paragraph:
          - text: "Hora hasta:"
          - textbox "Hora hasta:" [disabled]
          - text: (HH:mm)
      - cell
- table:
  - rowgroup:
    - row "Regla a":
      - cell "Regla a":
        - heading "Regla a" [level=1]
    - 'row "Compañia: Atio Lab Flota Contrato: -- Seleccione --"':
      - 'cell "Compañia: Atio Lab Flota"':
        - paragraph:
          - text: "Compañia:"
          - combobox "Compañia:":
            - option "-- Seleccione --"
            - option "1"
            - option "All In One Laboratorio"
            - option "ASH KE"
            - option "Atio Lab Flota" [selected]
            - option "Atio Lab Flota 2"
            - option "Atio Lab Flota 3"
            - option "Company Prueba"
            - option "Company Testing Custom Field"
            - option "Company123"
            - option "Company2"
            - option "compañia test mil"
            - option "compañia test notificacion"
            - option "Deploy Company"
            - option "FEDEX RD"
            - option "inexistente"
            - option "KENTUCKY FRIED CHICKEN B'DOS LTD"
            - option "Lab Test"
            - option "NAOS-SKIN CARE ECUADOR S.A."
            - option "NATIVA GAS"
            - option "Noombre"
            - option "notificacion test 2"
            - option "QACodeCompanies0129122242"
            - option "QACodeCompanies0129122325"
            - option "QACodeCompanies0131002815"
            - option "QACodeCompanies0131110606"
            - option "QACodeCompanies0214150203"
            - option "QACodeCompanies0214161445"
            - option "QACodeCompanies0214161544"
            - option "QACodeCompanies0702121139"
            - option "QACodeCompanies0709103327"
      - cell
      - 'cell "Contrato: -- Seleccione --"':
        - paragraph:
          - text: "Contrato:"
          - combobox "Contrato:":
            - option "-- Seleccione --" [selected]
            - option "001 - Debito"
            - option "0303 - Contado"
            - option "90 - Credito"
            - option "BALANCE - Credito"
            - option "BBB - Debito"
            - option "STANDALONE - Debito"
            - option "TEST12 - Credito"
            - option "TEST-CONTRACT - Debito"
            - option "TRANSPORTERSN - Credito"
      - cell
    - 'row "Programa: -- Seleccione --"':
      - 'cell "Programa: -- Seleccione --"':
        - paragraph:
          - text: "Programa:"
          - combobox "Programa:":
            - option "-- Seleccione --" [selected]
            - option "ALPHA & OMEGA"
            - option "Clasico"
            - option "Primax Ecuador Placa"
            - option "programa holograma"
            - option "programa123"
            - option "programaInexistente"
            - option "QA"
            - option "RUBIS TEST PROGRAMA"
            - option "Test"
      - cell
      - cell
      - cell
- table:
  - rowgroup:
    - row "Aplicar a":
      - cell "Aplicar a":
        - heading "Aplicar a" [level=1]
    - 'row "Clasif. / Flota: Agregar todos Quitar todos Clasif. / Vehículo: Agregar todos Quitar todos"':
      - cell "Clasif. / Flota:":
        - text: "Clasif. / Flota:"
        - list:
          - listitem:
            - textbox "Ingresar Código / Nombre o Clasif. Código / Descr. Flota"
      - cell "Agregar todos":
        - paragraph:
          - button "Agregar todos"
      - cell "Quitar todos":
        - paragraph:
          - button "Quitar todos"
      - cell
      - cell "Clasif. / Vehículo:":
        - text: "Clasif. / Vehículo:"
        - list:
          - listitem:
            - textbox "Ingresar Código / Patente o Clasif. Código / Descr. Vehículo"
      - cell "Agregar todos":
        - paragraph:
          - button "Agregar todos"
      - cell "Quitar todos":
        - paragraph:
          - button "Quitar todos"
      - cell
    - row "Flota Acciones Vehículo Acciones":
      - cell "Flota Acciones":
        - table:
          - rowgroup:
            - row "Flota Acciones":
              - cell "Flota"
              - cell
              - cell "Acciones"
        - table:
          - rowgroup:
            - row:
              - cell
              - cell
      - cell
      - cell "Vehículo Acciones":
        - table:
          - rowgroup:
            - row "Vehículo Acciones":
              - cell "Vehículo"
              - cell
              - cell "Acciones"
        - table:
          - rowgroup:
            - row:
              - cell
              - cell
      - cell
    - row:
      - cell
    - 'row "Clasif. / Conductor: Agregar todos Quitar todos"':
      - cell "Clasif. / Conductor:":
        - text: "Clasif. / Conductor:"
        - list:
          - listitem:
            - textbox "Ingresar Código / Nombre o Clasif. Código / Descr. Conductor"
      - cell "Agregar todos":
        - paragraph:
          - button "Agregar todos"
      - cell "Quitar todos":
        - paragraph:
          - button "Quitar todos"
      - cell
      - cell
      - cell
      - cell
      - cell
    - row "Conductor Acciones":
      - cell "Conductor Acciones":
        - table:
          - rowgroup:
            - row "Conductor Acciones":
              - cell "Conductor"
              - cell
              - cell "Acciones"
        - table:
          - rowgroup:
            - row:
              - cell
              - cell
      - cell
      - cell
      - cell
      - cell
      - cell
    - row:
      - cell
    - 'row "Sitio: Agregar todos Quitar todos Combustible: Agregar todos Quitar todos"':
      - cell "Sitio:":
        - text: "Sitio:"
        - list:
          - listitem:
            - textbox "Ingresar Código / Nombre corto Sitio"
      - cell "Agregar todos":
        - paragraph:
          - button "Agregar todos"
      - cell "Quitar todos":
        - paragraph:
          - button "Quitar todos"
      - cell
      - cell "Combustible:":
        - text: "Combustible:"
        - list:
          - listitem:
            - textbox "Ingresar Código / Descripción Combustible"
      - cell "Agregar todos":
        - paragraph:
          - button "Agregar todos"
      - cell "Quitar todos":
        - paragraph:
          - button "Quitar todos"
      - cell
    - row "Sitio Acciones Combustible Acciones":
      - cell "Sitio Acciones":
        - table:
          - rowgroup:
            - row "Sitio Acciones":
              - cell "Sitio"
              - cell
              - cell "Acciones"
        - table:
          - rowgroup:
            - row:
              - cell
              - cell
      - cell
      - cell "Combustible Acciones":
        - table:
          - rowgroup:
            - row "Combustible Acciones":
              - cell "Combustible"
              - cell
              - cell "Acciones"
        - table:
          - rowgroup:
            - row:
              - cell
              - cell
      - cell
- paragraph:
  - button "Guardar"
  - link "Cancelar":
    - /url: /Rules
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
   38 |     await allure.step('Navegar y acceder a Reglas',async () => {
   39 |         await allure.step('Acceder a la url de login', async () => {
   40 |             await page.goto(urlBETA!);
   41 |         });
   42 |
   43 |         await allure.step('Hacer click en input nombre de usuario', async () => {
   44 |             await page.locator('#UserName').click();
   45 |         });
   46 |
   47 |         await allure.step('Escribir en input nombre de usuario', async () => {
   48 |             await page.locator('#UserName').fill('QAutomation@gmail.com');
   49 |         });
   50 |
   51 |         await allure.step('Hacer click en input Contraseña de usuario', async () => {
   52 |             await page.locator('#Password').click();
   53 |         });
   54 |
   55 |         await allure.step('Escribir en input Contraseña de usuario', async () => {
   56 |             await page.locator('#Password').fill('O06DF3LJ');
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
   81 |         // await allure.step('hacer click en rol NWAdmin - LAB QA', async () => {
   82 |         //     await page.getByText('NW Admin - LAB Network').click();
   83 |         // });
   84 |
   85 |         await allure.step('acceder a modulo Reglas', async () => {
   86 |             await page.click('a[href="/Rules"]');
   87 |         });
   88 |
   89 |         await allure.step('veriricar que estamos en la url de Reglas', async () => {
   90 |             await expect(page).toHaveURL('https://console.ationet.com/Rules');
   91 |         });    
   92 |     });   
   93 |
   94 |     await allure.step('Crear Nueva Regla' , async () => {
   95 |
   96 |         await allure.step('Click en boton nuevo' , async () => {
   97 |             await page.getByRole('button', { name: 'Nuevo' }).first().click();
   98 |         });
   99 |
  100 |         await allure.step('veriricar que estamos en url de crear Reglas' , async () => {
  101 |             await expect(page).toHaveURL('https://console.ationet.com/Rules/Create');
  102 |         });
  103 |
  104 |         await allure.step('Click en input descripcion' , async () => {
  105 |             await page.locator('#Rule_Description').click();
  106 |         });
  107 |
  108 |         await allure.step('Escribir en input descripcion' , async () => {
  109 |             await page.locator('#Rule_Description').fill(reglaAutomatica);
  110 |         });
  111 |
  112 |         await allure.step('Desplegar y selecconar tipo de regla' , async () => {
  113 |             await page.locator('#Rule_RuleType').selectOption({ label: 'Solicitudes' });
  114 |         });
  115 |
  116 |         await allure.step('Click en checbox vehiculo pin' , async () => {
  117 |             await page.locator('#Rule_VehiclePINReprompt').click();
  118 |         });
  119 |
  120 |         await allure.step('Desplegar y seleccionar compañia' , async () => {
  121 |             await page.locator('#IdCompany').selectOption({ label: 'Atio Lab Flota' });
  122 |         });
  123 |
  124 |         await allure.step('Click en boton guardar' , async () => {
  125 |             await page.locator('#save').click();
  126 |         });
  127 |
  128 |     });
  129 |
  130 |     await allure.step('Filtrar Nueva Regla' , async () => {
  131 |
  132 |         // await allure.step('Aseguramos que el Filtro esté presente' , async () => {
  133 |         //     await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });
  134 |         // });
  135 |
  136 |         await allure.step('Click en el filtro, no en todo el panel' , async () => {
  137 |             await allure.step('Verificamos que el panel de filtro exista',async () => {
> 138 |             await page.waitForSelector('#filterPanel', { state: 'visible', timeout: 20000 });
      |                        ^ TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.
  139 |         });
  140 |
  141 |         await allure.step('Click en el título, no en todo el panel',async () => {
  142 |             const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
  143 |             await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
  144 |             await panelTitle.click();
  145 |         });
  146 |
  147 |         await allure.step('Esperar que se despliegue el contenido',async () => {
  148 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
  149 |         });({ timeout: 60000 });
  150 |         });
  151 |
  152 |         await allure.step('Esperar que se despliegue el contenido' , async () => {
  153 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 60000 });
  154 |         });
  155 |
  156 |         await allure.step('Click en input Regla' , async () => {
  157 |             await page.locator('#rule').click();
  158 |         });
  159 |
  160 |         await allure.step('Escribir en input Regla' , async () => {
  161 |             await page.locator('#rule').fill(reglaAutomatica);
  162 |         });
  163 |
  164 |     });
  165 |
  166 |     await allure.step('Editar Nueva Regla' , async () => {
  167 |
  168 |         await allure.step('Click en editar' , async () => {
  169 |             await page.getByRole('link', { name: 'Editar' }).first().click();
  170 |         });
  171 |
  172 |         await allure.step('Click en input descripcion' , async () => {
  173 |             await page.locator('#Rule_Description').click();
  174 |         });
  175 |
  176 |         await allure.step('Escribir en input descripcion' , async () => {
  177 |             await page.locator('#Rule_Description').fill(reglaAutomatica + 'editado');
  178 |         });
  179 |
  180 |         await allure.step('Click en boton guardar' , async () => {
  181 |             await page.locator('#save').click();
  182 |         });
  183 |     });
  184 |
  185 |     await allure.step('Filtrar Nueva Regla editada' , async () => {
  186 |         await allure.step('Aseguramos que el panel esté presente', async () => {
  187 |             await page.locator('#filterPanel').waitFor({ state: 'visible', timeout: 60000 });      
  188 |         })
  189 |
  190 |         await allure.step('Click en el título, no en todo el panel',async () => {
  191 |             const panelTitle = page.locator('#filterPanel .collapsibleContainerTitle');
  192 |             await panelTitle.waitFor({ state: 'visible', timeout: 20000 });
  193 |             await panelTitle.click();
  194 |         });
  195 |
  196 |         await allure.step('Esperar que se despliegue el contenido',async () => {
  197 |             await page.locator('#filterPanel .collapsibleContainerContent').waitFor({ state: 'visible', timeout: 20000 });
  198 |         });    
  199 |
  200 |         await allure.step('Click en input Regla' , async () => {
  201 |             await page.locator('#rule').click();
  202 |         });
  203 |
  204 |         await allure.step('Escribir en input Regla' , async () => {
  205 |             await page.locator('#rule').fill(reglaAutomatica + 'editado');
  206 |         });
  207 |
  208 |         await allure.step('Click en boton buscar' , async () => {
  209 |             await page.locator('#search').click();
  210 |         });
  211 |
  212 |         await allure.step('verificamos que este nuestra combustibles' , async () => {
  213 |             await expect(page.locator('.dtls tr td a').first()).toHaveText(reglaAutomatica + 'editado');
  214 |         });
  215 |     });
  216 |
  217 |     await allure.step('Elminar Nueva Regla' , async () => {
  218 |
  219 |         await allure.step('Click en eliminar regla' , async () => {
  220 |             await page.getByRole('link', { name: 'Eliminar' }).first().click();
  221 |         });
  222 |
  223 |         await allure.step('Click en Ok' , async () => {
  224 |             await page.getByRole('button', { name: 'Ok' }).click();
  225 |         });
  226 |
  227 |     });
  228 |     
  229 | })
```