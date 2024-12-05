---
id: "{dataClass}"
title: "{dataClass}"
---



Os nomes das classes de dados podem ser usadas diretamente nas petições REST para trabalhar com entidades, seleções de entidades ou métodos da classe de dados.

## Sintaxe disponível

| Sintaxe                                                                            | Exemplo                     | Descrição                                                                                          |
| ---------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------- |
| [**\{dataClass\}**](#dataclass)                                                  | `/Employee`                 | Retorna todos os dados (como padrão as primeiras 100 entidades) para a dataclass                   |
| [**\{dataClass\}({key})**](#dataclasskey)                                        | `/Employee(22)`             | Retorna os dados para a entidade especifica definida pela chave primária da classe de dados        |
| [**\{dataClass\}:\{attribute\}(value)**](#dataclassattributevalue)             | `/Employee:firstName(John)` | Retorna os dados para uma entidade na qual os valores de atributo são definidas                    |
| [**\{dataClass\}/\{method\}**](#dataclassmethod-and-dataclasskeymethod)        | `/Employee/getHighSalaries` | Executa um método projeto e devolve um objeto ou uma coleção (o método projeto deve estar exposto) |
| [**\{dataClass\}({key})/\{method\}**](#dataclassmethod-and-dataclasskeymethod) | `/Employee(22)/getAge`      | Retona um valor baseado no método de entidade                                                      |

## \{dataClass\}

Retorna todos os dados (como padrão as primeiras 100 entidades) para uma classe de dados específica (*por exemplo *, `Company`)

### Descrição

Quando chamar este parâmetro em sua petição REST, as primeiras 100 entidades são retornadas a menos que tenha especificado um valor usando [`$top/$limit`]($top_$limit.md).

Aqui está uma descrição dos dados retornados:

| Propriedade   | Tipo       | Descrição                                                                                                                                                                                              |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __entityModel | Text       | Nome da dataclass.                                                                                                                                                                                     |
| __COUNT       | Number     | Número de entidades na classe de dados.                                                                                                                                                                |
| __SENT        | Number     | Número de entidades enviadas pela petição REST. Esse número pode ser o número total de entidades se for menor que o valor definido por `$top/$limit`.                                                  |
| __FIRST       | Number     | Número de entidade em que a seleção vai começar. Ou o valor padrão 0 ou o valor definido por `$skip`.                                                                                                  |
| __ENTITIES    | Collection | Esta coleção de objetos contém um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais são retornados como objetos com uma URI para obter informação sobre o objeto pai. |

Cada entidade contém as propriedades abaixo:

| Propriedade | Tipo   | Descrição                                                                                                     |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| __KEY       | Text   | Valor da chave primária definida para a classe de dados.                                                      |
| __TIMESTAMP | Date   | Registro de hora da última modificação da entidade                                                            |
| __STAMP     | Number | Registro interno necessário quando modificar qualquer um dos valores na entidade quando usar`$method=update`. |

Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). Por exemplo:

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

## \{dataClass\}({key})

Retorna os dados para a entidade específica definida pela chave primária da classe de dados, *e.g.*, `Company(22) ou Company("IT0911AB2200")`

### Descrição

Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade. Passando a classe de dados e uma chave, pode recuperar toda a informação pública para a entidade. Para saber mais sobre a definição de chave primária, veja a seção **Modifying the Primary Key** em **Data Model Editor**.


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

## \{dataClass\}:\{attribute\}(value)

Retorna os dados para uma entidade na qual os valores de atributo são definidas

### Descrição

Passando *dataClass* e um *atributo* junto com o valor, pode recuperar toda a informação pública para essa entidade. O valor é um valor único para o atributo, mas não é a chave primária.

 `GET  /rest/Company:companyCode(Acme001)`

Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo [{atributo1, atributo2, ...}](manData.md##selecting-attributes-to-get). Por exemplo:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

Se quiser usar um atributo de relação usando [$attributes]($attributes.md), pode fazer isso especificando-o como mostrado abaixo:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemplo

A petição abaixo retorna todos os dados públicos do funcionário chamado "Jones".

 `GET  /rest/Employee:lastname(Jones)`

## \{dataClass\}/\{method\} and \{dataClass\}({key})/\{method\}

Retorna um objeto ou uma coleção baseada em um método projeto.

### Descrição

Os métodos projeto são chamados através de uma classe de dados (tabela) ou uma entidade (registro), e devem retornar ou um objeto ou uma coleção.

`POST /rest/Employee/getHighSalaries`

`POST  /rest/Employee(52)/getFullName`

### Configuração 4D

Para ser chamado em uma petição REST, um método deve:

- ter sido declarado como "disponível via o servidor REST" em 4D,
- ter sua tabela mestre e escopo definidos de forma coerente:
  - **Tabela**: tabela 4D (classe de dados) na qual o método é chamado. A tabela deve ser [exposta a REST](configuration.md#exposing-tables-and-fields).
  - **Escopo/alcance**: Essa configuração é útil quando o método usar a linguagem clássica 4D e assim precisar ter um contexto de database no lado do servidor.
    - **Tabela** -para métodos aplicados para a tabela inteira (dataclass)
    - **Current record** -for methods applied to the current record (entity) using the `\{dataClass\}(key)/{method}` syntax.
    - **Seleção atual** -para os métodos aplicados à seleção atual

![alt-text](../assets/en/REST/MethodProp.png)

### Passar parâmetros a um Método

Também pode passar parâmetros a um método e um POST.

`POST /rest/Employee/addEmployee`

Pode fazer um POST de dados no corpo da consulta, por exemplo:

["John","Smith"]

### Exemplos

#### Alcance da tabela

Chamada de um método `getAverage`:

- na tabela [Employee]
- com o alcance de **Table**

```4d
 //getAverage ALL RECORDS([Employee])
$0:=New object("ageAverage";Average([Employee]age))
```

`POST  /rest/Employee/getAverage`

Resultados:

```
{
    "result": {
        "ageAverage": 44.125
    }
}
```

#### Alcance do registro atual

Chamada de um método `getFullName`:

- na tabela [Employee]
- com o alcance de **Current record**

```4d
 //getFullName  
$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)
```

`POST  /rest/Employee(3)/getFullName`

Resultados:

```
{
    "result": {
        "fullName": "John Smith"
    }
}
```

#### Alcance da seleção atual

Chamada de um método `updateSalary`:

- na tabela [Employee]
- com o alcance de **Current selection**

```4d
 //updateSalary C_REAL($1;$vCount)
READ WRITE([Employee])
$vCount:=0 FIRST RECORD([Employee])
While (Not(End selection([Employee]))  
 [Employee]salary:=[Employee]salary * $1
    SAVE RECORD([Employee])
    $vCount:=$vCount+1
    NEXT RECORD([Employee])
End while UNLOAD RECORD([Employee])
$0:=New object("updates";$vCount)
```

`POST  /rest/Employee/updateSalary/?$filter="salary<1500"`

POST data (in the request body): [1.5]

Resultados:

```
{
    "result": {
        "ageAverage": 42
    }
}
```
