---
id: set-user-alias
title: SET USER ALIAS
slug: /commands/set-user-alias
displayed_sidebar: docs
---

<!--REF #_command_.SET USER ALIAS.Syntax-->**SET USER ALIAS** ( *alias* : Text )<!-- END REF-->
<!--REF #_command_.SET USER ALIAS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| alias | Text | &#8594;  | Alternate user name for 4D user account or "" to reset |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET USER ALIAS.Summary-->The **SET USER ALIAS** command defines an alternate, custom name to use in place of the current 4D user account name for the current session.<!-- END REF--> The alternate name is retained in memory and applied only to the current user. 

**Note:** This command can only be called from 4D remote or 4D single-user applications. It is not allowed on 4D Server. 

In the *alias* parameter, pass the alternate name to be displayed instead of the current 4D user account name. 

Once the command is executed, the *alias* is used wherever the current 4D user account was returned or displayed, in particular in the [Current user](../commands/current-user), [Process activity](../commands/process-activity) and [LOCKED BY](../commands/locked-by) commands, or the [Users Page](../../ServerWindow/users.md) of the 4D Server administration window. In client/server environments, this command must be executed on remote applications so that each user is identified on the server, for example through the [Current user](../commands/current-user) command, even if all remote applications use the same 4D user account.

To remove the *alias* for the current 4D user, call **SET USER ALIAS**("").

**Note:** Calling the [CHANGE CURRENT USER](../commands/change-current-user) command resets the alias name for the current user. 

## Example 

Your users are managed through a custom table and use the same 4D user account. On each client machine, you can execute:

```4d
 SET USER ALIAS([myUsers]userName)
```

## See also 

[CHANGE CURRENT USER](../commands/change-current-user)  
[Current user](../commands/current-user)  
[SET GROUP ACCESS](../commands/set-group-access)  

## Properties

|  |  |
| --- | --- |
| Command number | 1666 |
| Thread safe | yes |
| Forbidden on the server ||



