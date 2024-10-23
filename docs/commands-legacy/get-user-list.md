---
id: get-user-list
title: GET USER LIST
slug: /commands/get-user-list
displayed_sidebar: docs
---

<!--REF #_command_.GET USER LIST.Syntax-->**GET USER LIST** ( *userNames* ; *userNumbers* )<!-- END REF-->
<!--REF #_command_.GET USER LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userNames | Text array | &#8592; | User names as they appear in the Password editor window |
| userNumbers | Array integer | &#8592; | Corresponding unique user ID numbers |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET USER LIST.Summary-->GET USER LIST populates the arrays *userNames* and *userNumbers* with the names and unique ID numbers of the users as they appear in the Passwords window.<!-- END REF-->

The array *userNames* is filled with the user names displayed in the Passwords window, including users whose accounts are disabled (user names displayed in green in the Passwords window).

**Note:** Use the [Is user deleted](is-user-deleted.md) command to detect deleted users.

The array *userNumbers*, synchronized with *userNames*, is filled with the corresponding unique user ID numbers. 

**Note for binary databases:** Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the *User and group ID ranges* paragraph.

#### Error management 

If you do not have the proper access privileges for calling GET USER LIST or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[GET GROUP LIST](get-group-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  