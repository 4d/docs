---
id: current-user
title: Current user
slug: /commands/current-user
displayed_sidebar: docs
---

<!--REF #_command_.Current user.Syntax-->**Current user** {( *user* )} : Text<!-- END REF-->
<!--REF #_command_.Current user.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| user | Integer | &#8594;  | User alias or 4D user account |
| Function result | Text | &#8592; | User name of the current user |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current user.Summary-->Current user returns the alias or account name of the current user.<!-- END REF-->

By default if the *user* parameter is omitted, if an alias has been defined for the user with [SET USER ALIAS](set-user-alias.md) during the session, the command returns the user alias. Otherwise, it returns the 4D user account name.

In the optional *user* parameter, you can specify which of the following you want returned:

| Constant                 | Value | Comment                                                                                                                                                         |
| ------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D user account          | 1     | 4D user account name.                                                                                                                                           |
| 4D user alias            | 2     | Alternate name for 4D user account if defined with the [SET USER ALIAS](set-user-alias.md) command or empty string ("") if no alias is defined for the 4D user. |
| 4D user alias or account | 0     | Alternate name for 4D user account as defined with the [SET USER ALIAS](set-user-alias.md) command, or regular 4D user account name if no alias is defined.     |

#### Example 

See example for the [User in group](user-in-group.md) command.

#### See also 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  
[User in group](user-in-group.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 182 |
| Thread safe | &check; |
| Forbidden on the server ||


