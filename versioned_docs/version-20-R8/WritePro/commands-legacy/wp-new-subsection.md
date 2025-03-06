---
id: wp-new-subsection
title: WP New subsection
slug: /WritePro/commands/wp-new-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP New subsection.Syntax-->**WP New subsection** ( *wpSection* ; *subSectionType* ) : Object<!-- END REF-->
<!--REF #_command_.WP New subsection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro section |
| subSectionType | Integer | &#8594;  | Subsection type (wk first page, wk left page, or wk right page) |
| Function result | Object | &#8592; | New subsection |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New subsection.Summary-->The **WP New subsection** command creates and returns a new subsection of the *subSectionType* type in the *wpSection* 4D Write Pro section.<!-- END REF-->

In *wpSection*, pass the section where you want to create a new subsection. The section can be obtained using the [WP Get sections](wp-get-sections.md) or [WP Get section](wp-get-section.md) commands.

The *subSectionType* parameter specifies the subsection to create. You can pass one of the following constants:  
  
| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| wk first page | Integer | 1     |
| wk left page  | Integer | 2     |
| wk right page | Integer | 3     |

**Note:** Creating a left page or right page subsection will automatically create the opposite subsection. For example, if you create a left page subsection, the right page subsection is automatically defined.

If the *subSectionType* already exists, an error is returned.

#### Example 

You want to create left and right subsections:

```4d
 var $section;$subsection : Object
  // get first section
 $section:=WP Get section(wpDoc;1)
  // Create the left section - the right section is created automatically
 $subsection:=WP New subsection($section;wk left page)
```

#### See also 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get subsection](wp-get-subsection.md)  