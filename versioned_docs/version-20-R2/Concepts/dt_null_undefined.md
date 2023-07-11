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
|Greater than |Undefined `>` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `>` "abc" |False|
|Less than |Undefined `<` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `<` "abc" |False|
|Greater than or equal to |Undefined `>=` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `>=` "abc" |False|
|Less than or equal to |Undefined `<=` string, Date, Time, Boolean, number |Boolean  |a.undefinedProp `<=` "abc" |False|

*other values* are expressions of any type with a value neither Undefined nor Null. 

:::info

Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

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

