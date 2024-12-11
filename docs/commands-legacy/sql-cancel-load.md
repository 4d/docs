---
id: sql-cancel-load
title: SQL CANCEL LOAD
slug: /commands/sql-cancel-load
displayed_sidebar: docs
---

<!--REF #_command_.SQL CANCEL LOAD.Syntax-->**SQL CANCEL LOAD**<!-- END REF-->
<!--REF #_command_.SQL CANCEL LOAD.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL CANCEL LOAD.Summary-->The **SQL CANCEL LOAD** command ends the current SELECT request and initializes the parameters.<!-- END REF--> 

This command is used to execute several SELECT requests within the same connection (i.e. the same cursor) initiated by the [SQL LOGIN](sql-login.md) command. 

#### Example 

In this example, two requests are executed in the same connection: 

```4d
 var Myblob : Blob
 var MyText : Text
 SQL LOGIN("mysql";"root";"")
 
 SQLStmt:="SELECT blob_field FROM app_testTable"
 SQL EXECUTE(SQLStmt;Myblob)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
 
  //Resetting of cursor
 SQL CANCEL LOAD
 
 SQLStmt:="SELECT Name FROM Employee"
 SQL EXECUTE(SQLStmt;MyText)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
```

#### System variables and sets 

If the command has been correctly executed, the system variable OK returns 1\. Otherwise, it returns 0.

#### See also 

[SQL LOAD RECORD](sql-load-record.md)  
[SQL LOGIN](sql-login.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 824 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


