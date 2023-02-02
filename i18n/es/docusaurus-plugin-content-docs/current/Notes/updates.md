---
id: updates
title: Notas del lanzamiento
---

## 4D v20

Lea [**Novedades en 4D v20**](https://blog.4d.com/en-whats-new-in-4d-v20/), la entrada del blog que enumera todas las nuevas funcionalidades y mejoras de 4D v20.


#### Puntos fuertes

- New functions to lock/unlock the datastore: [`.flushAndLock()`](../API/DatastoreClass#flushandlock), [`.locked()`](../API/DatastoreClass#locked), [`.unlock()`](../API/DatastoreClass#unlock).
- Para simplificar el código, algunos operadores de comparación pueden utilizarse ahora con [Valores indefinidos](../Concepts/dt_null_undefined.md#undefined-operators) sin generar errores.


- 4D Language classic: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R8): list of all bugs that have been fixed in 4D v19 R8.


#### Behavior changes

- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response) property.



## 4D v19 R8

Read [**What’s new in 4D v19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), the blog post that lists all new features and enhancements in 4D v19 R8.


#### Puntos fuertes

- Error management methods can be installed for [global and component execution contexts](../Concepts/error-handling.md#scope-and-components).
- Listboxes with collection or entity selection datasources now support [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) column property.
- ORDA: Support of the *roles.json* file to define [privileges](../ORDA/privileges.md) assigned to the session with [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Support of [SDI mode in test application mode](../Menus/sdi.md#sdi-mode-availability) on Windows.
- 4D View Pro:
    - support of themes in tables: new [VP SET TABLE THEME](../ViewPro/method-list#vp-set-table-theme) and [VP Get table theme](../ViewPro/method-list#vp-get-table-theme) commands, support of theme options in [VP CREATE TABLE](../ViewPro/method-list#vp-create-table)
    - new [VP Get table dirty rows](../ViewPro/method-list#vp-get-table-dirty-rows) command
- 4D Language classic: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R8): list of all bugs that have been fixed in 4D v19 R8.


#### Behavior changes

- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response) property.
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- In Web areas using blink (CEF), dialogs displayed from external scripts are now blocking if not called from a `setTimeout()` JS function. This is due to the current CEF updates, in which dialogs displayed by functions such as `alert()` or `print()` are no longer handled by the OS but by the Web area. See [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) and [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).


## Versiones anteriores

<details><summary>Click to see the release notes for previous versions</summary>

### 4D v19 R7

Read [**What’s new in 4D v19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), the blog post that lists all new features and enhancements in 4D v19 R7.


#### Puntos fuertes

- Related data and computed/alias attributes can be displayed in the [Data Explorer](../Admin/dataExplorer#basics).
- New [FileHandle](../API/FileHandleClass) class and new [`.open()`](../API/FileClass#open) function in the `File` class.
- [Entity selection Class](../API/EntitySelectionClass): [`.add()`](../API/EntitySelectionClass#add) supports an *entitySelection* parameter, [`.minus()`](../API/EntitySelectionClass#minus) supports a *keepOrder* parameter.
- 4D View Pro: new table commands [VP Find table](../ViewPro/method-list#vp-find-table), [VP Get table column attributes](../ViewPro/method-list#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list#vp-set-table-column-attributes).
- Component namespaces are now [displayed in the Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Text area and Input form objects now support the [corner radius property](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- 4D Language classic: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R7): list of all bugs that have been fixed in 4D v19 R7.


#### Behavior changes

- For consistency with standard interfaces (e.g. OS file explorers), list box rules for row selection/drag and drop have been modified. A continuous or discontinuous selection of rows can be dragged by simply clicking on and moving a selected row; the **Alt** key is not longer necessary (but can still be used like in previous previous). When the **Shift** or **Ctrl/Command** key is pressed, a mouse click is taken into account when the click is down. For more information on drag and drop in list boxes, you can refer to [this blog post](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) and download [this HDI 4D project](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- The 4D internal build numbering has been modified as of 4D v19 R7:
    - releases up to 4D v19 R6 (included) are numbered 282xxx,
    - releases from 4D v19 R7 will be numbered 100xxx.

    Note that a specific 4D version is still uniquely identified by a branch name and a build number. The build number increases chronologically.


### 4D v19 R6

- New [HTTPRequest](../API/HTTPRequestClass) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](../API/CollectionClass#every), [`.filter()`](../API/CollectionClass#filter), [`.find()`](../API/CollectionClass#find), [`.findIndex()`](../API/CollectionClass#findindex), [`.map()`](../API/CollectionClass#map), [`.orderByMethod()`](../API/CollectionClass#orderbymethod), [`.reduce()`](../API/CollectionClass#reduce), [`.some()`](../API/CollectionClass#some), [`.sort()`](../API/CollectionClass#sort)
- Listbox cells support [horizontal](FormObjects/propertiesCoordinatesAndSizing#horizontal-padding) and [vertical](FormObjects/propertiesCoordinatesAndSizing#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](../ViewPro/method-list#vp-create-table) and [VP REMOVE TABLE](../ViewPro/method-list#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](../Admin/dataExplorer#basics).
- New page explaining [why and how 4D collects data](../Admin/data-collect).



### 4D v19 R5

- Aplicaciones cliente/servidor generadas:
    - The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
    - You can now [deselect useless modules](../Desktop/building#deselecting-modules) in your built applications.
- [Client/Server optimization](../ORDA/datastores#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/datastores#preconfiguring-contexts) and [ORDA Cache](../ORDA/datastores#orda-cache) for more information. > These functions are intended for developers who need to customize ORDA default features for specific configurations. En la mayoría de los casos, no será necesario utilizarlos.
- [DataClass class](../API/DataClassClass): The new [.getCount()](../API/DataClassClass#getcount) function returns the number of entities in a dataclass.
- 4D View Pro:
    - The new [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context), [VP Get data context](../ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) and [VP Export to object](../ViewPro/method-list#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.


### 4D v19 R4

- [Alias attributes](../ORDA/ordaClasses#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](../Concepts/looping#break-and-continue) statements in loops.
- Support for [return](../Concepts/control-flow#return-expression) statement and [return expression](../Concepts/parameters#return-expression) to return values.
- Soporte de los [operadores de asignación compuestos](../Concepts/operators#compound-assignment-operators), [los operadores de cortocircuito](../Concepts/operators#short-circuit-operators) y del [operador ternario](../Concepts/operators#ternary-operator)
- El [editor de código](../code-editor/overview) ahora incluye una herramienta desplegable y soporta marcadores para una mejor navegación por el código.
- Nuevas Preferencias: [**Incluir los tokens en los archivos fuente del proyecto**](../Preferences/general#include-tokens-in-project-source-files) y la opción [**Mostrar los portapapeles**](../Preferences/methods#show-clipboards) en la página Métodos.
- Nueva petición REST para las entidades [lock/unlock](../REST/lock).
- [4D View Pro](../ViewPro/getting-started) capítulo añadido con nuevos comandos: [VP Copy to object](../ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list#vp-paste-from-object).
- Nuevo [Clase SystemWorker](../API/SystemWorkerClass).


### 4D v19 R3

- Las [propiedades calculadas](../Concepts/classes#function-get-and-function-set) están disponibles en las clases.
- [Los atributos calculados](../ORDA/ordaClasses#computed-attributes) están disponibles en las clases ORDA. Son similares a las propiedades calculadas pero también soportan las funciones [query](../ORDA/ordaClasses#function-query-attributename) y [orderBy](../ORDA/ordaClasses#function-orderby-attributename).
- Nuevos atributos de dataclass ORDA: [`exposed`](../API/DataClassAttributeClass#exposed) y [`readOnly`](../API/DataClassAttributeClass#readonly).
- [Los archivos ZIP](../API/ZipArchiveClass#zip-create-archive) ahora soportan los algoritmos de compresión *LZMA* y *xz*.
- Una [nueva opción de build](../Desktop/building#allow-connection-of-silicon-mac-clients) facilita la inclusión de los clientes Silicon Mac en las aplicaciones servidor en Windows.
- [soporte del modo oscuro](../Preferences/general#appearance-macos-only) en macOS.
- Soporte de **OAuth2 token object** en [`IMAP New transporter`](../API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass#pop3-new-transporter) y [`SMTP New transporter`](../API/SMTPTransporterClass#smtp-new-transporter).
- Los usuarios pueden ahora cargar un [archivo de configuración de registro](../Debugging/debugLogFiles#using-a-log-configuration-file) utilizando un botón en la [ventana de administración del servidor](../ServerWindow/maintenance#load-logs-configuration-file).
- La gestión de los [parámetros opcionales](../Concepts/parameters#optional-parameters) es más flexible en el lenguaje 4D.
- La depuración de las sesiones de servidor web [es más fácil en 4D Server](../WebServer/sessions#preemptive-mode).
- El nuevo componente [4D NetKit](https://github.com/4d/4D-NetKit) permite conectar con APIs de terceros como Microsoft Graph.


### 4D v19 R2

- Un [archivo .gitignore por defecto](../Preferences/general#create-gitignore-file) puede ser creado con nuevos proyectos
- Nuevo [API Blob class](../API/BlobClass) para generar nuevos objetos [`4D.Blob`](Concepts/dt_blob#blob-types)
- Soporte de `no-bom` y nuevos caracteres de fin de línea por defecto en [`.setText()`](../API/FileClass#settext)


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

<details><summary>Haga clic para ver la tabla de las librerías utilizadas en 4D</summary>

| Librería | Versión actual | Actualizado en 4D | Comentario                                                                                                    |
| -------- | -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| SpreadJS | 15.2.5         | 19 R8             | Motor 4D View Pro                                                                                             |
| CEF      | 106.0.27       | 19 R8             | Chromium 106.0.5249.103                                                                                       |
| OpenSSL  | 1.1.1s         | 19 R7             |                                                                                                               |
| libzip   | 1.7.3          | 19 R2             | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                        |
| webKit   | WKWebView      | 19                |                                                                                                               |
| ICU      | 68.1           | 18 R6             | Esta importante actualización obliga a reconstruir automáticamente los índices alfanuméricos, texto y objeto. |
| PHP      | 7.3.27         | 18 R6             |                                                                                                               |
| libldap  | 2.4.48         | 18 R2             |                                                                                                               |

</details>
