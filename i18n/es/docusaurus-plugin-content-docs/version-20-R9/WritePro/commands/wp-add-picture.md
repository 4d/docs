---
id: wp-add-picture
title: WP Add picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Add picture.Syntax-->**WP Add picture** ( *wpDoc* {; *picture*} ) : Object<br/>**WP Add picture** ( *wpDoc* {; *picturePath*} ) : Object<br/>**WP Add picture** ( *wpDoc* {; *pictureFileObj*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Add picture.Params-->

| Parámetros     | Tipo                    |                             | Descripción                                                |
| -------------- | ----------------------- | --------------------------- | ---------------------------------------------------------- |
| wpDoc          | Object                  | &#8594; | Documento 4D Write Pro                                     |
| picture        | Picture                 | &#8594; | Imagen 4D                                                  |
| picturePath    | Text                    | &#8594; | Ruta de la imagen                                          |
| pictureFileObj | 4D.File | &#8594; | 4D.File object representing a picture file |
| Resultado      | Object                  | &#8592; | Object referencing the picture                             |

<!-- END REF-->

## Descripción

El comando **WP Add imagen** <!--REF #_command_.WP Add image.Summary--> ancla la imagen pasada como parámetro en una ubicación fija dentro del *wpDoc* especificado y devuelve su referencia.<!-- END REF--> The returned reference can then be passed to the [WP SET ATTRIBUTES](wp-set-attributes.md) command to move the picture to any location in *wpDoc* (page, section, header, footer, etc.) with a defined layer, size, etc.

In *wpDoc*, pass the name of a 4D Write Pro document object.

For the optional second parameter, you can pass either:

- En *imagen*:  una imagen 4D
- In *picturePath*:  A string containing a path to a picture file stored on disk (system syntax). You can pass a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. If you pass a file name, you need to indicate the file extension.
- En *PictureFileObj*: un objeto `4D.File` que representa un archivo imagen.

:::note

Todo formato imagen [soportado por 4D](../../FormEditor/pictures.md#native-formats-supported) puede ser usado. You can get the list of available picture formats using the [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) command. If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.

:::

- If *picture* is omitted, a valid picture reference is returned, and an empty image is added. This allows you to then call [WP SET ATTRIBUTES](wp-set-attributes.md) with the wk image expression selector to fill the image with a 4D expression. If the expression can not be evaluated or does not return a valid picture, an empty image (default black frame image) is displayed.

By default, the added picture is:

- Embedded behind the text
- Displayed at the top left corner of the paper box
- Mostrar en todas las páginas

The location, layer (inline, in front/behind text), visibility, and any properties of picture can be modified using the [WP SET ATTRIBUTES](wp-set-attributes.md) command, or via standard actions (see *Using 4D Write Pro standard actions*).

**Nota:** el comando [WP Selection range](../commands-legacy/wp-selection-range.md) devuelve un objeto *referencia a imagen* si se selecciona una imagen anclada y un objeto *rango* si se selecciona una imagen en línea. You can determine if a selected object is a picture object by checking the `wk type` attribute:

- **Value = 2**: el objeto seleccionado es un objeto imagen.
- **Valor = 0**: el objeto seleccionado es un objeto de rango.

## Ejemplo 1

You want to add a picture with default settings using a filepath.

```4d
 var $obPict : Object
 $obPict:=WP Add picture(myDoc;"/PACKAGE/Pictures/Saved Pictures/Sunrise.jpg")
```

El resultado es:

![](../../assets/en/WritePro/commands/pict3617325.en.png)

## Ejemplo 2

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

El resultado es:

![](../../assets/en/WritePro/commands/pict3617351.en.png)

## Ejemplo 3

You want to use a field expression to add an anchored image to a document displaying some text from the database:

```4d
 QUERY([Flowers];[Flowers]Common_Name="tulip")
 WP SET TEXT(myDoc;[Flowers]Description;wk append) //insert text
 var $obImage : Object
 $obImage:=WP Add picture(myDoc)
 WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))
```

![](../../assets/en/WritePro/commands/pict3841719.en.png)

## Ver también

[WP DELETE PICTURE](../commands-legacy/wp-delete-picture.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)