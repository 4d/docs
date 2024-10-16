---
id: wp-insert-break
title: WP INSERT BREAK
slug: /WritePro/commands/wp-insert-break
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT BREAK.Syntax-->**WP INSERT BREAK** ( *targetObj* ; *breakType* ; *mode* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP INSERT BREAK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| breakType | Longint | &#8594;  | Type of break to insert |
| mode | Longint | &#8594;  | Insertion mode |
| rangeUpdate | Longint | &#8594;  | Range update mode |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP INSERT BREAK.Summary-->The **WP INSERT BREAK** command inserts a new break of the *breakType* type in the *targetObj* according to the specified insertion *mode* and *rangeUpdate* parameters.<!-- END REF-->

In *targetObj*, pass:

* a range, or
* an element (table / row / paragraph / body / header / footer / inline picture / section / subsection), or
* a 4D Write Pro document

In *breakType*, pass one of the following constants from the *4D Write Pro Constants* theme to define the type of break to insert:

| Constant                    | Type    | Value | Comment                                                                                                      |
| --------------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------ |
| wk column break             | Longint | 3     | Column break: inserts a column break                                                                         |
| wk continuous section break | Longint | 5     | Defines a continuous section break (often used to change the number of columns without starting a new page). |
| wk line break               | Longint | 0     | Line break (in the same paragraph)                                                                           |
| wk page break               | Longint | 2     | Page break: defines a new page                                                                               |
| wk paragraph break          | Longint | 4     | Paragraph break: defines a new paragraph                                                                     |
| wk section break            | Longint | 1     | Section break: defines a new section                                                                         |

In the *mode* parameter, pass a constant to indicate the insertion mode to be used for the break in the destination *targetObj*:

| Constant   | Type    | Value | Comment                                |
| ---------- | ------- | ----- | -------------------------------------- |
| wk append  | Longint | 2     | Insert contents at end of target       |
| wk prepend | Longint | 1     | Insert contents at beginning of target |
| wk replace | Longint | 0     | Replace target contents                |

* If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:  
    
| Constant              | Type    | Value | Comment                                               |  
| --------------------- | ------- | ----- | ----------------------------------------------------- |  
| wk exclude from range | Longint | 1     | Inserted contents not included in updated range       |  
| wk include in range   | Longint | 0     | Inserted contents included in updated range (default) |  
    
If you do not pass a *rangeUpdate* parameter, by default the inserted contents are included in the resulting range.
* If *targetObj* is not a range, *rangeUpdate* is ignored.

#### Example 1 

While building invoices, you want to insert page breaks except on the last page:  

```4d
 $nbInvoices:=Records in selection([INVOICE])
 For($j;1;$nbInvoices)
    ... //processing invoices
    If($j#$nbInvoices) //insert page break except for last page
       WP INSERT BREAK($buildRange;wk page break;wk append;wk exclude from range)
    End if
 End for
```

#### Example 2 

You want to insert a continuous section break to have a single column section and a two-column section on the same page.

1. Insert a continuous section break at the selection to create a new section:  
    
```4d  
 $range:=WP Selection range(*;"WParea")  
 WP INSERT BREAK($range;wk continuous section break;wk append)  
```  
    
    
![](../../assets/en/WritePro/commands/pict5562056.en.png)
2. Set the column count to 2 for the first section:  
    
```4d  
 $section:=WP Get section(WParea;1)  
 WP SET ATTRIBUTES($section;wk column count;2)  
```  
    
    
![](../../assets/en/WritePro/commands/pict5562058.en.png)

#### See also 

[WP Get breaks](wp-get-breaks.md)  
[WP INSERT DOCUMENT](wp-insert-document.md)  