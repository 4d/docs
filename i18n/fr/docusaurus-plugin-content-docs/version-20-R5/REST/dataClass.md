---
id: dataClass
title: dataClass
---

Les noms de dataclass peuvent être utilisés directement dans les requêtes REST pour opérer avec des entités, des sélections d'entités (entity selections) ou des fonctions de classe (class functions) de la dataclass.

## Syntaxe

| Syntaxe                                                                                                                              | Exemple                               | Description                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                                                                                        | `/Employee`                           | Renvoie toutes les données (par défaut les 100 premières entités) de la dataclass |
| [**{dataClass}[{key}]**](#dataclasskey)                                          | `/Employee[22]`                       | Renvoie les données de l'entité spécifique définie par la clé primaire de la dataclass               |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)                                    | `/Employee:firstName(John)`           | Renvoie les données d'une entité dans laquelle la valeur de l'attribut est définie                   |
| [**{dataClass}/{DataClassClassFunction}**](ClassFunctions.md#function-calls)                                                         | `/City/getCity`                       | Exécute une fonction de classe d'une dataclass                                                       |
| [**{dataClass}/{EntitySelectionClassFunction}**](ClassFunctions.md#function-calls)                                                   | `/City/getPopulation/?$filter="ID<3"` | Exécute une fonction de classe d'une sélection d'entité                                              |
| [**{dataClass}[{key}]/{EntityClassFunction}**](ClassFunctions.md#function-calls) | `City(2)/getPopulation`               | Exécute une fonction de classe d'une entité                                                          |

> Function calls are detailed in the [Calling ORDA class functions](ClassFunctions.md) section.

## {dataClass}

Returns all the data (by default the first 100 entities) for a specific dataclass (_e.g._, `Company`)

### Description

When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using [`$top/$limit`]($top_$limit.md).

Voici une description des données retournées :

| Propriété                                               | Type       | Description                                                                                                                                                                                                                                             |
| ------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | String     | Nom de la dataclass.                                                                                                                                                                                                                    |
| __COUNT       | Number     | Nombre d'entités dans la dataclass.                                                                                                                                                                                                     |
| __SENT        | Number     | Nombre d'entités envoyées par la requête REST. This number can be the total number of entities if it is less than the value defined by `$top/$limit`.                                                                   |
| __FIRST       | Number     | Numéro d'entité à partir duquel la sélection commence. Either 0 by default or the value defined by `$skip`.                                                                                                             |
| __ENTITIES    | Collection | Cette collection d'objets contient un objet pour chaque entité avec tous ses attributs. Tous les attributs relationnels sont renvoyés en tant qu'objets avec un URI pour obtenir des informations concernant le parent. |

Chaque entité contient les propriétés suivantes :

| Propriété                                             | Type   | Description                                                                                                                |
| ----------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | String | Valeur de la clé primaire définie pour la dataclass.                                                       |
| __TIMESTAMP | Date   | Horodatage de la dernière modification de l'entité                                                                         |
| __STAMP     | Number | Internal stamp that is needed when you modify any of the values in the entity when using `$method=update`. |

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Par exemple :

`GET  /rest/Company/name,address`

### Exemple

Retourne toutes les données d'une dataclass spécifique.

`GET  /rest/Company`

**Result**:

```json
{
    "__entityModel": "Company",
    "__GlobalStamp": 51,
    "__COUNT": 250,
    "__SENT": 100,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
            "__STAMP": 1,
            "ID": 1,
            "name": "Adobe",
            "address": null,
            "city": "San Jose",
            "country": "USA",
            "revenues": 500000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",
            "__STAMP": 1,
            "ID": 2,
            "name": "Apple",
            "address": null,
            "city": "Cupertino",
            "country": "USA",
            "revenues": 890000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "3",
            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",
            "__STAMP": 2,
            "ID": 3,
            "name": "4D",
            "address": null,
            "city": "Clichy",
            "country": "France",
            "revenues": 700000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "4",
            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",
            "__STAMP": 1,
            "ID": 4,
            "name": "Microsoft",
            "address": null,
            "city": "Seattle",
            "country": "USA",
            "revenues": 650000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"
                }
            }
        }
.....//plus d'entités ici 
    ]
}
```

## {dataClass}\[{key}]

Returns the data for the specific entity defined by the dataclass's primary key, _e.g._, `Company[22]` or `Company[IT0911AB2200]`

### Description

En passant la dataclass et une clé, vous pouvez récupérer toutes les informations publiques de cette entité. En passant la dataclass et une clé, vous pouvez récupérer toutes les informations publiques de cette entité. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{DataClass}](#dataclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Par exemple :

`GET  /rest/Company(1)/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

`GET  /rest/Company(1)/name,address,staff?$expand=staff`

### Exemple

La requête suivante retourne toutes les données publiques de la dataclass Company dont la clé est 1.

`GET  /rest/Company[1]`

**Result**:

```json
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
    "__STAMP": 2,
    "ID": 1,
    "name": "Apple",
    "address": Infinite Loop,
    "city": "Cupertino",
    "country": "USA",
    "url": http://www.apple.com,
    "revenues": 500000,
    "staff": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
        }
    }
}
```

## {dataClass}:{attribute}(value)

Renvoie les données d'une entité dans laquelle la valeur de l'attribut est définie

### Description

By passing the _dataClass_ and an _attribute_ along with a value, you can retrieve all the public information for that entity. La valeur est une valeur unique pour l'attribut, mais ce n'est pas la clé primaire.

`GET  /rest/Company:companyCode(Acme001)`

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Par exemple :

`GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

`GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemple

La requête suivante retourne toutes les données publiques de l'employé nommé "Jones".

`GET  /rest/Employee:lastname(Jones)`
