---
id: method-resolve-path
title: METHOD RESOLVE PATH
slug: /commands-legacy/method-resolve-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD RESOLVE PATH.Syntax-->**METHOD RESOLVE PATH** ( *path* ; *methodType* ; *ptrTable* ; *objectName* ; *formObjectName* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD RESOLVE PATH.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text | &rarr; | Path to resolve |
| methodType | Longint | <&rarr; | Object type selector |
| ptrTable | Pointer | <&rarr; | Table reference |
| objectName | Text | <&rarr; | Name of form or database method |
| formObjectName | Text | <&rarr; | Name of form object |
| * | Operator | &rarr; | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD RESOLVE PATH.Summary-->The **METHOD RESOLVE PATH** command parses the internal path name passed in the *path* parameter and returns its different components in the *methodType*, *ptrTable*, *objectName*, and *formObjectName* parameters.<!-- END REF-->

The *methodType* parameter receives a value indicating the type of the method. You can compare this value with the following constants of the *Design Object Access* theme:

| Constant             | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path database method | Longint | 2     | Path of database methods specified. List of these methods:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Longint | 4     | Path of project form methods and all their object methods. Examples:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Path project method  | Longint | 1     | Name of method. <br/>Example: *MyProjectMethod*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path table form      | Longint | 16    | Path of table form methods and all their object methods. Example:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Path trigger         | Longint | 8     | Path of database triggers. Example:<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

**Note:** The command does not check if the method actually exists in the database/project. An error is generated only when an invalid table name is passed. 

The *ptrTable* parameter contains a pointer to a database table when the path references a table form method or a trigger. 

The *objectName* parameter contains either:

* a form name when the path references a table form or project form
* a database method name when the path references a database method.

The *formObjectName* parameter contains a form object name when the path references an object method.

If the command is executed from a component, it considers by default that *path* designates a component method. If you pass the *\** parameter, then it considers that *path* designates a host database method.

#### Example 1 

Resolution of a database method path:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 2
  // $tablePtr: Nil pointer
  // $objectName: "onStartup"
  // $formObjectName: ""
```

#### Example 2 

Resolution of a path for an object of a table form method:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[tableForm]/Table1/output1/myVar1";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 16
  // $tablePtr: -> [Table1]
  // $objectName: "output1"
  // $formObjectName: "Btn1"
```

#### See also 

[METHOD Get path](method-get-path.md)  