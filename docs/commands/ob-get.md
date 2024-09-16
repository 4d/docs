---
id: ob-get
title: OB Get
displayed_sidebar: docs
---

<!--REF #_command_.OB Get.Syntax-->**OB Get** ( *object* ; *property* {; *type*} ) -> Function result<!-- END REF-->
<!--REF #_command_.OB Get.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object Field | -> | Structured object |
| property | Text | -> | Name of property to read |
| type | Longint | -> | Type to which to convert the value |
| Function result | Expression | <- | Current value of property |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Get.Summary-->The **OB Get** command returns the current value of the *property* of the *object*, optionally converted into the *type* specified.<!-- END REF-->

*object* must have been defined using the [C\_OBJECT](c-object.md) command or designate a 4D object field.

**Note:** This command supports attribute definitions in 4D Write Pro *objects*, like the [WP GET ATTRIBUTES](/4Dv20R6/4D/15-R4/WP-GET-ATTRIBUTES.301-2706357.en.html) command (see example 9). 

In the *property* parameter, pass the label of the property to be read. Note that the *property* parameter is case sensitive. 

By default, 4D returns the value of the property in its original type. You can "force" the typing of the value returned using the optional *type* parameter. To do this, in *type* you pass one of the following constants found in the [Field and Variable Types](/4Dv20R6/4D/20-R6/Field-and-Variable-Types.302-6958439.en.html) theme:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is Boolean    | Longint | 6     |
| Is collection | Longint | 42    |
| Is date       | Longint | 4     |
| Is longint    | Longint | 9     |
| Is null       | Longint | 255   |
| Is object     | Longint | 38    |
| Is picture    | Longint | 3     |
| Is pointer    | Longint | 23    |
| Is real       | Longint | 1     |
| Is text       | Longint | 2     |
| Is time       | Longint | 11    |

The command returns the value of the *property*. Several types of data are supported. Note that:

* a pointer is returned as such; it can be evaluated using the [JSON Stringify](json-stringify.md) command.
* depending on your database date settings, dates in object attributes are stored either with date type or text type (starting with 4D v16 R6). For more information, please refer to the "Use date type instead of ISO date format in objects" option in the [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html). In order for **OB Get** to correctly interpret a date stored as a text, you need to use the Is date constant (see example 5).
* in real values, the decimal separator is always a period "."
* times are returned as a number. Times are stored in seconds by default in objects (see compatibility note below). Use the Is time constant to get a 4D formatted time value.

**Compatibility Notes:**

* In versions prior to v17, times were stored in milliseconds inside objects. For compatibility needs, this previous behavior can be restored using the Times inside objects selector of the [SET DATABASE PARAMETER](set-database-parameter.md) command. Whatever the setting, the result will be correct when the Is time constant is passed.
* (*4D Write Pro*) In versions prior to v16 R6, when *property* defined a 4D Write Pro image attribute (such as wk image), a text value containing a data URI was always returned. Starting with 4D v16 R6, 4D Write Pro image attributes are always returned as picture values. You must use a specific *property* like wk image url to get a data URI.
* In versions prior to v16 R4, when *property* contains a null value and if the *type* parameter is not used, 4D returns an empty string. For 4D v16 R4 and higher versions, the Is null constant is returned in this case. To preserve compatibilty, this change takes effect only if the "Use object notation to access objects properties (Unicode required)" option is enabled in the database (see the [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html)).

#### Example 1 

Retrieving a text type value:

```4d
 C_OBJECT($ref)

 C_TEXT($FirstName)

 OB SET($ref;"FirstName";"Harry")

 $FirstName:=OB Get($ref;"FirstName") // $FirstName = "Harry" (text)
```

#### Example 2 

Retrieving a real number value converted into a longint:

```4d
 OB SET($ref ;"age";42)

 $age:=OB Get($ref ;"age") // $age is a real number (default)

 $age:=OB Get($ref ;"age";Is longint) // $age is a longint
```

#### Example 3 

Retrieving the values of an object:

