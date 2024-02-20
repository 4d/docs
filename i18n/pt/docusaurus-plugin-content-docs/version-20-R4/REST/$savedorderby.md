---
id: savedorderby
title: $savedorderby
---

Guarda a ordem definida por `$orderby` aquando da criação de um conjunto de entidades (*e.g.*, `$savedorderby="{orderby}"`)

## Descrição

Quando se cria um conjunto de entidades, é possível gravar a ordem de ordenação com o filtro utilizado para o criar, como medida de segurança. Se o conjunto de entidades que criou for removido da cache do 4D Server (devido ao tempo limite, à necessidade de espaço do servidor, ou ao facto de o remover chamando [`$method=release`]($method.md#methodrelease)).

Utiliza-se `$savedorderby` para guardar a ordem que se definiu ao criar o conjunto de entidades e, em seguida, passa-se `$savedorderby` com a chamada para recuperar o conjunto de entidades de cada vez.

Se o conjunto de entidades não está mais no cache do 4D Server, ele será recriado com um novo timeout padrão de 10 minutos. Se tiver utilizado tanto [`$savedfilter`]($savedfilter.md) como `$savedorderby` na sua chamada ao criar um conjunto de entidades e depois omitir um deles, o novo conjunto de entidades, com o mesmo número de referência, refletirá esse facto.

## Exemplo
Primeiro, chama-se `$savedorderby` com a chamada inicial para criar um conjunto de entidades:

 `GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

Depois, quando acede ao seu conjunto de entidades, escreve o seguinte (utilizando tanto $savedfilter como $savedorderby) para garantir que o filtro e a sua ordem de ordenação existem sempre:

`GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`
