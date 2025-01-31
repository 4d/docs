---
id: edit-access
title: EDIT ACCESS
slug: /commands/edit-access
displayed_sidebar: docs
---

<!--REF #_command_.EDIT ACCESS.Syntax-->**EDIT ACCESS**<!-- END REF-->
<!--REF #_command_.EDIT ACCESS.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.EDIT ACCESS.Summary-->EDIT ACCESS lets the user edit the password system.<!-- END REF--> When this command is executed, the Toolbox window with only the Users and User groups pages appears.

**Note:** This command opens a modal window so you must not call it from another modal window; if you do, it will not do anything. 

Groups can be edited by the Designer, the Administrator and group owners. The Designer and the Administrator can edit any group. Group owners can edit only the groups they own. Users can be added to and removed from groups. The command has no effect if no groups are defined.

The Designer and the Administrator can add new users, as well as assign them to groups.

#### Example 

The following example displays the Users and User groups management window to the user:

```4d
 EDIT ACCESS
```

#### See also 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 281 |
| Thread safe | &cross; |
| Forbidden on the server ||


