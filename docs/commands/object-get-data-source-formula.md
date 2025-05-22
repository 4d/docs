---
id: object-get-data-source-formula
title: OBJECT Get data source formula
---

<!--REF #_command_.OBJECT Get data source formula.Syntax-->**OBJECT Get data source formula** ( {* ;} *object* ; *formula*)<!-- END REF-->
<!--REF #_command_.OBJECT Get data source formula.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| formula | 4D.Formula | &#8592;  | The formula currently associated with the form object. Returns `Null` if no formula is associated or the object is invalid. |

<!-- END REF-->

## Description 

<!--REF #_command_.OBJECT Get data source formula.Summary-->The **OBJECT Get data source formula** command returns the formula (if any) associated object(s) designated by the *object* and *\** parameters.<!-- END REF--> The formula must have been previously set using the [`OBJECT SET DATA SOURCE FORMULA`](object-set-data-source-formula.md) command.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

When a formula is associated with a form object, it acts as the object's data source at runtime. The returned value reflects the *4D.Formula* object previously assigned to the object.

If this command is applied to an object with no associated formula, or if the object does not exist, it returns `Null`.

If the *object* parameter contains a pattern using the `@` character, the formula of the first matching object is returned.

:::note 

 It is up to the developer to ensure that formulas are applied and retrieved in the appropriate context, especially when dealing with subforms or programmatically generated objects.
:::

## Example 

```4d
$formula := OBJECT Get data source formula(*;"TotalField")
If ($formula#Null)
   ALERT($formula.source)  // Displays the formula's source text
End if
```

## See also 

[OBJECT SET DATA SOURCE FORMULA](object-set-data-source-formula.md)
[LISTBOX GET COLUMN FORMULA](listbox-get-column-formula.md)
[OBJECT SET DATA SOURCE](object-set-data-source.md)

## Properties

|  |  |
| --- | --- |
| Command number | 1852 |
| Thread safe | &cross; |


