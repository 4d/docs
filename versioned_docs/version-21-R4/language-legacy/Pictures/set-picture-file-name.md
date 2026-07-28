---
id: set-picture-file-name
title: SET PICTURE FILE NAME
slug: /commands/set-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE FILE NAME.Syntax-->**SET PICTURE FILE NAME** ( *picture* : Picture ; *fileName* : Text )<!-- END REF-->
<!--REF #_command_.SET PICTURE FILE NAME.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | Picture for which to set the default name |
| fileName | Text | &#8594;  | Default picture name |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET PICTURE FILE NAME.Summary-->The **SET PICTURE FILE NAME** command sets or changes the default file name for the picture passed as parameter.<!-- END REF-->

This name may have been set automatically based on the original name of the picture file imported into the picture field or variable or during a prior call to **SET PICTURE FILE NAME**. 

The default name is used as the file name when the picture is exported in a disk file. If the contents of the field are copied into a varaible or into another field, the default name is also copied. For more information, refer to the *Design Reference* manual. 

## See also 

[Get picture file name](../commands/get-picture-file-name)  
[WRITE PICTURE FILE](../commands/write-picture-file)  

## Properties

|  |  |
| --- | --- |
| Command number | 1172 |
| Thread safe | yes |


