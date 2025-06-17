---
id: wp-insert-document-body
title: WP Insert document body
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert document body.Syntax-->**WP Insert document body** ( *targetObj* ; *wpDoc* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert document body.Params-->

| Parámetros  | Tipo    |                             | Descripción                                              |
| ----------- | ------- | --------------------------- | -------------------------------------------------------- |
| targetObj   | Object  | &#8594; | Rango o elemento o documento 4D Write Pro                |
| wpDoc       | Object  | &#8594; | Documento 4D Write Pro                                   |
| mode        | Integer | &#8594; | Modo de inserción                                        |
| rangeUpdate | Integer | &#8594; | Modo de actualización del rango                          |
| Resultado   | Object  | &#8592; | Text range object referencing the inserted document body |

<!-- END REF-->

## Descripción

El comando **WP Insert document body**<!--REF #_command_.WP Insert document body.Summary--> inserta el cuerpo del documento *wpDoc* en el *targetObj* especificado según los parámetros *mode* y *rangeUpdate* de inserción pasados, y devuelve el rango del cuerpo del documento insertado.<!-- END REF-->

En *targetObj*, pase:

- Un rango, o
- An element (table / row / paragraph / body / header / footer / inline picture / section / subsection / text box), or
- un documento 4D Write Pro.

The inserted *wpDoc* document can be any 4D Write Pro document object created using the [WP New](../commands-legacy/wp-new.md) or [WP Import document](wp-import-document.md) command. Only the body children elements are inserted (i.e. headers, footers, text boxes and anchored pictures are not inserted). Sections and bookmarks in the destination range are preserved. In addition, the elements are copied, so *wpDoc* can be re-used several times.

In the *mode* parameter, pass one or a combination of the following constants from the *4D Write Pro Constants* theme to indicate the insertion mode to be used for the document in the destination *targetObj*:

| Constante  | Tipo    | Valor | Comentario                                  |
| ---------- | ------- | ----- | ------------------------------------------- |
| wk append  | Integer | 2     | Insertar el contenido al final del objetivo |
| wk prepend | Integer | 1     | Insert contents at beginning of target      |
| wk replace | Integer | 0     | Replace target contents                     |

You can combine one of the previous constants with the following insertion options:

| Constante                | Tipo    | Valor | Comentario                                                                                                                                              |
| ------------------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk freeze expressions    | Integer | 64    | Freeze expressions at the moment of the insertion                                                                                                       |
| wk keep paragraph styles | Integer | 128   | Aplicar estilos de párrafo de destino. In case of wk append operation, insert contents without initial paragraph break. |

In the *rangeUpdate* parameter (Optional); if *targetObj* is a range, you can pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:

| Constante             | Tipo    | Valor | Comentario                                                                            |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------------------- |
| wk exclude from range | Integer | 1     | Contenido insertado no incluido en el rango actualizado                               |
| wk include in range   | Integer | 0     | Contenido insertado incluido en el rango actualizado (por defecto) |

If you do not pass a *rangeUpdate* parameter, by default the inserted contents are included in the resulting range.

- Si *targetObj* no es un rango, *rangeUpdate* se ignora.

## Ejemplo 1

You want to replace the contents of a document by the text selected in another one:

```4d
 $tempRange:=WP Get selection(WPTemplate) //we retrieve the user selection in the WPTemplate document
 $doctoCopy:=WP New($tempRange) //create a new document based on WPTemplate
 WP Insert document body(WPDoc;$doctoCopy;wk replace) //replace contents of WPDoc by the contents of the new document
```

## Ejemplo 2

You have defined a template document with different preformatted parts, each of them being stored as a bookmark. When producing a final document from the template, you can extract any bookmark as a new document and insert it in the final document.

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //get the bookmarks from the template
 $targetRange:=WP New //create an empty document (will be the final document)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //handle the main header part
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //select the range
    $RangeDoc:=WP New($Range) //create a new document from the range
    WP Insert document body($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=after replacement, $targetRange is equal to end of replaced text
 End if
```

## Ejemplo 3

You want to set the font style and size for the inserted document body:

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