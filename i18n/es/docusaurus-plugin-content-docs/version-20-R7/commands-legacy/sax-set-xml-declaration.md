---
id: sax-set-xml-declaration
title: SAX SET XML DECLARATION
slug: /commands/sax-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SAX SET XML DECLARATION.Syntax-->**SAX SET XML DECLARATION** ( *documento* ; *codificacion* {; *autonomo*} )<!-- END REF-->
<!--REF #_command_.SAX SET XML DECLARATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| codificacion | Text | &#8594;  | Conjunto de caracteres del documento XML |
| autonomo | Boolean | &#8594;  | True = el documento es autónomo False (por defecto) = el documento no es autónomo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX SET XML DECLARATION.Summary-->El comando SAX SET XML DECLARATION inicializa el documento XML referenciado en *documento* utilizando la *codificación* especificada.<!-- END REF--> Opcionalmente, puede definir el atributo autónomo.

* *codificacion*: indica el conjunto de caracteres utilizado en el documento. Por defecto (si no se llama al comando), se utiliza el conjunto de caracteres UTF-8 (Unicode comprimido).**Nota:** si pasa un conjunto de caracteres que no soporta los comandos XML de 4D, se utilizará UTF\-8\. Consulte *Conjuntos de caracteres* para ver la lista de conjuntos de caracteres soportados (sin embargo se recomienda UTF\-8 en la mayoría de los casos).
* *autonomo*: indica si el documento es autonomo ([True](true.md "True")) o si depende, para su funcionamiento, de otros archivos o de recursos externos ([False](false.md "False")). Por defecto (si no se llama el comando o si el parámetro se omite), el documento no es autónomo.

Este comando debe llamarse una sola vez por documento y antes del primer comando de escritura XML en el documento; de lo contrario, se generará un mensaje de error.  
  
**Nota:** puede especificar la indentación del documento gracias al comando [XML SET OPTIONS](xml-set-options.md) antes de escribir cualquier cosa.

Este comando debe llamarse una sola vez por documento y antes del primer comando de escritura XML en el documento; de lo contrario, se generará un mensaje de error.

#### Ejemplo 

El siguiente código: 

```4d
 SAX SET XML DECLARATION($DocRef;"UTF-16";True)
```

... escribirá esta línea en el documento: 

```4d
 
```

#### Ver también 

[SAX GET XML DOCUMENT VALUES](sax-get-xml-document-values.md)  