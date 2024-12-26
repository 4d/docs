---
id: insert-in-blob
title: INSERT IN BLOB
slug: /commands/insert-in-blob
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN BLOB.Syntax-->**INSERT IN BLOB** ( *BLOB* ; *offset* ; *numero* {; *relleno*} )<!-- END REF-->
<!--REF #_command_.INSERT IN BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB en el cual insertar los bytes |
| offset | Integer | &#8594;  | Posición de inicio de inserción de los bytes |
| numero | Integer | &#8594;  | Número de bytes a insertar |
| relleno | Integer | &#8594;  | Valor de byte por defecto (0x00..0xFF) 0x00 si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.INSERT IN BLOB.Summary-->El comando INSERT IN BLOB inserta el número de bytes especificado por *numero* en el BLOB *blob* en la posición especificada por *offset*.<!-- END REF--> El BLOB se vuelve *numero* bytes más grande.

Si no especifica el parámetro opcional *relleno*, los bytes insertados en el BLOB se fijan para *0x00*. De lo contrario, los bytes se definen para el valor pasado en *defecto* (modulo 256 — 0..255).

Antes de llamar el comando, pase en la variable del parámetro *offset* la posición de la inserción relativa al comienzo del BLOB. 

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Ver también 

[DELETE FROM BLOB](delete-from-blob.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 559 |
| Hilo seguro | &check; |


