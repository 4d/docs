---
id: top_$limit
title: $top/$limit
---

Limita el número de entidades a devolver (por ejemplo, `$top=50`)

## Descripción

`$top/$limit` define el límite de entidades a devolver. Por defecto, el número está limitado a 100. Puede utilizar las siguientes palabras claves: `$top` o `$limit`.

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## Ejemplo

En el siguiente ejemplo, solicitamos las diez entidades siguientes a la vigésima entidad:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`
