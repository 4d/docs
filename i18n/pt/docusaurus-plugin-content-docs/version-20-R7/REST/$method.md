---
id: method
title: $method
---

Este parâmetro permite-lhe definir a operação a executar com a entidade ou a seleção de entidades devolvida.

## Sintaxe disponível

| Sintaxe                                         | Exemplo                                                                                 | Descrição                                                                                                    |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [**$method=delete**](#methoddelete)             | `POST /Employee?$filter="ID=11"& $method=delete`                                        | Elimina a entidade, coleção de entidades ou seleção de entidades atual                                       |
| [**$method=entityset**](#methodentityset)       | `GET /People/?$filter="ID>320"& $method=entityset& $timeout=600`                        | Cria um conjunto de entidades no cache do 4D Server baseado na coleção de entidades definidas no pedido REST |
| [**$method=release**](#methodrelease)           | `GET /Employee/$entityset/<entitySetID>?$method=release`                                | Libera um conjunto de entidades existente armazenado no cache do 4D Server                                   |
| [**$method=subentityset**](#methodsubentityset) | `GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC` | Cria um conjunto de entidades com base na coleção de entidades relacionadas definidas no pedido REST         |
| [**$method=update**](#methodupdate)             | `POST /Person/?$method=update`                                                          | Actualiza e/ou cria uma ou mais entidades                                                                    |

## $method=delete

Elimina a entidade, coleção de entidades ou seleção de entidades atual (criada através de REST)

### Descrição

Con `$method=delete`, puede eliminar una entidad o una colección de entidades entera. You can define the collection of entities by using, for example, [`$filter`]($filter.md) or specifying one directly using [`\{dataClass\}(\{key\})`](dataClass.md#dataclasskey) _(e.g._, /Employee(22)).

You can also delete the entities in an entity set, by calling [`$entityset/\{entitySetID\}`]($entityset.md#entitysetentitysetid).

### Exemplo

Pode então escrever o seguinte pedido REST para eliminar a entidade cuja chave é 22:

`POST  /rest/Employee(22)/?$method=delete`

Também é possível efetuar uma consulta utilizando $filter:

`POST  /rest/Employee?$filter="ID=11"&$method=delete`

Também é possível eliminar um conjunto de entidades utilizando $entityset/\{entitySetID\}:

`POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete`

Responsa:

```json
{
    "ok": true
}
```

## $method=entityset

Cria um conjunto de entidades no cache do 4D Server baseado na coleção de entidades definidas no pedido REST

### Descrição

Quando cria uma coleção de entidades em REST, pode também criar um conjunto de entidades que será guardado na cache do 4D Server. The entity set will have a reference number that you can pass to `$entityset/\{entitySetID\}` to access it. Por padrão, é válido durante duas horas; no entanto, pode modificar esse tempo passando um valor (em segundos) para $timeout.

Si ha utilizado `$savedfilter` y/o `$savedorderby` (junto con `$filter` y/o `$orderby`) cuando creó su conjunto de entidades, puede volver a crearlo con el mismo ID de referencia aunque se haya eliminado de la caché de 4D Server.

### Exemplo

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

Libera um conjunto de entidades existente armazenado no cache do 4D Server.

### Descrição

You can release an entity set, which you created using [`$method=entityset`](#methodentityset), from 4D Server's cache.

### Exemplo

Mostra um conjunto de entidades existente:

`GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release`

#### Responsa:

Se o pedido for bem sucedido, é devolvida a seguinte resposta:

```json
{
    "ok": true
} If the entity set wasn't found, an error is returned:

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

Cria um conjunto de entidades no cache do 4D Server baseado na coleção de entidades relacionadas definidas no pedido REST

### Descrição

`$method=subentityset` permite ordenar los datos devueltos por el atributo relacional definido en la petición REST.

Para ordenar los datos, se utiliza la propiedad `$subOrderby`. Para cada atributo, especifica a ordem como ASC (ou asc) para ordem ascendente e DESC (desc) para ordem descendente. Por defeito, os dados são ordenados por ordem ascendente.

Si desea especificar varios atributos, puede delimitarlos con una coma, µ, `$subOrderby="lastName desc, firstName asc"`.

### Exemplo

Se pretender recuperar apenas as entidades relacionadas para uma entidade específica, pode efetuar o seguinte pedido REST em que staff é o atributo de relação na dataclass Company ligada à dataclass Employee:

` GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC`

#### Responsa:

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

Actualiza e/ou cria uma ou mais entidades

### Descrição

`$method=update` le permite actualizar y/o crear una o más entidades en un solo **POST**. Si se actualiza y/o crea una entidad, se efectúa en un objeto con, para cada propiedad, un atributo y su valor, _por ejemplo_ `{ lastName: "Smith" }`. Se forem atualizadas e/ou criadas várias entidades, é necessário criar uma coleção de objetos.

En cualquier caso, debe definir los **POST** datos en el **body** de la petición.

Para actualizar una entidad, debes pasar los parámetros `__KEY` y `__STAMP` en el objeto junto con todos los atributos modificados. Si faltan ambos parámetros, se añadirá una entidad con los valores del objeto que envíe en el cuerpo de su **POST**.

Os triggers são executados imediatamente ao guardar a entidade no servidor. A resposta contém todos os dados tal como existem no servidor.

También puede poner estas solicitudes para crear o actualizar entidades en una transacción llamando a `$atomic/$atOnce`. Se ocorrerem erros durante a validação de dados, nenhuma das entidades é guardada. También puede utilizar `$method=validate` para validar las entidades antes de crearlas o actualizarlas.

Se surgir um problema ao adicionar ou modificar uma entidade, ser-lhe-á enviado um erro com essa informação.

:::note

- **Las fechas** deben expresarse en formato JS: YYYY-MM-DDTHH:MM:SSZ (por ejemplo, "2010-10-05T23:00:00Z"). Se tiver selecionado a propriedade Apenas data para o seu atributo Data, o fuso horário e a hora (hora, minutos e segundos) serão removidos. Neste caso, também pode enviar a data no formato que lhe é devolvido dd!mm!yyyy (por exemplo, 05!10!2013).
- **Booleanos** son true o false.
- Los archivos subidos mediante `$upload` pueden aplicarse a un atributo de tipo Imagen o BLOB pasando el objeto devuelto en el siguiente formato `{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}`:::

### Exemplo

Para atualizar uma entidade específica, utilizar o seguinte URL:

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

Os atributos firstName e lastName na entidade indicada acima serão modificados, deixando todos os outros atributos (exceto os calculados com base nestes atributos) inalterados.

Se você quiser criar uma entidade, poderá enviar os atributos via POST usando este URL:

`POST  /rest/Person/?$method=update`

**POST data:**

```json
{
    firstName: "John",
    lastName: "Smith"
}
```

Também é possível criar e atualizar várias entidades em simultâneo, utilizando o mesmo URL acima, passando vários objetos num array para o POST:

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

Quando se adiciona ou modifica uma entidade, esta é-lhe devolvida com os atributos modificados. Por exemplo, se criar o novo empregado acima, ser-lhe-á devolvido o seguinte:

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

Se, por exemplo, o carimbo não estiver correto, é apresentado o seguinte erro:

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
