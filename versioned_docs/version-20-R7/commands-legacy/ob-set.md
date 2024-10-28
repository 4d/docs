---
id: ob-set
title: OB SET
slug: /commands/ob-set
displayed_sidebar: docs
---

<!--REF #_command_.OB SET.Syntax-->**OB SET** ( *object* ; *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )<!-- END REF-->
<!--REF #_command_.OB SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | Structured object |
| property | Text | &#8594;  | Name of property to set |
| value | Expression | &#8594;  | New value of property |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB SET.Summary-->The **OB SET** command creates or modifies one or more *property*/*value* pairs in the language object designated by the *object* parameter.<!-- END REF--> 

*object* must be an object variable or designate a 4D object field.

In the *property* parameter, pass the label of the property to be created or modified. If the property already exists in *object*, its value is updated. If it does not exist, it is created.   

Note that the *property* parameter is case sensitive. 

In the *value* parameter, pass the value you want to set for the property. Several data types are supported. Note that:

* if you pass a pointer, it is kept as is; it is evaluated using the [JSON Stringify](json-stringify.md) command.
* if you pass a date, it will be stored with date type or as text in ISO format depending on your current database date settings. For more information, please refer to the "Use date type instead of ISO date format in objects" option in the *Compatibility page*.
* if you pass a time, it is stored as a number of seconds (Real) in *object*.
* if you pass a language object or a collection, the command uses a reference and not a copy. Any modification applied to the object or collection will be reported to all references.
* starting with 4D v16 R4, you can pass a picture of any supported type (see *Native Formats Supported* ).

#### Example 1 

Creating an object and adding a text type property:

```4d
 var $Object : Object
 OB SET($Object ;"FirstName";"John";"LastName";"Smith")
  // $Object = {"FirstName":"John","LastName":"Smith"}
```

#### Example 2 

Creating an object and adding a Boolean type property:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"smith";"age";42;"client";True)
  // $Object = {"LastName":"smith","age":42,"client":true}
```

#### Example 3 

Modifying a property:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"FirstName";"Paul")
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
```

#### Example 4 

Adding a property:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"department";"Accounting")
  // $Object = {"FirstName":"Paul","LastName":"Smith","department":"Accounting"}
```

#### Example 5 

Renaming a property:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"James";"age";35)
  // $Object = {"LastName":"James","age":35}
 OB SET($Object ;"FirstName";OB Get($Object ;"LastName"))
  // $Object = {"FirstName":""James","nom":"James","age":35}
 OB REMOVE($Object ;"LastName")
  // $Object = {"FirstName":""James","age":35}
```

#### Example 6 

Using a pointer:

```4d
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
 var $LastName : Text
 OB SET($Object ;"LastName";->$LastName)
  // $Object = {"FirstName":"Paul","LastName":"->$LastName"}
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":""}
 $LastName:="Wesson"
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":"Wesson"}
```

#### Example 7 

Using an object:

```4d
 var $ref_smith : Object
 OB SET($ref_smith ;"name";"Smith")
 var $ref_emp : Object
 OB SET($ref_emp ;"employee";$ref_smith)
 $Json_string :=JSON Stringify($ref_emp)
  // $ref_emp = {"employee":{"name":"Smith"}} (object)
  // $Json_string = "{"employee":{"name":"Smith"}}" (string)
```

You can also change a value on the fly:

```4d
 OB SET($ref_smith ;"name";"Smyth")
  // $ref_smith = {"employee":{"name":"Smyth"}}
 $string:=JSON Stringify($ref_emp)
  // $string = "{"employee":{"name":"Smyth"}}"
```

#### Example 8 

If you have defined the \[Rect\]Desc field as an object field, you can write:

```4d
 CREATE RECORD([Rect])
 [Rect]Name:="Blue square"
 OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")
 SAVE RECORD([Rect])
```

#### Example 9 

You want to export data in JSON that contains a 4D date that you want to be converted into a string without time zone information. Note that conversion occurs when the date is saved in the object, so you must call the [SET DATABASE PARAMETER](set-database-parameter.md) command before calling [OB SET](ob-set.md): 

```4d
 var $o : Object
 $vDateSetting:=Get database parameter(Dates inside objects) //save the current setting
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 OB SET($o ;"myDate";Current date) // JSON conversion
 $json:=JSON Stringify($o)
 SET DATABASE PARAMETER(Dates inside objects;$vDateSetting)
```

#### Example 10 

In the method of a form containing a 4D Write Pro area, you can write:

```4d
 If(FORM Event=On Validate)
    OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)
    OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")
 End if
```

You can also read custom attributes of the documents:

```4d
 vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")
```

#### Example 11 

You want to set a collection as a property value. You can write:

```4d
 var $person : Object
 var $myCol : Collection
 
 $person:=OB New
 $myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)
 OB SET($person;"Name";"Jones";"Children";$myCol)
```

#### Example 12 

You want to store a picture in an object field. You can write:

```4d
 var $vPict : Picture
 READ PICTURE FILE("photo.jpg";$vPict)
 If(OK=1)
    OB SET([Emp]Children;"photo";$vPict)
 End if
```

#### See also 

[OB Get](ob-get.md)  
[OB REMOVE](ob-remove.md)  
[OB SET ARRAY](ob-set-array.md)  
[OB SET NULL](ob-set-null.md)  