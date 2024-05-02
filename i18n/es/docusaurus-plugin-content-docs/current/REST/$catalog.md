---
id: catalog
title: $catalog
---

El catálogo describe todas las clases de datos y atributos disponibles en el almacén de datos.

## Sintaxis disponible

| Sintaxis                                                                | Ejemplo                | Descripción                                                                       |
| ----------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                                                | `/$catalog`            | Devuelve una lista de las clases de datos de su proyecto junto con dos URIs       |
| [**$catalog/$all**](#catalogall)                                        | `/$catalog/$all`       | Devuelve información sobre todas las clases de datos del proyecto y sus atributos |
| [**$catalog/{dataClass}**](#catalogdataclass)                           | `/$catalog/Employee`   | Devuelve información sobre una clase de datos y sus atributos                     |
| [**$catalog/DataStoreClassFunction**](ClassFunctions.md#function-calls) | `/$catalog/authentify` | Ejecuta la función de la clase del datastore si existe                            |

## $catalog

Devuelve una lista de las clases de datos de su proyecto junto con dos URI: una para acceder a la información sobre su estructura y otra para recuperar los datos de la clase de datos

### Descripción

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

En esta lista sólo se muestran las clases de datos expuestas para el almacén de datos de su proyecto. For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

A continuación se describen las propiedades devueltas para cada clase de datos en el almacén de datos de su proyecto:

| Propiedad | Tipo   | Descripción                                                                                     |
| --------- | ------ | ----------------------------------------------------------------------------------------------- |
| name      | String | Nombre de la dataclass.                                                         |
| uri       | String | Un URI que permite obtener información sobre la clase de datos y sus atributos. |
| dataURI   | String | Un URI que permite ver los datos en la clase de datos.                          |

### Ejemplo

`GET /rest/$catalog`

**Resultado**:

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

Devuelve información sobre todas las clases de datos del proyecto y sus atributos

### Descripción

Calling `$catalog/$all` allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model.

For more information about what is returned for each dataclass and its attributes, use [`$catalog/{dataClass}`](#catalogdataClass).

### Ejemplo

`GET /rest/$catalog/$all`

**Resultado**:

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

Devuelve información sobre una clase de datos y sus atributos

### Descripción

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use [`$catalog/$all`](#catalogall).

La información que recupera se refiere a lo siguiente:

- Dataclass
- Atributo(s)
- Método(s) si lo hay
- Llave primaria

### DataClass

Las siguientes propiedades se devuelven para una clase de datos expuesta:

| Propiedad      | Tipo   | Descripción                                                                                                     |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| name           | String | Nombre de la dataclass                                                                                          |
| collectionName | String | Nombre de una selección de entidades en la clase de datos                                                       |
| tableNumber    | Number | Número de tabla en la base 4D                                                                                   |
| scope          | String | Scope for the dataclass (note that only dataclasses whose **Scope** is public are displayed) |
| dataURI        | String | Un URI a los datos de la clase de datos                                                                         |

### Atributo(s)

Aquí están las propiedades de cada atributo expuesto que se devuelven:

| Propiedad   | Tipo    | Descripción                                                                                                                                                                              |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | String  | El nombre del atributo.                                                                                                                                                  |
| kind        | String  | Tipo de atributo (almacenamiento o entidad relacionada).                                                                                              |
| fieldPos    | Number  | Posición del campo en la tabla de la base).                                                                                                                              |
| scope       | String  | Alcance del atributo (sólo aparecerán los atributos cuyo alcance sea Público).                                                                        |
| indexed     | String  | If any **Index Kind** was selected, this property will return true. En caso contrario, esta propiedad no aparece.                                        |
| type        | String  | Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute. |
| identifying | Boolean | Esta propiedad devuelve True si el atributo es la llave primaria. En caso contrario, esta propiedad no aparece.                                          |
| path        | String  | Nombre de la clase de datos para un atributo relatedEntity, o nombre de la relación para un atributo relatedEntities.                                                    |
| foreignKey  | String  | Para un atributo relatedEntity, nombre del atributo relacionado.                                                                                                         |
| inverseName | String  | Nombre de la relación opuesta para un atributo relatedEntity o relateEntities.                                                                                           |

### Llave primaria

The key object returns the **name** of the attribute defined as the **Primary Key** for the dataclass.

### Ejemplo

Puede recuperar la información relativa a una clase de datos específica.

`GET  /rest/$catalog/Employee`

**Resultado**:

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
