---
id: method
title: $method
---

Este parámetro permite definir la operación a ejecutar con la entidad o selección de entidades devuelta.

## Sintaxis disponible

| Sintaxis                                        | Ejemplo                                                                                 | Descripción                                                                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [**$method=delete**](#methoddelete)             | `POST /Employee?$filter="ID=11"& $method=delete`                                        | Elimina la entidad actual, la colección de entidades o la selección de entidades                                          |
| [**$method=entityset**](#methodentityset)       | `GET /People/?$filter="ID>320"& $method=entityset& $timeout=600`                        | Crea un conjunto de entidades en la caché de 4D Server basado en la colección de entidades definidas en la solicitud REST |
| [**$method=release**](#methodrelease)           | `GET /Employee/$entityset/<entitySetID>?$method=release`                                | Libera un conjunto de entidades existente almacenado en la caché de 4D Server                                             |
| [**$method=subentityset**](#methodsubentityset) | `GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC` | Crea un conjunto de entidades basado en la colección de entidades relativas definidas en la petición REST                 |
| [**$method=update**](#methodupdate)             | `POST /Person/?$method=update`                                                          | Actualiza y/o crea una o varias entidades                                                                                 |

## $method=delete

Elimina la entidad actual, la colección de entidades o la selección de entidad actual (creada vía REST)

### Descripción

Con `$method=delete`, puede eliminar una entidad o una colección de entidades entera. Puede definir la colección de entidades utilizando, por ejemplo, [`$filter`]($filter.md) o especificando una directamente utilizando [`{dataClass\}(\{key\})`](dataClass.md#dataclasskey) _(p.ej._, /Employee(22)).

También puede eliminar las entidades en un conjunto de entidades, llamando a [`$entityset/\{entitySetID\}`]($entityset.md#entitysetentitysetid).

### Ejemplo

A continuación, puede escribir la siguiente petición REST para eliminar la entidad cuya llave es 22:

`POST  /rest/Employee(22)/?$method=delete`

También se puede hacer una petición de información utilizando $filter:

`POST  /rest/Employee?$filter="ID=11"&$method=delete`

También puede eliminar un conjunto de entidades utilizando $entityset/\{entitySetID\}:

`POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete`

Respuesta:

```json
{
    "ok": true
}
```

## $method=entityset

Crea un conjunto de entidades en la caché de 4D Server basado en la colección de entidades definidas en la solicitud REST

### Descripción

Cuando se crea una colección de entidades en REST, también se puede crear un conjunto de entidades que se guardará en la caché de 4D Server. El conjunto de entidades tendrá un número de referencia que puede pasar a `$entityset/\{entitySetID\}` para acceder a él. Por defecto, es válido durante dos horas; sin embargo, puede modificar esa cantidad de tiempo pasando un valor (en segundos) a $timeout.

Si ha utilizado `$savedfilter` y/o `$savedorderby` (junto con `$filter` y/o `$orderby`) cuando creó su conjunto de entidades, puede volver a crearlo con el mismo ID de referencia aunque se haya eliminado de la caché de 4D Server.

### Ejemplo

Para crear un conjunto de entidades, que se guardará en la caché de 4D Server durante dos horas, añada `$method=entityset` al final de su petición REST:

`GET  /rest/People/?$filter="ID>320"&$method=entityset`

Puede crear un conjunto de entidades que se almacenará en la caché de 4D Server durante sólo diez minutos pasando un nuevo tiempo de espera a `$timeout`:

`GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

También puede guardar el filtro y ordenar por, pasando true a `$savedfilter` y `$savedorderby`.

> `$skip` y `$top/$limit` no se tienen en cuenta al guardar un conjunto de entidades.

Después de crear un conjunto de entidades, el primer elemento, `__ENTITYSET`, se añade al objeto devuelto e indica la URI a utilizar para acceder al conjunto de entidades:

```json
__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`
```

## $method=release

Libera un conjunto de entidades existente almacenado en la caché de 4D Server.

### Descripción

Puede liberar un entity set, que creó utilizando [`$method=entityset`](#methodentityset), de la caché del servidor 4D.

### Ejemplo

Muestra un conjunto de entidades existente:

`GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release`

#### Respuesta:

Si la petición fue exitosa, se devuelve la siguiente respuesta:

```json
{
    "ok": true
}
Si no se encuentra el conjunto de entidades, se devuelve un error:

{
    "__ERROR": [
        {
             "message": "Error code: 1802\nEntitySet  \"4C51204DD8184B65AC7D79F09A077F24\" cannot be found\ncomponent:  'dbmg'\ntask 22, name: 'HTTP connection handler'\n",
            "componentSignature": "dbmg",
            "errCode": 1802
        }
    ]
}
```

## $method=subentityset

Crea un conjunto de entidades en la caché de 4D Server basado en la colección de entidades relativas definidas en la petición REST

### Descripción

`$method=subentityset` permite ordenar los datos devueltos por el atributo relacional definido en la petición REST.

Para ordenar los datos, se utiliza la propiedad `$subOrderby`. Para cada atributo, se define el orden como ASC (o asc) para el orden ascendente y DESC (desc) para el orden descendente. Por defecto, los datos se clasifican en orden ascendente.

Si desea especificar varios atributos, puede delimitarlos con una coma, µ, `$subOrderby="lastName desc, firstName asc"`.

### Ejemplo

Si quiere recuperar sólo las entidades relacionadas para una entidad específica, puede hacer la siguiente petición REST donde personal es el atributo de relación en la clase de datos Company vinculada a la clase de datos Employee:

` GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC`

#### Respuesta:

```json
{

    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",
    "__entityModel": "Employee",
    "__COUNT": 2,
    "__SENT": 2,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "4",
            "__STAMP": 1,
            "ID": 4,
            "firstName": "Linda",
            "lastName": "Jones",
            "birthday": "1970-10-05T14:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        },
        {
            "__KEY": "1",
            "__STAMP": 3,
            "ID": 1,
            "firstName": "John",
            "lastName": "Smith",
            "birthday": "1985-11-01T15:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        }
    ]

}
```

## $method=update

Actualiza y/o crea una o varias entidades

### Descripción

`$method=update` le permite actualizar y/o crear una o más entidades en un solo **POST**. Si se actualiza y/o crea una entidad, se efectúa en un objeto con, para cada propiedad, un atributo y su valor, _por ejemplo_ `{ lastName: "Smith" }`. Si actualiza y/o crea varias entidades, debe crear una colección de objetos.

En cualquier caso, debe definir los **POST** datos en el **body** de la petición.

Para actualizar una entidad, debes pasar los parámetros `__KEY` y `__STAMP` en el objeto junto con todos los atributos modificados. Si faltan ambos parámetros, se añadirá una entidad con los valores del objeto que envíe en el cuerpo de su **POST**.

Los triggers se ejecutan inmediatamente al guardar la entidad en el servidor. La respuesta contiene todos los datos tal y como existen en el servidor.

También puede poner estas solicitudes para crear o actualizar entidades en una transacción llamando a `$atomic/$atOnce`. Si se produce algún error durante la validación de los datos, no se guarda ninguna de las entidades. También puede utilizar `$method=validate` para validar las entidades antes de crearlas o actualizarlas.

Si surge un problema al añadir o modificar una entidad, se le devolverá un error con esa información.

:::note

- **Las fechas** deben expresarse en formato JS: YYYY-MM-DDTHH:MM:SSZ (por ejemplo, "2010-10-05T23:00:00Z"). Si ha seleccionado la propiedad Fecha únicamente para su atributo Fecha, se eliminará la zona horaria y la hora (hora, minutos y segundos). En este caso, también puede enviar la fecha en el formato que se le devuelve dd!mm!aaaa (por ejemplo, 05!10!2013).
- **Booleanos** son true o false.
- Los archivos subidos mediante `$upload` pueden aplicarse a un atributo de tipo Imagen o BLOB pasando el objeto devuelto en el siguiente formato `{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}`:::

### Ejemplo

Para actualizar una entidad específica, se utiliza la siguiente URL:

`POST  /rest/Person/?$method=update`

**POST data:**

```json
{
    __KEY: "340",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Miller"
}
```

Los atributos firstName y lastName de la entidad indicada anteriormente se modificarán dejando todos los demás atributos (excepto los calculados basados en estos atributos) sin cambios.

Si quiere crear una entidad, puede enviar, vía POST los atributos utilizando esta URL:

`POST  /rest/Person/?$method=update`

**POST data:**

```json
{
    firstName: "John",
    lastName: "Smith"
}
```

También puede crear y actualizar múltiples entidades al mismo tiempo utilizando la misma URL anterior pasando múltiples objetos en un array al POST:

`POST  /rest/Person/?$method=update`

**POST data:**

```json
[{
    "__KEY": "309",
    "__STAMP": 5,
    "ID": "309",
    "firstName": "Penelope",
    "lastName": "Miller"
}, {
    "firstName": "Ann",
    "lastName": "Jones"
}]
```

**Response:**

Cuando añade o modifica una entidad, se devuelve con los atributos modificados. Por ejemplo, si se crea el nuevo empleado anterior, se devolverá lo siguiente:

```json
{
    "__KEY": "622",
    "__STAMP": 1,
    "uri": "http://127.0.0.1:8081/rest/Employee(622)",
    "__TIMESTAMP": "!!2020-04-03!!",
    "ID": 622,
    "firstName": "John",
    "firstName": "Smith"
}
```

Si, por ejemplo, el sello no es correcto, se devuelve el siguiente error:

```json
{
    "__STATUS": {
        "status": 2,
        "statusText": "Stamp has changed",
        "success": false
    },
    "__KEY": "1",
    "__STAMP": 12,
    "__TIMESTAMP": "!!2020-03-31!!",
    "ID": 1,
    "firstname": "Denise",
    "lastname": "O'Peters",
    "isWoman": true,
    "numberOfKids": 1,
    "addressID": 1,
    "gender": true,
    "imageAtt": {
        "__deferred": {
            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",
            "image": true
        }
    },
    "extra": {
        "num": 1,
        "alpha": "I am 1"
    },
    "address": {
        "__deferred": {
            "uri": "/rest/Address(1)",
            "__KEY": "1"
        }
    },
    "__ERROR": [
        {
            "message": "Given stamp does not match current one for record# 0 of table Persons",
            "componentSignature": "dbmg",
            "errCode": 1263
        },
        {
            "message": "Cannot save record 0 in table Persons of database remote_dataStore",
            "componentSignature": "dbmg",
            "errCode": 1046
        },
        {
            "message": "The entity# 1 in the \"Persons\" dataclass cannot be saved",
            "componentSignature": "dbmg",
            "errCode": 1517
        }
    ]
}{}

```
