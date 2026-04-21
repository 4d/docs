---
id: volume-list
title: VOLUME LIST
slug: /commands/volume-list
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME LIST.Syntax-->**VOLUME LIST** ( *volumes* : Text array )<!-- END REF-->
<!--REF #_command_.VOLUME LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| volumes | Text array | &#8592; | Names of the volumes currently mounted |
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

<!--REF #_command_.VOLUME LIST.Summary-->The VOLUME LIST command populates the text array *volumes* with the names of the volumes currently defined (Windows) or mounted (Macintosh) on your machine.<!-- END REF-->

* On Macintosh, it returns the list of the volumes visible at the Finder level. Only the names of the volumes are returned (for example "MacHD", "BootCamp", etc.).
* On Windows, it returns the list of the volumes currently defined whether or not each volume is physically present (i.e. the volume E:\\ will be returned whether or not a CD or DVD is actually present in the drive). The names of the volumes are followed by the folder separator character ("C:\\").

## Example 

Using a scrollable area named *atVolumes* you want to display the list of the volumes defined or mounted on your machine, you write:

```4d
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(atVolumes;0)
       VOLUME LIST(atVolumes)
 
  //...
 End case
```

## See also 

[DOCUMENT LIST](../commands/document-list)  
[FOLDER LIST](../commands/folder-list)  
[VOLUME ATTRIBUTES](../commands/volume-attributes)  

## Properties

|  |  |
| --- | --- |
| Command number | 471 |
| Thread safe | yes |


