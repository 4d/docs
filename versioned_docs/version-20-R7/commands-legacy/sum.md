---
id: sum
title: Sum
slug: /commands/sum
displayed_sidebar: docs
---

<!--REF #_command_.Sum.Syntax-->**Sum** ( *series* {; *attributePath*} ) : Real<!-- END REF-->
<!--REF #_command_.Sum.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Data for which to return the sum |
| attributePath | Text | &#8594;  | Path of attribute for which to return the sum |
| Function result | Real | &#8592; | Sum for series |

<!-- END REF-->

#### Description 

<!--REF #_command_.Sum.Summary-->The **Sum** command returns the sum (total of all values) for *series*.<!-- END REF--> If *series* is an indexed field, the index is used to total the values.

You can pass an array (one or two dimensions) in *series*. In this case, the array must be of the Integer, Longint or Real type.

This command accepts an optional *attributePath* parameter of the Text type, that you can use if *series* is an object field. It allows you to define the path of the attribute to compute. Use the standard dot notation to define paths to nested attributes, for example "company.address.number". Keep in mind that object attribute names are case-sensitive.   
Only numeric attribute values are computed. If there are values in the attribute path which are not of a numeric type, they are ignored.

If the command is correctly executed, the OK system variable is set to 1\. If it is interrupted (for example if the user clicks on the **Stop** button of the progress thermometer), the OK variable is set to 0.

#### Example 1 

The following example is an object method for a *vTotal* variable placed in a form. The object method assigns the sum of all salaries to *vTotal*:

```4d
 vTotal:=Sum([Employees]Salary)
```

The following method is called to print the records in the selection and to activate break processing:

```4d
 ALL RECORDS([Employees])
 ORDER BY([Employees];[Employees]LastNm;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employees]Salary)
 OUTPUT FORM([Employees];"PrintForm")
 PRINT SELECTION([Employees])
```

**Note:** The parameter to the [BREAK LEVEL](break-level.md "BREAK LEVEL") command should be equal to the number of breaks in your report. For more information about break processing, refer to the printing commands.

#### Example 2 

This example gets the sum of all the values placed in an array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSum:=Sum($ArrGrades)
```

#### Example 3 

For an example of computing an object field attribute, please refer to the example 3 of the [Average](average.md) command description.

#### See also 

[ACCUMULATE](accumulate.md)  
[Average](average.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  