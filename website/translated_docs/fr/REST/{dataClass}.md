---
id:
  - dataClass
title:
  - dataClass
---



Les noms de dataclass peuvent être utilisés directement dans les requêtes REST pour opérer avec des entités, des sélections d'entités (entity selections) ou des méthodes de la dataclass.

## Syntaxe

| Syntaxe                                                                    | Exemple                     | Description                                                                                          |
| -------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                              | `/Employee`                 | Renvoie toutes les données (par défaut les 100 premières entités) de la dataclass                    |
| [**{dataClass}({clé})**](#dataclasskey)                                    | `/Employee(22)`             | Renvoie les données de l'entité spécifique définie par la clé primaire de la dataclass               |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)             | `/Employee:firstName(John)` | Renvoie les données d'une entité dans laquelle la valeur de l'attribut est définie                   |
| [**{dataClass}/{méthode}**](#dataclassmethod-and-dataclasskeymethod)       | `/Employee/getHighSalaries` | Executes a project method and returns an object or a collection (the project method must be exposed) |
| [**{dataClass}({key})/{method}**](#dataclassmethod-and-dataclasskeymethod) | `/Employee(22)/getAge`      | Returns a value based on an entity method                                                            |




## {dataClass}

Renvoie toutes les données (par défaut, les 100 premières entités) pour une dataclass spécifique (par exemple, `Société`)

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

**Résultat** :

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

Renvoie les données de l'entité spécifique définie par la clé primaire de la dataclass, par exemple, `Company (22) ou Company ("IT0911AB2200")`

### Description

En passant la dataclass et une clé, vous pouvez récupérer toutes les informations publiques de cette entité. La clé est la valeur de l'attribut définie comme clé primaire pour votre classe de datastore. Pour plus d'informations sur la définition d'une clé primaire, reportez-vous à la section **Modification de la clé primaire** dans **l'éditeur de modèle de données**.

Pour plus d'informations sur les données retournées, reportez-vous à [{datastoreClass}](#datastoreclass).

Si vous souhaitez indiquer les attributs à retourner, définissez-les à l'aide de la syntaxe suivante [{attribut1, attribut2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company(1)/name,address`

Si vous souhaitez développer un attribut relationnel à l'aide de `$expand`, vous devez l'indiquer comme suit :

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

### Exemple

La requête suivante retourne toutes les données publiques de la classe de datastore de Company dont la clé est 1.

 `GET  /rest/Company(1)`

**Résultat** :

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

En passant la *dataClass* et un *attribut* avec une valeur, vous pouvez récupérer toutes les informations publiques de cette entité. La valeur est une valeur unique pour l'attribut, mais ce n'est pas la clé primaire.

 `GET  /rest/Company:companyCode(Acme001)`

Si vous souhaitez indiquer les attributs à retourner, définissez-les à l'aide de la syntaxe suivante [{attribut1, attribut2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

Si vous souhaitez utiliser un attribut relationnel à l'aide de [$attributes]($attributes.md), vous devez l'indiquer comme suit :

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemple

La requête suivante retourne toutes les données publiques de l'employé nommé "Jones".

 `GET  /rest/Employee:lastname(Jones)`


## {dataClass}/{method} and {dataClass}({key})/{method}

Returns an object or a collection based on a project method.

### Description

Project methods are called through a dataclass (table) or an entity (record), and must return either an object or a collection.

`POST  /rest/Employee/getHighSalaries`

`POST  /rest/Employee(52)/getFullName`


### 4D Configuration

To be called in a REST request, a method must:

- have been declared as "Available through REST server" in 4D,
- have its master table and scope defined accordingly:
    -  **Table**: 4D table (i.e. dataclass) on which the method is called. The table must be [exposed to REST](configuration.md#exposing-tables-and-fields).
    -  **Scope**: This setting is useful when the method uses the 4D classic language and thus, needs to have a database context on the server side.
        - **Table** -for methods applied to the whole table (dataclass)
        - **Current record** -for methods applied to the current record (entity) using the `{dataClass}(key)/{method}` syntax.
        - **Current selection** -for methods applied to the current selection

![alt-text](assets/en/REST/MethodProp.png)


### Passer des paramètres à une méthode

You can also pass parameters to a method in a POST.

`POST  /rest/Employee/addEmployee`

You can POST data in the body part of the request, for example:

["John","Smith"]




### Exemples

#### Table scope

Call of a `getAverage` method:
- on [Employee] table
- with **Table** scope


```4d
    //getAverage  
ALL RECORDS([Employee])
$0:=New object("ageAverage";Average([Employee]age))
```

`POST  /rest/Employee/getAverage`

Résultat :
```
{
    "result": {
        "ageAverage": 44.125
    }
}
```



#### Current record scope

Call of a `getFullName` method:
- on [Employee] table
- with **Current record** scope

```4d
    //getFullName  
$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)
```

`POST  /rest/Employee(3)/getFullName`

Résultat :
```
{
    "result": {
        "fullName": "John Smith"
    }
}
```



#### Current selection scope

Call of a `updateSalary` method:
- on [Employee] table
- with **Current selection** scope

```4d
    //updateSalary  
C_REAL($1;$vCount)
READ WRITE([Employee])
$vCount:=0
FIRST RECORD([Employee])
While (Not(End selection([Employee]))  
    [Employee]salary:=[Employee]salary * $1
    SAVE RECORD([Employee])
    $vCount:=$vCount+1
    NEXT RECORD([Employee])
End while 
UNLOAD RECORD([Employee])
$0:=New object("updates";$vCount)
```

`POST  /rest/Employee/updateSalary/?$filter="salary<1500"`

POST data (in the request body): [1.5]

Résultat :
```
{
    "result": {
        "updated": 42
    }
}
```

