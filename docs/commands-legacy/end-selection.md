---
id: end-selection
title: End selection
slug: /commands/end-selection
displayed_sidebar: docs
---

<!--REF #_command_.End selection.Syntax-->**End selection** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.End selection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to test if record pointer is beyond the last selected record, or Default table, if omitted |
| Function result | Boolean | &#8592; | Yes (TRUE) or No (FALSE) |

<!-- END REF-->

#### Description 

<!--REF #_command_.End selection.Summary-->**End selection** returns TRUE when the current record pointer is beyond the last record of the current selection of *aTable*.<!-- END REF-->is commonly used to check whether or not [NEXT RECORD](next-record.md) has moved the current record pointer past the last record. If the current selection is empty, **End selection** returns TRUE.

To move the current record pointer back into the selection, use [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) or [GOTO SELECTED RECORD](goto-selected-record.md). [PREVIOUS RECORD](previous-record.md) does not move the pointer back into the selection.

**End selection** also returns TRUE in the last footer when a report is being printed with [PRINT SELECTION](print-selection.md) or from the Print menu. You can use the following code to test for the last footer and print a special footer for the last page:

```4d
  // Method of a form being used as output form for a summary report
 $vpFormTable:=Current form table
 Case of
  // ...
    :(Form event code=On Printing Footer)
  // A footer is about to be printed
       If(End selection($vpFormTable->))
  // Code for the last footer goes here
       Else
  // Code for a footer goes here
       End if
 End case
```

#### Example 

This form method is used during the printing of a report. It sets the variable *vFooter* to print in the Footer area on the last page:

```4d
  // [Finances];"Summary" Form Method
 Case of
  // ...
    :(Form event code=On Printing Footer)
       If(End selection([Finances]))
          vFooter:="©2001 Acme Corp." // Set the footer for the last page
       Else
          vFooter:="" // Clear the footer for all other pages
       End if
 End case
```

#### See also 

[Before selection](before-selection.md)  
[Form event code](../commands/form-event-code.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PRINT SELECTION](print-selection.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 36 |
| Thread safe | &check; |
| Forbidden on the server ||


