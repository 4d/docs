---
id: apply-to-selection
title: APPLY TO SELECTION
slug: /commands/apply-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.APPLY TO SELECTION.Syntax-->**APPLY TO SELECTION** ( *aTable* ; *statement* )<!-- END REF-->
<!--REF #_command_.APPLY TO SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to apply statement |
| statement | Expression | &#8594;  | One line of code or a method |

<!-- END REF-->

#### Description 

<!--REF #_command_.APPLY TO SELECTION.Summary-->**APPLY TO SELECTION** applies *statement* to each record in the current selection of *aTable*.<!-- END REF--> The *statement* can be a statement or a method. If *statement* modifies a record of *aTable*, the modified record is saved. If *statement* does not modify a record, the record is not saved. If the current selection is empty, **APPLY TO SELECTION** has no effect. If the relation is automatic, the *statement* can contain a field from a related table.

**Warning:** Parameters ($1...$n) are not supported in the *statement*. 

**APPLY TO SELECTION** can be used to gather information from the selection of records (for example, a total), or to modify a selection (for example, changing the first letter of a field to uppercase). If this command is used within a transaction, all changes can be undone if the transaction is canceled.

**4D Server:** The server does not execute any of the commands that may be passed in *statement*. Every record in the selection will be sent back to the local workstation to be modified.

The progress thermometer is displayed while **APPLY TO SELECTION** is executing. To hide it, use [MESSAGES OFF](messages-off.md) prior to the call to **APPLY TO SELECTION**. If the progress thermometer is displayed, the user can cancel the operation.

#### Example 1 

The following example changes all the names in the table \[Employees\] to uppercase:

```4d
 APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))
```

#### Example 2 

If a record is locked during execution of **APPLY TO SELECTION** and that record is modified, the record will not be saved. Any locked records that are encountered are put in a set called LockedSet. After **APPLY TO SELECTION** has executed, test LockedSet to see if any records were locked. The following loop will execute until all records have been modified:

```4d
 Repeat
    APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))
    USE SET("LockedSet") // Select only locked records
 Until(Records in set("LockedSet")=0) // Done when there are no locked records
```

#### Example 3 

This example uses a method:

```4d
 ALL RECORDS([Employees])
 APPLY TO SELECTION([Employees];M_Cap)
```

#### System variables and sets 

If the user clicks the Stop button in the progress thermometer, the OK system variable is set to 0\. Otherwise, the OK system variable is set to 1.

#### See also 

[EDIT FORMULA](edit-formula.md)  
*Sets*  

#### Properties
|  |  |
| --- | --- |
| Command number | 70 |
| Thread safe | &check; |
| Modifies variables | OK |


