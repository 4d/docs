---
id: wp-insert-picture
title: WP Insert picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert picture.Syntax-->**WP Insert picture** ( *targetObj* ; *picture* ; *mode* {; *rangeUpdate*} ): Object<br/>**WP Insert picture** ( *targetObj* ; *pictureFileObj*; *mode* {; *rangeUpdate*}): Object<!-- END REF-->

<!--REF #_command_.WP Insert picture.Params-->

| Parámetros     | Tipo                    |                             | Descripción                                                      |
| -------------- | ----------------------- | --------------------------- | ---------------------------------------------------------------- |
| targetObj      | Object                  | &#8594; | Rango o elemento o documento 4D Write Pro                        |
| picture        | Picture                 | &#8594; | Picture field or variable, or path to picture file on disk       |
| pictureFileObj | 4D.File | &#8594; | Un objeto File que representa un archivo imagen. |
| mode           | Integer                 | &#8594; | Modo de inserción                                                |
| rangeUpdate    | Integer                 | &#8594; | Modo de actualización del rango                                  |
| Resultado      | Object                  | &#8592; | Objeto que hace referencia a la imagen                           |

<!-- END REF-->

## Descripción

El comando **WP Insert picture**<!--REF #_command_.WP Insert picture.Summary--> inserta *picture* o una *imagenFileObj* en el *targetObj* especificado de acuerdo al *mode* de inserción pasado y los parámetros *rangeUpdate*, y devuelve una referencia al elemento de imagen.<!-- END REF--> La imagen se insertará como un caracter en *targetObj*.

En *targetObj*, puede pasar:

- Un rango
- An element (table / row / paragraph / body / header / footer / inline picture / section / subsection)
- Un documento 4D Write Pro

For the second parameter, you can pass either:

- En *picture*:
  - Campo o variable de imagen
  - A string containing a path to a picture file stored on disk, in the system syntax.
    If you use a string, you can pass either a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file.
- En *pictureFileObj* : un objeto `File` que representa un archivo imagen.

Todo formato imagen [soportado por 4D](../../FormEditor/pictures.md#native-formats-supported) puede ser usado. Puede obtener la lista de formatos de imagen disponibles usando el comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.

In the *mode* parameter, pass one of the following constants to indicate the insertion mode to be used on the picture in the document:

| Constante  | Tipo    | Valor | Comentario                                      |
| ---------- | ------- | ----- | ----------------------------------------------- |
| wk append  | Integer | 2     | Insertar el contenido al final del objetivo     |
| wk prepend | Integer | 1     | Insertar el contenido al principio del objetivo |
| wk replace | Integer | 0     | Sustituir contenido de destino                  |

If *targetObj* is a range, you can optionally use the *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted picture is included in the resulting range:

| Constante             | Tipo    | Valor | Comentario                                                               |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------ |
| wk exclude from range | Integer | 1     | Picture not included in the updated range                                |
| wk include in range   | Integer | 0     | Imagen incluida en el rango actualizado (por defecto) |

If you do not pass a *rangeUpdate* parameter, by default the inserted picture is included in the resulting range.

- Si *targetObj* no es un rango, *rangeUpdate* se ignora.

## Ejemplo 1

In the following example, a user selects the picture they want to insert into the range object and will be warned if this picture could not be inserted:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //ask user to choose a picture on the disk that they want to insert
 $imgRef:=Open document("")
  //if user does not cancel
 If(OK=1)
  //if the file is a supported picture file
    If(Is picture file(document))
  // insert picture selected by user
       WP Insert picture($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //if the insertion failed, alert the user
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## Ejemplo 2

You want to insert a picture in the body of the documment:

```4d
var $file : 4D.File
var $pictRef : Object

$file:=File("/RESOURCES/NovelCover1.jpg")

WParea:=WP New
$pictRef:=WP Insert picture(WParea; $file; wk replace)

```

## Ver también

[WP Insert document body](wp-insert-document-body.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)