---
id: sax-add-xml-comment
title: SAX ADD XML COMMENT
slug: /commands/sax-add-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML COMMENT.Syntax-->**SAX ADD XML COMMENT** ( *documento* ; *comentario* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML COMMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| comentario | Text | &#8594;  | Comentario a añadir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX ADD XML COMMENT.Summary-->El comando SAX ADD XML COMMENT añade un *comentario* en el documento XML referenciado por *document*.<!-- END REF--> 

Un comentario XML es un texto cuyo contenido no será analizado por el interprete XML. Los comentarios XML deben estar entre los caracteres <!-- y -->. 

#### Ejemplo 

La siguiente instrucción:

```4d
 vComentario:="Creado por 4D"
 SAX ADD XML COMMENT($DocRef;vComentario)
```

... escribirá la siguiente línea en el documento: 

```4d
 
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0.

#### Gestión de errores 

En caso de error, el comando devuelve un error que puede interceptarse utilizando un método de gestión de errores.

#### Ver también 

[SAX ADD XML DOCTYPE](sax-add-xml-doctype.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 852 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


