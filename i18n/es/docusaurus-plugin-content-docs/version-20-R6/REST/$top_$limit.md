---
id: top_$limit
title: $top/$limit
---

Limita el número de entidades a devolver (por ejemplo, `$top=50`)

## Descripción

`$top/$limit` define el límite de entidades a devolver. Por defecto, el número está limitado a 100. Puede utilizar las siguientes palabras claves: `$top` o `$limit`.

Cuando se utiliza en conjunto con [`$skip`]($skip.md), se puede navegar a través de la selección de entidades devuelta por la petición REST.

## Ejemplo

En el siguiente ejemplo, solicitamos las diez entidades siguientes a la vigésima entidad:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`
