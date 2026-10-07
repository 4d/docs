---
id: timeout
title: $timeout
---

Define el número de segundos para guardar un conjunto de entidades en la caché de 4D Server (*por ejemplo*, `$timeout=1800`)

## Descripción

Para definir un tiempo de expiración para un conjunto de entidades que cree utilizando [`$method=entityset`]($method.md#methodentityset), pase el número de segundos a `$timeout`. Por ejemplo, si quiere fijar el tiempo de espera en 20 minutos, pase 1200. Por defecto, el tiempo de espera es de dos (2) horas.

Una vez que se ha definido el tiempo de expiración, cada vez que se llama a un conjunto de entidades (mediante el uso de `$method=entityset`), el tiempo de expiración se recalcula a partir de la hora actual y del valor del timeout.

Si se elimina un conjunto de entidades y luego se vuelve a crear utilizando `$method=entityset` junto con [`$savedfilter`]($savedfilter.md), el nuevo tiempo de expiración por defecto es de 10 minutos, independientemente del tiempo de expiración que haya definido al llamar a `$timeout`.

:::note

El tiempo de expiración también se puede modificar para una sesión mediante la propiedad [`Session.quotas`](../API/SessionClass.md#quotas).

:::

## Ejemplo

En el conjunto de entidades que estamos creando, definimos el tiempo de espera a 20 minutos:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`