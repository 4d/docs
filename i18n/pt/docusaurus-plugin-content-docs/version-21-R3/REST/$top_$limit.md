---
id: top_$limit
title: $top/$limit
---

Limita el número de entidades a devolver (por ejemplo, `$top=50`)

## Descrição

`$top/$limit` define el límite de entidades a devolver. Por defeito, o número é limitado a 100. Puede utilizar las siguientes palabras claves: `$top` o `$limit`.

Quando usado em conjunto com [`$skip`]($skip.md), você pode navegar pela seleção de entidades retornada pela solicitação REST.

## Exemplo

No exemplo seguinte, pedimos as dez entidades seguintes após a 20.ª entidade:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`