---
id: wp-get-section
title: WP Get section
slug: /WritePro/commands/wp-get-section
displayed_sidebar: docs
---

<!--REF #_command_.WP Get section.Syntax-->**WP Get section** ( *targetObj* ) | (*wpDoc* ; *sectionIndex* ) : Object<!-- END REF-->
<!--REF #_command_.WP Get section.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| sectionIndex | Integer | &#8594;  | Section index |
| Function result | Object | &#8592; | 4D Write Pro section |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get section.Summary-->The **WP Get section** command returns the first section intersected by the *targetObj* range or element, or to the specified *sectionIndex* of the *wpDoc* document.<!-- END REF-->

* With the first syntax (using the *targetObj* parameter), the command returns the first section intersected by the range or the element. You can pass in *targetObj*:  
   * a range, or  
   * an element (table / row / paragraph / body / text box / header / footer). You cannot pass a subsection, nor an anchored picture (an error is returned in this case).  
If the range or element belongs to a header or a footer, **WP Get section** returns the section to which the header or footer is attached. If the range or element is or belongs to a text box, **WP Get section** always returns the first section, except if it is anchored to a section (in which case the section is returned).
* With the second syntax (using the *wpDoc* parameter), the command returns the section corresponding to the specified *sectionIndex* section (*sectionIndex* value must be >=1).  
If no section is defined for the specified *sectionIndex*, the command returns an undefined object (no error is returned).

**Note:** Use the [WP Get subsection](wp-get-subsection.md) command to get a subsection from a section or from a range.

#### Example 

You want to get the first section:

```4d
 var $section : Object
  // get reference of the first section
 $section:=WP Get section(wpDoc;1)
```

#### See also 

[WP Get sections](wp-get-sections.md)  
[WP Get subsection](wp-get-subsection.md)  