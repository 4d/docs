---
id: set-group-access
title: SET GROUP ACCESS
slug: /commands/set-group-access
displayed_sidebar: docs
---

<!--REF #_command_.SET GROUP ACCESS.Syntax-->**SET GROUP ACCESS** {( *groups* )}<!-- END REF-->
<!--REF #_command_.SET GROUP ACCESS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| groups | Collection | &#8594;  | Name of group(s) to which the 4D user account must belong during the session |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET GROUP ACCESS.Summary-->The **SET GROUP ACCESS** command modifies the memberships of the 4D user account for the current session.<!-- END REF--> It resets any former group membership and sets the new memberships to the listed *groups*. 

**Notes:** 

* The scope of this command is the current session. Calling [CHANGE CURRENT USER](change-current-user.md) afterwards for example would reset defined memberships.
* This command can only be called from 4D remote or 4D single-user applications. It is not allowed on 4D Server.

Pass in the *groups* parameter a collection of existing group name(s) to which the 4D user account must belong (if a group name does not exist, it is ignored). If you pass an empty collection, the 4D user account will no longer belong to any group. 

If you omit the *groups* parameter, the memberships of the 4D user account are reset to the group memberships stored on disk.

**Note:** When a group membership provides access to a "serialized" feature (e.g. a plug-in), a corresponding license is used and will remain attached to the 4D user account until the end of the session, even if the **SET GROUP ACCESS** command is called and group membership cancelled. 

#### Example 

You want to promote the current user to the "admin" and "plugins" groups for the session:

```4d
 $groups:=New collection("admin";"plugins")
 SET GROUP ACCESS($groups)
```

#### See also 

[Get group access](get-group-access.md)  
[Get plugin access](get-plugin-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  
[SET USER ALIAS](set-user-alias.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1737 |
| Thread safe | &check; |
| Forbidden on the server ||


