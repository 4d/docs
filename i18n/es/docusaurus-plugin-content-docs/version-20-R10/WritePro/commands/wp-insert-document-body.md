---
id: wp-insert-document-body
title: WP Insert document body
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert document body.Syntax-->**WP Insert document body** ( *targetObj* ; *wpDoc* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert document body.Params-->

| Parámetros  | Tipo    |                             | Descripción                                                                    |
| ----------- | ------- | --------------------------- | ------------------------------------------------------------------------------ |
| targetObj   | Object  | &#8594; | Rango o elemento o documento 4D Write Pro                                      |
| wpDoc       | Object  | &#8594; | Documento 4D Write Pro                                                         |
| mode        | Integer | &#8594; | Modo de inserción                                                              |
| rangeUpdate | Integer | &#8594; | Modo de actualización del rango                                                |
| Resultado   | Object  | &#8592; | Objeto de rango de texto que hace referencia al cuerpo del documento insertado |

<!-- END REF-->

## Descripción

El comando **WP Insert document body**<!--REF #_command_.WP Insert document body.Summary--> inserta el cuerpo del documento *wpDoc* en el *targetObj* especificado según los parámetros *mode* y *rangeUpdate* de inserción pasados, y devuelve el rango del cuerpo del documento insertado.<!-- END REF-->

En *targetObj*, pase:

- Un rango, o
- Un elemento (tabla / línea / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección / cuadro de texto), o
- un documento 4D Write Pro.

El documento *wpDoc* insertado puede ser cualquier objeto documento 4D Write Pro creado usando el comando [WP New](../commands-legacy/wp-new.md) o [WP Import document](wp-import-document.md). Sólo se insertan los elementos hijos del cuerpo (es decir, no se insertan encabezados, pies de página, cuadros de texto ni imágenes ancladas). Se conservan las secciones y los marcadores del área de destino. Además, los elementos se copian, por lo que *wpDoc* puede reutilizarse varias veces.

En el parámetro *mode*, pase una o una combinación de las siguientes constantes del tema *4D Write Pro Constants* para indicar el modo de inserción que se utilizará para el documento en el *targetObj* de destino:

| Constante  | Tipo    | Valor | Comentario                                      |
| ---------- | ------- | ----- | ----------------------------------------------- |
| wk append  | Integer | 2     | Insertar el contenido al final del objetivo     |
| wk prepend | Integer | 1     | Insertar el contenido al principio del objetivo |
| wk replace | Integer | 0     | Sustituir contenido de destino                  |

Puede combinar una de las constantes anteriores con las siguientes opciones de inserción:

| Constante                | Tipo    | Valor | Comentario                                                                                                                                                   |
| ------------------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wk freeze expressions    | Integer | 64    | Congelar expresiones en el momento de la inserción                                                                                                           |
| wk keep paragraph styles | Integer | 128   | Aplicar estilos de párrafo de destino. En caso de la operación wk append, inserte el contenido sin salto de párrafo inicial. |

En el parámetro *rangeUpdate* (Opcional); si *targetObj* es un rango, puede pasar una de las siguientes constantes para especificar si el contenido insertado se incluye o no en el rango resultante:

| Constante             | Tipo    | Valor | Comentario                                                                            |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------------------- |
| wk exclude from range | Integer | 1     | Contenido insertado no incluido en el rango actualizado                               |
| wk include in range   | Integer | 0     | Contenido insertado incluido en el rango actualizado (por defecto) |

Si no se pasa el parámetro *rangeUpdate*, por defecto el contenido insertado se incluye en el rango resultante.

- Si *targetObj* no es un rango, *rangeUpdate* se ignora.

## Ejemplo 1

Quieres reemplazar el contenido de un documento por el texto seleccionado en otro:

```4d
 $tempRange:=WP Get selection(WPTemplate) //recuperamos la selección del usuario en el documento WPTemplate
 $doctoCopy:=WP New($tempRange) //creamos un nuevo documento basado en WPTemplate
 WP Insert document body(WPDoc;$doctoCopy;wk replace) //reemplazamos el contenido de WPDoc por el contenido del nuevo documento
```

## Ejemplo 2

Ha definido un documento plantilla con diferentes partes preformateadas, cada una de las cuales se almacena como un marcador. Al producir un documento final a partir de la plantilla, puede extraer cualquier marcador como un nuevo documento e insertarlo en el documento final.

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //obtener los marcadores de la plantilla
 $targetRange:=WP New //crear un documento vacío (será el documento final)
 
 $p:=Find in array($_BookmarkNames; "Main_Header") //manejar la parte del encabezado principal
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //selecciona el rango
    $RangeDoc:=WP New($Range) //crea un nuevo documento a partir del rango
    WP Insert document body($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=después del reemplazo, $targetRange es igual al final del texto reemplazado
 End if
```

## Ejemplo 3

Desea definir el estilo y el tamaño de la fuente para el cuerpo del documento insertado:

```4d
WPdoc:=WP Import document("myFile.4wp")
$range1:=WP Insert document body(WParea; WPdoc; wk append)

WP SET ATTRIBUTES($range1; wk font size; "12pt")
WP SET ATTRIBUTES($range1; wk font family; "Times New Roman")
WP SET ATTRIBUTES($range1; wk font italic; wk true)
```

## Ver también

[WP INSERT BREAK](wp-insert-break.md)\
[WP INSERT PICTURE](wp-insert-picture.md)\
[WP New](../commands-legacy/wp-new.md)