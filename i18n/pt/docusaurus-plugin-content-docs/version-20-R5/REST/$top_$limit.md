---
id: top_$limit
title: $top/$limit
---

Limits the number of entities to return (e.g., `$top=50`)

## Descrição

`$top/$limit` defines the limit of entities to return. Por defeito, o número é limitado a 100. You can use either keyword: `$top` or `$limit`.

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## Exemplo

No exemplo seguinte, pedimos as dez entidades seguintes após a 20.ª entidade:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`
