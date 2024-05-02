---
id: top_$limit
title: $top/$limit
---

Limits the number of entities to return (e.g., `$top=50`)

## Description

`$top/$limit` defines the limit of entities to return. Par défaut, leur nombre est limité à 100. You can use either keyword: `$top` or `$limit`.

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## Exemple

Dans l'exemple suivant, nous recherchons les dix entités qui suivent la 20e entité :

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`
