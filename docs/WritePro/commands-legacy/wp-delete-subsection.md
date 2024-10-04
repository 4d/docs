---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *subSectionType* )<!-- END REF-->
<!--REF #_command_.WP DELETE SUBSECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#x1F852; | 4D Write Pro section |
| subSectionType | Longint | &#x1F852; | Subsection type (wk first page, wk left page, or wk right page) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE SUBSECTION.Summary-->The **WP DELETE SUBSECTION** command deletes the subsection of the *subSectionType* type from the *wpSection* 4D Write Pro section.<!-- END REF--> 

In *wpSection*, pass the section from which you want to remove the subsection. The section can be obtained using the [WP Get sections](wp-get-sections.md) or [WP Get section](wp-get-section.md) commands. 

The *subSectionType* parameter specifes the subsection to delete. You can pass one of the following constants:  
  
| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| wk first page | Longint | 1     |
| wk left page  | Longint | 2     |
| wk right page | Longint | 3     |

**Note:** Deleting a left page or right page subsection will automatically delete the opposite subsection. For example, if you delete a right page subsection, the left page subsection is automatically deleted. 

If the *subSectionType* does not exist, the command does nothing (no error is generated). 

#### Example 

You want to delete the first page subsection of the first section:

```4d
 var $section;$subsection : Object
  // get first section
 $section:=WP Get section(wpDoc;1)
  // Delete the subsection
 WP DELETE SUBSECTION($section;wk first page)
```

#### See also 

[WP Get subsection](wp-get-subsection.md)  
[WP New subsection](wp-new-subsection.md)  