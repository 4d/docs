---
id: sum-squares
title: Sum squares
slug: /commands/sum-squares
displayed_sidebar: docs
---

<!--REF #_command_.Sum squares.Syntax-->**Sum squares** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Sum squares.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Data for which to return the sum of squares |
| Function result | Real | &#8592; | Sum of squares of series |

<!-- END REF-->

#### Description 

<!--REF #_command_.Sum squares.Summary-->**Sum squares** returns the sum of the squares of *series*.<!-- END REF--> If *series* is an indexed field, the index is used to find the sum of the squares.

You can pass an array (one or two dimensions) in *series*. In this case, the array must be of the Integer, Longint or Real type.

#### Example 1 

The following example is an object method for the variable *vSquares*. The object method assigns the sum of squares for a data series to *vSquares*. The *vSquares* variable is printed in the last break of the report:

```4d
 vSquares:=Sum squares([Table1]DataSeries)
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

**Note:** The parameter to the [BREAK LEVEL](break-level.md) command should be equal to the number of breaks in your report. For more information about break processing, refer to the chapter *Printing*.

#### Example 2 

This example gets the sum of the squares of the values placed in an array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSumSquares:=Sum squares($ArrGrades)
```

#### See also 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Variance](variance.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 28 |
| Thread safe | &check; |


