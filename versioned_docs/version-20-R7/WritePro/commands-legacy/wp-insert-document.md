---
id: wp-insert-document
title: WP INSERT DOCUMENT
slug: /WritePro/commands/wp-insert-document
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT DOCUMENT.Syntax-->**WP INSERT DOCUMENT** ( *targetObj* ; *wpDoc* ; *mode* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP INSERT DOCUMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| mode | Longint | &#8594;  | Insertion mode |
| rangeUpdate | Longint | &#8594;  | Range update mode |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP INSERT DOCUMENT.Summary-->The **WP INSERT DOCUMENT** command inserts the *wpDoc* document in the *targetObj* according to the specified insertion *mode* and *rangeUpdate* parameters.<!-- END REF-->

In *targetObj*, pass:

* a range, or
* an element (table / row / paragraph / body / header / footer / inline picture / section / subsection / text box), or
* a 4D Write Pro document.

The inserted *wpDoc* document can be any 4D Write Pro document object created using the [WP New](wp-new.md) or [WP Import document](wp-import-document.md) command. Only the body children elements are inserted (i.e. headers, footers, text boxes and anchored pictures are not inserted). Sections and bookmarks in the destination range are preserved. In addition, the elements are copied, so *wpDoc* can be re-used several times.

In the *mode* parameter, pass one or a combination of the following constants from the *4D Write Pro Constants* theme to indicate the insertion mode to be used for the document in the destination *targetObj*:

| Constant   | Type    | Value | Comment                                |
| ---------- | ------- | ----- | -------------------------------------- |
| wk append  | Longint | 2     | Insert contents at end of target       |
| wk prepend | Longint | 1     | Insert contents at beginning of target |
| wk replace | Longint | 0     | Replace target contents                |

You can combine one of the previous constants with the following insertion options:

| Constant                 | Type    | Value | Comment                                                                                                              |
| ------------------------ | ------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| wk freeze expressions    | Longint | 64    | Freeze expressions at the moment of the insertion                                                                    |
| wk keep paragraph styles | Longint | 128   | Apply destination paragraph styles. In case of wk append operation, insert contents without initial paragraph break. |

* If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:  
    
| Constant              | Type    | Value | Comment                                               |  
| --------------------- | ------- | ----- | ----------------------------------------------------- |  
| wk exclude from range | Longint | 1     | Inserted contents not included in updated range       |  
| wk include in range   | Longint | 0     | Inserted contents included in updated range (default) |  
    
If you do not pass a *rangeUpdate* parameter, by default the inserted contents are included in the resulting range.
* If *targetObj* is not a range, *rangeUpdate* is ignored.

#### Example 1 

You want to replace the contents of a document by the text selected in another one:  

```4d
 $tempRange:=WP Get selection(WPTemplate) //we retrieve the user selection in the WPTemplate document
 $doctoCopy:=WP New($tempRange) //create a new document based on WPTemplate
 WP INSERT DOCUMENT(WPDoc;$doctoCopy;wk replace) //replace contents of WPDoc by the contents of the new document
```

#### Example 2 

You have defined a template document with different preformatted parts, each of them being stored as a bookmark. When producing a final document from the template, you can extract any bookmark as a new document and insert it in the final document.   

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //get the bookmarks from the template
 $targetRange:=WP New //create an empty document (will be the final document)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //handle the main header part
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //select the range
    $RangeDoc:=WP New($Range) //create a new document from the range
    WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=after replacement, $targetRange is equal to end of replaced text
 End if
```

#### See also 

  
[WP INSERT BREAK](wp-insert-break.md)  
[WP INSERT PICTURE](wp-insert-picture.md)  
[WP New](wp-new.md)  