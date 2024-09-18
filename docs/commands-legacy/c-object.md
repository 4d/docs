---
id: c-object
title: C_OBJECT
slug: /commands-legacy/c-object
displayed_sidebar: docs
---

<!--REF #_command_.C_OBJECT.Syntax-->**C_OBJECT** ( {*method* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_OBJECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| method | Method | &rarr; | Name of method |
| variable | Variable | &rarr; | Name(s) of variable(s) or parameter(s) ${...} to declare |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_OBJECT.Summary-->The **C\_OBJECT** command assigns the [Object](# "Data structured as a native 4D object") type to all the variables that are specified.<!-- END REF-->

The [Object](# "Data structured as a native 4D object") type is supported by the 4D language starting with v14\. Objects of this type are managed by the commands of the *Objects (Language)* theme or through object notation (see *Using object notation*). 

You use the first syntax of the command (when the *method* parameter is not passed) to declare and type a process, interprocess or local variable. This syntax can be used in interpreted databases.

You use the second syntax of the command (when the *method* parameter is passed) to declare the method’s result and/or parameters ($0, $1, $2, etc.) to the compiler in advance. You must use this syntax if you want to skip the variable typing phase in order to save time when the database is compiled.

**WARNING:** You cannot execute the second syntax in interpreted mode. For this reason, when you use this syntax, you should store it in a method (whose name must begin with "COMPILER") that is not executed in interpreted mode.

**Important:** The **C\_OBJECT** command does not create anobject named *variable*. If you want to access the properties of the object itself using object notation, you must first initialize it using the [New object](new-object.md) command, otherwise a syntax error is returned (see example). 

##### Advanced Use 

The syntax **C\_OBJECT**(${...}) allows you to declare a variable number of parameters of the same type, under the condition that these are the last parameters for the method. For example, the declaration **C\_OBJECT**(${5}) tells 4D and the compiler that starting with the fifth parameter, the method can receive a variable number of parameters of that type. For more information, see the [Parameter indirection](/4Dv20R6/4D/20-R6/Typing-Guide.300-6958559.en.html#2064009) section.

#### Example 

```4d
 C_OBJECT($obj) //The $obj variable is declared but the $obj object does not exist
 $obj:=New object //The $obj object is initialized
 $obj.prop:=42 //...and its properties can be accessed
```

#### See also 

[ARRAY OBJECT](array-object.md)  
*Objects (Language)*  