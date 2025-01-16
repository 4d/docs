---
id: set-plugin-access
title: SET PLUGIN ACCESS
slug: /commands/set-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.SET PLUGIN ACCESS.Syntax-->**SET PLUGIN ACCESS** ( *plugIn* ; *group* )<!-- END REF-->
<!--REF #_command_.SET PLUGIN ACCESS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | Plug-in number |
| group | Text | &#8594;  | Group name to associate with plug-in |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET PLUGIN ACCESS.Summary-->The SET PLUGIN ACCESS command sets, by programming, the user group allowed to use each “serialized” plug-in that is installed in the database.<!-- END REF--> This way you can manage how plug-in licenses are used.

**Note:** This can also be done in the Design environment using the Groups editor.

Pass the number of the plug-in to be associated with a group of users in the *plugIn* parameter. Plug-in licenses include 4D Client Web and SOAP licenses. You can pass one of the following constants found in the *Is License Available* theme:

| Constant               | Type    | Value     |
| ---------------------- | ------- | --------- |
| 4D Client SOAP license | Integer | 808465465 |
| 4D Client Web license  | Integer | 808465209 |
| 4D for OCI license     | Integer | 808465208 |
| 4D ODBC Pro license    | Integer | 808464946 |
| 4D View license        | Integer | 808465207 |
| 4D Write license       | Integer | 808464697 |

Pass the name of the group whose users are authorized to use the plug-in in *group*.

**Notes:** 

* Only one group at a time can be allowed to use a plug-in. When this command is executed, if another group had the plug-in access rights, it loses this privilege.
* Used licenses will remain attached to 4D user accounts in *group* for the whole session, even if they change memberships or if the *group* loses its plug-in access rights.

#### See also 

[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET GROUP ACCESS](set-group-access.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 845 |
| Thread safe | &cross; |


