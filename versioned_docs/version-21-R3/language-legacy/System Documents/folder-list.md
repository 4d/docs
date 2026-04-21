---
id: folder-list
title: FOLDER LIST
slug: /commands/folder-list
displayed_sidebar: docs
---

<!--REF #_command_.FOLDER LIST.Syntax-->**FOLDER LIST** ( *pathname* : Text ; *directories* : Text array )<!-- END REF-->
<!--REF #_command_.FOLDER LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pathname | Text | &#8594;  | Pathname to volume, directory or folder |
| directories | Text array | &#8592; | Names of the directories present at this location |
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

<!--REF #_command_.FOLDER LIST.Summary-->The **FOLDER LIST** command populates the Text or String array *directories* with the names of the folders located at the pathname you pass in *pathname*.<!-- END REF-->The *pathname* parameter only accepts absolute pathnames. 

If there are no folders at the specified location, the command returns an empty array. If the pathname you pass in *pathname* is invalid, **FOLDER LIST** generate a file manager error that you can intercept using an [ON ERR CALL](../commands/on-err-call) method.

## See also 

[DOCUMENT LIST](../commands/document-list)  
[VOLUME LIST](../commands/volume-list)  

## Properties

|  |  |
| --- | --- |
| Command number | 473 |
| Thread safe | yes |
| Modifies variables | error |


