---
id: all-records
title: ALL RECORDS
slug: /commands/all-records
displayed_sidebar: docs
---

<!--REF #_command_.ALL RECORDS.Syntax-->**ALL RECORDS** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.ALL RECORDS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to select all records, or Default table, if omitted |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.ALL RECORDS.Summary-->ALL RECORDS selects all the records of *aTable* for the current process.<!-- END REF--> ALL RECORDS makes the first record the current record and loads the record from disk. ALL RECORDS returns the records to the default record order, which is the order in which the records are stored on disk.

## Example 

The following example displays all the records from the \[People\] table:

```4d
 ALL RECORDS([People]) // Select all the records in the table
 DISPLAY SELECTION([People]) // Display records in output form
```

## See also 

[DISPLAY SELECTION](../commands/display-selection)  
[MODIFY SELECTION](../commands/modify-selection)  
[ORDER BY](../commands/order-by)  
[QUERY](../commands/query)  
[Records in selection](../commands/records-in-selection)  
[Records in table](../commands/records-in-table)  

## Properties

|  |  |
| --- | --- |
| Command number | 47 |
| Thread safe | yes |
| Changes current record ||
| Changes current selection ||


