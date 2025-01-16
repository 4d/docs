---
id: sax-close-xml-element
title: SAX CLOSE XML ELEMENT
slug: /commands/sax-close-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX CLOSE XML ELEMENT.Syntax-->**SAX CLOSE XML ELEMENT** ( *documento* )<!-- END REF-->
<!--REF #_command_.SAX CLOSE XML ELEMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX CLOSE XML ELEMENT.Summary-->El comando SAX CLOSE XML ELEMENT escribe en el documento XML referenciado por *documento* las instrucciones necesarias para cerrar el último elemento abierto utilizando el comando SAX OPEN XML.<!-- END REF--> 

El uso de este comando es opcional. De hecho, 4D añade automáticamente si es necesario, al momento del cierre de los documentos XML, las etiquetas de fin de los elementos no cerrados explícitamente.

#### Ejemplo 

Si el último elemento abierto es *<Book>*, la siguiente instrucción:

```4d
 SAX CLOSE XML ELEMENT($DocRef)
```

... escribirá la siguiente línea en el documento: 

```4d
 
```

#### Ver también 

[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 854 |
| Hilo seguro | &check; |


