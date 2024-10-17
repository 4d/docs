---
id: wp-get-element-by-id
title: WP Get element by ID
slug: /WritePro/commands/wp-get-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.WP Get element by ID.Syntax-->**WP Get element by ID** ( *docWP* ; *ID* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get element by ID.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| ID | Text | &#8594;  | Identificador del elemento a recuperar |
| Resultado | Object | &#8592; | Elemento 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get element by ID.Summary-->El comando **WP Get element by ID** devuelve un objeto que contiene el elemento de *wpDoc* pasado en el parámetro *ID*.<!-- END REF--> 

En el parámetro *wpDoc*, pase un documento 4D Write Pro.

Pase el atributo ID del elemento para recuperarlo en el parámetro *ID*. El elemento puede estar dentro del documento, como una imagen, un párrafo, una tabla, una fila, etc., o el documento en sí. Si ningún elemento del documento tiene la ID especificada, se devuelve un valor nulo.

**Nota**: el valor del parámetro *ID* es sensible a las mayúsculas y minúsculas.

#### Ejemplo 1 

Para obtener la imagen con el ID "img1":

```4d
 var obImage : Object
 obImage:=WP Get element by ID(myDoc;"img1")
```

#### Ejemplo 2 

Usted desea encontrar un elemento de tabla y modificarlo para que tenga un borde morado grande:

```4d
 var $element : Object
 $element:=WP Get element by ID(myDoc;"Table1")
 WP SET ATTRIBUTES($element;wk border style;wk solid)
 WP SET ATTRIBUTES($element;wk border width;"4px")
 WP SET ATTRIBUTES($element;wk border color;"purple")
```

#### Ejemplo 3 

Usted desea recuperar un elemento y modificar su ID:

```4d
 $colTable:=WP Create table range([INFO]Sample)
 $elements:=WP Get elements($colTable)
 $elem:=WP Get element by ID([INFO]Sample;"Paris")
 If($elem#Null)
    $elem.ID:="Lyon"
 End if
```

#### Ver también 

[WP Get elements](wp-get-elements.md)  