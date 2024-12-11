---
id: variable-to-variable
title: VARIABLE TO VARIABLE
slug: /commands/variable-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO VARIABLE.Syntax-->**VARIABLE TO VARIABLE** ( *process* ; *dstVar* ; *srcVar* {; *dstVar2* ; *srcVar2* ; ... ; *dstVarN* ; *srcVarN*} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO VARIABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Destination process number |
| dstVar | Variable | &#8594;  | Destination variable |
| srcVar | Variable | &#8594;  | Source variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.VARIABLE TO VARIABLE.Summary-->The **VARIABLE TO VARIABLE** command writes the *dstVar* process variables (*dstVar2*, etc.) of the destination process whose number is passed in *process* using the values of the variables *srcVar1* *srcVar2*, etc.<!-- END REF-->

**VARIABLE TO VARIABLE** has the same action as [SET PROCESS VARIABLE](set-process-variable.md), with the following differences: 

* You pass source expressions to [SET PROCESS VARIABLE](set-process-variable.md), and therefore cannot pass an array as a whole. You must exclusively pass source variables to **VARIABLE TO VARIABLE**, and therefore can pass an array as a whole.
* Each destination variable of [SET PROCESS VARIABLE](set-process-variable.md) can be a variable or an array element, but cannot be an array as a whole. Each destination variable of **VARIABLE TO VARIABLE** can be a variable or an array or an array element.

**4D Server:** “Intermachine” process communication, provided by the commands [GET PROCESS VARIABLE](get-process-variable.md), [SET PROCESS VARIABLE](set-process-variable.md) and **VARIABLE TO VARIABLE**, is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure. 

For each couple of *dstVar;expr* variables, the source variable must be of a type compatible with the destination variable, otherwise you may end up with a meaningless value in the variable. In interpreted mode, if a destination variable does not exist, it is created and assigned with the type and value of the source variable.

The current process “pokes” the variables of the destination process—the destination process is not warned in any way that another process is writing the instance of its variables.

##### Restrictions 

**VARIABLE TO VARIABLE** does not accept local variables as destination variables. 

**VARIABLE TO VARIABLE** accepts any type of destination process or interprocess variables except:

* Pointers
* Array of pointers
* Two-dimensional arrays

The destination process must be a user process; it cannot be a kernel process. If the destination process does not exist, an error is generated. You can catch this error using an error-handling method installed with [ON ERR CALL](on-err-call.md).

#### Example 

The following example reads a process array from the process indicated by *$vlProcess*, sequentially sets the elements to uppercase and then writes back the array as a whole:

```4d
 GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
    $anArray{$vlElem}:=Uppercase($anArray{$vlElem})
 End for
 VARIABLE TO VARIABLE($vlProcess;at_IPCom_Array;$anArray)
```

#### See also 

[GET PROCESS VARIABLE](get-process-variable.md)  
*Processes*  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 635 |
| Thread safe | &check; |


