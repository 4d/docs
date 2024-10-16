---
id: wp-delete-header
title: WP DELETE HEADER
slug: /WritePro/commands/wp-delete-header
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE HEADER.Syntax-->**WP DELETE HEADER** ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE HEADER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro section or subsection |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE HEADER.Summary-->The **WP DELETE HEADER** command deletes the header element associated to the section or subsection defined by the *wpSection* parameter.<!-- END REF--> 

If no header element exists for the section or subsection, the command does nothing. 

#### Example 

You want to delete the header of the right pages of a section:

```4d
 var $section;$subsection;$header : Object
  //Retrieve the reference on the first section
 $section:=WP Get section(wpDoc;1)
  //Retrieve the reference on right subsection of the first section
 $subsection:=WP Get subsection($section;wk right page)
 
  //Remove the header
 WP DELETE HEADER($subsection)
```

#### See also 

[WP Get header](wp-get-header.md)  
[WP New header](wp-new-header.md)  