---
id: write-picture-file
title: WRITE PICTURE FILE
slug: /commands/write-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.WRITE PICTURE FILE.Syntax-->**WRITE PICTURE FILE** ( *fileName* ; *picture* {; *codec*} )<!-- END REF-->
<!--REF #_command_.WRITE PICTURE FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | Name or full pathname of the file to write, or empty string |
| picture | Picture | &#8594;  | Picture field or variable to write |
| codec | Text | &#8594;  | Picture Codec ID |

<!-- END REF-->

#### Description 

<!--REF #_command_.WRITE PICTURE FILE.Summary-->The **WRITE PICTURE FILE** command saves the picture passed in the *picture* parameter in the defined *codec* to disk.<!-- END REF--> 

You can pass in *fileName* the full pathname to the file to create, or a file name only. If you just pass the file name, the file will be located next to the database structure file. The file extension has to be indicated.

If an empty string ("") is passed in *fileName*, the standard Save file dialog box is displayed and the user can indicate the name, location and format of the file to create. If a default name is associated with the Picture field, it is provided in the dialog box (see the [SET PICTURE FILE NAME](set-picture-file-name.md) command). 

You will pass in *picture* the picture variable or field which contains the picture to save on disk.

The optional *codec* parameter can be used to define the format in which the picture will be saved. A Codec can be an extension (for example, “.gif”) or a Mime type (for example “image/jpeg”). You can get a list of available Codecs via the [PICTURE CODEC LIST](picture-codec-list.md) command.

If you omit the *codec* parameter, the command will attempt to determine the codec based on the extension of the file name passed in the *fileName* parameter. For example, if you pass the statement:  

```4d
 WRITE PICTURE FILE("c:\folder\photo.jpg";myphoto)
```

  
... the command will use the JPEG codec to store the picture.   
If the extension used does not correspond to any available codec, the file is not saved and the OK system variable is set to 0\. If you do not pass a *codec* or a file extension, the picture file is saved in PICT format. 

**Note:** If the write format of the *picture* (indicated via the extension of *fileName* or the *codec* parameter) is the same the as its original type and if no transformation operation has been applied to it, the picture is written "as is", without any modification. 

If the command is executed successfully, the system variable Document contains the full pathname to the file created and the system variable OK is set to 1\. Otherwise, OK is set to 0.

#### See also 

[PICTURE TO BLOB](picture-to-blob.md)  
*Pictures*  
[READ PICTURE FILE](read-picture-file.md)  
[SET PICTURE FILE NAME](set-picture-file-name.md)  