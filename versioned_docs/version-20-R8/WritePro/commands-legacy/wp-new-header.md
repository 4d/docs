---
id: wp-new-header
title: WP New header
slug: /WritePro/commands/wp-new-header
displayed_sidebar: docs
---

<!--REF #_command_.WP New header.Syntax-->**WP New header** ( *wpSection* ) : Object<!-- END REF-->
<!--REF #_command_.WP New header.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro section or subsection |
| Function result | Object | &#8592; | 4D Write Pro header |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New header.Summary-->The **WP New header** command creates and returns the header associated to the section or subsection defined by the *wpSection* parameter.<!-- END REF--> 

If a header element is already defined for the section or subsection, an *undefined* object is returned and an error is generated. 

#### Example 

You want to create a header for the right pages of a section:

```4d
 var $section;$subsection;$header : Object
  //Retrieve the first section
 $section:=WP Get section(wpDoc;1)
  //Retrieve the right subsection of the first section
 $subsection:=WP Get subsection($section;wk right page)
 
  //If the subsection exists, set the header
 If($subsection#Null)
    $header:=WP New header($subsection)
 End if
```

#### See also 

[WP DELETE HEADER](wp-delete-header.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  