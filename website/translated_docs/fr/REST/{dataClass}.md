---
id:
  - dataClass
title:
  - dataClass
---



Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass.

## Syntaxe

| Syntaxe                                                                            | Exemple                                  | Description                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                                      | `/Employee`                              | Renvoie toutes les données (par défaut les 100 premières entités) de la dataclass      |
| [**{dataClass}({clé})**](#dataclasskey)                                            | `/Employee(22)`                          | Renvoie les données de l'entité spécifique définie par la clé primaire de la dataclass |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)                     | `/Employee:firstName(John)`              | Renvoie les données d'une entité dans laquelle la valeur de l'attribut est définie     |
| [**{dataClass}/{dataClassClassFunction}**](ClassFunctions.md#function-calls)       | `/City/getCity`                          | Executes a dataclass class function                                                    |
| [**{dataClass}({EntitySelectionClassFunction}**](ClassFunctions.md#function-calls) | `/City/getPopulation/?$filter="ID<3"` | Executes an entity selection class function                                            |
| [**{dataClass}({key})/{EntityClassFunction}**](ClassFunctions.md#function-calls)   | `City(2)/getPopulation`                  | Executes an entity class function                                                      |

> Function calls are detailed in the [Calling ORDA class functions](ClassFunctions.md) section.



## {dataClass}

Returns all the data (by default the first 100 entities) for a specific dataclass (*e.g.*, `Company`)

### Description

Lorsque vous appelez ce paramètre dans votre requête REST, les 100 premières entités sont renvoyées, sauf si vous avez spécifié une valeur à l'aide de [`$top/$limit`]($top_$limit.md).

Voici une description des données retournées :

| Propriété     | Type       | Description                                                                                                                                                                                                            |
| ------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | Chaine     | Nom de la classe du datastore.                                                                                                                                                                                         |
| __COUNT       | Nombre     | Nombre d'entités dans la classe du datastore.                                                                                                                                                                          |
| __SENT        | Nombre     | Number of entities sent by the REST request. This number can be the total number of entities if it is less than the value defined by `$top/$limit`.                                                                    |
| __FIRST       | Nombre     | Numéro d'entité à partir duquel la sélection commence. Soit 0 par défaut soit la valeur définie par `$skip`.                                                                                                           |
| __ENTITIES    | Collection | This collection of objects contains an object for each entity with all its attributes. Tous les attributs relationnels sont renvoyés en tant qu'objets avec un URI pour obtenir des informations concernant le parent. |

Each entity contains the following properties:

| Propriété   | Type   | Description                                                                                                |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| __KEY       | Chaine | Value of the primary key defined for the datastore class.                                                  |
| __TIMESTAMP | Date   | Timestamp of the last modification of the entity                                                           |
| __STAMP     | Nombre | Internal stamp that is needed when you modify any of the values in the entity when using `$method=update`. |

Si vous souhaitez indiquer les attributs à retourner, définissez-les à l'aide de la syntaxe suivante [{attribut1, attribut2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company/name,address`



### Exemple

Renvoie toutes les données d'une classe de datastore spécifique.

 `GET  /rest/Company`

**Result**:

````
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
.....//more entities here 
    ]
}
````


## {dataClass}({clé})

Returns the data for the specific entity defined by the dataclass's primary key, *e.g.*, `Company(22) or Company("IT0911AB2200")`

### Description

En passant la dataclass et une clé, vous pouvez récupérer toutes les informations publiques de cette entité. La clé est la valeur de l'attribut définie comme clé primaire pour votre classe de datastore. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

Pour plus d'informations sur les données retournées, reportez-vous à [{datastoreClass}](#datastoreclass).

Si vous souhaitez indiquer les attributs à retourner, définissez-les à l'aide de la syntaxe suivante [{attribut1, attribut2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company(1)/name,address`

Si vous souhaitez développer un attribut relationnel à l'aide de `$expand`, vous devez l'indiquer comme suit :

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

### Exemple

La requête suivante retourne toutes les données publiques de la classe de datastore de Company dont la clé est 1.

 `GET  /rest/Company(1)`

**Result**:

````
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
````



## {dataClass}:{attribute}(value)

Renvoie les données d'une entité dans laquelle la valeur de l'attribut est définie

### Description

By passing the *dataClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. La valeur est une valeur unique pour l'attribut, mais ce n'est pas la clé primaire.

 `GET  /rest/Company:companyCode(Acme001)`

Si vous souhaitez indiquer les attributs à retourner, définissez-les à l'aide de la syntaxe suivante [{attribut1, attribut2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

Si vous souhaitez utiliser un attribut relationnel à l'aide de [$attributes]($attributes.md), vous devez l'indiquer comme suit :

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemple

La requête suivante retourne toutes les données publiques de l'employé nommé "Jones".

 `GET  /rest/Employee:lastname(Jones)`

