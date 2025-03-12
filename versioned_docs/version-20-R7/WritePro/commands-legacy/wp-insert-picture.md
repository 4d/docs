---
id: wp-insert-picture
title: WP INSERT PICTURE
slug: /WritePro/commands/wp-insert-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT PICTURE.Syntax-->**WP INSERT PICTURE** ( *targetObj* ; *picture* ; *mode* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP INSERT PICTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| picture | Picture | &#8594;  | Picture field or variable, or path to picture file on disk |
| mode | Integer | &#8594;  | Insertion mode |
| rangeUpdate | Integer | &#8594;  | Range update mode |

<!-- END REF-->

## Description 

<!--REF #_command_.WP INSERT PICTURE.Summary-->The **WP INSERT PICTURE** command inserts the *picture* in the *targetObj* according to the specified insertion *mode* and *rangeUpdate* parameter.<!-- END REF--> The picture will be inserted as a character in the *targetObj*. 

In *targetObj*, pass:

* a range, or
* an element (table / row / paragraph / body / header / footer / inline picture / section / subsection), or
* a 4D Write Pro document.

In *picture*, you can pass: 

* a picture field or variable, or
* a file path (string) to a picture file stored on disk, in the system syntax.  
 If you use a string, you can pass either a full pathname, or a pathname relative to the database structure file. You can also pass a file name, in which case the file must be located next to the database structure file. If you pass a file name, you must indicate the file extension.

Any picture format supported by 4D can be used (see the *Pictures* section). You can get the list of available picture formats using the [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) command. If the *picture* encapsulates several formats (codecs), 4D Write Pro only keeps one format for display and one format for printing (if different) in the document; the "best" formats are automatically selected. 

In the *mode* parameter, pass one of the following constants to indicate the insertion mode to be used on the picture in the document:

| Constant   | Type    | Value | Comment                                |
| ---------- | ------- | ----- | -------------------------------------- |
| wk append  | Integer | 2     | Insert contents at end of target       |
| wk prepend | Integer | 1     | Insert contents at beginning of target |
| wk replace | Integer | 0     | Replace target contents                |

* If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted picture is included in the resulting range:  
    
| Constant              | Type    | Value | Comment                                               |  
| --------------------- | ------- | ----- | ----------------------------------------------------- |  
| wk exclude from range | Integer | 1     | Inserted contents not included in updated range       |  
| wk include in range   | Integer | 0     | Inserted contents included in updated range (default) |  
    
If you do not pass a *rangeUpdate* parameter, by default the inserted picture is included in the resulting range.
* If *targetObj* is not a range, *rangeUpdate* is ignored.

## Example 

In the following example, a user selects the picture they want to insert into the range object and will be warned if this picture could not be inserted:  

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //ask user to choose a picture on the disk that they want to insert
 $imgRef:=Open document("")
  //if user does not cancel
 If(OK=1)
  //if the file is a supported picture file
    If(Is picture file(document))
  // insert picture selected by user
       WP INSERT PICTURE($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //if the insertion failed, alert the user
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## See also 

  
[WP INSERT DOCUMENT](wp-insert-document.md)  
[WP Picture range](wp-picture-range.md)  