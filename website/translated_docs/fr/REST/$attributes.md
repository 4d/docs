---
id: attributes
title: '$attributes'
---

Allows selecting the related attribute(s) to get from the dataclass (*e.g.*, `Company(1)?$attributes=employees.lastname` or `Employee?$attributes=employer.name`).


## Description

Lorsque vous avez des attributs relationnels dans une dataclass, utilisez `$attributes` pour définir le chemin des attributs dont vous souhaitez obtenir les valeurs pour l'entité ou les entités associées.

You can apply `$attributes` to an entity (*e.g.*, People(1)) or an entity selection (*e.g.*, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) .


- Si `$attributes` n'est pas spécifié dans une requête, ou si la valeur "*" est passée, tous les attributs disponibles sont extraits. **Related entity** attributes are extracted with the simple form: an object with property `__KEY` (primary key) and `URI`. **Related entities** attributes are not extracted.

- If `$attributes` is specified for **related entity** attributes:
    - `$attributes=relatedEntity`: the related entity is returned with simple form (deferred __KEY property (primary key)) and `URI`.
    - `$attributes=relatedEntity.*` : tous les attributs de l'entité relative sont retournés
    - `$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...` : seuls ces attributs de l'entité relative sont retournés.


- If `$attributes` is specified for **related entities** attributes:
    - `$attributes=relatedEntities.*` : toutes les propriétés des entités relatives sont retournées
    - `$attributes=relatedEntities.attributePath1, relatedEntity.attributePath2, ...` : seuls ces attributs des entités relatives sont retournés.



## Exemples avec plusieurs entités relatives

Si nous passons la requête REST suivante pour la classe de datastore Company (qui possède un attribut de relation "employees"):

 `GET  /rest/Company(1)/?$attributes=employees.lastname`

**Response**:

```
{
    "__entityModel": "Company",
    "__KEY": "1",  
    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",
    "__STAMP": 2,
    "employees": {
        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",
        "__GlobalStamp": 50,
        "__COUNT": 135,
        "__FIRST": 0,
        "__ENTITIES": [
            {
                "__KEY": "1",
                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",
                "__STAMP": 5,
                "lastname": "ESSEAL"
            },
            {
                "__KEY": "2",
                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",
                "__STAMP": 6,
                "lastname": "JONES"
            },
            ...
    }
}
```

Si vous souhaitez obtenir tous les attributs des employés :

 `GET  /rest/Company(1)/?$attributes=employees.*`

Si vous souhaitez obtenir le nom de famille et les attributs de nom de poste des employés :

 `GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname`


## Exemples avec une entité relative

Si nous passons la requête REST suivante pour la classe de datastore Employee (qui a plusieurs attributs relationnels, y compris "employer") :


 `GET  /rest/Employee(1)?$attributes=employer.name`

**Response**:

```
{
    "__entityModel": "Employee",
    "__KEY": "1",
    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",
    "__STAMP": 5,
    "employer": {
        "__KEY": "1",
        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",
        "__STAMP": 0,
        "name": "Adobe"
    }
}
```

Si vous souhaitez obtenir tous les attributs de l'employeur :

 `GET  /rest/Employee(1)?$attributes=employer.*`

Si vous souhaitez obtenir les noms de famille de tous les employés de l'employeur :

 `GET  /rest/Employee(1)?$attributes=employer.employees.lastname`