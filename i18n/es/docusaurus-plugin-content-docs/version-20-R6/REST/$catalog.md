---
id: catalog
title: $catalog
---

El catálogo describe todas las clases de datos, atributos y [singletoneos interproceso (compartidos)](../Concepts/classes.md#singleton-classes) disponibles en el proyecto.

## Sintaxis disponible

| Sintaxis                                                                | Ejemplo                | Descripción                                                                                                                                                    |
| ----------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**$catalog**](#catalog)                                                | `/$catalog`            | Devuelve [shared singletons](#singletons) (si existe) y una lista de las clases de datos de su proyecto junto con dos URIs                  |
| [**$catalog/$all**](#catalogall)                                        | `/$catalog/$all`       | Devuelve los [singletons compartidos](#singletons) (si los hay) e información sobre todas las bases de datos de su proyecto y sus atributos |
| [**$catalog/\{dataClass\}**](#catalogdataclass)                       | `/$catalog/Employee`   | Devuelve información sobre una clase de datos y sus atributos                                                                                                  |
| [**$catalog/DataStoreClassFunction**](ClassFunctions.md#function-calls) | `/$catalog/authentify` | Ejecuta la función de la clase del datastore si existe                                                                                                         |

## $catalog

Devuelve [shared singletons](#singletons) (si existe) y una lista de las clases de datos de su proyecto junto con dos URIs: una para acceder a la información sobre su estructura y otra para recuperar los datos de la clase de datos

### Descripción

Cuando se llama a `$catalog`, se devuelve una lista de las clases de datos junto con dos URI para cada clase de datos en el almacén de datos de su proyecto.

En esta lista sólo se muestran las clases de datos expuestas para el almacén de datos de su proyecto. Para más información, consulte la sección [**Exponer tablas y campos**](configuration.md#exposing-tables-and-fields).

A continuación se describen las propiedades devueltas para cada clase de datos en el almacén de datos de su proyecto:

| Propiedad | Tipo | Descripción                                                                                     |
| --------- | ---- | ----------------------------------------------------------------------------------------------- |
| name      | Text | Nombre de la dataclass.                                                         |
| uri       | Text | Un URI que permite obtener información sobre la clase de datos y sus atributos. |
| dataURI   | Text | Un URI que permite ver los datos en la clase de datos.                          |

### Ejemplo

`GET /rest/$catalog`

**Resultado**:

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

Devuelve los [singletons compartidos](#singletons) (si los hay) e información sobre todas las bases de datos de su proyecto y sus atributos

### Descripción

Llamando `$catalog/$all` puede recibir información detallada sobre los atributos de cada una de las clases de datos del modelo activo del proyecto.

Para obtener más información sobre lo que se devuelve para cada clase de datos y sus atributos, utilice [`$catalog/\{dataClass\}`](#catalogdataClass).

### Ejemplo

`GET /rest/$catalog/$all`

**Resultado**:

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

Devuelve información sobre una clase de datos y sus atributos

### Descripción

La llamada de `$catalog/\{dataClass\}` para una clase de datos específica devolverá la siguiente información sobre la clase de datos y los atributos que contiene. Si quiere recuperar esta información para todas las dataclasses de su proyecto, utilice [`$catalog/$all`](#catalogall).

La información que recupera se refiere a lo siguiente:

- Dataclass
- Atributo(s)
- Método(s) si lo hay
- Llave primaria

### DataClass

Las siguientes propiedades se devuelven para una clase de datos expuesta:

| Propiedad      | Tipo   | Descripción                                                                                                                            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nombre de la dataclass                                                                                                                 |
| collectionName | Text   | Nombre de una selección de entidades en la clase de datos                                                                              |
| tableNumber    | Number | Número de tabla en la base 4D                                                                                                          |
| scope          | Text   | Alcance de la clase de datos (tenga en cuenta que sólo se muestran las clases de datos cuyo **Alcance** es público) |
| dataURI        | Text   | Un URI a los datos de la clase de datos                                                                                                |

### Atributo(s)

Aquí están las propiedades de cada atributo expuesto que se devuelven:

| Propiedad   | Tipo    | Descripción                                                                                                                                                                                              |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | Text    | El nombre del atributo.                                                                                                                                                                  |
| kind        | Text    | Tipo de atributo (almacenamiento o entidad relacionada).                                                                                                              |
| fieldPos    | Number  | Posición del campo en la tabla de la base).                                                                                                                                              |
| scope       | Text    | Alcance del atributo (sólo aparecerán los atributos cuyo alcance sea Público).                                                                                        |
| indexed     | Text    | Si se seleccionó algún **tipo de índice**, esta propiedad devolverá true. En caso contrario, esta propiedad no aparece.                                                  |
| type        | Text    | Tipo de atributo (booleano, blob, byte, fecha, duración, imagen, long, long64, número, cadena, uuid o palabra) o la clase de datos para un atributo de relación N->1. |
| identifying | Boolean | Esta propiedad devuelve True si el atributo es la llave primaria. En caso contrario, esta propiedad no aparece.                                                          |
| path        | Text    | Nombre de la clase de datos para un atributo relatedEntity, o nombre de la relación para un atributo relatedEntities.                                                                    |
| foreignKey  | Text    | Para un atributo relatedEntity, nombre del atributo relacionado.                                                                                                                         |
| inverseName | Text    | Nombre de la relación opuesta para un atributo relatedEntity o relateEntities.                                                                                                           |

### Llave primaria

El objeto llave devuelve el nombre del atributo **name** definido como **llave primaria** para la clase de datos.

### Ejemplo

Puede recuperar la información relativa a una clase de datos específica.

`GET  /rest/$catalog/Employee`

**Resultado**:

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

Si ha definido [singletons compartidos](../Concepts/classes.md#singleton-classes) que contienen al menos una [función expuesta](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions), se agrega una sección `singletons` al json devuelto tanto para la sintaxis `/$catalog` como `/$catalog/$all`. Contiene la colección de clases singleton como objetos con su **nombre** y **métodos** (es decir, funciones expuestas).

Las funciones Singleton pueden ser llamadas por peticiones REST utilizando el comando [`$singleton`]($singleton.md).

### Ejemplo

`GET /rest/$catalog/$all`

**Resultado**:

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
