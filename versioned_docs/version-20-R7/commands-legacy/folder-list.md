---
id: folder-list
title: FOLDER LIST
slug: /commands/folder-list
displayed_sidebar: docs
---

<!--REF #_command_.FOLDER LIST.Syntax-->**FOLDER LIST** ( *pathname* ; *directories* )<!-- END REF-->
<!--REF #_command_.FOLDER LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pathname | Text | &#8594;  | Pathname to volume, directory or folder |
| directories | Text array | &#8592; | Names of the directories present at this location |

<!-- END REF-->

#### Description 

<!--REF #_command_.FOLDER LIST.Summary-->The **FOLDER LIST** command populates the Text or String array *directories* with the names of the folders located at the pathname you pass in *pathname*.<!-- END REF-->

**Note:** The *pathname* parameter only accepts absolute pathnames. 

If there are no folders at the specified location, the command returns an empty array. If the pathname you pass in *pathname* is invalid, **FOLDER LIST** generate a file manager error that you can intercept using an [ON ERR CALL](on-err-call.md) method.

#### See also 

[DOCUMENT LIST](document-list.md)  
[VOLUME LIST](volume-list.md)  