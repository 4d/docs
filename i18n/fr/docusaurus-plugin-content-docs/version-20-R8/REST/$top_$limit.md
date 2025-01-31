---
id: top_$limit
title: $top/$limit
---

Limite le nombre d'entités à retourner (par exemple, `$top=50`)

## Description

`$top/$limit` définit la limite des entités à retourner. Par défaut, leur nombre est limité à 100. Vous pouvez utiliser l'un des mots clés suivant : `$top` ou `$limit`.

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## Exemple

Dans l'exemple suivant, nous recherchons les dix entités qui suivent la 20e entité :

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`
