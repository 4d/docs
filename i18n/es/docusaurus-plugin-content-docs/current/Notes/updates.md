---
id: updates
title: Notas del lanzamiento
---

## 4D v20

Lea [**Novedades en 4D v20**](https://blog.4d.com/en-whats-new-in-4d-v20/), la entrada del blog que enumera todas las nuevas funcionalidades y mejoras de 4D v20.


#### Aviso de reconstrucción del índice

4D v20 incluye una actualización de la librería ICU (ver abajo) que forzará una reconstrucción automática de los índices de tipo alpha, texto y objeto. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

#### Puntos fuertes

- 4D Server integra automáticamente varios historiales: [Restauración automática](../Backup/settings.md#automatic-restore).
- [IMAP Transporter Class](../API/IMAPTransporterClass): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) devuelve *id*, [`.selectBox()`](../API/IMAPTransporterClass#selectbox) devuelve *id*, *flags* y *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass#addflags) y [`.removeFlags()`](../API/IMAPTransporterClass#removeflags) soportan palabras clave personalizadas.
- Nuevas clases [WebSocketServer](../API/WebSocketServerClass.md) y [WebSocketConnection](../API/WebSocketConnectionClass.md) para crear y gestionar conexiones WebSocket desde 4D.
- Soporte de la palabra clave [`property`](../Concepts/classes.md#property) en las definiciones de clase usuario.
- Nuevas funciones para bloquear/desbloquear el datastore: [`.flushAndLock()`](../API/DataStoreClass#flushandlock), [`.locked()`](../API/DataStoreClass#locked), [`.unlock()`](../API/DataStoreClass#unlock).
- Nueva función [`.at()`](../API/EntitySelectionClass#at) en la clase de selección de entidades.
- Nuevas funciones en la clase Collection: [`.at()`](../API/CollectionClass#at), [`.first()`](../API/CollectionClass#first), [`.flat()`](../API/CollectionClass#flat), [`.flatMap()`](../API/CollectionClass#flatmap),[`.includes()`](../API/CollectionClass#includes), [`.last()`](../API/CollectionClass#last), [`.reduceRight()`](../API/CollectionClass#reduceright).
- Editor de código: mejorado [Funciones de búsqueda y sustitución](../code-editor/write-class-method.md#find-and-replace).
- Nuevo elemento de búsqueda del lenguaje "property" en el diálogo [**Buscar en diseño...**](https://doc.4d.com/4Dv19R8/4D/19-R8/Performing-a-search.300-6125772.en.html#105269).
- Para simplificar el código, algunos operadores de comparación pueden utilizarse ahora con [Valores indefinidos](../Concepts/dt_null_undefined.md#undefined-operators) sin generar errores.
- Soporte del parámetro *headerOnly* en [`POP3Transporter.getMail()`](../API/POP3TransporterClass#getmail).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nueva función [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nuevas herramientas para la ejecución de código en CLI: [tool4d](../Admin/cli.md#tool4d) y [4D Server en modo utilitario](../Admin/cli.md#4d-server-in-utility-mode).
- [Explorador de datos](../Admin/dataExplorer.md#opening-the-data-explorer): nuevo botón y visualización en una ventana 4D.
- Nuevas propiedades para botones, casillas de verificación y botones radio: [Imagen abraza título](../FormObjects/properties_TextAndPicture.md#image-hugs-title) y [Alineación horizontal](../FormObjects/properties_Text.md#horizontal-alignment).
- Comandos del lenguaje 4D: [Página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20): lista de todos los bugs corregidos en 4D v20.



#### Cambios de comportamiento

- Para el cumplimiento HTTP RFC, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) devuelve ahora todos los nombres de encabezado **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response).


## 4D v19 R8

Lea las [**Novedades de 4D v19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), la entrada de blog que lista todas las nuevas funcionalidades y mejoras de 4D v19 R8.


#### Puntos fuertes

- Se pueden instalar métodos de gestión de errores para [contextos de ejecución globales y de componentes](../Concepts/error-handling.md#scope-and-components).
- Los listboxes con fuentes de datos colección o selección de entidades ahora soportan la propiedad de columna [Alto de línea automático](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height).
- ORDA: soporte del archivo *roles.json* para definir [privilegios](../ORDA/privileges.md) asignados a la sesión con [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Soporte del [modo SDI en el modo de aplicación de prueba](../Menus/sdi.md#sdi-mode-availability) en Windows.
- 4D View Pro:
    - soporte de temas en tablas: nuevos comandos [VP SET TABLE THEME](../ViewPro/method-list#vp-set-table-theme) y [VP Get table theme](../ViewPro/method-list#vp-get-table-theme), soporte de opciones de tema en [VP CREATE TABLE](../ViewPro/method-list#vp-create-table)
    - nuevo [comando VP Get table dirty rows](../ViewPro/method-list#vp-get-table-dirty-rows)
- Comandos del lenguaje 4D: [Página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19_R8): lista de todos los errores que se han corregido en 4D v18.


#### Cambios de comportamiento

- Para el cumplimiento HTTP RFC, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) devuelve ahora todos los nombres de encabezado **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response).
- Cuando a un [botón de bisel con menú emergente vinculado](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) se le asigna una acción estándar, ésta ya no se genera si se selecciona una opción de menú emergente.
- En las áreas Web que utilizan blink (CEF), los diálogos mostrados desde scripts externos ahora se bloquean si no se llaman desde una función `setTimeout()` JS. Esto se debe a las actualizaciones actuales CEF, en las que los diálogos mostrados por funciones como `alert()` o `print()` ya no son gestionados por el SO sino por el área Web. Ver [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) y [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



## 4D v19 R7

Lea [**Novedades de 4D v19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), la entrada del blog que enumera todas las nuevas funcionalidades y mejoras de 4D v19 R7.


#### Puntos fuertes

- Los datos relacionados y los atributos calculados/alias pueden mostrarse en el [explorador de datos](../Admin/dataExplorer#basics).
- Nueva clase [FileHandle](../API/FileHandleClass) y nueva función [`.open()`](../API/FileClass#open) en la clase `File`.
- [Clase selección de entidades](../API/EntitySelectionClass): [`.add()`](../API/EntitySelectionClass#add) soporta un parámetro *entitySelection*, [`.minus()`](../API/EntitySelectionClass#minus) soporta un parámetro *keepOrder*.
- 4D View Pro: nuevos comandos tabla [VP Find table](../ViewPro/method-list#vp-find-table), [VP Get table column attributes](../ViewPro/method-list#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list#vp-set-table-column-attributes).
- Los espacios de nombres de los componentes ahora se [muestran en el Explorador](../Extensions/develop-components.md#declaring-the-component-namespace).
- Los objetos Área de texto y Formulario de entrada ahora soportan la [propiedad de radio de esquina](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Comandos de lenguaje 4D: [Novedades de la página](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19_R7): lista de todos los errores que se han corregido en 4D v19 R7.


#### Cambios de comportamiento

- Para mantener la coherencia con las interfaces estándar (por ejemplo, los exploradores de archivos del sistema operativo), se han modificado las reglas del list box para la selección/arrastrar y soltar de líneas. Se puede arrastrar una selección continua o discontinua de líneas simplemente haciendo clic en una línea seleccionada y moviéndola; la tecla **Alt** ya no es necesaria (pero se puede seguir utilizando como en el caso anterior). Cuando se presiona la tecla **Mayús** o **Ctrl/Comando**, se tiene en cuenta el clic del ratón cuando éste está presionado. Para más información sobre arrastrar y soltar en list boxes, puede consultar [esta entrada del blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) y descargar [este proyecto 4D HDI](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- La numeración interna de 4D ha sido modificada a partir de 4D v19 R7:
    - las versiones hasta 4D v19 R6 (incluida) llevan el número 282xxx,
    - las versiones a partir de 4D v19 R7 se numerarán 100xxx.   
      Tenga en cuenta que una versión 4D específica sigue estando identificada de forma única por un nombre de rama y un número de compilación. El número de build aumenta cronológicamente.
- Se ha eliminado la posibilidad de utilizar el protocolo Wakanda/4D Mobile REST para llamar a un método proyecto. En su lugar, puede utilizar [Funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) o [/4DACTION urls](../WebServer/httpRequests.md#4daction).


## 4D v19 R6

- Nueva clase [HTTPRequest](../API/HTTPRequestClass).
- Las funciones colección que pueden llamar código ahora soportan objetos de función como parámetro *fórmula*: [`.every()`](../API/CollectionClass#every), [`.filter()`](../API/CollectionClass#filter), [`.find()`](../API/CollectionClass#find), [`.findIndex()`](../API/CollectionClass#findindex), [`.map()`](../API/CollectionClass#map), [`.orderByMethod()`](../API/CollectionClass#orderbymethod), [`.reduce()`](../API/CollectionClass#reduce), [`.some()`](../API/CollectionClass#some), [`.sort()`](../API/CollectionClass#sort)
- Las celdas listbox soportan el espacio [horizontal](FormObjects/propertiesCoordinatesAndSizing#horizontal-padding) y [vertical](FormObjects/propertiesCoordinatesAndSizing#vertical-padding).
- 4D View Pro: nuevos comandos [VP CREATE TABLE](../ViewPro/method-list#vp-create-table) y [VP REMOVE TABLE](../ViewPro/method-list#vp-remove-table) para gestionar las tablas en las hojas.
- Posibilidad de ver los atributos relacionados, calculados y alias en el [explorador de datos web](../Admin/dataExplorer#basics).
- To help us make our products always better, we now automatically collect data regarding usage statistics on running 4D Server applications. This will have no impact on performance. See the new page explaining [why and how 4D collects data](../Admin/data-collect).
- Components compiled for Silicon: On macOS Silicon platforms (Apple ARM CPUs), components must be recompiled with 4D v19 R6 or higher to be used with this release.




## 4D v19 R5

- The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
- You can now [deselect useless modules](../Desktop/building#deselecting-modules) in your built applications.
- The *MeCab* library is included by default in all 4D applications on macOS. In previous releases, this library, specifically designed to manage Japanese text, was only available in the Japanese version of 4D on macOS. If you do not need this library in your final applications, you can now [deselect it](../Desktop/building#deselecting-modules).
- [Optimización cliente/servidor](../ORDA/datastores#clientserver-optimization): nuevas funciones de clase permiten manejar la caché ORDA y el contenido de un contexto de optimización. Para más información [Preconfiguración de contextos](../ORDA/datastores#preconfiguring-contexts) y [Caché ORDA](../ORDA/datastores#orda-cache).

   > These functions are intended for developers who need to customize ORDA default features for specific configurations. En la mayoría de los casos, no será necesario utilizarlos.
- [clase DataClass](../API/DataClassClass): la nueva función [.getCount()](../API/DataClassClass#getcount) devuelve el número de entidades de una dataclass.
- The *4DDiagnosticLog.txt* file only records high-level information by default ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). You can now select the information level to record (for example DEBUG level information) using the `Diagnostic log level` selector of the `SET DATABASE PARAMETER` command or the log configuration file.
- Calling `Use()` on a non-shared object or a non-shared collection does nothing (it no longer generates an error). Thus, it is now useless to test if the object or collection passed to Use() is actually shared.
- For clarification purposes, two SQL commands have been prefixed: `GET DATA SOURCE LIST` has been renamed to `SQL GET DATA SOURCE LIST`, `Get current data source` has been renamed to `SQL Get current data source`.
- **4D View Pro**:
    - Los nuevos comandos [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context), [VP Get data context](../ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) permiten crear contextos de datos y vincular su contenido a las celdas de la hoja.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) y [VP Export to object](../ViewPro/method-list#vp-get-binding-path) aceptan ahora la nueva opción `includeBindingSource` que exporta el contenido de un contexto de datos como valores de celda.
    - (Windows only) 4D View Pro areas now use a new print settings window.
- **Web areas**:
    + New Windows system rendering engine: Web Areas using the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) are now based upon **Microsoft Edge WebView2**. This impacts the following features:
        * The `WA Create URL history menu` and `WA GET URL HISTORY` commands only return the current URL.
        - The [Progression variable](../FormObjects/properties_WebArea.md#progression) is no longer updated.
        - Drag and drop features are handled by a Windows API which is tagged "experimental" by Microsoft. Consequently, web areas may not work as expected when this API is not installed: Drag and drop may seem allowed even when the `WA enable URL drop` preference has been set to False. However, the drop action is blocked by default, and you can control the allowed URLs using the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) (see below).
    - (Windows only) When the user selects **Print...** from a web area using the embedded web rendering engine, a new print settings window is now displayed.
    - To reflect their actual effect in web areas (increase or decrease page zoom level), two commands have been renamed: `WA SET PAGE TEXT LARGER` has been renamed `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` has been renamed `WA ZOOM OUT`.
    - Enhanced security in web areas that use the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) or the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) (based on Microsoft Edge WebView2):
        - CORS policies now apply when accessing files on disk in web areas. For example, when opening a .html file with `WA OPEN URL`, that .html file cannot contain links that point to files outside its folder
        - Dropping external contents in web areas is now always blocked and triggers the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) when the `WA enable URL drop` preference is set to True (when set to False, the `WA enable URL drop` preference only modifies the drop cursor icon and filters the `On Window Opening Denied` event). To allow a drop action, you need to execute additional code in the object method of the web area:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))
```



## 4D v19 R4

- [Atributos Alias](../ORDA/ordaClasses#alias-attributes-1) están disponibles en las clases ORDA.
- Soporte para las instrucciones [break y continue](../Concepts/looping#break-and-continue) en los bucles.
- Soporte para la instrucción [return](../Concepts/control-flow#return-expression) y [la expresión return](../Concepts/parameters#return-expression) para devolver los valores.
- Soporte de los [operadores de asignación compuestos](../Concepts/operators#compound-assignment-operators), [los operadores de cortocircuito](../Concepts/operators#short-circuit-operators) y del [operador ternario](../Concepts/operators#ternary-operator)
- El [editor de código](../code-editor/overview) ahora incluye una herramienta desplegable y soporta marcadores para una mejor navegación por el código.
- Nuevas Preferencias: [**Incluir los tokens en los archivos fuente del proyecto**](../Preferences/general#include-tokens-in-project-source-files) y la opción [**Mostrar los portapapeles**](../Preferences/methods#show-clipboards) en la página Métodos.
- Nueva petición REST para las entidades [lock/unlock](../REST/lock).
- [4D View Pro](../ViewPro/getting-started) capítulo añadido con nuevos comandos: [VP Copy to object](../ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list#vp-paste-from-object).
- Nuevo [Clase SystemWorker](../API/SystemWorkerClass).
- The `Alias selection` constant has been renamed `Allow alias files` to resolve a conflict resulting from the support of alias attributes in ORDA.
- For better compliance with ORDA specifications, the *Map NULL values to blank values* field property is now unchecked by default in databases created with 4D v19 R4 and higher. You can also enable this default behavior in your databases converted from previous versions by selecting the Map NULL values to blank values unchecked by default at field creation compatibility setting. Working with Null values is now recommended since they are fully supported by ORDA.
- Because of the support of the [ternary operator](../Concepts/operators#ternary-operator), the colon ":" is no longer allowed in variable, field, constant, function, plugin and project method names. If your database/project contains identifiers with colons, you must replace them before converting it to v19 R4 or higher, otherwise errors may occur in your code. For example, if you have a variable named *a:b*, it could be interpreted as ternary operator syntax:

```4d
$value:=($size>1000)? a:b // Aquí 'a:b' se considera un operador ternario.
```



## 4D v19 R3

- Las [propiedades calculadas](../Concepts/classes#function-get-and-function-set) están disponibles en las clases.
- [Los atributos calculados](../ORDA/ordaClasses#computed-attributes) están disponibles en las clases ORDA. Son similares a las propiedades calculadas pero también soportan las funciones [query](../ORDA/ordaClasses#function-query-attributename) y [orderBy](../ORDA/ordaClasses#function-orderby-attributename).
- Nuevos atributos de dataclass ORDA: [`exposed`](../API/DataClassAttributeClass#exposed) y [`readOnly`](../API/DataClassAttributeClass#readonly).
- [Los archivos ZIP](../API/ZipArchiveClass#zip-create-archive) ahora soportan los algoritmos de compresión *LZMA* y *xz*.
- Una [nueva opción de build](../Desktop/building#allow-connection-of-silicon-mac-clients) facilita la inclusión de los clientes Silicon Mac en las aplicaciones servidor en Windows.
- [soporte del modo oscuro](../Preferences/general#appearance-macos-only) en macOS.
- Soporte de **OAuth2 token object** en [`IMAP New transporter`](../API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass#pop3-new-transporter) y [`SMTP New transporter`](../API/SMTPTransporterClass#smtp-new-transporter).
- Los usuarios pueden ahora cargar un [archivo de configuración de registro](../Debugging/debugLogFiles#using-a-log-configuration-file) utilizando un botón en la [ventana de administración del servidor](../ServerWindow/maintenance#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters#optional-parameters) is more flexible in the 4D language when accessing parameters declared but not passed. For example, the following code no longer provokes an error:

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+" "+$param2)
  // Calling method
 $class:=cs.myClass.new()
 $class.concate("Hello";" world") // Displays "Hello world"
 $class.concate("Hello") // Displays "Hello "
 $class.concate() // Displays " "
```
For detailed information, please refer to [this blog post](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). To benefit from this overall simplification, you need to recompile both calling and called methods; thus components must be recompiled.
- La depuración de las sesiones de servidor web [es más fácil en 4D Server](../WebServer/sessions#preemptive-mode).
- El nuevo componente [4D NetKit](https://github.com/4d/4D-NetKit) permite conectar con APIs de terceros como Microsoft Graph.
- 4D v19 R3 uses a stronger hashing algorithm for 4D user passwords: Bcrypt. This new algorithm is automatically used when a password is changed using the Tool Box, the `CHANGE PASSWORD` command, or the `Set user properties` command. Once a password is modified, opening the database with a version prior to 4D v19 R3 will cause an authentication denial for this account. If you use 4D passwords, it is highly recommended to backup the .4db file (binary databases) or directory.json file (projects) before upgrading to 4D v19 R3 or later.
- For accuracy, the `4D digest` constant has been renamed `4D REST digest`.
- End-of-line and BOM management for XML commands: When opened in 4D v19 R3, projects or databases created with previous releases behave differently regarding default end-of-line characters and BOM management in XML documents: line feed (LF) characters are used instead of CR (on macOS), and byte order marks (BOM) are not included. This allows a better compatibility with VCS tools. If necessary, you can restore the v19 R2 behavior using the `XML SET OPTIONS` command. In projects or databases converted from versions prior to 19 R2, these options are managed by two compatibility settings.
- Runtime Explorer shortcut removed in built projects: The **Cmd/Ctrl+Shift+F9** shortcut does no longer display the Runtime Explorer window in single-user merged project applications. This shortcut can now be a user application shortcut. You can call the Runtime Explorer window using the new `OPEN RUNTIME EXPLORER` command.
- Extended debugging capabilities with 4D Server: In interpreted mode, 4D Server can now debug all kinds of processes, including scalable web sessions. This is available when the debugger is attached to the server or to a remote client.   
  *Warning: In interpreted mode, in order to make extented debugging available on the server machine, all server processes are now automatically executed in cooperative mode when the debugger is attached to the server (default setting). This can have a significant impact on the performance of your converted applications when they run with 4D Server v19 R3 and higher. To restore preemptive execution on the server in this case, all you need to do is detach the debugger from the server (and attach it to a remote client if necessary).*
- On Windows, 4D projects and databases created with 4D v19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. This API improves text rendering, especially in high DPI configurations. DirectWrite is used for text rendering with static and input text, checkboxes, buttons, and radio buttons. Note that listboxes already use DirectWrite. A compatibility option allows you to enable DirectWrite in projects and databases created with previous 4D versions.
- If you use components compiled with 4D v19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D v19 R3 to provide compatibility with 4D v19 R3 and future releases. If a component is not compiled for Silicon, there is no need to recompile.








## 4D v19 R2

- Un [archivo .gitignore por defecto](../Preferences/general#create-gitignore-file) puede ser creado con nuevos proyectos
- Nuevo [API Blob class](../API/BlobClass) para generar nuevos objetos [`4D.Blob`](Concepts/dt_blob#blob-types)
- Soporte de `no-bom` y nuevos caracteres de fin de línea por defecto en [`.setText()`](../API/FileClass#settext)


## Versiones anteriores

<details><summary>Haga clic para ver las notas de las versiones anteriores</summary>

### 4D v19

- [IMAPTransporter Class](../API/IMAPTransporterClass): nuevas funciones `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` y `.unsubscribe()`.
- [File Class](../API/FileClass): nuevas funciones `setAppInfo()` y `getAppInfo()`.
- Nueva etiqueta de transformación [4DEACH](../Tags/tags.md#4deach-and-4dendeach).
- Servidor web: nuevo parámetro [Cookie de sesión SameSite](../WebServer/webServerConfig#session-cookie-samesite).
- Soporte de esquema de color oscuro y claro para los [formularios](../FormEditor/propertiesForm#color-scheme) y [hojas de estilo](../FormEditor/stylesheets#media-queries)
- Nuevos temas oscuros y claros por defecto en [las preferencias del editor de código](../Preferences/methods#theme-list).
- [Compilación nativa](../Project/compiler#compiler-methods-for) para procesadores Silicon.
- La propiedad [cálculo de variables](../FormObjects/propertiesObject#variable-calculation) es ahora soportada por las columnas list box de la selección de entidades.
- Nueva, página [CLI](../Admin/cli) completa.



### 4D v18 R6

- [Entity Selection Class](../API/EntitySelectionClass): las funciones `.average()`, `.max()` y `.min()` ahora devuelven *undefined* si la selección de entidades está vacía.
- [IMAP Mail](../API/IMAPTransporterClass), [POP3 Mail](../API/POP3TransporterClass) y [SMTP Mail](../API/SMTPTransporterClass): la propiedad `authenticationMode` activa a OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass): nuevas funciones `.expunge()` y `.append()`
- Nuevo componente [WebAdmin](../Admin/webAdmin) del servidor web
- Nueva interfaz [DataExplorer](../Admin/dataExplorer)
- Nuevas [sesiones de usuario](../WebServer/sessions) web y [su API](../API/SessionClass).


</details>


## Tabla de las librerías



| Librería  | Versión actual | Actualizado en 4D | Comentario                                                                                                                                                                                 |
| --------- | -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ICU       | 72.1           | 20                | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto.                                                                              |
| CEF       | 109            | 20                | Chromium 5414. Las políticas CORS ahora también se aplican cuando se accede a archivos en disco (ver el párrafo "seguridad" sobre áreas web en la sección [4D v19 R5](#4d-v19-r5) arriba). |
| Hunspell  | 1.7.2          | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                                                                                                  |
| PDFWriter | 4.3            | 20                | Dependencia FreeType en 12.2.1                                                                                                                                                             |
| SpreadJS  | 16.0.4         | 20                | Motor 4D View Pro                                                                                                                                                                          |
| OpenSSL   | 1.1.1s         | 19 R7             |                                                                                                                                                                                            |
| libZip    | 1.9.2          | 20                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                                                                                     |
| LZMA      | 5.4.1          | 20                |                                                                                                                                                                                            |
| Zlib      | 1.2.13         | 20                |                                                                                                                                                                                            |
| webKit    | WKWebView      | 19                |                                                                                                                                                                                            |
| PHP       | 8.2.4          | 20                |                                                                                                                                                                                            |
| libldap   | 2.4.48         | 18 R2             |                                                                                                                                                                                            |

