---
id: queryplan
title: '$queryplan'
---


Retourne la requête telle qu'elle a été passée au 4D Server (par exemple, `$queryplan=true`)

## Description
$queryplan retourne le plan de la requête telle qu'il a été exécuté par 4D Server.

| Propriété | Type    | Description                                                                                                              |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| item      | Text    | Requête exécutée                                                                                                         |
| subquery  | Tableau | S'il existe une sous-requête, un objet supplémentaire contenant une propriété d'élément (comme celle indiquée ci-dessus) |

Pour plus d'informations sur les plans de requête, reportez-vous à [queryPlan ete queryPath](genInfo.md#querypath-and-queryplan).

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
