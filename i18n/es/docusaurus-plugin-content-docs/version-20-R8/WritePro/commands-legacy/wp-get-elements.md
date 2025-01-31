---
id: wp-get-elements
title: WP Get elements
slug: /WritePro/commands/wp-get-elements
displayed_sidebar: docs
---

<!--REF #_command_.WP Get elements.Syntax-->**WP Get elements** ( *objRango* {; *tipoElemento*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get elements.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| tipoElemento | Integer | &#8594;  | Tipo de elemento deseado a recuperar |
| Resultado | Collection | &#8592; | Colección que contiene referencias de elemento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get elements.Summary-->El comando **WP Get elements** devuelve una colección de objetos que contienen párrafos, imágenes, tablas y/o líneas.<!-- END REF-->

En el parámetro *objRango*, puede pasar:

* un rango, o
* un elemento (tabla / fila / párrafo / cuerpo / encabezado / pie de página/ sección / subsección / caja de texto), o
* un documento 4D Write Pro

**Nota**: si pasa una subsección en *objRango*, el comando devuelve los elementos de la sección padre.

Si se pasa un rango digitado o elemento, el comando devolverá una colección que solo contiene los elementos del tipo correspondiente (a menos que especifique un tipo con el parámetro *tipoElemento*, ver abajo). De lo contrario, el comando devuelve una colección que contiene todos los elementos disponibles en *objRango*.

Opcionalmente, puede pasar el parámetro *tipoElemento* para especificar los tipos de elementos a devolver en la colección. Los siguientes tipos están disponibles:

| Constante              | Valor | Comentario                                              |
| ---------------------- | ----- | ------------------------------------------------------- |
| wk type default        | 0     | Tipo de rango por defecto (valor para wk type)          |
| wk type image          | 2     | Imagen anclada (valor para wk type)                     |
| wk type image anchored | 200   | Referencia de imagen anclada para objetos de documento  |
| wk type image inline   | 100   | Referencia de imagen en línea para objetos de documento |
| wk type paragraph      | 1     | Rango de tipo párrafo (valor para wk type)              |
| wk type table          | 4     | Referencia de tabla (valor para wk type)                |
| wk type table row      | 5     | Referencia de línea de tabla (valor para wk type)       |
| wk type text box       | 300   | Caja de texto (valor para wk type)                      |

**Nota:**

* Si pasa el selector wk type default, el comando devuelve una colección no filtrada.
* Si pasa el selector wk type paragraph, wk type image o wk type table, la colección devuelta contendrá solo elementos del tipo dado, incluso si difiere del tipo especificado en el parámetro *tipoElemento*.
* Si un rango pasado en *targetObj* contiene un elemento que no está completamente contenido dentro del rango, el elemento completo se incluirá en los resultados. Por ejemplo, si el rango incluye parte de una tabla (pero no de toda la tabla), se devuelve la referencia para todo el elemento de la tabla, sin embargo, solo se incluyen las referencias de celda (párrafo) dentro del rango.
* Si pasa wk type text box en el parámetro *tipoElemento*, *targetObj* puede contener un documento 4D Write Pro. Se devuelve un error si se pasa cualquier cosa que no sea un objeto documento en *targetObj* en este caso.

##### Cómo se ordenan los elementos 

Los elementos en la colección devuelta se ordenan de forma diferente en función del contenido de *objRango*:

* Si pasó un rango o un elemento en *objRango* (párrafo, tabla, cuerpo, encabezado, pie de página.), los elementos en la colección se ordenan en el orden del flujo de documentos (en el mismo orden en que aparecen en el documento).
* Si pasó un documento 4D Write Pro en *objRango*, como se devuelven todas las áreas del documento, los elementos de la colección se ordenan por ID (excepto las imágenes ancladas cuando se utiliza el parámetro wk type image anchored; en este caso, se ordenan por *orden z*). Los elementos en línea de tipo *tipoElemento* presentes en las **cajas de texto** (si los hay) se devuelven al final de la colección.

Si quiere, por ejemplo, alternar el color de fondo para los párrafos en la parte del cuerpo de un documento, debe pasar el elemento del cuerpo en *objRango* y no el documento, para asegurarse de que el orden del elemento en la colección corresponde al orden del párrafo del documento.

#### Ejemplo 1 

Desea devolver una colección de todos los párrafos en un documento:

```4d
 var $docElements : Collection
 $docElements:=WP Get elements($myDoc;wk type paragraph)
  //devuelve una colección que contiene solo elementos de párrafo
```

#### Ejemplo 2 

Usted desea alternar la alineación y el color de los párrafos en un documento: 

```4d
 var $col : Collection
 var $obj : Object
 var $body : Object
 var $i;$n : Integer
 $col:=New collection
 $body:=WP Get body(myDoc)
 $col:=WP Get elements($body;wk type paragraph)
 $i:=0
 $n:=$col.length
 For($i;0;$n-1)
    $obj:=$col[$i]
    WP RESET ATTRIBUTES($obj)
    WP SET ATTRIBUTES($obj;wk font bold;wk false)
    WP SET ATTRIBUTES($obj;wk font italic;wk false)
    If($i%2=0)
       WP SET ATTRIBUTES($obj;wk text align;wk left)
       WP SET ATTRIBUTES($obj;wk font bold;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#804040")
       WP SET ATTRIBUTES($obj;wk margin right;"5cm")
       WP SET ATTRIBUTES($obj;wk margin left;"1cm")
    Else
       WP SET ATTRIBUTES($obj;wk text align;wk right)
       WP SET ATTRIBUTES($obj;wk font italic;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#404020")
       WP SET ATTRIBUTES($obj;wk margin left;"5cm")
       WP SET ATTRIBUTES($obj;wk margin right;"1cm")
    End if
 End for
```

#### Ver también 

[WP Get breaks](wp-get-breaks.md)  
[WP Get element by ID](wp-get-element-by-id.md)  
[WP Table range](wp-table-range.md)  