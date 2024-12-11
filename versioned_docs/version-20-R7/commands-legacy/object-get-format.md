---
id: object-get-format
title: OBJECT Get format
slug: /commands/object-get-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get format.Syntax-->**OBJECT Get format** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get format.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a field or a variable |
| object | any | &#8594;  | Object name (if * is specified) or Field or variable (if * is omitted) |
| Function result | Text | &#8592; | Object display format |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get format.Summary-->The **OBJECT Get format** command returns the current display format applied to the object specified in the *object* parameter.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (in this case, pass a string in *object*). If you do not pass this parameter, you indicate that the *object* parameter is a field or variable. In this case, you do not pass a string, but a field or variable reference.

This command returns the current display format of the object; in other words, the format as defined in the Design environment or using the [OBJECT SET FORMAT](object-set-format.md) command. **OBJECT Get format** works with all types of form objects (fields or variables) that accept a display format: Boolean, date, time, picture, string, number, as well as button grids, dials, thermometers, rulers, picture pop-up menus, picture buttons, 3D buttons, and list box headers. For more information on the display formats of these objects, refer to the documentation for the [OBJECT SET FORMAT](object-set-format.md) command.

**Note:** If you apply the command to a set of objects, the form of the last object selected is returned.

When the **OBJECT Get format** command is applied to objects whose format has been set using a longint constant (date, time or picture objects), the string returned corresponds to the character code of the constant. To obtain the value of the constant, simply apply the [Character code](character-code.md) function to the result (see below).

#### Example 1 

This example allows you to obtain the value of the format constant applied to the picture variable named “myphoto”: 

```4d
 var $format : Text
 OBJECT SET FORMAT(*;"myphoto";Char(On background))
  //Apply background format (value = 3)
 $format:=OBJECT Get format(*;"myphoto")
 ALERT("Format number:"+String(Character code($format)))
  //Display value "3"
```

#### Example 2 

This example allows you to obtain the format applied to the Boolean field \[Members\]Marital\_status: 

```4d
 var $format : Text
 $format:=OBJECT Get format([Members]Marital_status)
 ALERT($format) //Display format, for example "Married;Single"
```

#### Example 3 

Customized formats are returned untouched:

```4d
 var $format : Text
 OBJECT SET FORMAT(*;"timeinput";":m") //":" is required for single-char patterns
 $format:=OBJECT Get format(*;"timeinput") // ":m"
```

#### See also 

[OBJECT SET FORMAT](object-set-format.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 894 |
| Thread safe | &check; |
| Forbidden on the server ||


