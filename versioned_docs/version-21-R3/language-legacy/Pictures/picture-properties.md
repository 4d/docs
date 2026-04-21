---
id: picture-properties
title: PICTURE PROPERTIES
slug: /commands/picture-properties
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE PROPERTIES.Syntax-->**PICTURE PROPERTIES** ( *picture* : Picture ; *width* : Real ; *height* : Real {; *hOffset* : Integer {; *vOffset* : Integer {; *mode* : Integer}}} )<!-- END REF-->
<!--REF #_command_.PICTURE PROPERTIES.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | Picture for which to get information |
| width | Real | &#8592; | Width of the picture expressed in pixels |
| height | Real | &#8592; | Height of the picture expressed in pixels |
| hOffset | Integer | &#8592; | Horizontal offset when displayed on background |
| vOffset | Integer | &#8592; | Vertical offset when displayed on background |
| mode | Integer | &#8592; | Transfer mode when displayed on background |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|18|Modified|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.PICTURE PROPERTIES.Summary-->The PICTURE PROPERTIES command returns information about the picture you pass in *picture*.<!-- END REF-->

The *width* and *height* parameters return the width and height of the picture.

The *hOffset*, *vOffset*, and *mode* parameters return the horizontal and vertical positions and the transfer mode of the picture when displayed on the background in a form (“On Background”).

## See also 

[Picture size](../commands/picture-size)  

## Properties

|  |  |
| --- | --- |
| Command number | 457 |
| Thread safe | yes |


