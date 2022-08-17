---
id: pictures
title: Pictures
---

## Native Formats Supported

4D integrates native management of picture formats. This means that pictures will be displayed and stored in their original format, without any interpretation in 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. This native support is valid for all pictures stored in 4D forms: [static pictures](FormObjects/staticPicture.md) pasted in Design mode, pictures pasted into [inputs objects](FormObjects/input_overview.md) at runtime, etc.

The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding.

> The full list of supported formats varies according to the operating system and the custom codecs that are installed on the machines. To find out which codecs are available, you must use the `PICTURE CODEC LIST` command (see also the [picture data type](Concepts/dt_picture.md) description).

### Unavailable picture format

A specific icon is displayed for pictures saved in a format that is not available on the machine. The extension of the missing format is shown at the bottom of the icon:

![](../assets/en/FormEditor/picNoFormat.png)

The icon is automatically used wherever the picture is meant to be displayed:

![](../assets/en/FormEditor/picNoFormat2.png)

This icon indicates that the picture cannot be displayed or manipulated locally -- but it can be saved without alteration so that it can be displayed on other machines. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures.

## Mouse Coordinates in a Picture

4D lets you retrieve the local coordinates of the mouse in an [input object](FormObjects/input_overview.md) associated with a [picture expression](FormObjects/properties_Object.md#expression-type), in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software.

The coordinates are returned in the *MouseX* and *MouseY* [System Variables](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in *MouseX* and *MouseY*.

You can get the value of these variables as part of the `On Clicked`, `On Double Clicked`, `On Mouse up`, `On Mouse Enter`, or `On Mouse Move` form events.
