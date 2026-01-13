---
id: table
title: Table
slug: /commands/table
displayed_sidebar: docs
---

<!--REF #_command_.Table.Syntax-->**Table** ( *tableNum* : Integer ) : Pointer<br/>**Table** ( *tablePtr* : Pointer ) : Integer<br/>**Table** ( *fieldPtr* : Pointer ) : Integer<!-- END REF-->
<!--REF #_command_.Table.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum | Integer | &#8594;  | Table number |
| tablePtr | Pointer | &#8594;  | Table pointer |
| fieldPtr | Pointer | &#8594;  | Field pointer |
| Function result | Pointer, Integer | &#8592; | Table pointer, if a Table number is passed<br/>Table number if a Table pointer or a Field pointer is passed|

<!-- END REF-->

## Description 

The `Table` command has three forms:

<!--REF #_command_.Table.Summary-->* If you pass a table number in *tableNum*, Table returns a pointer to the table.
* If you pass a table pointer in *tablePtr*, Table returns the table number of the table.
* If you pass a field pointer in *fieldPtr*, Table returns the table number of the field.<!-- END REF-->

## Example 1 

This example sets the *tablePtr* variable to a pointer to the third table of the database:

```4d
 TablePtr:=Table(3)
```

## Example 2 

Passing *tablePtr* (a pointer to the third table) to Table returns the number 3\. The following line sets *TableNum* to 3: 

```4d
 TableNum:=Table(TablePtr)
```

## Example 3 

This example sets the *tableNum* variable to the table number of *\[Table3\]*:

```4d
 TableNum:=Table(->[Table3])
```

## Example 4 

This example sets the *tableNum* variable to the table number of the table to which the *\[Table3\]Field1* field belongs:

```4d
 TableNum:=Table(->[Table3]Field1)
```

## See also 

[Field](field.md)  
[Last table number](last-table-number.md)  
[Table name](table-name.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 252 |
| Thread safe | yes |


