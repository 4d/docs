---
id: c-collection
title: C_COLLECTION
slug: /commands-legacy/c-collection
displayed_sidebar: docs
---

<!--REF #_command_.C_COLLECTION.Syntax-->**C_COLLECTION** ( {*method* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_COLLECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| method | Method | &#x1F852; | Name of method |
| variable | Variable | &#x1F852; | Name(s) of variable(s) or ${...} parameter(s) to declare |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_COLLECTION.Summary-->The **C\_COLLECTION** command assigns the [Collection](# "Array of object property values") type to all the variables that are specified.<!-- END REF-->

The [Collection](# "Array of object property values") type is supported by the 4D language starting with v16 R4\. Variables of this type contain a sorted list of attribute values of any type, stored as a JSON array. 

You use the first syntax of the command (when the *method* parameter is not passed) to declare and type a local, process, or interprocess variable. This syntax can be used in interpreted databases.

You use the second syntax of the command (when the *method* parameter is passed) to declare the method’s result and/or parameters ($0, $1, $2, etc.) to the compiler in advance. You must use this syntax if you want to skip the variable typing phase in order to save time when the database is compiled.

**WARNING:** You cannot execute the second syntax in interpreted mode. For this reason, when you use this syntax, you have to store it in a method (whose name must begin with "COMPILER") that is not executed in interpreted mode.

##### Advanced Use 

The syntax **C\_COLLECTION**(${...}) allows you to declare a variable number of parameters of the same type, under the condition that these are the last parameters for the method. For example, the declaration **C\_COLLECTION**(${5}) tells 4D and the compiler that starting with the fifth parameter, the method can receive a variable number of parameters of that type. For more information, see the *Parameter indirection* section.

#### Example 

You want to declare a collection process variable and to fill it with a new collection:

```4d
 C_COLLECTION(myCol)
  //here myCol value is null
 myCol:=New collection("Green";100;"Orange";200;"Red";300)
  //myCol= ["Green",100,"Orange",200,"Red",300]
```

#### See also 

*Collections*  
[New collection](new-collection.md)  