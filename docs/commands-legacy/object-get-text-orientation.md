---
id: object-get-text-orientation
title: OBJECT Get text orientation
slug: /commands/object-get-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get text orientation.Syntax-->**OBJECT Get text orientation** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get text orientation.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &srarr; | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &srarr; | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| Function result | Longint | &larr; | Angle of text rotation |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get text orientation.Summary-->The **OBJECT Get text orientation** command returns the current orientation value applied to the text of the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

You can set the "Orientation" option for an object in Design mode using the Property List, or using the [OBJECT SET TEXT ORIENTATION](object-set-text-orientation.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

The value returns corresponds to one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant              | Type    | Value | Comment                                      |
| --------------------- | ------- | ----- | -------------------------------------------- |
| Orientation 0°        | Longint | 0     | No rotation (default value)                  |
| Orientation 180°      | Longint | 180   | Orientation of text to 180° clockwise        |
| Orientation 90° left  | Longint | 270   | Orientation of text to 90° counter-clockwise |
| Orientation 90° right | Longint | 90    | Orientation of text to 90° clockwise         |

#### Example 

Given the following object (where a "90° left" orientation was applied in the Form editor):

![](../assets/en/commands/pict1209704.fr.png)

When the form is executed, if you call the following statement:

```4d
 OBJECT SET TEXT ORIENTATION(*;"myText";Orientation 180°)
```

... then the object appears as follows:

![](../assets/en/commands/pict1209706.fr.png)

```4d
 $vOrt:=OBJECT Get text orientation(*;"myText") //$vOrt=180
```

#### See also 

[OBJECT SET TEXT ORIENTATION](object-set-text-orientation.md)  