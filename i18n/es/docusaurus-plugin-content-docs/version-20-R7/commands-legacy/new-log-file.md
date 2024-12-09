---
id: new-log-file
title: New log file
slug: /commands/new-log-file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file**  : Text<!-- END REF-->
<!--REF #_command_.New log file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Ruta de acceso completa del archivo historial cerrado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.New log file.Summary-->**Nota preliminar:** este comando sólo funciona con 4D Server.<!-- END REF--> Sólo puede ser ejecutado vía el comando [Execute on server](execute-on-server.md) o en un procedimiento almacenado. 

El comando New log file cierra el archivo historial actual, le da otro nombre y crea uno nuevo con el mismo nombre en la misma ubicación del anterior. Este comando es para definir un sistema de backup por espejo lógico. (ver la sección “*Configurar un espejo lógico*” en el Manual de 4D Server). 

El comando devuelve la ruta de acceso completa (ruta de acceso + nombre) del archivo historial cerrado (llamado “segmento”). Este archivo es guardado en la misma ubicación del archivo historial actual (especificada en la página Configuración en el tema Copia de seguridad de las Preferencias). El comando no efectúa ningún proceso (compresión, segmentación) en el archivo guardado. No aparece ninguna caja de diálogo.

El archivo se renombra con los números de backup´actuales de la base y el archivo historial, como se muestra en el siguiente ejemplo: *NombreBase\[BackupNum-LogBackupNum\].4DL*. Por ejemplo: 

* Si la base MiBase.4DD ha sido guardada 4 veces, el último archivo de backup se llamará MyBase\[0004\].4BK. El nombre del primer “segmento” del archivo historial será por lo tanto *MiBase\[0004-0001\].journal*.
* Si la base MiBase.4DD ha sido guardada 3 veces y el archivo historial ha sigo guardado 5 veces, el nombre del sexto backup del archivo historial será *MiBase\[0003-0006\].journal*.

#### Gestión de errores 

En caso de que se presente un error, el comando genera un código que puede interceptarse utilizando el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

