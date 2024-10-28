---
id: sax-get-xml-document-values
title: SAX GET XML DOCUMENT VALUES
slug: /commands/sax-get-xml-document-values
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Syntax-->**SAX GET XML DOCUMENT VALUES** ( *documento* ; *codificacion* ; *version* ; *autonomo* )<!-- END REF-->
<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| codificacion | Text | &#8592; | Conjunto de caracteres del documento XML |
| version | Text | &#8592; | Versión XML |
| autonomo | Boolean | &#8592; | True = el documento es autónomo, de lo contrario es False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Summary-->El comando SAX GET XML DOCUMENT VALUES  extrae información básica del encabezado XML del documento XML referenciado por *documento*.<!-- END REF-->

El comando devuelve respectivamente el tipo de codificación, la versión y la propiedad “autónoma” del documento en los parámetros *codificacion*, *version* y *autonomo*. Este comando debe utilizarse en el evento del contexto del evento SAX XML Start Document. Para mayor información sobre los eventos SAX, consulte la descripción del comando [SAX Get XML node](sax-get-xml-node.md "SAX Get XML node"). 

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error. 

#### Ver también 

[SAX Get XML node](sax-get-xml-node.md)  
[SAX SET XML DECLARATION](sax-set-xml-declaration.md)  