---
id: skip
title: $skip
---

Inicia a entidade definida por este número na coleção (*e.g.*, `$skip=10`)


## Descrição

`$skip` define a entidade da coleção com que se deve começar. Por padrão, a coleção enviada começa com a primeira entidade. Para começar com a 10.ª entidade da coleção, passe 10.

`$skip`  é geralmente utilizado em conjunto com [`$top/$limit`]($top_$limit.md) para navegar através de uma coleção de entidades.

## Exemplo

No exemplo seguinte, vamos para a 20.ª entidade do nosso conjunto de entidades:

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`