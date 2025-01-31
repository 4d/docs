---
id: copy-blob
title: COPY BLOB
slug: /commands/copy-blob
displayed_sidebar: docs
---

<!--REF #_command_.COPY BLOB.Syntax-->**COPY BLOB** ( *srcBLOB* ; *dstBLOB* ; *srcOffset* ; *dstOffset* ; *numero* )<!-- END REF-->
<!--REF #_command_.COPY BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| srcBlob | Blob | &#8594;  | BLOB fuente |
| dstBlob | Blob | &#8594;  | BLOB de destino |
| srcOffset | Integer | &#8594;  | Posición de la fuente para la copia |
| dstOffset | Integer | &#8594;  | Posición de destino para la copia |
| numero | Integer | &#8594;  | Número de bytes a copiar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COPY BLOB.Summary-->El comando COPY BLOB copia el número de bytes especificado por *nombre* del BLOB *srcBLOB* al BLOB *dstBLOB*.<!-- END REF-->

La copia comienza en la posición (expresada con relación al comienzo del BLOB fuente) definida por *srcOffset* y toma lugar a partir de la posición (expresada con relación al comienzo del BLOB de destino) especificada por *dstOffset*.

**Nota:** el BLOB de destino puede redimensionarse si es necesario.

#### Ver también 

[DELETE FROM BLOB](delete-from-blob.md)  
[INSERT IN BLOB](insert-in-blob.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 558 |
| Hilo seguro | &check; |


