---
id: sort-array
title: SORT ARRAY
slug: /commands/sort-array
displayed_sidebar: docs
---

<!--REF #_command_.SORT ARRAY.Syntax-->**SORT ARRAY** ( *array* {; *array2* ; ... ; *arrayN*}{; > or <} )<!-- END REF-->
<!--REF #_command_.SORT ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Arrays to sort |
| > or < | Operator | &#8594;  | ">" to sort in Ascending order, or "<" to sort in Descending order, or Ascending order if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.SORT ARRAY.Summary-->The SORT ARRAY command sorts one or more arrays into ascending or descending order.<!-- END REF-->

* You cannot sort [Pointer](# "A reference to another variable (including arrays and array elements), table, or field") or [Picture](# "Can be any Windows or Macintosh picture") arrays. You can sort the elements of a two-dimensional array (i.e., *a2DArray{$vlThisElem}*) but you cannot sort the two-dimensional array itself (i.e., *a2DArray*).
* You can sort [Object](# "Data structured as a native 4D object") arrays. Null elements are grouped and array elements are sorted with an internal order.

The last parameter specifies whether to sort *array* in ascending or descending order. The “greater than” symbol (>) indicates an ascending sort; the “less than” symbol (<) indicates a descending sort. If you do not specify the sorting order, then the sort is ascending.

If more than one array is specified, the arrays are sorted following the sort order of the first array; no multi-level sorting is performed here. Instead you can use the [MULTI SORT ARRAY](multi-sort-array.md) command when you want to sort synchronized arrays.

#### Example 1 

The following example creates two arrays and then sorts them by company:

```4d
 ALL RECORDS([People])
 SELECTION TO ARRAY([People]Name;asNames;[People]Company;asCompanies)
 SORT ARRAY(asCompanies;asNames;>)
```

However, because SORT ARRAY does not perform multi-level sorts, you will end up with people‘s names in random order within each company. To sort people by name within each company, you would write:

```4d
 ALL RECORDS([People])
 ORDER BY([People];[People]Company;>;[People]Name;>)
 SELECTION TO ARRAY([People]Name;asNames;[People]Company;asCompanies)
```

#### Example 2 

You display the names from a *\[People\]* table in a floating window. When you click on buttons present in the window, you can sort this list of names from A to Z or from Z to A. As several people may have the same name, you also can use a *\[People\]ID number* field, which is indexed unique. When you click in the list of names, you will retrieve the record for the name you clicked. By maintaing a synchronized and hidden array of ID numbers, you are sure to access the record corresponding to the name you clicked: 

```4d
  // asNames array object method
 Case of
    :(Form event code=On Load)
       ALL RECORDS([People])
       SELECTION TO ARRAY([People]Name;asNames;[People]ID number;alIDs)
       SORT ARRAY(asNames;alIDs;>)
    :(Form event code=On Unload)
       CLEAR VARIABLE(asNames)
       CLEAR VARIABLE(alIDs)
    :(Form event code=On Clicked)
       If(asNames#0)
  // Use the array alIDs to get the right record
          QUERY([People];[People]ID Number=alIDs{asNames})
  // Do something with the record
       End if
 End case
 
  // bA2Z button object method
  // Sort the arrays in ascending order and keep them synchronized
 SORT ARRAY(asNames;alIDs;>)
 
  // bZ2A button object method
  // Sort the arrays in descending order and keep them synchronized
 SORT ARRAY(asNames;alIDs;<)
```

#### See also 

[Find in sorted array](find-in-sorted-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 229 |
| Thread safe | &check; |
| Forbidden on the server ||


