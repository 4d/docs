---
id: picture-to-blob
title: PICTURE TO BLOB
slug: /commands/picture-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE TO BLOB.Syntax-->**PICTURE TO BLOB** ( *picture* ; *pictureBlob* ; *codec* )<!-- END REF-->
<!--REF #_command_.PICTURE TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | Picture field or variable |
| pictureBlob | Blob | &#8592; | BLOB to receive the converted picture |
| codec | Text | &#8594;  | Picture Codec ID |

<!-- END REF-->

#### Description 

<!--REF #_command_.PICTURE TO BLOB.Summary-->The **PICTURE TO BLOB** command converts a picture stored in a 4D variable or field to another format and places the resulting picture in a BLOB.<!-- END REF-->

A picture 4D field or variable is passed in the *picture* parameter. In the *pictureBlob* parameter is passed a BLOB variable or field which should contain the converted picture. 

Pass in the *codec* parameter a string setting the conversion format.

A Codec can be an extension (for example, “.gif”) or a Mime type (for example “image/jpeg”). You can get a list of available Codecs via the [PICTURE CODEC LIST](picture-codec-list.md) command.

Once the command has been executed, the *pictureBlob* contains the picture in the specified format.

If the conversion was successful, the system variable OK is set to 1\. If the conversion has failed (converter not available), OK is set to 0 and the generated BLOB is empty (0 byte).

#### Example 

You want to convert an image from a proprietary format to GIF format and display it on a static web page. You can use a code such as:

```4d
 var $picture : Picture
 var $BLOB : Blob
 var $path : Text
 
 $path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+"Sunrise.psd" //find the picture in the Images folder within the Resources folder
 READ PICTURE FILE($path;$picture) //put the picture in the picture variable
 
 PICTURE TO BLOB($picture;$BLOB;".gif") //convert the picture to ".gif" format
 WEB SEND BLOB($BLOB;"image/gif")
```

#### See also 

[BLOB TO PICTURE](blob-to-picture.md)  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  