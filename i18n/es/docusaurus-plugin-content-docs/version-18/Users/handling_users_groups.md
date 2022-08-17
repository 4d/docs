---
id: editing
title: Managing 4D users and groups
---

## Designer and Administrator

4D provides users with certain standard access privileges and certain powers. Once a users and groups system has been initiated, these standard privileges take effect.

The most powerful user is named **Designer**. No aspect of the database is closed to the Designer. The Designer can:

- access all database servers without restriction,
- create users and groups,
- assign access privileges to groups,
- access the Design environment. In single-user environment, Designer access rights are always used. In client/server environment, assigning a password to the Designer activates the display of the 4D user login dialog.  Access to Design environment is read-only.

After the Designer, the next most powerful user is the **Administrator**, who is usually given the tasks of managing the access system and administration features.

The Administrator can:

- create users and groups,
- access the 4D Server Administration window and monitor
- access the MSC window to monitor backup, restore, or server.

The Administrator cannot:

- edit the Designer user
- by default, access to protected parts of the database. In particular, the Administrator cannot access to the Design mode if it is restricted. The Administrator must be part of one or more groups to have access privileges in the database. The Administrator is placed in every new group, but you can remove the Administrator’s name from any group.

Both the Designer and Administrator are available by default in all databases. In the [user management dialog box](#users-and-groups-editor), the icons of the Designer and Administrator are displayed in red and green respectively:

- Designer icon: ![](../assets/en/Users/iconDesigner.png)
- Administrator icon: ![](../assets/en/Users/iconAdmin.png)

You can rename the Designer and Administrator users. In the language, the Designer ID is always 1 and the Administrator ID is always 2.

The Designer and Administrator can each create up to 16,000 groups and 16,000 users.

## Users editor

The editor for users is located in the Toolbox of 4D.

![](../assets/en/Users/editor.png)

### Adding and modifying users

You use the users editor to create user accounts, set their properties and assign them to various groups.

To add a user from the Toolbox :

1. Select **Tool Box > Users** from the **Design** menu or click on the **Tool Box** button of the 4D toolbar. 4D displays the users editor.

The list of users displays all the users, including the [Designer and the Administrator](#designer-and-administrator).

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of users. OR Right-click in the list of users and choose **Add** or **Duplicate** in the context menu.

> The **Duplicate** command can be used to create several users having the same characteristics quickly.

4D adds a new user to the list, named "New userX" by default.

3. Enter the user name. This name will be used by the user to open the database. You can rename a user at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

4. To enter a password for the user, click the **Edit...** button in the user properties area and enter the password twice in the dialog box. You can use up to 15 alphanumeric characters for a password. The password editor is case sensitive.

> Users can change their password at any time according to the options in the "Security" page of the database settings, or using the `CHANGE PASSWORD` command.

5. Set the group(s) to which the user belongs using the "Member of Groups" table. You can add or remove the selected user to/from a group by checking the corresponding option in the Member column.

The membership of users to different groups can also be set by group on the [Groups page](#configuring-access-groups).

### Deleting a user

To delete a user, select it then click the deletion button or use the **Delete** command of the context menu. ![](../assets/en/Users/MinussNew.png)

Deleted user names no longer appear in the Users editor. Note that the IDs for deleted users are reassigned when new user accounts are created.

### User properties

- **User Kind**: The User Kind field contains "Designer", "Administrator", or (for all other users) "User".

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the database (optional). This method can be used for example to load the user preferences.

## Groups editor

The editor for groups is located in the Toolbox of 4D.

### Configuring groups

You use the groups editor to set the elements that each group contains (users and/or other groups) and to distribute access to plug-ins.

Keep in mind that once a group has been created, it cannot be deleted. If you want to deactivate a group, you just need to remove any users it contains.

To create a group:

1. Select **Tool Box > Groups** in the **Design** menu or click  on the **Tool Box** button of the 4D toolbar then on the **Groups** button. 4D displays the groups editor window. The list of groups displays all the groups of the database.

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of groups.  
   OR  
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> The Duplicate command can be used to create several groups having the same characteristics quickly.

4D adds a new group to the list, named "New groupX" by default.

3. Enter the name of the new group. The group name can be up to 15 characters long. You can rename a group at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

### Placing users or groups into groups

You can place any user or group into a group, and you can also place the group itself into several other groups. It is not mandatory to place a user in a group.

To place a user or group in a group, you simply need to check the "Member" option for each user or group in the member attribution area:

![](../assets/en/Users/groups.png)

If you check the name of a user, this user is added to the group. If you check the name of a group, all the users of the group are added to the new group. The affiliated user or group will then have the same access privileges as those assigned to the new group.

Placing groups into other groups lets you create a user hierarchy. The users of a group placed in another group will have the access privileges of both groups. See "[An access hierarchy scheme](#an-access-hierarchy-scheme)" below.

To remove a user or group from another group, you just need to deselect the corresponding option in the member attribution area.

### Assigning a group to a plug-in or to a server

You can assign a group privileges to any plug-ins installed in the database. This includes all the 4D plug-ins and any third-party plug-ins.

Distributing access to the plug-ins lets you control the use of the licenses you possess for these plug-ins. Any users that do not belong to the access group of a plug-in cannot load this plug-in.

You can also restrict the use of the 4D Client Web server and SOAP server via the plug-in access area.

The “Plug-in” area on the Groups page of the tool box lists all the plug-ins loaded by the 4D application. To give a group access to a plug-in, you simply need to check the corresponding option.

![](../assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. These licenses are considered as plug-in licenses by 4D Server. Therefore, in the same way as for plug-ins, you can restrict the right to use these licenses to a specific group of users.

### An access hierarchy scheme

The best way to ensure the security of your database and provide users with different levels of access is to use an access hierarchy scheme. Users can be assigned to appropriate groups and groups can be nested to create a hierarchy of access rights. This section discusses several approaches to such a scheme.

In this example, a user is assigned to one of three groups depending on their level of responsibility. Users assigned to the Accounting group are responsible for data entry. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.

The groups are then nested so that privileges are correctly distributed to the users of each group.

- The General Management group contains only “high-level” users. ![](../assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well. ![](../assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well. ![](../assets/en/Users/schema3.png)

You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.

Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.
