---
id: variance
title: Variance
slug: /commands/variance
displayed_sidebar: docs
---

<!--REF #_command_.Variance.Syntax-->**Variance** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Variance.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Data for which to return the variance |
| Function result | Real | &#8592; | Variance of series |

<!-- END REF-->

#### Description 

<!--REF #_command_.Variance.Summary-->**Variance** returns the variance for *series*.<!-- END REF--> If *series* is an indexed field, the index is used to find the variance.

You can pass an array (one or two dimensions) in *series*. In this case, the array must be of the Integer, Longint or Real type.

The variance of a set of values is their average squared deviation from the mean. Its measures the dispersion of values around the mean. 4D uses the following variance formula: 

**Variance(x) = Sum (x-m)\*(x-m)/(n-1)**  
*m = Mean*  
*n = Number of values* 

If the values considered are not a sample, multiple the value returned by **Variance** by (n-1)/n.

#### Example 1 

The following example is an object method for the variable *var*. The object method assigns the sum of squares for a data series to *var*:

```4d
 var:=Variance(Students]Grades)
```

The following method is called to print the records in the selection and to activate break processing:

```4d
 ALL RECORDS([Students])
 ORDER BY([Students];[Students]Class;>)
 BREAK LEVEL(1)
 ACCUMULATE([Students]Grades)
 OUTPUT FORM([Students];"PrintForm")
 PRINT SELECTION([Students])
```

**Note:** The parameter to the [BREAK LEVEL](break-level.md) command should be equal to the number of breaks in your report. For more information about break processing, refer to the chapter *Printing*.

#### Example 2 

This example gets the variance of the values placed in an array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vVariance:=Variance($ArrGrades)
```

#### See also 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  