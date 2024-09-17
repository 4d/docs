---
id: object-set-font-style
title: OBJECT SET FONT STYLE
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT STYLE.Syntax-->**OBJECT SET FONT STYLE** ( {* ;} *object* ; *styles* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT STYLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | Form object | -> | Object Name (if * is specified), or Field or Variable (if * is omitted) |
| styles | Longint | -> | Font style |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET FONT STYLE.Summary-->**OBJECT SET FONT STYLE** sets the form objects specified by *object* to be displayed using the font style you pass in *styles*.<!-- END REF-->

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the [Object Properties](/4Dv20R6/4D/20-R6/Object-Properties.300-6958806.en.html) section.

You pass in *styles* a sum of the constants describing your font style selection. The following are the predefined constants provided by 4D:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Bold      | Longint | 1     |
| Italic    | Longint | 2     |
| Plain     | Longint | 0     |
| Underline | Longint | 4     |

  
#### Example 1 

This example sets the font style for a button named *bAddNew*. The font style is set to bold italic: 

```4d
 OBJECT SET FONT STYLE(bAddNew;Bold+Italic)
```

#### Example 2 

This example sets the font style to Plain for all form objects with names starting with “vt”: 

```4d
 OBJECT SET FONT STYLE(*;"vt@";Plain)
```

#### See also 

[OBJECT Get font style](object-get-font-style.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[Programming Notes](../../4D/20-R6/Programming-Notes.300-6958941.en.html)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  