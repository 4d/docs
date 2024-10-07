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
| srcBLOB | BLOB | &#x1F852; | BLOB fuente |
| dstBLOB | BLOB | &#x1F852; | BLOB de destino |
| srcOffset | Entero largo | &#x1F852; | Posición de la fuente para la copia |
| dstOffset | Entero largo | &#x1F852; | Posición de destino para la copia |
| numero | Entero largo | &#x1F852; | Número de bytes a copiar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COPY BLOB.Summary-->El comando COPY BLOB copia el número de bytes especificado por *nombre* del BLOB *srcBLOB* al BLOB *dstBLOB*.<!-- END REF-->

La copia comienza en la posición (expresada con relación al comienzo del BLOB fuente) definida por *srcOffset* y toma lugar a partir de la posición (expresada con relación al comienzo del BLOB de destino) especificada por *dstOffset*.

**Nota:** el BLOB de destino puede redimensionarse si es necesario.

#### Ver también 

[DELETE FROM BLOB](delete-from-blob.md)  
[INSERT IN BLOB](insert-in-blob.md)  