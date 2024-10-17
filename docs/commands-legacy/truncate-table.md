---
id: truncate-table
title: TRUNCATE TABLE
slug: /commands/truncate-table
displayed_sidebar: docs
---

<!--REF #_command_.TRUNCATE TABLE.Syntax-->**TRUNCATE TABLE** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.TRUNCATE TABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table where all records will be deleted or Default table if this parameter is omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.TRUNCATE TABLE.Summary-->The **TRUNCATE TABLE** command quickly deletes all the records of *aTable*.<!-- END REF--> After calling the command, there is no longer any current selection or current record.

The effect of this command is similar to that of an [ALL RECORDS](all-records.md) / [DELETE SELECTION](delete-selection.md) sequence; however, its functioning differs on the following points:

* No trigger is called
* The referential integrity of the data is not checked.
* No transaction must be underway in the process executing **TRUNCATE TABLE**. If this if the case, the command does nothing and the OK system variable is set to 0
* If one or more records are locked by another process, the command fails: an error is generated and the OK system variable is set to 0\. The LockedSet system set is not created.
* If *aTable* is already empty, **TRUNCATE TABLE** does nothing and sets the OK variable to 1.
* If *aTable* is in read-only, **TRUNCATE TABLE** does nothing and sets the OK variable to 0.
* The operation is recorded in the log file if there is one.

The **TRUNCATE TABLE** command should therefore be used with caution but is very effective in certain cases, for example, such as quickly deleting temporary data

**Note:** The concept and functioning of this command is similar to that of the SQL TRUNCATE (TABLE) command.

#### System variables and sets 

If the command has been executed correctly, the OK system variable is set to 1\. Otherwise, it is set to 0.

#### See also 

[DELETE SELECTION](delete-selection.md)  