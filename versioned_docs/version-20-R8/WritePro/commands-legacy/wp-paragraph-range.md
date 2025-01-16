---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *targetObj* ) : Object<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element |
| Function result | Object | &#8592; | Range addressing only paragraphs |

<!-- END REF-->

#### Compatibility 

<!--REF #_command_.WP Paragraph range.Summary-->**WP Paragraph range** was named **WP Create Paragraph range** in previous versions of 4D Write Pro.<!-- END REF--> It has been renamed for clarity. 

#### Description 

The **WP Paragraph range** command returns a specific range object that addresses only the paragraphs that intersect with the *targetObj* you passed as parameter. The paragraph range object returned can be used by [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) and [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) to handle paragraph attributes only. 

In *targetObj*, you can pass:

* a range, or
* an element (table / row / paragraph / header / footer / body / section / subsection)

#### Example 

You want to define padding for the paragraphs only:

```4d
 $oParagraphs:=WP Paragraph range($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

#### See also 

[WP Picture range](wp-picture-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  