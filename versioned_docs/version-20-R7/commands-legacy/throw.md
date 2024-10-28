---
id: throw
title: throw
slug: /commands/throw
displayed_sidebar: docs
---

<!--REF #_command_.throw.Syntax-->**throw** ( *errorCode* {; *description*} ) <br/>
*throw* {( *errorObj* )}<!-- END REF-->
<!--REF #_command_.throw.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| errorCode | Integer | &#8594;  | A long integer representing the error code. |
| description | Text | &#8594;  | A text providing a description of the error. |
| throw {( errorObj )} |
| Parameter | Type | Description |
| errorObj | Object | &#8594;  | An object containing properties to build the error |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.throw.Summary-->The **throw** command creates an error that will be thrown either immediately or when the calling method returns to its caller (deferred mode).<!-- END REF--> 

When you encounter a situation in your 4D code where an error condition arises, you can use the **throw** command to explicitly throw an error and provide a specific error message or error number. This can be useful for signaling exceptional conditions or invalid inputs.

Errors thrown using the **throw** command are managed by the 4D runtime as any normal error: the standard error dialog is displayed unless an interception method has been installed using the [ON ERR CALL](on-err-call.md) command.

The command supports three syntaxes:

##### **throw(errorCode{; description})**

It specifies the error code and an optional description text, the error is thrown immediately.   
If no description is provided, it is filled with:

* Error code errorCode: (host) in the host application
* Error code errorCode: (C00x) in a component

##### **throw(errorObj)**

*errorObj* object allows for more detailed error information and control over error handling. It can contain the following properties, as well as any custom property that you can refer to using placeholders within the **message** property. 

| **property**       | **type** | **description**                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| componentSignature | text     | Four latin letters signature to uniquely identify the source of the error. If the **componentSignature** is not provided, the command uses "host" for the host database, and "C001", "C002", ... for the components.                                                                                                                                                                                                                                                     |
| errCode            | number   | Error code. If the **errCode** is not provided, the command uses -1.                                                                                                                                                                                                                                                                                                                                                                                                     |
| message            | text     | Description of the error.<br/> The **message** may contain placeholders that will be replaced by custom properties added to the errorObj object. Each placeholder must be specified using braces {} enclosing the name of the property to be used. If the **message** is not provided or is an empty string, the command will look for a description in the current database xliff files with a resname built as follows: ERR\_{componentSignature}\_{errCode}". |
| deferred           | boolean  | True if the error should be deferred when the current method returns or at the end of the [Try block](https:developer.4d.com/docs/Concepts/error-handling#trycatchend-try). Default value is false.                                                                                                                                                                                                                                                                      |

When you use this syntax, the *errorObj* object is returned in [Last errors](last-errors.md).

**Note:** It is possible to call the command several times in the same project method to generate several errors. You can use the deferred option to send all errors at once.

##### **throw** 

It throws all current errors in **deferred mode**, meaning they will be added to a stack and handled when the calling method returns. This is typically done from within an [ON ERR CALL](on-err-call.md) callback.

* **In an application:** When an error occurs, it is added to the error stack and the [ON ERR CALL](on-err-call.md) method of the application is called at the end of the current method. The [Last errors](last-errors.md) function returns the stack of errors.
* **As a consequence, in a component:** The stack of errors can be sent to the host application and the [ON ERR CALL](on-err-call.md) method of the host application is called.

#### Example 1 

```4d
 var $code : Integer
 var $description : text
 $code:=50042 //Custom code
 $description:=“This is a custom error”
 throw($code ;$description) // Throws an error with message "This is a custom error" and errCode = 50042
```

#### Example 2 

```4d
throw({errCode: 1; message: "This an error"}) // Throws an error with errCode = 1 and message "This an error"
```

#### Example 3 

```4d
throw({errCode: 1}) // Throws an error with errCode = 1 and message "Error code: 1 (host)"
```

#### Example 4 

```4d
throw({message: "This an error"}) // Throws an error with errCode = -1 and message "This is my error"
```

#### Example 5 

```4d
throw({message: "This is my error"; deferred: True}) // Throw an error with message "This is my error" and errCode = -1 in deferred mode
```

#### Example 6 

```4d
throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// Throws an error with message "File myFileName not found (myFilePath)" in deferred mode
```

#### See also 

[ASSERT](assert.md)  
[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  