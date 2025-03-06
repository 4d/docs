---
id: sax-get-xml-comment
title: SAX GET XML COMMENT
slug: /commands/sax-get-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML COMMENT.Syntax-->**SAX GET XML COMMENT** ( *documento* ; *comentario* )<!-- END REF-->
<!--REF #_command_.SAX GET XML COMMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| comentario | Text | &#8592; | Comentario XML |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX GET XML COMMENT.Summary-->El comando SAX GET XML COMMENT  devuelve un *comentario* si un evento SAX de tipo XML Comment se genera en el documento XML referenciado en el parámetro *documento*.<!-- END REF--> Para mayor información sobre los eventos SAX, consulte la descripción del comando [SAX Get XML node](sax-get-xml-node.md "SAX Get XML node"). 

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error.

#### Ver también 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 874 |
| Hilo seguro | &check; |
| Modifica variables | OK |


