---
id: blob-to-picture
title: BLOB TO PICTURE
slug: /commands/blob-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO PICTURE.Syntax-->**BLOB TO PICTURE** ( *pictureBlob* ; *picture* {; *codec*} )<!-- END REF-->
<!--REF #_command_.BLOB TO PICTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pictureBlob | Blob | &#8594;  | BLOB containing a picture |
| picture | Picture | &#8592; | Picture from BLOB |
| codec | Text | &#8594;  | Picture codec ID |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB TO PICTURE.Summary-->The **BLOB TO PICTURE** command inserts a picture stored in a BLOB into a 4D picture variable or field, regardless its original format.<!-- END REF-->

This command is similar to the command [READ PICTURE FILE](read-picture-file.md), it just applies to a BLOB instead of a file. It allows you to display pictures stored in native format into BLOBs. You can load a picture into a BLOB using, for example, the command [DOCUMENT TO BLOB](document-to-blob.md) or [PICTURE TO BLOB](picture-to-blob.md).

A BLOB variable or field containing a picture is passed in the *pictureBlob* parameter. The picture can be in any format supported natively by 4D. You can obtain the list of available formats using the [PICTURE CODEC LIST](picture-codec-list.md) command. If you pass the optional *codec* parameter, 4D will use the value provided in this parameter to decode the BLOB (see the specific functioning of the command with this third parameter below).

Pass in the *picture* parameter the 4D picture field or variable which should display the picture. 

**Note:** The internal picture format will be stored within the 4D variable or field.

Once the command has been executed, if the BLOB was correctly decoded, the *picture* parameter contains the picture to display.

The optional *codec* parameter lets you specify the codec to be used for decoding the BLOB.

If you pass a codec recognized by 4D in *codec* (returned by the [PICTURE CODEC LIST](picture-codec-list.md) command), it is applied to the BLOB and the picture is returned in the *picture* field or variable.

If you pass a codec that is not recognized by 4D in *codec*, a new codec is recorded dynamically with the ID passed in the parameter. 4D then returns a picture that encapsulates the BLOB and the OK variable is set to 1\. In this case, to retrieve the BLOB, you will need to use the [PICTURE TO BLOB](picture-to-blob.md) command with the same custom ID. This particular mechanism can be used to meet two specific needs*:*

* encapsulation of a BLOB (that is not a picture) into a picture*,*
* loading a picture without using a codec*.*

The implementation of these mechanisms allows, more specifically, the creation of "BLOB arrays" via picture arrays. This technique must be used with caution because, since the arrays are loaded entirely into memory, working with large sized BLOBs can affect the functioning of the application*.*   

**Note:** A BLOB created by the [VARIABLE TO BLOB](variable-to-blob.md) command is managed automatically; it is not necessary to pass a codec to encapsulate it since the BLOB is "signed." In this case, for the opposite operation, you will need to pass ".4DVarBlob" to the [PICTURE TO BLOB](picture-to-blob.md) command as the codec ID.  

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. If the conversion has failed (QuickTime is not installed, the BLOB does not contain a readable picture, the codec parameter recognized but BLOB not validated, etc.), OK is set to 0 and the 4D picture variable or field is returned empty.

#### See also 

[PICTURE CODEC LIST](picture-codec-list.md)  
[PICTURE TO BLOB](picture-to-blob.md)  
[READ PICTURE FILE](read-picture-file.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 682 |
| Thread safe | &check; |
| Modifies variables | OK |


