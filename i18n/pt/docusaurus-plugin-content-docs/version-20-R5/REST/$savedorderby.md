---
id: savedorderby
title: $savedorderby
---

Guarda el filtro definido por `$orderby` al crear un conjunto de entidades (_por ejemplo_, `$savedorderby="{orderby}"`)

## Descrição

Quando se cria um conjunto de entidades, é possível gravar a ordem de ordenação com o filtro utilizado para o criar, como medida de segurança. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

Utilice `$savedorderby` para guardar el orden que definió al crear su conjunto de entidades, luego pase `$savedorderby` junto con su llamada para recuperar cada vez el conjunto de entidades.

Se o conjunto de entidades não está mais no cache do 4D Server, ele será recriado com um novo timeout padrão de 10 minutos. If you have used both [`$savedfilter`]($savedfilter.md) and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that.

## Exemplo

Primero se llama a `$savedorderby` con la llamada inicial para crear un conjunto de entidades:

`GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

Depois, quando acede ao seu conjunto de entidades, escreve o seguinte (utilizando tanto $savedfilter como $savedorderby) para garantir que o filtro e a sua ordem de ordenação existem sempre:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`
