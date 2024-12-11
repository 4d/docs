---
id: open-data-file
title: OPEN DATA FILE
slug: /commands/open-data-file
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATA FILE.Syntax-->**OPEN DATA FILE** ( *accessPath* )<!-- END REF-->
<!--REF #_command_.OPEN DATA FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| accessPath | Text | &#8594;  | Name or complete access path of the data file to open |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN DATA FILE.Summary-->The **OPEN DATA FILE** command allows changing the data file opened by the 4D application on-the-fly.<!-- END REF--> 

Pass the name or the full access path of the data file to open (file with a ".4DD" suffix) in the *accessPath* parameter. If you pass only the file name, it must be placed next to the structure file of the database.

If the access path sets a valid data file, 4D quits the database in progress and re-opens it with the specified data file. In single-user mode, the [On Exit database method](on-exit-database-method.md) and the [On Startup database method](on-startup-database-method.md) are successively called.

**Warning:** Since this command causes the application to quit before re-opening with the specified data file, it must be used with precaution in the [On Exit database method](on-exit-database-method.md) or in a method called by this database method, so as to avoid generating an infinite loop.

The command is executed in an asynchronous manner: after its call, 4D continues executing the rest of the method. Then, the application behaves as if the **Quit** command was selected in the **File** menu: open dialog boxes are cancelled, any open processes have 10 seconds to finish before being terminated, etc.

Before launching the operation, the command checks the validity of the specified data file. Also, if the file was already open, the command verifies that it corresponds to the current structure.

If you pass an empty string in *accessPath*, the command will re-open the database without changing the data file.

**4D Server:** Beginning with 4D v13, this command can be executed with 4D Server. In this context, it makes an internal call to [QUIT 4D](quit-4d.md) on the server (which causes a dialog box to appear on each remote machine indicating that the server is in the process of quitting) before opening the designated file.

#### Example 

In the context of deploying a merged application, you want to open or create the user data file in the On Startup database method. This example uses the default data file (see *Data file management in final applications*):

```4d
 If(Data file="@default.4dd")
    If(Version type?? Merged application)
       If(Is data file locked)
          $dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"
  //If a local data file already exists
          If(Test path name($dataPath)=Is a document)
             OPEN DATA FILE($dataPath) //open it
          Else
             CREATE DATA FILE($dataPath) //create it
          End if
       End if
    End if
 End if
```

#### See also 

[CREATE DATA FILE](create-data-file.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 312 |
| Thread safe | &check; |
| Forbidden on the server ||


