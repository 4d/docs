---
id: timeout
title: $timeout
---

Define el número de segundos para guardar un conjunto de entidades en la caché de 4D Server (*por ejemplo*, `$timeout=1800`)

## Descrição

Para definir um tempo limite para uma entidade definida que você cria usando [`$method=entityset`]($method.md#methodentityset), passe o número de segundos para `$timeout`. Por exemplo, se pretender definir o tempo limite para 20 minutos, introduza 1200. Por defeito, o tempo limite é de duas (2) horas.

Una vez que se ha definido el tiempo de espera, cada vez que se llama a un conjunto de entidades (mediante el uso de `$method=entityset`), el tiempo de espera se recalcula basándose en la hora actual y el tiempo de espera.

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## Exemplo

No nosso conjunto de entidades que criamos, definimos o tempo limite para 20 minutos:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`