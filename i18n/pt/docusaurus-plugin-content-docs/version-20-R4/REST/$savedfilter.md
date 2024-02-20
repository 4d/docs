---
id: savedfilter
title: $savedfilter
---

Guarda o filtro definido por $filter aquando da criação de um conjunto de entidades (*e.g.*, `$savedfilter="{filter}"`)

## Descrição

Ao criar um conjunto de entidades, você pode salvar o filtro usado para criá-lo por motivos de segurança. Se o conjunto de entidades que criou for removido da cache do 4D Server (devido ao tempo limite, à necessidade de espaço do servidor, ou ao facto de o remover chamando [`$method=release`]($method.md#methodrelease)).

Utiliza-se `$savedfilter` para guardar o filtro definido ao criar o conjunto de entidades e, em seguida, passa-se `$savedfilter` com a chamada para recuperar o conjunto de entidades de cada vez.

Se o conjunto de entidades não está mais no cache do 4D Server, ele será recriado com um novo timeout padrão de 10 minutos. O conjunto de entidades será renovado (certas entidades podem ser incluidas e outras podem ser removidas) já que desde a última vez que foi criada, não existe mais antes da recriação).

Se tiver utilizado tanto `$savedfilter` como [`$savedorderby`]($savedorderby.md) na sua chamada ao criar um conjunto de entidades e depois omitir um deles, o novo conjunto de entidades, que terá o mesmo número de referência, refletirá esse facto.

## Exemplo

No nosso exemplo, chamamos primeiro ``$savedfilter` com a chamada inicial para criar um conjunto de entidades, como mostrado abaixo:

`GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

Depois, ao aceder ao conjunto de entidades, escreve-se o seguinte para garantir que o conjunto de entidades é sempre válido:

`GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
