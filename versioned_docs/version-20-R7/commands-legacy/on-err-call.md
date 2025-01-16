---
id: on-err-call
title: ON ERR CALL
slug: /commands/on-err-call
displayed_sidebar: docs
---

<!--REF #_command_.ON ERR CALL.Syntax-->**ON ERR CALL** ( *errorMethod* {; *scope*} )<!-- END REF-->
<!--REF #_command_.ON ERR CALL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| errorMethod | Text | &#8594;  | Error method to be invoked, or Empty string to stop trapping errors |
| scope | Integer | &#8594;  | Scope for the error method |

<!-- END REF-->

#### Description 

<!--REF #_command_.ON ERR CALL.Summary-->The **ON ERR CALL** command installs the project method, whose name you pass in *errorMethod*, as the method for catching (trapping) errors for the defined execution context in the current project.<!-- END REF--> This method is called the **error-handling method** or **error-catching method**. 

Error-handling methods are installed per project: components and host projects can define their own error-catching methods, only the method of the project where the error occured will be called. 

Once an error-handling project is installed, 4D calls the method each time an error occurs during the execution of a 4D language command in the defined execution context. 

The *scope* of the command designates the execution context from where an error will trigger the call of the errorMethod. By default, if the *scope* parameter is omitted, the scope of the command is the local execution context, i.e. the current process. You can pass one of the following constants in the *scope* parameter:

| Constant                  | Value | Comment                                                                                       |
| ------------------------- | ----- | --------------------------------------------------------------------------------------------- |
| ek errors from components | 2     | Errors that occurred in components                                                            |
| ek global                 | 1     | Errors that occurred in the global execution context of the project                           |
| ek local                  | 0     | Errors that occurred in the local execution context (default if *scope* parameter is omitted) |

* if *scope* \= ek local (or if *scope* is omitted), only errors that occurred in the current process will call errorMethod. You can have one error-handling method per process at a time, but you can have different error-handling methods for several processes.
* if *scope* \= ek global, all errors that occurred in the application, whatever the process (except components), will call errorMethod. Note that, if a ek local error handler is also defined for a process, the ek global error handler is not called. This principle allows you to define a generic error-handling method that will catch all errors, while local error-handling methods can be set for some specific processes.  
Note also that a global error-handling method is useful on the server, where it can be handle errors in server-side functions.
* if *scope* \= ek errors from components, only errors generated from the components installed in the application will call errorMethod. Note that, if an error-handling method is defined in a component, it is called in case of error in the component, and the ek errors from components error handler set in the host application is not called.

**Note:** If **ON ERR CALL** is called from a process for which you requested preemptive execution (in compiled mode), the compiler checks whether *errorMethod* is thread-safe and returns errors if it is not compatible with the preemptive mode. For more information, refer to the *Preemptive 4D processes* section.

To stop the trapping of errors, call **ON ERR CALL** again with the desired *scope* parameter (if any) and pass an empty string in *errorMethod*. 

