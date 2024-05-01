---
id: querypath
title: $querypath
---

Returns the query as it was executed by 4D Server (_e.g._, `$querypath=true`)

## Description

`$querypath` returns the query as it was executed by 4D Server. Si, par exemple, une partie de la requête passée ne retourne aucune entité, le reste de la requête n'est pas exécuté. The query requested is optimized as you can see in this `$querypath`.

For more information about query paths, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

Dans la collection d'étapes, il existe un objet avec les propriétés suivantes qui définissent la requête exécutée :

| Propriété     | Type       | Description                                                                       |
| ------------- | ---------- | --------------------------------------------------------------------------------- |
| Description   | String     | Requête exécutée ou "AND" lorsqu'il existe plusieurs étapes                       |
| time          | Number     | Nombre de millisecondes nécessaires pour exécuter la requête                      |
| recordsfounds | Number     | Nombre d'enregistrements trouvés                                                  |
| steps         | Collection | Une collection avec un objet définissant l'étape suivante du chemin de la requête |

## Exemple

Si vous exécutez la requête suivante :

`GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

Et si aucune entité n'a été trouvée, le chemin de la requête suivant sera retourné si vous saisissez ce qui suit :

` GET  /rest/$querypath`

**Response**:

```
__queryPath: {
 
    steps: [
        {
            description: "AND",
            time: 0,
            recordsfounds: 0,
            steps: [
                {
                    description: "Join on Table : Company : People.employer = Company.ID",
                    time: 0,
                    recordsfounds: 0,
                    steps: [
                        {
                            steps: [
                                {
                                    description: "Company.name = acme",
                                    time: 0,
                                    recordsfounds: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
 
}
```

En revanche, si la première requête retourne plus d'une entité, la seconde sera exécutée. Si nous exécutons la requête suivante :

`GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true`

Si au moins une entité a été trouvée, le chemin de la requête suivant sera retourné si vous saisissez ce qui suit :

`GET  /rest/$querypath`

**Respose**:

```
"__queryPath": {
    "steps": [
        {
            "description": "AND",
            "time": 1,
            "recordsfounds": 4,
            "steps": [
                {
                    "description": "Join on Table : Company : Employee.employer = Company.ID",
                    "time": 1,
                    "recordsfounds": 4,
                    "steps": [
                        {
                            "steps": [
                                {
                                    "description": "Company.name LIKE a*",
                                    "time": 0,
                                    "recordsfounds": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "description": "Employee.lastName # smith",
                    "time": 0,
                    "recordsfounds": 4
                }
            ]
        }
    ]
}
```
