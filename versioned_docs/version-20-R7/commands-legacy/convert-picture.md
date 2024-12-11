---
id: convert-picture
title: CONVERT PICTURE
slug: /commands/convert-picture
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT PICTURE.Syntax-->**CONVERT PICTURE** ( *picture* ; *codec* {; *compression*} )<!-- END REF-->
<!--REF #_command_.CONVERT PICTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | Picture to be converted |
| &#8592; | Converted picture |
| codec | Text | &#8594;  | Picture Codec ID |
| compression | Real | &#8594;  | Quality of compression |

<!-- END REF-->

#### Description 

<!--REF #_command_.CONVERT PICTURE.Summary-->The **CONVERT PICTURE** command converts *picture* into a new type.<!-- END REF-->

The *codec* parameter indicates the type of picture to be generated. A Codec can be an extension (for example, “.gif”) or a Mime type (for example, “image/jpeg”). You can get a list of Codecs that are available using the [PICTURE CODEC LIST](picture-codec-list.md) command.

If the *picture* field or variable is a compound type (if, for example, it is the result of a copy-paste action), only the information corresponding to the codec type are preserved in the resulting picture.

**Note:** If the type of *codec* requested is the same as the original type of the *picture*, no conversion is carried out and the picture is returned "as is" (except when the *compression* parameter is used, see below). 

The optional *compression* parameter, if passed, can be used to specify the compression quality to be applied to the resulting picture when a compatible Codec is used. In *compression*, pass a value between 0 and 1 to specify the quality of the compression, where 0 is the most mediocre quality (high compression) and 1 the best quality (low compression). This parameter is only taken into account when the Codec supports compression (for example JPEG or HDPhoto) and is supported by the WIC and ImageIO APIs. For more information about picture management APIs in 4D, please refer to the *Pictures* section. By default, if you omit the *compression* parameter, the best quality is applied (compression =1).

**Note:** If you want to call **CONVERT PICTURE** with a picture type that is not supported in 4D 64-bit versions (such as PICT), make sure the conversion is performed on a 4D 32-bit version, where the original type is supported. For more information, please refer to the *Changing from 32-bit versions to 64-bit versions* page.   

#### Example 1 

Conversion of the vpPhoto picture to the jpeg format: 

```4d
 CONVERT PICTURE(vpPhoto;".jpg")
```

#### Example 2 

Conversion of a picture with 60% quality:

```4d
 CONVERT PICTURE(vPicture;".JPG";0.6)
```

#### See also 

[PICTURE CODEC LIST](picture-codec-list.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1002 |
| Thread safe | &check; |
| Forbidden on the server ||


