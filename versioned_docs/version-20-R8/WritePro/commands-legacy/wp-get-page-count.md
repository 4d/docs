---
id: wp-get-page-count
title: WP Get page count
slug: /WritePro/commands/wp-get-page-count
displayed_sidebar: docs
---

<!--REF #_command_.WP Get page count.Syntax-->**WP Get page count** ( *targetObj* ) : Integer<!-- END REF-->
<!--REF #_command_.WP Get page count.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro document or section |
| Function result | Integer | &#8592; | Number of pages in document |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get page count.Summary-->The **WP Get page count** command returns the total number of pages defined in the *targetObj* you passed in parameter.<!-- END REF-->

In *targetObj*, you can pass:

* a section / subsection, or
* a 4D Write Pro document

The command returns the number of pages of the *targetObj*. If you pass a subsection, the number of pages of the parent section is returned. 

The same viewing settings as for the [WP PRINT](wp-print.md) command are used with **WP Get page count**: 

* headers: visible
* footers: visible
* expressions: computed and displayed
* page mode: page or draft

If *targetObj* is displayed in a 4D Write Pro form area, make sure that viewing settings of the area match the command viewing settings to get consistent information. Note also that if these settings are different in the area, 4D Write Pro will have to "clone" the document to calculate the layout at each call of the command, which can be time consuming. For performance reasons, it is recommended in this case to build the document offline and to copy it to the form object area only when the build is complete. 

#### Example 

You want to know the total number of 4D Write Pro document pages stored in the "Manual" field within the current selection of items. You can write:

```4d
 var $pageCount : Integer
 var $totalCount : Integer
 FIRST RECORD([Items])
 While(Not(End selection([Items]))
    $pageCount:=WP Get page count([Items]Manual)
    $totalCount:=$totalCount+$pageCount
    NEXT RECORD([Items])
 End while
 ALERT("Total number of manual pages: "+String($totalCount))
```
