---
id: pictures
title: Pictures
---

## Native Formats Supported

4D integrates native management of picture formats. This means that pictures will be displayed and stored in their original format, without any interpretation in 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. This native support is valid for all pictures stored in 4D: static pictures, pictures pasted into forms in Design mode, pictures pasted into fields or variables in Application mode, etc.

4D uses native APIs to encode (write) and decode (read) picture fields and variables under both Windows and macOS. These implementations provide access to numerous native formats, including the RAW format, currently used by digital cameras.

*   Windows, 4D uses WIC (Windows Imaging Component).
*   macOS, 4D uses ImageIO.

The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding.

The full list of supported formats varies according to the operating system and the custom codecs that are installed on the machines. To find out which codecs are available, you must use the `PICTURE CODEC LIST` command. Note that the list of available codecs for reading and writing can be different since encoding codecs may require specific licenses.
> WIC and ImageIO permit the use of metadata in pictures. Two commands, `SET PICTURE METADATA` and `GET PICTURE METADATA`, let you benefit from metadata in your developments.


### Picture Codec IDs

Picture formats recognized by 4D are returned by the `PICTURE CODEC LIST` command as picture Codec IDs. They can be returned in the following forms:

*   As an extension (for example “.gif”)
*   As a MIME type (for example “image/jpeg”)

The form returned for each format will depend on the way the Codec is recorded at the operating system level.

Most of the 4D picture management commands can receive a Codec ID as a parameter. It is therefore imperative to use the system ID returned by the `PICTURE CODEC LIST` command.




### Unavailable picture format

A specific icon is displayed for pictures saved in a format that is not available on the machine. The extension of the missing format is shown at the bottom of the icon:

![](assets/en/Project/picNoFormat.png)

The icon is automatically used wherever the picture is meant to be displayed:

![](assets/en/Project/picNoFormat2.png)

This icon indicates that the picture cannot be displayed or manipulated locally -- but it can be saved without alteration so that it can be displayed on other machines. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures.



### Picture Resolution

4D supports high resolution displays on both macOS and Windows platforms for the following:

*   Static pictures
*   3D buttons/radio/check boxes
*   Picture buttons/pop-ups
*   Tab controls
*   Menu icons
*   List box headers

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

The following table demonstrates the difference between display resolution and picture pixel density.

| Display Type        | Scale Factor                                   | Example                                                                        |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------ |
| Standard Resolution | 1:1 pixel density.                             | **1x**<br>![](assets/en/Project/pictureScale1.png)<br>*circle.png* |
| High Resolution     | Pixel density increased by a factor of 2 or 3. | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/Project/pictureScale2.png)<br>*circle@2x.png*</td><td>![](assets/en/Project/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                      |

When using high resolution pictures, the scale factor is specified by adding "@nx" in the picture's name (*n* designates the scale factor). In the table above, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

4D automatically prioritizes pictures with the highest resolution. <br><br> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).
> Note that this prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.

This resolution behavior is supported for project databases by all [4D form objects](../FormObjects/formObjectsOverview.html) which support images.




## Mouse Coordinates in a Picture

4D lets you retrieve the local coordinates of the mouse in a picture field or variable in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software.

The coordinates are returned in the *MouseX* and *MouseY* [System Variables](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html). The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in *MouseX* and *MouseY*.

You can get the value of these variables as part of the `On Clicked`, `On Double Clicked`, `On Mouse up`, `On Mouse Enter`, or `On Mouse Move` form events.

## Picture Operators

4D allows you to carry out **operations** on 4D pictures, such as concatenation, superimposing, etc. This point is covered in the *Picture Operators* section of the *4D Language Reference*.

