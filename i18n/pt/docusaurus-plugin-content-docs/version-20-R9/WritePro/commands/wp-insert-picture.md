---
id: wp-insert-picture
title: WP Insert picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert picture.Syntax-->**WP Insert picture** ( *targetObj* ; *picture* ; *mode* {; *rangeUpdate*} ): Object<br/>**WP Insert picture** ( *targetObj* ; *pictureFileObj*; *mode* {; *rangeUpdate*}): Object<!-- END REF-->

<!--REF #_command_.WP Insert picture.Params-->

| Parâmetro      | Tipo                     |                             | Descrição                                                  |
| -------------- | ------------------------ | --------------------------- | ---------------------------------------------------------- |
| targetObj      | Object                   | &#8594; | Range or element or 4D Write Pro document                  |
| picture        | Imagem                   | &#8594; | Picture field or variable, or path to picture file on disk |
| pictureFileObj | 4D. File | &#8594; | A File object representing a picture file. |
| mode           | Integer                  | &#8594; | Insertion mode                                             |
| rangeUpdate    | Integer                  | &#8594; | Range update mode                                          |
| Resultado      | Object                   | &#8592; | Object referencing the picture                             |

<!-- END REF-->

## Descrição

The **WP Insert picture** command<!--REF #_command_.WP Insert picture.Summary--> inserts a *picture* or a *pictureFileObj* in the specified *targetObj* according to the passed insertion *mode* and *rangeUpdate* parameters, and returns a reference to the picture element.<!-- END REF--> A imagem será inserida como um caractere no *targetObj*.

Em *targetObj*, você pode passar:

- A range
- An element (table / row / paragraph / body / header / footer / inline picture / section / subsection)
- Um documento 4D Write Pro

For the second parameter, you can pass either:

- Em *picture*:
 - A picture field or variable
 - A string containing a path to a picture file stored on disk, in the system syntax.
  If you use a string, you can pass either a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file.
- Em *pictureFileObj*: um objeto `File` que representa um arquivo imagem.

Qualquer formato imagem [suportado por 4D](../../FormEditor/pictures.md#native-formats-supported) pode ser usado. Você pode obter a lista de formatos de imagens disponíveis usando o comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.

In the *mode* parameter, pass one of the following constants to indicate the insertion mode to be used on the picture in the document:

| Parâmetros | Tipo    | Valor | Comentário                             |
| ---------- | ------- | ----- | -------------------------------------- |
| wk append  | Integer | 2     | Insert contents at end of target       |
| wk prepend | Integer | 1     | Insert contents at beginning of target |
| wk replace | Integer | 0     | Replace target contents                |

If *targetObj* is a range, you can optionally use the *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted picture is included in the resulting range:

| Parâmetros            | Tipo    | Valor | Comentário                                                          |
| --------------------- | ------- | ----- | ------------------------------------------------------------------- |
| wk exclude from range | Integer | 1     | Picture not included in the updated range                           |
| wk include in range   | Integer | 0     | Imagem incluída no intervalo atualizado (padrão) |

If you do not pass a *rangeUpdate* parameter, by default the inserted picture is included in the resulting range.

- Se *targetObj* não for um intervalo, *rangeUpdate* será ignorado.

## Exemplo 1

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

## Exemplo 2

You want to insert a picture in the body of the documment:

```4d
var $file : 4D.File
var $pictRef : Object

$file:=File("/RESOURCES/NovelCover1.jpg")

WParea:=WP New
$pictRef:=WP Insert picture(WParea; $file; wk replace)

```

## Veja também

[WP Insert document body](wp-insert-document-body.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)