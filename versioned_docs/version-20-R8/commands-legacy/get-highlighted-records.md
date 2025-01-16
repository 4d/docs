---
id: get-highlighted-records
title: GET HIGHLIGHTED RECORDS
slug: /commands/get-highlighted-records
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Syntax-->**GET HIGHLIGHTED RECORDS** ( {*aTable* ;} *setName* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHTED RECORDS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table where the highlighted records will be read If omitted, table of the current form |
| setName | Text | &#8594;  | Set where the highlighted records will be stored |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Summary-->The **GET HIGHLIGHTED RECORDS** command stores in the set designated by the *setName* parameter the highlighted records (i.e., the records highlighted by the user in the list form) in the *aTable* passed as parameter.<!-- END REF--> If the *aTable* parameter is omitted, the table of the current form or subform is used.

In Design mode or when executing the [DISPLAY SELECTION](display-selection.md) /[MODIFY SELECTION](modify-selection.md) commands, this command can be replaced by calling the UserSet system set which is automatically maintained by 4D. However, since this command allows you to pick the table that will receive highlighted records, the GET HIGHLIGHTED RECORDS command can also manage record selections in subforms as well. In this case, subform selections can also come from different tables. For more information about the UserSet set, refer to the *Sets* section.

The **GET HIGHLIGHTED RECORDS** command can also be called in a non-form context; however, the returned set is empty.   
The set designated by *setName* can be local/client, process or interprocess. 

**Note:** In included subforms, the **GET HIGHLIGHTED RECORDS** command returns an empty set if the subform does not have the **Multiple** Selection Mode property. In this case, to find out the selected row, you must use the [Selected record number](selected-record-number.md) command. 

#### Example 

This method indicates how many records are selected in the subform displaying the records of the \[CDs\] table:

```4d
 GET HIGHLIGHTED RECORDS([CDs];"$highlight")
 ALERT(String(Records in set("$highlight"))"+"selected records.")
 CLEAR SET("$highlight")
```

#### System variables and sets 

If the command was executed properly, the system variable OK is set to 1\. Otherwise, it is set to 0\. 

#### See also 

[HIGHLIGHT RECORDS](highlight-records.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 902 |
| Thread safe | &cross; |
| Modifies variables | OK |


