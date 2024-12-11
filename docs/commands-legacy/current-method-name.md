---
id: current-method-name
title: Current method name
slug: /commands/current-method-name
displayed_sidebar: docs
---

<!--REF #_command_.Current method name.Syntax-->**Current method name**  : Text<!-- END REF-->
<!--REF #_command_.Current method name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Calling method name |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current method name.Summary-->The Current method name command returns the method name where it has been invoked.<!-- END REF--> This command is useful for debugging generic methods.

According to the calling method type, the returned string can be as follows:

| **Calling Method**                   | **Returned string**                               |
| ------------------------------------ | ------------------------------------------------- |
| Database Method                      | MethodName                                        |
| Trigger                              | Trigger on \[TableName\]                          |
| Project Method                       | MethodName                                        |
| Table Form Method                    | \[TableName\].FormName                            |
| Project Form Method                  | FormName                                          |
| Table Form Object Method             | \[TableName\].FormName.ObjectName                 |
| Project Form Object Method           | FormName.ObjectName                               |
| Class Constructor                    | ClassName:constructor                             |
| Class Function                       | ClassName.FunctionName                            |
| Component Project Method             | MethodName                                        |
| Component Project Form Method        | FormName(ComponentName)                           |
| Component Project Form Object Method | FormName(ComponentName).ObjectName(ComponentName) |

This command cannot be called from within a 4D formula.

**Note:** For this command to be able to operate in compiled mode, it must not be included in code for which range checking has been disabled. See *Range checking*.


#### Properties
|  |  |
| --- | --- |
| Command number | 684 |
| Thread safe | &check; |
| Forbidden on the server ||


