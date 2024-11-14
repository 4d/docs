---
id: listbox-insert-column-formula
title: LISTBOX INSERT COLUMN FORMULA
slug: /commands/listbox-insert-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT COLUMN FORMULA.Syntax-->**LISTBOX INSERT COLUMN FORMULA** ( {* ;} *object* ; *colPosition* ; *colName* ; *formula* ; *dataType* ; *headerName* ; *headerVar* {; *footerName* ; *footerVar*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT COLUMN FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name  (if * is specified) or Variable (if * is omitted) |
| colPosition | Integer | &#8594;  | Location of column to insert |
| colName | Text | &#8594;  | Name of the column object |
| formula | Text | &#8594;  | 4D formula associated with column |
| dataType | Integer | &#8594;  | Type of formula result |
| headerName | Text | &#8594;  | Name of the column header object |
| headerVar | Integer, Pointer | &#8594;  | Column header variable |
| footerName | Text | &#8594;  | Column footer object name |
| footerVar | Variable, Pointer | &#8594;  | Column footer variable |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX INSERT COLUMN FORMULA.Summary-->The **LISTBOX INSERT COLUMN FORMULA** command inserts a column into the list box designated by the *object* and *\** parameters.<!-- END REF--> 

The **LISTBOX INSERT COLUMN FORMULA** command is similar to the [LISTBOX INSERT COLUMN](listbox-insert-column.md) command except that it can be used to enter a formula as the contents of a column.

This type of contents can only be used when the “Data Source” property of the list box is set to **Current Selection**, **Named Selection**, or **Collection or Entity Selection** (for more information about this, please refer to the *Managing List Box Objects* section).

**Note:** This command does nothing if it is applied to the first column of a list box displayed in hierarchical mode. 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, please refer to the *Object Properties* section. 

The new column is inserted just before the column designated by the *colPosition* parameter. If the *colPosition* parameter is greater than the total number of columns, the column will be added after the last column. 

Pass the object name of the inserted column in the *colName* parameter. 

The *formula* parameter can contain any valid expression, i.e.:

* An instruction,
* A formula generated using the Formula editor,
* A call to a 4D command,
* A call to a project method.

At the moment the command is called, the *formula* is parsed then executed.

**Note:** Use the [Command name](command-name.md) command in order to define formulas that are independent from the application language (when they call on 4D commands).

The *dataType* parameter can be used to designate the type of data resulting from the execution of the formula. You must pass one of the following constants of the “*Field and Variable Types*” theme in this parameter:

| Constant   | Type    | Value |
| ---------- | ------- | ----- |
| Is Boolean | Integer | 6     |
| Is date    | Integer | 4     |
| Is picture | Integer | 3     |
| Is real    | Integer | 1     |
| Is text    | Integer | 2     |
| Is time    | Integer | 11    |

If the result of the *formula* does not correspond to the expected data type, an error is generated.

In the *headerName* and *headerVar* parameters, pass the object name and variable of the column header inserted.

In the *footerName* and *footerVar* parameters, you can also pass the object name and variable of the footer of the inserted column. If you omit the *footerVar* parameter, 4D uses a dynamic variable.

**Note:** Object names must be unique in a form. You need to make sure that the names passed in the *colName*, *headerName* and *footerName* parameters are not already used. Otherwise, the column is not created and an error is generated.

##### Dynamic insertion 

Starting with 4D v14 R3, you can use this command to insert columns into list boxes dynamically when the form is executed. 4D will automatically handle the definition of the necessary variables (footer and header).

To do this, **LISTBOX INSERT COLUMN FORMULA** accepts a Nil pointer (**\->\[\]**) as a value for the *headerVar* and *footerVar* parameters. In this case, when the command is executed, 4D creates the required variables dynamically (for more information, refer to the section).

Note that header and footer variables are always created with a specific type (longint and text, respectively).

#### Example 1 

We want to add a new column to the right of the list box that will contain a formula which calculates an empolyee's age:

```4d
 vAge:="Current Date-[Employees]BirthDate)\365"
 $last:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN FORMULA(*;"ListBox1";$last;"ColFormula";vAge;Is real;"Age";HeaderVar)
```

#### Example 2 

You want to add column to a list box of collection type:

```4d
  //create collection
 var emps : Collection
 emps:=New collection(New object("Employee";"John Doe";"JobTitle";"CEO");New object("Employee";"Mary Smith";"JobTitle";"CTO");New object("Employee";"Jane Turner";"JobTitle";"CFO"))
```

The column contents are evaluated for each element of the collection and referenced with the data source expression, *This.Employee*, as shown below:

![](../assets/en/commands/pict3815223.en.png)

At execution:

![](../assets/en/commands/pict3814815.en.png)

To add a column showing the job titles:

```4d
 LISTBOX INSERT COLUMN FORMULA(*;"EmpLB";2;"2nd Column";"This.JobTitle";Is text;"JTHeader";header2)
 OBJECT SET TITLE(header2;"Title")
```

The column is added to the list box:

![](../assets/en/commands/pict3814850.en.png)

#### See also 

[LISTBOX INSERT COLUMN](listbox-insert-column.md)  