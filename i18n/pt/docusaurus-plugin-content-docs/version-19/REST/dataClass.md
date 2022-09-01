---
id: dataClass
title: dataClass
---



Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass.

## Sintaxe

| Sintaxe                                                                            | Exemplo                                  | Descrção                                                                                    |
| ---------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                                      | `/Employee`                              | Retorna todos os dados (como padrão as primeiras 100 entidades) para a dataclass            |
| [**{dataClass}({key})**](#dataclasskey)                                            | `/Employee(22)`                          | Retorna os dados para a entidade especifica definida pela chave primária da classe de dados |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)                     | `/Employee:firstName(John)`              | Retorna os dados para uma entidade na qual os valores de atributo são definidas             |
| [**{dataClass}/{DataClassClassFunction}**](ClassFunctions.md#function-calls)       | `/City/getCity`                          | Executes a dataclass class function                                                         |
| [**{dataClass}({EntitySelectionClassFunction}**](ClassFunctions.md#function-calls) | `/City/getPopulation/?$filter="ID<3"` | Executes an entity selection class function                                                 |
| [**{dataClass}({key})/{EntityClassFunction}**](ClassFunctions.md#function-calls)   | `City(2)/getPopulation`                  | Executes an entity class function                                                           |

> Function calls are detailed in the [Calling ORDA class functions](ClassFunctions.md) section.

## {dataClass}

Retorna todos os dados (como padrão as primeiras 100 entidades) para uma classe de dados específica (*por exemplo *, `Company`)

### Descrção

Quando chamar este parâmetro em sua petição REST, as primeiras 100 entidades são retornadas a menos que tenha especificado um valor usando [`$top/$limit`]($top_$limit.md).

Aqui está uma descrição dos dados retornados:

| Propriedade   | Tipo       | Descrção                                                                                                                                                                                               |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __entityModel | String     | Nome da dataclass.                                                                                                                                                                                     |
| __COUNT       | Número     | Número de entidades na classe de dados.                                                                                                                                                                |
| __SENT        | Número     | Número de entidades enviadas pela petição REST. Esse número pode ser o número total de entidades se for menor que o valor definido por `$top/$limit`.                                                  |
| __FIRST       | Número     | Número de entidade em que a seleção vai começar. Ou o valor padrão 0 ou o valor definido por `$skip`.                                                                                                  |
| __ENTITIES    | Collection | Esta coleção de objetos contém um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais são retornados como objetos com uma URI para obter informação sobre o objeto pai. |

Cada entidade contém as propriedades abaixo:

| Propriedade | Tipo   | Descrção                                                                                                      |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| __KEY       | String | Valor da chave primária definida para a classe de dados.                                                      |
| __TIMESTAMP | Date   | Registro de hora da última modificação da entidade                                                            |
| __STAMP     | Número | Registro interno necessário quando modificar qualquer um dos valores na entidade quando usar`$method=update`. |

Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo [{atributo1, atributo2, ...}](manData.md##selecting-attributes-to-get). Por exemplo:

 `GET  /rest/Company/name,address`

### Exemplo

Retorna todas as datas para uma classe de dados específica.

 `GET  /rest/Company`

**Resultadoi**:

````
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
````

## {dataClass}({key})

Retorna os dados para a entidade específica definida pela chave primária da classe de dados, *e.g.*, `Company(22) ou Company("IT0911AB2200")`

### Descrção

Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade. Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade. Para saber mais sobre a definição de chave primária, veja a seção **Modifying the Primary Key** em **Data Model Editor**.

Para saber mais sobre os dados retornados, veja [{DataStoreClass}](#datastoreclass).

Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo [{atributo1, atributo2, ...}](manData.md##selecting-attributes-to-get). Por exemplo:

 `GET  /rest/Company(1)/name,address`

Se quiser expandir o atributo de relação usando `$expand`, pode fazer isso como mostrado abaixo:

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

### Exemplo

A petição abaixo retorna todos os dados públicos na dataclass Company cuja chave é 1.

 `GET  /rest/Company(1)`

**Resultadoi**:

````
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
````

## {dataClass}:{attribute}(value)

Retorna os dados para uma entidade na qual os valores de atributo são definidas

### Descrção

Passando *dataClass* e um *atributo* junto com o valor, pode recuperar toda a informação pública para essa entidade. O valor é um valor único para o atributo, mas não é a chave primária.

 `GET  /rest/Company:companyCode(Acme001)`

Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo [{atributo1, atributo2, ...}](manData.md##selecting-attributes-to-get). Por exemplo:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

Se quiser usar um atributo de relação usando [$attributes]($attributes.md), pode fazer isso especificando-o como mostrado abaixo:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemplo

A petição abaixo retorna todos os dados públicos do funcionário chamado "Jones".

 `GET  /rest/Employee:lastname(Jones)`
