---
id: variant
title: Variant
---

Variante é um tipo de variável que permite encapsular dados de qualquer tipo regular válido numa variável. Typically, this variable type can be used to write generic code returning or receiving values for which the type is not known. This is the case for example for code handling object attributes.

A variant type variable can contain a value of the following data types:

- BLOB
- boolean
- collection
- date
- inteiro longo
- object
- picture
- pointer
- real
- text
- time
- null
- indefinido

> Arrays cannot be stored in variant variables.

In both interpreted and in compiled modes, a same variant variable can be assigned contents of different types. Unlike regular variable types, the variant variable content type is different from the variant variable type itself. Por exemplo:

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

You can use variant variables wherever variables are expected, you only need to make sure than the variable content data type is of the expected type. When accessing variant variables, only their current value is taken into account. Por exemplo:

```4d
C_VARIANT($v)
$v:="hello world"
$v2:=$v //atribuir variável a outra variável

$t:=Type($v) // 12 (Is variant)
$t2:=Type($v2) // 2 (Is text)
```

A variante pode ser usada para declarar parâmetros de métodos ($0, $1,...) que podem ser de vários tipos. Neste caso, pode construir o seu código testando, por exemplo, o tipo de valor do parâmetro:

```4d
C_VARIANT($1)
Case of
: (Value type($1)=Is longint)
...
: (Value type($1)=Is text)
...
//statement(s)
 End case
```

> When variant variables are not necessary (i.e. when the data type is known), it is recommended to use regular typed variables. Regular typed variables provide better performance, make code more clear and are helpful for the compiler to prevent bugs related to passing unexpected data types. 