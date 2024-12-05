---
id: querypath
title: "$querypath"
---
   	
Retourne la requête telle qu'elle a été exécutée par 4D Server (par exemple, `$querypath=true`)

## Description

`$querypath` retourne la requête telle qu'elle a été exécutée par 4D Server. Si, par exemple, une partie de la requête passée ne retourne aucune entité, le reste de la requête n'est pas exécuté. La requête lancée est optimisée, comme vous pouvez le voir dans ce $ `$querypath`.

Pour plus d'informations sur les chemins de requête, reportez-vous à [queryPlan ete queryPath](genInfo.md#querypath-and-queryplan).

Dans la collection d'étapes, il existe un objet avec les propriétés suivantes qui définissent la requête exécutée :

| Propriété     | Type       | Description                                                                       |
| ------------- | ---------- | --------------------------------------------------------------------------------- |
| Description   | Text       | Requête exécutée ou "AND" lorsqu'il existe plusieurs étapes                       |
| time          | Number     | Nombre de millisecondes nécessaires pour exécuter la requête                      |
| recordsfounds | Number     | Nombre d'enregistrements trouvés                                                  |
| steps         | Collection | Une collection avec un objet définissant l'étape suivante du chemin de la requête |

## Exemple

Si vous exécutez la requête suivante :

 `GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

Et si aucune entité n'a été trouvée, le chemin de la requête suivant sera retourné si vous saisissez ce qui suit :

`GET  /rest/$querypath`

**Réponse** :

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

**Réponse** :

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
