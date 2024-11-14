---
id: sql-execute-script
title: SQL EXECUTE SCRIPT
slug: /commands/sql-execute-script
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE SCRIPT.Syntax-->**SQL EXECUTE SCRIPT** ( *scriptPath* ; *errorAction* {; *attribName* ; *attribValue*} {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE SCRIPT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| scriptPath | Text | &#8594;  | Complete pathname of file containing SQL script to execute |
| errorAction | Integer | &#8594;  | Action to carry out in case of error during script execution |
| attribName | Text | &#8594;  | Name of attribute to use |
| attribValue | Text | &#8594;  | Value of attribute |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SQL EXECUTE SCRIPT.Summary-->The **SQL EXECUTE SCRIPT** command is used to execute a series of SQL statements placed in the script file designated by *scriptPath*.<!-- END REF--> This command can only be executed on a local machine (local 4D or stored procedure on 4D Server). It works with the current database (internal or external database).

**Note:** This command cannot be used with an external connection that is opened directly or via ODBC. 

Pass the complete pathname of the text file containing the SQL statements to be executed in the *scriptPath* parameter. The pathname must be expressed using the syntax of the current system. If you pass an empty string ("") in *scriptPath*, a standard Open document dialog box will be displayed so that the user can select the script file to be executed. 

**Note:** The [SQL EXPORT DATABASE](sql-export-database.md) and [SQL EXPORT SELECTION](sql-export-selection.md) commands automatically generate this script file.

The *errorAction* parameter is used to configure the functioning of the command when an error occurs during script execution. You can pass one of the three following constants, placed in the *SQL* theme:

| Constant              | Type    | Value | Comment                                                                                                                                  |
| --------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| SQL On error abort    | Integer | 1     | In the event of an error, 4D immediately stops script execution.                                                                         |
| SQL On error confirm  | Integer | 2     | In the event of an error, 4D displays a dialog box describing the error and allowing the user to interrupt or continue script execution. |
| SQL On error continue | Integer | 3     | In the event of an error, 4D ignores it and continues script execution.                                                                  |

The *attribName* and *attribValue* parameters must be passed by pairs. These parameters are intended to be used to specify specific attributes for the script execution. In the current version of 4D, a single attribute can be passed in *attribName*, available via the following constant, placed in the *SQL* theme:

| Constant              | Type   | Value                    | Comment                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL use access rights | Text | SQL\_Use\_Access\_Rights | Used to restrict the access rights to be applied during execution of the SQL commands of the script. When you use this attribute, you must pass 0 or 1 in *attribValue*: <br/>*attribValue* \= 1: 4D uses the access rights of the current 4D user.*attribValue* \= 0 (or attribute not specified): 4D does not restrict access, the Designer rights are used. |

If the 4D log file is activated (via the selectors 28 or 45 of the [SET DATABASE PARAMETER](set-database-parameter.md) command), each SQL command executed will generate an entry with the following information:

* Type of SQL command
* Number of records affected by the command
* Duration of command execution
* For each error encountered:  
   * the error code  
   * the error text if available

If the script is executed correctly (no error occurs), the *OK* system variable is set to 1\. In the event of an error, the *OK* system variable is set to 0 or not according to the *errorAction* parameter: 

* If *errorAction* is SQL On error abort (value 1), *OK* is set to 0.
* If *errorAction* is SQL On error confirm (value 2), the *OK* variable is set to 0 if the user chooses to stop the operation and 1 if they choose to continue .
* If *errorAction* is SQL On error continue (value 3), the *OK* variable is always 1\.

**Note:** If you use this command to execute memory-consuming actions such as massive data imports, you can consider calling the *ALTER DATABASE* SQL command in order to temporarily disable the SQL options.
