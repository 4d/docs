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

## Examples

Here are the different results of the `Undefined` command as well as the `Null` command with object properties, depending on the context:

```4d
C_OBJECT($vEmp)
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
