---
id: blob-to-users
title: BLOB TO USERS
slug: /commands/blob-to-users
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO USERS.Syntax-->**BLOB TO USERS** ( *users* )<!-- END REF-->
<!--REF #_command_.BLOB TO USERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| users | Blob | &#8594;  | BLOB (encrypted) containing database user accounts created and saved by the database Administrator |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.BLOB TO USERS.Summary-->The BLOB TO USERS command replaces the user accounts and groups found in the BLOB *users* in the current database.<!-- END REF--> The BLOB *users* is encrypted and must have been created using the [USERS TO BLOB](users-to-blob.md) command.

Only the database Administrator or Designer can execute this command. If another user attempts to execute it, the command does nothing and a privilege error (-9949) is generated.

The effects of this command are different depending on whether it is executed from a project or a binary database:

**Project database**

This command is used for compatibility, to move previously saved users and groups from a BLOB file to the *directory.json* file of the database. All users and groups already defined in the *directory.json* file are replaced by the *users* BLOB contents, except the "Designer" and "Administrator".

**Binary database**

This command causes the replacement of any existing accounts and groups created by the Administrator in the database. If the BLOB *users* contains valid data, the command performs the following operations:

* all users and groups defined in the database whose reference numbers are negative (groups and users created by the Administrator) are removed from the structure,
* all users and groups found in the BLOB *users* are added to the structure.

**Compatibility note:** User and group files (.4UG extension) created by the **Save Groups...** menu command in previous 4D versions can be loaded in 4D using the following sequence (very old 4D versions may require to use intermediary versions):

```4d
 DOCUMENT TO BLOB(mydoc;blob)
 BLOB TO USERS(blob)
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0.

#### See also 

[USERS TO BLOB](users-to-blob.md)  