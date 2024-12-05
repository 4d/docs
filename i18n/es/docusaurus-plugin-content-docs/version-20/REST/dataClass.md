---
id: dataClass
title: dataClass
---

Los nombres de dataclass pueden utilizarse directamente en las peticiones REST para trabajar con entidades, selecciones de entidades o funciones de clase de la dataclass.

## Sintaxis disponible

| Sintaxis                                                                               | Ejemplo                                  | Descripción                                                                                     |
| -------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [**\{dataClass\}**](#dataClass)                                                      | `/Employee`                              | Devuelve todos los datos (por defecto las 100 primeras entidades) de la clase de datos          |
| [**\{dataClass\}[{key}]**](#dataclasskey)                                            | `/Employee[22]`                          | Devuelve los datos de la entidad específica definida por la llave primaria de la clase de datos |
| [**\{dataClass\}:\{attribute\}(value)**](#dataclassattributevalue)                 | `/Employee:firstName(John)`              | Devuelve los datos de una entidad en la que está definido el valor del atributo                 |
| [**\{dataClass\}/{DataClassClassFunction}**](ClassFunctions.md#function-calls)       | `/City/getCity`                          | Ejecuta una función de clase de una dataclass                                                   |
| [**\{dataClass\}/{EntitySelectionClassFunction}**](ClassFunctions.md#function-calls) | `/City/getPopulation/?$filter="ID<3"` | Ejecuta una función de clase de una selección de entidades                                      |
| [**\{dataClass\}[{key}]/{EntityClassFunction}**](ClassFunctions.md#function-calls)   | `City[2]/getPopulation`                  | Ejecuta una función de clase de una entidad                                                     |

> Las llamadas a las funciones se detallan en la sección [Llamar las funciones de la clase ORDA](ClassFunctions.md).



## \{dataClass\}

Devuelve todos los datos (por defecto las 100 primeras entidades) para una clase de datos específica (*por ejemplo*, `Company`)

### Descripción

Cuando se llama a este parámetro en la petición REST, se devuelven las 100 primeras entidades, a menos que se haya especificado un valor con [`$top/$limit`]($top_$limit.md).

A continuación se describen los datos devueltos:

| Propiedad     | Tipo       | Descripción                                                                                                                                                                                             |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | Text       | Nombre de la dataclass.                                                                                                                                                                                 |
| __COUNT       | Number     | Número de entidades en la clase de datos.                                                                                                                                                               |
| __SENT        | Number     | Número de entidades enviadas por la petición REST. Este número puede ser el número total de entidades si es menor que el valor definido por `$top/$limit`.                                              |
| __FIRST       | Number     | Número de entidad en la que comienza la selección. O bien 0 por defecto o el valor definido por `$skip`.                                                                                                |
| __ENTITIES    | Collection | Esta colección de objetos contiene un objeto para cada entidad con todos sus atributos. Todos los atributos relacionales se devuelven como objetos con una URI para obtener información sobre el padre. |

Cada entidad contiene las siguientes propiedades:

| Propiedad   | Tipo   | Descripción                                                                                                        |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| __KEY       | Text   | Valor de la llave primaria definida para la clase de datos.                                                        |
| __TIMESTAMP | Fecha  | Marca de tiempo de la última modificación de la entidad                                                            |
| __STAMP     | Number | Sello interno que se necesita cuando se modifica alguno de los valores de la entidad al utilizar `$method=update`. |

Si quiere especificar qué atributos quiere devolver, defínalos utilizando la siguiente sintaxis [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company/name,address`



### Ejemplo

Devuelve todos los datos de una clase de datos específica.

 `GET  /rest/Company`

**Resultado**:

```json
{
    "__entityModel": "Company",
    "__GlobalStamp": 51,
    "__COUNT": 250,
    "__SENT": 100,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
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
            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",
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
            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",
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
            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",
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
.....//more entities here 
    ]
}
```


## \{dataClass\}\[{key}]

Devuelve los datos de la entidad específica definida por la llave primaria de la clase de datos, *por ejemplo*, `Company[22]` o `Company[IT0911AB2200]`

### Descripción

Pasando la clase de datos y una llave, se puede recuperar toda la información pública de esa entidad. Pasando la clase de datos y una llave, se puede recuperar toda la información pública de esa entidad. Para más información sobre la definición de una llave primaria, consulte la sección **Modifying the Primary Key** en el **Editor del modelo de datos**.

Para obtener más información sobre los datos devueltos, consulte [\{dataClass\}](#dataclass).

Si quiere especificar qué atributos quiere devolver, defínalos utilizando la siguiente sintaxis [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company[1]/name,address`

Si desea expandir un atributo de relación utilizando `$expand`, lo hará especificándolo como se muestra a continuación:

 `GET  /rest/Company[1]/name,address,staff?$expand=staff`

### Ejemplo

La siguiente petición devuelve todos los datos públicos de la clase de datos Company cuya llave es 1.

 `GET  /rest/Company[1]`

**Resultado**:

```json
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
    "__STAMP": 2,
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
```



## \{dataClass\}:\{attribute\}(value)

Devuelve los datos de una entidad en la que está definido el valor del atributo

### Descripción

Pasando la *clase de datos* y un *atributo* junto con un valor, se puede recuperar toda la información pública de esa entidad. El valor es un valor único para el atributo, pero no es la llave primaria.

 `GET  /rest/Company:companyCode(Acme001)`

Si quiere especificar qué atributos quiere devolver, defínalos utilizando la siguiente sintaxis [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por ejemplo:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

Si desea utilizar un atributo relacional utilizando [$attributes.md">]($attributes.md), lo hará especificándolo como se muestra a continuación:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Ejemplo

La siguiente petición devuelve todos los datos públicos del empleado llamado "Jones".

 `GET  /rest/Employee:lastname(Jones)`

