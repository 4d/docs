---
id: get-group-properties
title: GET GROUP PROPERTIES
slug: /commands/get-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP PROPERTIES.Syntax-->**GET GROUP PROPERTIES** ( *groupID* : Integer ; *name* : Text ; *owner* : Integer {; *members* : Integer array} )<!-- END REF-->
<!--REF #_command_.GET GROUP PROPERTIES.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| groupID | Integer | &#8594;  | Unique group ID number |
| name | Text | &#8592; | Name of the group |
| owner | Integer | &#8592; | User ID number of group owner (Binary databases only) |
| members | Integer array | &#8592; | Group members |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.GET GROUP PROPERTIES.Summary-->GET GROUP PROPERTIES returns the properties of the group whose unique group ID number you pass in *groupID*.<!-- END REF--> You must pass a valid group ID number returned by the command [GET GROUP LIST](../commands/get-group-list). 

If you do not pass a valid group ID number, GET GROUP PROPERTIES returns empty parameters.

After the call, you retrieve the name of the group in the *name* parameter.

(*Binary databases only*) The owner of the group is returned in the *owner* parameter. This parameter always returns 0 in project databases. 

If you pass the optional *members* parameter, the unique ID numbers of the users and groups belonging to the group are returned. 

**Note for binary databases:** Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the *User and group ID ranges* paragraph.

## Error management 

If you do not have the proper access privileges for calling GET GROUP PROPERTIES or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](../commands/on-err-call).

## See also 

[GET GROUP LIST](../commands/get-group-list)  
[GET USER LIST](../commands/get-user-list)  
[Set group properties](../commands/set-group-properties)  

## Properties

|  |  |
| --- | --- |
| Command number | 613 |
| Thread safe | no |
| Modifies variables | error |


