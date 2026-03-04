---
id: get-user-list
title: GET USER LIST
slug: /commands/get-user-list
displayed_sidebar: docs
---

<!--REF #_command_.GET USER LIST.Syntax-->**GET USER LIST** ( *userNames* : Text array ; *userNumbers* : Integer array )<!-- END REF-->
<!--REF #_command_.GET USER LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userNames | Text array | &#8592; | User names as they appear in the Password editor window |
| userNumbers | Integer array | &#8592; | Corresponding unique user ID numbers |
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

<!--REF #_command_.GET USER LIST.Summary-->GET USER LIST populates the arrays *userNames* and *userNumbers* with the names and unique ID numbers of the users as they appear in the Passwords window.<!-- END REF-->

The array *userNames* is filled with the user names displayed in the Passwords window, including users whose accounts are disabled (user names displayed in green in the Passwords window).

**Note:** Use the [Is user deleted](../commands/is-user-deleted) command to detect deleted users.

The array *userNumbers*, synchronized with *userNames*, is filled with the corresponding unique user ID numbers. 

**Note for binary databases:** Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the *User and group ID ranges* paragraph.

## Error management 

If you do not have the proper access privileges for calling GET USER LIST or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](../commands/on-err-call).

## See also 

[GET GROUP LIST](../commands/get-group-list)  
[GET USER PROPERTIES](../commands/get-user-properties)  
[Set user properties](../commands/set-user-properties)  

## Properties

|  |  |
| --- | --- |
| Command number | 609 |
| Thread safe | no |
| Modifies variables | error |


