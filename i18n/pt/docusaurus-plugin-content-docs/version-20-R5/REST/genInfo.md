---
id: genInfo
title: Obter informação do servidor
---

Pode obter várias informações do servidor REST:

- os bancos expostos e seus atributos
- os conteúdos de cache do servidor REST, incluindo sessões de usuário.

## Catálogo

Use the [`$catalog`]($catalog.md), [`$catalog/{dataClass}`]($catalog.md#catalogdataclass), or [`$catalog/$all`]($catalog.md#catalogall) parameters to get the list of [exposed dataclasses and their attributes](configuration.md#exposing-tables-and-fields).

Para obter a coleção de todas as classes de dados expostas junto com seus atributos:

`GET /rest/$catalog/$all`

## Informação de Cache

Use the [`$info`]($info.md) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions.

## queryPath e queryPlan

Entity selections that are generated through queries can have the following two properties: `queryPlan` and `queryPath`. To calculate and return these properties, you just need to add [`$queryPlan`]($queryplan.md) and/or [`$queryPath`]($querypath.md) in the REST request.

Por exemplo:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

Essas propriedades são objetos que contém informação sobre como o servidor realiza pesquisas compostas internamente através de dataclasses e relações:

- **queryPlan**: object containing the detailed description of the query just before it was executed (i.e., the planned query).
- **queryPath**: object containing the detailed description of the query as it was actually performed.

A informação registrada inclui o tipo de pesquisa (indexada e sequencial) e cada subpesquisa necessária junto com operações de conjunção. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. Geralmente a descrição do plano de pesquisa e sua rota são idênticas, mas podem diferir porque 4D pode implementar otimizações dinâmicas quando uma pesquisa for executada para melhorar desempenho. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais rápido. Esse caso particular pode acontecer quando o número de entidades sendo pesquisada é baixo.
