---
id: null-undefined
title: Null and Undefined
---

Null and Undefined are data types that handle cases where the value of an expression is not known.  

## Null

Null is a special data type with only one possible value: **null**. This value is returned by an expression that does not contain any value.

In the 4D language and for object field attributes, null values are managed through the `Null` function. This function can be used with the following expressions for setting or comparing the null value:

- object attributes
- collection elements
- variables of the object, collection, pointer, picture, or variant type.

## Undefined

Undefined is not actually a data type. It denotes a variable that has not yet been defined. A function (a project method that returns a result) can return an undefined value if, within the method, the function result ($0) is assigned an undefined expression (an expression calculated with at least one undefined variable). A field cannot be undefined (the `Undefined` command always returns False for a field). A variant variable has **undefined** as default value.


## Null operators


|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Equality |Null = Null |Boolean |a.nullProp = b.nullProp |True|
|  |Null = Undefined |Boolean|a.nullProp = b.undefinedProp |True|
|  |Null = *scalar value* |Boolean|a.nullProp = 42 |False|
|Inequality |Null # Null |Boolean |a.nullProp # b.nullProp |False|
|  |Null # Undefined |Boolean|a.nullProp # b.undefinedProp |False|
|  |Null # *scalar value* (see below) |Boolean|a.nullProp # 42 |True|

*scalar values* are values of type string, Date, Time, Boolean, number, or Blob. When declared, their [default value](data-types.md#default-values) is either undefined nor null. Other types (Pointer, Picture, Object, Collection, Variant) are undefined or null when they are declared but not assigned. Ex:

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
|Equality |Undefined = Undefined |Boolean|a.undefinedProp = b.undefinedProp |True|
| |Undefined = Null |Boolean |a.undefinedProp = c.nullProp |True|
| |Undefined = *other values*  |Boolean|a.undefinedProp = 42 |False|
|Inequality |Undefined # Undefined |Boolean|a.undefinedProp # b.undefinedProp |False|
|  |Undefined # Null |Boolean|a.undefinedProp # b.nullProp |False|
|  |Undefined # Undefined |Boolean|a.undefinedProp # b.undefinedProp |False|
|  |Undefined # *other values* |Boolean|a.undefinedProp # 42 |True|
|Greater than |Undefined `>` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `>` "abc" |False|
|Less than |Undefined `<` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `<` "abc" |False|
|Greater than or equal to |Undefined `>=` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `>=` "abc" |False|
|Less than or equal to |Undefined `<=` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `<=` "abc" |False|

*other values* are expressions of any type with a value neither Undefined nor Null. 

:::info

Comparisons of Undefined values with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators and Pointer, Picture, Blob, Object, Collection, Variant, Undefined or Null values are not supported and return an error.

:::

## Examples 

Here are the different results of the `Undefined` command as well as the `Null` command with object properties, depending on the context:

```4d
var $vEmp : Object
$vEmp:=New object
$vEmp.name:="Smith"

$vEmp.children:=Null
 
$undefined:=Undefined($vEmp.name) // False
$null:=($vEmp.name=Null) //False
 
$undefined:=Undefined($vEmp.children) // False
$null:=($vEmp.children=Null) //True
 
$undefined:=Undefined($vEmp.parent) // True
$null:=($vEmp.parent=Null) //True
```

Examples of comparison results with undefined and null values:

```4d
var $vObj : Object
var $vCol : Collection
//note that $vCol is not assigned 

$vObj:=New object
$vObj.isNull:=Null

$vObj.a = 42 //False
$vObj.a = $vObj.isNull //True
$vObj.a = $vObj.b  //True
$vObj.a = $vCol  //True

$vObj.a # $vObj.b  //False
$vObj.a # $vObj.isNull  //False
$vObj.a # 42 //True
$vObj.a # $vCol //False

$vObj.a > "hello"  //False
$vObj.a > $vObj.b  //Error
$vObj.a > $vObj.isNull  //Error
$vCol < 42 //False

```

