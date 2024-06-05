---
id: savedfilter
title: $savedfilter
---

Guarda el filtro definido por $filter al crear un conjunto de entidades (_por ejemplo_, `$savedfilter="{filter}"`)

## Descrição

Ao criar um conjunto de entidades, você pode salvar o filtro usado para criá-lo por motivos de segurança. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

Utilice `$savedfilter` para guardar el filtro que definió al crear su conjunto de entidades y luego pase `$savedfilter` junto con su llamada para recuperar cada vez el conjunto de entidades.

Se o conjunto de entidades não está mais no cache do 4D Server, ele será recriado com um novo timeout padrão de 10 minutos. O conjunto de entidades será renovado (certas entidades podem ser incluidas e outras podem ser removidas) já que desde a última vez que foi criada, não existe mais antes da recriação).

If you have used both `$savedfilter` and [`$savedorderby`]($savedorderby.md) in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that.

## Exemplo

No nosso exemplo, chamamos primeiro \`\`$savedfilter\` com a chamada inicial para criar um conjunto de entidades, como mostrado abaixo:

` GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

Depois, ao aceder ao conjunto de entidades, escreve-se o seguinte para garantir que o conjunto de entidades é sempre válido:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
