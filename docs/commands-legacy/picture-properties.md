---
id: picture-properties
title: PICTURE PROPERTIES
slug: /commands/picture-properties
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE PROPERTIES.Syntax-->**PICTURE PROPERTIES** ( *picture* ; *width* ; *height* {; *hOffset* {; *vOffset* {; *mode*}}} )<!-- END REF-->
<!--REF #_command_.PICTURE PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &rarr; | Picture for which to get information |
| width | Real | &larr; | Width of the picture expressed in pixels |
| height | Real | &larr; | Height of the picture expressed in pixels |
| hOffset | Integer | &larr; | Horizontal offset when displayed on background |
| vOffset | Integer | &larr; | Vertical offset when displayed on background |
| mode | Integer | &larr; | Transfer mode when displayed on background |

<!-- END REF-->

#### Description 

<!--REF #_command_.PICTURE PROPERTIES.Summary-->The PICTURE PROPERTIES command returns information about the picture you pass in *picture*.<!-- END REF-->

The *width* and *height* parameters return the width and height of the picture.

The *hOffset*, *vOffset*, and *mode* parameters return the horizontal and vertical positions and the transfer mode of the picture when displayed on the background in a form (“On Background”).

#### See also 

[Picture size](picture-size.md)  