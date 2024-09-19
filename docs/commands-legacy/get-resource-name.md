---
id: get-resource-name
title: Get resource name
slug: /commands-legacy/get-resource-name
displayed_sidebar: docs
---

<!--REF #_command_.Get resource name.Syntax-->**Get resource name** ( *resType* ; *resID* {; *resFile*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Get resource name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resType | String | &#x1F852; | 4-character resource type |
| resID | Longint | &#x1F852; | Resource ID number |
| resFile | DocRef | &#x1F852; | Resource file reference number, or all open resource files, if omitted |
| Function result | String | &#x1F850; | Name of the resource |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get resource name.Summary-->The **Get resource name** command returns the name of the resource whose type is passed in *resType* and whose ID number is passed in *resID*.<!-- END REF-->

If you pass a valid resource file reference number in the parameter *resFile*, the resource is searched for within that file only. If you do not pass the parameter *resFile*, the resource is searched for within the current open resource files.

If the resource does not exist, **Get resource name** returns an empty string.
