---
id: catalog
title: '$catalog'
---


The catalog describes all the dataclasses and attributes available in the datastore.


## Available syntaxes

| Syntax                                        | Beispiel             | Beschreibung                                                                     |
| --------------------------------------------- | -------------------- | -------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                      | `/$catalog`          | Returns a list of the dataclasses in your project along with two URIs            |
| [**$catalog/$all**](#catalogall)              | `/$catalog/$all`     | Returns information about all of your project's dataclasses and their attributes |
| [**$catalog/{dataClass}**](#catalogdataclass) | `/$catalog/Employee` | Returns information about a dataclass and its attributes                         |


## $catalog
Returns a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass


### Beschreibung

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

Here is a description of the properties returned for each dataclass in your project's datastore:


| Property | Typ    | Beschreibung                                                                     |
| -------- | ------ | -------------------------------------------------------------------------------- |
| name     | String | Name of the dataclass.                                                           |
| uri      | String | A URI allowing you to obtain information about the dataclass and its attributes. |
| dataURI  | String | A URI that allows you to view the data in the dataclass.                         |


### Beispiel

`GET  /rest/$catalog`

**Result**:

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

### Beschreibung

Calling `$catalog/$all` allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model.

For more information about what is returned for each dataclass and its attributes, use [`$catalog/{dataClass}`](#catalogdataClass).


### Beispiel

`GET  /rest/$catalog/$all`

**Result**:

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

### Beschreibung

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use [`$catalog/$all`](#catalogall).

The information you retrieve concerns the following:

*   Dataclass
*   Attribute(s)
*   Method(s) if any
*   Primary key

### DataClass

The following properties are returned for an exposed dataclass:


| Property       | Typ    | Beschreibung                                                                                 |
| -------------- | ------ | -------------------------------------------------------------------------------------------- |
| name           | String | Name of the dataclass                                                                        |
| collectionName | String | Name of an entity selection on the dataclass                                                 |
| tableNumber    | Zahl   | Table number in the 4D database                                                              |
| scope          | String | Scope for the dataclass (note that only dataclasses whose **Scope** is public are displayed) |
| dataURI        | String | A URI to the data in the dataclass                                                           |


### Attribute(s)

Here are the properties for each exposed attribute that are returned:

| Property    | Typ     | Beschreibung                                                                                                                                          |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | String  | Attribute name.                                                                                                                                       |
| kind        | String  | Attribute type (storage or relatedEntity).                                                                                                            |
| fieldPos    | Zahl    | Position of the field in the database table).                                                                                                         |
| scope       | String  | Scope of the attribute (only those attributes whose scope is Public will appear).                                                                     |
| indexed     | String  | If any **Index Kind** was selected, this property will return true. Otherwise, this property does not appear.                                         |
| typ         | String  | Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute. |
| identifying | Boolean | This property returns True if the attribute is the primary key. Otherwise, this property does not appear.                                             |
| path        | String  | Name of the dataclass for a relatedEntity attribute, or name of the relation for a relatedEntities attribute.                                         |
| foreignKey  | String  | For a relatedEntity attribute, name of the related attribute.                                                                                         |
| inverseName | String  | Name of the opposite relation for a relatedEntity or relateEntities attribute.                                                                        |


### Primary Key

The key object returns the **name** of the attribute defined as the **Primary Key** for the dataclass.


### Beispiel
You can retrieve the information regarding a specific dataclass.

`GET  /rest/$catalog/Employee`

**Result**:

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

