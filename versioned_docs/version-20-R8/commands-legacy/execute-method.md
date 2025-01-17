---
id: execute-method
title: EXECUTE METHOD
slug: /commands/execute-method
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD.Syntax-->**EXECUTE METHOD** ( *methodName* {; *result* {; *param*}}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| methodName | Text | &#8594;  | Name of project method to be executed |
| result | Variable, * | &#8592; | Variable receiving the method result or * for a method not returning a result |
| param | Expression | &#8594;  | Parameter(s) of the method |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXECUTE METHOD.Summary-->The EXECUTE METHOD command executes the *methodName* project method while passing any parameters in *param1.<!-- END REF-->..paramN*. You can pass the name of any method that can be called from the database or the component executing the command.

In *result*, you can pass a variable which will receive the result of the execution of *methodName* (value placed in $0 inside *methodName*). If the method does not return a result, pass *\** as the second parameter. If the method does not return a result and does not require any parameters to be passed, pass only the *methodName* parameter.

The execution context is preserved in the called method, which means that the current form and any current form event remain defined. 

If you call this command from a component and pass a method name belonging to the host database in *methodName* (or vice versa), the method must have been shared (“Shared by components and host database” option, in the Method properties).

#### System variables and sets 

If this command is executed correctly, the system variable OK is set to 1; otherwise, it is set to 0.

#### See also 

[EXECUTE FORMULA](execute-formula.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1007 |
| Thread safe | &check; |
| Modifies variables | OK |


