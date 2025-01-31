---
id: change-current-user
title: CHANGE CURRENT USER
slug: /commands/change-current-user
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE CURRENT USER.Syntax-->**CHANGE CURRENT USER** {( *user* ; *password* )}<!-- END REF-->
<!--REF #_command_.CHANGE CURRENT USER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| user | Text, Integer | &#8594;  | Name or unique user ID |
| password | Text | &#8594;  | Password (not encrypted) |

<!-- END REF-->

#### Description 

<!--REF #_command_.CHANGE CURRENT USER.Summary-->**CHANGE CURRENT USER** changes the identity of the current user in the database, without needing to quit.<!-- END REF--> The user can change their identity themselves either using the database connection dialog box (when the command is called without parameters) or directly via the command. When a user changes their identity, they abandon any former access privileges in favor of those belonging to the chosen user.

**Notes:** 

* This command has no effect in project databases opened in single user mode.
* If an alias was defined for the current user with the [SET USER ALIAS](set-user-alias.md) command, it is reset by the **CHANGE CURRENT USER** command call.

If the **CHANGE CURRENT USER** command is executed without parameters, the database connection dialog box appears. The user must then enter or select a valid name and password in order to enter the database. The contents of the connection dialog box will depend on the options set on the **Security** page of the Database Settings.

You can also pass the two optional *user* and *password* parameters to specify by programming the new account to be used. 

In the *user* parameter, pass the name or unique user ID (*userRef*) of the account to be used. The user names and IDs can be obtained using the [GET USER LIST](get-user-list.md) command.

If the user account does not exist or was deleted, error -9979 is returned. You can intercept this error with the error-handling method installed by the [ON ERR CALL](on-err-call.md) command. Otherwise, you can call the function [Is user deleted](is-user-deleted.md) to test the user account before calling this command.

Pass the non-encrypted user account password in the *password* parameter. If the password does not match the user, the command will return error message -9978 and do nothing.

The command execution is delayed to prevent flooding (brute force attack), in other words, attempts of multiple user name/password combinations. As a result, after the 4th call to this command, it is run only after a period of 10 seconds. This delay is throughout the entire work station.

**Note:** When the group of the current user provides access to a "serialized" feature (e.g. a plug-in), a corresponding license is used and will remain attached to the 4D user account until the end of the session, even if **CHANGE CURRENT USER** is called and the group of the new user does not provide access to the feature.

##### Offering a custom access management dialog box 

The **CHANGE CURRENT USER** command can be used to set up custom dialog boxes for entering the name and password (with entry and expiration rules) that benefit from the same advantages as the access control system of 4D.   
Here is how It works: 

**1.** The database is entered directly in the “Default user” mode, without a dialog box. 

**2.** The displays a custom dialog box for entering the user name and password. All types of processing are foreseeable in the dialog box:   
\- You can display the list of database users, as in the standard access dialog box of 4D, using the [GET USER LIST](get-user-list.md) command.   
\- The password entry field can contain various controls to check the validity of the entered characters (minimum number of characters, uniqueness, etc.).   
\- If you want the characters of passwords being entered to be masked on screen, you can use the [FILTER KEYSTROKE](filter-keystroke.md) command with the special *%password* font.   
\- Expiration rules can be applied at the moment when the dialog box is validated: expiration date, forced change to the initial connection, locking of account after several incorrect entries, memorization of passwords already used, etc. 

**3.** When the entry is validated, the required information (user name and password) are passed to the **CHANGE CURRENT USER** command in order to open the database with the user account privileges.

#### Example 

The following example simply displays the connection dialog box:

```4d
 CHANGE CURRENT USER
```

**Note:** This code does nothing in a single-user project database. 

#### See also 

[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 289 |
| Thread safe | &cross; |


