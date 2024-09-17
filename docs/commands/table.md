---
id: table
title: Table
displayed_sidebar: docs
---

<!--REF #_command_.Table.Syntax-->**Table** ( tableNum | aPtr ) -> Function result<!-- END REF-->
<!--REF #_command_.Table.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | aPtr | Longint, Pointer | -> | Table number, or Table pointer, or Field pointer |
| Function result | Longint, Pointer | <- | Table pointer, if a Table number is passedTable number, if a Table pointer is passedTable number, if a Field pointer is passed |

<!-- END REF-->

#### Description 



The Table command has three forms:

* If you pass a table number in *tableNum*, Table returns a pointer to the table.
* If you pass a table pointer in *aPtr*, Table returns the table number of the table.
* If you pass a field pointer in *aPtr*, Table returns the table number of the field.

#### Example 1 

This example sets the *tablePtr* variable to a pointer to the third table of the database:

```4d
 TablePtr:=Table(3)
```

#### Example 2 

Passing *tablePtr* (a pointer to the third table) to Table returns the number 3\. The following line sets *TableNum* to 3: 

```4d
 TableNum:=Table(TablePtr)
```

#### Example 3 

This example sets the *tableNum* variable to the table number of *\[Table3\]*:

```4d
 TableNum:=Table(->[Table3])
```

#### Example 4 

This example sets the *tableNum* variable to the table number of the table to which the *\[Table3\]Field1* field belongs:

```4d
 TableNum:=Table(->[Table3]Field1)
```

#### See also 

[Field](field.md)  
[Get last table number](get-last-table-number.md)  
[Table name](table-name.md)  