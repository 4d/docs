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

A variante pode ser usada para declarar [os parâmetros de método](parameters.md) que podem ser de vários tipos. Neste caso, pode construir o seu código testando, por exemplo, o tipo de valor do parâmetro:

```4d
#DECLARE ($param : Variant)
Case of
: (Value type($param)=Is longint)
...
: (Value type($param)=Is text)
...
End case
```

> Quando as variáveis variant não são necessárias (ou seja, quando o tipo de dados é conhecido), recomenda-se a utilização de variáveis de tipo regular. As variáveis de tipo regular proporcionam um melhor desempenho, tornam o código mais claro e são úteis para o compilador evitar erros relacionados com a passagem de tipos de dados inesperados.
