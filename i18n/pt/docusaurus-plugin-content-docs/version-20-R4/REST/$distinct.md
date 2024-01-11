---
id: distinct
title: '$distinct'
---


Devolve os valores distintos de um atributo específico numa coleção (*e.g.*, `Company/name?$filter="name=a*"&$distinct=true`)


## Descrição

`$distinct` permite-lhe devolver uma coleção que contém os valores distintos de uma consulta sobre um atributo específico. Só pode ser especificado um atributo na dataclass. Geralmente, o tipo String é o melhor; no entanto, também pode ser utilizado em qualquer tipo de atributo que possa conter vários valores.

Também pode utilizar `$skip` e `$top/$limit`, se pretender navegar na seleção antes de esta ser colocada num array.

## Exemplo
No nosso exemplo abaixo, queremos obter os valores distintos de um nome de empresa que começa com a letra "a":

 `GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Resposta**:

````
[
    "Adobe",
    "Apple"
]
````

