---
id: overview
title: Access system basics
---

If more than one person uses a database, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the database or to database operations.

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).


## Users and groups feature activation

The following rules are applied in project databases, depending on the running 4D environment:

||4D Developer (single-user)|4D Server|  
|---|---|---|
|Adding/editing users and groups|yes|yes|
|Assigning access to groups|yes|yes|
|User management|no (all users are Designer)|yes|
|Access control once the Designer has been assigned a password|no|yes|


## Toolbox editor

The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](assets/en/Users/editor.png)

> Users and groups can also be handled using 4D commands such as [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html).



## Assigning group access

4D’s password access system is based on users and groups. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the database. Groups can be assigned access privileges to specific parts or features of the database, either through the interface, or through a customized system with the language. 

The following example shows Design and Runtime explorer access rights being assigned to the "Devs" group: 

![](assets/en/Users/Access1.png)


## Activating access control

You initiate the 4D password access control system by **assigning a password to the Designer**.

Until you give the Designer a password, all database access are done with the Designer's access rights, even if you have set up users and groups (when the database opens, no ID is required). Any part of the database is opened.

When a password is assigned to the Designer, all the access privileges take effect. In order to open the database, users must enter a password.

> Warning: Do not forget the Designer’s password! If you do, you will be unable to open the database in the Design environment.

To disable the password access system, you just need to remove the Designer password. 
