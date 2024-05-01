---
id: queryplan
title: $queryplan
---

Returns the query as it was passed to 4D Server (_e.g._, `$queryplan=true`)

## Descripción

$queryplan devuelve el plan de la petición tal y como se pasó a 4D Server.

| Propiedad | Tipo   | Descripción                                                                                                              |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| item      | String | Petición ejecutada                                                                                                       |
| subquery  | Array  | Si hay una subconsulta, un objeto adicional que contiene una propiedad de elemento (como la anterior) |

For more information about query plans, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

## Ejemplo

Si pasas la siguiente petición:

`GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true`

#### Respuesta:

```
__queryPlan: {
    And: [
        {
            item: "Join on Table : Company : People.employer = Company. ID",
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
