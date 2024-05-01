---
id: savedfilter
title: $savedfilter
---

Saves the filter defined by $filter when creating an entity set (_e.g._, `$savedfilter="{filter}"`)

## Descrição

Ao criar um conjunto de entidades, você pode salvar o filtro usado para criá-lo por motivos de segurança. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

You use `$savedfilter` to save the filter you defined when creating your entity set and then pass `$savedfilter` along with your call to retrieve the entity set each time.

Se o conjunto de entidades não está mais no cache do 4D Server, ele será recriado com um novo timeout padrão de 10 minutos. O conjunto de entidades será renovado (certas entidades podem ser incluidas e outras podem ser removidas) já que desde a última vez que foi criada, não existe mais antes da recriação).

If you have used both `$savedfilter` and [`$savedorderby`]($savedorderby.md) in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that.

## Exemplo

No nosso exemplo, chamamos primeiro \`\`$savedfilter\` com a chamada inicial para criar um conjunto de entidades, como mostrado abaixo:

` GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

Depois, ao aceder ao conjunto de entidades, escreve-se o seguinte para garantir que o conjunto de entidades é sempre válido:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
