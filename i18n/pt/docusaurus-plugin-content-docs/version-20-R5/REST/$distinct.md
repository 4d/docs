---
id: distinct
title: $distinct
---

Returns the distinct values for a specific attribute in a collection (_e.g._, `Company/name?$filter="name=a*"&$distinct=true`)

## Descrição

`$distinct` allows you to return a collection containing the distinct values for a query on a specific attribute. Só pode ser especificado um atributo na dataclass. Geralmente, o tipo String é o melhor; no entanto, também pode ser utilizado em qualquer tipo de atributo que possa conter vários valores.

You can also use `$skip` and `$top/$limit` as well, if you'd like to navigate the selection before it's placed in an array.

## Exemplo

No nosso exemplo abaixo, queremos obter os valores distintos de um nome de empresa que começa com a letra "a":

`GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

```
[
    "Adobe",
    "Apple"
]
```
