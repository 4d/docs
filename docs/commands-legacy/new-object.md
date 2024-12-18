---
id: new-object
title: New object
slug: /commands/new-object
displayed_sidebar: docs
---

<!--REF #_command_.New object.Syntax-->**New object** {( *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )} : Object<!-- END REF-->
<!--REF #_command_.New object.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| property | Text | &#8594;  | Name of property to create |
| value | any | &#8594;  | Value of property |
| Function result | Object | &#8592; | New language object |

<!-- END REF-->

#### Description 

<!--REF #_command_.New object.Summary-->The **New object** command creates a new empty or prefilled object and returns its reference.<!-- END REF-->

If you do not pass any parameters, **New object** creates an empty object and returns its reference. You must assign this reference to a 4D oject variable or a 4D object field.

**Note:** `var : Object` declares a variable of the [Object](# "Data structured as a native 4D object") type but does not create any object.

Optionnally, you can prefill the new object by passing one or several *property*/*value* pairs as parameters:

* In the *property* parameter, pass the label of the property to be created. Note that the *property* parameter is case sensitive.
* In the *value* parameter, pass the value you want to set for the property. Values of the following types are supported:  
   * number (real, integer...) Number values are always stored as reals.  
   * text  
   * boolean  
   * pointer  
   * blob (4D.Blob)  
   * date  
   * time  
   * null  
   * picture  
   * object  
   * collection

Note that:

* if you pass a pointer, it is kept as is; it will evaluated when using commands such as [JSON Stringify](json-stringify.md),
* dates are stored as "yyyy-mm-dd" dates or strings with the "YYYY-MM-DDTHH:mm:ss.SSSZ" format, according to the current "dates inside objects" database setting (see *Compatibility page*). When converting 4D dates into text prior to storing them in the object, by default the program takes the local time zone into account. You can modify this behavior using the Dates inside objects selector of the [SET DATABASE PARAMETER](set-database-parameter.md) command.
* if you pass a time, it is stored as a number of milliseconds (Real).

#### Example 1 

This command can create empty of filled objects:

```4d
 var $obj1 : Object
 var $obj2 : Object
 var $obj3 : Object
 $obj1:=New object
  // $obj1 = {}
 $obj2:=New object("name";"Smith")
  // $obj2 = {name:Smith}
 $obj3:=New object("name";"Smith";"age";40)
  // $obj3 = {name:Smith,age:40}
```

#### Example 2 

Creating a new object with an object as parameter value: 

```4d
 var $Children;$Contact : Object
 
  //Creating an object array
 ARRAY TEXT($arrChildren;3)
 $arrChildren{1}:="Richard"
 $arrChildren{2}:="Susan"
 $arrChildren{3}:="James"
 OB SET ARRAY($Children;"Children";$arrChildren)
 
  //Initializing the object
 $Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)
  // $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}
```

#### Example 3 

This command is useful to pass objects as parameters:

```4d
 var $measures : Object
 $measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))
```

#### Example 4 

With this command, you can easily handle objects in loops:

```4d
 ARRAY OBJECT($refs;0)
 var vCounter : Integer
 
 For(vCounter;1;100)
    APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))
 End for
```

#### See also 

  
[New shared object](new-shared-object.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1471 |
| Thread safe | &check; |


