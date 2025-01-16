---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *targetObj* ) : Object<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element |
| Function result | Object | &#8592; | Range object containing pictures only |

<!-- END REF-->

#### Compatibility 

<!--REF #_command_.WP Picture range.Summary-->**WP Picture range** was named **WP Create picture range** in previous versions of 4D Write Pro.<!-- END REF--> It has been renamed for clarity. 

#### Description 

The **WP Picture range** command returns a specific range object that addresses only the pictures contained in the *targetObj* you passed as parameter. The image range object returned can be used by [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) and [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) to handle picture attributes. 

In *targetObj*, you can pass:

* a range, or
* an element (table / row / paragraph / header / footer / body / section / subsection)

#### Example 

You want to change the border color of pictures only:

```4d
 $oPicts:=WP Picture range($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

#### See also 

*Handling pictures*  
*Using commands from the Styled Text theme*  
[WP Add picture](../commands/wp-add-picture.md)  
[WP INSERT PICTURE](../commands/wp-insert-picture.md)  
[WP Paragraph range](wp-paragraph-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  