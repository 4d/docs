---
id: timeout
title: $timeout
---

Defines the number of seconds to save an entity set in 4D Server's cache (_e.g._, `$timeout=1800`)

## Descripción

To define a timeout for an entity set that you create using [`$method=entityset`]($method.md#methodentityset), pass the number of seconds to `$timeout`. Por ejemplo, si quiere fijar el tiempo de espera en 20 minutos, pase 1200. Por defecto, el tiempo de espera es de dos (2) horas.

Once the timeout has been defined, each time an entity set is called upon (by using `$method=entityset`), the timeout is recalculated based on the current time and the timeout.

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## Ejemplo

En el conjunto de entidades que estamos creando, definimos el tiempo de espera a 20 minutos:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`
