---
id:
  - dataClass
title:
  - dataClass
---



Les noms de dataclass peuvent être utilisés directement dans les requêtes REST pour opérer avec des entités, des sélections d'entités (entity selections) ou des méthodes de la dataclass.

## Syntaxe

| Syntaxe                                                        | Exemple                     | Description                                                                            |
| -------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                  | `/Employee`                 | Renvoie toutes les données (par défaut les 100 premières entités) de la dataclass      |
| [**{dataClass}({clé})**](#dataclasskey)                        | `/Employee(22)`             | Renvoie les données de l'entité spécifique définie par la clé primaire de la dataclass |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue) | `/Employee:firstName(John)` | Renvoie les données d'une entité dans laquelle la valeur de l'attribut est définie     |
| [**{dataClass}/{méthode}**](#dataclassmethod)                  | `/Employee/getHighSalaries` | Renvoie une entity selection ou une collection basée sur une méthode de la dataclass   |
| [**{dataClass}({key})/{method}**](#dataclasskey)               | `/Employee(22)/getAge`      | Returns a value based on an entity method                                              |


## {dataClass}

Renvoie toutes les données (par défaut, les 100 premières entités) pour une dataclass spécifique (par exemple, `Société`)

### Description

Lorsque vous appelez ce paramètre dans votre requête REST, les 100 premières entités sont renvoyées, sauf si vous avez spécifié une valeur à l'aide de [`$top/$limit`]($top_$limit.md).

Voici une description des données retournées :

| Propriété     | Type    | Description                                                                                                                                                                                                                                                              |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __entityModel | Chaine  | Nom de la classe du datastore.                                                                                                                                                                                                                                           |
| __COUNT       | Nombre  | Nombre d'entités dans la classe du datastore.                                                                                                                                                                                                                            |
| __SENT        | Nombre  | Nombre d'entités envoyées par la requête REST. Ce nombre peut être le nombre total d'entités s'il est inférieur à la valeur définie dans la propriété Default Top Size (dans les propriétés de la classe de datastore) ou `$top§$limit` ou la valeur dans `$top/$limit`. |
| __FIRST       | Nombre  | Numéro d'entité à partir duquel la sélection commence. Soit 0 par défaut soit la valeur définie par `$skip`.                                                                                                                                                             |
| __ENTITIES    | Tableau | Ce tableau d'objets contient un objet pour chaque entité avec tous les attributs publics. Tous les attributs relationnels sont renvoyés en tant qu'objets avec un URI pour obtenir des informations concernant le parent.                                                |


Pour chaque entité, il existe une propriété **__KEY** et **__STAMP**. La propriété **__KEY** contient la valeur de la clé primaire définie pour la classe de datastore. Le **__STAMP** est un tampon interne qui est nécessaire lorsque vous modifiez des valeurs de l'entité lors de l'utilisation de `$method=update`.

Si vous souhaitez indiquer les attributs à retourner, définissez-les à l'aide de la syntaxe suivante [{attribut1, attribut2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

`GET  /rest/Company/name,address`

### Exemple

Renvoie toutes les données d'une classe de datastore spécifique.

`GET  /rest/Employee`

**Résultat** :

    {
        "__entityModel": "Company",
        "__COUNT": 250,
        "__SENT": 100,
        "__FIRST": 0,
        "__ENTITIES": [
            {
                "__KEY": "1",
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

    {
        "__entityModel": "Company",
        "__KEY": "1",
        "__STAMP": 1,
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

## {dataClass}/{méthode}

Renvoie une entity selection ou une collection basée sur une méthode de la dataclass

### Description

Les méthodes de dataclass doivent être appliquées à une Dataclass ou à une entity selection et doivent retourner une entity selection ou une collection. Cependant, lorsque vous retournez une collection, vous ne pouvez pas définir les attributs retournés.

`POST  /rest/Employee/getHighSalaries`

Si vous n'êtes pas autorisé à exécuter la méthode, vous recevrez l'erreur suivante :

    {
        "__ERROR": [
            {
                "message": "No permission to execute method getHighSalaries in dataClass Employee",
                "componentSignature": "dbmg",
                "errCode": 1561
            }
        ]
    }
    

### 4D Configuration

To be called in a REST request, a method must:

- have been declared as "Available through REST server" in 4D,
- have its master table and scope defined accordingly: 
    - **Table**: master table
    - **Scope**: 
        - **Table** -for methods applied to the whole table (dataclass)
        - **Current record** -for method applied to the current record (entity)
        - **Current selection** -for methods applied to the current selection

![alt-text](assets/en/REST/MethodProp.png)

### Passer des paramètres à une méthode

You can also pass parameters to a method in a POST.

`POST  /rest/Employee/addEmployee`

**POST data:** ["John","Smith"]

### Manipuler des données retournées par une méthode

Vous pouvez définir les attributs que vous souhaitez retourner, en passant les éléments suivants :

`POST /rest/Employee/getEmployees?$attributes=lastName,firstName`

Vous pouvez également appliquer l'une des fonctions suivantes à une méthode : [$filter]($filter.md), [$orderby]($orderby.md), [$skip]($skip.md), [$expand]($expand.md), et [$top/$limit]($top_$limit.md). In this case, the method applies to an entity selection. Par exemple:

`POST /rest/Employee/getEmployees?$attributes=lastName,firstName&$filter=salary>20000`

### Exemple

Dans l'exemple ci-dessous, nous appelons notre méthode, mais parcourons également la collection en retournant les dix entités suivant la sixième entité :

POST /rest/Employee/getHighSalaries?$attributes=lastName,employer.name&$top=10&$skip=1`

Si vous souhaitez récupérer un attribut et un attribut relationnel, vous pouvez saisir la requête REST suivante :

`POST  /rest/Employee/getHighSalaries?$attributes=lastName,employer&$expand=employer`

Dans l'exemple ci-dessous, la méthode de dataclass getCities retourne une collection de villes :

`POST  /rest/Employee/getCities`

Résultat :

    {
        "result": [
            "Paris",
            "Florence",
            "New York"
        ]
    }