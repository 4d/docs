---
id: sql-set-option
title: SQL SET OPTION
slug: /commands/sql-set-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET OPTION.Syntax-->**SQL SET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.SQL SET OPTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Number of option to set |
| value | Integer, Text | &#8594;  | New value of option |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL SET OPTION.Summary-->The **SQL SET OPTION** command modifies the *value* of the option passed in *option*.<!-- END REF--> 

*option* can have one of the following values, located in the “*SQL*” theme:

| Constant               | Value | Comment                                                                                                                                                                                                                                                                                            |
| ---------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL asynchronous       | 1     | 0 = Synchronous connection (default value), 1 (or value other than 0) = Asynchronous connection                                                                                                                                                                                                    |
| SQL charset            | 100   | Text encoding used for requests sent to external sources (via the SQL pass-through). The modification is carried out for the current process and the current connection.<br/>Possible values: MIBEnum identifier (see note 2) or value -2 (see note 3)<br/>By default: 106 (UTF-8) |
| SQL connection timeout | 5     | Maximum timeout awaiting response when executing the [SQL LOGIN](sql-login.md) command. This value must be set before opening the connection in order to be taken into account<br/>Possible values: time in seconds<br/>By default: no timeout                                     |
| SQL data chunk size    | 6     | Size of data chunk to be sent to the server. This option is mainly useful with Sybase ODBC driver which does not support actual data chunk. Setting a value greater than the default one allows larger data to be sent at a time. Value: size in bytes<br/>By default: 8000                |
| SQL max data length    | 3     | Maximum length of data returned                                                                                                                                                                                                                                                                    |
| SQL max rows           | 2     | Maximum number of rows in resulting group (used for previews)                                                                                                                                                                                                                                      |
| SQL query timeout      | 4     | Maximum timeout awaiting response when executing the [SQL EXECUTE](sql-execute.md) command. <br/>Values: time in seconds<br/>By default: no timeout                                                                                                                                |

**Notes:**

1. When you work with the internal SQL kernel of 4D, the SQL Asynchronous option serves no purpose due to the fact that this type of connection is always synchronous.
2. MIBEnum numbers are referenced at the following address: *https://www.iana.org/assignments/character-sets.xhtml*.
3. When you pass -2 as the *value* to SQL Charset, the encoding used by the 4D SQL server is automatically adapted to the running platform (non-UTF encoding):  
   * Under Windows, ISO8859-1 is used,  
   * Under Mac OS, MAC-ROMAN is used.

#### System variables and sets 

If the command was properly executed, the system variable OK returns 1\. Otherwise, it returns 0.

#### See also 

[SQL GET OPTION](sql-get-option.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 818 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


