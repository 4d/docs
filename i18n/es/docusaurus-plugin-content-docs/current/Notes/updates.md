---
id: updates
title: Notas del lanzamiento
---


## 4D 20 R5

Read [**What’s new in 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-v20-R5/), the blog post that lists all new features and enhancements in 4D 20 R5.

#### Destacados

- Soporte de estructuras de gestión de errores [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
- La capa de red QUIC soporta ahora [broadcasting](../Desktop/clientServer.md#opening-a-remote-project).
- Soporte de [selecciones de entidades restringidas](../ORDA/entities.md#restricting-entity-selections).
- Support of [shared classes](../Concepts/classes.md#shared-classes) and [singleton classes](../Concepts/classes.md#singleton-classes). New Class properties: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#isingleton), [`me`](../API/ClassClass.md#me).
- Support for [initializing a class property in its declaration line](../Concepts/classes.md/#initializing-the-property-in-the-declaration-line).
- New [force login mode for REST requests](../REST/authUsers.md#force-login-mode) with a [specific support in Qodly Studio for 4D](../WebServer/qodly-studio.md#force-login).
- Nuevo parámetro REST [$format](../REST/$format.md).
- [`Session`](../API/SessionClass.md#session) object is now available in remote user sessions and stored procedures session.



#### Cambios de comportamiento

- The plug-ins *4D Internet Commands* and *4D for OCI* are no longer included in 4D installers. To get these plug-ins, you need to connect to the [**4D Product Download portal**](https://product-download.4d.com/).


## 4D 20 R4

Read [**What’s new in 4D 20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), the blog post that lists all new features and enhancements in 4D 20 R4.


#### Destacados

- Soporte de formato de cifrado [`ECDSA`](../Admin/tls.md#encryption) para certificados TLS.
- Las conexiones TLS de cliente/servidor y servidor SQL ahora se [configuran dinámicamente](../Admin/tls.md#enabling-tls-with-the-other-servers) (no se requieren archivos de certificado).
- El formato HTML directo para la [exportación de definiciones de estructura](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- Nuevo [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) que mejora el control del código durante las etapas de digitación, verificación sintáctica y de compilación para evitar errores de ejecución.
- Los parámetros de método declarados en prototipos `#DECLARE` ya no son [necesarios en los métodos "Compiler_"](../Concepts/parameters.md#compilation).
- Soporte de [formatos de fecha y hora personalizados](../Project/date-time-formats.md)
- Nueva palabra clave [`Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de error sencillos.
- Nuevo comando [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- Nueva opción de compatibilidad [sin bloquear para imprimir](../settings/compatibility.md).
- Nuevo [modo de edición](../Admin/dataExplorer.md#editing-data) en el Explorador de datos.
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) en doc.4d.com.
- 4D Write Pro: [Página Novedades](https://doc.4d.com/4Dv20R4/4D/20-R4/Pagina-de-novedades.901-6683440.es.html) en doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R4): list of all bugs that have been fixed in 4D 20 R4.



#### Cambios de comportamiento

- El uso de una sintaxis heredada para declarar parámetros (por ejemplo, `C_TEXT($1)` o `var $1 : Text`) es obsoleto y genera advertencias en los pasos de escritura de código, verificación de sintaxis y compilación.
- La coherencia de las selecciones ahora se mantiene después de que se hayan eliminado algunos registros y se hayan creado otros (ver [esta entrada de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
- En la [librería OpenSSL](#library-table), actualizada el nivel de seguridad SSL/TLS predeterminado ha cambiado de 1 a 2. Las llaves RSA, DSA y DH de 1024 bits o más y menos de 2048 bits, así como las llaves ECC de 160 bits o más y menos de 224 bits, ya no están permitidas. Por defecto, la compresión TLS ya estaba desactivada en versiones anteriores de OpenSSL. En el nivel de seguridad 2 no se puede activar.


## 4D 20 R3

Read [**What’s new in 4D 20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), the blog post that lists all new features and enhancements in 4D 20 R3.


#### Destacados

- Nueva función [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Soporte del parámetro *context* en [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Soporte de la propiedad `headers` en el parámetro *connectionHandler* de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Marcador global de modificación](../ORDA/global-stamp.md) para facilitar la implementación de módulos de sincronización de datos. Nuevas funciones: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) y [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- La asignación de referencias de archivos a atributos imagen/blob es [soportada en ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Soporte para [inicializar el valor de la variable y el tipo de datos en la línea de declaración](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Los parámetros del archivo de historial ahora [se guardan con el archivo de datos actual](../Backup/settings.md#log-file-management)
- Nueva sintaxis para [declarar parámetros variables](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: soporte de la [importación](../ViewPro/commands/vp-import-from-blob) y de la [exportación](../ViewPro/commands/vp-export-to-blob) de documentos 4D View Pro al formato Blob.
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) en doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R3): list of all bugs that have been fixed in 4D 20 R3.



#### Cambios de comportamiento

- Algunos errores eran interceptables por su [método de gestión de errores](../Concepts/error-handling.md) solo en modo interpretado. Se ha realizado una corrección para que los siguientes errores se detecten también en modo compilado: *Indice fuera de rango*, *Tipo incompatible*, y *Desreferenciación de un puntero Null*. Sin embargo, para tales errores en los procesadores Intel, el procedimiento se sigue interrumpiendo como antes, mientras que en los procesadores Apple Silicon el procedimiento sólo se interrumpe si se llama al comando [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html).
- 4D ya no incluye un intérprete PHP interno. Necesita [configurar y ejecutar su propio intérprete PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) para utilizar comandos PHP.


## 4D 20 R2

Read [**What’s new in 4D 20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), the blog post that lists all new features and enhancements in 4D 20 R2.



:::advertencia Nota de Seguridad

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 20 R2 HF1 build 100440 or higher. Para más información, consulte este [boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::


#### Destacados

- Nueva [clase WebSocket](../API/WebSocketClass.md) para crear y gestionar conexiones WebSocket cliente desde 4D.
- Nueva [configuración de interfaz](../settings/client-server.md#network-layer) de la capa de red QUIC.
- 4D View Pro: soporte del formato de archivo **.sjs** para [la importación](../ViewPro/commands/vp-import-document) y la [exportación](../ViewPro/commands/vp-export-document) de documentos.
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) en doc.4d.com.
- Interfaz 4D Write Pro: nuevo [Asistente de tablas](../WritePro/writeprointerface.md).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R2): list of all bugs that have been fixed in 4D 20 R2.


#### Cambios de comportamiento


- **Atención**: el valor inicial [`offset`](../API/FileHandleClass.md#offset) de los objetos [4D.FileHandle](../API/FileHandleClass.md) se ha definido incorrectamente en 1 en lugar de 0. Se ha realizado una corrección en 4D a partir de las versiones **20.1 HF1** y **20 R2** y el valor es ahora 0.


## 4D 20.x

Read [**What’s new in 4D 20**](https://blog.4d.com/en-whats-new-in-4d-v20/), the blog post that lists all new features and enhancements in 4D 20.

:::caution Versión mínima cliente para 4D Server v20.2 y posteriores

For internal reasons, the version of remote clients connecting to 4D Server v20.2 and later must be at least 4D 20.2.

:::

:::advertencia Nota de Seguridad

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 20.2 LTS build 100956 or higher. Para más información, consulte este [boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Aviso de reconstrucción del índice

4D 20 includes an ICU library update (see below) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::caution 4D 20.1 index rebuild and client/server versions

4D 20.1 also includes an ICU library update, which has the following consequences:

- Forzará una reconstrucción automática de los índices de tipo alfa, texto y objeto.
- Because of sorting consistency, it requires that 4D remote clients and 4D Server use the same version: only remote 4D 20.1 can connect to 4D Server v20.1 and vice versa.

:::


#### Destacados

- 4D 20.2 is certified on macOS Sonoma (macOS 14).
- (4D 20.1) New `plugins` property in the *options* parameter for the [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html) command.
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
- Los registros de las peticiones ORDA están ahora disponibles [en el servidor](../Debugging/debugLogFiles.md#orda-requests), nuevo parámetro para la función [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog).
- Nuevas herramientas para la ejecución de código en CLI: [tool4d](../Admin/cli.md#tool4d) y [4D Server en modo utilitario](../Admin/cli.md#4d-server-in-utility-mode).
- [Data Explorer](../Admin/dataExplorer.md#opening-the-data-explorer): nuevo botón y mostrar en una ventana 4D.
- Nuevas propiedades para botones, asillas de verificación y botones radio: [Posición Imagen título](../FormObjects/properties_TextAndPicture.md#image-hugs-title) y [Alineación horizontal](../FormObjects/properties_Text.md#horizontal-alignment).
- Soporte de `WinIcon` en la función [`file.setAppInfo()`](../API/FileClass.md#setappinfo).
- Nuevo `validateTLSCertificate` opción para [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) que permite controlar la validación automática del certificado.
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) en doc.4d.com.
- Fixed bug lists: [4D 20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D 20.1](https://bugs.4d.fr/fixedbugslist?version=20.1).


#### Cambios de comportamiento

- As of v20.2, 4D 20 LTS is no longer compatible with Windows Server 2012 R2.
- **Atención**: el valor inicial [`offset`](../API/FileHandleClass.md#offset) de los objetos [4D.FileHandle](../API/FileHandleClass.md) se ha definido incorrectamente en 1 en lugar de 0. Se ha realizado una corrección en 4D a partir de las versiones **20.1 HF1** y **20 R2** y el valor es ahora 0.
- Para el cumplimiento con la RFC HTTP, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) devuelve ahora todos los nombres de encabezados **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Los certificados TLS son ahora validados automáticamente por 4D al enviar peticiones HTTP con [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) y rechazados con un error si no son válidos. Una nueva propiedad *option* le permite controlar esta validación.
- TLS v1.0 y TLS v1.1 están obsoletos, ya no están soportados como `Min TLS versión` en 4D Server. La versión 1.3 se selecciona ahora por defecto y se utiliza automáticamente si se definen las constantes `_o_TLSv1_0` o `_o_TLSv1_1` con [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- Por consistencia, todos los botones, casillas de selección y botones de opción se representan ahora con un tipo "3D" en tiempo de ejecución: `Object type 3D button`, `Object type 3D checkbox` y `Object type 3D radio button` son devueltos por [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) para estos objetos.
- As of 4D 20, [4D for Mobile](https://developer.4d.com/go-mobile/) is no longer installed by default in the 4D environment. Para beneficiarse de las funcionalidades de desarrollo de 4D for Mobile en 4D, necesita [instalar el componente 4D Mobile App](https://developer.4d.com/go-mobile/docs/getting-started/installation) en la carpeta ["Components"](../Project/architecture.md#components) de sus proyectos. Si un proyecto convertido utiliza funciones del [componente 4D Mobile App Server](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), asegúrese de instalarlo también en la carpeta "Componentes" del proyecto.


## 4D 19 R8

Read [**What’s new in 4D 19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), the blog post that lists all new features and enhancements in 4D 19 R8.


#### Destacados

- Se pueden instalar métodos de gestión de errores para [contextos de ejecución globales y de componentes](../Concepts/error-handling.md#scope-and-components).
- Los listboxes con fuentes de datos colección o selección de entidades ahora soportan la propiedad de columna [Alto de línea automático](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height).
- ORDA: soporte del archivo *roles.json* para definir [privilegios](../ORDA/privileges.md) asignados a la sesión con [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Soporte del [modo SDI en el modo test application](../Menus/sdi.md#sdi-mode-availability) en Windows.
- 4D View Pro:
    - soporte de temas en tablas: nuevos comandos [VP SET TABLE THEME](../ViewPro/commands/vp-set-table-theme) y [VP Get table theme](../ViewPro/commands/vp-get-table-theme), soporte de opciones de tema en [VP CREATE TABLE](../ViewPro/commands/vp-create-table)
    - nuevo comando [VP Get table dirty rows](../ViewPro/commands/vp-get-table-dirty-rows)
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) en doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R8): list of all bugs that have been fixed in 4D 19 R8.


#### Cambios de comportamiento

- Para el cumplimiento con la RFC HTTP, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) devuelve ahora todos los nombres de encabezados **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- Cuando a un [botón de bisel con menú emergente vinculado](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) se le asigna una acción estándar, ésta ya no se genera si se selecciona una opción de menú emergente.
- En las áreas Web que utilizan blink (CEF), los diálogos mostrados desde scripts externos ahora se bloquean si no se llaman desde una función `setTimeout()` JS. Esto se debe a las actualizaciones actuales CEF, en las que los diálogos mostrados por funciones como `alert()` o `print()` ya no son gestionados por el SO sino por el área Web. Ver [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) y [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



## 4D 19 R7

Read [**What’s new in 4D 19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), the blog post that lists all new features and enhancements in 4D 19 R7.


#### Destacados

- Los datos relacionados y los atributos calculados/alias pueden mostrarse en el [explorador de datos](../Admin/dataExplorer#basics).
- Nueva clase [FileHandle](../API/FileHandleClass.md) y nueva función [`.open()`](../API/FileClass.md#open) en la clase `File`.
- [Clase Entity selection](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) soporta un parámetro *entitySelection*, [`.minus()`](../API/EntitySelectionClass.md#minus) soporta un parámetro *keepOrder*.
- Soporte de las opciones *automaticRedirections* y *decodeData* en [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Nuevo archivo de registro [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro: nuevos comandos de tabla [VP Find table](../ViewPro/commands/vp-find-table), [VP Get table column attributes](../ViewPro/commands/vp-get-table-column-attributes), [VP Get table column index](../ViewPro/commands/vp-get-table-column-index), [VP Get tables](../ViewPro/commands/vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/commands/vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/commands/vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/commands/vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/commands/vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/commands/vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/commands/vp-set-table-column-attributes).
- Los espacios de nombres de los componentes se [muestran ahora en el Explorador](../Extensions/develop-components.md#declaring-the-component-namespace).
- Los objetos de tipo área de texto y formulario de entrada ahora soportan la propiedad [corner radius](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) en doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R7): list of all bugs that have been fixed in 4D 19 R7.


#### Cambios de comportamiento

- Para mantener la coherencia con las interfaces estándar (por ejemplo, los exploradores de archivos del sistema operativo), se han modificado las reglas del list box para la selección/arrastrar y soltar de líneas. Se puede arrastrar una selección continua o discontinua de líneas simplemente haciendo clic en una línea seleccionada y moviéndola; la tecla **Alt** ya no es necesaria (pero se puede seguir utilizando como en el caso anterior). Cuando se presiona la tecla **Mayús** o **Ctrl/Comando**, se tiene en cuenta el clic del ratón cuando éste está presionado. Para más información sobre arrastrar y soltar en list box, puede consultar [esta entrada del blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) y descargar [este proyecto HDI 4D](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- The 4D internal build numbering has been modified as of 4D 19 R7:
    - releases up to 4D 19 R6 (included) are numbered 282xxx,
    - releases from 4D 19 R7 will be numbered 100xxx.   
      Note that a specific 4D version is still uniquely identified by a branch name and a build number. El número de build aumenta cronológicamente.
- Se ha eliminado la posibilidad de utilizar el protocolo Wakanda/4D Mobile REST para llamar a un método proyecto. En su lugar, puede utilizar [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) o las [urls /4DACTION](../WebServer/httpRequests.md#4daction).


## 4D 19 R6

- Nueva clase [HTTPRequest](../API/HTTPRequestClass.md).
- Las funciones de colección que pueden llamar a código ahora soportan objetos función como parámetro *formula*: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Las celdas listbox soportan el espacio [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) y [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding).
- 4D View Pro: nuevos comandos [VP CREATE TABLE](../ViewPro/commands/vp-create-table) y [VP REMOVE TABLE](../ViewPro/commands/vp-remove-table) para manejar tablas en las hojas.
- Posibilidad de ver los atributos relacionados, calculados y alias en el [explorador de datos web](../Admin/dataExplorer.md#basics).
- Para que nuestros productos sean siempre mejores, ahora recogemos automáticamente los datos relativos a las estadísticas de uso de las aplicaciones 4D Server en funcionamiento. Esto no tendrá ningún impacto en el rendimiento. Consulte la nueva página en la que se explica [por qué y cómo 4D recopila datos](../Admin/data-collect.md).
- Components compiled for Silicon: On macOS Silicon platforms (Apple ARM CPUs), components must be recompiled with 4D 19 R6 or higher to be used with this release.




## 4D 19 R5


- El [archivo directory.json](Users/editing#directoryjson-file) del proyecto ahora puede ser [integrado al servidor](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) al momento de la generación, lo que le permite desplegar una aplicación cliente/servidor con una configuración básica de la seguridad de los usuarios y de los grupos.
- Ahora puede [deseleccionar los módulos inútiles](../Desktop/building.md#deselecting-modules) en sus aplicaciones generadas.
- La librería *MeCab* se incluye por defecto en todas las aplicaciones 4D en macOS. En versiones anteriores, esta librería, diseñada específicamente para gestionar texto japonés, sólo estaba disponible en la versión japonesa de 4D en macOS. Si no necesita esta librería en sus aplicaciones finales, ahora puede [deseleccionarla](../Desktop/building.md#deselecting-modules).
- [Optimización cliente/servidor](../ORDA/client-server-optimization.md#optimization-context): nuevas funciones clase permiten manejar la caché ORDA y el contenido de un contexto de optimización. Ver [Preconfiguración de contextos](../ORDA/remoteDatastores.md#preconfiguring-contexts) y [Caché ORDA](../ORDA/remoteDatastores.md#orda-cache) para más información.

   > Estas funciones están destinadas a los desarrolladores que necesitan personalizar las funciones por defecto de ORDA para las configuraciones específicas. En la mayoría de los casos, no será necesario utilizarlos.
- [Clase DataClass](../API/DataClassClass.md): la nueva función [.getCount()](../API/DataClassClass.md#getcount) devuelve el número de entidades de una dataclass.
- El archivo *4DDiagnosticLog.txt* sólo registra información de alto nivel por defecto ([nivel INFO](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). Ahora puede seleccionar el nivel de información que desea registrar (por ejemplo, información de nivel DEBUG) utilizando el selector `Diagnostic log level` del comando `SET DATABASE PARAMETER` o el archivo de configuración del registro.
- Llamar a `Use()` sobre un objeto no compartido o una colección no compartida no hace nada (ya no genera un error). Por lo tanto, ahora es inútil comprobar si el objeto o colección pasado a Use() es realmente compartido.
- Para mayor claridad, se han antepuesto dos comandos SQL: `GET DATA SOURCE LIST` se ha renombrado a `SQL GET DATA SOURCE LIST`, `Get current data source` se ha renombrado a `SQL Get current data source`.
- **4D View Pro**:
    - Los nuevos comandos [VP SET DATA CONTEXT](../ViewPro/commands/vp-set-data-context), [VP Get data context](../ViewPro/commands/vp-get-data-context), [VP SET BINDING PATH](../ViewPro/commands/vp-set-binding-path), [VP Get binding path](../ViewPro/commands/vp-get-binding-path) permiten crear contextos de datos y vincular su contenido a las celdas de la hoja.
    - [VP EXPORT DOCUMENT](../ViewPro/commands/vp-get-binding-path) y [VP Export to object](../ViewPro/commands/vp-get-binding-path) aceptan ahora la nueva opción `includeBindingSource` que exporta el contenido de un contexto de datos como valores de celda.
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
- El [editor de código](../code-editor/write-class-method.md) ahora incluye una herramienta desplegable y soporta marcadores para una mejor navegación por el código.
- Nuevas Preferencias: [**Incluir tokens en los archivos fuente del proyecto**](../Preferences/general.md#include-tokens-in-project-source-files) y [**Mostrar portapapeles**](../Preferences/methods.md#show-clipboards) en la página Métodos.
- Nueva petición REST para las entidades [lock/unlock](../REST/$lock.md).
- [4D View Pro](../ViewPro/getting-started.md) capítulo añadido con nuevos comandos: [VP Copy to object](../ViewPro/commands/vp-copy-to-object), [VP MOVE CELLS](../ViewPro/commands/vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/commands/vp-paste-from-object).
- Nueva [clase SystemWorker](../API/SystemWorkerClass.md).
- La constante `Alias selection` ha pasado a llamarse `Allow alias files` para resolver un conflicto derivado del soporte de atributos de alias en ORDA.
- For better compliance with ORDA specifications, the *Map NULL values to blank values* field property is now unchecked by default in databases created with 4D 19 R4 and higher. También puede activar este comportamiento por defecto en sus bases de datos convertidas de versiones anteriores seleccionando la opción de compatibilidad Asignar valores NULL a valores vacíos desmarcada por defecto en la creación de campos. Ahora se recomienda trabajar con valores Null, ya que ORDA los soporta completamente.
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
- 4D 19 R3 uses a stronger hashing algorithm for 4D user passwords: Bcrypt. Este nuevo algoritmo se utiliza automáticamente cuando se cambia una contraseña utilizando la Caja de herramientas, el comando `CHANGE PASSWORD` o el comando `Set user properties`. Once a password is modified, opening the database with a version prior to 4D 19 R3 will cause an authentication denial for this account. If you use 4D passwords, it is highly recommended to backup the .4db file (binary databases) or directory.json file (projects) before upgrading to 4D 19 R3 or later.
- Para mayor precisión, la constante `4D digest` ha pasado a denominarse `4D REST digest`.

- End-of-line and BOM management for XML commands: When opened in 4D 19 R3, projects or databases created with previous releases behave differently regarding default end-of-line characters and BOM management in XML documents: line feed (LF) characters are used instead of CR (on macOS), and byte order marks (BOM) are not included. Esto permite una mejor compatibilidad con las herramientas VCS. Si es necesario, puede restaurar el comportamiento de v19 R2 utilizando el comando `XML SET OPTIONS`. En los proyectos o bases de datos convertidos desde versiones anteriores a la 19 R2, estas opciones se gestionan mediante dos ajustes de compatibilidad.
- Se ha eliminado el acceso directo al Explorador de ejecución en los proyectos creados: el acceso directo **Cmd/Ctrl+Mayús+F9** ya no muestra la ventana del Explorador de ejecución en aplicaciones de proyectos fusionados de un solo usuario. Este acceso directo ahora puede ser un acceso directo a una aplicación de usuario. Puede llamar a la ventana del Explorador de ejecución utilizando el nuevo comando `OPEN RUNTIME EXPLORER`.
- Capacidades de depuración extendidas con 4D Server: en modo interpretado, 4D Server puede ahora depurar todo tipo de procesos, incluidas las sesiones web escalables. Está disponible cuando el depurador está conectado al servidor o a un cliente remoto.   
  *Atención: en el modo interpretado, para que la depuración extendida esté disponible en la máquina del servidor, todos los procesos del servidor se ejecutan ahora automáticamente en modo cooperativo cuando el depurador está conectado al servidor (configuración predeterminada). Esto puede tener un impacto significativo en el rendimiento de sus aplicaciones convertidas cuando se ejecutan con 4D Server v19 R3 y superiores. Para restaurar la ejecución preferente en el servidor en este caso, todo lo que tiene que hacer es desconectar el depurador del servidor (y conectarlo a un cliente remoto si es necesario).*
- On Windows, 4D projects and databases created with 4D 19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. Esta API mejora el renderizado de texto, especialmente en configuraciones de alto DPI. DirectWrite se utiliza para la representación de texto con texto estático y de entrada, casillas de verificación, botones y botones radio. Tenga en cuenta que los listboxes ya utilizan DirectWrite. Una opción de compatibilidad permite activar DirectWrite en proyectos y bases de datos creados con versiones anteriores de 4D.
- If you use components compiled with 4D 19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D 19 R3 to provide compatibility with 4D 19 R3 and future releases. Si un componente no está compilado para Silicon, no es necesario volver a compilarlo.








## 4D 19 R2

- Un [archivo .gitignore por defecto](../Preferences/general#create-gitignore-file) puede ser creado con nuevos proyectos
- Nueva [API Blob class](../API/BlobClass.md) para gestionar nuevos objetos [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- Soporte de `no-bom` y nuevos caracteres de fin de línea por defecto en [`.setText()`](../API/FileClass.md#settext)


## Lanzamientos anteriores

<details><summary>Haga clic para ver las notas de las versiones anteriores</summary>

### 4D 19

:::advertencia Nota de Seguridad

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 19.7 LTS build 288986 or higher. Para más información, consulte este [boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::


- [IMAPTransporter Class](../API/IMAPTransporterClass.md): funciones `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` y `.unsubscribe()`.
- [Clase File](../API/FileClass.md): nuevas funciones `setAppInfo()` y `getAppInfo()`.
- Nueva etiqueta de transformación [4DEACH](../Tags/transformation-tags.md#4deach-and-4dendeach).
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


## Tabla de librerías



| Librería  | Versión actual | Actualizado en 4D | Comentario                                                                                                                              |
| --------- | -------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ICU       | 73.2           | 20.1              | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto.                           |
| CEF       | 121            | 20 R5             | Chromium 6167                                                                                                                           |
| Hunspell  | 1.7.2          | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                                               |
| PDFWriter | 4.3            | 20                | Dependencia FreeType en 12.2.1                                                                                                          |
| SpreadJS  | 16.2.6         | 20 R4             | Motor 4D View Pro                                                                                                                       |
| OpenSSL   | 3.2.0          | 20 R4             | Se ha actualizado el nivel de seguridad TLS/SSL por defecto. Véase [Cambios de comportamiento](#behavior-changes) para la versión 20 R4 |
| libZip    | 1.9.2          | 20                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                                  |
| LZMA      | 5.4.1          | 20                |                                                                                                                                         |
| Zlib      | 1.2.13         | 20                |                                                                                                                                         |
| webKit    | WKWebView      | 19                |                                                                                                                                         |
| PHP       | 8.2.4          | 20                |                                                                                                                                         |
| libldap   | 2.6.4          | 20 R3             |                                                                                                                                         |
| libsasl   | 2.1.28         | 20                |                                                                                                                                         |
