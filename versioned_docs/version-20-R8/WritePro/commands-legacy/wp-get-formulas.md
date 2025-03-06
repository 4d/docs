---
id: wp-get-formulas
title: WP Get formulas
slug: /WritePro/commands/wp-get-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP Get formulas.Syntax-->**WP Get formulas** ( *targetObj* ) : Collection<!-- END REF-->
<!--REF #_command_.WP Get formulas.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| Function result | Collection | &#8592; | Collection of formulas |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get formulas.Summary-->The **WP Get formulas** command returns a collection of all formulas defined in *targetObj*.<!-- END REF-->

In the *targetObj* parameter, you can pass:

* a range, or
* an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline or anchored picture / text box), or
* a 4D Write Pro document.

**Note:** When you pass a section in *targetObj*, only image formulas or formulas in text boxes anchored to this section or all sections are returned. If anchored to a page or to the embedded view, their formulas are not returned. Pass the document in *targetObj* to get all anchored element formulas. 

**Returned value**

**WP Get formulas** returns a collection of formula objects, each of them containing one or more of the following properties:

| **Property**     | **Type** | **Description**                                                                                                                                                                                                                    |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[ \].formula    | Object   | The formula string is available through **\[ \].formula.source**. The formula is a **copy** of the formula found in the target. If you want to modify the formula, it must be re-inserted in the document to be taken into account |
| \[ \].range      | Object   | Range of the formula (not returned for anchored picture formulas)                                                                                                                                                                  |
| \[ \].anchoredID | Text     | ID of anchored picture (returned for anchored picture formulas only)                                                                                                                                                               |
| \[ \].name       | Text     | Name of the formula, if a name was defined (not returned otherwise). Names can be defined using [WP INSERT FORMULA](../commands/wp-insert-formula.md).                                                                                         |
| \[ \].owner      | Object   | 4D Write Pro document                                                                                                                                                                                                              |

**Notes:**

* If you passed a subsection as target, formulas of the parent section are returned.
* If several formulas are returned, the collection is ordered with respect to the formula order in the target, except for targets of type document and section (any order in this case).

#### Example 

To get all formulas in a document:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea)
```

To get all formulas in the first section of a document:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WP Get section(WriteProArea;1))
```

To get the formulas of all anchored pictures in a document:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea).query("anchoredID # null")
```

#### See also 

*Managing formulas*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get links](wp-get-links.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  