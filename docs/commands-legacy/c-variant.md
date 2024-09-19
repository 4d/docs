---
id: c-variant
title: C_VARIANT
slug: /commands-legacy/c-variant
displayed_sidebar: docs
---

<!--REF #_command_.C_VARIANT.Syntax-->**C_VARIANT** ( {*method* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_VARIANT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| method | Method | &#x1F852; | Optional name of method |
| variable | Variable | &#x1F852; | Name of variable(s) to declare |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_VARIANT.Summary-->The **C\_VARIANT** casts each specified variable as a Variant variable.<!-- END REF--> A variant variable can contain any value of the following 4D data types: BLOB, Boolean, Collection, Date, Longint, Object, Picture, Pointer, Real, Text, Time, Null, Undefined.

The first form of the command, in which the optional *method* parameter is NOT passed, is used to declare and type any process, interprocess or local variable.  

**Note:** This form can be used in both interpreted and compiled databases.  

The second form of the command, in which the optional *method* parameter IS passed, is used to predeclare to the compiler the result and/or the parameters ($0, $1, $2 etc) for a method. Use this form of the command in order to skip the typing of variables phase while compiling a database, saving compilation time.

**WARNING**: Using a variant rather than a fixed type can reduce performance.

##### Advanced Use 

The syntax **C\_VARIANT**(${...}) lets you declare a variable number of parameters of the same type, if they are the last parameters for the method. For example, the declaration **C\_VARIANT**(${5}) tells 4D and the compiler that beginning with the fifth parameter, the method can receive a variable number of parameters of that type. For more information, see the *Parameter indirection* section.

#### Example 

To verify the type and value of a variant variable:

```4d
 C_VARIANT($var)
 C_LONGINT($vt)
 $var:="test"
 $vt:=Type($var) //$vt="Is variant"
 $vt:=Value type($var) //$vt="Is text"
```
