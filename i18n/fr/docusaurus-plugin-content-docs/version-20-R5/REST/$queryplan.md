---
id: queryplan
title: $queryplan
---

Returns the query as it was passed to 4D Server (_e.g._, `$queryplan=true`)

## Description

$queryplan retourne le plan de la requête telle qu'il a été exécuté par 4D Server.

| Propriété | Type    | Description                                                                                                                                 |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| item      | String  | Requête exécutée                                                                                                                            |
| subquery  | Tableau | S'il existe une sous-requête, un objet supplémentaire contenant une propriété d'élément (comme celle indiquée ci-dessus) |

For more information about query plans, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

## Exemple

Si vous passez la requête suivante :

`GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true`

#### Réponse :

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
