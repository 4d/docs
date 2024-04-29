---
id: queryplan
title: $queryplan
---

Returns the query as it was passed to 4D Server (_e.g._, `$queryplan=true`)

## Descrição

$queryplan retorna o plano da consulta como foi passado para 4D Server.

| Propriedade | Tipo   | Descrição                                                                                                            |
| ----------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| item        | String | Petição executada                                                                                                    |
| subquery    | Array  | Se houver uma subconsulta, um objeto adicional contendo uma propriedade de item (como o anterior) |

For more information about query plans, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

## Exemplo

Se passar a seguinte consulta:

`GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true`

#### Responsa:

```
__queryPlan: {
    And: [
        {
            item: "Join on Table : Company : People.employer = Company.ID",
            subquery: [
                {
                    item: "Company.name = acme"
                }
            ]
        },
        {
            item: "People.lastName = Jones"
        }
    ]
}
```
