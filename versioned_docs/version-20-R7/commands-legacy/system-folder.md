---
id: system-folder
title: System folder
slug: /commands/system-folder
displayed_sidebar: docs
---

<!--REF #_command_.System folder.Syntax-->**System folder** {( *type* )} : Text<!-- END REF-->
<!--REF #_command_.System folder.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| type | Integer | &#8594;  | Type of system folder |
| Function result | Text | &#8592; | Pathname to a system folder |

<!-- END REF-->

#### Description 

<!--REF #_command_.System folder.Summary-->The **System folder** command returns the pathname to a particular folder of the operating system or to the active Windows or macOS System folder itself.<!-- END REF-->

You pass in the optional *type* parameter a value indicating the type of system folder. 4D provides you with the following predefined constants, placed in the “*System Folder*” theme:

| Constant                      | Type    | Value | Comment                                                        |
| ----------------------------- | ------- | ----- | -------------------------------------------------------------- |
| Applications or program files | Integer | 16    |                                                                |
| Desktop                       | Integer | 15    |                                                                |
| Documents folder              | Integer | 17    | "Documents" folder of user                                     |
| Favorites Win                 | Integer | 14    |                                                                |
| Fonts                         | Integer | 1     |                                                                |
| Home folder                   | Integer | 18    | Current home folder of the user (usually "/Users/<username>/") |
| Start menu Win\_all           | Integer | 8     |                                                                |
| Start menu Win\_user          | Integer | 9     |                                                                |
| Startup Win\_all              | Integer | 4     |                                                                |
| Startup Win\_user             | Integer | 5     |                                                                |
| System                        | Integer | 0     |                                                                |
| System Win                    | Integer | 12    |                                                                |
| System32 Win                  | Integer | 13    |                                                                |
| User preferences\_all         | Integer | 2     |                                                                |
| User preferences\_user        | Integer | 3     |                                                                |

**Notes:**

* The constants suffixed **Win** can be used on Windows only. When they are used on macOS, **System folder** will return an empty string.
* The pathnames to some system folders can specific to the current user. Constants 2 to 9 allow you to choose whether you want to obtain the pathname to a folder which is shared by all users, or customized for the current user.

If you omit the *type* parameter, the function will return the pathname to active System folder (= constant System).

#### See also 

[Get 4D folder](get-4d-folder.md)  
[Temporary folder](temporary-folder.md)  