---
id: wp-add-picture
title: WP Add picture
slug: /WritePro/commands/wp-add-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Add picture.Syntax-->**WP Add picture** ( *wpDoc* {; *picture*} ) : Object<!-- END REF-->
<!--REF #_command_.WP Add picture.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| picture | Picture, Text | &#8594;  | Picture or Picture path |
| Function result | Object | &#8592; | Object referencing the picture |

<!-- END REF-->

## Description 

<!--REF #_command_.WP Add picture.Summary-->The **WP Add picture** command anchors *picture* at a fixed location within the *wpDoc* and returns its reference.<!-- END REF--> The returned reference can then be passed to the [WP SET ATTRIBUTES](wp-set-attributes.md) command to move *picture* to any location in *wpDoc* (page, section, header, footer, etc.) with a defined layer, size, etc. 

In *wpDoc*, pass the name of a 4D Write Pro document object.

In the optional *picture* parameter, you can pass:

* either a 4D picture,
* or a string containing a path to a picture file stored on disk, expressed using the system syntax.  
You can pass either a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. If you pass a file name, you need to indicate the file extension.

> **Note**: Any picture format supported by 4D can be used (see the *Pictures* section). You can get the list of available picture formats using the [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) command. If the picture encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected.

* If *picture* is omitted, you will obtain a valid picture reference and an empty image will be added. This allows you to then call the [WP SET ATTRIBUTES](wp-set-attributes.md) command with the wk image expression selector to use a 4D expression to fill the image. If the expression can not be evaluated or does not return a valid 4D picture, an empty image (default black frame image) will be displayed.

By default, the added picture is:

* embedded behind the text,
* displayed at the top left corner of the paper box,
* displayed on all pages.

The location, layer (inline, in front/behind text), visibility, and any properties of *picture* can be modified using the [WP SET ATTRIBUTES](wp-set-attributes.md) command, or via standard actions (see *Using 4D Write Pro standard actions*). 

**Note:** The [WP Selection range](wp-selection-range.md) command returns a *picture reference* object if a an anchored picture is selected and a *range* object if an inline picture is selected. You can check if a selected object is a picture object with the wk type attribute. If the value = 2, then it is a picture object, otherwise it is a range object (value = 0).

## Example 1 

You want to add a picture with default settings using a filepath.

```4d
 var $obPict : Object
 $obPict:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Sunrise.jpg")
```

The result is:

![](../../assets/en/WritePro/commands/pict3617325.en.png)

## Example 2 

You want to add a resized picture, centered and anchored to the header:

```4d
 var $obImage : Object
 $obImage:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Saved Pictures\\Sunrise.jpg")
 WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)
 WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)
 WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)
 WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")
```

The result is:

![](../../assets/en/WritePro/commands/pict3617351.en.png)

## Example 3 

You want to use a field expression to add an anchored image to a document displaying some text from the database:

```4d
 QUERY([Flowers];[Flowers]Common_Name="tulip")
 WP SET TEXT(myDoc;[Flowers]Description;wk append) //insert text
 var $obImage : Object
 $obImage:=WP Add picture(myDoc)
 WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))
```

![](../../assets/en/WritePro/commands/pict3841719.en.png)

## See also 

  
*Handling pictures*  
[WP DELETE PICTURE](wp-delete-picture.md)  
[WP Picture range](wp-picture-range.md)  