You can identify errors by reading the Error system variable, which contains the code number of the error. Error codes are listed in the *Error Codes* theme. For example, you can see the section *Syntax Errors (1 -> 81)*. The Error variable value is significant only within the error-handling method; if you need the error code within the method that provoked the error, copy the Error variable to your own process variable. You can also access the Error method, Error line and Error formula system variables which contain, respectively, the name of the method, the line number and the text of the formula where the error occurred (see [Handling errors within the method](https://developer.4d.com/docs/Concepts/error-handling#handling-errors-within-the-method)).

You can use the [Last errors](last-errors.md) or [Last errors](last-errors.md)  command to obtain the error sequence (i.e., the error "stack") at the origin of the interruption.

The error-handling method should manage the error in an appropriate way or present an error message to the user. Errors can be generated during processing performed by:

* The 4D database engine; for example, when saving a record causes the violation of a trigger rule.
* The 4D environment; for example, when you do not have enough memory for allocating an array.
* The operating system on which the database is run; for example, disk full or I/O errors.

The [ABORT](abort.md) command can be used to terminate processing. If you don’t call [ABORT](abort.md) in the error-handling method, 4D returns to the interrupted method and continues to execute the method. Use the [ABORT](abort.md) command when an error cannot be recovered.

If an error occurs in the error-handling method itself, 4D takes over error handling. Therefore, you should make sure that the error-handling method cannot generate an error. Also, you cannot use **ON ERR CALL** inside the error-handling method.

#### Example 1 

You want to define a global error handler, for example in the **On Startup** database method:

```4d
 ON ERR CALL("myGlobalErrorHandler";ek global)
```

#### Example 2 

The following project method tries to create a document whose name is received as parameter. If the document cannot be created, the project metod returns 0 (zero) or the error code:  

```4d
  //Create doc project method
  //Create doc ( String ; Pointer ) -> LongInt
  //Create doc ( DocName ; ->DocRef ) -> Error code result
 
 gError:=0
 ON ERR CALL("IO ERROR HANDLER")
 $2->:=Create document($1)
 ON ERR CALL("")
 $0:=gError
```

The IO ERROR HANDLER project method is listed here:

```4d
  //IO ERROR HANDLER project method
 gError:=Error //just copy the error code to the process variable gError
```

Note the use of the *gError* process variable to get the error code result within the current executing method. Once these methods are present in your database, you can write:

```4d
  // ...
 var vhDocRef : Time
 $vlErrCode:=Create doc($vsDocumentName;->vhDocRef)
 If($vlErrCode=0)
  //...
    CLOSE DOCUMENT($vlErrCode)
 Else
    ALERT("The document could not be created, I/O error "+String($vlErrCode))
 End if
```

#### Example 3 

While implementing a complex set of operations, you may end up with various subroutines that require different error-handling methods. You can have only one error-handling method per process at a time, so you have two choices:  
 \- Keep track of the current one each time you call **ON ERR CALL**, or   
\- Use a process array variable (in this case, *asErrorMethod*) to “pile up” the error-handling methods and a project method (in this case, ON ERROR CALL) to install and deinstall the error-handling methods. 

You must initialize the array at the very beginning of the process execution:

```4d
  // Do NOT forget to initialize the array at the beginning
  // of the process method (the project method that runs the process)
 ARRAY STRING(63;asErrorMethod;0)
```

Here is the custom ON ERROR CALL method:

```4d
  // ON ERROR CALL project method
  // ON ERROR CALL { ( String ) }
  // ON ERROR CALL { ( Method Name ) }
 
 C_STRING(63;$1;$ErrorMethod)
 var $vlElem : Integer
 
 If(Count parameters>0)
    $ErrorMethod:=$1
 Else
    $ErrorMethod:=""
 End if
 
 If($ErrorMethod#"")
    var gError : Integer
    gError:=0
    $vlElem:=1+Size of array(asErrorMethod)
    INSERT IN ARRAY(asErrorMethod;$vlElem)
    asErrorMethod{$vlElem}:=$1
    ON ERR CALL($1)
 Else
    ON ERR CALL("")
    $vlElem:=Size of array(asErrorMethod)
    If($vlElem>0)
       DELETE FROM ARRAY(asErrorMethod;$vlElem)
       If($vlElem>1)
          ON ERR CALL(asErrorMethod{$vlElem-1})
       End if
    End if
 End if
```

Then, you can call it this way:

```4d
 gError:=0
 ON ERROR CALL("IO ERRORS") // Installs the IO ERRORS error-handling method
  // ...
 ON ERROR CALL("ALL ERRORS") // Installs the ALL ERRORS error-handling method
  // ...
 ON ERROR CALL // Deinstalls ALL ERRORS error-handling method and reinstalls IO ERRORS
  // ...
 ON ERROR CALL // Deinstalls the IO ERRORS error-handling method
  // ...
```

#### Example 4 

The following error-handling method ignores the user interruptions and displays the error text:

```4d
  //Show_errors_only project method
 If(Error#1006) //this is not a user interruption
    ALERT("The error "+String(Error)+" occurred. The code in question is: \""+Error formula+"\"")
 End if
```

#### See also 

[ABORT](abort.md)  
*Error Handler*  
[Last errors](last-errors.md)   
[Last errors](last-errors.md)  
[Method called on error](method-called-on-error.md)  
*System Variables*  

#### Properties

|  |  |
| --- | --- |
| Command number | 155 |
| Thread safe | &check; |


