---
id: backup-info
title: BACKUP INFO
slug: /commands/backup-info
displayed_sidebar: docs
---

<!--REF #_command_.BACKUP INFO.Syntax-->**BACKUP INFO** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.BACKUP INFO.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Type of information to get |
| info1 | Integer, Date | &#8592; | Value 1 of the selector |
| info2 | Time, Text | &#8592; | Value 2 of the selector |

<!-- END REF-->

#### Description 

<!--REF #_command_.BACKUP INFO.Summary-->The BACKUP INFO command gets information related to the last backup performed on the database data.<!-- END REF-->

Pass the type of information to get in *selector*. The type and content of the *info1* and *info2* parameters depend on the value of *selector*. You can use one of the following constants, placed in the “*Backup and Restore*” theme:

| Constant                | Type    | Value | Comment                                                                                                                                                                                  |
| ----------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Last backup date        | Integer | 0     | *info1* returns the date and *info2* the time of the last backup.                                                                                                                        |
| Last backup information | Integer | 5     | *info1* returns the last backup duration in milliseconds (longint) and *info2* the last backup begin timestamp (string, see formatting details in the [Timestamp](timestamp.md) command) |
| Last backup status      | Integer | 2     | *info1* returns the number and *info2* the text of the status of the last backup                                                                                                         |
| Next backup date        | Integer | 4     | *info1* returns the date and *info2* the time of the next scheduled backup                                                                                                               |

#### See also 

[RESTORE](restore.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 888 |
| Thread safe | &cross; |


