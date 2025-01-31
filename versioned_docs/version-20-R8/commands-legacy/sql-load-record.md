---
id: sql-load-record
title: SQL LOAD RECORD
slug: /commands/sql-load-record
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOAD RECORD.Syntax-->**SQL LOAD RECORD** {( *numRecords* )}<!-- END REF-->
<!--REF #_command_.SQL LOAD RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| numRecords | Integer | &#8594;  | Number of records to load |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL LOAD RECORD.Summary-->The SQL LOAD RECORD command retrieves one or more record(s) in 4D coming from the data source open in the current connection.<!-- END REF-->

The optional *numRecords* parameter sets the number of records to retrieve:

* If you omit this parameter, the command retrieves the current record from the data source. This principle corresponds to the retrieval of data in a loop where one record is received at a time.
* If you pass an integer value in *numRecords*, the command retrieves *numRecords* records.
* If you pass the SQL All Records constant (value -1), the command retrieves all the records of the table.

**Note:** These last two settings are only useful when the retrieved data is associated with 4D arrays or fields. 

#### System variables and sets 

If the command has been executed correctly, the system variable OK returns 1\. Otherwise, it returns 0.

#### See also 

[SQL CANCEL LOAD](sql-cancel-load.md)  
[SQL EXECUTE](sql-execute.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 822 |
| Thread safe | &cross; |
| Modifies variables | OK |


