---
id: system-folder
title: System folder
slug: /commands-legacy/system-folder
displayed_sidebar: docs
---

<!--REF #_command_.System folder.Syntax-->**System folder** {( *type* )} -> Function result<!-- END REF-->
<!--REF #_command_.System folder.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| type | Longint | &rarr; | Type of system folder |
| Function result | String | &larr; | Pathname to a system folder |

<!-- END REF-->

#### Description 

<!--REF #_command_.System folder.Summary-->The **System folder** command returns the pathname to a particular folder of the operating system or to the active Windows or macOS System folder itself.<!-- END REF-->

You pass in the optional *type* parameter a value indicating the type of system folder. 4D provides you with the following predefined constants, placed in the “*System Folder*” theme:

| Constant                      | Type    | Value | Comment                                                        |
| ----------------------------- | ------- | ----- | -------------------------------------------------------------- |
| Applications or program files | Longint | 16    |                                                                |
| Desktop                       | Longint | 15    |                                                                |
| Documents folder              | Longint | 17    | "Documents" folder of user                                     |
| Favorites Win                 | Longint | 14    |                                                                |
| Fonts                         | Longint | 1     |                                                                |
| Home folder                   | Longint | 18    | Current home folder of the user (usually "/Users/<username>/") |
| Start menu Win\_all           | Longint | 8     |                                                                |
| Start menu Win\_user          | Longint | 9     |                                                                |
| Startup Win\_all              | Longint | 4     |                                                                |
| Startup Win\_user             | Longint | 5     |                                                                |
| System                        | Longint | 0     |                                                                |
| System Win                    | Longint | 12    |                                                                |
| System32 Win                  | Longint | 13    |                                                                |
| User preferences\_all         | Longint | 2     |                                                                |
| User preferences\_user        | Longint | 3     |                                                                |

**Notes:**

* The constants suffixed **Win** can be used on Windows only. When they are used on macOS, **System folder** will return an empty string.
* The pathnames to some system folders can specific to the current user. Constants 2 to 9 allow you to choose whether you want to obtain the pathname to a folder which is shared by all users, or customized for the current user.

If you omit the *type* parameter, the function will return the pathname to active System folder (= constant System).

#### See also 

[Get 4D folder](get-4d-folder.md)  
[Temporary folder](temporary-folder.md)  