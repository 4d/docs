---
id: st-get-options
title: ST GET OPTIONS
slug: /commands/st-get-options
displayed_sidebar: docs
---

<!--REF #_command_.ST GET OPTIONS.Syntax-->**ST GET OPTIONS** ( {* ;} *object* ; *option* ; *value* {; *option2* ; *value2* ; ... ; *optionN* ; *valueN*} )<!-- END REF-->
<!--REF #_command_.ST GET OPTIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| option | Integer | &#8594;  | Option to get |
| value | Integer | &#8592; | Current value of option |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST GET OPTIONS.Summary-->The **ST GET OPTIONS** command gets the current value of one or more operating options for the styled text field or variable designated by the *object* parameter.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). During execution, if the object has the focus, the command returns the information of the object being edited; if the object does not have the focus, the command returns the information of the object’s data source (variable or field).  
If you omit the *\** parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string. During execution, the command returns the information of the variable or field.

Pass the code of the option to get in the *option* parameter. The command returns the current value of this option in *value*. For both these parameters, you can use the following constants, found in the "*Multistyle Text*" theme:

| Constant                    | Type    | Value | Comment                                                      |
| --------------------------- | ------- | ----- | ------------------------------------------------------------ |
| ST Expressions display mode | Integer | 1     | The *value* parameter can contain ST Values or ST References |
| ST References               | Integer | 1     | Display source strings of expressions                        |
| ST Values                   | Integer | 0     | Display computed values of expressions                       |

#### See also 

[ST SET OPTIONS](st-set-options.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1290 |
| Thread safe | &check; |
| Forbidden on the server ||


