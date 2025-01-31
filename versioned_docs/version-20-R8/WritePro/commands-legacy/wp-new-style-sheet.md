---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* ; *styleSheetType* ; *styleSheetName* ) : Object<!-- END REF-->
<!--REF #_command_.WP New style sheet.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| styleSheetType | Integer | &#8594;  | Type of style sheet |
| styleSheetName | Text | &#8594;  | Name of style sheet |
| Function result | Object | &#8592; | Style sheet object |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New style sheet.Summary-->The **WP New style sheet** command creates a new (empty) style sheet object for the designated *wpDoc*.<!-- END REF-->

In the *wpDoc* parameter, pass a 4D Write Pro document. 

The *styleSheetType* parameter lets you designate the type of the style sheet, *i.e.* the part of the *wpDoc* that will be affected by the style sheet. Two types are available:

* wk type character: Applies style attributes to characters.
* wk type paragraph: Applies style attributes to paragraphs.

Pass a name for the style sheet in the *styleSheetName* parameter. The style sheet's name is stored with the document and facilitates reusing or modifying the style. It can also be used with the [WP Get style sheet](wp-get-style-sheet.md) and [WP DELETE STYLE SHEET](wp-delete-style-sheet.md) commands. The style sheet name must comply with the following rules:

* it must start with a letter
* it can then contain alphanumeric characters, space characters, "-" characters or unicode characters >= 128
* it must be unique in the document regardless of the type
* it must not start with "section", which is reserved
* the "\_" is replaced by a space and trailing spaces are removed.

You can specify the attributes of the style sheet using the [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) command or the object notation (see *4D Write Pro Attributes*). For the list of available attributes, see the *Style sheet attributes* section.

**Notes**: 

* A style sheet only modifies the display of a character or paragraph, not how it is stored in the document. If a style sheet is removed, the text will revert to the default style.
* Any style attributes not defined in the new style sheet will automatically use the Normal style. For more information, see *Style sheet commands*.

#### Example 

The following code creates and defines a paragraph style sheet:

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  //define style sheet settings
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  //Apply the style sheet to the first paragraph
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

#### See also 

*Accessing document contents by programming*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  