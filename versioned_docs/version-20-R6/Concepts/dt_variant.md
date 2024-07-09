---
id: variant
title: Variant
---

Variant is a variable type which allows encapsulating data of any valid regular type in a variable. Typically, this variable type can be used to write generic code returning or receiving values for which the type is not known. This is the case for example for code handling object attributes.  

A variant type variable can contain a value of the following data types:

- BLOB
- boolean
- collection
- date
- longint
- object
- picture
- pointer
- real
- text
- time
- null
- undefined

> Arrays cannot be stored in variant variables.

In both interpreted and in compiled modes, a same variant variable can be assigned contents of different types. Unlike regular variable types, the variant variable content type is different from the variant variable type itself. For example:

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

You can use variant variables wherever variables are expected, you only need to make sure than the variable content data type is of the expected type. When accessing variant variables, only their current value is taken into account. For example:

```4d
C_VARIANT($v)
$v:="hello world"
$v2:=$v //assign variable to another variable

$t:=Type($v) // 12 (Is variant)
$t2:=Type($v2) // 2 (Is text)
```

Variant can be used to declare [method parameters](parameters.md) that can be of various types. In this case, you can build your code by testing the parameter value type, for example:

```4d
#DECLARE ($param : Variant)
Case of
: (Value type($param)=Is longint)
...
: (Value type($param)=Is text)
...
End case
```

> When variant variables are not necessary (i.e. when the data type is known), it is recommended to use regular typed variables. Regular typed variables provide better performance, make code more clear and are helpful for the compiler to prevent bugs related to passing unexpected data types.
