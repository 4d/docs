---
id: timeout
title: $timeout
---


Define el número de segundos para guardar un conjunto de entidades en la caché de 4D Server (*por ejemplo*, `$timeout=1800`)

## Descripción

Para definir un tiempo de espera para un conjunto de entidades creado con [`$method=entityset`]($method.md#methodentityset), pase el número de segundos a `$timeout`. Por ejemplo, si quiere fijar el tiempo de espera en 20 minutos, pase 1200. Por defecto, el tiempo de espera es de dos (2) horas.

Una vez que se ha definido el tiempo de espera, cada vez que se llama a un conjunto de entidades (mediante el uso de `$method=entityset`), el tiempo de espera se recalcula basándose en la hora actual y el tiempo de espera.

Si se elimina un conjunto de entidades y se vuelve a crear con `$method=entityset` junto con [`$savedfilter`]($savedfilter.md), el nuevo tiempo de espera por defecto es de 10 minutos, independientemente del tiempo de espera que haya definido al llamar a `$timeout`.

## Ejemplo

En el conjunto de entidades que estamos creando, definimos el tiempo de espera a 20 minutos:

`GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`