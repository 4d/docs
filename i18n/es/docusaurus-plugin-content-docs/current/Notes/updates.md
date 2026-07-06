---
id: updates
title: Notas del lanzamiento
---

## 4D 21 R4

Lea [**Novedades en 4D 21 R4**](https://blog.4d.com/whats-new-in-4d-21-r4/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21 R4.

#### Lo más destacado

- AI: On macOS, end users can enhance or summarize texts thanks to the Apple Intelligence **Writing Tools**, available as a [property](../FormObjects/properties_Entry.md#writing-tools) and a [standard action](../Desktop/standard-actions) for [4D Write Pro](../FormObjects/writeProArea_overview.md) and [input](../FormObjects/input_overview.md) form objects.
- Enhanced [support of client/server disconnections](../Desktop/clientServer.md#management-of-unreachable-peer) with QUIC network layer: new [`QUIC session timeout`](../commands/set-database-parameter#quick-session-timeout-135) database parameter, new [`unreachableSince` session.info](../API/SessionClass.md#info) property.
- Las hojas de estilo para listas de varios niveles ya son [compatibles con 4D Write Pro Interface](../WritePro/writeprointerface#multi-level-list-style-sheets), lo que permite a los usuarios crear y gestionar listas estructuradas de varios niveles directamente desde la barra de herramientas y la barra lateral.
- Nuevo comando [`defer`](../commands/defer) para declarar que un fragmento de código se ejecute siempre al salir de un método o una función; nuevo comando [`Deferred formulas`](../commands/deferred-formulas) para obtener la lista de fórmulas diferidas.
- Nueva propiedad `.quotas` de sesión para configurar umbrales para sesiones.
- Nueva clase [`4D.QuotaManager`](../API/QuotaManagerClass.md) para manejar objetos umbrales para proteger el servidor.
- Nueva petición REST [`$entityset/$release`](../REST/$entityset.md#entitysetrelease) para eliminar conjuntos de entidades de la caché del servidor.

#### Cambios de comportamiento

- La sintaxis REST **`GET /Employee/$entityset/<entitySetID>?$method=release`** está **en desuso** y ya no debe utilizarse. To delete entity sets, you must now use [`/$entityset/$release` with a POST verb](./$entityset.md).

## 4D 21 R3

Lea [**Novedades en 4D 21 R3**](https://blog.4d.com/es/whats-new-in-4d-21-r3/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21 R3.

#### Lo más destacado

- El comando [`JSON Validate`](../commands/json-validate) ahora es compatible con el borrador 2020-12 del esquema JSON.
- 4D Write Pro ahora soporta [hojas de estilo de lista de múltiples niveles](../WritePro/user-legacy/stylesheets.md#multi-level-list-style-sheets), permitiendo la creación y gestión de [listas de múltiples niveles](../WritePro/user-legacy/using-a-4d-write-pro-area.md#multi-level-lists) con numeración automática.
- Posibilidad de utilizar un certificado personalizado del llavero de macOS en lugar de una carpeta de certificados local en las clases [`HTTPRequest`](../API/HTTPRequestClass.md#4dhttprequestnew) y [`HTTPAgent`](../API/HTTPAgentClass.md#4dhttpagentnew).
- Nueva clase [`4D.Method`](../API/MethodClass.md) para crear y ejecutar un código de método 4D a partir de una fuente de texto. Los comandos [`METHOD Get path`](../commands/method-get-path) y [`METHOD RESOLVE PATH`](../commands/method-resolve-path) soportan una nueva constante `path volatile method` (128).
- El transportador IMAP ahora admite notificaciones de eventos del buzón mediante el protocolo IDLE a través de un [objeto notificador](../API/IMAPTransporterClass.md#notifier) de la clase [4D.IMAPNotifier](../API/IMAPNotifierClass.md), configurable mediante la propiedad `listener` del [nuevo transportador IMAP](../commands/imap-new-transporter).
- Los objetos [session](../API/SessionClass.md) remotos ahora están [disponibles del lado del cliente](../Desktop/sessions.md#availability).
- Nueva [**página de IA** en Configuración](../settings/ai.md), que permite configurar [alias de proveedores y de modelos](../aikit/provider-model-aliases.md) a los que se puede acceder desde el código mediante el componente 4D AIKit.
- Componente 4D AIKit: nueva clase [Providers](../aikit/Classes/OpenAIProviders.md) para instanciar y gestionar [alias de proveedores y modelos](../aikit/provider-model-aliases.md).
- Soporte de [palabra clave `server`](../Concepts/classes.md#server) para las funciones del modelo de datos ORDA y funciones singleton compartidas/sesión.
- Nuevo [renderizador de impresión](../FormEditor/forms.md#print-rendering-engine) para formularios en interfaces Liquid glass y Fluent UI. Nuevas opciones de compatibilidad para [activar el renderizador en las interfaces clásicas](../FormEditor/forms.md#legacy-print-renderer).
- Dependencias: soporte de los [componentes almacenados en los repositorios GitLab](../Project/components.md#configuring-a-gitlab-repository).
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=21_R3): lista de todos los bugs que se han corregido en 4D 21 R3.

#### Soporte de Liquid glass en macOS

- Soporte automático de la [interfaz de [**Liquid glass**](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) con 4D en macOS 26 Tahoe. Consulte [esta entrada del blog](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications) para obtener información detallada.
- Nuevos valores devueltos por el comando [`FORM Theme`](../commands/form-theme) y [CSS Media queries](../FormEditor/createStylesheet.md#media-queries).
- Para ayudar a los desarrolladores a adaptar progresivamente sus interfaces, existe la posibilidad de **desactivar Liquid glass en las aplicaciones basadas en motores 4D** a través de la llave "UIDesignRequiresCompatibility" de la aplicación *Info.plist* (ver [la documentación de Apple sobre esta llave](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility)).

#### Cambios de comportamiento

- El comando [`JSON Validate`](../commands/json-validate) ahora tiene en cuenta la llave *$schema* y genera un error si se declara una versión no soportada en el esquema.
- Para mayor claridad, los objetos fórmulas son ahora instancias de una nueva clase [`4D.Formula`](../API/FormulaClass.md) que hereda de la clase genérica [`4D.Function`](../API/FunctionClass.md).
- En 4D 21 R3, las nuevas mejoras introducidas en el [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) se aplican a los comandos del lenguaje (ver [esta entrada del blog](https://blog.4d.com/enhancement-of-command-syntax-checking-in-the-editor)). Los errores de sintaxis que antes no se detectaban ahora se pueden marcar en el código.
- Se ha eliminado la página "PHP" de la [caja de diálogo Propiedades](../settings/overview.md). Utilice los [selectores PHP del comando `SET DATABASE PARAMETER`](../commands/set-database-parameter#php-interpreter-ip-address-55) para configurar un intérprete PHP.
- La capa de red **Legacy** ya no es compatible. Los proyectos y las bases de datos binarias que utilizaban la capa de red Legacy se configuran automáticamente en [**ServerNet**](../settings/client-server.md#network-layer) al actualizar a 4D 21 R3 o una versión posterior.

## 4D 21 R2

Lea [**Novedades en 4D 21 R2**](https://blog.4d.com/whats-new-in-4d-21-r2/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21 R2.

#### Lo más destacado

- El [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) ha sido mejorado para ofrecer mayor precisión en la detección de errores (ver [esta entrada del blog](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) para más información).
- Las [acciones estándar de 4D Write Pro](../WritePro/user-legacy/standard-actions.md) que aplican [listas](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) ahora ajustan automáticamente los márgenes de los párrafos para mantener los marcadores posicionados al interior de este margen.
- Soporte integrado de `order by` en las cadenas de consulta para búsquedas vectoriales IA utilizando las funciones [`query()`](../API/DataClassClass.md#query-by-vector-similarity) y la [API REST](../REST/$orderby.md).
- Ahora puede crear y abrir Páginas Qodly desde el [Explorador](../Develop/explorer.md).
- Puede [personalizar los iconos de sus componentes](../Extensions/develop-components.md#custom-icon).
- Componente 4D AIKit: nueva clase [File API](../aikit/Classes/OpenAIFilesAPI.md) para implementar las funcionalidades de **carga de archivos**.
- Las funcionalidades [**Buscar en diseño**](../Project/search-replace.md#search-in-components) y [**Reemplazar en el contenido**](../Project/search-replace.md#replace-in-content) ahora admiten componentes editables.
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
| Libuv           | 1.52.1 | **21 R4**         | Utilizado para QUIC                                                                                                                                    |
| libZip          | 1.11.4 | 21                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                                                 |
| LZMA            | 5.8.1  | 21                |                                                                                                                                                        |
| ngtcp2          | 1.24.0 | **21 R4**         | Utilizado para QUIC                                                                                                                                    |
| OpenSSL         | 4.0                    | **21 R4**         |                                                                                                                                                        |
| PDFWriter       | 4.7.0  | 21                | Utilizado para [`WP Export document`](../WritePro/commands/wp-export-document.md) y [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| SpreadJS        | 18.2.0 | 21 R2             | Consulte [esta entrada de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) para obtener una visión general de las nuevas funciones        |
| webKit          | WKWebView                              | 19                |                                                                                                                                                        |
| Windows App SDK | 2                                      | **21 R4**         | Se utiliza para la [renderización de Fluent UI](../FormEditor/forms.md#fluent-ui-rendering)                                                            |
| Xerces          | 3.3.0  | 21                | Utilizado para comandos XML                                                                                                                            |
| Zlib            | 1.3.1  | 21                |                                                                                                                                                        |

