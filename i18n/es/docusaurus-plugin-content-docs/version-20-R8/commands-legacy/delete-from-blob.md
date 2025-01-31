---
id: delete-from-blob
title: DELETE FROM BLOB
slug: /commands/delete-from-blob
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM BLOB.Syntax-->**DELETE FROM BLOB** ( *BLOB* ; *offset* ; *numero* )<!-- END REF-->
<!--REF #_command_.DELETE FROM BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB del cual borrar los bytes |
| offset | Integer | &#8594;  | Offset a partir del cual borrar los bytes |
| numero | Integer | &#8594;  | Número de bytes a borrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE FROM BLOB.Summary-->El comando DELETE FROM BLOB borra el número de bytes especificado por *numero* del BLOB *blob* a partir de la posición especificada por *offset* (expresada de manera relativa al comienzo del BLOB).<!-- END REF--> El tamaño del BLOB se reduce en *numero* de bytes.

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Ver también 

[INSERT IN BLOB](insert-in-blob.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 560 |
| Hilo seguro | &check; |


