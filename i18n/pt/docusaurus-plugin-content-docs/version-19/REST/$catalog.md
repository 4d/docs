---
id: catalog
title: '$catalog'
---


The catalog describes all the dataclasses and attributes available in the datastore.


## Sintaxe

| Sintaxe                                       | Exemplo              | Descrção                                                                         |
| --------------------------------------------- | -------------------- | -------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                      | `/$catalog`          | Returns a list of the dataclasses in your project along with two URIs            |
| [**$catalog/$all**](#catalogall)              | `/$catalog/$all`     | Returns information about all of your project's dataclasses and their attributes |
| [**$catalog/{dataClass}**](#catalogdataclass) | `/$catalog/Employee` | Returns information about a dataclass and its attributes                         |


## $catalog
Returns a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass


### Descrção

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

Here is a description of the properties returned for each dataclass in your project's datastore:


| Propriedade | Tipo   | Descrção                                                                         |
| ----------- | ------ | -------------------------------------------------------------------------------- |
| name        | String | Nome da dataclass.                                                               |
| uri         | String | A URI allowing you to obtain information about the dataclass and its attributes. |
| dataURI     | String | A URI that allows you to view the data in the dataclass.                         |


### Exemplo

`GET  /rest/$catalog`

**Resultadoi**:

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

Returns information about all of your project's dataclasses and their attributes

### Descrção

Chamando `$catalog/$all` pode reciber informação detalhada sobre os atributos de cada uma das classes de dados do modelo ativo de projeto.

Para saber mais sobre o que se devolve para cada classe de dados e seus atributos, utilize [`$catalog/{dataClass}`](#catalogdataClass).


### Exemplo

`GET  /rest/$catalog/$all`

**Resultadoi**:

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

Returns information about a dataclass and its attributes

### Descrção

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. Se quiser recuperar essa informação para todas as classes de dados do armazém de dados de seu projeto, use [`$catalog/$all`](#catalogall).

The information you retrieve concerns the following:

*   Dataclass
*   Attribute(s)
*   Method(s) if any
*   Primary key

### DataClass

The following properties are returned for an exposed dataclass:


| Propriedade    | Tipo   | Descrção                                                                                                  |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| name           | String | Nome da dataclass                                                                                         |
| collectionName | String | Name of an entity selection on the dataclass                                                              |
| tableNumber    | Número | Table number in the 4D database                                                                           |
| scope          | String | Alcance da classe de dados (lembre que só são mostradas as classes de dados cujo **Alcance** for público) |
| dataURI        | String | A URI to the data in the dataclass                                                                        |


### Attribute(s)

Here are the properties for each exposed attribute that are returned:

| Propriedade | Tipo     | Descrção                                                                                                                                                             |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | String   | Attribute name.                                                                                                                                                      |
| kind        | String   | Attribute type (storage or relatedEntity).                                                                                                                           |
| fieldPos    | Número   | Position of the field in the database table).                                                                                                                        |
| scope       | String   | Scope of the attribute (only those attributes whose scope is Public will appear).                                                                                    |
| indexed     | String   | If any **Index Kind** was selected, this property will return true. Otherwise, this property does not appear.                                                        |
| type        | String   | Tipo de atributo (booleano, blob, byte, data, duração, imagem, long, long64, número, string, uuid ou palavra) ou a classe de dados para um atributo de relação N->1. |
| identifying | Booleano | This property returns True if the attribute is the primary key. Otherwise, this property does not appear.                                                            |
| path        | String   | Name of the dataclass for a relatedEntity attribute, or name of the relation for a relatedEntities attribute.                                                        |
| foreignKey  | String   | For a relatedEntity attribute, name of the related attribute.                                                                                                        |
| inverseName | String   | Name of the opposite relation for a relatedEntity or relateEntities attribute.                                                                                       |


### Primary Key

O objeto chave devolve o nome do atributo **name** definido como **chave primária** para a classe de dados.


### Exemplo
Pode recuperar a informação relativa a uma classe de dados específica.

`GET  /rest/$catalog/Employee`

**Resultadoi**:

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

