---
id: wp-delete-footer
title: WP DELETE FOOTER
slug: /WritePro/commands/wp-delete-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE FOOTER.Syntax-->**WP DELETE FOOTER** ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE FOOTER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro section or subsection |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE FOOTER.Summary-->The **WP DELETE FOOTER** command deletes the footer element associated to the section or subsection defined by the *wpSection* parameter.<!-- END REF--> 

If no footer element exists for the section or subsection, the command does nothing. 

#### Example 

You want to delete the footer of the left pages of a section:

```4d
 var $section;$subsection;$header : Object
  //Retrieve the reference on the first section
 $section:=WP Get section(wpDoc;1)
  //Retrieve the reference on left subsection of the first section
 $subsection:=WP Get subsection($section;wk left page)
 
  //Remove the footer
 WP DELETE FOOTER($subsection)
```

#### See also 

[WP Get footer](wp-get-footer.md)  
[WP New footer](wp-new-footer.md)  