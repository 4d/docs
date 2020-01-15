---
id: catalog
title: '$catalog'
---


The catalog describes all the dataclasses and attributes available in the datastore.


## Available syntaxes

| Syntax                                        | 例題                   | 説明                                                                               |
| --------------------------------------------- | -------------------- | -------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                      | `/$catalog`          | Returns a list of the dataclasses in your project along with two URIs            |
| [**$catalog/$all**](#catalogall)              | `/$catalog/$all`     | Returns information about all of your project's dataclasses and their attributes |
| [**$catalog/{dataClass}**](#catalogdataclass) | `/$catalog/Employee` | Returns information about a dataclass and its attributes                         |


## $catalog
Returns a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass


### 説明

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

Here is a description of the properties returned for each dataclass in your project's datastore:


| Property | タイプ | 説明                                                                                |
| -------- | --- | --------------------------------------------------------------------------------- |
| name     | 文字  | Name of the dataclass.                                                            |
| uri      | 文字  | A URI allowing you to obtain information about the |dataclass and its attributes. |
| dataURI  | 文字  | A URI that allows you to view the data in the dataclass.                          |


### 例題

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

### 説明

Calling `$catalog/$all` allows you to receive detailed information about the attributes in each of the datastore classes in your project's active model. Remember that the scope for the datastore classes and their attributes must be **Public** for any information to be returned.

For more information about what is returned for each datastore class and its attributes, use [`$catalog/{dataClass}`](#catalogdataClass).


### 例題

`GET  /rest/$catalog/$all`

**Result**:

````
{

    "dataClasses": [
        {
            "name": "Company",
            "className": "Company",
            "collectionName": "CompanyCollection",
            "scope": "public",
            "dataURI": "/rest/Company",
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
                    "name": "name",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "revenues",
                    "kind": "storage",
                    "scope": "public",
                    "type": "number"
                },
                {
                    "name": "staff",
                    "kind": "relatedEntities",
                    "matchColumn": "employees,staff",
                    "scope": "public",
                    "type": "EmployeeCollection",
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
            "collectionName": "EmployeeCollection",
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

### 説明

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the datastore classes in your project's datastore, use [`$catalog/$all`](#catalogall).

The information you retrieve concerns the following:

*   Dataclass
*   Attribute(s)
*   Method(s) if any
*   Primary key

### DataClass

The following properties are returned for an exposed dataclass:


| Property       | タイプ | 説明                                                                                                 |
| -------------- | --- | -------------------------------------------------------------------------------------------------- |
| name           | 文字  | Name of the dataclass                                                                              |
| collectionName | 文字  | Collection name of the dataclass                                                                   |
| scope          | 文字  | Scope for the dataclass (note that only datastore classes whose **Scope** is public are displayed) |
| dataURI        | 文字  | A URI to the data in the dataclass                                                                 |


### Attribute(s)

Here are the properties for each exposed attribute that are returned:

| Property      | タイプ    | 説明                                                                                                                                                          |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | 文字     | Attribute name.                                                                                                                                             |
| kind          | 文字     | Attribute type (storage, calculated, relatedEntity, and alias).                                                                                             |
| scope         | 文字     | Scope of the attribute (only those attributes whose scope is Public will appear).                                                                           |
| indexed       | 文字     | If any **Index Kind** was selected, this property will return true. Otherwise, this property does not appear.                                               |
| type          | 文字     | Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the datastore class for a N->1 relation attribute. |
| minLength     | 数値     | This property returns the value entered for the **Min Length** property, if one was entered.                                                                |
| maxLength     | 数値     | This property returns the value entered for the **Max Length** property, if one was entered.                                                                |
| autoComplete  | ブール    | This property returns True if the **Autocomplete** property was checked. Otherwise, this property does not appear.                                          |
| identifying   | ブール    | This property returns True if the **Identifying** property was checked. Otherwise, this property does not appear.                                           |
| multiLine     | ブール    | This property returns True if the **Multiline** property was checked. Otherwise, this property does not appear.                                             |
| path          | 文字     | For an alias attribute, the type is a path (*e.g.*, employer.name)                                                                                          |
| readOnly      | ブール    | This property is True if the attribute is of type calculated or alias.                                                                                      |
| defaultFormat | オブジェクト | If you define a format for the attribute in the **Default Format** property, it will appear in the "format" property.                                       |

### Method(s)

Defines the project methods asociated to the dataclass, if any.

### Primary Key

The key object returns the **name** of the attribute defined as the **Primary Key** for the datastore class.


### 例題
You can retrieve the information regarding a specific datastore class.

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

