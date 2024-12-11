---
id: is-user-deleted
title: Is user deleted
slug: /commands/is-user-deleted
displayed_sidebar: docs
---

<!--REF #_command_.Is user deleted.Syntax-->**Is user deleted** ( *userNumber* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is user deleted.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userNumber | Integer | &#8594;  | User ID number |
| Function result | Boolean | &#8592; | TRUE = User account is deleted or does not exist FALSE = User account is active |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is user deleted.Summary-->The Is user deleted command tests the user account whose unique user ID number you pass in *userID*.<!-- END REF-->

If the user account does not exist or has been deleted, Is user deleted returns TRUE. Otherwise, it returns FALSE.

#### Error management 

If you do not have the proper access privileges for calling Is user deleted or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[DELETE USER](delete-user.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 616 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


