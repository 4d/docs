---
id: sax-add-xml-doctype
title: SAX ADD XML DOCTYPE
slug: /commands/sax-add-xml-doctype
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML DOCTYPE.Syntax-->**SAX ADD XML DOCTYPE** ( *documento* ; *docType* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML DOCTYPE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| docType | Text | &#8594;  | DocType a añadir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX ADD XML DOCTYPE.Summary-->El comando SAX ADD XML DOCTYPE añade la instrucción DocType definida por el parámetro *docType* en el documento XML referenciado por *document*.<!-- END REF--> 

La instrucción DocType permite indicar el tipo de XML en el cual el documento ha sido escrito y especificar la Declaración de tipo de documento (DTD) utilizada. Una instrucción DocType generalmente tiene la siguiente forma: .

#### Ejemplo 

La siguiente instrucción:

```4d
 vDocType:="SYSTEM Books \"Book.DTD\""
 SAX ADD XML DOCTYPE($DocRef;vDocType)
```

... escribirá la siguiente línea en el documento:  

```4d
 
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0.

#### Gestión de errores 

En caso de error, el comando devuelve un error que puede interceptarse utilizando un método de gestión de errores.

#### Ver también 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  