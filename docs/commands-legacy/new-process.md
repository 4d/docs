---
id: new-process
title: New process
slug: /commands/new-process
displayed_sidebar: docs
---

<!--REF #_command_.New process.Syntax-->**New process** ( *method* ; *stack* {; *name* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.New process.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| method | Text | &#8594;  | Method to be executed within the process |
| stack | Integer | &#8594;  | Stack size in bytes |
| name | Text | &#8594;  | Name of the process created |
| param | Expression | &#8594;  | Parameter(s) to the method |
| * | Operator | &#8594;  | Unique process |
| Function result | Integer | &#8592; | Process number for newly created process or already executing process |

<!-- END REF-->

#### Description 

<!--REF #_command_.New process.Summary-->The **New process** command starts a new process (on the same machine) and returns the process number for that process.<!-- END REF-->

If the process could not be created (for example, if there is not enough memory), **New process** returns zero (0) and an error is generated. You can catch this error using an error-handling method installed using [ON ERR CALL](on-err-call.md).

##### Process Method 

 In *method*, you pass the name of the process method for the new process. After 4D has set up the context for the new process, it starts executing this method, which therefore becomes the process method.

If the execution context supports preemptive mode and if *method* is declared "thread-safe", the new 4D process will be executed in a preemptive thread when the application will run in compiled mode. For more information, please reter to the *Preemptive 4D processes* page. 

##### Process Stack 

The *stack* parameter allows you to indicate the amount of memory allocated for the stack of the process. This is the space in memory used to “pile up” method calls, local variables, parameters in subroutines, and stacked records.

* Pass 0 in *stack* to use a default stack size, suitable for most applications (recommended setting).
* In certain particular cases, you may want to set a custom value. It must be expressed in bytes. This setting should be used with precaution, it depends on the process chain call and the platform.

**Note:** The stack is NOT the total memory for the process. Processes share memory for records, interprocess variables, and so on. A process also uses extra memory for storing its process variables. The stack contains various items of 4D information; the amount of information kept on the stack depends on the number of nested method calls the process will employ, the number of forms that it will open before closing them and the number and size of local variables used in each nested method call.

##### Process Name 

 You pass the name of the new process in *name*. This name will appear in the list of processes of the Runtime Explorer and will be returned by the [Process info](../commands/process-info.md) command when applied to this new process. You can omit this parameter; if you do so, the name of the process will be the empty string. You can make a process local in scope by prefixing its name with the dollar sign (*$*). 

**Important:** Remember that local processes should not access data in Client/Server. For more information, please refer to the *Global and Local Processes* section. 

##### Parameters to Process Method 

 You can pass parameters to the process method using one or more *param* parameters. You pass parameters in the same way as you would pass them to a subroutine (see the section). Upon starting execution in the context of the new process, the process method receives the parameters values in *$1*, *$2*, etc. Remember that arrays cannot be passed as parameters to a method. Furthermore, these additional considerations are to be taken into account in the context of the **New process** command:

* pointers to tables or fields are allowed.
* pointers to variables, particularly local and process variables, are not recommended since these variables may be undefined at the time when they are being accessed by the process method.
* standard object or collection type parameters are passed **by copy**, *i.e.* 4D will create a copy of the object or the collection in the destination process instead of a reference. If you want to pass an object or a collection parameter **by reference**, you must use a shared object or collection (see *Shared objects and shared collections*).

**Note:** If you pass parameters to the process method, you must pass the *name* parameter; it cannot be omitted in this case.

##### Optional \* Parameter 

Specifying this last parameter tells 4D to first check whether or not a process with the name you passed in *name* is already running. If it is, 4D does not start a new process and returns the process number of the process with that name.

#### Example 

Given the following project method:

```4d
  // ADD CUSTOMERS
 SET MENU BAR(1)
 Repeat
    ADD RECORD([Customers];*)
 Until(OK=0)
```

If you attach this project method to a custom menu item **Menu Bar Editor** window whose **Start a New Process** property is set, 4D will automatically start a new process running that method. The call [SET MENU BAR](set-menu-bar.md)(1) adds a menu bar to the new process. In the absence of any window (that you could open with [Open window](open-window.md)), the call to [ADD RECORD](add-record.md) will automatically open one.

To be able to start this Add Customers process when you click on a button in a custom control panel, you can write:

```4d
  // bAddCustomers button object method
 $vlProcessID:=New process("Add Customers";0;"Adding Customers")
```

The button does the same thing as the custom menu item.

While choosing the menu item or clicking the button, if you want to start the process (if it does not exist) or bring it to the front (if it is already running), you can create the method START ADD CUSTOMERS:

```4d
  // START ADD CUSTOMERS
 $vlProcessID:=New process("Add Customers";0;"Adding Customers";*)
 If($vlProcessID#0)
    BRING TO FRONT($vlProcessID)
 End if
```

The object method of the *bAddCustomers* becomes:

```4d
  // bAddCustomers button object method
 START ADD CUSTOMERS
```

In the Menu Bar editor, you replace the method ADD CUSTOMERS with the method START ADD CUSTOMERS, and you deselect the **Start a New Process** property for the menu item.

#### See also 

[Execute on server](execute-on-server.md)  
*Preemptive 4D processes*  
*Processes*  

#### Properties
|  |  |
| --- | --- |
| Command number | 317 |
| Thread safe | &check; |
| Forbidden on the server ||


