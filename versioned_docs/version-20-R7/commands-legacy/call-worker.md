---
id: call-worker
title: CALL WORKER
slug: /commands/call-worker
displayed_sidebar: docs
---

<!--REF #_command_.CALL WORKER.Syntax-->**CALL WORKER** ( *process* ; *formula* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.CALL WORKER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Text, Integer | &#8594;  | Name or number of worker process |
| formula | Object, Text | &#8594;  | Formula object or Name of project method |
| param | Expression | &#8594;  | Parameter(s) passed to formula |

<!-- END REF-->

#### Description 

<!--REF #_command_.CALL WORKER.Summary-->The **CALL WORKER** command creates or calls the worker process whose name or ID you passed in *process*, and requests the execution of the code designated by *formula* in its context with the optional *param* parameter(s).<!-- END REF-->

The **CALL WORKER** command encapsulates the *param* parameters into a message and posts it in the worker's message box. For more information on worker processes, please refer to the *About workers* section.

In the *process* parameter, you can specify the worker using its process name or its process number:

* If you pass the number of a process that does not exist, or if the process specified was not created by **CALL WORKER** nor by 4D itself (such as the main application process), **CALL WORKER** does nothing.
* If you pass the name of a process that does not exist, a new worker process is created.

**Note:** The **main process**, created by 4D for the user interface and the application mode when a database is opened, is a worker process and can be called by **CALL WORKER**. However, since its name can vary depending on the 4D language, it is preferable to designate this process using its number (always 1) when you use **CALL WORKER**.

The worker process appears in the list of processes of the Runtime Explorer and is returned by the [Process info](../commands/process-info.md) command when applied to this process.

In *formula*, you designate the 4D code to execute in the context of the worker process. You can pass either:

* a **formula object** (see *Formula Objects*). Formula objects can encapsulate any executable expressions, including functions and project methods;
* a **string** containing the name of a project method. You can pass an empty string; in this case, the worker executes the method that was originally used to start its process, if any (i.e., the startup method of the worker).  
**Note:** It is not possible to pass an empty string in *formula* when the command calls the main process (process number 1) since it was not started using a project method. As a result, **CALL WORKER* (1;"")* does nothing.

You can also pass parameters to the *formula* using one or more optional *param* parameters. You can use [sequential parameters](https://developer.4d.com/docs/Concepts/parameters#sequential-parameters) or, if the formula expression is a function or a project method, [named parameters](https://developer.4d.com/docs/Concepts/parameters#named-parameters). Upon starting execution in the context of the process, the process formula receives the parameter values either in the named parameters, or in *$1*, *$2*, and so on. Remember that arrays cannot be passed as parameters. Furthermore, in the context of the **CALL WORKER** command, the following additional considerations need to be taken into account:

* Pointers to tables or fields are allowed.
* Pointers to variables, particularly local and process variables, are not recommended since these variables may be undefined at the moment they are being accessed by the process method.
* Standard object or collection type parameters are passed **by copy**, *i.e.* 4D will create a copy of the object or the collection in the destination process if the worker is in a process different from the one calling the **CALL WORKER** command. In this context, if you want to pass an object or collection parameter **by reference**, you must use a shared object or collection (see *Shared objects and shared collections*).

A worker process remains alive until the application is closed or the [KILL WORKER](kill-worker.md) command is explicitly called for it. To free up memory, do not forget to call this command once a worker process is no longer needed.

#### Example 

In a form, a button starts a computation: for example, statistics for the selected year. The button creates or calls a worker process that computes the data while the user can continue to work in the form.

The method of the button is:

```4d
  //call the worker myWorker with the parameter
 var $vYear: Integer
 $vYear:=2015 // could have been selected by the user in the form
 CALL WORKER("myWorker";Formula(workerMethod);$vYear;Current form window)
```

The code of *workerMethod* is:

```4d
  // this is the method of the worker
  // it can be preemptive or cooperative
 #DECLARE($vYearInteger;$windowInteger) //year and window reference
 var $vStatResults : Object //to store statistical results
 ... //compute statistics
  //once finished, calls the form back with calculated values
  //$vStatResults can display results in the form
 CALL FORM($window;Formula(displayStats);$vStatResults)
```

#### See also 

*About workers*  
[CALL FORM](call-form.md)  
[Current process name](current-process-name.md)  
[KILL WORKER](kill-worker.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1389 |
| Thread safe | &check; |
| Forbidden on the server ||


