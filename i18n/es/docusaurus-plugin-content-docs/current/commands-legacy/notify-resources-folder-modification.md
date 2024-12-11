---
id: notify-resources-folder-modification
title: NOTIFY RESOURCES FOLDER MODIFICATION
slug: /commands/notify-resources-folder-modification
displayed_sidebar: docs
---

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Syntax-->**NOTIFY RESOURCES FOLDER MODIFICATION**<!-- END REF-->
<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Summary-->El comando NOTIFY RESOURCES FOLDER MODIFICATION permite "forzar" el envío por 4D Server de una notificación indicando a todos los puestos 4D conectados que el contenido de la carpeta Resources de la base ha sido modificado, de manera que puedan sincronizar su carpeta Resources local.<!-- END REF-->   
Este comando puede utilizarse particularmente para administrar la sincronización de las carpetas *Resources* de los equipos remotos después de que esta carpeta haya sido modificada por un procedimiento almacenado en el servidor. 

Para mayor información sobre la administración de la carpeta *Resources* en modo remoto, consulte la Guía de referencia de 4D Server.

Sólo la información de modificación es enviada por este comando. Las máquinaa remotas reaccionarán en función del parámetro actual. Las opciones son:

* no sincronización de la carpeta *Resources* local durante la sesión,
* sincronización automática de la carpeta *Resources* local durante la sesión,
* mostrar una alerta con el fin de que el usuario efectúe una sincronización si lo desea.

El parámetro actual puede estar definido:

* a nivel global de la base vía el parámetro de las Propiedades de la base. En este caso, se aplica a todos los equipos remotos;
* localmente, utilizando el comando [SET DATABASE PARAMETER](set-database-parameter.md) ejecutado en el equipo remoto (selector Auto Synchro Resources Folder). En este caso, "invalida" el de la base y se aplica únicamente al equipo remoto para la sesión.

#### Ver también 

[Get 4D folder](get-4d-folder.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1052 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


