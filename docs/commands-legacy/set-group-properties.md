---
id: set-group-properties
title: Set group properties
slug: /commands/set-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set group properties.Syntax-->**Set group properties** ( *groupID* ; *name* ; *owner* {; *members*} )  : Integer<!-- END REF-->
<!--REF #_command_.Set group properties.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| groupID | Integer | &#8594;  | Unique ID number of group, -1 for adding a group |
| &#8592; | Unique ID number of added group (if any) |
| name | Text | &#8594;  | New group name |
| owner | Integer | &#8594;  | User ID number of new group owner (Binary databases only) |
| members | Array integer | &#8594;  | New group members |
| Function result | Integer | &#8592; | Unique ID number of new group |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Set group properties.Summary-->Set group properties enables you to change and update the properties of an existing group whose unique group ID number you pass in *groupID*, or to add a new group.<!-- END REF--> 

To change the properties of an existing group, you must pass a valid group ID number returned by the command [GET GROUP LIST](get-group-list.md). 

To add a new group, pass -1 in *groupID* (see also notes below for binary databases). 

After the call, if the group is successfully added, its unique ID number is returned in *groupID*. 

If you do not pass -1, -2 or a valid group ID number in *groupID*, Set group properties does nothing.

Pass the new name of the group in the *name* parameter.

(*Binary databases only*) Pass the ID number of the new owner of the group in the *owner* parameter. This parameter is ignored in project databases. 

If you do not want to change all the properties of the group (besides the members, see below), first call [GET GROUP PROPERTIES](get-group-properties.md) and pass the returned values for the properties you want to leave unchanged.

If you do not pass the optional *members* parameter, the current member list of the group is left unchanged. If you do not pass *members* while adding a group, the group will have no members.

If you pass the optional *members* parameter, you change the whole member list for the group. Before the call, you must populate the array *members* with the unique ID numbers of the users and groups the group will get as members. 

To remove all the members from a group, pass an empty *members* array.

**Notes for binary databases**

* Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the *User and group ID ranges* paragraph. To create a group affiliated with the Designer, pass -1 in groupID. To create a group affiliated with the Administrator, pass -2 in groupID.
* The group owner is not automatically set as a member of the group that he or she owns. It is up to you to include the group owner in the group, using the *members* parameter.

#### Error management 

If you do not have the proper access privileges for calling Set group properties or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[GET GROUP LIST](get-group-list.md)  
[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  