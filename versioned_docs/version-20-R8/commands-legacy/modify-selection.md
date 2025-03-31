---
id: modify-selection
title: MODIFY SELECTION
slug: /commands/modify-selection
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY SELECTION.Syntax-->**MODIFY SELECTION** ( {*aTable*}{; *selectMode*}{; *enterList*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.MODIFY SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to display and modify, or Default table, if omitted |
| selectMode | Integer | &#8594;  | Selection mode |
| enterList | Boolean | &#8594;  | Authorize Enter in list option |
| * | Operator |  &#8594;  | Use output form for one record selection and hide scroll bars in the input form |
| * | Operator |  &#8594;  | Show scroll bars in the input form (overrides second option of first optional *) |

<!-- END REF-->

#### Description 

<!--REF #_command_.MODIFY SELECTION.Summary-->**MODIFY SELECTION** does almost the same thing as [DISPLAY SELECTION](display-selection.md).<!-- END REF--> Refer to the description of [DISPLAY SELECTION](display-selection.md) for details. The differences between the two commands are:

1\. [DISPLAY SELECTION](display-selection.md) and **MODIFY SELECTION** enable you to display the current selected records in list mode, or in the input form when you double-click on a record. Using **MODIFY SELECTION**, you can also modify the fields of the record in the input form when you double-click on it, if it is not already in use by another process or user, or in “Enter in List” mode (if it is authorized).

2\. [DISPLAY SELECTION](display-selection.md) loads the records in Read-only mode in the current process, which means that they are not locked for writing in the other processes. **MODIFY SELECTION** places all the records of the selection in Read-Write mode, which means that they are automatically locked for writing in other processes. **MODIFY SELECTION** frees the records when its execution is completed.

#### See also 

[DISPLAY SELECTION](display-selection.md)  
[Form event code](../commands/form-event-code.md)  
*Sets*  

#### Properties

|  |  |
| --- | --- |
| Command number | 204 |
| Thread safe | &cross; |
| Forbidden on the server ||


