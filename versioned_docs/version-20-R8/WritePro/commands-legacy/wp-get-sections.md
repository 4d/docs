---
id: wp-get-sections
title: WP Get sections
slug: /WritePro/commands/wp-get-sections
displayed_sidebar: docs
---

<!--REF #_command_.WP Get sections.Syntax-->**WP Get sections** ( *targetObj* ) : Collection<!-- END REF-->
<!--REF #_command_.WP Get sections.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| Function result | Collection | &#8592; | Collection of all sections found in targetObj |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get sections.Summary-->The **WP Get sections** command returns a collection of all sections defined in the *targetObj* parameter.<!-- END REF-->

In the *targetObj* parameter, you can pass:

* a range, or
* an element (table / row / paragraph / body / header / footer / text box / picture), or
* a 4D Write Pro document

If the range or element belongs to a header or a footer, **WP Get sections** returns the section to which the header or footer is attached.

For text boxes and anchored pictures, **WP Get sections** returns: 

* a collection containing a single section if the element is anchored to a section,
* a collection with all sections if the element is anchored to all sections,
* an empty collection if the element is anchored to the embedded view or to a page number.

For more information about sections, please refer to the *Handling headers, footers, and sections* paragraph.

#### Example 

You want to change an attribute for the last section of the 4D Write Pro area:

```4d
 var $colSections : Collection
 $colSections:=WP Get sections(wpDoc)
 WP SET ATTRIBUTES($colSections[$colSections.length-1];wk column count;3)
```

#### See also 

[WP Get section](wp-get-section.md)  