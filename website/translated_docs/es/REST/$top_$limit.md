---
id: top_$limit
title: '$top/$limit'
---

Limita el número de entidades a devolver (por ejemplo, `$top=50`)

## Descripción

`$top/$limit` define el límite de entidades a devolver. By default, the number is limited to 100. Puede utilizar las siguientes palabras claves: `$top` o `$limit`.

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## Ejemplo

In the following example, we request the next ten entities after the 20th entity:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`