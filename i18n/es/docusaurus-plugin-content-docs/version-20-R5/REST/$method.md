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

With `$method=delete`, you can delete an entity or an entire entity collection. You can define the collection of entities by using, for example, [`$filter`]($filter.md) or specifying one directly using [`{dataClass}({key})`](%7BdataClass%7D.html#dataclasskey) _(e.g._, /Employee(22)).

You can also delete the entities in an entity set, by calling [`$entityset/{entitySetID}`]($entityset.md#entitysetentitysetid).

### Ejemplo

A continuación, puede escribir la siguiente petición REST para eliminar la entidad cuya llave es 22:

`POST  /rest/Employee(22)/?$method=delete`

También se puede hacer una petición de información utilizando $filter:

`POST  /rest/Employee?$filter="ID=11"&$method=delete`

También puede eliminar un conjunto de entidades utilizando $entityset/{entitySetID}:

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

Cuando se crea una colección de entidades en REST, también se puede crear un conjunto de entidades que se guardará en la caché de 4D Server. The entity set will have a reference number that you can pass to `$entityset/{entitySetID}` to access it. Por defecto, es válido durante dos horas; sin embargo, puede modificar esa cantidad de tiempo pasando un valor (en segundos) a $timeout.

If you have used `$savedfilter` and/or `$savedorderby` (in conjunction with `$filter` and/or `$orderby`) when you created your entity set, you can recreate it with the same reference ID even if it has been removed from 4D Server's cache.

### Ejemplo

To create an entity set, which will be saved in 4D Server's cache for two hours, add `$method=entityset` at the end of your REST request:

`GET  /rest/People/?$filter="ID>320"&$method=entityset`

You can create an entity set that will be stored in 4D Server's cache for only ten minutes by passing a new timeout to `$timeout`:

`GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

You can also save the filter and order by, by passing true to `$savedfilter` and `$savedorderby`.

> `$skip` and `$top/$limit` are not taken into consideration when saving an entity set.

After you create an entity set, the first element, `__ENTITYSET`, is added to the object returned and indicates the URI to use to access the entity set:

```json
__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`
```

## $method=release

Libera un conjunto de entidades existente almacenado en la caché de 4D Server.

### Descripción

You can release an entity set, which you created using [`$method=entityset`](#methodentityset), from 4D Server's cache.

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

`$method=subentityset` allows you to sort the data returned by the relation attribute defined in the REST request.

To sort the data, you use the `$subOrderby` property. Para cada atributo, se define el orden como ASC (o asc) para el orden ascendente y DESC (desc) para el orden descendente. Por defecto, los datos se clasifican en orden ascendente.

If you want to specify multiple attributes, you can delimit them with a comma, µ, `$subOrderby="lastName desc, firstName asc"`.

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

`$method=update` allows you to update and/or create one or more entities in a single **POST**. If you update and/or create one entity, it is done in an object with each property an attribute with its value, _e.g._, `{ lastName: "Smith" }`. Si actualiza y/o crea varias entidades, debe crear una colección de objetos.

In any cases, you must set the **POST** data in the **body** of the request.

To update an entity, you must pass the `__KEY` and `__STAMP` parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your **POST**.

Los triggers se ejecutan inmediatamente al guardar la entidad en el servidor. La respuesta contiene todos los datos tal y como existen en el servidor.

You can also put these requests to create or update entities in a transaction by calling `$atomic/$atOnce`. Si se produce algún error durante la validación de los datos, no se guarda ninguna de las entidades. You can also use `$method=validate` to validate the entities before creating or updating them.

Si surge un problema al añadir o modificar una entidad, se le devolverá un error con esa información.

:::note

- **Dates** must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). Si ha seleccionado la propiedad Fecha únicamente para su atributo Fecha, se eliminará la zona horaria y la hora (hora, minutos y segundos). En este caso, también puede enviar la fecha en el formato que se le devuelve dd!mm!aaaa (por ejemplo, 05!10!2013).
- **Booleans** are either true or false.
- Uploaded files using `$upload` can be applied to an attribute of type Image or BLOB by passing the object returned in the following format `{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}`
  :::

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
