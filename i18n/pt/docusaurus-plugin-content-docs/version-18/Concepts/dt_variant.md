---
id: variant
title: Diferente de
---

Variante é um tipo de variável que permite encapsular dados de qualquer tipo regular válido numa variável. Normalmente, este tipo de variável pode ser utilizado para escrever código genérico que devolve ou recebe valores para os quais o tipo não é conhecido. É o caso, por exemplo, do código que trata os atributos dos objectos.

Uma variável de tipo variante pode conter um valor dos seguintes tipos de dados:

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

> Os arrays não podem ser armazenados em variáveis variant.

Tanto no modo interpretado como no modo compilado, a uma mesma variável variante podem ser atribuídos conteúdos de tipos diferentes. Ao contrário dos tipos de variáveis regulares, o tipo de conteúdo da variável de variante é diferente do próprio tipo de variável variant. Por exemplo:

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

Pode utilizar variáveis variant onde quer que sejam esperadas variáveis, apenas tem de se certificar de que o tipo de dados do conteúdo da variável é do tipo esperado. Ao aceder a variáveis variant, apenas o seu valor actual é tido em conta. Por exemplo:

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
