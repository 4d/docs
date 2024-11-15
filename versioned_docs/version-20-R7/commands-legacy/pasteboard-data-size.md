---
id: pasteboard-data-size
title: Pasteboard data size
slug: /commands/pasteboard-data-size
displayed_sidebar: docs
---

<!--REF #_command_.Pasteboard data size.Syntax-->**Pasteboard data size** ( *dataType* ) : Integer<!-- END REF-->
<!--REF #_command_.Pasteboard data size.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dataType | Text | &#8594;  | Data type |
| Function result | Integer | &#8592; | Size (in bytes) of data located in the pasteboard or error code |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Pasteboard data size.Summary-->The **Pasteboard data size** command checks whether there is any data of the type you passed in *dataType* present in the pasteboard.<!-- END REF--> 

**Note:** In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard. 

If the pasteboard is empty or does not contain any data of the specified type, the command returns an error -102\. If the pasteboard contains data of the specified type, the command returns the size of this data, expressed in bytes.

In *dataType*, pass a value specifying the type of data to be checked for. You can pass a 4D signature, a UTI type (Mac OS), a format name/number (Windows), or a 4-character type (compatibility). For more information about these types, please refer to the *Managing Pasteboards* section. 

After you have detected that the pasteboard contains data of the type in which you are interested, you can extract that data from the pasteboard using one the following commands:

* If the pasteboard contains text type data, you can obtain that data using the [Get text from pasteboard](get-text-from-pasteboard.md) command, which returns a text value, or the [GET PASTEBOARD DATA](get-pasteboard-data.md) command, which returns the text in a BLOB.
* If the pasteboard contains picture type data, you can obtain that data using the [GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md) command, which returns the picture in a picture field or variable, or the [GET PASTEBOARD DATA](get-pasteboard-data.md) command*,* which returns the picture in a BLOB.
* If the pasteboard contains a file pathname, you can extract it using the [Get file from pasteboard](get-file-from-pasteboard.md) command, which will return the file pathname.
* For any other data type, use the [GET PASTEBOARD DATA](get-pasteboard-data.md) command, which returns the data in a BLOB.

#### Example 1 

The following code tests whether the pasteboard contains a picture and, if so, copies that picture into a 4D variable:

```4d
 If(Pasteboard data size(Picture data)=1) //Is there a picture in the pasteboard?
    GET PICTURE FROM PASTEBOARD($vPicVariable) //If so, extract the picture from the pasteboard
 Else
    ALERT("There is no picture in the pasteboard.")
 End if
```

#### Example 2 

Usually, applications cut and copy Text or Picture type data into the pasteboard, because most applications recognize these two standard data types. However, an application can append to the pasteboard several instances of the same data in different formats. For example, each time you cut or copy a part of a spreadsheet, the spreadsheet application could append the data under the hypothetical ‘SPSH’ format, as well as in SYLK and TEXT formats. The ‘SPSH’ instance would contain the data formatted using the application’s data structure. The SYLK form would contain the same data, but using the SYLK format recognized by most of the other spreadsheet programs. Finally, the TEXT format would contain the same data, without the extra information included in the SYLK or the hypothetical ‘SPSH’ format. At this point, while writing Cut/Copy/Paste routines between 4D and that hypothetical spreadsheet application, assuming you know the description of the ‘SPSH’ format and that you are ready to parse SYLK data, you could write something like:

```4d
 Case of
  // First, check whether the pasteboard contains data from the hypothetical spreadsheet application
    :(Pasteboard data size('SPSH')>0)
  // ...
  // Second, check whether the pasteboard contains Sylk data
    :(Pasteboard data size('SYLK')>0)
  // ...
  // Finally check whether the pasteboard contains Text data
    :(Pasteboard data size('TEXT')>0)
  // ...
 End case
```

In other words, you try to extract from the pasteboard the instance of the data that carries most of the original information.

#### Example 3 

You want to drag some private data from different objects in your form. You can write:

```4d
  //source object
 If(FORM Event=On Begin Drag Over)
    APPEND DATA TO PASTEBOARD("some.private.data";$data)
 End if
```

```4d
  //target object
 If(FORM Event=On Drag Over)
    $0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)
 End if
```

#### Example 4 

See the example for the [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md) command.

#### See also 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  
*Pasteboard*  