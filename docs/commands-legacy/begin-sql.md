---
id: begin-sql
title: Begin SQL
slug: /commands/begin-sql
displayed_sidebar: docs
---

<!--REF #_command_.Begin SQL.Syntax-->**Begin SQL**<!-- END REF-->
<!--REF #_command_.Begin SQL.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.Begin SQL.Summary-->Begin SQL is a keyword used in the Method editor to indicate the beginning of a sequence of SQL commands that must be interpreted by the current data source of the process (the integrated SQL engine of 4D or any source specified via the [SQL LOGIN](sql-login.md) command).<!-- END REF--> 

A sequence of SQL commands started with Begin SQL must be closed with the [Begin SQL](begin-sql.md) keyword.

These keywords work as follows:

* You can place one or more blocks of **Begin SQL/End SQL** tags in the same method. You can generate methods made up entirely of SQL code or mix 4D code and SQL code in the same method.
* You can write several SQL statements on the same line or on different lines by separating them with a semi-colon “;”. For example, you can write:

```4d
 Begin SQL
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Henry’,40);
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Bill’,35)
 End SQL
```

or:

```4d
 Begin SQL
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Henry’,40);INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Bill’,35)
 End SQL
```

Note that the 4D *Debugger* will evaluate the SQL code line by line. In certain cases, it may be preferable to use more than one line.

#### See also 

[End SQL](end-sql.md)  
[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  