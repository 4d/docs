---
id: method
title: '$method'
---

Este parâmetro permite-lhe definir a operação a executar com a entidade ou a seleção de entidades devolvida.

## Sintaxe disponível

| Sintaxe                                         | Exemplo                                                                                         | Descrição                                                                                                    |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [**$method=delete**](#methoddelete)             | `POST /Employee?$filter="ID=11"& $method=delete`                                            | Elimina a entidade, coleção de entidades ou seleção de entidades atual                                       |
| [**$method=entityset**](#methodentityset)       | `GET /People/?$filter="ID>320"& $method=entityset& $timeout=600`                     | Cria um conjunto de entidades no cache do 4D Server baseado na coleção de entidades definidas no pedido REST |
| [**$method=release**](#methodrelease)           | `GET /Employee/$entityset/<entitySetID>?$method=release`                                  | Libera um conjunto de entidades existente armazenado no cache do 4D Server                                   |
| [**$method=subentityset**](#methodsubentityset) | `GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC` | Cria um conjunto de entidades com base na coleção de entidades relacionadas definidas no pedido REST         |
| [**$method=update**](#methodupdate)             | `POST /Person/?$method=update`                                                                  | Actualiza e/ou cria uma ou mais entidades                                                                    |





## $method=delete

Elimina a entidade, coleção de entidades ou seleção de entidades atual (criada através de REST)


### Descrição

Com `$method=delete`, é possível eliminar uma entidade ou toda uma coleção de entidades. Pode definir a coleção de entidades utilizando, por exemplo, [`$filter`]($filter.md) ou especificando uma diretamente utilizando [`\{dataClass\}({key})`](%7BdataClass%7D.html#dataclasskey) *(e.g.*, /Employee(22)).

Também é possível eliminar as entidades de um conjunto de entidades, chamando [`$entityset/\{entitySetID\}`]($entityset.md#entitysetentitysetid).

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

Quando cria uma coleção de entidades em REST, pode também criar um conjunto de entidades que será guardado na cache do 4D Server. O conjunto de entidades terá um número de referência que pode ser passado para `$entityset/\{entitySetID\}` para aceder ao mesmo. Por padrão, é válido durante duas horas; no entanto, pode modificar esse tempo passando um valor (em segundos) para $timeout.

Se usou `$savedfilter` e/ou `$savedorderby` (em conjunto com `$filter` e/ou `$orderby`) quando criou seu conjunto de entidades, pode recriá-lo com o mesmo ID de referência mesmo que tenha sido removido do cache de 4D Server.

### Exemplo

Para criar um conjunto de entidades, que será guardado no cache do 4D Server por duas horas, adicione `$method=entityset` no final do seu pedido REST:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset`

Pode criar um conjunto de entidades que será armazenado na cache do 4D Server por apenas dez minutos, passando um novo timeout para `$timeout`:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

Também é possível guardar o filtro e ordenar por, passando true para `$savedfilter` e `$savedorderby`.
> `$skip` e `$top/$limit` não são tidos em consideração quando se guarda um conjunto de entidades.

Após criar um conjunto de entidades, o primeiro elemento, `__ENTITYSET`, é adicionado ao objeto devolvido e indica o URI a utilizar para aceder ao conjunto de entidades:

```json
__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`
```



## $method=release

Libera um conjunto de entidades existente armazenado no cache do 4D Server.

### Descrição

Você pode liberar um conjunto de entidades, que você criou usando [`$method=entityset`](#methodentityset), do cache de 4D Server.

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

`$method=subentityset` permite-lhe ordenar os dados devolvidos pelo atributo relacional definido no pedido REST.

Para ordenar os dados, utilize a propriedade `$subOrderby`. Para cada atributo, especifica a ordem como ASC (ou asc) para ordem ascendente e DESC (desc) para ordem descendente. Por defeito, os dados são ordenados por ordem ascendente.

Se pretender especificar vários atributos, pode delimitá-los com uma vírgula, µ, `$subOrderby="lastName desc, firstName asc"`.

### Exemplo

Se pretender recuperar apenas as entidades relacionadas para uma entidade específica, pode efetuar o seguinte pedido REST em que staff é o atributo de relação na dataclass Company ligada à dataclass Employee:

`GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC`

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

`$method=update` permite-lhe atualizar e/ou criar uma ou mais entidades num único **POST**. Se atualizar e/ou criar uma entidade, isso é feito num objeto em que cada propriedade é um atributo com o respetivo valor, *por exemplo*, `{ lastName: "Smith" }`. Se forem atualizadas e/ou criadas várias entidades, é necessário criar uma coleção de objetos.

Em qualquer caso, é necessário definir os dados **POST** no corpo **** do pedido.

Para atualizar uma entidade, é necessário passar os parâmetros `__KEY` e `__STAMP` no objeto, com quaisquer atributos modificados. Se ambos os parâmetros estiverem em falta, será adicionada uma entidade com os valores do objeto que enviar no corpo do seu **POST**.

Os triggers são executados imediatamente ao guardar a entidade no servidor. A resposta contém todos os dados tal como existem no servidor.

Também é possível colocar estes pedidos para criar ou atualizar entidades numa transação, chamando `$atomic/$atOnce`. Se ocorrerem erros durante a validação de dados, nenhuma das entidades é guardada. Pode também utilizar `$method=validate` para validar as entidades antes de as criar ou atualizar.

Se surgir um problema ao adicionar ou modificar uma entidade, ser-lhe-á enviado um erro com essa informação.

:::note
*   **As datas** devem ser expressas no formato YYYY-MM-DDTHH:MM:SSZ (por exemplo, "2010-10-05T23:00:00Z"). Se tiver selecionado a propriedade Apenas data para o seu atributo Data, o fuso horário e a hora (hora, minutos e segundos) serão removidos. Neste caso, também pode enviar a data no formato que lhe é devolvido dd!mm!yyyy (por exemplo, 05!10!2013).
*   **Booleanos** são true ou false.
*   Os ficheiros carregados utilizando `$upload` podem ser aplicados a um atributo do tipo Imagem ou BLOB passando o objecto devolvido no seguinte formato `{"ID": "D507BC03E613487E9B4C2F6A0512FE50"}` :::


### Exemplo

Para atualizar uma entidade específica, utilizar o seguinte URL:

 `POST  /rest/Person/?$method=update`

**Dados POST:**

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

**Dados POST:**

```json
{ 
    firstName: "John",
    lastName: "Smith"
}
```

Também é possível criar e atualizar várias entidades em simultâneo, utilizando o mesmo URL acima, passando vários objetos num array para o POST:

 `POST  /rest/Person/?$method=update`

**Dados POST:**

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

**Responsa:**

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
