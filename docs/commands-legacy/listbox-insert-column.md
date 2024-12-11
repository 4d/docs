---
id: listbox-insert-column
title: LISTBOX INSERT COLUMN
slug: /commands/listbox-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT COLUMN.Syntax-->**LISTBOX INSERT COLUMN** ( {* ;} *object* ; *colPosition* ; *colName* ; *colVariable* ; *headerName* ; *headerVar* {; *footerName* ; *footerVar*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT COLUMN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is set) or Variable (if * is omitted) |
| colPosition | Integer | &#8594;  | Location of column to insert |
| colName | Text | &#8594;  | Name of the column object |
| colVariable | Array, Field, Variable, Pointer | &#8594;  | Column array name or field or variable |
| headerName | Text | &#8594;  | Name of the column header object |
| headerVar | Integer, Pointer | &#8594;  | Column header variable |
| footerName | Text | &#8594;  | Column footer object name |
| footerVar | Variable, Pointer | &#8594;  | Column footer variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX INSERT COLUMN.Summary-->The **LISTBOX INSERT COLUMN** command inserts a column in the list box set by the *object* and *\** parameters.<!-- END REF--> 

**Note:** This command does nothing if it is applied to the first column of a list box displayed in hierarchical mode. 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

The new column is inserted just in front of the column set using the *colPosition* parameter. If the *colPosition* parameter is greater than the total number of columns, the column is added after the last column. 

Pass the name of the object and the variable of the inserted column in the *colName* and *colVariable* parameters. 

* With an array type list box, the name of the variable must match the name of the array whose contents will be displayed in the column. You can pass a Nil (->\[\]) pointer if you use the command in a dynamic context when the form is executed (see below).
* With a selection list box, you must pass a field or variable in the *colVariable* parameter. The contents of the column will thus be the value of the field or variable, evaluated for each record of the selection associated with the list box. This type of content can only be used when the “Data Source” property of the list box is Current Selection or Named Selection (see the *Managing List Box Objects* section). You can use fields or variables of the string, number, Date, Time, Picture and Boolean types.

In the context of list boxes based on selections of records, **LISTBOX INSERT COLUMN** can be used to insert simple elements (fields or variables). If you want to handle more complex expressions (such as formulas or methods), you must use the [LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md) command.   
Collection or Entity selection type list boxes are also supported, however since the *colName* parameter does not accept expressions, you must use the [LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md) command to assign the data source. It is more accurate to use the [LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md) command in this case. 

**Note:** It is not possible to combine columns of the array type (array data source) and those of the field or variable type (selection data source) in the same list box.

Pass the object name and the variable of the inserted column header in the *headerName* and *headerVar* parameters.

In the *footerName* and *footerVar* parameters, you can also pass the object name and variable of the footer of the inserted column.

**Note:** Object names must be unique in a form. You must be sure that the names passed in the *colName*, *headerName*  and *footerName* parameters are not already used. Otherwise, the column is not created and an error is generated.

##### Dynamic insertion 

You can use this command to insert columns into list boxes dynamically when the form is executed. 4D will automatically handle the definition of the necessary variables (column, footer and header).

To do this, **LISTBOX INSERT COLUMN** accepts a **Nil** (**\->\[\]**) pointer as a value for the *colVariable* (array type list box only), *headerVar* and *footerVar* parameters. In this case, when the command is executed, 4D creates the required variables dynamically (for more information, refer to the section). 

Note that header and footer variables are always created with a specific type (longint and text, respectively). Conversely, column variables cannot be typed when created because list boxes accept different types of arrays for these variables (text array, integer array, and so on). This means you have to set the array type manually (see example 3). It is important to perform this typing before calling commands such as [LISTBOX INSERT ROWS](listbox-insert-rows.md) to insert new elements in the array. Alternatively, you can use [APPEND TO ARRAY](append-to-array.md) both for setting the type of the array and inserting elements. 

#### Example 1 

We would like to add a column at the end of the list box: 

```4d
 var HeaderVarName;$Last;RecNum : Integer
 ALL RECORDS([Table 1])
 $RecNum:=Records in table([Table 1])
 ARRAY PICTURE(Picture;$RecNum)
 
 $Last:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$Last;"ColumnPicture";Picture;"HeaderPicture";HeaderVarName)
```

#### Example 2 

We would like to add a column to the right of the list box and associate the values of the \[Transport\]Fees field with it: 

```4d
 $last:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$last;"FieldCol";[Transport]Fees;"HeaderName";HeaderVar)
```

#### Example 3 

You want to insert a column dynamically into an array type list box and define its header:

```4d
 var $NilPtr : Pointer
 LISTBOX INSERT COLUMN(*;"MyListBox";1;"MyNewColumn";$NilPtr;"MyNewHeader";$NilPtr)
 ColPtr:=OBJECT Get pointer(Object named;"MyNewColumn")
 ARRAY TEXT(ColPtr->;10)
  //Definition of header
 headprt:=OBJECT Get pointer(Object named;"MyNewHeader")
 OBJECT SET TITLE(headprt->;"Inserted header")
```

#### See also 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  
[LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 829 |
| Thread safe | &check; |
| Forbidden on the server ||


