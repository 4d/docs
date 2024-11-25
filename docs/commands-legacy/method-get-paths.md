---
id: method-get-paths
title: METHOD GET PATHS
slug: /commands/method-get-paths
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS.Syntax-->**METHOD GET PATHS** ( {*folderName* ;} *methodType* ; *arrPaths* {; *stamp*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| folderName | Text | &#8594;  | Name of Home page folder |
| methodType | Integer | &#8594;  | Selector of method type to get |
| arrPaths | Text array | &#8592; | Array of method paths and names |
| stamp | Real | &#8594;  | Minimum value of stamp |
| &#8592; | New current value |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.METHOD GET PATHS.Summary-->The **METHOD GET PATHS** command fills the *arrPaths* array with the internal pathnames and names of methods in the application that are of the type specified by the *methodType* parameter.<!-- END REF-->

If your code is organized in "folders" in the 4D Explorer (Home page), you can pass a folder name in the optional *folderName* parameter. In this case, the *arrPaths* array only contains paths of methods that are found in this location. 

**Note:** You cannot use the "@" character in *folderName*.

In the *methodType* parameter, you pass the type of method whose paths you want to get in the *arrPaths* array. You can use the following constants (individually or a combination of them), found in the *Design Object Access* theme:

| Constant             | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path all objects     | Integer | \-1   | Paths of all the methods of the database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Path class           | Integer | 32    | Path of class definition. Example:<br/>\[class\]/Person<br/>\[class\]/Student                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Path database method | Integer | 2     | Path of database methods specified. List of these methods:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Integer | 4     | Path of project form methods and all their object methods. Examples:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Path project method  | Integer | 1     | Name of method. <br/>Example: *MyProjectMethod*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path table form      | Integer | 16    | Path of table form methods and all their object methods. Example:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Path trigger         | Integer | 8     | Path of database triggers. Example:<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

The *stamp* parameter lets you only get the paths of methods modified after a specific point in time. As part of a version control system, this means that you can update only methods that were modified since the last backup.   
Here is how it works: 4D maintains a counter of method modifications. Each time a method is created or saved again, this counter is incremented and its current value is stored in the internal stamp of the method.   
If you pass the *stamp* parameter, the command only returns methods whose stamp is greater than or equal to the value passed in this parameter. Moreover, the command returns, in *stamp*, the new current value of the modification counter, i.e. the highest value. If you save this value, you can pass it the next time this command is called so that you only get new or modified methods.

If the command is executed from a component, it returns by default the paths of the component methods. If you pass the *\** parameter, the array contains the paths of the methods of the host database.

If the command detects a duplicated method name, the error -9802 is generated ("Object path not unique"). In this case, it is advisable to use the MSC in order to verify the database structure.

#### Example 1 

Retrieval of project methods found in the "web" folder:

```4d
 METHOD GET PATHS("web";Path project method;arrPaths)
```

#### Example 2 

Retrieval of database methods and triggers:

```4d
 METHOD GET PATHS(Path trigger+Path database method;arrPaths)
```

#### Example 3 

Retrieval of project methods that were modified since the last backup:

```4d
  // we load the last saved value
 $stamp :=Max([Backups]cur_stamp)
 METHOD GET PATHS(Path project method;arrPaths;$stamp)
  // we save the new value
 CREATE RECORD([Backups])
 [Backups]cur_stamp :=$stamp
 SAVE RECORD([Backups])
```

#### Example 4 

Refer to the example of the [METHOD SET CODE](method-set-code.md) command.

#### See also 

[Current method path](current-method-path.md)  
[METHOD GET FOLDERS](method-get-folders.md)  