---
id: remove-picture-from-library
title: REMOVE PICTURE FROM LIBRARY
slug: /commands/remove-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Syntax-->**REMOVE PICTURE FROM LIBRARY** ( picRef | picName )<!-- END REF-->
<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picRef &#124; picName | Integer, Text | &#8594;  | Reference number of Picture Library graphic or Name of Picture Library graphic |

<!-- END REF-->

#### Description 

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Summary-->The REMOVE PICTURE FROM LIBRARY command removes from the Picture Library the picture whose reference number is passed in *picRef* or whose name is passed in *picName*.<!-- END REF--> 

If there is no picture with that reference number or name, the command does nothing.

**4D Server:** REMOVE PICTURE FROM LIBRARY cannot be used from within a method executed on the server machine (stored procedure or trigger). If you call REMOVE PICTURE FROM LIBRARY on a server machine, nothing happens—the call is ignored.

**Warning:** Design objects (hierarchical list items, menu items, etc.) may refer to Picture Library graphics. Use caution when deleting a Picture Library graphic programmatically.

#### Example 1 

The following example deletes the picture #4444 from the Picture Library.

```4d
 REMOVE PICTURE FROM LIBRARY(4444)
```

#### Example 2 

The following example deletes from the Picture Library any pictures whose names begin with a dollar sign (*$*):

```4d
 PICTURE LIBRARY LIST($alPicRef;$asPicName)
 For($vlPicture;1;Size of array($alPicRef))
    If($asPicName{$vlPicture}="$@")
       REMOVE PICTURE FROM LIBRARY($alPicRef{$vlPicture})
    End if
 End for
```

#### See also 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 567 |
| Thread safe | &cross; |
| Forbidden on the server ||


