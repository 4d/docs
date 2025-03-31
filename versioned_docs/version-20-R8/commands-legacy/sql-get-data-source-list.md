---
id: sql-get-data-source-list
title: SQL GET DATA SOURCE LIST
slug: /commands/sql-get-data-source-list
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET DATA SOURCE LIST.Syntax-->**SQL GET DATA SOURCE LIST** ( *sourceType* ; *sourceNamesArr* ; *driversArr* )<!-- END REF-->
<!--REF #_command_.SQL GET DATA SOURCE LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| sourceType | Integer | &#8594;  | Source type: user or system |
| sourceNamesArr | Text array | &#8592; | Array of data source names |
| driversArr | Text array | &#8592; | Array of drivers for sources |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL GET DATA SOURCE LIST.Summary-->The **SQL GET DATA SOURCE LIST** command returns, in the *sourceNamesArr* and *driversArr* arrays, the names and drivers of the *sourceType* type data sources defined in the ODBC manager of the operating system.<!-- END REF-->

4D allows you to connect to an external ODBC data source directly via the language and execute SQL queries within a **Begin SQL/End SQL** tag structure. This works as follows: the SQL GET DATA SOURCE LIST command can be used to get a list of data sources present on the machine. The [SQL LOGIN](sql-login.md) command can then be used to designate the source to be used. You can then execute SQL queries using a **Begin SQL/End SQL** tag structure in the “current” source. To carry out queries using the 4D internal engine again, simply pass the [SQL LOGOUT](sql-logout.md) command. For more information about SQL commands in the Method editor, please refer to the *4D SQL Reference* manual.

In *sourceType*, pass the type of data source that you want to retrieve. You can use one of the following constants, found in the “*SQL*” theme:

| Constant           | Type    | Value |
| ------------------ | ------- | ----- |
| System data source | Integer | 2     |
| User data source   | Integer | 1     |

**Note:** This command does not take file type data sources into account. 

The command fills and sizes the *sourceNamesArr* and *driversArr* arrays with the corresponding values. 

**Note:** If you want to connect to an external 4D data source via ODBC, you will need to have installed the 4D ODBC Driver on your machine. For more information, please refer to the 4D ODBC Driver Installation manual. 

#### Example 

Example using a user data source:

```4d
 ARRAY TEXT(arrDSN;0)
 ARRAY TEXT(arrDSNDrivers;0)
 SQL GET DATA SOURCE LIST(User data source;arrDSN;arrDSNDrivers)
```

#### System variables and sets 

If the command is executed correctly, the OK system variable is set to 1\. Otherwise, it is set to 0 and an error is generated.

#### See also 

[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 989 |
| Thread safe | &cross; |
| Modifies variables | OK |


