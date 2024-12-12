---
id: object-get-corner-radius
title: OBJECT Get corner radius
slug: /commands/object-get-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get corner radius.Syntax-->**OBJECT Get corner radius** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get corner radius.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or Field or variable (if * is omitted) |
| Function result | Integer | &#8592; | Radius of rounded corners (in pixels) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT Get corner radius.Summary-->The **OBJECT Get corner radius** command returns the current value of the corner radius for the object designated by the *object* parameter.<!-- END REF--> This value may have been set at the form level using the *Corner radius property* or for the current process using the [OBJECT SET CORNER RADIUS](object-set-corner-radius.md) command.

The **OBJECT Get corner radius** command can be used with the following form objects:

* rectangles
* inputs (4D projects only)
* text areas (4D projects only)

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

This command returns the radius of rounded corners in pixels.

**Note:** The command returns 0 when applied to an object that does not support the corner radius property.

#### Example 

The following code could be added to a button method:

```4d
 var $radius : Integer
 $radius:=OBJECT Get corner radius(*;"GreenRect") //get current value
 OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1) //increase radius
  // Maximum value will be handled automatically:
  // when reached, the button no longer has any effect
```

#### See also 

[OBJECT SET CORNER RADIUS](object-set-corner-radius.md)  