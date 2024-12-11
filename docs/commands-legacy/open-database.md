---
id: open-database
title: OPEN DATABASE
slug: /commands/open-database
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATABASE.Syntax-->**OPEN DATABASE** ( *filePath* )<!-- END REF-->
<!--REF #_command_.OPEN DATABASE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| filePath | Text | &#8594;  | File name (.4db, .4dc, .4dbase, .4dproject, .4dz, or .4dlink) or complete access path of database to open |

<!-- END REF-->

#### Note 

<!--REF #_command_.OPEN DATABASE.Summary-->The **OPEN DATABASE** command closes the current 4D database and opens on-the-fly the database defined by *filePath*.<!-- END REF--> This command is useful for automatic testing purposes, to reopen a database automatically after a compilation, or to allow a merged 4D remote application to select the a database server to connect.

In the *filePath* parameter, pass the name or full access path of the database to be opened. You can use files having one of the following extensions:

* .4db (interpreted structure file),
* .4dc (compiled structure file),
* .4dbase (macOS package),
* .4dproject (project database file)
* .4dz (deployment file for project databases)
* .4dlink (shortcut file).

If you pass only a file name, this file must be placed at the same level as the structure file of the current database.

If the access path defines a valid database, 4D quits the database that is already open and then opens the specified database. In single-user mode, the [On Exit database method](on-exit-database-method.md) of the database being closed and the [On Startup database method](on-startup-database-method.md) (or the [On Server Open Connection database method](on-server-open-connection-database-method.md)) of the database being opened are called successively.

**Warning:** Since this command causes the application to quit before re-opening with the specified database, it is usually not recommended to use it in the [On Startup database method](on-startup-database-method.md) or in a method called by this database method. 

The command is executed in an asynchronous manner: after its call, 4D continues executing the rest of the method. Then, the application behaves as if the **Quit** command was selected in the **File** menu: open dialog boxes are cancelled, any open processes have 10 seconds to finish before being terminated, and so on.

If the target database file is not found or is invalid, a standard file system error is returned and 4D does nothing.

#### Example 1 

```4d
 OPEN DATABASE("C:\\databases\\Invoices\\Invoices.4db")
```

#### Example 2 

You want to select a server at startup from a single-user application. You could execute this code from a process launched by the [On Startup database method](on-startup-database-method.md):

```4d
 var $xml : Text
 $xml:=""
 $databaseName:="myServer"
 $IP:="192.168.6.7:19813"
 
 If(Shift down)
    $IP:=Request("IP address to connect to "+$databaseName;$IP)
 Else
    ok:=1
 End if
 
 If(ok=1)
    $xml:=Replace string($xml;"{databaseName}";$databaseName)
    $xml:=Replace string($xml;"{IP}";$IP)
    var $link : Object
    $link:=Folder(fk user preferences folder).file("server.4dlink")
    $link.setText($xml)
    OPEN DATABASE($link.platformPath)
 Else
    QUIT 4D
 End if
```


#### Properties
|  |  |
| --- | --- |
| Command number | 1321 |
| Thread safe | &check; |
| Forbidden on the server ||


