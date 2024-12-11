---
id: users-to-blob
title: USERS TO BLOB
slug: /commands/users-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.USERS TO BLOB.Syntax-->**USERS TO BLOB** ( *users* )<!-- END REF-->
<!--REF #_command_.USERS TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| users | Blob | &#8594;  | BLOB that must contain users |
| &#8592; | User accounts (encrypted) |

<!-- END REF-->

#### Description 

<!--REF #_command_.USERS TO BLOB.Summary-->**Compatibility Note:* This command only works in binary databases.<!-- END REF--> It always returns an empty BLOB in projects.* 

The **USERS TO BLOB** command stores in the BLOB *users* the list of all user accounts and database groups created by the Administrator.

Only the database Administrator or the Designer can execute this command. If another user tries to execute it, the command does nothing and a privilege error (-9949) is generated.

The generated BLOB is encrypted automatically and can only be read using the [BLOB TO USERS](blob-to-users.md) command. You can store this BLOB in a file on your hard disk or in a field.

This command is the equivalent of recording groups and users from the Toolbar. The only difference is that it lets you store user accounts in a BLOB field and not just in a file.

This lets you keep a backup of users in the database data and, as such, implements a backup mechanism as well as a system to load users automatically when a database structure file is updated (information related to user accounts are stored by 4D in the database structure file).

#### See also 

[BLOB TO USERS](blob-to-users.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 849 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


