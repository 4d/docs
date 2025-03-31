---
id: queryplan
title: '$queryplan'
---


Retorna a consulta como foi passada para 4D Server (*e.g.*, `$queryplan=true`)

## Descrição
$queryplan retorna o plano da consulta como foi passado para 4D Server.

| Propriedade | Tipo  | Descrição                                                                                         |
| ----------- | ----- | ------------------------------------------------------------------------------------------------- |
| item        | Text  | Petição executada                                                                                 |
| subquery    | Array | Se houver uma subconsulta, um objeto adicional contendo uma propriedade de item (como o anterior) |

Para mais informações sobre os planos de consulta, consultar [queryPlan e queryPath](genInfo.md#querypath-and-queryplan).

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
