---
id: propertiesPicture
title: Picture 
---

## Pathname

Pathname of a static source picture for a [picture button](pictureButton_overview.md), [picture pop-up Menu](picturePopupMenu_overview.md), or [static picture](staticPicture.md). You must use the POSIX syntax.

The following locations can be used for static pictures:

- in the **Resources** folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is "/RESOURCES/<picture path\>".
- in an image folder (e.g. named **Images**) within the form folder. Appropriate when the static pictures are used only in the form and/or you want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<picture path\>" and is resolved from the root of the form folder.
- in a 4D picture variable. The picture must be loaded in memory when the form is executed. In this case, the Pathname is "var:<variableName\>".

#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|picture|text|Relative or filesystem path in POSIX syntax, or "var:<variableName\>" for picture variable|

#### Objects Supported

[Picture button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Static Picture](staticPicture.md)

---

## Display

### Scaled to fit

`JSON grammar: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Replicated  

`JSON grammar: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered).

### Center / Truncated (non-centered)  

`JSON grammar: "truncatedCenter" / "truncatedTopLeft"`

The **Center** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D crops equally from each edge and from the top and bottom.

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D crops from the right and bottom.

>When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|pictureFormat|string|"scaled", "tiled", "truncatedCenter", "truncatedTopLeft"|

#### Objects Supported

[Static Picture](staticPicture.md)
