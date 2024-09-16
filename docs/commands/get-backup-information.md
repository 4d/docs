---
id: get-backup-information
title: GET BACKUP INFORMATION
displayed_sidebar: docs
---

<!--REF #_command_.GET BACKUP INFORMATION.Syntax-->**GET BACKUP INFORMATION** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET BACKUP INFORMATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Longint | -> | Type of information to get |
| info1 | Longint, Date | <-> | Value 1 of the selector |
| info2 | Time, String | <-> | Value 2 of the selector |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET BACKUP INFORMATION.Summary-->The GET BACKUP INFORMATION command gets information related to the last backup performed on the database data.<!-- END REF-->

Pass the type of information to get in *selector*. The type and content of the *info1* and *info2* parameters depend on the value of *selector*. You can use one of the following constants, placed in the “[Backup and Restore](/4Dv20R6/4D/20-R6/Backup-and-Restore.302-6958506.en.html)” theme:

| Constant                | Type    | Value | Comment                                                                                                                                                                                  |
| ----------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Last backup date        | Longint | 0     | *info1* returns the date and *info2* the time of the last backup.                                                                                                                        |
| Last backup information | Longint | 5     | *info1* returns the last backup duration in milliseconds (longint) and *info2* the last backup begin timestamp (string, see formatting details in the [Timestamp](timestamp.md) command) |
| Last backup status      | Longint | 2     | *info1* returns the number and *info2* the text of the status of the last backup                                                                                                         |
| Next backup date        | Longint | 4     | *info1* returns the date and *info2* the time of the next scheduled backup                                                                                                               |

#### See also 
[RESTORE](restore.md)  