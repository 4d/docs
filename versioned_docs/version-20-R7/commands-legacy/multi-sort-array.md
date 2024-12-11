---
id: multi-sort-array
title: MULTI SORT ARRAY
slug: /commands/multi-sort-array
displayed_sidebar: docs
---

<!--REF #_command_.MULTI SORT ARRAY.Syntax-->**MULTI SORT ARRAY** ( *array* {; *sort*}{; *array2* ; *sort2* ; ... ; *arrayN* ; *sortN*} ) <br/>
**MULTI SORT ARRAY** ( *ptrArrayName* ; *sortArrayName* )<!-- END REF-->
<!--REF #_command_.MULTI SORT ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array(s) to be sorted |
| sort | * | &#8594;  | ">" to sort by increasing order or  "<" to sort by decreasing order If omitted  no sort |
| MULTI SORT ARRAY ( ptrArrayName ; sortArrayName ) |
| Parameter | Type | Description |
| ptrArrayName | Pointer array | &#8594;  | Array of array pointers |
| sortArrayName | Array integer | &#8594;  | Sort order array (1 = sort by increasing order, -1 = sort by decreasing order, 0 = synchronization with previous sorts) |

<!-- END REF-->

#### Description 

<!--REF #_command_.MULTI SORT ARRAY.Summary-->The MULTI SORT ARRAY command enables you to carry out a multi-level sort on a set of arrays.<!-- END REF--> 

This command accepts two different syntaxes.

* **First syntax: MULTI SORT ARRAY (array{; sort}{; array2; sort2; ...; arrayN; sortN})**

This syntax is the simplest; it lets you directly pass the names of the synchronized arrays where you want to apply a multi-criteria sort.

You can pass an unlimited number of pairs (*array;> or <*) and/or only arrays. All the arrays passed as parameters are sorted in a synchronized manner.

To use the contents of an array as sort criteria, pass the *sort* parameter. The value of the parameter (*\>* or *<*) determines the order (ascending or descending) in which the array will be sorted. If the *sort* parameter is omitted, the contents of the array are not used as sort criteria.

**Note:** Keep in mind that at least one sort criterion must be passed in order for the command to work. If no sort criterion is set, an error is generated.

The sort levels are determined by the order in which the arrays are passed to the command: the position of an array with a sort criterion in the syntax determines its sort level.

* **Second syntax: MULTI SORT ARRAY (ptrArrayName; sortArrayName)**

This syntax, more complex, is also invaluable for generic developments (for example, you can create a generic method for sorting arrays of all types, or yet again, create the equivalent of a generic [SORT ARRAY](sort-array.md) command).

The *ptrArrayName* parameter contains the name of an array of array pointers; each element of this array is a pointer designating an array to be sorted. The sorts are performed in the order of the array pointers defined by *ptrArrayName*. **Warning:** all the arrays pointed to by *ptrArrayName* must have the same number of elements.

**Note:** *ptrArrayName* can be an array of local ($ptrArrayName), process (ptrArrayName) or inter-process (<>ptrArrayName) pointers. Conversely, the elements of this array must point to process or inter-process arrays only.

The *sortArrayName* parameter contains the name of an array in which each element indicates the sorting order (-1, 0 or 1) of the element of the corresponding array of pointers:  
\-1 = Sort by decreasing order.  
0 = The array is not used as a sorting criterion but must be sorted according to the other sorts.   
1 = Sort by increasing order.

For each element of the *ptrArrayName* array, there must be a corresponding element of the *sortArrayName* array. Both arrays must therefore have exactly the same number of elements.

**Notes:** 

* You cannot sort [Pointer](# "A reference to another variable (including arrays and array elements), table, or field") or [Picture](# "Can be any Windows or Macintosh picture") arrays. You can sort the elements of a two-dimensional array (i.e., *a2DArray{$vlThisElem}*) but you cannot sort the two-dimensional array itself (i.e., *a2DArray*).
* You can sort [Object](# "Data structured as a native 4D object") arrays. Null elements are grouped and array elements are sorted with an internal order.

#### Example 1 

The following example uses the first syntax: it creates four arrays and sorts them by city (ascending order) then by salary (descending order) with the last two arrays, *names\_array* and *telNum\_array*, being synchronized according to the previous sort criteria:

```4d
 ALL RECORDS([Employees])
 SELECTION TO ARRAY([Employees]City;cities;[Employees]Salary;salaries;[Employees]Name;
 names;[Employees]TelNum;telNums)
 MULTI SORT ARRAY(cities;>;salaries;<;names;telNums)
```

If you want for the names array to be used as the third sort criteria, just add *\>* or *<* after the *names\_array* parameter.   
Note that the syntax:

```4d
 MULTI SORT ARRAY(cities;>;salaries;names;telNums)
```

is equivalent to:

```4d
 SORT ARRAY(cities;salaries;names;telNums;>)
```

#### Example 2 

The following example uses the second syntax: it creates four arrays and sorts them by city (increasing order) and company (decreasing order); the last two arrays, names\_Array and telNum\_Array, being synchronized according to previous sort criteria:

```4d
 ALL RECORDS([Employees])
 SELECTION TO ARRAY([Employees]City;cities;[Employees]Company;companies;[Employees]Name;
 names;[Employees]TelNum;telNums)
 ARRAY POINTER(pointers_Array;4)
 ARRAY LONGINT(sorts_Array;4)
 pointers_Array{1}:=->cities
 sorts_Array{1}:=1
 pointers_Array{2}:=->companies
 sorts_Array{2}:=-1
 pointers_Array{3}:=->names
 sorts_Array{3}:=0
 pointers_Array{4}:=->telNums
 sorts_Array{4}:=0
 MULTI SORT ARRAY(pointers_Array;sorts_Array)
```

If you want the array of names be used as a third sort criterion, you need to assign the value 1 to the sorts\_Array{3} element. Or else, if you want the arrays to be sorted only by the city criterion, assign the value 0 to the sorts\_Array{2}, sorts\_Array{3} and sorts\_Array{4} elements. In this way, you obtain an identical result to [SORT ARRAY](sort-array.md)(cities;companies;names;telNums;>). 

#### See also 

[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SORT ARRAY](sort-array.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 718 |
| Thread safe | &check; |
| Forbidden on the server ||


