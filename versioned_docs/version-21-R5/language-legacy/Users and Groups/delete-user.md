---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *userID* : Integer )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userID | Integer | &#8594;  | ID number of user to delete |
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

<!--REF #_command_.DELETE USER.Summary-->The **DELETE USER** command deletes the user whose unique user ID number you pass in *userID*.<!-- END REF--> You must pass a valid user ID number returned by the [GET USER LIST](../commands/get-user-list) command. 

If the user account does not exist or has already been deleted, the error -9979 is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](../commands/on-err-call).

Only the Designer and Administrator can delete users. It is not possible for the Administrator to delete a user created by the Designer. 

Deleted user names no longer appear in the Users editor displayed when you call [EDIT ACCESS](../commands/edit-access), nor in the Design mode. Note that the numbers for deleted users can be reassigned when new user accounts are created.

## Error management 

If you do not have the proper access privileges for calling DELETE USER or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](../commands/on-err-call).

## See also 

[GET USER LIST](../commands/get-user-list)  
[GET USER PROPERTIES](../commands/get-user-properties)  
[Is user deleted](../commands/is-user-deleted)  
[Set user properties](../commands/set-user-properties)  

## Properties

|  |  |
| --- | --- |
| Command number | 615 |
| Thread safe | no |
| Modifies variables | error |


