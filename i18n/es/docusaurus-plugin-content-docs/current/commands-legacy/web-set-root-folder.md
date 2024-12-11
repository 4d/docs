---
id: web-set-root-folder
title: WEB SET ROOT FOLDER
slug: /commands/web-set-root-folder
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET ROOT FOLDER.Syntax-->**WEB SET ROOT FOLDER** ( *carpetaRaiz* )<!-- END REF-->
<!--REF #_command_.WEB SET ROOT FOLDER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| carpetaRaiz | Text | &#8594;  | Ruta de acceso de la carpeta raíz del servidor Web |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SET ROOT FOLDER.Summary-->El comando **WEB SET ROOT FOLDER** se utiliza para modificar la carpeta raíz por defecto en la cual 4D busca los archivos HTML pedidos al servidor web.<!-- END REF--> 

Este comando no tiene en cuenta la carpeta raíz HTML por defecto, definida en la Propiedades de la base. Para mayor información sobre esta carpeta, consulte la sección *Seguridad de las conexiones*.

La ubicación de la carpeta raíz puede expresarse en sintaxis HTML (tipo URL), o en sintaxis sistema (ruta absoluta):

* Sintaxis HTML: los nombres de carpetas se separan por una barra oblicua ("/"), sin importar la plataforma utilizada.
* Sintaxis sistema: ruta de acceso absoluta (“nombre largo”) respetando la sintaxis de la plataforma actual, por ejemplo:

\- (Mac OS) Disco:Aplicaciones:miserv:carpeta  
\- (Windows) C:\\Aplicaciones\\miserv\\carpeta

**Notas:**

* Será necesario reiniciar el servidor web para que la nueva carpeta de raíz sea tenida en cuenta.
* Puede saber en cualquier momento la ubicación de la carpeta raíz utilizando el comando Get 4D folder.

Si especifica una ruta de acceso invalida, se generará un error del administrador archivos del sistema operativo. Puede interceptar el error con un método [ON ERR CALL](on-err-call.md "ON ERR CALL"). Si el método muestra una caja de diálogo de alerta o un mensaje, aparecerá del lado del navegador.

#### Ver también 

[Get 4D folder](get-4d-folder.md)  
[ON ERR CALL](on-err-call.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 634 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


