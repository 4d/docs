---
id: wp-set-link
title: WP SET LINK
slug: /WritePro/commands/wp-set-link
displayed_sidebar: docs
---

<!--REF #_command_.WP SET LINK.Syntax-->**WP SET LINK** ( *targetObj* ; *linkObj* )<!-- END REF-->
<!--REF #_command_.WP SET LINK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| linkObj | Object | &#8594;  | Hyperlink value |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP SET LINK.Summary-->The **WP SET LINK** applies a hyperlink reference to the *targetObj*.<!-- END REF--> Links to URLs, 4D methods, and bookmarks, are supported. The link triggers an action when the user clicks on it (or uses **Ctrl+click** on Windows or **Cmd+click** on macOS if the text is not read-only for opening URLs). 

In *targetObj*, pass the 4D Write Pro object where the link will be applied. You can pass: 

* a range, or
* an element (table / row / paragraph / body / header / footer / section / subsection), or
* a 4D Write Pro document

For example, if you pass a header, the entire contents of the header will be displayed as a hyperlink. When inserting links in your documents, 4D Write Pro applies the following rules:

* If you set a link to a *targetObj* that contains several paragraphs, several separate links will be defined.
* If you set a link to a *targetObj* that already contains link(s):  
   * any existing links that are fully included in the *targetObj* are removed and the new link is applied to the *targetObj*.  
   * if a link is partially selected (it intersects the *targetObj*), it is reduced so that the external part keeps the previous link and the new link is applied to the *targetObj*.

In the *linkObj* parameter, pass an object that describes the hyperlink. It must contain only one the following properties (except the parameter property which can be used in conjunction with the method property):

  
| **Property** | **Type**       | **Description**                                                                                                                                      | **Hyperlink action**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url          | Text           | Destination for a URL type hyperlink (encoded url).                                                                                                  | References a standard web address (http or https://*website*, mailto:*abc@xyz.com,* etc.): opens the URL in the default application (usually a browser)References a file path (absolute or relative to the 4D structure file). When referencing a .4wp or .4w7 file (file://*filepath* or *filepath/file.4wp*): loads and replaces the current document. When referencing other file types, opens file in the system default application for the file type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| bookmark     | Text           | Bookmark name                                                                                                                                        | Accesses the specified bookmark in the current document. (See *Bookmark commands*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| method       | Text           | Project method name - method must exist and be allowed with the [SET ALLOWED METHODS](../../commands/set-allowed-methods.md) command.         | Executes the 4D method when clicked. The method automatically receives two parameters in $1 and $2:<br/><table><tbody><tr><td>**Parameter**</td><td>**Property**</td><td>**Type**</td><td>**Description**</td></tr><tr><td>$1</td><td></td><td>Text</td><td>Name of 4D Write Pro area</td></tr><tr><td>$2</td><td></td><td>Object</td><td></td></tr><tr><td></td><td>method</td><td>Text</td><td>Name of 4D method</td></tr><tr><td></td><td>parameter</td><td>Text \| Number</td><td>User parameter sent to the method through the *parameter* property (optional, see below)</td></tr><tr><td></td><td>range</td><td>Object</td><td>Range of the *targetObj*</td></tr></tbody></table> |
| parameter    | Text \| Number | Used only with a *method* type link, not mandatory if the method does not require parameter. Contains an additional parameter to send to the method. | Received in $2.parameter within the method                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

**Notes:** 

* 4D Write Pro accepts only valid (encoded) URLs. Special characters in links are not translated. If special characters are necessary, you must expressly encode them (*e.g.*, %20 instead of " " for a space character). If the link is not valid, an error is generated.
* Links to 4D methods are removed from 4D Write Pro documents when they are exported in HTML, MIME HTML, or .docx format.
* If you want to remove a link from *targetObj*, please refer to the *Link commands* paragraph.

#### Example 1 

You want to add a link to your website in the footer area of your document: 

```4d
 var $footer : Object
 $footer:=WP Get footer(WPArea;1)
 WP SET TEXT($footer;"Please visit our website";wk replace)
 WP SET LINK($footer;New object("url";"http://www.4d.com"))
```

#### Example 2 

You want to create a table of contents with links using all of the bookmarks in your document:

```4d
 var $i;$n;$p;$memoStart : Integer
 var $range;$link;$toc;$tocRange;$positionInfo;$target : Object
 var $text : Text
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea1;$_bookmarks) //find all the bookmarks
 
 $n:=Size of array($_bookmarks)
 If($n>0)
    $tocRange:=WP Text range(WParea1;wk start text;wk start text) //find the beginning of the text
    WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range) //add a page break before the text
 
    For($i;1;$n) // Insert the table of contents and links
       $range:=WP Bookmark range(WParea1;$_bookmarks{$i})
       $positionInfo:=WP Get position($range)
       $memoStart:=$tocRange.end
       WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)
 
       $target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))
       $link:=New object("bookmark";$_bookmarks{$i})
       WP SET LINK($target;$link)
       WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)
    End for
 End if
```

#### Example 3 

You want to set a link to a 4D method on each "4D" string in the document:

```4d
 var $text,$find : Text
 var $p : Integer
 var $range;$link : Object
 
 $text:=WP Get text(wpArea;wk expressions as value) //retrieves all text in document
 
 $find:="4D" //target for link
 
 $p:=Position($find;$text) //loop through text to find all instances of the target
 If($p>0)
    $range:=WP Text range(wpArea;$p;$p+Length($find)) //set the length of the target
  //create the link object
    $link:=New object("method";"myAlert";"parameter";"4D rocks!") //Don't forget to authorize with SET ALLOWED METHODS  
 
    WP SET LINK($range;$link)
 End if
```

#### See also 

[Blog: Links in 4D Write Pro documents](https://blog.4d.com/links-in-4d-write-pro-documents/)  
[WP Get links](wp-get-links.md)  