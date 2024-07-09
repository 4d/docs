---
id: distinct
title: $distinct
---

Devuelve los diferentes valores de un atributo específico en una colección (_por ejemplo_, `Company/name?$filter="name=a*"&$distinct=true`)

## Descrição

`$distinct` permite devolver una colección que contiene los diferente valores de una petición sobre un atributo específico. Só pode ser especificado um atributo na dataclass. Geralmente, o tipo String é o melhor; no entanto, também pode ser utilizado em qualquer tipo de atributo que possa conter vários valores.

También puede utilizar `$skip` y `$top/$limit`, si desea navegar por la selección antes de colocarla en un array.

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
