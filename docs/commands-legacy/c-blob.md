---
id: c-blob
title: C_BLOB
slug: /commands/c-blob
displayed_sidebar: docs
---

<!--REF #_command_.C_BLOB.Syntax-->**C_BLOB** ( {*method* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| method | Method | &#x1F852; | Optional name of method |
| variable | Variable | &#x1F852; | Name of variable(s) to declare |

<!-- END REF-->

#### Description 

<!--REF #_command_.C_BLOB.Summary-->**C\_BLOB** casts each specified variable as a BLOB variable.<!-- END REF-->

The first form of the command, in which the optional *method* parameter is NOT passed, is used to declare and type any process, interprocess, or local variable. 

**Note:** This form can be used in interpreted databases.

The second form of the command, in which the optional *method* parameter IS passed, is used to predeclare to the compiler the result and/or the parameters ($0, $1, $2 etc) for a method. Use this form of the command in order to skip the Typing variables phase while compiling a database, saving compilation time.

**WARNING:** The second form cannot be executed in interpreted mode. For this reason, if you are using this syntax, keep it in a method that is not executed in interpreted mode. The name of this method must start with "COMPILER."

##### Advanced Use 

The syntax **C\_BLOB**(${...}) allows you to declare a variable number of parameters of the same type, under the condition that these are the last parameters for the method. For example, the declaration **C\_BLOB**(${5}) tells 4D and the compiler that starting with the fifth parameter, the method can receive a variable number of parameters of that type. For more information, see the *Parameter indirection* section.

#### Examples 

See examples in the *Compiler Commands* section.

#### See also 

*Compiler Commands*  
[Count parameters](count-parameters.md)  