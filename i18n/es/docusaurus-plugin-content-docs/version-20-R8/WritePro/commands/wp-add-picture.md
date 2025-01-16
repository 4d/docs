---
id: wp-add-picture
title: WP Add picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Add picture.Syntax-->**WP Add picture** ( *wpDoc* {; *picture*} ) : Object<br/>**WP Add picture** ( *wpDoc* {; *picturePath*} ) : Object<br/>**WP Add picture** ( *wpDoc* {; *pictureFileObj*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Add picture.Params-->

| Parámetros     | Tipo                    |   | Descripción                                                |
| -------------- | ----------------------- | - | ---------------------------------------------------------- |
| wpDoc          | Object                  | → | Documento 4D Write Pro                                     |
| picture        | Picture                 | → | 4D picture                                                 |
| picturePath    | Text                    | → | Picture path                                               |
| pictureFileObj | 4D.File | → | 4D.File object representing a picture file |
| Resultado      | Object                  | ← | Object referencing the picture                             |

<!-- END REF-->

#### Descripción

The **WP Add picture** command<!--REF #_command_.WP Add picture.Summary--> anchors the picture passed as parameter at a fixed location within the specified *wpDoc* and returns its reference.<!-- END REF--> The returned reference can then be passed to the [WP SET ATTRIBUTES](wp-set-attributes.md) command to move the picture to any location in *wpDoc* (page, section, header, footer, etc.) with a defined layer, size, etc.

In *wpDoc*, pass the name of a 4D Write Pro document object.

For the optional second parameter, you can pass either:

- In *picture*:  A 4D picture
- In *picturePath*:  A string containing a path to a picture file stored on disk (system syntax). You can pass a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. If you pass a file name, you need to indicate the file extension.
- In *PictureFileObj*: a `4D.File` object representing a picture file.

:::note

Any picture format [supported by 4D](../../FormEditor/pictures.md#native-formats-supported) can be used. You can get the list of available picture formats using the [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) command. If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.

:::

- If *picture* is omitted, a valid picture reference is returned, and an empty image is added. This allows you to then call [WP SET ATTRIBUTES](wp-set-attributes.md) with the wk image expression selector to fill the image with a 4D expression. If the expression can not be evaluated or does not return a valid picture, an empty image (default black frame image) is displayed.

By default, the added picture is:

- Embedded behind the text
- Displayed at the top left corner of the paper box
- Shown on all pages

The location, layer (inline, in front/behind text), visibility, and any properties of picture can be modified using the [WP SET ATTRIBUTES](wp-set-attributes.md) command, or via standard actions (see *Using 4D Write Pro standard actions*).

**Note:** The [WP Selection range](../commands-legacy/wp-selection-range.md) command returns a *picture reference* object if an anchored picture is selected and a *range object* if an inline picture is selected. You can determine if a selected object is a picture object by checking the `wk type` attribute:

- **Value = 2**: The selected object is a picture object.
- **Value = 0**: The selected object is a range object.

#### Ejemplo 1

You want to add a picture with default settings using a filepath.

```4d
 var $obPict : Object
 $obPict:=WP Add picture(myDoc;"/PACKAGE/Pictures/Saved Pictures/Sunrise.jpg")
```

The result is:

![](../../assets/en/WritePro/commands/pict3617325.en.png)

#### Ejemplo 2

You want to add a resized picture, centered and anchored to the header:

```4d
 var $obImage : Object
 var $myPictureFile : 4D.File

 $myPictureFile:=File("/PACKAGE/Pictures/Saved Pictures/Sunrise.jpg")
 $obImage:=WP Add picture(myDoc;$myPictureFile)
 WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)
 WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)
 WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)
 WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")
```

The result is:

![](../../assets/en/WritePro/commands/pict3617351.en.png)

#### Ejemplo 3

You want to use a field expression to add an anchored image to a document displaying some text from the database:

```4d
 QUERY([Flowers];[Flowers]Common_Name="tulip")
 WP SET TEXT(myDoc;[Flowers]Description;wk append) //insert text
 var $obImage : Object
 $obImage:=WP Add picture(myDoc)
 WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))
```

![](../../assets/en/WritePro/commands/pict3841719.en.png)

#### Ver también

[WP DELETE PICTURE](../commands-legacy/wp-delete-picture.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)
