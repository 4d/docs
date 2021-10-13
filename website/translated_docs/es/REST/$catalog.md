---
id: catalog
title: '$catalog'
---


The catalog describes all the dataclasses and attributes available in the datastore.


## Sintaxis disponible

| Sintaxis                                      | Ejemplo              | Descripción                                                                      |
| --------------------------------------------- | -------------------- | -------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                      | `/$catalog`          | Returns a list of the dataclasses in your project along with two URIs            |
| [**$catalog/$all**](#catalogall)              | `/$catalog/$all`     | Returns information about all of your project's dataclasses and their attributes |
| [**$catalog/{dataClass}**](#catalogdataclass) | `/$catalog/Employee` | Returns information about a dataclass and its attributes                         |


## $catalog
Returns a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass


### Descripción

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

Here is a description of the properties returned for each dataclass in your project's datastore:


| Propiedad | Tipo   | Descripción                                                                       |
| --------- | ------ | --------------------------------------------------------------------------------- |
| name      | Cadena | Nombre de la dataclass.                                                           |
| uri       | Cadena | A URI allowing you to obtain information about the |dataclass and its attributes. |
| dataURI   | Cadena | A URI that allows you to view the data in the dataclass.                          |


### Ejemplo

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

### Descripción

Llamando `$catalog/$all` puede recibir información detallada sobre los atributos de cada una de las clases de datos del modelo activo del proyecto.

Para más información sobre lo que se devuelve para cada clase de datos y sus atributos, utilice [`$catalog/{dataClass}`](#catalogdataClass).


### Ejemplo

`GET /rest/$catalog/$all`

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

### Descripción

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. Si quiere recuperar esta información para todas las clases de datos del almacén de datos de su proyecto, utilice [`$catalog/$all`](#catalogall).

The information you retrieve concerns the following:

*   Dataclass
*   Atributo(s)
*   Método(s) si lo hay
*   Llave primaria

### DataClass

The following properties are returned for an exposed dataclass:


| Propiedad      | Tipo   | Descripción                                                                                                         |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| name           | Cadena | Nombre de la dataclass                                                                                              |
| collectionName | Cadena | Name of an entity selection on the dataclass                                                                        |
| tableNumber    | Número | Table number in the 4D database                                                                                     |
| scope          | Cadena | Alcance de la clase de datos (tenga en cuenta que sólo se muestran las clases de datos cuyo **Alcance** es público) |
| dataURI        | Cadena | A URI to the data in the dataclass                                                                                  |


### Atributo(s)

Here are the properties for each exposed attribute that are returned:

| Propiedad   | Tipo     | Descripción                                                                                                                                                           |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | Cadena   | El nombre del atributo.                                                                                                                                               |
| kind        | Cadena   | Attribute type (storage or relatedEntity).                                                                                                                            |
| fieldPos    | Número   | Position of the field in the database table).                                                                                                                         |
| scope       | Cadena   | Scope of the attribute (only those attributes whose scope is Public will appear).                                                                                     |
| indexed     | Cadena   | If any **Index Kind** was selected, this property will return true. Otherwise, this property does not appear.                                                         |
| type        | Cadena   | Tipo de atributo (booleano, blob, byte, fecha, duración, imagen, long, long64, número, cadena, uuid o palabra) o la clase de datos para un atributo de relación N->1. |
| identifying | Booleano | This property returns True if the attribute is the primary key. Otherwise, this property does not appear.                                                             |
| path        | Cadena   | Name of the dataclass for a relatedEntity attribute, or name of the relation for a relatedEntities attribute.                                                         |
| foreignKey  | Cadena   | For a relatedEntity attribute, name of the related attribute.                                                                                                         |
| inverseName | Cadena   | Name of the opposite relation for a relatedEntity or relateEntities attribute.                                                                                        |


### Primary Key

El objeto llave devuelve el nombre del atributo **name** definido como **llave primaria** para la clase de datos.


### Ejemplo
Puede recuperar la información relativa a una clase de datos específica.

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

