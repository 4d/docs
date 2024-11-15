---
id: wp-new-footer
title: WP New footer
slug: /WritePro/commands/wp-new-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP New footer.Syntax-->**WP New footer** ( *wpSection* ) : Object<!-- END REF-->
<!--REF #_command_.WP New footer.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro section or subsection |
| Function result | Object | &#8592; | 4D Write Pro footer |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New footer.Summary-->The **WP New footer** command creates and returns the footer associated to the section or subsection defined by the *wpSection* parameter.<!-- END REF--> 

If a footer element is already defined for the section or subsection, an *undefined* object is returned and an error is generated. 

#### Example 

You want to create a footer for the left pages of a section:

```4d
 var $section ;$subsection ;$footer : Object
  //Retrieve the first section
 $section:=WP Get section(wpDoc;1)
  //Retrieve the reference on the left subsection of the first section
 $subsection:=WP Get subsection($section;wk left page)
 
  //If the subsection exists, set the footer
 If($subsection#Null)
    $footer:=WP New footer($subsection)
 End if
```

#### See also 

[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  