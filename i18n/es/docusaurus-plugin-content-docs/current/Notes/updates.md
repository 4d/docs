---
id: updates
title: Notas del lanzamiento
---


## 4D v20 R2

Lea [**Novedades en 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), la entrada del blog que lista todas las nuevas funcionalidades y mejoras en 4D v20 R2.


#### Puntos fuertes

- New [WebSocket class](../API/WebSocketClass.md) to create and manage client WebSocket connections from 4D.


#### Cambios de comportamiento


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
- Nuevo elemento de búsqueda del lenguaje "property" en el diálogo [**Buscar en diseño...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726).
- Para simplificar el código, algunos operadores de comparación pueden utilizarse ahora con [Valores indefinidos](../Concepts/dt_null_undefined.md#undefined-operators) sin generar errores.
- Soporte del parámetro *headerOnly* en [`POP3Transporter.getMail()`](../API/POP3TransporterClass#getmail).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nueva función [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Los registros de peticiones ORDA están ahora disponibles [en el servidor](../Debugging/debugLogFiles.md#orda-requests), nuevo parámetro para la función [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog).
- Nuevas herramientas para la ejecución de código en CLI: [tool4d](../Admin/cli.md#tool4d) y [4D Server en modo utilitario](../Admin/cli.md#4d-server-in-utility-mode).
- [Explorador de datos](../Admin/dataExplorer.md#opening-the-data-explorer): nuevo botón y visualización en una ventana 4D.
- Nuevas propiedades para botones, casillas de verificación y botones radio: [Imagen abraza título](../FormObjects/properties_TextAndPicture.md#image-hugs-title) y [Alineación horizontal](../FormObjects/properties_Text.md#horizontal-alignment).
- Soporte de `WinIcon` en la función [`file.setAppInfo()`](../API/FileClass.md#setappinfo).
- New `validateTLSCertificate` option for [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) allowing you to control the automatic certificate validation.
- Comandos del lenguaje 4D: [Página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20): lista de todos los bugs corregidos en 4D v20.



#### Cambios de comportamiento

- Para el cumplimiento HTTP RFC, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) devuelve ahora todos los nombres de encabezado **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response).
- TLS certificates are now automatically validated by 4D when sending HTTP requests with [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new), and rejected with an error if they are invalid. A new *option* property allows you to control this validation.
- TLS v1.0 and TLS v1.1 are deprecated, they are no longer supported as `Min TLS version` on 4D Server. Version 1.3 is now selected by default and is automatically used if `_o_TLSv1_0` or `_o_TLSv1_1` constants are set with [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- For consistency, all buttons, checkboxes, and radio buttons are now rendered with a "3D" type at runtime: respectively `Object type 3D button`, `Object type 3D checkbox`, and `Object type 3D radio button` are returned by [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) for these objects.
- As of 4D v20, [4D for Mobile](https://developer.4d.com/go-mobile/) is no longer installed by default in the 4D environment. To benefit from the 4D for Mobile development features in 4D, you need to [install the 4D Mobile App component](https://developer.4d.com/go-mobile/docs/getting-started/installation) in the ["Components"](../Project/architecture.md#components) folder of your projects. Si un proyecto convertido utiliza funciones del [componente 4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), asegúrese de instalarlo también en la carpeta "Componentes" del proyecto.


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
- Para que nuestros productos sean siempre mejores, ahora recogemos automáticamente los datos relativos a las estadísticas de uso de las aplicaciones 4D Server en funcionamiento. Esto no tendrá ningún impacto en el rendimiento. Consulte la nueva página en la que se explica [por qué y cómo 4D recopila datos](../Admin/data-collect).
- Componentes compilados para Silicon: en las plataformas macOS Silicon (CPU ARM de Apple), los componentes deben recompilarse con 4D v19 R6 o superior para poder utilizarse con esta versión.




## 4D v19 R5

- El [archivo directory.json](Users/editing#directoryjson-file) del proyecto ahora puede ser [integrado al servidor](../Desktop/building#embed-the-project-users-and-groups-in-built-server-application) al momento de la generación, lo que le permite desplegar una aplicación cliente/servidor con una configuración básica de la seguridad de los usuarios y de los grupos.
- Ahora puede [deseleccionar los módulos inútiles](../Desktop/building#deselecting-modules) en sus aplicaciones generadas.
- La librería *MeCab* se incluye por defecto en todas las aplicaciones 4D en macOS. En versiones anteriores, esta librería, diseñada específicamente para gestionar texto japonés, sólo estaba disponible en la versión japonesa de 4D en macOS. Si no necesita esta librería en sus aplicaciones finales, ahora puede deseleccionarla [](../Desktop/building#deselecting-modules).
- [Optimización cliente/servidor](../ORDA/datastores#clientserver-optimization): nuevas funciones de clase permiten manejar la caché ORDA y el contenido de un contexto de optimización. Para más información [Preconfiguración de contextos](../ORDA/datastores#preconfiguring-contexts) y [Caché ORDA](../ORDA/datastores#orda-cache).

   > Estas funciones están destinadas a los desarrolladores que necesitan personalizar las funciones por defecto de ORDA para las configuraciones específicas. En la mayoría de los casos, no será necesario utilizarlos.
- [clase DataClass](../API/DataClassClass): la nueva función [.getCount()](../API/DataClassClass#getcount) devuelve el número de entidades de una dataclass.
- El archivo *4DDiagnosticLog.txt* sólo registra información de alto nivel por defecto ([nivel INFO](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). Ahora puede seleccionar el nivel de información que desea registrar (por ejemplo, información de nivel DEBUG) utilizando el selector `Diagnostic log level` del comando `SET DATABASE PARAMETER` o el archivo de configuración del registro.
- Llamar a `Use()` sobre un objeto no compartido o una colección no compartida no hace nada (ya no genera un error). Por lo tanto, ahora es inútil comprobar si el objeto o colección pasado a Use() es realmente compartido.
- Para mayor claridad, se han antepuesto dos comandos SQL: `GET DATA SOURCE LIST` se ha renombrado a `SQL GET DATA SOURCE LIST`, `Get current data source` se ha renombrado a `SQL Get current data source`.
- **4D View Pro**:
    - Los nuevos comandos [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context), [VP Get data context](../ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) permiten crear contextos de datos y vincular su contenido a las celdas de la hoja.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) y [VP Export to object](../ViewPro/method-list#vp-get-binding-path) aceptan ahora la nueva opción `includeBindingSource` que exporta el contenido de un contexto de datos como valores de celda.
    - (Sólo Windows) Las áreas de 4D View Pro utilizan ahora una nueva ventana de configuración de impresión.
- **Áreas web**:
    + Nuevo motor de renderizado del sistema Windows: las áreas web que utilizan el motor de renderizado del sistema Windows [](../FormObjects/webArea_overview.md#web-rendering-engine) se basan ahora en **Microsoft Edge WebView2**. Esto afecta a las siguientes funcionalidades:
        * Los comandos `WA Create URL history menu` y `WA GET URL HISTORY` sólo devuelven la URL actual.
        - La [variable de progresión](../FormObjects/properties_WebArea.md#progression) ya no se actualiza.
        - Las funciones de arrastrar y soltar se gestionan mediante una API de Windows que Microsoft califica de "experimental". En consecuencia, es posible que las áreas web no funcionen como se espera cuando esta API no está instalada: arrastrar y soltar puede parecer permitido incluso cuando la preferencia `WA enable URL drop` se ha establecido en False. Sin embargo, la acción de soltar está bloqueada por defecto, y puede controlar las URLs permitidas utilizando el evento [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) (ver más abajo).
    - (Sólo Windows) Cuando el usuario selecciona **Imprimir...** desde un área web que utiliza el motor de renderizado web anidado, ahora se muestra una nueva ventana de configuración de impresión.
    - Para reflejar su efecto real en las áreas web (aumentar o disminuir el nivel de zoom de la página), se ha cambiado el nombre de dos comandos: `WA SET PAGE TEXT LARGER` ha pasado a llamarse `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` ha pasado a llamarse `WA ZOOM OUT`.
    - Seguridad mejorada en áreas web que utilizan el [motor de renderizado web anidado](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) o el [motor de renderizado del sistema Windows](../FormObjects/webArea_overview.md#web-rendering-engine) (basado en Microsoft Edge WebView2):
        - Las políticas CORS ahora se aplican cuando se accede a archivos en disco en áreas web. Por ejemplo, al abrir un archivo .html con `WA OPEN URL`, ese archivo .html no puede contener enlaces que apunten a archivos fuera de su carpeta
        - Ahora, soltar contenidos externos en áreas web siempre está bloqueado y activa el evento [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) cuando la preferencia `WA enable URL drop` está establecida en True (cuando está establecida en False, la preferencia `WA enable URL drop` sólo modifica el icono del cursor de soltar y filtra el evento `On Window Opening Denied`). Para permitir una acción de soltar, es necesario ejecutar código adicional en el método objeto del área web:

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
- La constante `Alias selection` ha pasado a llamarse `Allow alias files` para resolver un conflicto derivado del soporte de atributos de alias en ORDA.
- Para un mejor cumplimiento de las especificaciones ORDA, la propiedad de campo *Asignar valores NULL a valores vacíos* está ahora desmarcada por defecto en bases de datos creadas con 4D v19 R4 y superiores. También puede activar este comportamiento por defecto en sus bases de datos convertidas de versiones anteriores seleccionando la opción de compatibilidad Asignar valores NULL a valores vacíos desmarcada por defecto en la creación de campos. Ahora se recomienda trabajar con valores Null, ya que ORDA los soporta completamente.
- Debido a la compatibilidad con el operador ternario [](../Concepts/operators#ternary-operator), ya no se permiten los dos puntos ":" en los nombres de variables, campos, constantes, funciones, plugins y métodos proyecto. Si su base de datos/proyecto contiene identificadores con dos puntos, debe reemplazarlos antes de convertirla a v19 R4 o superior, de lo contrario pueden producirse errores en su código. Por ejemplo, si tiene una variable denominada *a:b*, podría interpretarse como sintaxis de operador ternario:

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
- La gestión de los [parámetros opcionales](../Concepts/parameters#optional-parameters) es más flexible en el lenguaje 4D cuando se accede a parámetros declarados pero no pasados. Por ejemplo, el siguiente código ya no provoca un error:

```4d
// Función "concate" de myClass
Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+" "+$param2)
  // Método de llamada
 $class:=cs.myClass.new()
 $class.concate("Hello";" world") // Displays "Hello world"
 $class.concate("Hello") // Displays "Hello "
 $class.concate() // Displays " "
```
Para obtener información detallada, consulte [esta entrada del blog](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). Para beneficiarse de esta simplificación general, es necesario recompilar tanto los métodos que llaman como los que son llamados; por lo tanto, los componentes deben recompilarse.
- La depuración de las sesiones de servidor web [es más fácil en 4D Server](../WebServer/sessions#preemptive-mode).
- El nuevo componente [4D NetKit](https://github.com/4d/4D-NetKit) permite conectar con APIs de terceros como Microsoft Graph.
- 4D v19 R3 utiliza un algoritmo hash más fuerte para las contraseñas de usuario 4D: Bcrypt. Este nuevo algoritmo se utiliza automáticamente cuando se cambia una contraseña utilizando la Caja de herramientas, el comando `CHANGE PASSWORD` o el comando `Set user properties`. Una vez modificada la contraseña, la apertura de la base de datos con una versión anterior a 4D v19 R3 provocará una denegación de autenticación para esta cuenta. Si utiliza contraseñas 4D, es muy recomendable hacer una copia de seguridad del archivo .4db (bases de datos binarias) o del archivo directory.json (proyectos) antes de actualizar a 4D v19 R3 o posterior.
- Para mayor precisión, la constante `4D digest` ha pasado a denominarse `4D REST digest`.

- Gestión de fin de línea y lista de materiales para comandos XML: cuando se abren en 4D v19 R3, los proyectos o bases de datos creados con versiones anteriores se comportan de forma diferente en lo que respecta a los caracteres de fin de línea predeterminados y la gestión de la lista de materiales en documentos XML: se utilizan caracteres de salto de línea (LF) en lugar de CR (en macOS) y no se incluyen las marcas de orden de bytes (BOM). Esto permite una mejor compatibilidad con las herramientas VCS. Si es necesario, puede restaurar el comportamiento de v19 R2 utilizando el comando `XML SET OPTIONS`. En los proyectos o bases de datos convertidos desde versiones anteriores a la 19 R2, estas opciones se gestionan mediante dos ajustes de compatibilidad.
- Se ha eliminado el acceso directo al Explorador de ejecución en los proyectos creados: el acceso directo **Cmd/Ctrl+Mayús+F9** ya no muestra la ventana del Explorador de ejecución en aplicaciones de proyectos fusionados de un solo usuario. Este acceso directo ahora puede ser un acceso directo a una aplicación de usuario. Puede llamar a la ventana del Explorador de ejecución utilizando el nuevo comando `OPEN RUNTIME EXPLORER`.
- Capacidades de depuración extendiddas con 4D Server: en modo interpretado, 4D Server puede ahora depurar todo tipo de procesos, incluidas las sesiones web escalables. Está disponible cuando el depurador está conectado al servidor o a un cliente remoto.   
  *Atención: en el modo interpretado, para que la depuración extendida esté disponible en la máquina del servidor, todos los procesos del servidor se ejecutan ahora automáticamente en modo cooperativo cuando el depurador está conectado al servidor (configuración predeterminada). Esto puede tener un impacto significativo en el rendimiento de sus aplicaciones convertidas cuando se ejecutan con 4D Server v19 R3 y superiores. Para restaurar la ejecución preferente en el servidor en este caso, todo lo que tiene que hacer es desconectar el depurador del servidor (y conectarlo a un cliente remoto si es necesario).*
- En Windows, los proyectos 4D y las bases de datos creadas con 4D v19 R3 y superiores utilizan la API [DirectWrite](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) en los formularios. Esta API mejora el renderizado de texto, especialmente en configuraciones de alto DPI. DirectWrite se utiliza para la representación de texto con texto estático y de entrada, casillas de verificación, botones y botones radio. Tenga en cuenta que los listboxes ya utilizan DirectWrite. Una opción de compatibilidad permite activar DirectWrite en proyectos y bases de datos creados con versiones anteriores de 4D.
- Si utiliza componentes compilados con 4D v19.0 para Silicon (CPUs Apple ARM) que llaman al comando `Count parameters`, le recomendamos recompilarlos con 4D v19 R3 para ofrecer compatibilidad con 4D v19 R3 y futuras versiones. Si un componente no está compilado para Silicon, no es necesario volver a compilarlo.








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



| Librería  | Versión actual | Actualizado en 4D | Comentario                                                                                                    |
| --------- | -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| ICU       | 72.1           | 20                | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto. |
| CEF       | 113            | 20 R2             | Chromium 5672                                                                                                 |
| Hunspell  | 1.7.2          | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                     |
| PDFWriter | 4.3            | 20                | Dependencia FreeType en 12.2.1                                                                                |
| SpreadJS  | 16.0.4         | 20                | Motor 4D View Pro                                                                                             |
| OpenSSL   | 3.1.1          | 20                |                                                                                                               |
| libZip    | 1.9.2          | 20                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                        |
| LZMA      | 5.4.1          | 20                |                                                                                                               |
| Zlib      | 1.2.13         | 20                |                                                                                                               |
| webKit    | WKWebView      | 19                |                                                                                                               |
| PHP       | 8.2.4          | 20                |                                                                                                               |
| libldap   | 2.4.48         | 18 R2             |                                                                                                               |
| libsasl   | 2.1.28         | 20                |                                                                                                               |

