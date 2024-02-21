---
id: timeout
title: $timeout
---


Define o número de segundos para guardar um conjunto de entidades na cache do 4D Server (*e.g.*, `$timeout=1800`)

## Descrição

Para definir um timeout para um conjunto de entidades criado com [`$method=entityset`]($method.md#methodentityset), passar o número de segundos para `$timeout`. Por exemplo, se pretender definir o tempo limite para 20 minutos, introduza 1200. Por defeito, o tempo limite é de duas (2) horas.

Uma vez definido o tempo limite, sempre que um conjunto de entidades é chamado (utilizando `$method=entityset`), o tempo limite é recalculado com base na hora atual e no tempo limite.

Se um conjunto de entidades for removido e depois recriado utilizando `$method=entityset` com [`$savedfilter`]($savedfilter.md), o novo tempo limite predefinido é de 10 minutos, independentemente do tempo limite definido ao chamar `$timeout`.

## Exemplo

No nosso conjunto de entidades que criamos, definimos o tempo limite para 20 minutos:

`GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`