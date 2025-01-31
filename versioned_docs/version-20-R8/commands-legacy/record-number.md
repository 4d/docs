---
id: record-number
title: Record number
slug: /commands/record-number
displayed_sidebar: docs
---

<!--REF #_command_.Record number.Syntax-->**Record number** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Record number.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return the number of the current record, or Default table, if omitted |
| Function result | Integer | &#8592; | Current record number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Record number.Summary-->**Record number** returns the physical record number for the current record of *aTable*.<!-- END REF--> If there is no current record, such as when the record pointer is before or after the current selection, **Record number** returns –1\. If the record is a new record that has not been saved, **Record number** returns –3.

Record numbers can change. The record numbers of deleted records are reused.

**4D Server:** This command returns a different result for the On Validate form event depending on whether it is executed on 4D in local mode or 4D in remote mode. In local mode, the command returns a record number (the record is considered as already created). In remote mode, the command returns -3 because, in this case, the record is already created on the server but the information has not yet been sent to the client.

**Note:** It is recommended to use the [Is new record](is-new-record.md) command to check whether a record is in the process of being created. 

#### Example 

The following example saves the current record number and then searches for any other records that have the same data:

```4d
 $RecNum:=Record number([People]) // Get the record number
 QUERY([People];[People]Last =[People]Last) // Anyone else with the last name?
  // Display an alert with the number of people with the same last name
 ALERT("There are "+String(Records in selection([People])+" with that name.")
 GOTO RECORD([People];$RecNum) // Go back to the same record
```

#### See also 

*About Record Numbers*  
[GOTO RECORD](goto-record.md)  
[Is new record](is-new-record.md)  
[Selected record number](selected-record-number.md)  
[Sequence number](sequence-number.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 243 |
| Thread safe | &check; |


