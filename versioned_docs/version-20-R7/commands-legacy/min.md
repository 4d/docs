---
id: min
title: Min
slug: /commands/min
displayed_sidebar: docs
---

<!--REF #_command_.Min.Syntax-->**Min** ( *series* {; *attributePath*} ) : any<!-- END REF-->
<!--REF #_command_.Min.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Data for which to return the minimum value |
| attributePath | Text | &#8594;  | Path of attribute for which to return the minimum value |
| Function result | Date, Number | &#8592; | Minimum value in series |

<!-- END REF-->

#### Description 

<!--REF #_command_.Min.Summary-->**Min** returns the minimum value in *series*.<!-- END REF--> If *series* is an indexed field, the index is used to find the minimum value.

If the *series* selection is empty, **Min** returns 0.

You can pass an array (one or two dimensions) in *series*. In this case, the array must be of the Integer, Longint, Real, or Date type.

This command accepts an optional *attributePath* parameter of the Text type, that you can use if *series* is an object field. It allows you to define the path of the attribute to compute. Use the standard dot notation to define paths to nested attributes, for example "company.address.number". Keep in mind that object attribute names are case-sensitive.   
Only numeric attribute values are computed. If there are values in the attribute path which are not of a numeric type, they are ignored.

If the command is correctly executed, the OK system variable is set to 1\. If it is interrupted (for example if the user clicks on the **Stop** button of the progress thermometer), the OK variable is set to 0.

#### Example 1 

The following example is an object method for the variable *vMin* placed in the break 0 portion of the form. The variable is printed at the end of the report. The object method assigns the minimum value of the field to the variable, which is then printed in the last break of the report: 

```4d
 vMin:=Min([Employees]Salary)
```

**Note:** Make sure the "On printing break" form event is selected for the variable. 

The following method is called to print the records in the selection and to activate break processing:

```4d
 ALL RECORDS([Employees])
 ORDER BY([Employees];[Employees]Company;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employees]Salary)
 FORM SET OUTPUT([Employees];"PrintForm")
 PRINT SELECTION([Employees])
```

**Note:** The parameter to the [BREAK LEVEL](break-level.md) command should be equal to the number of breaks in your report. For more information about break processing, refer to the chapter *Printing*.

#### Example 2 

The following example finds the lowest sale amount of an employee and displays the result in an alert box:

```4d
 ALERT("Minimum sale = "+String(Min([Employees]Sales)))
```

#### Example 3 

This example gets the lowest value in the array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vMin:=Min($ArrGrades)
```

#### Example 4 

For an example of computing an object field attribute, please refer to the example 3 of the [Average](average.md) command description.

#### See also 

[Max](max.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 4 |
| Thread safe | &check; |
| Modifies variables | OK |


