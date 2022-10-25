---
id: updates
title: Actualizaciones de la documentación
---

La lista de las principales actualizaciones de esta documentación. Para obtener información general sobre las nuevas funcionalidades de los productos 4D, consulte las **release notes** en [doc.4d.com](https://doc.4d.com).


## 4D v19 R7

- Los datos relacionados y los atributos calculados/alias pueden mostrarse en el [explorador de datos](Admin/dataExplorer.md#basics).
- Nueva clase [FileHandle](API/FileHandleClass.md) y nueva función [`.open()`](API/FileClass.md#open) en la clase `File`.


## 4D v19 R6

- Nueva clase [HTTPRequest](API/HTTPRequestClass.md).
- Las funciones colección que pueden llamar al código ahora soportan objetos función como parámetro *fórmula*: [`.every()`](API/CollectionClass.md#every), [`.filter()`](API/CollectionClass.md#filter), [`.find()`](API/CollectionClass.md#find), [`.findIndex()`](API/CollectionClass.md#findindex), [`.map()`](API/CollectionClass.md#map), [`.orderByMethod()`](API/CollectionClass.md#orderbymethod), [`.reduce()`](API/CollectionClass.md#reduce), [`.some()`](API/CollectionClass.md#some), [`.sort()`](API/CollectionClass.md#sort)
- Las celdas listbox soportan el espacio [horizontal](FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) y [vertical ](FormObjects/properties_CoordinatesAndSizing.md#vertical-padding).
- 4D View Pro: nuevos comandos [VP CREATE TABLE](ViewPro/method-list.md#vp-create-table) y [VP REMOVE TABLE](ViewPro/method-list.md#vp-remove-table) para gestionar las tablas en las hojas.
- Posibilidad de ver los atributos relacionados, calculados y alias en el [explorador de datos web](Admin/dataExplorer.md#basics).
- Nueva página que explica [por qué y cómo 4D recoge los datos](Admin/data-collect.md).


## 4D v19 R5

- Aplicaciones cliente/servidor generadas:
    - El [archivo directory.json](../Users/handling_users_groups.md#directoryjson-file) del proyecto ahora puede ser [integrado al servidor](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) al momento de la generación, lo que le permite desplegar una aplicación cliente/servidor con una configuración básica de la seguridad de los usuarios y de los grupos.
    - Ahora puede [deseleccionar los módulos inútiles](../Desktop/building.md#deselecting-modules) en sus aplicaciones generadas.

- [Optimización cliente/servidor](../ORDA/remoteDatastores.md#clientserver-optimization): nuevas funciones de clase permiten manejar la caché ORDA y el contenido de un contexto de optimización. Para más información [Preconfiguración de contextos](../ORDA/remoteDatastores.md#preconfiguring-contexts) y [Caché ORDA](../ORDA/remoteDatastores.md#orda-cache).

    > Estas funciones están destinadas a los desarrolladores que necesitan personalizar las funciones por defecto de ORDA para las configuraciones específicas. En la mayoría de los casos, no será necesario utilizarlos.

- [clase DataClass](../API/DataClassClass.md): la nueva función [.getCount()](../API/DataClassClass.md#getcount) devuelve el número de entidades de una dataclass.

- 4D View Pro:
    - Los nuevos comandos [VP SET DATA CONTEXT](ViewPro/method-list.md#vp-set-data-context), [VP Get data context](ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](ViewPro/method-list.md#vp-get-binding-path) permiten crear contextos de datos y vincular su contenido a las celdas de la hoja.
    - [VP EXPORT DOCUMENT](ViewPro/method-list.md#vp-get-binding-path) y [VP Export to object](ViewPro/method-list.md#vp-get-binding-path) aceptan ahora la nueva opción `includeBindingSource` que exporta el contenido de un contexto de datos como valores de celda.


## 4D v19 R4

- [Atributos Alias](ORDA/ordaClasses.md#alias-attributes-1) están disponibles en las clases ORDA.

- Soporte para las instrucciones [break y continue](Concepts/cf_looping.md#break-and-continue) en los bucles.
- Soporte para la instrucción [return](Concepts/flow-control.md#return-expression) y [la expresión return](Concepts/parameters.md#return-expression) para devolver los valores.
- Soporte de los [operadores de asignación compuestos](Concepts/operators.md#compound-assignment-operators), [los operadores de cortocircuito](Concepts/operators.md#short-circuit-operators) y del [operador ternario](Concepts/operators.md#ternary-operator)
- El [editor de código](../code-editor/write-class-method.md#navigation-dropdown) incluye ahora una herramienta desplegable y soporta marcadores para una mejor navegación por el código.
- Nuevas Preferencias: [**Incluir los tokens en los archivos source del proyecto**](Preferences/general.md#include-tokens-in-project-source-files) y la opción [**Mostrar los portapapeles**](Preferences/methods.md#show-clipboards) en la página Métodos.
- Nueva petición REST para [bloquear/desbloquear](REST/$lock.md) las entidades.
- [4D View Pro](ViewPro/getting-started.md) capítulo añadido con nuevos comandos: [VP Copy to object](ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](ViewPro/method-list.md#vp-paste-from-object).
- Nuevo [Clase SystemWorker](API/SystemWorkerClass.md).


## 4D v19 R3

- Las [propiedades calculadas](Concepts/classes.md#function-get-and-function-set) están disponibles en las clases.
- [Los atributos calculados](ORDA/ordaClasses.md#computed-attributes) están disponibles en las clases ORDA. Son similares a las propiedades calculadas pero también soportan las funciones [query](ORDA/ordaClasses.md#function-query-attributename) y [orderBy](ORDA/ordaClasses.md#function-orderby-attributename).
- Nuevos atributos de dataclass ORDA: [`exposed`](API/DataClassAttributeClass.md#exposed) y [`readOnly`](API/DataClassAttributeClass.md#readonly).
- [Los archivos ZIP](API/ZipArchiveClass.md#zip-create-archive) ahora soportan los algoritmos de compresión *LZMA* y *xz*.
- Una [nueva opción de build](Desktop/building.md#allow-connection-of-silicon-mac-clients) facilita la inclusión de los clientes Silicon Mac en las aplicaciones servidor en Windows.
- [soporte del modo oscuro](Preferences/general.md#appearance-macos-only) en macOS.
- Soporte de **OAuth2 token object** en [`IMAP New transporter`](API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](API/POP3TransporterClass.md#pop3-new-transporter) y [`SMTP New transporter`](API/SMTPTransporterClass.md#smtp-new-transporter).
- Los usuarios pueden ahora cargar un [archivo de configuración de registro](Debugging/debugLogFiles.md#using-a-log-configuration-file) utilizando un botón en la [ventana de administración del servidor](ServerWindow/maintenance.md#load-logs-configuration-file).
- La gestión de los [parámetros opcionales](Concepts/parameters.md#optional-parameters) es más flexible en el lenguaje 4D.
- La depuración de las sesiones de servidor web [es más fácil en 4D Server](WebServer/sessions.md#preemptive-mode).
- El nuevo componente [4D NetKit](Extensions/overview.md#list-of-4d-components) permite conectar con APIs de terceros como Microsoft Graph.


## 4D v19 R2

- Un [archivo .gitignore por defecto](Preferences/general.md#create-gitignore-file) puede ser creado con nuevos proyectos
- Nuevo [API Blob class](API/BlobClass.md) para generar nuevos objetos [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- Soporte de `no-bom` y nuevos caracteres de fin de línea por defecto en [`.setText()`](API/FileClass.md#settext)


## 4D v19

- [IMAPTransporter Class](API/IMAPTransporterClass.md): nuevas funciones `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` y `.unsubscribe()`.
- [File Class](API/FileClass.md): nuevas funciones `setAppInfo()` y `getAppInfo()`.
- Nueva etiqueta de transformación [4DEACH](Tags/tags.md#4deach-and-4dendeach).
- Servidor web: nuevo parámetro [Cookie de sesión SameSite](WebServer/webServerConfig.md#session-cookie-samesite).
- Soporte de esquema de color oscuro y claro para los [formularios](FormEditor/properties_FormProperties.md#color-scheme) y [hojas de estilo](FormEditor/createStylesheet.md#media-queries)
- Nuevos temas oscuros y claros por defecto en [las preferencias del editor de código](Preferences/methods.md#theme-list).
- [Compilación nativa](Project/compiler.md#compiler-methods-for) para procesadores Silicon.
- La propiedad [cálculo de variables](FormObjects/properties_Object.md#variable-calculation) es ahora soportada por las columnas list box de la selección de entidades.
- Nueva, página [CLI](Admin/cli.md) completa.



## 4D v18 R6

- [Entity Selection Class](API/EntitySelectionClass.md): las funciones `.average()`, `.max()` y `.min()` ahora devuelven *undefined* si la selección de entidades está vacía.
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) y [SMTP Mail](API/SMTPTransporterClass.md): la propiedad `authenticationMode` activa a OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass.md): nuevas funciones `.expunge()` y `.append()`
- Nuevo componente [WebAdmin](Admin/webAdmin.md) del servidor web
- Nueva interfaz [DataExplorer](../Admin/dataExplorer.md)
- Nuevas [sesiones de usuario](WebServer/sessions.md) web y [su API](API/SessionClass.md).