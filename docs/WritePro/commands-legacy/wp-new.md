---
id: wp-new
title: WP New
slug: /WritePro/commands/wp-new
displayed_sidebar: docs
---

<!--REF #_command_.WP New.Syntax-->**WP New** {( *source* {; *option*} )} : Object<!-- END REF-->
<!--REF #_command_.WP New.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| source | Text, Blob, Object | &#8594;  | String: HTML source,<br/>BLOB: 4D Write Pro document (.4wp) or legacy 4D Write Blob document (.4w7/.4wt)<br/>Object: range or element or 4D Write Pro document |
| option | Integer | &#8594;  | Import option for HTML expressions |
| Function result | Object | &#8592; | 4D Write Pro object |

<!-- END REF-->

#### Description 

The **WP New** command<!--REF #_command_.WP New.Summary--> creates and returns a 4D Write Pro object.<!-- END REF--> The returned object is a complete document that can be passed to the [WP Insert document body](../commands/wp-insert-document-body.md) command, for example.

By default, if you omit the *source* parameter, the command returns an empty 4D Write Pro object.

If the *source* parameter is used, the new 4D Write Pro object will be filled with the contents of the *source*. You can pass:

* a [string](# "A character string") parameter: In this case, you pass a 4D HTML source, *i.e.* a text exported by [WP EXPORT VARIABLE](wp-export-variable.md) with the wk web page html 4D option. This text can contain references (4D tags and expressions) and embedded images.
* a [blob](# "A series of bytes (from 0 to 2 GB in length)") parameter: In this case, you pass either:  
   * a 4D Write Pro (.4wp) format document stored in a BLOB.  
   For more information about the 4D Write Pro document format, please refer to *.4wp document format*.  
   * or a legacy 4D Write area loaded in a BLOB (BLOBs containing .4w7 or .4wt documents are supported). In this context, you can use the *option* parameter to include HTML expressions as txt in the imported document (see below).  
   For a detailed list of 4D Write features that are currently supported in 4D Write Pro objects, please refer to the *Importing 4D Write documents* section.  
   If you want to import a 4D Write document (.4w7 or .4wt) stored on disk, you can also consider using the [WP Import document](../commands/wp-import-document.md) command.
* an [object](# "Data structured as a native 4D object") parameter that can be:
   * a range.  
   **WP New** will return a new document created from the specified range. Note that, if the range is not equal to the full document range, only the first section is exported and bookmarks are not exported, if any.
   * an element (table / row / paragraph / body / header / footer / inline picture / text box / section / subsection / style sheet).  
   **WP New** will return a new document containing only the contents of the element referenced in the body part (for a row, the new document will contain a table element with the row).
   * a 4D Write Pro document.  
   **WP New** will return a copy of the specified document.

By defaut, HTML expressions inserted in legacy 4D Write documents are not imported (no 4D Write Pro support). If you pass the wk import html expressions as text constant in the *option* parameter, HTML expressions will be imported as raw text within *##htmlBegin##* and *##htmlEnd##* tags -- which will require formatting actions afterwards. For example:

```RAW
##htmlBegin##Imported titlebold##htmlEnd##
```

**Compatibility Note**: *Character style sheets in legacy 4D Write documents use a proprietary mechanism, which is not supported by 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Legacy character style sheets are not imported and are no longer referenced in the document.*

#### Example 1 

You want to create an empty 4D Write Pro object:

```4d
 myWPObject:=WP New
```

#### Example 2 

You want to create a new 4D Write Pro object using a 4D Write Pro document stored on disk:

```4d
 var $BlobDoc : Blob
 var myWPArea : Object
 DOCUMENT TO BLOB("myDoc.4wp";$BlobDoc) //load the document in a Blob
 myWPArea:=WP New($BlobDoc)
```

#### Example 3 

You want to create a 4D Write Pro object containing a simple 4D expression reference:

```4d
 var myText : Text
 myText:="Today is "
 ST INSERT EXPRESSION(myText;"string(current date;System date long)";ST End text)
 myWPA:=WP New(myText)
```

#### Example 4 

You want to initialize your Write Pro area with a previously-created template:

```4d
  //Export template from an existing area
 var wpTemplate : Text
 WP EXPORT VARIABLE(myWPArea;wpTemplate;wk web page html 4D)
 
  // use the template for a new area
 var myNewWPA : Object
 myNewWPA:=WP New(wpTemplate)
```

#### Example 5 

You want to import a document stored in a BLOB field of the current record from the former 4D Write plug-in into a new 4D Write Pro area, and keep HTML expressions:

```4d
 var wpArea : Object
 wpArea=WP New([Templates]Reference_;wk import html expressions as text)
```

#### Example 6 

You have defined a template document with different preformatted parts, each of them being stored as a bookmark. When producing a final document from the template, you can extract any bookmark as a new document and insert it in the final document.   

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //get the bookmarks from the template
 $targetRange:=WP New //create an empty document (will be the final document)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //handle the main header part
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //select the range
    $RangeDoc:=WP New($Range) //create a new document from the range
    WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=after replacement, $targetRange is equal to end of replaced text
 End if
```

#### See also 

[WP Import document](../commands/wp-import-document.md)  
[WP Insert document body](../commands/wp-insert-document-body.md)  
