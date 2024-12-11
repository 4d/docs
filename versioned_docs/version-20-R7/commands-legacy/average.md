---
id: average
title: Average
slug: /commands/average
displayed_sidebar: docs
---

<!--REF #_command_.Average.Syntax-->**Average** ( *series* {; *attributePath*} ) : Real<!-- END REF-->
<!--REF #_command_.Average.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Data for which to return the average |
| attributePath | Text | &#8594;  | Path of attribute for which to return the average |
| Function result | Real | &#8592; | Arithmetic mean (average) of series |

<!-- END REF-->

#### Description 

<!--REF #_command_.Average.Summary-->**Average** returns the arithmetic mean (average) of *series*.<!-- END REF--> If *series* is an indexed field, the index is used to find the average.

You can pass an array (one or two dimensions) in *series*. In this case, the array must be of the Integer, Longint or Real type.

This command accepts an optional *attributePath* parameter of the Text type, that you can use if *series* is an object field. It allows you to define the path of the attribute to compute. Use the standard dot notation to define paths to nested attributes, for example "company.address.number". Keep in mind that object attribute names are case-sensitive.   
Only numeric attribute values are computed. If there are values in the attribute path which are not of a numeric type, they are ignored.

If the command is correctly executed, the OK system variable is set to 1\. If it is interrupted (for example if the user clicks on the **Stop** button of the progress thermometer), the OK variable is set to 0.

#### Example 1 

The following example sets the variable *vAverage* that is in the B0 Break area of an output form. The line of code is the object method for *vAverage*. The object method is not executed until the level 0 break:

```4d
 vAverage:=Average([Employees] Salary)
```

The following method is called to print the records in the selection and to activate break processing:

```4d
 ALL RECORDS([Employees])
 ORDER BY([Employees];[Employees]LastNm;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employees]Salary)
 FORM SET OUTPUT([Employees];"PrintForm")
 PRINT SELECTION([Employees])
```

**Note:** The parameter to the [BREAK LEVEL](break-level.md) command should be equal to the number of breaks in your report. For more information about break processing, refer to the chapter *Printing*.

#### Example 2 

This example gets the average of the first 15 grades in the selection:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 ORDER BY([Exams];[Exams]Exam_Grade;<)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 ARRAY REAL($ArrGrades;15)
 vAverage:=Average($ArrGrades)
```

#### Example 3 

Your \[Customer\] table contains a "full\_Data" object field with the following data:

![](../assets/en/commands/pict2898119.en.png)

You can perform the following computations:

```4d
 var $vAvg : Real
 ALL RECORDS([Customer])
 $vAvg:=Average([Customer]full_Data;"age")
  //$vAvg is 44,46
 
 var $vTot : Integer
 $vTot:=Sum([Customer]full_Data;"Children[].age")
  //$vTot is 105
```

#### See also 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  
[Sum](sum.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 2 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


