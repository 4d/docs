---
id: object-set-text-orientation
title: OBJECT SET TEXT ORIENTATION
slug: /commands/object-set-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Syntax-->**OBJECT SET TEXT ORIENTATION** ( {* ;} *object* ; *orientation* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| orientation | Integer | &#8594;  | Value of object orientation |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Summary-->The **OBJECT SET TEXT ORIENTATION** command modifies the orientation of the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

The "Orientation" property, available in the Form editor, performs permanent rotations of text areas in your forms. Unlike this property, the **OBJECT SET TEXT ORIENTATION** command applies the rotation to the contents of the object, but not to the object itself. For more information, refer to the *Design Reference* manual.

 Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).   
Only static text as well as non-enterable variables and fields can be rotated. If you apply this command to an object that does not support text orientation, the command does nothing. 

In the *orientation* parameter, you pass the absolute orientation that you want to assign to the object. You must use one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant              | Type    | Value | Comment                                      |
| --------------------- | ------- | ----- | -------------------------------------------- |
| Orientation 0°        | Integer | 0     | No rotation (default value)                  |
| Orientation 180°      | Integer | 180   | Orientation of text to 180° clockwise        |
| Orientation 90° left  | Integer | 270   | Orientation of text to 90° counter-clockwise |
| Orientation 90° right | Integer | 90    | Orientation of text to 90° clockwise         |

**Note:** Only angles corresponding to these values are supported. If you pass any other value, it will be ignored. 

#### Example 

You want to apply an orientation of 270° to a variable in your form: 

```4d
 OBJECT SET ENTERABLE(*;"myVar";False)
  // mandatory if variable is enterable
 OBJECT SET TEXT ORIENTATION(*;"myVar";Orientation 90° left)
```

#### See also 

[OBJECT Get text orientation](object-get-text-orientation.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1284 |
| Thread safe | &check; |
| Forbidden on the server ||


