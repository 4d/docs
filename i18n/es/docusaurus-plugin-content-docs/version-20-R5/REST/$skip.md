---
id: skip
title: $skip
---

Inicia la entidad definida por este número en la colección (_por ejemplo_, `$skip=10`)

## Descripción

`$skip` define la entidad de la colección por la que se va a comenzar. Por defecto, la colección enviada comienza con la primera entidad. Para comenzar con la décima entidad de la colección, pase 10.

`$skip` se utiliza generalmente en conjunto con [`$top/$limit`]($top_$limit.md) para navegar a través de una colección de entidades.

## Ejemplo

En el siguiente ejemplo, vamos a la vigésima entidad de nuestro conjunto de entidades:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`
