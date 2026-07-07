---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( * ; *object* : Text ; *font* : Text )<br/>**OBJECT SET FONT** ( *object* : Variable, Field ; *font* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| font | Text | &#8594;  | Font name |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Modified|
|12|Renamed|
|6|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET FONT.Summary-->OBJECT SET FONT displays the *object* using the font specified in the *font* parameter.<!-- END REF--> The *font* parameter must contain a valid font name.

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string.

**Note:** If you use this command on an *object* that was using a style sheet, the reference to the style sheet is automatically deleted from the object -- even if you assign the same attributes as those of the style sheet.

## Example 1 

The following example sets the font for a button named *bOK*: 

```4d
 OBJECT SET FONT(bOK;"Arial")
```

## Example 2 

The following example sets the font for all the form objects whose name contains "info": 

```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

## Example 3 

The following example uses the special *%password* option, designed for entry and display of “password” type fields. When you pass "%password" in the *font* parameter:

* every character entered in the object is displayed with the same symbol,
* "copy" and "cut" actions are disabled in the object.

**Note:** You can use the *%password* option with field, variable and combo box type objects.

```4d
 OBJECT SET FONT([Users]Password;"%password")
```

## See also 

[Font file](../commands/font-file)  
[FONT LIST](../commands/font-list)  
[OBJECT Get font](../commands/object-get-font)  
[OBJECT SET FONT SIZE](../commands/object-set-font-size)  
[OBJECT SET FONT STYLE](../commands/object-set-font-style)  
*Programming Notes*  

## Properties

|  |  |
| --- | --- |
| Command number | 164 |
| Thread safe | no |


