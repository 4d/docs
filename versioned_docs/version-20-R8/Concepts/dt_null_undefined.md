---
id: null-undefined
title: Null and Undefined
---

Null and Undefined are data types that handle cases where the value of an expression is not known.  

## Null

Null is a special data type with only one possible value: **null**. This value is returned by an expression that does not contain any value. Trying to read a property of a **null** value returns an error.

In the 4D language and for object field attributes, null values are managed through the `Null` function. This function can be used with the following expressions for setting or comparing the null value:

- object attributes
- collection elements
- variables of the object, collection, pointer, picture, or variant type (see also [Null as default value](data-types.md#null-as-default-value).

## Undefined

Undefined is not actually a data type. It denotes a variable that has not yet been defined. Evaluating an object property can also produce an undefined value. Reading a property of an undefined value returns **undefined**.

A variant variable has **undefined** as [default value](data-types.md#default-values).

A field cannot be undefined (the `Undefined` command always returns False for a field). 

Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:

- Assigning an undefined value to variables (except arrays) has the same effect as calling [`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/en/page89.html) with them:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:
	- Object, collection, pointer: Null
	- Picture: Empty picture
	- Boolean: False
	- String: ""
	- Number: 0
	- Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""
	- Time: 0 (number of ms)
	- Undefined, Null: no change

```4d
     var $o : Object
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Assigning an undefined value to a non existing object property does nothing.

- An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.

```4d
     var $o : Object
     mymethod($o.a) //pass an undefined parameter
     
      //In mymethod method
     #Declare ($myText : Text) //parameter type is text
      // $myText contains ""
```

- A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:

```4d
     var $o : Object
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```


:::tip

When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: `String`, `Num`, `Date`, `Time`, `Bool`. These commands return an empty value of the specified type when the expression evaluates to undefined. For example:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```

:::


## Null operators


|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Equality |Null `=` Null |Boolean |a.nullProp `=` b.nullProp |True|
|  |Null `=` Undefined |Boolean|a.nullProp `=` b.undefinedProp |True|
|  |Null `=` *scalar value* |Boolean|a.nullProp `=` 42 |False|
|Inequality |Null `#` Null |Boolean |a.nullProp `#` b.nullProp |False|
|  |Null `#` Undefined |Boolean|a.nullProp `#` b.undefinedProp |False|
|  |Null `#` *scalar value*|Boolean|a.nullProp `#` 42 |True|

*scalar values* are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is neither undefined nor null. Other types (Pointer, Picture, Object, Collection) have undefined or null default value. Ex:

```4d
var $object : Object
var $text : Text

//$object = null
//$text = "" 
```

:::info

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with Null values and return an error.

:::

## Undefined operators


|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Equality |Undefined `=` Undefined |Boolean|a.undefinedProp `=` b.undefinedProp |True|
| |Undefined `=` Null |Boolean |a.undefinedProp `=` c.nullProp |True|
| |Undefined `=` *other values*  |Boolean|a.undefinedProp `=` 42 |False|
|Inequality |Undefined `#` Undefined |Boolean|a.undefinedProp `#` b.undefinedProp |False|
|  |Undefined `#` Null |Boolean|a.undefinedProp `#` b.nullProp |False|
|  |Undefined `#` *other values* |Boolean|a.undefinedProp `#` 42 |True|
|Greater than |Undefined `>` string, Date, Time, number |Boolean  |a.undefinedProp `>` "abc" |False|
|Less than |Undefined `<` string, Date, Time, number |Boolean  |a.undefinedProp `<` "abc" |False|
|Greater than or equal to |Undefined `>=` string, Date, Time, number |Boolean  |a.undefinedProp `>=` "abc" |False|
|Less than or equal to |Undefined `<=` string, Date, Time, number |Boolean  |a.undefinedProp `<=` "abc" |False|

*other values* are expressions of any type with a value neither Undefined nor Null. 

:::info

Comparisons of Undefined values with Pointer, Picture, Boolean, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::

## Examples 

Here are the different results of the `Undefined` command as well as the `Null` command with object properties, depending on the context:

```4d
var $vEmp : Object
var $result : Boolean
$vEmp:=New object
$vEmp.name:="Smith"

$vEmp.children:=Null
 
$result:=Undefined($vEmp.name) //False
$result:=($vEmp.name=Null) //False
 
$result:=Undefined($vEmp.children) //False
$result:=($vEmp.children=Null) //True
 
$result:=Undefined($vEmp.parent) //True
$result:=($vEmp.parent=Null) //True
```

Examples of comparison results with undefined and null values:

```4d
var $result : Boolean
var $vObj : Object
var $vVar : Variant

$vObj:=New object
$vObj.null:=Null
//note that $vVar is not assigned 

$result:=($vObj.undefined=42) //False
$result:=($vObj.undefined=$vObj.null) //True
$result:=($vObj.undefined=$vVar)  //True

$result:=($vObj.undefined#$vObj.null) //False
$result:=($vObj.undefined#42) //True
$result:=($vObj.undefined#$vVar) //False

$result:=($vObj.undefined>"hello") //False
$result:=($vObj.undefined>$vVar)  //Error
$result:=($vObj.undefined>$vObj.null)  //Error
$result:=($vVar < 42) //False

```

