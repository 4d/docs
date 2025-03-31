---
id: abort
title: ABORT
slug: /commands/abort
displayed_sidebar: docs
---

<!--REF #_command_.ABORT.Syntax-->**ABORT**<!-- END REF-->
<!--REF #_command_.ABORT.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.ABORT.Summary-->The **ABORT** command is used from within an error-handling project method installed using the command [ON ERR CALL](on-err-call.md).<!-- END REF--> 

If you do not have an error-handling project method, when an error occurs (for example, a database engine error) 4D displays its standard error dialog box and then interrupts the execution of your code. If the code being executed is:

* an object method, form method (or a project method called by a form or object method), the control returns to the form currently being displayed.
* a method called from a menu, the control returns to the menu bar or to the form currently being displayed.
* the master method of a process, the process then ends.
* a method called directly or indirectly by an import or export operation, the operation is stopped. The same is true for sequential queries or order by operations.
* And so on...

If you use an error-handling project method to catch errors, 4D neither displays its standard error dialog box nor interrupts the execution of your code. Instead, 4D calls your error-handling project method (that you can see as an exception handler), and resumes the execution to the next line of code in the method that triggered the error. 

There are errors you can treat programmatically; for example, during an import operation, if you catch a database engine duplicated value error, you can “cover” the error and pursue the import. However, there are errors that you cannot process and errors that you should not “cover.” In these cases, you need to stop the execution by calling **ABORT** from within the error-handling project method.

#### Historical Note 

Although the **ABORT** command is intended to be used only from within a error-handling project method, some members of the 4D community also use it to interrupt execution in other project methods. The fact that it works is only a side effect. We do not recommend the use of this command in methods other than error-handling methods.

#### See also 

[ON ERR CALL](on-err-call.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 156 |
| Thread safe | &check; |


