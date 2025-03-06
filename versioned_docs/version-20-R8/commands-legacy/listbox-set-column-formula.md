---
id: listbox-set-column-formula
title: LISTBOX SET COLUMN FORMULA
slug: /commands/listbox-set-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Syntax-->**LISTBOX SET COLUMN FORMULA** ( {* ;} *object* ; *formula* ; *dataType* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or  Variable (if * is omitted) |
| formula | Text | &#8594;  | 4D formula associated with column |
| dataType | Integer | &#8594;  | Type of formula result |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Summary-->The **LISTBOX SET COLUMN FORMULA** command modifies the *formula* associated with the column of the list box designated by the *object* and *\** parameters.<!-- END REF--> Formulas can only be used when the “Data Source” property of the list box is either **Current Selection**, **Named Selection**, or **Collection or Entity Selection**.

**Note:** You can use the [OBJECT SET DATA SOURCE](object-set-data-source.md) command to define the data source of an array type list box. 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. This parameter must designate a list box column.

The *formula* parameter can contain any valid expression, i.e.:

* an instruction,
* a formula generated using the formula editor,
* a call to a 4D command,
* a call to a project method.

When the command is called, the formula is parsed and then executed.

**Note:** Use the [Command name](command-name.md) command to specify formulas independent from the application language (when they call 4D commands).

The *dataType* parameter designates the type of data resulting from the execution of the formula. In this parameter, you pass one of the constants from the *Field and Variable Types* theme. If the formula result does not match the expected data type, an error is generated.

#### See also 

[LISTBOX Get column formula](listbox-get-column-formula.md)  
[OBJECT SET DATA SOURCE](object-set-data-source.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1203 |
| Thread safe | &cross; |


