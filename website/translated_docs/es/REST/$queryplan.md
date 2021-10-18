---
id: queryplan
title: '$queryplan'
---


Returns the query as it was passed to 4D Server (*e.g.*, `$queryplan=true`)

## Descripción
$queryplan devuelve el plan de la petición tal y como se pasó a 4D Server.

| Propiedad | Tipo   | Descripción                                                                                 |
| --------- | ------ | ------------------------------------------------------------------------------------------- |
| item      | Cadena | Actual query executed                                                                       |
| subquery  | Array  | If there is a subquery, an additional object containing an item property (as the one above) |

For more information about query plans, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

## Ejemplo
If you pass the following query:

 `GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true`

#### Response:

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