```4d
 C_OBJECT($ref1;$ref2)

 OB SET($ref1;"LastName";"Smith") // $ref1={"LastName":"Smith"}

 OB SET($ref2;"son";$ref1) // $ref2={"son":{"LastName":"Smith"}}

 $son:=OB Get($ref2;"son") // $son={"LastName":"john"} (object)

 $sonsName:=OB Get($son ;"name") // $sonsName="john" (text)
```

#### Example 4 

Modifying the age of an employee twice:

```4d
 C_OBJECT($ref_john;$ref_jim)

 OB SET($ref_john;"name";"John";"age";35)

 OB SET($ref_jim;"name";"Jim";"age";40)

 APPEND TO ARRAY($myArray;$ref_john) // we create an object array

 APPEND TO ARRAY($myArray;$ref_jim)

  // we change the age for John from 35 to 25

 OB SET($myArray{1};"age";25)

  // We replace the age of "John" in the array

 For($i;1;Size of array($myArray))

    If(OB Get($myArray{$i};"name")="John")

       OB SET($myArray{$i};"age";36) // instead of 25

  // $ref_john={"name":"John","age":36}

    End if

 End for
```

#### Example 5 

When retrieving a date, the resulting value depends on the current database date settings.

* If the "Use date type instead of ISO date format in objects" option is not checked:

```4d
 C_OBJECT($object)

 C_DATE($birthday)

 C_TEXT($birthdayString)

 OB SET($object;"Birthday";!30/01/2010!)

 $birthday:=OB Get($object;"Birthday";Is date) //30/01/10

 $birthdayString:=OB Get($object;"Birthday") //"2010-01-29T23:00:00.000Z" (Paris time zone)
```

* If the "Use date type instead of ISO date format in objects" option is checked:

```4d
 C_OBJECT($object)

 C_DATE($birthday)

 OB SET($object;"Birthday";!30/01/2010!)

 $birthday:=OB Get($object;"Birthday") //30/01/10, no need for Is date
```

**Note:** For more information on this setting, please refer to the [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html).

#### Example 6 

Using nested objects:

```4d
 C_OBJECT($ref1;$child;$children)

 C_TEXT($childName)

 OB SET($ref1;"firstname";"John";"lastname";"Monroe")

  //{"firstname":"john","lastname";"Monroe"}

 OB SET($children;"children";$ref1)

 $child:=OB Get($children;"children")

  //$son = {"firstname":"John","lastname":"Monroe"} (object)

 $childName:=OB Get($child;"lastname")

  //$childName = "Monroe" (text)

  //or

 $childName:=OB Get(OB Get($children;"children");"lastname")

  // $childName = "Monroe" (text)
```

#### Example 7 

Recovery in 4D of a time stored in an object:

```4d
 C_OBJECT($obj_o)

 C_TIME($set_h;$get_h)
 

 $set_h:=?01:00:00?+1

 OB SET($obj_o;"myHour";$set_h)

  // $obj_o = {"myHour":3601}

  // The time is stored in seconds

 $get_h:=OB Get($obj_o;"myHour";Is time)

  // $get_h = ?01:00:01?
```

#### Example 8 

Examples of working with 4D object fields:

```4d
  // Define a value

 OB SET([People]Identity_OB;"First name";$firstName)

 OB SET([People]Identity_OB;"Last name";$lastName)
 

  // Get a value

 $firstName:=OB Get([People]Identity_OB;"First name")

 $lastName:=OB Get([People]Identity_OB;"Last name")
```

#### Example 9 

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

#### Example 10 

You want to know the size of a picture stored in an object attribute:

```4d
 C_LONGINT($vSize)

 $vSize:=Picture size(OB Get($object;"photo";Is picture))
```

**Note:** If you assign the result of the command to a picture variable, the Is picture constant is not necessary. Example:  

```4d
 C_PICTURE($vPict)

 $vPict:=OB Get($object;"photo") //"is picture" is useless in this case
```

#### See also 
[Field and Variable Types](../../4D/20-R6/Field-and-Variable-Types.302-6958439.en.html)  
[OB Copy](ob-copy.md)  
[OB SET](ob-set.md)  