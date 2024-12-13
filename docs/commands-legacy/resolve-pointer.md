---
id: resolve-pointer
title: RESOLVE POINTER
slug: /commands/resolve-pointer
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE POINTER.Syntax-->**RESOLVE POINTER** ( *aPointer* ; *varName* ; *tableNum* ; *fieldNum* )<!-- END REF-->
<!--REF #_command_.RESOLVE POINTER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aPointer | Pointer | &#8594;  | Pointer for which to retrieve the referenced object |
| varName | Text | &#8592; | Name of referenced variable or empty string |
| tableNum | Integer | &#8592; | Number of referenced table or array element or 0 or -1 |
| fieldNum | Integer | &#8592; | Number of referenced field or 0 |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESOLVE POINTER.Summary-->The RESOLVE POINTER command retrieves the information of the object referenced by the pointer expression *aPointer* and returns it into the parameters *varName*, *tableNum,* and *fieldNum*.<!-- END REF-->

Depending on the nature of the referenced object, RESOLVE POINTER returns the following values:

| **Referenced object** | **Parameters**       |                    |                       |
| --------------------- | -------------------- | ------------------ | --------------------- |
| **varName**           | **tableNum**         | **fieldNum**       |                       |
| None (NIL pointer)    | "" (empty string)    | 0                  | 0                     |
| Variable              | Name of the variable | \-1                | \-1                   |
| Array                 | Name of the array    | \-1                | \-1                   |
| Array element         | Name of the array    | Element number     | \-1                   |
| 2D array element      | Name of the 2D array | Element row number | Element column number |
| Table                 | "" (empty string)    | Table number       | 0                     |
| Field                 | "" (empty string)    | Table number       | Field number          |

**Notes:** 

* If the value you pass in *pointer* is not a pointer expression, a syntax error occurs.
* The RESOLVE POINTER command does not work with pointers to local variables. In fact, by definition several local variables with the same name could exist in different locations, so it is not possible for the command to find the correct variable.

#### Example 1 

Within a form, you create a group of 100 enterable variables called v1, v2... v100\. To do so, you perform the following steps:

a. Create one enterable variable that you name v. 

b. Set the properties of the object. 

c. Attach the following method to that object:

```4d
 DoSomething(Self) // DoSomething being a project method in your database
```

  
d. At this point, you can either duplicate the variable as many times as you need, or use the Objects on Grid feature in the Form Editor.

e. Within the DoSomething method, if you need to know the index of the variable for which the method is called, you write:

```4d
 RESOLVE POINTER($1;$vsVarName;$vlTableNum;$vlFieldNum)
 $vlVarNum:=Num(Substring($vsVarName;2))
```

Note that by constructing your form in this way, you write the methods for the 100 variables only once; you do not need to write DoSomething (1), DoSomething (2)...,DoSomething (100).

#### Example 2 

For debugging purposes, you need to verify that the second parameter ($2) to a method is a pointer to a table. At the beginning of this method, you write: // ...  
  
```4d
 If(<>DebugOn)
    RESOLVE POINTER($2;$vsVarName;$vlTableNum;$vlFieldNum)
    If(Not(($vlTableNum>0)&($vlFieldNum=-1)&($vsVarName="")))
  // WARNING: The pointer is not a reference to a table
       TRACE
       End
    End if
  // ...
```

#### Example 3 

See example for the *\_o\_DRAG AND DROP PROPERTIES* command.

#### Example 4 

Here is an example of a 2D array pointer:

```4d
 ARRAY TEXT(atCities;100;50)
 var $city : Pointer
 atCities{1}{2}:="Rome"
 atCities{1}{5}:="Paris"
 atCities{2}{6}:="New York"
  // ...other values
 $city:=->atCities{1}{5}
 RESOLVE POINTER($city;$var;$rowNum;$colNum)
  //$var="atCities"
  //$rowNum="1"
  //$colNum="5"
```

#### See also 

[Field](field.md)  
[Get pointer](get-pointer.md)  
[Is a variable](is-a-variable.md)  
[Is nil pointer](is-nil-pointer.md)  
[Table](table.md)  