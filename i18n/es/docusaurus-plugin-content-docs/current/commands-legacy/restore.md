---
id: restore
title: RESTORE
slug: /commands/restore
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE.Syntax-->**RESTORE** {( *rutaArchivo* {; *rutaCarpetaDest*} )}<!-- END REF-->
<!--REF #_command_.RESTORE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaArchivo | Text | &#8594;  | Ruta de acceso del archivo a restituir |
| rutaCarpetaDest | Text | &#8594;  | Ruta de acceso de la carpeta de destino |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.RESTORE.Summary-->El comando RESTORE permite restituir el o los archivos incluidos en un archivo 4D.<!-- END REF--> Este comando es útil con interfaces personalizadas para la gestión de backups. 

Si no pasa el parámetro *rutaArchivo*, el comando muestra una caja de diálogo de apertura para que el usuario pueda seleccionar el archivo a restaurar.

El parámetro *rutaArchivo* permite indicar la ruta de acceso del archivo a restituir. Esta ruta debe expresarse con la sintaxis del sistema. Puede pasar una ruta absoluta o una relativa al archivo de estructura de la base.   
En este caso (si se omite el parámetro *rutaCarpetDest*), la caja de diálogo de restitución estándar aparece con el archivo preseleccionado, de manera que el usuario puede designar la carpeta de destino. Cuando se completa el procedimiento, aparece una caja de diálogo de alerta y se muestra la carpeta que contiene los elementos restituidos. 

También puede pasar el parámetro *rutaCarpetDest*  con la ruta de acceso de la carpeta de destino de los elementos restituidos. Esta ruta debe expresarse con la sintaxis sistema. Puede pasar una ruta absoluta o relativa al archivo de estructura de la base. Si pasa este parámetro, aparece una caja de diálogo de restauración preconfigurada, permitiendo únicamente al usuario lanzar o cancelar la restitución. Cuando se completa el procedimiento, la ventana se cierra nuevamente sin mostrar información adicional. 

El comando RESTORE modifica el valor de las variables *OK* y *Document*: si la restitución es correcta, *OK* toma el valor 1 y *Document* contiene la ruta de la carpeta de restitución. Si el usuario cancela la caja de restauración, interrumpe la restauración o si ocurre un error, *OK* toma el valor 0 y *Document* contiene una cadena vacía. Puede interceptar el error utilizando un método instalado vía el comando *ON ERR CALL*.

**Nota:** en una aplicación 4D compilada y fusionada con 4D Volume Desktop, el comando RESTORE produce la visualización de una caja de diálogo estándar de apertura de archivos que lista por defecto los archivos de extensión “4BK”.

#### Ver también 

[BACKUP](backup.md)  
[RESTORE INFO](restore-info.md)  