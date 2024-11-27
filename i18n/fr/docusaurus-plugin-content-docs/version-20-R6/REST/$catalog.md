---
id: catalog
title: $catalog
---

Le catalogue décrit l'ensemble des dataclass, attributs et [shared singletons (singletons partagés)](../Concepts/classes.md#classes-singleton) disponibles dans le projet.

## Syntaxe

| Syntaxe                                                                 | Exemple                | Description                                                                                                                                                    |
| ----------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                                                | `/$catalog`            | Retourne les [shared singletons](#singletons) (s'il y en a) et une liste des dataclass dans votre projet ainsi que deux URIs                |
| [**$catalog/$all**](#catalogall)                                        | `/$catalog/$all`       | Retourne les [shared singletons](#singletons) (s'il y en a) et des informations sur toutes les dataclass de votre projet et leurs attributs |
| [**$catalog/\{dataClass\}**](#catalogdataclass)                       | `/$catalog/Employee`   | Renvoie des informations sur une dataclass et ses attributs                                                                                                    |
| [**$catalog/DataStoreClassFunction**](ClassFunctions.md#function-calls) | `/$catalog/authentify` | Exécute la fonction de datastore class authentify() si elle existe                                                                          |

## $catalog

Retourne les [shared singletons](#singletons) (s'il y en a) et une liste des dataclass de votre projet avec chacune deux URI : un pour accéder aux informations sur sa structure et un pour récupérer les données dans la dataclass.

### Description

Lorsque vous appelez `$catalog`, une liste des dataclass est retournée avec deux URI pour chaque dataclass dans le datastore de votre projet.

Seules les dataclass exposées apparaissent dans cette liste pour le datastore de votre projet. Pour plus d'informations, veuillez vous reporter à la section [**Exposer les tables et les champs**](configuration.md#exposing-tables-and-fields).

Voici une description des propriétés retournées pour chaque dataclass dans le datastore de votre projet :

| Propriété | Type | Description                                                                                          |
| --------- | ---- | ---------------------------------------------------------------------------------------------------- |
| name      | Text | Nom de la dataclass.                                                                 |
| uri       | Text | Un URI vous permettant d'obtenir des informations sur la dataclass et ses attributs. |
| dataURI   | Text | URI vous permettant d'afficher les données dans la dataclass.                        |

### Exemple

`GET  /rest/$catalog`

**Résultat** :

```json
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
```

## $catalog/$all

Retourne les [shared singletons](#singletons) (s'il y en a) et des informations sur toutes les dataclass de votre projet et leurs attributs

### Description

En appelant `$catalog/$all`, vous pouvez recevoir des informations détaillées sur les attributs de chacune des dataclasses du modèle de votre projet.

Pour plus d'informations sur ce qui est renvoyé pour chaque dataclass et ses attributs, utilisez [`$catalog/\dataClass\}`](#catalogdataclass).

### Exemple

`GET  /rest/$catalog/$all`

**Résultat** :

```json
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
```

## $catalog/\{dataClass\}

Renvoie des informations sur une dataclass et ses attributs

### Description

L'appel de `$catalog/\{dataClass\}` pour une dataclass spécifique renverra les informations suivantes sur la dataclass et les attributs qu'elle contient. Si vous souhaitez récupérer ces informations pour toutes les dataclasses dans le datastore de votre projet, utilisez [`$catalog/$all`](#catalogall).

Les informations que vous récupérez concernent :

- Dataclass
- Attribut(s)
- Méthode(s) le cas échéant
- Clé primaire

### DataClass

Les propriétés suivantes sont retournées pour une dataclass exposée :

| Propriété      | Type   | Description                                                                                                                                             |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nom de la dataclass                                                                                                                                     |
| collectionName | Text   | Nom d'une entity selection dans la dataclass                                                                                                            |
| tableNumber    | Number | Numéro de la table dans la base 4D                                                                                                                      |
| scope          | Text   | Scope de la dataclass (à noter que seules les dataclasses dont le **Scope** (portée) est publique sont affichées) |
| dataURI        | Text   | Un URI aux données de la dataclass                                                                                                                      |

### Attribut(s)

Voici les propriétés de chaque attribut exposé qui sont retournées :

| Propriété   | Type    | Description                                                                                                                                                                                                |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | Text    | Le nom de l’attribut.                                                                                                                                                                      |
| kind        | Text    | Type d'attribut (stockage ou relatedEntity).                                                                                                                            |
| fieldPos    | Number  | Position du champ dans la table de la base.                                                                                                                                                |
| scope       | Text    | Portée de l'attribut (seuls les attributs dont la portée est publique apparaîtront).                                                                                    |
| indexed     | Text    | Si un **type d'index** a été sélectionné, cette propriété retournera true. Sinon, cette propriété n'apparaîtra pas.                                                        |
| type        | Text    | Type d'attribut de chaîne (booléen, blob, octet, date, durée, image, long, long64, numérique, chaîne, uuid ou mot) ou la dataclasse pour un attribut de relation N-> 1. |
| identifying | Boolean | Cette propriété retourne True si l'attribut est la clé primaire. Sinon, cette propriété n'apparaîtra pas.                                                                  |
| path        | Text    | Nom de la dataclass pour un attribut relatedEntity, ou nom de la relation pour un attribut relatedEntities.                                                                                |
| foreignKey  | Text    | Pour un attribut relatedEntity, nom de l'attribut associé.                                                                                                                                 |
| inverseName | Text    | Nom de la relation opposée pour un attribut relatedEntity ou relatedEntities.                                                                                                              |

### Clé primaire

L'objet clé retourne le nom de l'attribut (**name**) défini comme **clé primaire** pour la dataclass.

### Exemple

Vous pouvez récupérer les informations concernant une dataclass spécifique.

`GET  /rest/$catalog/Employee`

**Résultat** :

```json
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
```

## singletons

Si vous avez défini des [shared singletons](../Concepts/classes.md#singleton-classes) contenant au moins une [fonction exposée](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions), une section `singletons` est ajoutée au json retourné pour les syntaxes `/$catalog` et `/$catalog/$all`. Il contient la collection des classes singleton sous forme d'objets avec leur **name** et **methods** (c'est-à-dire les fonctions exposées).

Les fonctions singleton peuvent être appelées par des requêtes REST à l'aide de la commande [`$singleton`]($singleton.md).

### Exemple

`GET  /rest/$catalog/$all`

**Résultat** :

```json
{...
	singletons": [
    {
      "name": "VehicleFactory",
      "methods": [
        {
          "name": "buildVehicle",
          "allowedOnHTTPGET": false,
          "exposed": true
        }
      ]
    }
  ],

	dataClasses: [...]
}
```
