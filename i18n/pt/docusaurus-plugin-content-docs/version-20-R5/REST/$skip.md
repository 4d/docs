---
id: skip
title: $skip
---

Starts the entity defined by this number in the collection (_e.g._, `$skip=10`)

## Descrição

`$skip` defines which entity in the collection to start with. Por padrão, a coleção enviada começa com a primeira entidade. Para começar com a 10.ª entidade da coleção, passe 10.

`$skip`  is generally used in conjunction with [`$top/$limit`]($top_$limit.md) to navigate through an entity collection.

## Exemplo

No exemplo seguinte, vamos para a 20.ª entidade do nosso conjunto de entidades:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`
