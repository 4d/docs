---
id: error-handling
title: Error handling
---

Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions. 

Error handling meets two main needs:

- finding out and fixing potential errors and bugs in your code during the development phase,
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface. 

:::tip Good practice

It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. This method would avoid unexpected dialog boxes to be displayed on the server machine (if run with interface), and could log errors in a dedicated file for further analyses. 

:::


## Error or status

Many 4D class functions, such as `entity.save()` or `transporter.send()`, return a *status* object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.

Other "unpredictable" errors include disk write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.  


## Installing an error-handling method

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods. 

Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below).  

To *install* an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. For example:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) //gives back control for the local process
```

The  [`Method called on error`](https://doc.4d.com/4dv19/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### Scope and components

An error-handling method can be set for different execution contexts:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context,
- for the **components**- it will be called in the host for all errors that occurred in the components.

Examples:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
ON ERR CALL("globalHandler";ek global) //Installs a global error-handling method
ON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components
```

You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.

You can define a single error-catching method for the whole application or different methods per application module. However, only one method can be installed per execution context.

When an error occurs, only one method is called, even if several "concurrent" error handlers are installed:

- if the error occurs in the current process, the local handler is called and NOT the global handler;
- if the error occurs in a component and the component has its own error handler, the error handler of the component is called and NOT the "errors from components" handler of the host application. 


### Handling errors within the method

Within a custom error method, you have access to several pieces of information that will help you identifying the error:

- dedicated system variables:

  - `Error` (longint): error code
  - `Error method` (text): name of the method that triggered the error
  - `Error line` (longint): line number in the method that triggered the error
  - `Error formula` (text): formula of the 4D code (raw text) which is at the origin of the error. 
  
:::info

4D automatically maintains a number of variables called **system variables**, meeting different needs. See the *4D Language Reference manual*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
- the `Get call chain` command that returns a collection of objects describing each step of the method call chain within the current process. 


#### Example

Here is a simple error-handling system:

```4d
//installing the error handling method
 ON ERR CALL("errorMethod")
 //... executing code
 ON ERR CALL("") //giving control back to 4D
```

```4d
// errorMethod project method
 If(Error#1006) //this is not a user interruption
    ALERT("The error "+String(Error)+" occurred". The code in question is: \""+Error formula+"\"")
 End if
```

### Using an empty error-handling method

If you mainly want the standard error dialog box to be hidden, you can install an empty error-handling method. The `Error` system variable can be tested in any method, i.e. outside of the error-handling method:

```4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
	ALERT("File not found.")
End if
ON ERR CALL("")
```


