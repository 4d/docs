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

With `$method=delete`, you can delete an entity or an entire entity collection. You can define the collection of entities by using, for example, [`$filter`]($filter.md) or specifying one directly using [`{dataClass}({key})`](%7BdataClass%7D.html#dataclasskey) _(e.g._, /Employee(22)).

You can also delete the entities in an entity set, by calling [`$entityset/{entitySetID}`]($entityset.md#entitysetentitysetid).

### Exemplo

Pode então escrever o seguinte pedido REST para eliminar a entidade cuja chave é 22:

`POST  /rest/Employee(22)/?$method=delete`

Também é possível efetuar uma consulta utilizando $filter:

`POST  /rest/Employee?$filter="ID=11"&$method=delete`

Também é possível eliminar um conjunto de entidades utilizando $entityset/{entitySetID}:

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

Quando cria uma coleção de entidades em REST, pode também criar um conjunto de entidades que será guardado na cache do 4D Server. The entity set will have a reference number that you can pass to `$entityset/{entitySetID}` to access it. Por padrão, é válido durante duas horas; no entanto, pode modificar esse tempo passando um valor (em segundos) para $timeout.

If you have used `$savedfilter` and/or `$savedorderby` (in conjunction with `$filter` and/or `$orderby`) when you created your entity set, you can recreate it with the same reference ID even if it has been removed from 4D Server's cache.

### Exemplo

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

`$method=subentityset` allows you to sort the data returned by the relation attribute defined in the REST request.

To sort the data, you use the `$subOrderby` property. Para cada atributo, especifica a ordem como ASC (ou asc) para ordem ascendente e DESC (desc) para ordem descendente. Por defeito, os dados são ordenados por ordem ascendente.

If you want to specify multiple attributes, you can delimit them with a comma, µ, `$subOrderby="lastName desc, firstName asc"`.

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

`$method=update` allows you to update and/or create one or more entities in a single **POST**. If you update and/or create one entity, it is done in an object with each property an attribute with its value, _e.g._, `{ lastName: "Smith" }`. Se forem atualizadas e/ou criadas várias entidades, é necessário criar uma coleção de objetos.

In any cases, you must set the **POST** data in the **body** of the request.

To update an entity, you must pass the `__KEY` and `__STAMP` parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your **POST**.

Os triggers são executados imediatamente ao guardar a entidade no servidor. A resposta contém todos os dados tal como existem no servidor.

You can also put these requests to create or update entities in a transaction by calling `$atomic/$atOnce`. Se ocorrerem erros durante a validação de dados, nenhuma das entidades é guardada. You can also use `$method=validate` to validate the entities before creating or updating them.

Se surgir um problema ao adicionar ou modificar uma entidade, ser-lhe-á enviado um erro com essa informação.

:::note

- **Dates** must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). Se tiver selecionado a propriedade Apenas data para o seu atributo Data, o fuso horário e a hora (hora, minutos e segundos) serão removidos. Neste caso, também pode enviar a data no formato que lhe é devolvido dd!mm!yyyy (por exemplo, 05!10!2013).
- **Booleans** are either true or false.
- Uploaded files using `$upload` can be applied to an attribute of type Image or BLOB by passing the object returned in the following format `{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}`
  :::

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
