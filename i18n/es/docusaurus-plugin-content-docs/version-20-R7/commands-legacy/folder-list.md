---
id: folder-list
title: FOLDER LIST
slug: /commands/folder-list
displayed_sidebar: docs
---

<!--REF #_command_.FOLDER LIST.Syntax-->**FOLDER LIST** ( *nombreRuta* ; *directorios* )<!-- END REF-->
<!--REF #_command_.FOLDER LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreRuta | Text | &#8594;  | Ruta de acceso del volumen, directorio o carpeta |
| directorios | Text array | &#8592; | Nombres de los directorios presentes en esta ubicación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FOLDER LIST.Summary-->El comando FOLDER LIST llena el array de tipo Texto o Alfa *directorios* con los nombres de las carpetas ubicadas en la ruta de acceso que se pasa en *rutaAcceso*.<!-- END REF-->debe pasar una ruta de acceso absoluta en el parámetro *rutaAcceso*. 

Si no hay carpetas en la ubicación especificada, el comando devuelve un array vacío. Si la ruta de acceso que se pasa en *rutaAcceso* es incorrecta, FOLDER LIST genera un error del administrador de archivos que puede interceptar utilizando un método [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[DOCUMENT LIST](document-list.md)  
[VOLUME LIST](volume-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 473 |
| Hilo seguro | &check; |
| Modifica variables | error |


