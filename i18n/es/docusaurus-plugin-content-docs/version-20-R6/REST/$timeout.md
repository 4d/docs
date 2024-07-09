---
id: timeout
title: $timeout
---

Define el número de segundos para guardar un conjunto de entidades en la caché de 4D Server (_por ejemplo_, `$timeout=1800`)

## Descripción

To define a timeout for an entity set that you create using [`$method=entityset`]($method.md#methodentityset), pass the number of seconds to `$timeout`. Por ejemplo, si quiere fijar el tiempo de espera en 20 minutos, pase 1200. Por defecto, el tiempo de espera es de dos (2) horas.

Una vez que se ha definido el tiempo de espera, cada vez que se llama a un conjunto de entidades (mediante el uso de `$method=entityset`), el tiempo de espera se recalcula basándose en la hora actual y el tiempo de espera.

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## Ejemplo

En el conjunto de entidades que estamos creando, definimos el tiempo de espera a 20 minutos:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`
