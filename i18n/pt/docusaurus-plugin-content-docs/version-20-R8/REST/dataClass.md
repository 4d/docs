---
id: dataClass
title: dataClass
---

Os nomes de dataclass podem ser utilizados diretamente nos pedidos REST para trabalhar com entidades e selecções de entidades, ou funções de classe da dataclass.

## Sintaxe disponível

| Sintaxe                                                                                                                                  | Exemplo                               | Descrição                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [**\{dataClass\}**](#dataClass)                                                                                                        | `/Employee`                           | Retorna todos os dados (como padrão as primeiras 100 entidades) para a dataclass |
| [**\{dataClass\}[{key}]**](#dataclasskey)                                          | `/Employee[22]`                       | Retorna os dados para a entidade especifica definida pela chave primária da classe de dados         |
| [**\{dataClass\}:\{attribute\}(value)**](#dataclassattributevalue)                                | `/Employee:firstName(John)`           | Retorna os dados para uma entidade na qual os valores de atributo são definidas                     |
| [**\{dataClass\}/{DataClassClassFunction}**](ClassFunctions.md#function-calls)                                                         | `/City/getCity`                       | Executa uma função de classe de uma dataclass                                                       |
| [**\{dataClass\}/{EntitySelectionClassFunction}**](ClassFunctions.md#function-calls)                                                   | `/City/getPopulation/?$filter="ID<3"` | Executa uma função de classe de uma seleção de entidade                                             |
| [**\{dataClass\}[{key}]/{EntityClassFunction}**](ClassFunctions.md#function-calls) | `City[2]/getPopulation`               | Executa uma função de classe de uma entidade                                                        |

> As chamadas função são detalhadas na seção [Chamada das funções de classe ORDA](ClassFunctions.md).

## \{dataClass\}

Devuelve todos los datos (por defecto las 100 primeras entidades) para una clase de datos específica (*por ejemplo*, `Company`)

### Descrição

Quando você chama este parâmetro em sua solicitação REST as primeiras 100 entidades são retornadas a menos que você tenha especificado um valor usando [`$top/$limit`]($top_$limit.md).

Aqui está uma descrição dos dados retornados:

| Propriedade                                             | Tipo       | Descrição                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | Text       | Nome da dataclass.                                                                                                                                                                                                     |
| __COUNT       | Number     | Número de entidades na classe de dados.                                                                                                                                                                                |
| __SENT        | Number     | Número de entidades enviadas pela petição REST. Este número puede ser el número total de entidades si es menor que el valor definido por `$top/$limit`.                                                |
| __FIRST       | Number     | Número de entidade em que a seleção vai começar. O bien 0 por defecto o el valor definido por `$skip`.                                                                                                 |
| __ENTITIES    | Collection | Esta coleção de objetos contém um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais são retornados como objetos com uma URI para obter informação sobre o objeto pai. |

Cada entidade contém as propriedades abaixo:

| Propriedade                                           | Tipo   | Descrição                                                                                                                          |
| ----------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | Text   | Valor da chave primária definida para a classe de dados.                                                           |
| __TIMESTAMP | Date   | Registro de hora da última modificação da entidade                                                                                 |
| __STAMP     | Number | Sello interno que se necesita cuando se modifica alguno de los valores de la entidad al utilizar `$method=update`. |

Se você quiser especificar quais atributos você deseja devolver, defina-os usando a seguinte sintaxe [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por exemplo:

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

## \{dataClass\}\[{key}]

Returns the data for the specific entity defined by the dataclass's primary key, *e.g.*, `Company[22]` or `Company[IT0911AB2200]`

### Descrição

Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade. A chave é o valor do atributo definido como a chave primária para seu dataclas. Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade.

Para más información sobre los datos devueltos, consulte [\{dataClass\}](#dataclass).

Se você quiser especificar quais atributos você deseja devolver, defina-os usando a seguinte sintaxe [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por exemplo:

`GET  /rest/Company[1]/name,address`

Si desea expandir un atributo de relación utilizando `$expand`, lo hará especificándolo como se muestra a continuación:

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

## \{dataClass\}:\{attribute\}(value)

Retorna os dados para uma entidade na qual os valores de atributo são definidas

### Descrição

By passing the *dataClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. O valor é um valor único para o atributo, mas não é a chave primária.

`GET  /rest/Company:companyCode(Acme001)`

Se você quiser especificar quais atributos você deseja devolver, defina-os usando a seguinte sintaxe [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por exemplo:

`GET  /rest/Company:companyCode(Acme001)/name,address`

Si desea utilizar un atributo relacional utilizando [$attributes.md">]($attributes.md), lo hará especificándolo como se muestra a continuación:

`GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemplo

A petição abaixo retorna todos os dados públicos do funcionário chamado "Jones".

`GET  /rest/Employee:lastname(Jones)`
