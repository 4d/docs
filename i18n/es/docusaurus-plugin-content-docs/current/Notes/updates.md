---
id: updates
title: Notas del lanzamiento
---

## 4D 21 R4

Lea [**Novedades en 4D 21 R4**](https://blog.4d.com/whats-new-in-4d-21-r4/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21 R4.

#### Lo más destacado

- Multi-level list style sheets are now [supported in 4D Write Pro Interface](../WritePro/writeprointerface#multi-level-list-style-sheets), allowing users to create and manage structured multi-level lists directly from the toolbar and sidebar.
- New [`defer`](../commands/defer) command to declare some code to be always executed at method or function exit; new [`Deferred formulas`](../commands/deferred-formulas) command to get the list of deferred formulas.
- New session `.quotas` property to configure thresholds for sessions.
- New [`4D.QuotaManager`](../API/QuotaManagerClass.md) class to handle threshold objects for protecting the server.
- New [`$entityset/$release`](../REST/$entityset.md#entitysetrelease) REST request to delete entity sets from server cache.

#### Cambios de comportamiento

- The **`GET /Employee/$entityset/<entitySetID>?$method=release`** REST syntax is **deprecated** and should no longer be used. To delete entity sets, you must now use [`/$entityset/$release` with a POST verb](./$entityset.md).

## 4D 21 R3

Lea [**Novedades en 4D 21 R3**](https://blog.4d.com/es/whats-new-in-4d-21-r3/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21 R3.

#### Lo más destacado

- El comando [`JSON Validate`](../commands/json-validate) ahora es compatible con el borrador 2020-12 del esquema JSON.
- 4D Write Pro now supports [multi-level list style sheets](../WritePro/user-legacy/stylesheets.md#multi-level-list-style-sheets), enabling the creation and management of structured [multi-level lists](../WritePro/user-legacy/using-a-4d-write-pro-area.md#multi-level-lists) with automatic numbering.
- Ability to use a custom certificate from the macOS keychain instead of a local certificates folder in [`HTTPRequest`](../API/HTTPRequestClass.md#4dhttprequestnew) and [`HTTPAgent`](../API/HTTPAgentClass.md#4dhttpagentnew) classes.
- Nueva clase [`4D.Method`](../API/MethodClass.md) para crear y ejecutar un código de método 4D a partir de una fuente de texto. [`METHOD Get path`](../commands/method-get-path) and [`METHOD RESOLVE PATH`](../commands/method-resolve-path) commands support a new `path volatile method` constant (128).
- IMAP transporter now supports mailbox event notifications using the IDLE protocol through a [notifier object](../API/IMAPTransporterClass.md#notifier) of the [4D.IMAPNotifier](../API/IMAPNotifierClass.md) class, configurable via the `listener` property of [IMAP New transporter](../commands/imap-new-transporter).
- Remote [session](../API/SessionClass.md) objects are now [available client-side](../Desktop/sessions.md#availability).
- New [**AI** page in Settings](../settings/ai.md), allowing to configure [Provider model aliases](../aikit/provider-model-aliases.md) that can be called in the code using 4D AIKit component.
- 4D AIKit component: new [Providers](../aikit/Classes/OpenAIProviders.md) class to instantiate and handle [Provider and model aliases](../aikit/provider-model-aliases.md).
- Support of [`server` keyword](../Concepts/classes.md#server) for ORDA data model functions and shared/session singleton functions.
- Nuevo [renderizador de impresión](../FormEditor/forms.md#print-rendering-engine) para formularios en interfaces Liquid glass y Fluent UI. New compatibility options to [enable the renderer on Classic interfaces](../FormEditor/forms.md#legacy-print-renderer).
- Dependencias: soporte de los [componentes almacenados en los repositorios GitLab](../Project/components.md#configuring-a-gitlab-repository).
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=21_R3): lista de todos los bugs que se han corregido en 4D 21 R3.

#### Soporte de Liquid glass en macOS

- Automatic support of [**Liquid glass** interface](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) with 4D on macOS 26 Tahoe. Consulte [esta entrada del blog](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications) para obtener información detallada.
- Nuevos valores devueltos por el comando [`FORM Theme`](../commands/form-theme) y [CSS Media queries](../FormEditor/createStylesheet.md#media-queries).
- To help developers gradually adapt their interfaces, ability to **disable Liquid glass in 4D engine-based applications** via the "UIDesignRequiresCompatibility" key in the application's *Info.plist* file (see [Apple's documentation about this key](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility)).

#### Cambios de comportamiento

- El comando [`JSON Validate`](../commands/json-validate) ahora tiene en cuenta la llave *$schema* y genera un error si se declara una versión no soportada en el esquema.
- For clarity, formula objects are now instances of a new [`4D.Formula`](../API/FormulaClass.md) class that inherits from the generic [`4D.Function`](../API/FunctionClass.md) class.
- In 4D 21 R3, new improvements to the [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) apply to language commands (see [this blog post](https://blog.4d.com/enhancement-of-command-syntax-checking-in-the-editor)). Los errores de sintaxis que antes no se detectaban ahora se pueden marcar en el código.
- Se ha eliminado la página "PHP" de la [caja de diálogo Propiedades](../settings/overview.md). Utilice los [selectores PHP del comando `SET DATABASE PARAMETER`](../commands/set-database-parameter#php-interpreter-ip-address-55) para configurar un intérprete PHP.
- La capa de red **Legacy** ya no es compatible. Projects and binary databases that were using the Legacy network layer are automatically set to [**ServerNet**](../settings/client-server.md#network-layer) when upgraded to 4D 21 R3 and higher.

## 4D 21 R2

Lea [**Novedades en 4D 21 R2**](https://blog.4d.com/whats-new-in-4d-21-r2/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21 R2.

#### Lo más destacado

- The [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) has been enhanced to provide greater precision in error detection (see [this blog post](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) for more information).
- Las [acciones estándar de 4D Write Pro](../WritePro/user-legacy/standard-actions.md) que aplican [listas](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) ahora ajustan automáticamente los márgenes de los párrafos para mantener los marcadores posicionados al interior de este margen.
- Soporte integrado de `order by` en las cadenas de consulta para búsquedas vectoriales IA utilizando las funciones [`query()`](../API/DataClassClass.md#query-by-vector-similarity) y la [API REST](../REST/$orderby.md).
- Ahora puede crear y abrir Páginas Qodly desde el [Explorador](../Develop/explorer.md).
- Puede [personalizar los iconos de sus componentes](../Extensions/develop-components.md#custom-icon).
- Componente 4D AIKit: nueva clase [File API](../aikit/Classes/OpenAIFilesAPI.md) para implementar las funcionalidades de **carga de archivos**.
- [**Find in Design**](../Project/search-replace.md#search-in-components) and [**Replace in content**](../Project/search-replace.md#replace-in-content) features can now support editable components.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=21_R2): lista de todos los bugs que se han corregido en 4D 21 R2.

#### Vista previa para desarrolladores

- Soporte de [**renderización de interfaz Fluent UI**](../FormEditor/forms.md#fluent-ui-rendering) en Windows:
  - nuevo comando [`FORM theme`](../commands/form-theme)
  - nuevo [media query css `form-theme`](../FormEditor/createStylesheet.md#media-queries),
  - nueva opción [**Utilizar Fluent UI en Windows**](../settings/interface.md#use-fluent-ui-on-windows) en el cuadro de diálogo de Propiedades del proyecto.

#### Cambios de comportamiento

- En Windows, si la [renderización **fluent UI**](../FormEditor/forms.md#fluent-ui-rendering) está activada, el comando [`GET STYLE SHEET INFO`](../commands/get-style-sheet-info) puede devolver información diferente si se llama desde un formulario o no.

## Tabla de la librería

| Librería        | Versión actual                         | Actualizado en 4D | Comentario                                                                                                                                             |
| --------------- | -------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BoringSSL       | 664a985                                | **21 R4**         | Utilizado para QUIC                                                                                                                                    |
| CEF             | 7258                                   | 21                | Chromium 139                                                                                                                                           |
| Hunspell        | 1.7.2  | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                                                              |
| ICU             | 77.1                   | 21                | Esta actualización fuerza una reconstrucción automática de los índices alfanuméricos, textos y objetos.                                |
| libldap         | 2.6.10 | 21                |                                                                                                                                                        |
| libsasl         | 2.1.28 | 20                |                                                                                                                                                        |
| Liblsquic       | 4.2.0  | 20 R10            | Utilizado para QUIC                                                                                                                                    |
| Libuv           | 1.51.0 | 21                | Utilizado para QUIC                                                                                                                                    |
| libZip          | 1.11.4 | 21                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                                                 |
| LZMA            | 5.8.1  | 21                |                                                                                                                                                        |
| ngtcp2          | 1.22.1 | **21 R4**         | Utilizado para QUIC                                                                                                                                    |
| OpenSSL         | 4.0                    | **21 R4**         |                                                                                                                                                        |
| PDFWriter       | 4.7.0  | 21                | Utilizado para [`WP Export document`](../WritePro/commands/wp-export-document.md) y [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| SpreadJS        | 18.2.0 | 21 R2             | Consulte [esta entrada de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) para obtener una visión general de las nuevas funciones        |
| webKit          | WKWebView                              | 19                |                                                                                                                                                        |
| Windows App SDK | 2.0.1  | **21 R4**         | Used for [Fluent UI rendering](../FormEditor/forms.md#fluent-ui-rendering)                                                                             |
| Xerces          | 3.3.0  | 21                | Utilizado para comandos XML                                                                                                                            |
| Zlib            | 1.3.1  | 21                |                                                                                                                                                        |

