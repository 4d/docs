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

A informação registrada inclui o tipo de pesquisa (indexada e sequencial) e cada subpesquisa necessária junto com operações de conjunção. Query paths also contain the number of entities found and the time required to execute each search criterion. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low.