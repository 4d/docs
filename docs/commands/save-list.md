---
id: save-list
title: SAVE LIST
displayed_sidebar: docs
---

<!--REF #_command_.SAVE LIST.Syntax-->**SAVE LIST** ( *list* ; *listName* )<!-- END REF-->
<!--REF #_command_.SAVE LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | ListRef | -> | List reference number |
| listName | String | -> | Name of the list as it will appear in the Design environment List Editor |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE LIST.Summary-->The SAVE LIST command saves the list whose reference number you pass in *list*, within the Design environment List Editor, under the name you pass in *listName*.<!-- END REF-->

If there is already a list with this name, its contents are replaced.

**Note:** This command cannot be used in a structure loaded in **read only**, such as a .4dz project or a component.

#### See also 

[Load list](load-list.md)  