---
id: std-deviation
title: Std deviation
slug: /commands/std-deviation
displayed_sidebar: docs
---

<!--REF #_command_.Std deviation.Syntax-->**Std deviation** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Std deviation.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Data for which to return the standard deviation |
| Function result | Real | &#8592; | Standard deviation of series |

<!-- END REF-->

#### Description 

<!--REF #_command_.Std deviation.Summary-->**Std deviation** returns the standard deviation of *series*.<!-- END REF--> If *series* is an indexed field, the index is used to find the standard deviation.

You can pass an array (one or two dimensions) in *series*. In this case, the array must be of the Integer, Longint or Real type.

#### Example 1 

The following example is an object method for the variable *vDeviate*. The object method assigns the standard deviation for a data series to *vDeviate*:

```4d
 vDeviate:=Std deviation([Table1]DataSeries)
```

The following method is called to print the records in the selection and to activate break processing:

```4d
 ALL RECORDS([Table1])
 ORDER BY([Table1];[Table1]DataSeries;>)
 BREAK LEVEL(1)
 ACCUMULATE([Table1]DataSeries)
 OUTPUT FORM([Table1];"PrintForm")
 PRINT SELECTION([Table1])
```

**Note:** The parameter to the [BREAK LEVEL](break-level.md) command should be equal to the number of breaks in your report. For more information about break processing, refer to the printing commands.

#### Example 2 

This example gets the standard deviation of a series of values placed in an array: 

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vStdDev:=Std deviation($ArrGrades)
```

#### See also 

[Average](average.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  
[Variance](variance.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 26 |
| Thread safe | &check; |
| Forbidden on the server ||


