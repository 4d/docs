---
id: delete-folder
title: DELETE FOLDER
slug: /commands/delete-folder
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FOLDER.Syntax-->**DELETE FOLDER** ( *folder* {; *deleteOption*} )<!-- END REF-->
<!--REF #_command_.DELETE FOLDER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| folder | Text | &#8594;  | Name or full path of the folder to be deleted |
| deleteOption | Integer | &#8594;  | Folder deletion option |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE FOLDER.Summary-->The **DELETE FOLDER** command deletes the folder whose name or full path has been passed in *folder*.<!-- END REF--> 

By default, for security reasons, if you omit the *deleteOption* parameter, **DELETE FOLDER** only allows empty folders to be deleted. If you want the command to be able to delete non-empty folders, you must use the *deleteOption* parameter. In *deleteOption*, you can pass one of the following constants, found in the "*System Documents*" theme:

| Constant             | Type    | Value | Comment                                          |
| -------------------- | ------- | ----- | ------------------------------------------------ |
| Delete only if empty | Integer | 0     | Deletes folder only when it is empty             |
| Delete with contents | Integer | 1     | Deletes folder along with everything it contains |

* When Delete only if empty (0) is passed or if you omit the *deleteOption* parameter:  
   * The folder specified in the *folder* parameter is only deleted if it is empty; otherwise, the command does nothing and an error -47 (The file is already open, or the folder is not empty) is generated.  
   * If the folder specified does not exist , the error -120 (Tried to access a file by using a pathname that specifies a non existing directory) is generated.
* When Delete with contents (1) is passed:  
   * The folder along with all of its contents are deleted.  
   **Warning:** Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, they are still deleted.  
   * If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and an error(\*) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use [Last errors](last-errors.md)  command to retrieve the name and path of the offending file.  
   * If the folder specified does not exist, the command does nothing and no error is returned.  
   (\*) under Windows: -54 (Attempt to open locked file for writing)  
   under OS X: -45 (The file is locked or the pathname is not correct)

You can intercept these errors using a method installed by the [ON ERR CALL](on-err-call.md) command.

#### See also 

  
[DELETE DOCUMENT](delete-document.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 693 |
| Thread safe | &check; |
| Modifies variables | OK, error |


