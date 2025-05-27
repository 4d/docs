---
id: object-get-data-source-formula
title: OBJECT Get data source formula
---

<!--REF #_command_.OBJECT Get data source formula.Syntax-->**OBJECT Get data source formula** ( {* ;} *object* ) : *formula*<!-- END REF-->
<!--REF #_command_.OBJECT Get data source formula.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| formula | 4D.Formula | &#8592;  | Formula associated with the form object (`Null` if no formula is associated)|

<!-- END REF-->

## Description 

The **OBJECT Get data source formula** command<!--REF #_command_.OBJECT Get data source formula.Summary--> returns the formula (if any) associated object(s) designated by the *object* and *\** parameters.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

When a formula is associated with a form object, it acts as the object's data source at runtime. 

If this command is applied to an object with no custom formula assigned, it returns the automatically assigned [form variable](../FormObjects/properties_Object.md#dynamic-variables)  (`$form_xxxx`).  
If the object does not exist or does not support formulas, it returns `Null`.


## Example 

You want check what formula (if any) is bound to an object:

```4d
$formula:=OBJECT Get data source formula(*; "myInput")

```

## See also 

[OBJECT SET DATA SOURCE FORMULA](object-set-data-source-formula.md)<br/>
[LISTBOX GET COLUMN FORMULA](../commands-legacy/listbox-get-column-formula.md)<br/>
[OBJECT SET DATA SOURCE](../commands-legacy/object-set-data-source.md)

## Properties

|  |  |
| --- | --- |
| Command number | 1852 |
| Thread safe | &cross; |


