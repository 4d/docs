---
id: get-process-variable
title: GET PROCESS VARIABLE
slug: /commands/get-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.GET PROCESS VARIABLE.Syntax-->**GET PROCESS VARIABLE** ( *process* ; *srcVar* ; *dstVar* {; *srcVar2* ; *dstVar2* ; ... ; *srcVarN* ; *dstVarN*} )<!-- END REF-->
<!--REF #_command_.GET PROCESS VARIABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Source process number |
| srcVar | Variable | &#8594;  | Source variable |
| dstVar | Variable | &#8592; | Destination variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PROCESS VARIABLE.Summary-->The **GET PROCESS VARIABLE** command reads the *srcVar* process variables (*srvVar2*, etc.) from the source process whose number is passed in *process*, and returns their current values in the *dstVar* variables ( *dstVar2*, etc.) of the current process.<!-- END REF-->

Each source variable can be a variable, an array or an array element. However, see the restrictions listed later in this section.

In each couple of *srcVar;dstVar* variables, the two variables must be of compatible types, otherwise the values you obtain may be meaningless.

The current process “peeks” the variables from the source process—the source process is not warned in any way that another process is reading the instance of its variables.

**4D Server:** Using 4D Client, you can read variables in a destination process executed on the server machine (stored procedure). To do so, put a minus sign before the process ID number in the *process* parameter.  
“Intermachine” process communication, provided by the commands **GET PROCESS VARIABLE**, [SET PROCESS VARIABLE](set-process-variable.md) and [VARIABLE TO VARIABLE](variable-to-variable.md), is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure. 

**Tip:** If you do not know the ID number of the server process, you can still use the interprocess variables of the server. To do so, you can use any negative value in *process*. In other words, it is not necessary to know the ID number of the process to be able to use the **GET PROCESS VARIABLE** command with the interprocess variables of the server. This is useful when a stored procedure is launched using the [On Server Startup database method](on-server-startup-database-method.md). As clients machines do not automatically know the ID number of that process, any negative value can be passed in the *process* parameter.

##### Restrictions 

**GET PROCESS VARIABLE** does not accept local variables as source variables. 

On the other hand, the destination variables can be interprocess, process or local variables. You “receive” the values only into variables, not into fields.

**GET PROCESS VARIABLE** accepts any type of source process or interprocess variable, except:

* Pointers
* Array of pointers
* Two-dimensional arrays

The source process must be a user process; it cannot be a kernel process. If the source process does not exist, this command has no effect.

**Note:** In interpreted mode, if a source variable does not exist, the undefined value is returned. You can detect this by using the [Type](type.md) function to test the corresponding destination variable.

#### Example 1 

This line of code reads the value of the text variable *vtCurStatus* from the process whose number is *$vlProcess*. It returns the value in the process variable *vtInfo* of the current process:

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtInfo)
```

#### Example 2 

This line of code does the same thing, but returns the value in the local variable *$vtInfo* for the method executing in the current process:

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)
```

#### Example 3 

This line of code does the same thing, but returns the value in the variable *vtCurStatus* of the current process:

```4d
 GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)
```

**Note:** The first *vtCurStatus* designates the instance of the variable in the source process The second *vtCurStatus* designates the instance of the variable in the current process.

#### Example 4 

This example sequentially reads the elements of a process array from the process indicated by *$vlProcess*:

```4d
 GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)
 For($vlElem;1;$vlSize)
    GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)
  // Do something with $vtElem
 End for
```

**Note:** In this example, the process variable *vl\_IPCom\_Array* contains the size of the array *at\_IPCom\_Array*, and must be maintained by the source process.

#### Example 5 

This example does the same thing as the previous one, but reads the array as a whole, instead of reading the elements sequentially:

```4d
 GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
  // Do something with $anArray{$vlElem}
 End for
```

#### Example 6 

This example reads the source process instances of the variables *v1*,*v2*,*v3* and returns their values in the instance of the same variables for the current process:

```4d
 GET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)
```

#### See also 

*Drag and Drop*  
[POST OUTSIDE CALL](post-outside-call.md)  
*Processes*  
[SET PROCESS VARIABLE](set-process-variable.md)  
[VARIABLE TO VARIABLE](variable-to-variable.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 371 |
| Thread safe | &check; |


