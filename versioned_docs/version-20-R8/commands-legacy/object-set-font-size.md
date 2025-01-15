---
id: object-set-font-size
title: OBJECT SET FONT SIZE
slug: /commands/object-set-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT SIZE.Syntax-->**OBJECT SET FONT SIZE** ( {* ;} *object* ; *size* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT SIZE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | any | &#8594;  | Object Name (if * is specified), or Field or Variable (if * is omitted) |
| size | Integer | &#8594;  | Font size in points |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET FONT SIZE.Summary-->**OBJECT SET FONT SIZE** sets the form objects specified by *object* to be displayed using the font size you pass in *size*.<!-- END REF-->

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the *Object Properties* section.

The *size* is any integer between 1 and 255\. If the exact font size does not exist, characters are scaled.

The area for the object, as defined in the form, must be large enough to display the data in the new size. Otherwise, the text may be truncated or not displayed at all.

**Note:** If you use this command on an *object* that was using a style sheet, the reference to the style sheet is automatically deleted from the object -- even if you assign the same attributes as those of the style sheet.

#### Example 1 

The following example sets the font size for a variable named *vtInfo*: 

```4d
 OBJECT SET FONT SIZE(vtInfo;14)
```

#### Example 2 

The following example sets the font size for all the form objects whose name starts with "hl": 

```4d
 OBJECT SET FONT SIZE(*;"hl@";14)
```

#### See also 

[OBJECT Get font size](object-get-font-size.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  
*Programming Notes*  

#### Properties

|  |  |
| --- | --- |
| Command number | 165 |
| Thread safe | &cross; |


