---
id: method-called-on-error
title: Method called on error
displayed_sidebar: docs
---

<!--REF #_command_.Method called on error.Syntax-->**Method called on error** {( *scope* )} -> Function result<!-- END REF-->
<!--REF #_command_.Method called on error.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| scope | Integer | -> | Scope of the error method |
| Function result | String | <- | Name of method called on error |

<!-- END REF-->

#### Description 

<!--REF #_command_.Method called on error.Summary-->The **Method called on error** command returns the name of the method installed by the [ON ERR CALL](on-err-call.md) command for the current process or the defined *scope*.<!-- END REF-->

In the *scope* parameter, pass the execution context for which you want to get the name of the error handler method. You can use one of the following constants:

| Constant                  | Value | Comment                                                                                       |
| ------------------------- | ----- | --------------------------------------------------------------------------------------------- |
| ek errors from components | 2     | Errors that occurred in components                                                            |
| ek global                 | 1     | Errors that occurred in the global execution context of the project                           |
| ek local                  | 0     | Errors that occurred in the local execution context (default if *scope* parameter is omitted) |

If no method has been installed for the *scope*, an empty string ("") is returned.

#### Example 

This command is particularly useful in the context of components because it enables you to temporarily change and then restore the error-catching methods:

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  // If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  // Reinstallation of previous method
 ON ERR CALL($methCurrent)
```

#### See also 

[Error Handler](../../4D/20-R6/Error-Handler.302-6958437.en.html)  
[ON ERR CALL](on-err-call.md)  