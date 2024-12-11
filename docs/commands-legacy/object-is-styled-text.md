---
id: object-is-styled-text
title: OBJECT Is styled text
slug: /commands/object-is-styled-text
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Is styled text.Syntax-->**OBJECT Is styled text** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Is styled text.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| Function result | Boolean | &#8592; | True if object is a multi-style text, False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Is styled text.Summary-->The **OBJECT Is styled text** command returns **True** when the "Multi-style" option is checked for the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

The "Multi-style" option lets you use rich test areas including individual style variations. For more information, refer to *Multi-style (Rich text area)* in the *Design Reference* manual. 

Multi-style objects can be managed by programming using the commands of the "*Styled Text*" theme. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only). 

**Note:** The **OBJECT Is styled text** command returns **True** when it is applied to a 4D Write Pro area.

#### Example 

A form contains a field represented by two different objects; one of the objects has the "Multi-style" property checked, and the other one does not. You can write: 

```4d
 $Style:=OBJECT Is styled text(*;"Styled_text")
  // returns True ("Multi-style" option is checked)
 
 $Style:=OBJECT Is styled text(*;"Plain_text")
  // returns False ("Multi-style" option is not checked)
```

#### See also 

*Styled Text*  

#### Properties
|  |  |
| --- | --- |
| Command number | 1261 |
| Thread safe | &check; |
| Forbidden on the server ||


