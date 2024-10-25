---
id: security
title: Security page
---

This page contains options related to data access and protection for your desktop applications.

**Note**: For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Data Access / Remote Users Access

> These settings do not apply to project databases opened in single-user mode.

-   **Design and Runtime Explorer Access**: Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer.

    Note that:
    -   Setting an access group in the Design environment also lets you deactivate the **Create table** option in the data import dialog box. For more information about this dialog box, refer to [Importing data from files](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

    -   The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

-   **Default User**: When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. It is no longer necessary to enter a user name. Moreover, if you have not associated a password with the Default User, the Password dialog box no longer appears and the database opens directly.
    This option simplifies access to the database while maintaining a complete data control system.

    -   If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password.
    -   If you haven't associated a password with the Default User, the User Identification dialog box will not appear.**Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the **Shift** key while opening the database or connecting to it.

-   **Display User List in Password Dialog Box**: If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. If it is not checked, users must enter both their name and password. For more information about the two versions of the password dialog box, see the section "Access system overview" in [Access system overview](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

    -   **User List in Alphabetical Order** (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order.

-   **Users can change their password**: When this option is checked, a **Change** button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in [Ensuring system maintenance](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). If desired, you can hide the **Change** button so that users cannot modify their passwords. To do so, just uncheck this option.

## Options  

-   **Filtering of commands and project methods in the formula editor and in the 4D View Pro and 4D Write Pro documents**:
    For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to multistyle areas (using [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html)), 4D Write Pro and 4D View Pro documents: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. You can completely or partially remove this filtering using the following options.
    -   **Enabled for all** (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator. 
    -   **Disable for the Designer and the Administrator**: This option grants full access to 4D commands and to methods only for the Designer and Administrator. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.
        **Note:** If full access has been enabled using the previous option, this option will have no effect.
    -   **Disabled for all**: This option disables control within formulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones).
        **Note:** This option takes priority over the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command. When it is checked, this command does nothing.

-   **Enable User Settings**: You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: **Structure Settings**, **User Settings**, and **User Settings for Data File**. For more information, refer to [User settings](overview.md#user-settings).

-   **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. To do this, you must check this option. By default, it is not checked.

	When this option is checked:
	* 4D components are loaded,
	* each [On Host Database Event database method](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) of the component (if any) is called by the host database,
	* the code of the method is executed.

	When it is not checked:
	* 4D components are loaded but they have to manage their initialization and backup phases themselves.
	* the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)
	* the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation).