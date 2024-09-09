---
id: updates
title: Notas del lanzamiento
---

## 4D 20.x

Lea las [**novedades de 4D 20**](https://blog.4d.com/en-whats-new-in-4d-v20/), la entrada del blog que lista todas las nuevas funcionalidades y mejoras en 4D 20.


:::caution Versión mínima cliente para 4D Server v20.2 y posteriores

Por razones internas, la versión de los clientes remotos que se conectan a 4D Server 20.2 y posteriores debe ser al menos 4D 20.2.

:::

:::advertencia Nota de Seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D 20.2 LTS build 100956 o superior. Para más información, consulte este [boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Aviso de reconstrucción del índice

4D 20 incluye una actualización de la librería ICU (ver abajo) que forzará una reconstrucción automática de los índices de tipo alpha, texto y objeto. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::caution 4D 20.1 reconstrucción de índices y versiones cliente/servidor

4D 20.1 también incluye una actualización de la biblioteca ICU, que tiene las siguientes consecuencias:

- Forzará una reconstrucción automática de los índices de tipo alfa, texto y objeto.
- Por coherencia de ordenación, es necesario que los clientes remotos 4D y el servidor 4D utilicen la misma versión: sólo los clientes remotos 4D 20.1 pueden conectarse al servidor 4D 20.1 y viceversa.

:::


#### Lo más destacado

- *SpreadJS* actualizado a la versión 16.2.6 en 4D 20.2 HF1.
- 4D 20.2 está certificado en macOS Sonoma (macOS 14).
- (4D 20.1) Nueva propiedad `plugins` en el parámetro *options* para el comando [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html).
- 4D Server integra automáticamente varios historiales: [Restauración automática](../Backup/settings.md#automatic-restore).
- [Clase IMAP Transporter](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) devuelve *id*, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) devuelve *id*, *flags* y *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) y [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) soportan las palabras claves personalizadas.
- Nuevas clases [WebSocketServer](../API/WebSocketServerClass.md) y [WebSocketConnection](../API/WebSocketConnectionClass.md) para crear y gestionar conexiones WebSocket desde 4D.
- Soporte de la palabra clave [`property`](../Concepts/classes.md#property) en las definiciones de clases de usuarios.
- Nuevas funciones para bloquear/desbloquear el datastore: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- Nueva función [`.at()`](../API/EntitySelectionClass.md#at) en la clase Entity selection.
- Nuevas funciones en la clase Collection: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Editor de código: mejorado [Funciones de búsqueda y sustitución](../code-editor/write-class-method.md#find-and-replace).
- Nuevo elemento lingüístico "property" se puede buscar en la caja de diálogo [**Buscar en diseño...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726).
- Para simplificar el código, algunos operadores de comparación pueden utilizarse ahora con [valores Undefined](../Concepts/dt_null_undefined.md#undefined-operators) sin generar errores.
- Soporte del parámetro *headerOnly* en [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nueva función [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Los registros de las peticiones ORDA están ahora disponibles [en el servidor](../Debugging/debugLogFiles.md#orda-requests), nuevo parámetro para la función [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog).
- Nuevas herramientas para la ejecución de código en CLI: [tool4d](../Admin/cli.md#tool4d) y [4D Server en modo utilitario](../Admin/cli.md#4d-server-in-utility-mode).
- [Data Explorer](../Admin/dataExplorer.md#opening-the-data-explorer): nuevo botón y mostrar en una ventana 4D.
- Nuevas propiedades para botones, asillas de verificación y botones radio: [Posición Imagen título](../FormObjects/properties_TextAndPicture.md#image-hugs-title) y [Alineación horizontal](../FormObjects/properties_Text.md#horizontal-alignment).
- Soporte de `WinIcon` en la función [`file.setAppInfo()`](../API/FileClass.md#setappinfo).
- Nuevo `validateTLSCertificate` opción para [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) que permite controlar la validación automática del certificado.
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) en doc.4d.com.
- Listas de bugs corregidos: [4D 20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D 20.1](https://bugs.4d.fr/fixedbugslist?version=20.1) - [4D 20.2](https://bugs.4d.fr/fixedbugslist?version=20.2) - [4D 20.3](https://bugs.4d.fr/fixedbugslist?version=20.3) - [4D 20.4](https://bugs.4d.fr/fixedbugslist?version=20.4).


#### Cambios de comportamiento

- A partir de 20.3, para permitir la verificación de contraseña cuando el directorio de usuario [4D utiliza el algoritmo bcrypt](https://blog.4d.com/bcrypt-support-for-passwords/), el valor "contraseña" en el parámetro *connectionInfo* del comando [`Open datastore`](../API/DataStoreClass.md#open-datastore) ahora se envía de forma clara por defecto. Asegúrese de que su método base "On REST autentication" puede manejar contraseñas de forma limpia (el tercer parámetro es entonces **False**) y que `Open datastore` encripta su conexión pasando la opción "tls" a **True** en *connectionInfo*. En casos específicos, también se puede utilizar una nueva opción "passwordAlgorithm" para la compatibilidad (ver [`Open datastore`](../API/DataStoreClass.md#open-datastore)).
- A partir de 20.2, 4D 20 LTS ya no es compatible con Windows Server 2012 R2.
- **Atención**: el valor inicial [`offset`](../API/FileHandleClass.md#offset) de los objetos [4D.FileHandle](../API/FileHandleClass.md) se ha definido incorrectamente en 1 en lugar de 0. Se ha realizado una corrección en 4D a partir de las versiones **20.1 HF1** y **20 R2** y el valor es ahora 0.
- Para el cumplimiento con la RFC HTTP, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) devuelve ahora todos los nombres de encabezados **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Los certificados TLS son ahora validados automáticamente por 4D al enviar peticiones HTTP con [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) y rechazados con un error si no son válidos. Una nueva propiedad *option* le permite controlar esta validación.
- TLS v1.0 y TLS v1.1 están obsoletos, ya no están soportados como `Min TLS versión` en 4D Server. La versión 1.3 se selecciona ahora por defecto y se utiliza automáticamente si se definen las constantes `_o_TLSv1_0` o `_o_TLSv1_1` con [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- Por consistencia, todos los botones, casillas de selección y botones de opción se representan ahora con un tipo "3D" en tiempo de ejecución: `Object type 3D button`, `Object type 3D checkbox` y `Object type 3D radio button` son devueltos por [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) para estos objetos.
- A partir de 4D 20, [4D for Mobile](https://developer.4d.com/go-mobile/) ya no se instala por defecto en el entorno 4D. Para beneficiarse de las funcionalidades de desarrollo de 4D for Mobile en 4D, necesita [instalar el componente 4D Mobile App](https://developer.4d.com/go-mobile/docs/getting-started/installation) en la carpeta ["Components"](../Project/architecture.md#components) de sus proyectos. Si un proyecto convertido utiliza funciones del [componente 4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), asegúrese de instalarlo también en la carpeta "Componentes" del proyecto.


## 4D 19 R8

Lea las [**novedades de 4D 19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), la entrada del blog que lista todas las nuevas funcionalidades y mejoras en 4D 19 R8.


#### Lo más destacado

- Se pueden instalar métodos de gestión de errores para [contextos de ejecución globales y de componentes](../Concepts/error-handling.md#scope-and-components).
- Los listboxes con fuentes de datos colección o selección de entidades ahora soportan la propiedad de columna [Alto de línea automático](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height).
- ORDA: soporte del archivo *roles.json* para definir [privilegios](../ORDA/privileges.md) asignados a la sesión con [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Soporte del [modo SDI en el modo test application](../Menus/sdi.md#sdi-mode-availability) en Windows.
- 4D View Pro:
    - soporte de temas en tablas: nuevos comandos [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) y [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme), soporte de opciones de tema en [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table)

    - nuevo comando [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows)
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19_R8): lista de todos los bugs corregidos en 4D 19 R8.


#### Cambios de comportamiento

- Para el cumplimiento con la RFC HTTP, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) devuelve ahora todos los nombres de encabezados **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Cuando a un [botón de bisel con menú emergente vinculado](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) se le asigna una acción estándar, ésta ya no se genera si se selecciona una opción de menú emergente.
- En las áreas Web que utilizan blink (CEF), los diálogos mostrados desde scripts externos ahora se bloquean si no se llaman desde una función `setTimeout()` JS. Esto se debe a las actualizaciones actuales CEF, en las que los diálogos mostrados por funciones como `alert()` o `print()` ya no son gestionados por el SO sino por el área Web. Ver [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) y [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



## 4D 19 R7

Lea las [**novedades de 4D 19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), la entrada del blog que enumera todas las nuevas funcionalidades y mejoras en 4D 19 R7.


#### Lo más destacado

- Los datos relacionados y los atributos calculados/alias pueden mostrarse en el [explorador de datos](../Admin/dataExplorer#basics).
- Nueva clase [FileHandle](../API/FileHandleClass.md) y nueva función [`.open()`](../API/FileClass.md#open) en la clase `File`.
- [Clase Entity selection](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) soporta un parámetro *entitySelection*, [`.minus()`](../API/EntitySelectionClass.md#minus) soporta un parámetro *keepOrder*.
- Soporte de las opciones *automaticRedirections* y *decodeData* en [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Nuevo archivo de registro [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro: nuevos comandos de tabla [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Los espacios de nombres de los componentes se [muestran ahora en el Explorador](../Extensions/develop-components.md#declaring-the-component-namespace).
- Los objetos de tipo área de texto y formulario de entrada ahora soportan la propiedad [corner radius](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19_R7): lista de todos los bugs corregidos en 4D 19 R7.


#### Cambios de comportamiento

- Para mantener la coherencia con las interfaces estándar (por ejemplo, los exploradores de archivos del sistema operativo), se han modificado las reglas del list box para la selección/arrastrar y soltar de líneas. Se puede arrastrar una selección continua o discontinua de líneas simplemente haciendo clic en una línea seleccionada y moviéndola; la tecla **Alt** ya no es necesaria (pero se puede seguir utilizando como en el caso anterior). Cuando se presiona la tecla **Mayús** o **Ctrl/Comando**, se tiene en cuenta el clic del ratón cuando éste está presionado. Para más información sobre arrastrar y soltar en list box, puede consultar [esta entrada del blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) y descargar [este proyecto HDI 4D](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- La numeración interna de 4D ha sido modificada a partir de 4D 19 R7:
    - las versiones hasta la 4D 19 R6 (incluida) llevan el número 282xxx,
    - las versiones a partir de 4D 19 R7 se numerarán 100xxx.   
      Tenga en cuenta que una versión 4D específica sigue estando identificada de forma única por un nombre de rama y un número de compilación. El número de build aumenta cronológicamente.
- Se ha eliminado la posibilidad de utilizar el protocolo Wakanda/4D Mobile REST para llamar a un método proyecto. En su lugar, puede utilizar [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) o las [urls /4DACTION](../WebServer/httpRequests.md#4daction).


## 4D 19 R6

- Nueva clase [HTTPRequest](../API/HTTPRequestClass.md).
- Las funciones de colección que pueden llamar a código ahora soportan objetos función como parámetro *formula*: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Las celdas listbox soportan el espacio [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) y [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding).
- 4D View Pro: nuevos comandos [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) y [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) para manejar tablas en las hojas.
- Posibilidad de ver los atributos relacionados, calculados y alias en el [explorador de datos web](../Admin/dataExplorer.md#basics).
- Para que nuestros productos sean siempre mejores, ahora recogemos automáticamente los datos relativos a las estadísticas de uso de las aplicaciones 4D Server en funcionamiento. Esto no tendrá ningún impacto en el rendimiento. Consulte la nueva página en la que se explica [por qué y cómo 4D recopila datos](../Admin/data-collect.md).
- Componentes compilados para Silicon: en las plataformas macOS Silicon (CPU ARM de Apple), los componentes deben recompilarse con 4D 19 R6 o superior para poder utilizarse con esta versión.




## 4D 19 R5

- El [archivo directory.json](Users/editing#directoryjson-file) del proyecto ahora puede ser [integrado al servidor](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) al momento de la generación, lo que le permite desplegar una aplicación cliente/servidor con una configuración básica de la seguridad de los usuarios y de los grupos.
- Ahora puede [deseleccionar los módulos inútiles](../Desktop/building.md#deselecting-modules) en sus aplicaciones generadas.
- La librería *MeCab* se incluye por defecto en todas las aplicaciones 4D en macOS. En versiones anteriores, esta librería, diseñada específicamente para gestionar texto japonés, sólo estaba disponible en la versión japonesa de 4D en macOS. Si no necesita esta librería en sus aplicaciones finales, ahora puede [deseleccionarla](../Desktop/building.md#deselecting-modules).
- [Optimización cliente/servidor](../ORDA/remoteDatastores.md#clientserver-optimization): nuevas funciones clase permiten manejar la caché ORDA y el contenido de un contexto de optimización. Ver [Preconfiguración de contextos](../ORDA/remoteDatastores.md#preconfiguring-contexts) y [Caché ORDA](../ORDA/remoteDatastores.md#orda-cache) para más información.

   > Estas funciones están destinadas a los desarrolladores que necesitan personalizar las funciones por defecto de ORDA para las configuraciones específicas. En la mayoría de los casos, no será necesario utilizarlos.
- [Clase DataClass](../API/DataClassClass.md): la nueva función [.getCount()](../API/DataClassClass.md#getcount) devuelve el número de entidades de una dataclass.
- El archivo *4DDiagnosticLog.txt* sólo registra información de alto nivel por defecto ([nivel INFO](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). Ahora puede seleccionar el nivel de información que desea registrar (por ejemplo, información de nivel DEBUG) utilizando el selector `Diagnostic log level` del comando `SET DATABASE PARAMETER` o el archivo de configuración del registro.
- Llamar a `Use()` sobre un objeto no compartido o una colección no compartida no hace nada (ya no genera un error). Por lo tanto, ahora es inútil comprobar si el objeto o colección pasado a Use() es realmente compartido.
- Para mayor claridad, se han antepuesto dos comandos SQL: `GET DATA SOURCE LIST` se ha renombrado a `SQL GET DATA SOURCE LIST`, `Get current data source` se ha renombrado a `SQL Get current data source`.
- **4D View Pro**:
    - Los nuevos comandos [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) permiten crear contextos de datos y vincular su contenido a las celdas de la hoja.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) y [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) aceptan ahora la nueva opción `includeBindingSource` que exporta el contenido de un contexto de datos como valores de celda.
    - (Sólo Windows) Las áreas de 4D View Pro utilizan ahora una nueva ventana de configuración de impresión.
- **Áreas web**:
    + Nuevo motor de renderizado del sistema Windows: las áreas web que utilizan el motor de renderizado del sistema Windows [](../FormObjects/webArea_overview.md#web-rendering-engine) se basan ahora en **Microsoft Edge WebView2**. Esto afecta a las siguientes funcionalidades:
        * Los comandos `WA Create URL history menu` y `WA GET URL HISTORY` sólo devuelven la URL actual.
        - La [variable de progresión](../FormObjects/properties_WebArea.md#progression) ya no se actualiza.
        - Las funciones de arrastrar y soltar se gestionan mediante una API de Windows que Microsoft califica de "experimental". En consecuencia, es posible que las áreas web no funcionen como se espera cuando esta API no está instalada: arrastrar y soltar puede parecer permitido incluso cuando la preferencia `WA enable URL drop` se ha establecido en False. Sin embargo, la acción de soltar está bloqueada por defecto, y puede controlar las URLs permitidas utilizando el evento [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) (ver más abajo).
    - (Sólo Windows) Cuando el usuario selecciona **Imprimir...** desde un área web que utiliza el motor de renderizado web anidado, ahora se muestra una nueva ventana de configuración de impresión.
    - Para reflejar su efecto real en las áreas web (aumentar o disminuir el nivel de zoom de la página), se ha cambiado el nombre de dos comandos: `WA SET PAGE TEXT LARGER` ha pasado a llamarse `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` ha pasado a llamarse `WA ZOOM OUT`.
    - Seguridad mejorada en áreas web que utilizan el [motor de renderizado web integrado](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) o el [motor de renderizado del sistema Windows](../FormObjects/webArea_overview.md#web-rendering-engine) (basado en Microsoft Edge WebView2):
        - Las políticas CORS ahora se aplican cuando se accede a archivos en disco en áreas web. Por ejemplo, al abrir un archivo .html con `WA OPEN URL`, ese archivo .html no puede contener enlaces que apunten a archivos fuera de su carpeta
        - Ahora, soltar contenidos externos en áreas web siempre está bloqueado y activa el evento [`On Window Opening Denied`](../Events/onWindowOpeningDenied.md) cuando la preferencia `WA enable URL drop` está establecida en True (cuando está establecida en False, la preferencia `WA enable URL drop` sólo modifica el icono del cursor de soltar y filtra el evento `On Window Opening Denied`). Para permitir una acción de soltar, es necesario ejecutar código adicional en el método objeto del área web:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))
```



## 4D 19 R4

- [Atributos Alias](../ORDA/ordaClasses.md#alias-attributes-1) están disponibles en las clases ORDA.
- Soporte para las instrucciones [break y continue](../Concepts/flow-control.md#break-and-continue) en los bucles.
- Soporte a la instrucción [return](../Concepts/flow-control.md#return-expression) y la [return expression](../Concepts/parameters.md#return-expression) para devolver los valores.
- Soporte para [operadores de asignación compuesta](../Concepts/operators.md#compound-assignment-operators), [operadores de cortocircuitos](../Concepts/operators.md#short-circuit-operators)y [operador ternario](../Concepts/operators.md#ternary-operator)
- El [editor de código](../code-editor/overview.md) ahora incluye una herramienta desplegable y soporta marcadores para una mejor navegación por el código.
- Nuevas Preferencias: [**Incluir tokens en los archivos fuente del proyecto**](../Preferences/general.md#include-tokens-in-project-source-files) y [**Mostrar portapapeles**](../Preferences/methods.md#show-clipboards) en la página Métodos.
- Nueva petición REST para las entidades [lock/unlock](../REST/$lock.md).
- [4D View Pro](../ViewPro/getting-started.md) capítulo añadido con nuevos comandos: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- Nueva [clase SystemWorker](../API/SystemWorkerClass.md).
- La constante `Alias selection` ha pasado a llamarse `Allow alias files` para resolver un conflicto derivado del soporte de atributos de alias en ORDA.
- Para un mejor cumplimiento de las especificaciones ORDA, la propiedad de campo *Asignar valores NULL a valores vacíos* está ahora desmarcada por defecto en bases de datos creadas con 4D 19 R4 y superiores. También puede activar este comportamiento por defecto en sus bases de datos convertidas de versiones anteriores seleccionando la opción de compatibilidad Asignar valores NULL a valores vacíos desmarcada por defecto en la creación de campos. Ahora se recomienda trabajar con valores Null, ya que ORDA los soporta completamente.
- Debido a la compatibilidad con el [operador ternario](../Concepts/operators.md#ternary-operator), ya no se permiten los dos puntos ":" en los nombres de variables, campos, constantes, funciones, plugins y métodos proyecto. Si su base de datos/proyecto contiene identificadores con dos puntos, debe reemplazarlos antes de convertirla a v19 R4 o superior, de lo contrario pueden producirse errores en su código. Por ejemplo, si tiene una variable denominada *a:b*, podría interpretarse como sintaxis de operador ternario:

```4d
$value:=($size>1000)? a:b // Aquí 'a:b' se considera un operador ternario.
```



## 4D 19 R3

- [Propiedades calculadas](../Concepts/classes.md#function-get-and-function-set) están disponibles en las clases.
- [Atributos calculados](../ORDA/ordaClasses.md#computed-attributes) están disponibles en clases ORDA. Son similares a las propiedades calculadas, pero también admiten las funciones [query](../ORDA/ordaClasses.md#function-query-attributename) y [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename).
- Nueva clase de datos ORDA [atributos](../API/DataClassClass.md#attributename): `exposed` y `readOnly`.
- [Los archivos ZIP](../API/ZipArchiveClass.md#zip-create-archive) son ahora compatibles con los algoritmos de compresión *LZMA* y *xz*.
- Una [nueva opción de build](../Desktop/building.md#allow-connection-of-silicon-mac-clients) facilita la inclusión de los clientes Silicon Mac en las aplicaciones servidor en Windows.
- [Soporte del modo oscuro](../Preferences/general.md#appearance-macos-only) extendido en macOS.
- Soporte de **objeto token OAuth2** en [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter) y [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Ahora los usuarios pueden cargar un archivo de configuración de registro [](../Debugging/debugLogFiles.md#using-a-log-configuration-file) mediante un botón de la ventana de administración del servidor [](../ServerWindow/maintenance.md#load-logs-configuration-file).
- La gestión de los [parámetros opcionales](../Concepts/parameters.md#optional-parameters) es más flexible en el lenguaje 4D cuando se accede a parámetros declarados pero no pasados. Por ejemplo, el siguiente código ya no provoca un error:

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
- La depuración de las sesiones de servidor web [es más fácil en 4D Server](../WebServer/sessions.md#preemptive-mode).
- El nuevo componente [4D NetKit](https://github.com/4d/4D-NetKit) permite conectar con APIs de terceros como Microsoft Graph.
- 4D 19 R3 utiliza un algoritmo hash más fuerte para las contraseñas de los usuarios 4D: Bcrypt. Este nuevo algoritmo se utiliza automáticamente cuando se cambia una contraseña utilizando la Caja de herramientas, el comando `CHANGE PASSWORD` o el comando `Set user properties`. Una vez modificada la contraseña, la apertura de la base de datos con una versión anterior a 4D 19 R3 provocará una denegación de autenticación para esta cuenta. Si utiliza contraseñas 4D, es muy recomendable hacer una copia de seguridad del archivo .4db (bases de datos binarias) o del archivo directory.json (proyectos) antes de actualizar a 4D 19 R3 o posterior.
- Para mayor precisión, la constante `4D digest` ha pasado a denominarse `4D REST digest`.

- Gestión de fin de línea y lista de materiales para comandos XML: cuando se abren en 4D 19 R3, los proyectos o bases de datos creados con versiones anteriores se comportan de forma diferente en lo que respecta a los caracteres de fin de línea predeterminados y la gestión de la lista de materiales en documentos XML: se utilizan caracteres de salto de línea (LF) en lugar de CR (en macOS) y no se incluyen las marcas de orden de bytes (BOM). Esto permite una mejor compatibilidad con las herramientas VCS. Si es necesario, puede restaurar el comportamiento de v19 R2 utilizando el comando `XML SET OPTIONS`. En los proyectos o bases de datos convertidos desde versiones anteriores a la 19 R2, estas opciones se gestionan mediante dos ajustes de compatibilidad.
- Se ha eliminado el acceso directo al Explorador de ejecución en los proyectos creados: el acceso directo **Cmd/Ctrl+Mayús+F9** ya no muestra la ventana del Explorador de ejecución en aplicaciones de proyectos fusionados de un solo usuario. Este acceso directo ahora puede ser un acceso directo a una aplicación de usuario. Puede llamar a la ventana del Explorador de ejecución utilizando el nuevo comando `OPEN RUNTIME EXPLORER`.
- Capacidades de depuración extendidas con 4D Server: en modo interpretado, 4D Server puede ahora depurar todo tipo de procesos, incluidas las sesiones web escalables. Está disponible cuando el depurador está conectado al servidor o a un cliente remoto.   
  *Atención: en el modo interpretado, para que la depuración extendida esté disponible en la máquina del servidor, todos los procesos del servidor se ejecutan ahora automáticamente en modo cooperativo cuando el depurador está conectado al servidor (configuración predeterminada). Esto puede tener un impacto significativo en el rendimiento de sus aplicaciones convertidas cuando se ejecutan con 4D Server v19 R3 y superiores. Para restaurar la ejecución preferente en el servidor en este caso, todo lo que tiene que hacer es desconectar el depurador del servidor (y conectarlo a un cliente remoto si es necesario).*
- En Windows, los proyectos 4D y las bases de datos creadas con 4D 19 R3 y superiores utilizan la API [DirectWrite](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) en los formularios. Esta API mejora el renderizado de texto, especialmente en configuraciones de alto DPI. DirectWrite se utiliza para la representación de texto con texto estático y de entrada, casillas de verificación, botones y botones radio. Tenga en cuenta que los listboxes ya utilizan DirectWrite. Una opción de compatibilidad permite activar DirectWrite en proyectos y bases de datos creados con versiones anteriores de 4D.
- Si utiliza componentes compilados con 4D 19.0 para Silicon (CPUs Apple ARM) que llaman al comando `Count parameters`, le recomendamos recompilarlos con 4D 19 R3 para ofrecer compatibilidad con 4D 19 R3 y futuras versiones. Si un componente no está compilado para Silicon, no es necesario volver a compilarlo.








## 4D 19 R2

- Un [archivo .gitignore por defecto](../Preferences/general.md#create-gitignore-file) puede ser creado con nuevos proyectos
- Nueva [API Blob class](../API/BlobClass.md) para gestionar nuevos objetos [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- Soporte de `no-bom` y nuevos caracteres de fin de línea por defecto en [`.setText()`](../API/FileClass.md#settext)


## Lanzamientos anteriores

<details><summary>Haga clic para ver las notas de las versiones anteriores</summary>

### 4D 19

:::advertencia Nota de Seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D 19.7 LTS build 288986 o superior. Para más información, consulte este [boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): funciones `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` y `.unsubscribe()`.
- [Clase File](../API/FileClass.md): nuevas funciones `setAppInfo()` y `getAppInfo()`.
- Nueva etiqueta de transformación [4DEACH](../Tags/tags.md#4deach-and-4dendeach).
- Servidor Web: nuevo parámetro [cookie de sesión SameSite](../WebServer/webServerConfig.md#session-cookie-samesite).
- Soporte del esquema color oscuro y claro para los [formularios](../FormEditor/properties_FormProperties.md#color-scheme) y [hojas de estilo](../FormEditor/stylesheets#media-queries)
- Nuevos temas oscuros y claros por defecto en las [preferencias del editor de código](../Preferences/methods.md#theme-list).
- [Compilación nativa](../Project/compiler.md#compiler-methods-for) para procesadores Silicon.
- La propiedad [cálculo de variables](../FormObjects/properties_Object.md#variable-calculation) es ahora soportada por las columnas list box de la selección de entidades.
- Nueva página [CLI](../Admin/cli.md) completa.



### 4D 18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): las funciones `.average()`, `.max()` y `.min()` ahora devuelven *undefined* si la selección de entidades está vacía.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) y [SMTP Mail](../API/SMTPTransporterClass.md): la propiedad `authenticationMode` habilita OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): nuevas funciones `.expunge()` y `.append()`
- Nuevo componente de servidor web [WebAdmin](../Admin/webAdmin.md)
- Nueva interfaz [DataExplorer](../Admin/dataExplorer.md)
- Nuevas [sesiones de usuario](../WebServer/sessions.md) web y [su API](../API/SessionClass.md).


</details>


## Tabla de librerías (4D v20 LTS)



| Librería  | Versión actual | Actualizado en 4D | Comentario                                                                                                    |
| --------- | -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| ICU       | 73.2           | 20.1              | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto. |
| CEF       | 118            | 20.3              | Chromium 5993                                                                                                 |
| Hunspell  | 1.7.2          | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                     |
| PDFWriter | 4.3            | 20                | Dependencia FreeType en 12.2.1                                                                                |
| SpreadJS  | 16.2.6         | 20.2 HF1          | Motor 4D View Pro                                                                                             |
|           | 16.0.4         | 20                |                                                                                                               |
| OpenSSL   | 3.1.6          | **20.4 HF2**      |                                                                                                               |
| libZip    | 1.9.2          | 20                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                        |
| LZMA      | 5.4.1          | 20                |                                                                                                               |
| Zlib      | 1.2.13         | 20                |                                                                                                               |
| webKit    | WKWebView      | 19                |                                                                                                               |
| PHP       | 8.2.4          | 20                |                                                                                                               |
| libldap   | 2.6.4          | 20                |                                                                                                               |
| libsasl   | 2.1.28         | 20                |                                                                                                               |
