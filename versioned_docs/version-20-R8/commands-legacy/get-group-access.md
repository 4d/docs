---
id: get-group-access
title: Get group access
slug: /commands/get-group-access
displayed_sidebar: docs
---

<!--REF #_command_.Get group access.Syntax-->**Get group access** : Collection<!-- END REF-->
<!--REF #_command_.Get group access.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Collection | &#8592; | Collection of group name(s) to which the user belongs |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get group access.Summary-->The **Get group access** command returns the memberships of the 4D user account for the current session.<!-- END REF--> If the user does not belong to any group in the session, an empty collection is returned. 

**Returned value**

Collection of strings: group names to which the 4D user account belongs. 

#### Example 

You want to check if the current user belongs to the "plugins" group:

```4d
 $groups:=Get group access
 If($groups.countValues("plugins")#0) //the user belongs to the group
    ... //
 End if
```

#### See also 

[SET GROUP ACCESS](set-group-access.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1738 |
| Thread safe | &check; |


