---
id: delete-selection
title: DELETE SELECTION
slug: /commands/delete-selection
displayed_sidebar: docs
---

<!--REF #_command_.DELETE SELECTION.Syntax-->**DELETE SELECTION** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DELETE SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to delete the current selection, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE SELECTION.Summary-->**DELETE SELECTION** deletes the current selection of records from *aTable*.<!-- END REF--> If the current selection is empty, **DELETE SELECTION** has no effect. After the records are deleted, the current selection is empty. Records that are deleted during a transaction are locked to other users and other processes until the transaction is validated or canceled.

**Warning:** Deleting a selection of records is a permanent operation, and cannot be undone.

Unchecking the **Records definitively deleted** option in the table Inspector allows you to increase the speed of deletions when **DELETE SELECTION** is used (see *Records definitively deleted* in the *Design Reference* manual).

#### Example 1 

The following example displays all the records from the \[People\] table and allows the user to select which ones to delete. The example has two sections. The first is a method to display the records. The second is an object method for a Delete button. Here is the first method:   

```4d
 ALL RECORDS([People]) // Select all records
 FORM SET OUTPUT([People];"Listing") // Set the form to list the records
 DISPLAY SELECTION([People]) // Display all records
```

The following is the object method for the Delete button, which appears in the Footer area of the output form. The object method uses the records the user selected (the UserSet) to delete the selection. Note that if the user did not select any records, **DELETE SELECTION** has no effect.

```4d
  // Confirm that the user really wants to delete the records
 CONFIRM("You selected "+String(Records in set("UserSet"))+" people to delete."+Char(13)+"Click OK to delete them.")
 If(OK=1)
    USE SET("UserSet") // Use the records chosen by the user
    DELETE SELECTION([People]) // Delete the selection of records
 End if
 ALL RECORDS([People]) // Select all records
```

#### Example 2 

If a locked record is encountered during the execution of **DELETE SELECTION**, that record is not deleted. Any locked records are put into a set called LockedSet. After **DELETE SELECTION** has executed, you can test the LockedSet to see if any records were locked. The following loop will execute until all the records have been deleted:

```4d
 Repeat // Repeat for any locked records
    DELETE SELECTION([ThisTable])
    If(Records in set("LockedSet")#0) // If there are locked records
       USE SET("LockedSet") // Select only the locked records
    End if
 Until(Records in set("LockedSet")=0) // Until there are no more locked records
```

#### See also 

[DISPLAY SELECTION](display-selection.md)  
[MODIFY SELECTION](modify-selection.md)  
*Record Locking*  
*Sets*  
[TRUNCATE TABLE](truncate-table.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 66 |
| Thread safe | &check; |
| Changes current selection ||


