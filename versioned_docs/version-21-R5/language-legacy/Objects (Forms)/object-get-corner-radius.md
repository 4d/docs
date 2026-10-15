---
id: object-get-corner-radius
title: OBJECT Get corner radius
slug: /commands/object-get-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get corner radius.Syntax-->**OBJECT Get corner radius** ( * ; *object* : Text ) : Integer<br/>**OBJECT Get corner radius** ( *object* : Variable, Field ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get corner radius.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Integer | &#8592; | Radius of rounded corners (in pixels) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R5|Support for custom-styled buttons, radio buttons and check boxes |
|19 R7|Modified|
|14 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT Get corner radius.Summary-->The **OBJECT Get corner radius** command returns the current value of the corner radius for the object designated by the *object* parameter.<!-- END REF--> This value may have been set at the form level using the [**Corner radius property**](../../FormObjects/properties_BackgroundAndBorder.md#corner-radius) or for the current process using the [OBJECT SET CORNER RADIUS](../commands/object-set-corner-radius) command.

The **OBJECT Get corner radius** command can be used with the following form objects:

- [rectangles](../../FormObjects/shapes_overview.md#rectangle)
- [inputs](../../FormObjects/input_overview.md) (4D projects only)
- [text areas](../../FormObjects/text.md) (4D projects only)
- custom-styled [buttons](../../FormObjects/button_overview.md#custom) with ["custom" Border Line Style](#border-line-style), custom-styled [radio buttons](../../FormObjects/radio_overview.md#custom) and custom-styled [check boxes](../../FormObjects/checkbox_overview.md#custom) (4D projects only)

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

This command returns the radius of rounded corners in pixels.

**Note:** The command returns 0 when applied to an object that does not support the corner radius property.

## Example 

The following code could be added to a button method:

```4d
 var $radius : Integer
 $radius:=OBJECT Get corner radius(*;"GreenRect") //get current value
 OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1) //increase radius
  // Maximum value will be handled automatically:
  // when reached, the button no longer has any effect
```

## See also 

[OBJECT SET CORNER RADIUS](../commands/object-set-corner-radius)  

## Properties

|  |  |
| --- | --- |
| Command number | 1324 |
| Thread safe | no |


