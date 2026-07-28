---
id: object-set-font-style
title: OBJECT SET FONT STYLE
slug: /commands/object-set-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT STYLE.Syntax-->**OBJECT SET FONT STYLE** ( * ; *object* : Text ; *styles* : Integer )<br/>**OBJECT SET FONT STYLE** ( *object* : Variable, Field ; *styles* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT STYLE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| styles | Integer | &#8594;  | Font style |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Renamed|
|6|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET FONT STYLE.Summary-->**OBJECT SET FONT STYLE** sets the form objects specified by *object* to be displayed using the font style you pass in *styles*.<!-- END REF-->

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the *Object Properties* section.

You pass in *styles* a sum of the constants describing your font style selection. The following are the predefined constants provided by 4D:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Bold      | Integer | 1     |
| Italic    | Integer | 2     |
| Plain     | Integer | 0     |
| Underline | Integer | 4     |

  
## Example 1 

This example sets the font style for a button named *bAddNew*. The font style is set to bold italic: 

```4d
 OBJECT SET FONT STYLE(bAddNew;Bold+Italic)
```

## Example 2 

This example sets the font style to Plain for all form objects with names starting with “vt”: 

```4d
 OBJECT SET FONT STYLE(*;"vt@";Plain)
```

## See also 

[OBJECT Get font style](../commands/object-get-font-style)  
[OBJECT SET FONT](../commands/object-set-font)  
[OBJECT SET FONT SIZE](../commands/object-set-font-size)  
*Programming Notes*  
[SET LIST ITEM PROPERTIES](../commands/set-list-item-properties)  

## Properties

|  |  |
| --- | --- |
| Command number | 166 |
| Thread safe | no |


