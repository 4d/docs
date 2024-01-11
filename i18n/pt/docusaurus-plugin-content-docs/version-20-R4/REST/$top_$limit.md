---
id: top_$limit
title: '$top/$limit'
---

Limita o número de entidades a devolver (por exemplo, `$top=50`)

## Descrição

`$top/$limit` define o limite de entidades a devolver. Por defeito, o número é limitado a 100. Pode utilizar qualquer uma das palavras-chave: `$top` ou `$limit`.

Quando utilizado em conjunto com [`$skip`]($skip.md), pode navegar através da seleção de entidades devolvida pelo pedido REST.

## Exemplo

No exemplo seguinte, pedimos as dez entidades seguintes após a 20.ª entidade:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`