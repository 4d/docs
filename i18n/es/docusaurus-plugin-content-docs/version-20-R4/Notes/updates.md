---
id: updates
title: Notas del lanzamiento
---

## 4D v20 R4

Lee [**Novedades en 4D v20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D v20 R4.

#### Destacados

- Soporte de [formato de cifrado ECDSA\`](../Admin/tls.md#encryption) para certificados TLS.
- Las conexiones TLS cliente/servidor y servidor SQL ahora se [configuran dinámicamente](../Admin/tls.md#enabling-tls-with-the-other-servers) (no se requieren archivos de certificado).
- Formato HTML directo para [exportaciones de definición de estructura](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- Nuevo [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) que mejora el control del código durante los pasos de declaración, comprobación de sintaxis y compilación para evitar errores de ejecución.
- Los parámetros de métodos declarados en prototipos `#DECLARE` [ya no son necesarios en métodos "Compiler_"](../Concepts/parameters.md#compilation).
- Support of [custom date and time formats](../Project/date-time-formats.md)
- Nueva [palabra clave `Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de error simples.
- Nuevo comando [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- Nueva opción de compatibilidad [Impresión no bloqueante](../settings/compatibility.md).
- Comandos del lenguaje 4D: [Página de novedades](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos los bugs que se han corregido en 4D v20 R4.

#### Cambios de comportamiento

- El uso de una sintaxis heredada para declarar parámetros (por ejemplo, `C_TEXT($1)` o `var $1 : Text`) es obsoleto y genera advertencias en los pasos de escritura de código, verificación de sintaxis y compilación.
- En la actualización de [la librería OpenSSL](#library-table), el nivel de seguridad SSL/TLS por defecto se ha cambiado de 1 a 2. Las llaves RSA, DSA y DH de 1024 bits o más y menos de 2048 bits, así como las llaves ECC de 160 bits o más y menos de 224 bits, ya no están permitidas. Por defecto, la compresión TLS ya estaba desactivada en versiones anteriores de OpenSSL. En el nivel de seguridad 2 no se puede activar.

## 4D v20 R3

Lea [**Novedades en 4D v20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D v20 R3.

#### Destacados

- Nueva función [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Soporte del parámetro _context_ en [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Soporte de la propiedad `headers` en el parámetro _connectionHandler_ de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Sello de modificación global](../ORDA/global-stamp.md) para ayudar a implementar módulos de sincronización de datos. Nuevas funciones: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) y [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- La asignación de referencias de archivo a atributos imagen/blob está [soportada en ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Soporte para [inicializar el valor de la variable y el tipo de datos en la línea de declaración](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Los parámetros del archivo de registro se guardan ahora [con el archivo de datos actual](../Backup/settings.md#log-file-management)
- Nueva sintaxis para [declarar parámetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: soporte para la [importación](../ViewPro/method-list.md#vp-import-from-blob) y [exportación](../ViewPro/method-list.md#vp-export-to-blob) de documentos 4D View Pro en formato Blob.
- Comandos del lenguaje 4D: [Página Novedades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos los bugs que se han corregido en 4D v20 R3.

#### Cambios de comportamiento

- Algunos errores eran detectables por su [método de gestión de errores](../Concepts/error-handling.md) solo en modo interpretado. Se ha realizado una corrección para que los siguientes errores se detecten también en modo compilado: _Indice fuera de rango_, _Tipo incompatible_ y _Derreferenciación de un puntero Null_. Sin embargo, para tales errores en los procesadores Intel, el procedimiento se sigue interrumpiendo como antes, mientras que en los procesadores Apple Silicon el procedimiento solo se interrumpe si se llama al comando [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html).
- 4D ya no incluye un intérprete PHP interno. Necesita [configurar y ejecutar su propio intérprete PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) para utilizar comandos PHP.

## 4D v20 R2

Lea [**Novedades en 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D v20 R2.

:::warning Nota de seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D v20 R2 HF1 build 100440 o superior. Para más información, consulte este [Boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destacados

- Nueva [clase WebSocket](../API/WebSocketClass.md) para crear y gestionar conexiones WebSocket cliente desde 4D.
- Nueva capa de red QUIC [configuración de interfaz](../settings/client-server.md#network-layer).
- 4D View Pro: soporte del formato de archivo **.sjs** para la [importación](../ViewPro/method-list.md#vp-import-document) y [exportación](../ViewPro/method-list.md#vp-export-document) de documentos.
- Comandos del lenguaje 4D: [Página Novedades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) en doc.4d.com.
- Interfaz Write Pro 4D: nuevo [Asistente de tablas](../WritePro/writeprointerface.md).
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos los bugs que se han corregido en 4D v20 R2.

#### Cambios de comportamiento

- **Atención**: el valor inicial [`offset`](../API/FileHandleClass.md#offset) de los objetos [4D.FileHandle](../API/FileHandleClass.md) estaba incorrectamente definido en 1 en lugar de 0. Se ha hecho una corrección en 4D a partir de las versiones **20.1 HF1** y **20 R2** y el valor ahora es 0.

## 4D v20.x

Lea [**Novedades en 4D v20**](https://blog.4d.com/en-whats-new-in-4d-v20/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D v20.

:::caution Versión mínima del cliente para 4D Server v20.2 y posterior

Por razones internas, la versión de los clientes remotos que se conectan a 4D Server v20.2 y posteriores debe ser al menos 4D v20.2.

:::

:::warning Nota de seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D v20.2 LTS build 100956 o superior. Para más información, consulte este [Boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Aviso de reconstrucción del índice

4D v20 incluye una actualización de la librería ICU (ver abajo) que forzará una reconstrucción automática de los índices de tipo alpha, texto y objeto. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::caution 4D v20.1 reconstrucción de índices y versiones cliente/servidor

4D v20.1 también incluye una actualización de la biblioteca ICU, que tiene las siguientes consecuencias:

- Forzará una reconstrucción automática de los índices de tipo alfa, texto y objeto.
- Por coherencia de ordenación, es necesario que los clientes remotos 4D y el servidor 4D utilicen la misma versión: sólo los clientes remotos 4D v20.1 pueden conectarse al servidor 4D v20.1 y viceversa.

:::

#### Destacados

- 4D v20.2 está certificado en macOS Sonoma (macOS 14).
- (4D v20.1) Nueva propiedad `plugins` en el parámetro _options_ del comando [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html).
- 4D Server integra automáticamente varios diarios: [Restauración automática](../Backup/settings.md#automatic-restore).
- [Clase IMAP Transporter](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) devuelve _id_, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) devuelve _id_, _flags_ y _permanentFlags_, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) y [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) soportan palabras claves personalizadas.
- Nuevas clases [WebSocketServer](../API/WebSocketServerClass.md) y [WebSocketConnection](../API/WebSocketConnectionClass.md) para crear y gestionar conexiones WebSocket desde 4D.
- Soporte de la palabra clave [`property`](../Concepts/classes.md#property) en las definiciones de clases de usuario.
- Nuevas funciones para bloquear/desbloquear el datastore: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- Nueva función [`.at()`](../API/EntitySelectionClass.md#at) en la clase de selección de entidades.
- Nuevas funciones en la clase Collection: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Editor de código: funcionalidaes mejoradas [Buscar y reemplazar](../editor-de-código/write-class-method.md#find-and-replace).
- New searchable "property" Language element in the [**Find in design...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726) dialog box.
- Para simplificar el código, algunos operadores de comparación pueden utilizarse ahora con [Valores indefinidos](../Concepts/dt_null_undefined.md#undefined-operators) sin generar errores.
- Soporte del parámetro _headerOnly_ en [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Nueva función [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths).
- Soporte de la opción `count values` en las funciones [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) y [`collection.distinct()`](../API/CollectionClass.md#distinct).
- Los registros de peticiones ORDA ya están disponibles [en el servidor](../Debugging/debugLogFiles.md#orda-requests), nuevo parámetro para la función [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog).
- Nuevas herramientas para la ejecución de código en CLI: [tool4d](../Admin/cli.md#tool4d) y [4D Server in utility mode](../Admin/cli.md#4d-server-in-utility-mode).
- [Explorador de datos](../Admin/dataExplorer.md#opening-the-data-explorer): nuevo botón y visualización en una ventana 4D.
- New properties for buttons, check boxes and radio buttons: [Image hugs title](../FormObjects/properties_TextAndPicture.md#image-hugs-title) and [Horizontal Alignment](../FormObjects/properties_Text.md#horizontal-alignment).
- Soporte de `WinIcon` en la función [`file.setAppInfo()`](../API/FileClass.md#setappinfo).
- Nueva opción `validateTLSCertificate` para [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) que permite controlar la validación automática de certificados.
- Comandos del lenguaje 4D: [página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) en doc.4d.com.
- Listas de bugs corregidos: [4D v20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D v20.1](https://bugs.4d.fr/fixedbugslist?version=20.1).

#### Cambios de comportamiento

- A partir de v20.2, 4D v20 LTS ya no es compatible con Windows Server 2012 R2.
- **Atención**: el valor inicial [`offset`](../API/FileHandleClass.md#offset) de los objetos [4D.FileHandle](../API/FileHandleClass.md) estaba incorrectamente definido en 1 en lugar de 0. Se ha hecho una corrección en 4D a partir de las versiones **20.1 HF1** y **20 R2** y el valor ahora es 0.
- Para el cumplimiento de HTTP RFC, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) devuelve ahora todos los nombres de encabezado **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- TLS certificates are now automatically validated by 4D when sending HTTP requests with [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new), and rejected with an error if they are invalid. A new _option_ property allows you to control this validation.
- TLS v1.0 and TLS v1.1 are deprecated, they are no longer supported as `Min TLS version` on 4D Server. Version 1.3 is now selected by default and is automatically used if `_o_TLSv1_0` or `_o_TLSv1_1` constants are set with [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- For consistency, all buttons, checkboxes, and radio buttons are now rendered with a "3D" type at runtime: respectively `Object type 3D button`, `Object type 3D checkbox`, and `Object type 3D radio button` are returned by [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) for these objects.
- As of 4D v20, [4D for Mobile](https://developer.4d.com/go-mobile/) is no longer installed by default in the 4D environment. To benefit from the 4D for Mobile development features in 4D, you need to [install the 4D Mobile App component](https://developer.4d.com/go-mobile/docs/getting-started/installation) in the ["Components"](../Project/architecture.md#components) folder of your projects. If a converted project uses features from the [4D Mobile App Server component](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), make sure you also install it in the "Components" folder of the project.

## 4D v19 R8

Read [**What’s new in 4D v19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), the blog post that lists all new features and enhancements in 4D v19 R8.

#### Destacados

- Error management methods can be installed for [global and component execution contexts](../Concepts/error-handling.md#scope-and-components).
- Listboxes with collection or entity selection datasources now support [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) column property.
- ORDA: Support of the _roles.json_ file to define [privileges](../ORDA/privileges.md) assigned to the session with [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Support of [SDI mode in test application mode](../Menus/sdi.md#sdi-mode-availability) on Windows.
- 4D View Pro:
  - support of themes in tables: new [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) and [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme) commands, support of theme options in [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table)
  - new [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows) command
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R8): list of all bugs that have been fixed in 4D v19 R8.

#### Cambios de comportamiento

- Para el cumplimiento de HTTP RFC, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) devuelve ahora todos los nombres de encabezado **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response).
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- In Web areas using blink (CEF), dialogs displayed from external scripts are now blocking if not called from a `setTimeout()` JS function. This is due to the current CEF updates, in which dialogs displayed by functions such as `alert()` or `print()` are no longer handled by the OS but by the Web area. See [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) and [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).

## 4D v19 R7

Read [**What’s new in 4D v19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), the blog post that lists all new features and enhancements in 4D v19 R7.

#### Destacados

- Related data and computed/alias attributes can be displayed in the [Data Explorer](../Admin/dataExplorer#basics).
- New [FileHandle](../API/FileHandleClass.md) class and new [`.open()`](../API/FileClass.md#open) function in the `File` class.
- [Entity selection Class](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) supports an _entitySelection_ parameter, [`.minus()`](../API/EntitySelectionClass.md#minus) supports a _keepOrder_ parameter.
- Support of _automaticRedirections_ and _decodeData_ options in [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- New [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog) log file.
- 4D View Pro: new table commands [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Component namespaces are now [displayed in the Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Text area and Input form objects now support the [corner radius property](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R7): list of all bugs that have been fixed in 4D v19 R7.

#### Cambios de comportamiento

- Para mantener la coherencia con las interfaces estándar (por ejemplo, los exploradores de archivos del sistema operativo), se han modificado las reglas del list box para la selección/arrastrar y soltar de líneas. A continuous or discontinuous selection of rows can be dragged by simply clicking on and moving a selected row; the **Alt** key is not longer necessary (but can still be used like in previous previous). When the **Shift** or **Ctrl/Command** key is pressed, a mouse click is taken into account when the click is down. For more information on drag and drop in list boxes, you can refer to [this blog post](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) and download [this HDI 4D project](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- La numeración interna de 4D ha sido modificada a partir de 4D v19 R7:
  - las versiones hasta 4D v19 R6 (incluida) llevan el número 282xxx,
  - releases from 4D v19 R7 will be numbered 100xxx.\
    Note that a specific 4D version is still uniquely identified by a branch name and a build number. El número de build aumenta cronológicamente.
- Se ha eliminado la posibilidad de utilizar el protocolo Wakanda/4D Mobile REST para llamar a un método proyecto. You can use [ORDA data model class functions](../REST/ClassFunctions.md) or [/4DACTION urls](../WebServer/httpRequests.md#4daction) instead.

## 4D v19 R6

- Nueva clase [HTTPRequest](../API/HTTPRequestClass.md).
- Collection functions that can call code now support function objects as _formula_ parameter: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Listbox cells support [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) and [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](../Admin/dataExplorer.md#basics).
- Para que nuestros productos sean siempre mejores, ahora recogemos automáticamente los datos relativos a las estadísticas de uso de las aplicaciones 4D Server en funcionamiento. Esto no tendrá ningún impacto en el rendimiento. See the new page explaining [why and how 4D collects data](../Admin/data-collect.md).
- Componentes compilados para Silicon: en las plataformas macOS Silicon (CPU ARM de Apple), los componentes deben recompilarse con 4D v19 R6 o superior para poder utilizarse con esta versión.

## 4D v19 R5

- The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
- You can now [deselect useless modules](../Desktop/building.md#deselecting-modules) in your built applications.
- The _MeCab_ library is included by default in all 4D applications on macOS. En versiones anteriores, esta librería, diseñada específicamente para gestionar texto japonés, sólo estaba disponible en la versión japonesa de 4D en macOS. If you do not need this library in your final applications, you can now [deselect it](../Desktop/building.md#deselecting-modules).
- [Client/Server optimization](../ORDA/remoteDatastores.md#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) and [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) for more information.
  > Estas funciones están destinadas a los desarrolladores que necesitan personalizar las funciones por defecto de ORDA para las configuraciones específicas. En la mayoría de los casos, no será necesario utilizarlos.
- [DataClass class](../API/DataClassClass.md): The new [.getCount()](../API/DataClassClass.md#getcount) function returns the number of entities in a dataclass.
- The _4DDiagnosticLog.txt_ file only records high-level information by default ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). You can now select the information level to record (for example DEBUG level information) using the `Diagnostic log level` selector of the `SET DATABASE PARAMETER` command or the log configuration file.
- Calling `Use()` on a non-shared object or a non-shared collection does nothing (it no longer generates an error). Por lo tanto, ahora es inútil comprobar si el objeto o colección pasado a Use() es realmente compartido.
- For clarification purposes, two SQL commands have been prefixed: `GET DATA SOURCE LIST` has been renamed to `SQL GET DATA SOURCE LIST`, `Get current data source` has been renamed to `SQL Get current data source`.
- **4D View Pro**:
  - The new [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
  - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) and [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.
  - (Sólo Windows) Las áreas de 4D View Pro utilizan ahora una nueva ventana de configuración de impresión.
- **Áreas web**:
  - New Windows system rendering engine: Web Areas using the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) are now based upon **Microsoft Edge WebView2**. Esto afecta a las siguientes funcionalidades:
    - The `WA Create URL history menu` and `WA GET URL HISTORY` commands only return the current URL.
    * The [Progression variable](../FormObjects/properties_WebArea.md#progression) is no longer updated.
    * Las funciones de arrastrar y soltar se gestionan mediante una API de Windows que Microsoft califica de "experimental". Consequently, web areas may not work as expected when this API is not installed: Drag and drop may seem allowed even when the `WA enable URL drop` preference has been set to False. However, the drop action is blocked by default, and you can control the allowed URLs using the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) (see below).
  * (Windows only) When the user selects **Print...** from a web area using the embedded web rendering engine, a new print settings window is now displayed.
  * To reflect their actual effect in web areas (increase or decrease page zoom level), two commands have been renamed: `WA SET PAGE TEXT LARGER` has been renamed `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` has been renamed `WA ZOOM OUT`.
  * Enhanced security in web areas that use the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) or the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) (based on Microsoft Edge WebView2):
    - Las políticas CORS ahora se aplican cuando se accede a archivos en disco en áreas web. For example, when opening a .html file with `WA OPEN URL`, that .html file cannot contain links that point to files outside its folder
    - Dropping external contents in web areas is now always blocked and triggers the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) when the `WA enable URL drop` preference is set to True (when set to False, the `WA enable URL drop` preference only modifies the drop cursor icon and filters the `On Window Opening Denied` event). Para permitir una acción de soltar, es necesario ejecutar código adicional en el método objeto del área web:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))

```

## 4D v19 R4

- [Alias attributes](../ORDA/ordaClasses.md#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](../Concepts/flow-control.md#break-and-continue) statements in loops.
- Support for [return](../Concepts/flow-control.md#return-expression) statement and [return expression](../Concepts/parameters.md#return-expression) to return values.
- Support for [compound assignment operators](../Concepts/operators.md#compound-assignment-operators), [short-circuit operators](../Concepts/operators.md#short-circuit-operators), and [ternary operator](../Concepts/operators.md#ternary-operator)
- The [Code Editor](../code-editor/write-class-method.md) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](../Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](../REST/$lock.md) entities.
- [4D View Pro](../ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- New [SystemWorker class](../API/SystemWorkerClass.md).
- The `Alias selection` constant has been renamed `Allow alias files` to resolve a conflict resulting from the support of alias attributes in ORDA.
- For better compliance with ORDA specifications, the _Map NULL values to blank values_ field property is now unchecked by default in databases created with 4D v19 R4 and higher. También puede activar este comportamiento por defecto en sus bases de datos convertidas de versiones anteriores seleccionando la opción de compatibilidad Asignar valores NULL a valores vacíos desmarcada por defecto en la creación de campos. Ahora se recomienda trabajar con valores Null, ya que ORDA los soporta completamente.
- Because of the support of the [ternary operator](../Concepts/operators.md#ternary-operator), the colon ":" is no longer allowed in variable, field, constant, function, plugin and project method names. Si su base de datos/proyecto contiene identificadores con dos puntos, debe reemplazarlos antes de convertirla a v19 R4 o superior, de lo contrario pueden producirse errores en su código. For example, if you have a variable named _a:b_, it could be interpreted as ternary operator syntax:

```4d
$value:=($size>1000)? a:b // Here 'a:b' is viewed as a ternary operator.

```

## 4D v19 R3

- [Computed properties](../Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](../ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](../ORDA/ordaClasses.md#function-query-attributename) and [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass [attributes](../API/DataClassClass.md#attributename): `exposed` and `readOnly`.
- [ZIP archives](../API/ZipArchiveClass.md#zip-create-archive) now supports _LZMA_ and _xz_ compression algorithms.
- A [new build option](../Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](../Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](../ServerWindow/maintenance.md#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters.md#optional-parameters) is more flexible in the 4D language when accessing parameters declared but not passed. Por ejemplo, el siguiente código ya no provoca un error:

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

For detailed information, please refer to [this blog post](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). Para beneficiarse de esta simplificación general, es necesario recompilar tanto los métodos que llaman como los que son llamados; por lo tanto, los componentes deben recompilarse.

- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions.md#preemptive-mode).

- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.

- 4D v19 R3 utiliza un algoritmo hash más fuerte para las contraseñas de usuario 4D: Bcrypt. This new algorithm is automatically used when a password is changed using the Tool Box, the `CHANGE PASSWORD` command, or the `Set user properties` command. Una vez modificada la contraseña, la apertura de la base de datos con una versión anterior a 4D v19 R3 provocará una denegación de autenticación para esta cuenta. Si utiliza contraseñas 4D, es muy recomendable hacer una copia de seguridad del archivo .4db (bases de datos binarias) o del archivo directory.json (proyectos) antes de actualizar a 4D v19 R3 o posterior.

- For accuracy, the `4D digest` constant has been renamed `4D REST digest`.

- Gestión de fin de línea y lista de materiales para comandos XML: cuando se abren en 4D v19 R3, los proyectos o bases de datos creados con versiones anteriores se comportan de forma diferente en lo que respecta a los caracteres de fin de línea predeterminados y la gestión de la lista de materiales en documentos XML: se utilizan caracteres de salto de línea (LF) en lugar de CR (en macOS) y no se incluyen las marcas de orden de bytes (BOM). Esto permite una mejor compatibilidad con las herramientas VCS. If necessary, you can restore the v19 R2 behavior using the `XML SET OPTIONS` command. En los proyectos o bases de datos convertidos desde versiones anteriores a la 19 R2, estas opciones se gestionan mediante dos ajustes de compatibilidad.

- Runtime Explorer shortcut removed in built projects: The **Cmd/Ctrl+Shift+F9** shortcut does no longer display the Runtime Explorer window in single-user merged project applications. Este acceso directo ahora puede ser un acceso directo a una aplicación de usuario. You can call the Runtime Explorer window using the new `OPEN RUNTIME EXPLORER` command.

- Capacidades de depuración extendiddas con 4D Server: en modo interpretado, 4D Server puede ahora depurar todo tipo de procesos, incluidas las sesiones web escalables. This is available when the debugger is attached to the server or to a remote client.\
  _Warning: In interpreted mode, in order to make extented debugging available on the server machine, all server processes are now automatically executed in cooperative mode when the debugger is attached to the server (default setting). Esto puede tener un impacto significativo en el rendimiento de sus aplicaciones convertidas cuando se ejecutan con 4D Server v19 R3 y superiores. To restore preemptive execution on the server in this case, all you need to do is detach the debugger from the server (and attach it to a remote client if necessary)._

- On Windows, 4D projects and databases created with 4D v19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. Esta API mejora el renderizado de texto, especialmente en configuraciones de alto DPI. DirectWrite se utiliza para la representación de texto con texto estático y de entrada, casillas de verificación, botones y botones radio. Tenga en cuenta que los listboxes ya utilizan DirectWrite. Una opción de compatibilidad permite activar DirectWrite en proyectos y bases de datos creados con versiones anteriores de 4D.

- If you use components compiled with 4D v19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D v19 R3 to provide compatibility with 4D v19 R3 and future releases. Si un componente no está compilado para Silicon, no es necesario volver a compilarlo.

## 4D v19 R2

- A [default .gitignore file](../Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](../API/BlobClass.md) to handle new [`4D.Blob` objects](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](../API/FileClass.md#settext)

## Versiones anteriores

<details><summary>Click to see the release notes for previous versions</summary>

### 4D v19

:::warning Nota de seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D v19.7 LTS build 288986 o superior. Para más información, consulte este [Boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](../FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods.md#theme-list).
- [Native compilation](../Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](../FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- Nueva página [CLI]completa (../Admin/cli.md).

### 4D v18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return _undefined_ if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- New [WebAdmin](../Admin/webAdmin.md) web server component
- New [DataExplorer](../Admin/dataExplorer.md) interface
- New web [user sessions](../WebServer/sessions.md) and [their API](../API/SessionClass.md).

</details>

## Tabla de las librerías

| Librería  | Versión actual | Actualizado en 4D | Comentario                                                                                                               |
| --------- | -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ICU       | 73.2           | 20.1              | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto.            |
| CEF       | 118            | 20 R3             | Chromium 5993                                                                                                            |
| Hunspell  | 1.7.2          | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                                |
| PDFWriter | 4.3            | 20                | Dependencia FreeType en 12.2.1                                                                                           |
| SpreadJS  | 16.2.6         | 20 R4             | Motor 4D View Pro                                                                                                        |
| OpenSSL   | 3.2.0          | 20 R4             | Se ha actualizado el nivel de seguridad TLS/SSL por defecto. See [Behavior changes](#behavior-changes) for release 20 R4 |
| libZip    | 1.9.2          | 20                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                   |
| LZMA      | 5.4.1          | 20                |                                                                                                                          |
| Zlib      | 1.2.13         | 20                |                                                                                                                          |
| webKit    | WKWebView      | 19                |                                                                                                                          |
| PHP       | 8.2.4          | 20                |                                                                                                                          |
| libldap   | 2.6.4          | 20 R3             |                                                                                                                          |
| libsasl   | 2.1.28         | 20                |                                                                                                                          |
