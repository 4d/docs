---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* ; *tamaño* )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referencia del documento |
| tamaño | Real | &#8594;  | Nuevo tamaño expresado en bytes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->El comando SET DOCUMENT SIZE define el tamaño de un documento para el número de bytes que se pasan en *tamaño*.<!-- END REF--> 

Si el documento está abierto, pase su número de referencia en *docRef*.

En Macintosh, se modifica el tamaño del data fork del documento.

#### Ver también 

[Get document position](get-document-position.md)  
[Get document size](get-document-size.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 480 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


