---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *userID* )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userID | Integer | &#8594;  | ID number of user to delete |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE USER.Summary-->The **DELETE USER** command deletes the user whose unique user ID number you pass in *userID*.<!-- END REF--> You must pass a valid user ID number returned by the [GET USER LIST](get-user-list.md) command. 

If the user account does not exist or has already been deleted, the error -9979 is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

Only the Designer and Administrator can delete users. It is not possible for the Administrator to delete a user created by the Designer. 

Deleted user names no longer appear in the Users editor displayed when you call [EDIT ACCESS](edit-access.md), nor in the Design mode. Note that the numbers for deleted users can be reassigned when new user accounts are created.

#### Error management 

If you do not have the proper access privileges for calling DELETE USER or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 615 |
| Thread safe | &cross; |
| Modifies variables | error |


