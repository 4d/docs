---
id: set-process-variable
title: SET PROCESS VARIABLE
slug: /commands/set-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET PROCESS VARIABLE.Syntax-->**SET PROCESS VARIABLE** ( *process* ; *dstVar* ; *expr* {; *dstVar2* ; *expr2* ; ... ; *dstVarN* ; *exprN*} )<!-- END REF-->
<!--REF #_command_.SET PROCESS VARIABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Destination process number |
| dstVar | Variable | &#8594;  | Destination variable |
| expr | Variable | &#8594;  | Source expression (or source variable) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET PROCESS VARIABLE.Summary-->The **SET PROCESS VARIABLE** command writes the *dstVar* process variables (*dstVar2*, etc.) of the destination process whose number is passed in *process* using the values passed in *expr1* (*expr2*, etc.).<!-- END REF-->

Each destination variable can be a variable or an array element. However, see the restrictions listed later in this section.

For each couple of *dstVar;expr* variables, the expression must be of a type compatible with the destination variable, otherwise you may end up with a meaningless value in the variable. In interpreted mode, if a destination variable does not exist, it is created and assigned with the expression.

The current process “pokes” the variables of the destination process—the destination process is not warned in any way that another process is writing the instance of its variables.

**4D Server:** Using 4D Client, you can write variables in a destination process executed on the server machine (stored procedure). To do so, put a minus sign before the process ID number in the *process* parameter.  
“Intermachine” process communication, provided by the commands **SET PROCESS VARIABLE**, [GET PROCESS VARIABLE](get-process-variable.md) and [VARIABLE TO VARIABLE](variable-to-variable.md), is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure. 

**Tip:** If you do not know the ID number of the server process, you can still use the interprocess variables of the server. To do so, use any negative value in *process*. In other words, it is not necessary to know the ID number of the process to be able to use the **SET PROCESS VARIABLE** command with the interprocess variables of the server. This is useful when a stored procedure is launched using the [On Server Startup database method](on-server-startup-database-method.md). As client machines do not automatically know the ID number of that process, any negative value can be passed in the *process* parameter.

##### Restrictions 

SET PROCESS VARIABLE does not accept local variables as destination variables. 

SET PROCESS VARIABLE accepts any type of destination process or interprocess variable, except:

* Pointers
* Arrays of any type. To write an array as a whole from one process to another one, use the command [VARIABLE TO VARIABLE](variable-to-variable.md). Note, however, that SET PROCESS VARIABLE allows you to write the element of an array.
* You cannot write the element of an array of pointers or the element of a two-dimensional array.

The destination process must be a user process; it cannot be a kernel process. If the destination process does not exist, an error is generated. You can catch this error using an error-handling method installed with [ON ERR CALL](on-err-call.md).

#### Example 1 

This line of code sets (to the empty string) the text variable *vtCurStatus* of the process whose number is *$vlProcess*:

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;"")
```

#### Example 2 

This line of code sets the text variable *vtCurStatus* of the process whose number is *$vlProcess* to the value of the variable *$vtInfo* from the executing method in the current process:

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)
```

#### Example 3 

This line of code sets the text variable *vtCurStatus* of the process whose number is *$vlProcess* to the value of the same variable in the current process:

```4d
 SET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)
```

**Note:** The first *vtCurStatus* designates the instance of the variable in the destination process. The second *vtCurStatus* designates the instance of the variable in the current process.

#### Example 4 

This example sequentially sets to uppercase all elements of a process array from the process indicated by *$vlProcess*:

```4d
 GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)
 For($vlElem;1;$vlSize)
    GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)
    SET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};Uppercase($vtElem))
 End for
```

**Note:** In this example, the process variable *vl\_IPCom\_Array* contains the size of the array *at\_IPCom\_Array* and must be maintained by the source/destination process.

#### Example 5 

This example writes the destination process instance of the variables *v1*, *v2* and *v3* using the instance of the same variables from the current process:

```4d
 SET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)
```

#### See also 

[GET PROCESS VARIABLE](get-process-variable.md)  
[POST OUTSIDE CALL](post-outside-call.md)  
*Processes*  
[VARIABLE TO VARIABLE](variable-to-variable.md)  