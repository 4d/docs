---
id: last-table-number
title: Last table number
slug: /commands/last-table-number
displayed_sidebar: docs
---

<!--REF #_command_.Last table number.Syntax-->**Last table number**  : Integer<!-- END REF-->
<!--REF #_command_.Last table number.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Highest table number in the database |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Last table number.Summary-->**Last table number** returns the highest table number among the tables in the database.<!-- END REF--> Tables are numbered in the order in which they are created. If no table has been deleted from the database, this command then returns the number of tables present in the database. In the case of repeated loops on the table numbers of the database, you must use the [Is table number valid](../commands/is-table-number-valid) command in order to check that the table has not been deleted.

## Example 

The following example builds an array, named asTables*,* with the names of tables defined in the database. This array can be used as a drop-down list (or tab control, scrollable area, and so on) to display the list of the tables, within a form:

```4d
 ARRAY TEXT(asTables;Last table number)
 If(Last table number>0) //If the database does contain tables
    For($vlTables;Size of array(asTables);1;-1)
       If(Is table number valid($vlTables))
          asTables{$vlTables}:=Table name($vlTables)
       Else
          DELETE FROM ARRAY(asTables;$vlTables)
       End if
    End for
 End if
```

## See also 

[Last field number](../commands/last-field-number)  
[Is table number valid](../commands/is-table-number-valid)  
[Table name](../commands/table-name)  

## Properties

|  |  |
| --- | --- |
| Command number | 254 |
| Thread safe | yes |


