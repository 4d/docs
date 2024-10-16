---
id: wp-insert-formula
title: WP INSERT FORMULA
slug: /WritePro/commands/wp-insert-formula
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT FORMULA.Syntax-->**WP INSERT FORMULA** ( *targetObj* ; *formula* ; *mode* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP INSERT FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| formula | Object | &#8594;  | Formula object OR Object with formula and name properties |
| mode | Number | &#8594;  | Insertion mode |
| rangeUpdate | Number | &#8594;  | Includes or excludes the inserted content within the range |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP INSERT FORMULA.Summary-->The **WP INSERT FORMULA** command inserts a *formula* in *targetObj* according to the specified insertion *mode*.<!-- END REF-->

In the *targetObj* parameter, you can pass:

* a range, or
* an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline picture), or
* a 4D Write Pro document.

In the *formula* parameter, pass the 4D formula to evaluate. You can pass:

* either a [formula object](https://developer.4d.com/docs/API/FunctionClass#formula-objects) created by the [**Formula**](https://developer.4d.com/docs/API/FunctionClass#formula) or [**Formula from string**](https://developer.4d.com/docs/API/FunctionClass#formula-from-string) command,
* or an object containing two properties:  
| **Property** | **Type** | **Description**                                                                                                                                                                                                                                                                       |  
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| name         | String   | Name to display for the formula in the document                                                                                                                                                                                                                                       |  
| formula      | Object   | The [formula object](https://developer.4d.com/docs/API/FunctionClass#formula-objects) created by the [**Formula**](https://developer.4d.com/docs/API/FunctionClass#formula) or [**Formula from string**](https://developer.4d.com/docs/API/FunctionClass#formula-from-string) command |  
    
When you use an object with a formula *name*, this name is displayed in the document instead of the formula reference when formulas are displayed as reference, and in the formula tip when displayed as value or symbols. If the *name* property contains an empty string or is omitted, it is removed from the object and the formula is displayed by default. For more information, see the *Managing formulas* page.

In the *mode* parameter, pass one of the following constants to indicate the insertion mode to be used:

| Constant   | Type    | Value | Comment                                |
| ---------- | ------- | ----- | -------------------------------------- |
| wk append  | Longint | 2     | Insert contents at end of target       |
| wk prepend | Longint | 1     | Insert contents at beginning of target |
| wk replace | Longint | 0     | Replace target contents                |

* If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted *formula* is included in the resulting range:  
    
| Constant              | Type    | Value | Comment                                               |  
| --------------------- | ------- | ----- | ----------------------------------------------------- |  
| wk exclude from range | Longint | 1     | Inserted contents not included in updated range       |  
| wk include in range   | Longint | 0     | Inserted contents included in updated range (default) |  
    
If you do not pass a *rangeUpdate* parameter, by default the inserted *formula* is included in the resulting range.
* If *targetObj* is not a range, *rangeUpdate* is ignored.

**Note:** Keep in mind that, when called, the formula object is evaluated within the context of the database or component that created it.

#### Example 1 

To replace all current date formulas with formatted strings:

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object
 
  // define the formula to find
 $find:=Formula(Current date)
 
  // define the replacement formula
 $newFormula:=Formula(String(Current date;System date long))
 
  // find all formulas in the document
 $_formulas:=WP Get formulas(WriteProArea)
 
  // query the collection from WP Get formulas
 $_formulas:=$_formulas.query("formula.source =:1";$find.source)
 
  // then replace each formula
 For each($formula;$_formulas)
    WP INSERT FORMULA($formula.range;$newFormula;wk replace)
 End for each
```

#### Example 2 

You want to use a formula name for the customer name:

```4d
  //add some data
 $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  //create a formula object with a name
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Customer name"
 
  //inserts as text
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range;"Dear ";wk append)
 WP INSERT FORMULA($range;$o;wk append)
```

Result:

![](../../assets/en/WritePro/commands/pict6433508.en.png)

#### See also 

*Managing formulas*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  