---
id: get-user-properties
title: GET USER PROPERTIES
slug: /commands/get-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET USER PROPERTIES.Syntax-->**GET USER PROPERTIES** ( *userID* ; *name* ; *startup* ; *password* ; *nbLogin* ; *lastLogin* {; *memberships* {; *groupOwner*}} )<!-- END REF-->
<!--REF #_command_.GET USER PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userID | Integer | &#8594;  | Unique user ID number |
| name | Text | &#8592; | Name of the user |
| startup | Text | &#8592; | Startup method name |
| password | Text | &#8592; | Always an empty string |
| nbLogin | Integer | &#8592; | Number of logins to the database (Binary databases only) |
| lastLogin | Date | &#8592; | Date of last login to the database (Binary databases only) |
| memberships | Array integer | &#8592; | ID numbers of groups to which the user belongs |
| groupOwner | Integer | &#8592; | ID number of user group owner (Binary databases only) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET USER PROPERTIES.Summary-->**GET USER PROPERTIES** returns the information about the user whose unique user ID number you pass in *userID*.<!-- END REF--> You must pass a valid user ID number returned by the [GET USER LIST](get-user-list.md) command.

If the user account does not exist or has been deleted, the error -9979 is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md). Otherwise, you can call [Is user deleted](is-user-deleted.md) to test the user account before calling **GET USER PROPERTIES**.

After the call, you retrieve the name, startup method, number of logins and date of last login for the user, in the parameters *name*, *startup*, *nbLogin* and *lastLogin*.

**Notes:** 

* The *nbLogin* and *lastLogin* parameters are used in binary databases only. They always return respectively 0 and 00/00/00 in project databases.
* The *password* parameter is obsolete (it always returns an empty string). If you want to check a user's password, use the [Validate password](validate-password.md) function.

If you pass the optional *memberships* parameter, the unique ID numbers of the groups to which the user belongs are returned. 

*(Binary databases only)* You can pass the optional *groupOwner* parameter to get the ID number of the user group “owner”, i.e. the default owner group of the objects created by this user.

**Note:** The *groupOwner* array always returns 0 values in project databases. 

**Note for binary databases:** Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the *User and group ID ranges* paragraph.

#### Error management 

If you do not have the proper access privileges for calling GET USER PROPERTIES or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### See also 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  
[Validate password](validate-password.md)  