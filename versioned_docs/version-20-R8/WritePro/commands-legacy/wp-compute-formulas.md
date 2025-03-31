---
id: wp-compute-formulas
title: WP COMPUTE FORMULAS
slug: /WritePro/commands/wp-compute-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP COMPUTE FORMULAS.Syntax-->**WP COMPUTE FORMULAS** ( *targetObj* )<!-- END REF-->
<!--REF #_command_.WP COMPUTE FORMULAS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP COMPUTE FORMULAS.Summary-->The **WP COMPUTE FORMULAS** command evaluates the formulas in *targetObj*.<!-- END REF-->

The command computes or updates the result of formulas found in the *targetObj* based on the current context and displays the result obtained. For example, if the formula inserted is the time, the value will be modified each time the **WP COMPUTE FORMULAS** command is called. For more information on formula evaluation, please refer to the *Managing formulas* section. 

In the *targetObj* parameter, you can pass:

* a range, or
* an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline or anchored picture / text box), or
* a 4D Write Pro document.

**Note:** When you pass a section in *targetObj*, only image formulas or formulas in text boxes anchored to this section or all sections are computed. If anchored to a page or to the embedded view, their formulas are not computed. Pass the document in *targetObj* to compute all anchored element formulas. 

#### Example 

To update the formulas in a document:

```4d
 WP COMPUTE FORMULAS(WriteProArea)
```

To update all formulas in the first section of a document:

```4d
 WP COMPUTE FORMULAS(WP Get section(WriteProArea;1))
```

#### See also 

*Managing formulas*  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  
[WP SET DATA CONTEXT](wp-set-data-context.md)  