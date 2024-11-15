---
id: get-picture-file-name
title: Get picture file name
slug: /commands/get-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.Get picture file name.Syntax-->**Get picture file name** ( *picture* ) : Text<!-- END REF-->
<!--REF #_command_.Get picture file name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture, Picture | &#8594;  | Picture for which to get default name |
| Function result | Text | &#8592; | Default name of picture file |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get picture file name.Summary-->The **Get picture file name** command returns the current default name of the picture passed as parameter.<!-- END REF-->

The default name is used when exporting the picture to a disk file. It can be set automatically based on the original name of the picture file imported into the picture field or variable, or using the [SET PICTURE FILE NAME](set-picture-file-name.md) command. For more information, refer to the *Design Reference* manual. 

If the picture does not have a default name, the command returns an empty string.

#### See also 

[SET PICTURE FILE NAME](set-picture-file-name.md)  