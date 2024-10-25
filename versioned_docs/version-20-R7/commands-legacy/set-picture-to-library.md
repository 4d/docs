---
id: set-picture-to-library
title: SET PICTURE TO LIBRARY
slug: /commands/set-picture-to-library
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO LIBRARY.Syntax-->**SET PICTURE TO LIBRARY** ( *picture* ; *picRef* ; *picName* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO LIBRARY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | New picture |
| picRef | Integer | &#8594;  | Reference number of Picture Library graphic |
| picName | Text | &#8594;  | New name of the picture |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET PICTURE TO LIBRARY.Summary-->The **SET PICTURE TO LIBRARY** command creates a new picture or replaces a picture in the Picture Library.<!-- END REF-->

Before the call, you pass:

* the picture reference number in *picRef* (range 1...32767 )
* the picture itself in *picture*.
* the name of the picture in *picName* (maximum length: 255 characters).

If there is an existing Picture Library graphic with the same reference number, the picture contents are replaced and the picture is renamed according to the values passed in *picture* and *picName.*  
  
If there is no Picture Library graphic with the reference number passed in *picRef*, a new picture is added to the Picture Library.

**4D Server:** **SET PICTURE TO LIBRARY** cannot be used from within a method executed on the server machine (stored procedure or trigger). If you call **SET PICTURE TO LIBRARY** on a server machine, nothing happens—the call is ignored.

**Warning:** Design objects (hierarchical list items, menu items, etc.) may refer to Picture Library graphics. Use caution when modifying a Picture Library graphic programmatically.

**Note:** If you pass an empty picture in *picture* or a negative or null value in *picRef*, the command does nothing.

#### Example 1 

No matter what the current contents of the Picture Library, the following example adds a new picture to the Picture Library by first looking for a unique picture reference number:

```4d
 PICTURE LIBRARY LIST($alPicRef;$asPicNames)
 Repeat
    $vlPicRef:=1+Abs(Random)
 Until(Find in array($alPicRef;$vlPicRef)<0)
 SET PICTURE TO LIBRARY(vgPicture;$vlPicRef;"New Picture")
```

#### Example 2 

The following example imports into the Picture Library the pictures (stored in a document on disk) created by the third example for the command [PICTURE LIBRARY LIST](picture-library-list.md):

```4d
 SET CHANNEL(10;"")
 If(OK=1)
    RECEIVE VARIABLE($vsTag)
    If($vsTag="4DV6PICTURELIBRARYEXPORT")
       RECEIVE VARIABLE($vlNbPictures)
       If($vlNbPictures>0)
          For($vlPicture;1;$vlNbPictures)
             RECEIVE VARIABLE($vlPicRef)
             If(OK=1)
                RECEIVE VARIABLE($vsPicName)
             End if
             If(OK=1)
                RECEIVE VARIABLE($vgPicture)
             End if
             If(OK=1)
                SET PICTURE TO LIBRARY($vgPicture;$vlPicRef;$vsPicName)
             Else
                $vlPicture:=$vlNbPictures+1
                ALERT("This file looks like being damaged.")
             End if
          End for
       Else
          ALERT("This file looks like being damaged.")
       End if
    Else
       ALERT("The file “"+Document+"” is not a Picture Library export file.")
    End if
    SET CHANNEL(11)
    End
```

#### Error management 

If there is not enough memory to add the picture to the Picture Library, an error -108 is generated. Note that I/O errors may also be returned (i.e., the structure file is locked). You can catch these errors using an error-handling method.

#### See also 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  