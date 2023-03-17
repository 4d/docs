---
id: updates
title: Notas del lanzamiento
---

## 4D v19 R8

Lea las [**Novedades de 4D v19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), la entrada de blog que lista todas las nuevas funcionalidades y mejoras de 4D v19 R8.


#### Puntos fuertes

- Se pueden instalar métodos de gestión de errores para [contextos de ejecución globales y de componentes](../Concepts/error-handling.md#scope-and-components).
- Listboxes with collection or entity selection datasources now support [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) column property.
- ORDA: soporte del archivo *roles.json* para definir [privilegios](../ORDA/privileges.md) asignados a la sesión con [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Soporte del [modo SDI en el modo de aplicación de prueba](../Menus/sdi.md#sdi-mode-availability) en Windows.
- 4D View Pro:
    - soporte de temas en tablas: nuevos comandos [VP SET TABLE THEME](../ViewPro/method-list#vp-set-table-theme) y [VP Get table theme](../ViewPro/method-list#vp-get-table-theme), soporte de opciones de tema en [VP CREATE TABLE](../ViewPro/method-list#vp-create-table)
    - nuevo [comando VP Get table dirty rows](../ViewPro/method-list#vp-get-table-dirty-rows)
- Lenguaje 4D clásico: [Página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19_R8): lista de todos los errores que se han corregido en 4D v18.


#### Cambios de comportamiento

- Para el cumplimiento HTTP RFC, la propiedad [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) devuelve ahora todos los nombres de encabezado **en minúsculas**. Si desea que su código siga funcionando como antes, utilice la nueva propiedad [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response).
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- En las áreas Web que utilizan blink (CEF), los diálogos mostrados desde scripts externos ahora se bloquean si no se llaman desde una función `setTimeout()` JS. Esto se debe a las actualizaciones actuales CEF, en las que los diálogos mostrados por funciones como `alert()` o `print()` ya no son gestionados por el SO sino por el área Web. Ver [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) y [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).


## Versiones anteriores

<details><summary>Haga clic para ver las notas de las versiones anteriores</summary>

### 4D v19 R7

Lea [**Novedades de 4D v19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), la entrada del blog que enumera todas las nuevas funcionalidades y mejoras de 4D v19 R7.


#### Puntos fuertes

- Los datos relacionados y los atributos calculados/alias pueden mostrarse en el [explorador de datos](../Admin/dataExplorer#basics).
- Nueva clase [FileHandle](../API/FileHandleClass) y nueva función [`.open()`](../API/FileClass#open) en la clase `File`.
- [Entity selection Class](../API/EntitySelectionClass): [`.add()`](../API/EntitySelectionClass#add) supports an *entitySelection* parameter, [`.minus()`](../API/EntitySelectionClass#minus) supports a *keepOrder* parameter.
- 4D View Pro: new table commands [VP Find table](../ViewPro/method-list#vp-find-table), [VP Get table column attributes](../ViewPro/method-list#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list#vp-set-table-column-attributes).
- Component namespaces are now [displayed in the Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Los objetos Área de texto y Formulario de entrada ahora soportan la [propiedad de radio de esquina](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Lenguaje 4D clásico: [Página Novedades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) en doc.4d.com.
- 4D Write Pro: [página Novedades](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) en doc.4d.com.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=19_R7): lista de todos los errores que se han corregido en 4D v19 R7.


#### Cambios de comportamiento

- Para mantener la coherencia con las interfaces estándar (por ejemplo, los exploradores de archivos del sistema operativo), se han modificado las reglas del list box para la selección/arrastrar y soltar de líneas. Se puede arrastrar una selección continua o discontinua de líneas simplemente haciendo clic en una línea seleccionada y moviéndola; la tecla **Alt** ya no es necesaria (pero se puede seguir utilizando como en el caso anterior). Cuando se presiona la tecla **Mayús** o **Ctrl/Comando**, se tiene en cuenta el clic del ratón cuando éste está presionado. Para más información sobre arrastrar y soltar en list boxes, puede consultar [esta entrada del blog](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) y descargar [este proyecto 4D HDI](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- La numeración interna de 4D ha sido modificada a partir de 4D v19 R7:
    - las versiones hasta 4D v19 R6 (incluida) llevan el número 282xxx,
    - las versiones a partir de 4D v19 R7 se numerarán 100xxx.  
      Tenga en cuenta que una versión 4D específica sigue estando identificada de forma única por un nombre de rama y un número de compilación. El número de build aumenta cronológicamente.
- Se ha eliminado la posibilidad de utilizar el protocolo Wakanda/4D Mobile REST para llamar a un método proyecto. En su lugar, puede utilizar [Funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) o [/4DACTION urls](../WebServer/httpRequests.md#4daction).

### 4D v19 R6

- Nueva clase [HTTPRequest](../API/HTTPRequestClass).
- Las funciones colección que pueden llamar código ahora soportan objetos de función como parámetro *fórmula*: [`.every()`](../API/CollectionClass#every), [`.filter()`](../API/CollectionClass#filter), [`.find()`](../API/CollectionClass#find), [`.findIndex()`](../API/CollectionClass#findindex), [`.map()`](../API/CollectionClass#map), [`.orderByMethod()`](../API/CollectionClass#orderbymethod), [`.reduce()`](../API/CollectionClass#reduce), [`.some()`](../API/CollectionClass#some), [`.sort()`](../API/CollectionClass#sort)
- Las celdas listbox soportan el espacio [horizontal](FormObjects/propertiesCoordinatesAndSizing#horizontal-padding) y [vertical](FormObjects/propertiesCoordinatesAndSizing#vertical-padding).
- 4D View Pro: nuevos comandos [VP CREATE TABLE](../ViewPro/method-list#vp-create-table) y [VP REMOVE TABLE](../ViewPro/method-list#vp-remove-table) para gestionar las tablas en las hojas.
- Posibilidad de ver los atributos relacionados, calculados y alias en el [explorador de datos web](../Admin/dataExplorer#basics).
- Nueva página que explica [por qué y cómo 4D recoge los datos](../Admin/data-collect).



### 4D v19 R5

- Aplicaciones cliente/servidor generadas:
    - El [archivo directory.json](Users/editing#directoryjson-file) del proyecto ahora puede ser [integrado al servidor](../Desktop/building#embed-the-project-users-and-groups-in-built-server-application) al momento de la generación, lo que le permite desplegar una aplicación cliente/servidor con una configuración básica de la seguridad de los usuarios y de los grupos.
    - Ahora puede [deseleccionar los módulos inútiles](../Desktop/building#deselecting-modules) en sus aplicaciones generadas.
- [Optimización cliente/servidor](../ORDA/datastores#clientserver-optimization): nuevas funciones de clase permiten manejar la caché ORDA y el contenido de un contexto de optimización. Para más información [Preconfiguración de contextos](../ORDA/datastores#preconfiguring-contexts) y [Caché ORDA](../ORDA/datastores#orda-cache). > Estas funciones están destinadas a los desarrolladores que necesitan personalizar las funciones por defecto de ORDA para las configuraciones específicas. En la mayoría de los casos, no será necesario utilizarlos.
- [clase DataClass](../API/DataClassClass): la nueva función [.getCount()](../API/DataClassClass#getcount) devuelve el número de entidades de una dataclass.
- 4D View Pro:
    - Los nuevos comandos [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context), [VP Get data context](../ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) permiten crear contextos de datos y vincular su contenido a las celdas de la hoja.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) y [VP Export to object](../ViewPro/method-list#vp-get-binding-path) aceptan ahora la nueva opción `includeBindingSource` que exporta el contenido de un contexto de datos como valores de celda.


### 4D v19 R4

- [Atributos Alias](../ORDA/ordaClasses#alias-attributes-1) están disponibles en las clases ORDA.
- Soporte para las instrucciones [break y continue](../Concepts/looping#break-and-continue) en los bucles.
- Soporte para la instrucción [return](../Concepts/control-flow#return-expression) y [la expresión return](../Concepts/parameters#return-expression) para devolver los valores.
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
