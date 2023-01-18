---
id: overview
title: Überblick
---

If more than one person uses a database, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the database or to database operations.

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Assigning group access

4D’s password access system is based on users and groups. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the database.

Groups can then be assigned access privileges to specific parts or features of the database (Design access, HTTP server, SQL server, etc.), or any custom part.

The following example shows Design and Runtime explorer access rights being assigned to the "Devs" group:

![](../assets/en/Users/Access1.png)

## Activating access control

You initiate the 4D password access control system in client-server by **assigning a password to the Designer**.

Until you give the Designer a password, all database access are done with the Designer's access rights, even if you have set up users and groups (when the database opens, no ID is required). Any part of the database can be opened.

When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the database, remote users must enter a password.

To disable the password access system, you just need to remove the Designer password.

## Users and groups in project architecture

In project databases (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective in 4D Server databases. The following table lists the main users and groups features and their availability:

|                                                               | 4D Developer (single-user)   | 4D Server |
| ------------------------------------------------------------- | ---------------------------- | --------- |
| Adding/editing users and groups                               | ja                           | ja        |
| Assigning user/group access to servers                        | ja                           | ja        |
| User identification                                           | no (all users are Designer)  | ja        |
| Access control once the Designer has been assigned a password | no (all access are Designer) | ja        |

## Toolbox editor

The editors for users and groups are located in the toolbox of 4D. The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc. The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](../assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html) command.

## Directory.json file

Users, groups, as well as their access rights are stored in a specific database file named **directory.json**.

This file can be stored at the following locations:

- in the user database settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the database.
- in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. If a directory.json file is present at this location, it takes priority over the file in the user database settings folder. This feature allows you to define custom/local Users and Groups configurations. The custom configuration will left untouched by a database upgrade.

> If users and groups management is not active, the directory.json is not created.
