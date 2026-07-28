---
id: is-user-deleted
title: Is user deleted
slug: /commands/is-user-deleted
displayed_sidebar: docs
---

<!--REF #_command_.Is user deleted.Syntax-->**Is user deleted** ( *userNumber* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is user deleted.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userNumber | Integer | &#8594;  | User ID number |
| Function result | Boolean | &#8592; | TRUE = User account is deleted or does not exist FALSE = User account is active |
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

<!--REF #_command_.Is user deleted.Summary-->The Is user deleted command tests the user account whose unique user ID number you pass in *userID*.<!-- END REF-->

If the user account does not exist or has been deleted, Is user deleted returns TRUE. Otherwise, it returns FALSE.

## Error management 

If you do not have the proper access privileges for calling Is user deleted or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](../commands/on-err-call).

## See also 

[DELETE USER](../commands/delete-user)  
[GET USER PROPERTIES](../commands/get-user-properties)  
[Set user properties](../commands/set-user-properties)  

## Properties

|  |  |
| --- | --- |
| Command number | 616 |
| Thread safe | no |
| Modifies variables | error |


