---
id: close-resource-file
title: CLOSE RESOURCE FILE
slug: /commands/close-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE RESOURCE FILE.Syntax-->**CLOSE RESOURCE FILE** ( *resArchivo* )<!-- END REF-->
<!--REF #_command_.CLOSE RESOURCE FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLOSE RESOURCE FILE.Summary-->El comando **CLOSE RESOURCE FILE** cierra el archivo de recursos cuyo número de referencia se pasa en *resArchivo*.<!-- END REF--> 

Incluso si ha abierto varias veces el mismo archivo de recursos, debe llamar **CLOSE RESOURCE FILE** sólo una vez para cerrarlo.

Si aplica **CLOSE RESOURCE FILE** al archivo de recursos de la aplicación 4D o de la base, el comando lo detecta y no hace nada.

Si pasa un número de referencia de archivo de recursos incorrecto, el comando no hace nada. 

Recuerde llamar finalmente **CLOSE RESOURCE FILE** para un archivo de recursos que haya abierto utilizando [Open resource file](open-resource-file.md). Note que cuando sale de la aplicación (o abre otra base de datos), 4D cierra automáticamente todos los archivos de recursos abiertos.

#### Ver también 

[Open resource file](open-resource-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 498 |
| Hilo seguro | &cross; |


