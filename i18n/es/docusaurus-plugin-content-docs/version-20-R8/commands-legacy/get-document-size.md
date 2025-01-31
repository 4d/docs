---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* {; *} ) : Real<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| document | Text, Time | &#8594;  | Número de referencia del documento o Nombre del documento |
| * | Operador | &#8594;  | En Mac OS únicamente: -si se omite, tamaño del data fork - si se especifica, tamaño del resource fork |
| Resultado | Real | &#8592; | Tamaño (expresado en bytes) del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get document size.Summary-->El comando Get document size devuelve el tamaño de un documento, expresado en bytes.<!-- END REF--> 

Si el documento está abierto, pase su número de referencia en *documento*.  
Si el documento no está abierto, pase su nombre o ruta en *documento*.

En Macintosh, si no pasa el parámetro opcional *\**, se devuelve el tamaño del data fork. Si no pasa el parámetro *\**, se devuelve el tamaño del resource fork.

#### Ver también 

[Get document position](get-document-position.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET DOCUMENT SIZE](set-document-size.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 479 |
| Hilo seguro | &check; |
| Modifica variables | error |


