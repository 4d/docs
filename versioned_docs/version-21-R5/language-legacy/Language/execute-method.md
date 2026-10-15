---
id: execute-method
title: EXECUTE METHOD
slug: /commands/execute-method
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD.Syntax-->**EXECUTE METHOD** ( *methodName* : Text )<br/>**EXECUTE METHOD** ( *methodName* : Text ; *result* : Variable {; *...param* : Expression} )<br/>**EXECUTE METHOD** ( *methodName* : Text ; * {; *...param* : Expression} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| methodName | Text | &#8594;  | Name of project method to be executed |
| result | Variable | &#8592; | Variable receiving the method result |
| * | Operator | &#8594; | Method not returning a result |
| param | Expression | &#8594;  | Parameter(s) of the method |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.EXECUTE METHOD.Summary-->The EXECUTE METHOD command executes the *methodName* project method while passing any parameters in *param1...paramN*<!-- END REF-->. You can pass the name of any method that can be called from the database or the component executing the command.

In *result*, you can pass a variable which will receive the result of the execution of *methodName*. If the method does not return a result, pass *\** as the second parameter. If the method does not return a result and does not require any parameters to be passed, pass only the *methodName* parameter.

The execution context is preserved in the called method, which means that the current form and any current form event remain defined. 

If you call this command from a component and pass a method name belonging to the host database in *methodName* (or vice versa), the method must have been shared (“Shared by components and host database” option, in the [Method properties](../../Project/project-method-properties.md)).

## System variables and sets 

If this command is executed correctly, the system variable OK is set to 1; otherwise, it is set to 0.

## See also 

[EXECUTE FORMULA](../commands/execute-formula)  

## Properties

|  |  |
| --- | --- |
| Command number | 1007 |
| Thread safe | yes |
| Modifies variables | OK |


