---
id: restore-info
title: RESTORE INFO
slug: /commands/restore-info
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE INFO.Syntax-->**RESTORE INFO** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.RESTORE INFO.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Type of information to get |
| info1 | Integer, Date | &#8592; | Value 1 of the selector |
| info2 | Text, Time | &#8592; | Value 2 of the selector |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESTORE INFO.Summary-->The RESTORE INFO command gets information related to the last automatic database restore.<!-- END REF--> 

Pass the type of information to get in *selector*. You can use one of the following constants, placed in the “*Backup and Restore*” theme:

| Constant            | Type    | Value |
| ------------------- | ------- | ----- |
| Last restore date   | Integer | 0     |
| Last restore status | Integer | 2     |

The type and content of the *info1* and *info2* parameters depend on the value of *selector*.

* If *selector* \= 0 (Last Restore Date), *info1* returns the date and *info2* the time of the last automatic database restore.
* If *selector* \= 2 (Last Restore Status), *info1* returns the number and *info2* the text of the status of the last automatic database restore.

**Note:** This command does not take manual database restores into account.

#### See also 

[RESTORE](restore.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 889 |
| Thread safe | &cross; |


