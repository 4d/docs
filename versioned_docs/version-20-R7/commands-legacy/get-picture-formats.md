---
id: get-picture-formats
title: GET PICTURE FORMATS
slug: /commands/get-picture-formats
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FORMATS.Syntax-->**GET PICTURE FORMATS** ( *picture* ; *codecIDs* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FORMATS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | Picture field or variable to analyze |
| codecIDs | Text array | &#8592; | Picture codec IDs |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PICTURE FORMATS.Summary-->The **GET PICTURE FORMATS** command returns an array of all the codec IDs (picture formats) contained in the *picture* passed as parameter.<!-- END REF--> A 4D picture (field or variable) can contain the same picture encoded in different formats, such as PNG, BMP, GIF, etc.

In the *picture* parameter, you pass a picture field or a picture variable whose included formats you want to be returned in the *codecIDs* array. 

The codec IDs returned are established by 4D in exactly the same way as for the [PICTURE CODEC LIST](picture-codec-list.md) command. They can be returned in the following forms:

* As extensions (for example, “.gif”)
* As Mime types (for example, “image/jpeg”)
* As 4-character QuickTime codes

**Notes:** 

* The following codecs, handled internally by 4D, are always returned as extensions: JPEG, PNG, TIFF, GIF, BMP, SVG, PDF, EMF.
* 4-character QuickTime codes may be returned in databases where the QuickTime support compatibility option has been set (using the [SET DATABASE PARAMETER](set-database-parameter.md) command). However, QuickTime is no longer supported in 4D and we do not recommend using QuickTime codecs.

For more information about picture codec IDs, refer to the *Pictures* section.

#### Example 

You want to know the picture formats stored in a field for the current record:

```4d
 ARRAY TEXT($aTPictureFormats;0)
  //Get all the formats saved
 GET PICTURE FORMATS([Employees]Photo;$aTPictureFormats)
```

#### See also 

  

#### Properties

|  |  |
| --- | --- |
| Command number | 1406 |
| Thread safe | &check; |


