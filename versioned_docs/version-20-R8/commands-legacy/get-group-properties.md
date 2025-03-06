---
id: get-group-properties
title: GET GROUP PROPERTIES
slug: /commands/get-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP PROPERTIES.Syntax-->**GET GROUP PROPERTIES** ( *groupID* ; *name* ; *owner* {; *members*} )<!-- END REF-->
<!--REF #_command_.GET GROUP PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| groupID | Integer | &#8594;  | Unique group ID number |
| name | Text | &#8592; | Name of the group |
| owner | Integer | &#8592; | User ID number of group owner (Binary databases only) |
| members | Array integer | &#8592; | Group members |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET GROUP PROPERTIES.Summary-->GET GROUP PROPERTIES returns the properties of the group whose unique group ID number you pass in *groupID*.<!-- END REF--> You must pass a valid group ID number returned by the command [GET GROUP LIST](get-group-list.md). 

If you do not pass a valid group ID number, GET GROUP PROPERTIES returns empty parameters.

After the call, you retrieve the name of the group in the *name* parameter.

(*Binary databases only*) The owner of the group is returned in the *owner* parameter. This parameter always returns 0 in project databases. 

If you pass the optional *members* parameter, the unique ID numbers of the users and groups belonging to the group are returned. 

**Note for binary databases:** Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the *User and group ID ranges* paragraph.

#### Error management 

If you do not have the proper access privileges for calling GET GROUP PROPERTIES or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 613 |
| Thread safe | &cross; |
| Modifies variables | error |


