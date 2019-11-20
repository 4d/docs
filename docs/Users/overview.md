---
id: overview
title: Access system overview
---

If more than one person uses a database, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the database or to database operations.

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).


## Users and groups feature activation

The following rules are applied in project databases, depending on the 4D environment:

||4D Developer (single-user)|4D Server|  
|---|---|
|Adding/editing users and groups|yes|yes|
|Assigning group access|yes|yes|
|User management|no (always Designer)|yes (automatic)|
|User login control (dialog)|no|yes (when the Designer has been assigned a password)|


## Designer and Administrator

The most powerful user is named **Designer**. The Designer has control over the design of the database and all its parts. In single-user mode, Designer access rights are always used. In client/server, assigning a password to the Designer activates the user login control. 

After the Designer, the next most powerful user is the Administrator, who is usually given the tasks of managing the access system and administration features such as backup or server monitoring. 

Both the Designer and Administrator are available by default in all databases. 


## Toolbox editor

The editor for users and groups is located in the tool box of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](assets/en/Users/Access1.png)

> Users and groups can also be handled using 4D commands such as [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html).



## Assigning group access

4D’s password access system is based on users and groups. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the database. Groups can be assigned access privileges to specific parts or features of the database, either through the interface (see below), or through any customized system with the language. 

The following example shows Design and Runtime explorer access rights being assigned to the "Devs" group: 

![](assets/en/Users/Access1.png)


## Access to protected databases  

When a remote 4D connects to a password protected database, the following login dialog box is displayed by default:

![](assets/en/Users/Identification.png)

You can configure this dialog box using the "Security" page of the Database Settings. 

