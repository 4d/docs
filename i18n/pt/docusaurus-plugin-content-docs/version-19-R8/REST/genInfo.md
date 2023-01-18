---
id: genInfo
title: Obter informação do servidor
---

Pode obter várias informações do servidor REST:

- os bancos expostos e seus atributos
- os conteúdos de cache do servidor REST, incluindo sessões de usuário.

## Catálogo

Utilize os parâmetros [`$catalog`]($catalog.md), [`$catalog/{dataClass}`]($catalog.md#catalogdataclass), o [`$catalog/$all`]($catalog.md#catalogall) para obter a lista de [as classes de dados expostas e seus atributos](configuration.md#exposing-tables-and-fields).

Para obter a coleção de todas as classes de dados expostas junto com seus atributos:

`GET /rest/$catalog/$all`


## Informação de Cache

Use o parâmetro [`$info`]($info.md) para obter informações sobre as seleções de entidade armazenadas atualmente na cache de 4D Server' assim como sobre a execução de sessões de usuário.

## queryPath e queryPlan

As seleções de entidade que são geradas através de pesquisas podem ter duas propriedades : `queryPlan` e `queryPath`. Para calcular e retornar essas propriedades, precisa apenas adicionar um [`$queryPlan`]($queryplan.md) ou [`$queryPath`]($querypath.md) na petição REST.

Por exemplo:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

Essas propriedades são objetos que contém informação sobre como o servidor realiza pesquisas compostas internamente através de dataclasses e relações:
- **queryPlan**: objeto contendo a descrição detalhada da pesquisa logo antes de ser executada (ou seja, a pesquisa planejada).
- **queryPath**: objeto contendo a descrição detalhada da pesquisa como foi realizada.

A informação registrada inclui o tipo de pesquisa (indexada e sequencial) e cada subpesquisa necessária junto com operações de conjunção. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. Query paths also contain the number of entities found and the time required to execute each search criterion. Geralmente a descrição do plano de pesquisa e sua rota são idênticas mas podem ser diferentes porque 4D pode implementar otimizações dinâmicas quando uma pesquisa for executada para melhorar a performance. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais rápido. Esse caso particular pode acontecer quando o número de entidades sendo pesquisada é baixo.