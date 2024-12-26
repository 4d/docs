---
id: set-user-properties
title: Set user properties
slug: /commands/set-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set user properties.Syntax-->**Set user properties** ( *userID* ; *name* ; *startup* ; *password* ; *nbLogin* ; *lastLogin* {; *memberships* {; *groupOwner*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Set user properties.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userID | Integer | &#8594;  | Unique ID number of user account, -1 for adding a user |
| &#8592; | Unique ID number of added user account (if any) |
| name | Text | &#8594;  | New user name |
| startup | Text | &#8594;  | Name of new user startup method |
| password | Text | &#8594;  | New (unencrypted) password, or * to leave the password unchanged |
| nbLogin | Integer | &#8594;  | New number of logins to the database (Binary databases only) |
| lastLogin | Date | &#8594;  | New date of last login to the database (Binary databases only) |
| memberships | Array integer | &#8594;  | ID numbers of groups to which the user belongs |
| groupOwner | Integer | &#8594;  | Reference number of user group owner (Binary databases only) |
| Function result | Integer | &#8592; | Unique ID number of new user |

<!-- END REF-->

#### Description 

<!--REF #_command_.Set user properties.Summary-->Set user properties lets you change and update the properties of an existing user account whose unique user ID number you pass in *userID*, or add a new user.<!-- END REF-->

If you are changing the properties of an existing user account, you must pass a valid user ID number returned by the [GET USER LIST](get-user-list.md) command. If the user account does not exist or has been deleted, the error -9979 is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md). Otherwise, you can call [Is user deleted](is-user-deleted.md) to test the user account before calling Set user properties.

To add a new user, pass -1 in userID (see also notes below for binary databases).

After the call, if the user is successfully added or modified, its unique ID number is returned in *userID*.

If you do not pass -1, -2 or a valid user ID number, Set user properties does nothing.

Before the call, you pass the new name, startup method, password, number of logins and date of last login for the user, in the *name*, *startup*, *password*, *nbLogin* and *lastLogin* parameters.You pass an unencrypted password in the *password* parameter. 4D will encrypt it for you before saving it in the user account.   
If the new user name passed in *name* is not unique (there is already a user with the same name), the command does nothing and the error -9979 is returned. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

**Note:** The *nbLogin* and *lastLogin* parameters are used in binary databases only. They are ignored in project databases. 

If you do not want to change all the properties of the user (aside from the memberships, see below), first call [GET USER PROPERTIES](get-user-properties.md) and pass the returned values for the properties you want to leave unchanged.

If you do not want to change the password for an account, pass the \* symbol as a value for the *password* parameter. This allows you to change the other properties of the user account without changing the password for the account.

If you do not pass the optional *memberships* parameter, the current memberships of the user are left unchanged. If you do not pass *memberships* when adding a user, the user will not belong to any group.  
If you pass the optional *memberships* parameter, you change all the memberships for the user. Before the call, you must populate the *memberships* array with the unique ID numbers of the groups to which the user will belong.

(*Binary databases only*) If you pass the optional *groupOwner* parameter, you indicate the ID number of the user group “owner”, i.e. the default owner group of the objects created by this user. To revoke all the memberships of a user, pass an empty *memberships* array.

**Note for binary databases:** Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the *User and group ID ranges* paragraph. To create a user affiliated with the Designer, pass -1 in userID. To create a user affiliated with the Administrator, pass -2 in userID.

#### Error management 

If you do not have the proper access privileges for calling Set user properties or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### See also 

[DELETE USER](delete-user.md)  
[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Validate password](validate-password.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 612 |
| Thread safe | &cross; |


