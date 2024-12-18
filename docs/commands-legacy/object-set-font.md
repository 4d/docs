---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( {* ;} *object* ; *font* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | any | &#8594;  | Object Name (if * is specified), or Field or Variable (if * is omitted) |
| font | Text | &#8594;  | Font name |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET FONT.Summary-->OBJECT SET FONT displays the *object* using the font specified in the *font* parameter.<!-- END REF--> The *font* parameter must contain a valid font name.

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string.

**Note:** If you use this command on an *object* that was using a style sheet, the reference to the style sheet is automatically deleted from the object -- even if you assign the same attributes as those of the style sheet.

#### Example 1 

The following example sets the font for a button named *bOK*: 

```4d
 OBJECT SET FONT(bOK;"Arial")
```

#### Example 2 

The following example sets the font for all the form objects whose name contains "info": 

```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

#### Example 3 

The following example uses the special *%password* option, designed for entry and display of “password” type fields. When you pass "%password" in the *font* parameter:

* every character entered in the object is displayed with the same symbol,
* "copy" and "cut" actions are disabled in the object.

**Note:** You can use the *%password* option with field, variable and combo box type objects.

```4d
 OBJECT SET FONT([Users]Password;"%password")
```

#### See also 

[Font file](font-file.md)  
[FONT LIST](font-list.md)  
[OBJECT Get font](object-get-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  
*Programming Notes*  

#### Properties

|  |  |
| --- | --- |
| Command number | 164 |
| Thread safe | &cross; |


