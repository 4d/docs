---
id: get-pasteboard-data
title: GET PASTEBOARD DATA
slug: /commands/get-pasteboard-data
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA.Syntax-->**GET PASTEBOARD DATA** ( *dataType* ; *data* )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dataType | Text | &#8594;  | Type of data to be extracted from pasteboard |
| data | Blob | &#8592; | Requested data extracted from the pasteboard |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET PASTEBOARD DATA.Summary-->The **GET PASTEBOARD DATA** command returns, in the BLOB field or in the *data* variable, the data present in the pasteboard and whose type you pass in *dataType*.<!-- END REF--> (If the pasteboard contains text copied within 4D, then the BLOB’s character set is likely to be UTF-16.)

**Note:** In the context of copy/paste operations, the pasteboard corresponds to the clipboard. 

In *dataType*, pass a value specifying the type of data to be retrieved. You can pass a 4D signature, a UTI type (Mac OS), a format name/number (Windows), or a 4-character type (compatibility). For more information about these types, please refer to the *Managing Pasteboards* section. 

**Note:** You cannot read file type data with this command; in order to do this, you have to use the [Get file from pasteboard](get-file-from-pasteboard.md) command. 

#### Example 

The following object methods for two buttons copy from and paste data to the array *asOptions* (pop-up menu, drop-down list,...) located in a form:

```4d
  // bCopyasOptions object method
 If(Size of array(asOptions)>0) // Is there something to copy?
    VARIABLE TO BLOB(asOptions;$vxClipData) // Accumulate the array elements in a BLOB
    CLEAR PASTEBOARD // Empty the pasteboard
    APPEND DATA TO PASTEBOARD("artx";$vxClipData) // Note the data type arbitrarily chosen
 End if
 
  // bPasteasOptions object method
 If(Pasteboard data size("artx")>0) // Is there some "artx" data in the pasteboard?
    GET PASTEBOARD DATA("artx";$vxClipData) // Extract the data from the pasteboard
    BLOB TO VARIABLE($vxClipData;asOptions) // Populate the array with the BLOB data
    asOptions:=0 // Reset the selected element for the array
 End if
```

#### System variables and sets 

If the data is correctly extracted, OK is set to 1; otherwise OK is set to 0 and an error is generated.

#### See also 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  