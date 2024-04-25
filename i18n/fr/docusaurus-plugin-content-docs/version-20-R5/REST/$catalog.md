---
id: catalog
title: $catalog
---

Le catalogue décrit toutes les dataclass et les attributs disponibles dans le datastore.

## Syntaxe

| Syntaxe                                                                 | Exemple                | Description                                                                            |
| ----------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                                                | `/$catalog`            | Retourne une liste des dataclasse de votre projet avec deux URI                        |
| [**$catalog/$all**](#catalogall)                                        | `/$catalog/$all`       | Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs |
| [**$catalog/{dataClass}**](#catalogdataclass)                           | `/$catalog/Employee`   | Renvoie des informations sur une dataclass et ses attributs                            |
| [**$catalog/DataStoreClassFunction**](ClassFunctions.md#function-calls) | `/$catalog/authentify` | Executes the datastore class function if it exists                                     |

## $catalog

Retourne une liste de dataclass dans votre projet avec deux URI : une pour accéder aux informations sur sa structure et une pour récupérer les données de la dataclass

### Description

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

Seules les dataclass exposées apparaissent dans cette liste pour le datastore de votre projet. For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

Voici une description des propriétés retournées pour chaque dataclass dans le datastore de votre projet :

| Propriété | Type   | Description                                                                                          |
| --------- | ------ | ---------------------------------------------------------------------------------------------------- |
| name      | String | Nom de la dataclass.                                                                 |
| uri       | String | Un URI vous permettant d'obtenir des informations sur la dataclass et ses attributs. |
| dataURI   | String | URI vous permettant d'afficher les données dans la dataclass.                        |

### Exemple

`GET  /rest/$catalog`

**Result**:

```
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

Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs

### Description

Calling `$catalog/$all` allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model.

For more information about what is returned for each dataclass and its attributes, use [`$catalog/{dataClass}`](#catalogdataClass).

### Exemple

`GET  /rest/$catalog/$all`

**Result**:

```
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

## $catalog/{dataClass}

Renvoie des informations sur une dataclass et ses attributs

### Description

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use [`$catalog/$all`](#catalogall).

Les informations que vous récupérez concernent :

- Dataclass
- Attribut(s)
- Méthode(s) le cas échéant
- Clé primaire

### DataClass

Les propriétés suivantes sont retournées pour une dataclass exposée :

| Propriété      | Type   | Description                                                                                                     |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| name           | String | Nom de la dataclass                                                                                             |
| collectionName | String | Nom d'une entity selection dans la dataclass                                                                    |
| tableNumber    | Number | Numéro de la table dans la base 4D                                                                              |
| scope          | String | Scope for the dataclass (note that only dataclasses whose **Scope** is public are displayed) |
| dataURI        | String | Un URI aux données de la dataclass                                                                              |

### Attribut(s)

Voici les propriétés de chaque attribut exposé qui sont retournées :

| Propriété   | Type    | Description                                                                                                                                                                              |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | String  | Le nom de l’attribut.                                                                                                                                                    |
| kind        | String  | Type d'attribut (stockage ou relatedEntity).                                                                                                          |
| fieldPos    | Number  | Position du champ dans la table de la base.                                                                                                                              |
| scope       | String  | Portée de l'attribut (seuls les attributs dont la portée est publique apparaîtront).                                                                  |
| indexed     | String  | If any **Index Kind** was selected, this property will return true. Sinon, cette propriété n'apparaîtra pas.                                             |
| type        | String  | Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute. |
| identifying | Boolean | Cette propriété retourne True si l'attribut est la clé primaire. Sinon, cette propriété n'apparaîtra pas.                                                |
| path        | String  | Name of the dataclass for a relatedEntity attribute, or name of the relation for a relatedEntities attribute.                                                            |
| foreignKey  | String  | Pour un attribut relatedEntity, nom de l'attribut associé.                                                                                                               |
| inverseName | String  | Nom de la relation opposée pour un attribut relatedEntity ou relatedEntities.                                                                                            |

### Clé primaire

The key object returns the **name** of the attribute defined as the **Primary Key** for the dataclass.

### Exemple

Vous pouvez récupérer les informations concernant une dataclass spécifique.

`GET  /rest/$catalog/Employee`

**Result**:

```
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
