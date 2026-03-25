---
id: method-get-path
title: METHOD Get path
slug: /commands/method-get-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get path.Syntax-->**METHOD Get path** ( *methodType* : Integer {; *aTable* : Table}{; *objectName* : Text{; *formObjectName* : Text}}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.METHOD Get path.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| methodType | Integer | &#8594;  | Design object type selector |
| aTable | Table | &#8594;  | Table reference |
| objectName | Text | &#8594;  | Name of form or method |
| formObjectName | Text | &#8592; | Name of form object |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |
| Function result | Text | &#8592; | Full path of object |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|New `Path volatile method` constant|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.METHOD Get path.Summary-->The **METHOD Get path** command returns the full internal pathname of a method.<!-- END REF-->

In the *methodType* parameter, you pass the type of method whose path you want to get. You can use the following constants, found in the *Design Object Access* theme:

| Constant    | Type    | Value | Comment    |
| -------------------- | ------- | ----- | ------------------ |
| Path class  | Integer | 32    | Path of class definition. Example:<br/>\[class\]/Person<br/>\[class\]/Student |
| Path database method | Integer | 2     | Path of database methods specified. List of these methods:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Integer | 4     | Path of project form methods and all their object methods. Examples:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*  |
| Path project method  | Integer | 1     | Name of method. <br/>Example: *MyProjectMethod* |
| Path table form      | Integer | 16    | Path of table form methods and all their object methods. Example:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*   |
| Path trigger         | Integer | 8     | Path of database triggers. Example:<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2* |
| Path volatile method | Integer | 128   | Path of a [4D.Method](../../API/MethodClass.md) object (its *name* must have been declared). Example:<br/>*[volatile]/methodName* |

Pass values in the *aTable*, *objectName* and *formObjectName* parameters according to the type of object for which you want to get the method pathname:  

| **Type of object**   | *aTable* | *objectName* | *formObjectName* |
| -------------------- | -------- | ------------ | ---------------- |
| Path project form    |         | X  |  X (optional)                |
| Path table form      | X        | X            | X (optional)     |
| Path database method |         |    X          |                  |
| Path project method  |         |   X        |                  |
| Path trigger         | X        |              |                  |
| Path class           |        | X             |                  |


**Note:** The command does not check if the method actually exists in the database. An error is generated only when an invalid database method name is passed with the Path database method selector. 

If the command is executed from a component, it returns by default the paths of the component methods. If you pass the *\** parameter, the array contains the paths of the methods of the host database.

## Example 

```4d
  //Retrieval of the pathname of the "On Startup" database method:
 $path:=METHOD Get path(Path database method;"onStartup")
 
  //Retrieval of the pathname of the trigger for the [Employees] table:
 $path:=METHOD Get path(Path trigger;[Employees])
 
  //Retrieval of the pathname of the "OK" object method of the "input" form for the [Employees] table:
 $path:=METHOD Get path(Path table form;[Employees];"input";"OK")
```

## See also 

[Current method path](../commands/current-method-path)  
[METHOD OPEN PATH](../commands/method-open-path)  
[METHOD RESOLVE PATH](../commands/method-resolve-path)  

## Properties

|  |  |
| --- | --- |
| Command number | 1164 |
| Thread safe | no |


