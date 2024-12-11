---
id: sql-set-parameter
title: SQL SET PARAMETER
slug: /commands/sql-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET PARAMETER.Syntax-->**SQL SET PARAMETER** ( *object* ; *paramType* )<!-- END REF-->
<!--REF #_command_.SQL SET PARAMETER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | 4D object to be used (variable, array or field) |
| paramType | Integer | &#8594;  | Type of parameter |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL SET PARAMETER.Summary-->The SQL SET PARAMETER command allows the use of a 4D variable, array or field value in SQL requests.<!-- END REF-->

**Note:** It is also possible to directly insert the name of a 4D object to be used (variable, array or field) between the *<<* and *\>>* characters in the text of the request (see example 1). For more information about this, please refer to the *Overview of SQL Commands* section.

* In the *object* parameter, pass the 4D object (variable, array or field) to be used in the request.
* In the *paramType* parameter, pass the SQL type of the parameter. You can pass a value or use one of the following constants, located in the “*SQL*” theme:
  
| Constant         | Type    | Value | Comment                                                                                                  |  
| ---------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------- |  
| SQL param in     | Integer | 1     |                                                                                                          |  
| SQL param in out | Integer | 2     | Usable only in the context of an SQL stored procedure (in-out parameter defined in the stored procedure) |  
| SQL param out    | Integer | 4     | Usable only in the context of an SQL stored procedure (out parameter defined in the stored procedure)    |

The value of the 4D object replaces the *?* character in the SQL request (standard syntax). If the request contains more than one *?* character, several calls to SQL SET PARAMETER will be necessary. The values of the 4D objects will be assigned sequentially in the request, in accordance with the execution order of the commands. 

**Warning:** This command is used for handling *parameters* passed to the SQL request. It is not possible to use the SQL param out type to associate a 4D object with the *result* of an SQL request. SQL request results are retrieved, for example, using the *boundObj* parameter of the [SQL EXECUTE](sql-execute.md) command (see the *Overview of SQL Commands*). The **SQL SET PARAMETER** command is mainly intended for setting parameters passed to the request (SQL param in); the SQL param out and SQL param in out types are reserved for use in the context of SQL stored procedures that could return parameters. 

#### Example 1 

This example is used to execute an SQL request which calls the associated 4D variables directly:

```4d
 var MyText : Text
 var MyLongint : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"
 For(vCounter;1;10)
    MyText:="Text"+String(vCounter)
    MyLongint:=vCounter
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### Example 2 

Same example as the previous one, but using the SQL SET PARAMETER command:

```4d
 var MyText : Text
 var MyLongint : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"
 For(vCounter;1;10)
    MyText:="Text"+String(vCounter)
    MyLongint:=vCounter
    SQL SET PARAMETER(MyText;SQL param in)
    SQL SET PARAMETER(MyLongint;SQL param in)
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK returns 1\. Otherwise, it returns 0.


#### Properties
|  |  |
| --- | --- |
| Command number | 823 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


