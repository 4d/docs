---
id: dataClass
title: dataClass
---

Os nomes de dataclass podem ser utilizados diretamente nos pedidos REST para trabalhar com entidades e selecções de entidades, ou funções de classe da dataclass.

## Sintaxe disponível

| Sintaxe                                                                                                                              | Exemplo                               | Descrição                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                                                                                        | `/Employee`                           | Retorna todos os dados (como padrão as primeiras 100 entidades) para a dataclass |
| [**{dataClass}[{key}]**](#dataclasskey)                                          | `/Employee[22]`                       | Retorna os dados para a entidade especifica definida pela chave primária da classe de dados         |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)                                    | `/Employee:firstName(John)`           | Retorna os dados para uma entidade na qual os valores de atributo são definidas                     |
| [**{dataClass}/{DataClassClassFunction}**](ClassFunctions.md#function-calls)                                                         | `/City/getCity`                       | Executa uma função de classe de uma dataclass                                                       |
| [**{dataClass}/{EntitySelectionClassFunction}**](ClassFunctions.md#function-calls)                                                   | `/City/getPopulation/?$filter="ID<3"` | Executa uma função de classe de uma seleção de entidade                                             |
| [**{dataClass}[{key}]/{EntityClassFunction}**](ClassFunctions.md#function-calls) | `City[2]/getPopulation`               | Executa uma função de classe de uma entidade                                                        |

> Function calls are detailed in the [Calling ORDA class functions](ClassFunctions.md) section.

## {dataClass}

Returns all the data (by default the first 100 entities) for a specific dataclass (_e.g._, `Company`)

### Descrição

When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using [`$top/$limit`]($top_$limit.md).

Aqui está uma descrição dos dados retornados:

| Propriedade                                             | Tipo       | Descrição                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | String     | Nome da dataclass.                                                                                                                                                                                                     |
| __COUNT       | Number     | Número de entidades na classe de dados.                                                                                                                                                                                |
| __SENT        | Number     | Número de entidades enviadas pela petição REST. This number can be the total number of entities if it is less than the value defined by `$top/$limit`.                                                 |
| __FIRST       | Number     | Número de entidade em que a seleção vai começar. Either 0 by default or the value defined by `$skip`.                                                                                                  |
| __ENTITIES    | Collection | Esta coleção de objetos contém um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais são retornados como objetos com uma URI para obter informação sobre o objeto pai. |

Cada entidade contém as propriedades abaixo:

| Propriedade                                           | Tipo   | Descrição                                                                                                                  |
| ----------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | String | Valor da chave primária definida para a classe de dados.                                                   |
| __TIMESTAMP | Date   | Registro de hora da última modificação da entidade                                                                         |
| __STAMP     | Number | Internal stamp that is needed when you modify any of the values in the entity when using `$method=update`. |

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por exemplo:

`GET  /rest/Company/name,address`

### Exemplo

Retorna todas as datas para uma classe de dados específica.

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

## {dataClass}\[{key}]

Returns the data for the specific entity defined by the dataclass's primary key, _e.g._, `Company[22]` or `Company[IT0911AB2200]`

### Descrição

Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade. Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{DataClass}](#dataclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por exemplo:

`GET  /rest/Company[1]/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

`GET  /rest/Company[1]/name,address,staff?$expand=staff`

### Exemplo

A petição abaixo retorna todos os dados públicos na dataclass Company cuja chave é 1.

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

## {dataClass}:{attribute}(value)

Retorna os dados para uma entidade na qual os valores de atributo são definidas

### Descrição

By passing the _dataClass_ and an _attribute_ along with a value, you can retrieve all the public information for that entity. O valor é um valor único para o atributo, mas não é a chave primária.

`GET  /rest/Company:companyCode(Acme001)`

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por exemplo:

`GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

`GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemplo

A petição abaixo retorna todos os dados públicos do funcionário chamado "Jones".

`GET  /rest/Employee:lastname(Jones)`
