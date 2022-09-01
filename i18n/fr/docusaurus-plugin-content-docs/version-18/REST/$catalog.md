---
id: catalog
title: "$catalog"
---


Le catalogue décrit toutes les dataclass et les attributs disponibles dans le datastore.


## Syntaxe

| Syntaxe                                       | Exemple              | Description                                                                            |
| --------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                      | `/$catalog`          | Retourne une liste des dataclasse de votre projet avec deux URI                        |
| [**$catalog/$all**](#catalogall)              | `/$catalog/$all`     | Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs |
| [**$catalog/{dataClass}**](#catalogdataclass) | `/$catalog/Employee` | Renvoie des informations sur une dataclass et ses attributs                            |


## $catalog
Retourne une liste de dataclass dans votre projet avec deux URI : une pour accéder aux informations sur sa structure et une pour récupérer les données de la dataclass


### Description

Lorsque vous appelez `$catalog`, une liste des dataclass est retournée avec deux URI pour chaque dataclass dans le datastore de votre projet.

Seules les dataclass exposées apparaissent dans cette liste pour le datastore de votre projet. Pour plus d'informations, reportez-vous à la section [**Exposition des tableaux et des champs**](configuration.md#exposing-tables-and-fields).

Voici une description des propriétés retournées pour chaque dataclass dans le datastore de votre projet :


| Propriété | Type   | Description                                                                          |
| --------- | ------ | ------------------------------------------------------------------------------------ |
| nom       | String | Nom de la dataclass.                                                                 |
| uri       | String | Un URI vous permettant d'obtenir des informations sur la dataclass et ses attributs. |
| dataURI   | String | URI vous permettant d'afficher les données dans la dataclass.                        |


### Exemple

`GET  /rest/$catalog`

**Résultat** :

````
{
    dataClasses: [
        {
            name: "Company",
            uri: "http://127.0.0.1:8081/rest/$catalog/Company",
            dataURI: "http://127.0.0.1:8081/rest/Company"
        },
        {
            name: "Employee",
            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",
            dataURI: "http://127.0.0.1:8081/rest/Employee"
        }
    ]
}
````


## $catalog/$all

Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs

### Description

En appelant `$catalog/$all`, vous pouvez recevoir des informations détaillées sur les attributs de chacune des dataclasses du modèle de votre projet.

Pour plus d'informations sur ce qui est retourné pour chaque dataclass et ses attributs, utilisez [`$catalog/{dataClass}`](#catalogdataClass).


### Exemple

`GET  /rest/$catalog/$all`

**Résultat** :

````
{

    "dataClasses": [
        {
            "name": "Company",
            "className": "Company",
            "collectionName": "CompanySelection",
            "tableNumber": 2,
            "scope": "public",
            "dataURI": "/rest/Company",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "fieldPos": 1,
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "name",
                    "kind": "storage",
                    "fieldPos": 2,
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "revenues",
                    "kind": "storage",
                    "fieldPos": 3,
                    "scope": "public",
                    "type": "number"
                },
                {
                    "name": "staff",
                    "kind": "relatedEntities",
                    "fieldPos": 4,
                    "scope": "public",
                    "type": "EmployeeSelection",
                    "reversePath": true,
                    "path": "employer"
                },
                {
                    "name": "url",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        },
        {
            "name": "Employee",
            "className": "Employee",
            "collectionName": "EmployeeSelection",
            "tableNumber": 1,
            "scope": "public",
            "dataURI": "/rest/Employee",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "firstname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "lastname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "employer",
                    "kind": "relatedEntity",
                    "scope": "public",
                    "type": "Company",
                    "path": "Company"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        }
    ]
}
````


## $catalog/{dataClass}

Renvoie des informations sur une dataclass et ses attributs

### Description

L'appel de `$catalog/{dataClass}` pour une dataclass spécifique retournera les informations suivantes sur la dataclass et les attributs qu'elle contient. L'appel de `$catalog/{dataClass}` pour une dataclass spécifique retournera les informations suivantes sur la dataclass et les attributs qu'elle contient.

Les informations que vous récupérez concernent :

*   Dataclass
*   Attribut(s)
*   Méthode(s) le cas échéant
*   Clé primaire

### DataClass

Les propriétés suivantes sont retournées pour une dataclass exposée :


| Propriété      | Type   | Description                                                                                                         |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| nom            | String | Nom de la dataclass                                                                                                 |
| collectionName | String | Nom d'une entity selection dans la dataclass                                                                        |
| tableNumber    | Number | Numéro de la table dans la base 4D                                                                                  |
| scope          | String | Étendue de la dataclass (à noter que seules les dataclasses dont **l'étendue** (scope) est publique sont affichées) |
| dataURI        | String | Un URI aux données de la dataclass                                                                                  |


### Attribut(s)

Voici les propriétés de chaque attribut exposé qui sont retournées :

| Propriété   | Type    | Description                                                                                                                                                             |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nom         | String  | Le nom de l’attribut.                                                                                                                                                   |
| kind        | String  | Type d'attribut (stockage ou relatedEntity).                                                                                                                            |
| fieldPos    | Number  | Position du champ dans la table de la base.                                                                                                                             |
| scope       | String  | Portée de l'attribut (seuls les attributs dont la portée est publique apparaîtront).                                                                                    |
| indexed     | String  | Si un **type d'index** a été sélectionné, cette propriété retournera true. Sinon, cette propriété n'apparaîtra pas.                                                     |
| type        | String  | Type d'attribut de chaîne (booléen, blob, octet, date, durée, image, long, long64, numérique, chaîne, uuid ou mot) ou la dataclasse pour un attribut de relation N-> 1. |
| identifying | Boolean | Cette propriété retourne True si l'attribut est la clé primaire. Sinon, cette propriété n'apparaîtra pas.                                                               |
| path        | String  | Nom du lien d'un attribut relatedEntity ou relateEntities.                                                                                                              |
 foreignKey|String   |For a relatedEntity attribute, name of the related attribute.| inverseName |String |Name of the opposite relation for a relatedEntity or relateEntities attribute.|

### Méthode(s)

Définit les méthodes projet associées à la dataclass, le cas échéant.

### Clé primaire

L'objet clé retourne le nom de l'attribut (**name**) défini comme **clé primaire** pour la dataclass.


### Exemple
Vous pouvez récupérer les informations concernant une dataclass spécifique.

`GET  /rest/$catalog/Employee`

**Résultat** :

````
{
    name: "Employee",
    className: "Employee",
    collectionName: "EmployeeCollection",
    scope: "public",
    dataURI: "http://127.0.0.1:8081/rest/Employee",
    defaultTopSize: 20,
    extraProperties: {
        panelColor: "#76923C",
        __CDATA: "\n\n\t\t\n",
        panel: {
            isOpen: "true",
            pathVisible: "true",
            __CDATA: "\n\n\t\t\t\n",
            position: {
                X: "394",
                Y: "42"
            }
        }
    },
    attributes: [
        {
            name: "ID",
            kind: "storage",
            scope: "public",
            indexed: true,
            type: "long",
            identifying: true
        },
        {
            name: "firstName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "lastName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "fullName",
            kind: "calculated",
            scope: "public",
            type: "string",
            readOnly: true
        },
        {
            name: "salary",
            kind: "storage",
            scope: "public",
            type: "number",
            defaultFormat: {
                format: "$###,###.00"
            }
        },
        {
            name: "photo",
            kind: "storage",
            scope: "public",
            type: "image"
        },
        {
            name: "employer",
            kind: "relatedEntity",
            scope: "public",
            type: "Company",
            path: "Company"
        },
        {
            name: "employerName",
            kind: "alias",
            scope: "public",

            type: "string",
            path: "employer.name",
            readOnly: true
        },
        {
            name: "description",
            kind: "storage",
            scope: "public",
            type: "string",
            multiLine: true
        },
   ],
    key: [
        {
            name: "ID"
        }
    ]
}
````

