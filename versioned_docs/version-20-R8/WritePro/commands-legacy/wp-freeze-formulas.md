---
id: wp-freeze-formulas
title: WP FREEZE FORMULAS
slug: /WritePro/commands/wp-freeze-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP FREEZE FORMULAS.Syntax-->**WP FREEZE FORMULAS** ( *targetObj* {; *recompute*} )<!-- END REF-->
<!--REF #_command_.WP FREEZE FORMULAS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| recompute | Integer | &#8594;  | Option to control recomputing |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP FREEZE FORMULAS.Summary-->The **WP FREEZE FORMULAS** command "freezes" the contents of the formulas in *targetObj*.<!-- END REF-->

The command replaces each formula in the *targetObj* with its computed value (either static text or image). This creates a portable document since only the references of formulas are kept in the *targetObj* itself. 

In the *targetObj* parameter, you can pass:

* a range, or
* an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline or anchored picture / text box), or
* a 4D Write Pro document.

**Notes:** 

* If targetObj designates an offscreen area where formulas have not been previously computed, they will be evaluated before being frozen. In particular, formulas are not computed when an offscreen document is loaded.
* When you pass a section in *targetObj*, only image formulas or formulas in text boxes anchored to this section or all sections are frozen. If anchored to a page or to the embedded view, their formulas are not frozen. Pass the document in *targetObj* to freeze all anchored element formulas.

The *recompute* optional parameter allows you to define if the formulas in *targetObj* must be recomputed before being frozen. You can pass one constant from the "4D Write Pro" theme:

| Constant                        | Type    | Value | Comment                                                                                                    |
| ------------------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------- |
| wk do not recompute expressions | Integer | 2     | Specifies that all expressions in the document are not recomputed before printing or freezing.             |
| wk recompute expressions        | Integer | 0     | Specifies that all expressions in the document are recomputed before printing or freezing (default value). |

By default, if *recompute* is omitted, expressions are recomputed. 

**Warning:** *Carry-over rows*, if any, are transformed as regular rows when you freeze the targetObj. As a result, if the page size or orientation is modified, or if the document is exported, they may be shifted in the resulting layout. 

#### Example 

To freeze the formulas in a document:

```4d
 WP FREEZE FORMULAS(WriteProArea)
```

To freeze all formulas in the first section of a document without recomputing:

```4d
 WP FREEZE FORMULAS(WP Get section(WriteProArea;1);wk do not recompute expressions)
```

#### See also 

[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  