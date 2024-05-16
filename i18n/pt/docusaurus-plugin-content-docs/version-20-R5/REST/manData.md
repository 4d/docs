---
id: manData
title: Manipulação de dados
---

Todos [los atributos, dataclasses expuestos](configuration.md#exposing-tables-and-fields) y todas las [funciones](ClassFunctions.md) pueden ser accedidos a través de REST. Os nomes de classes de dados, atributos e métodos são sensíveis às maiúsculas e minúsculas, entretanto, os dados das pesquisas não são.

## Pesquisas de dados

To query data directly, you can do so using the [`$filter`]($filter.md) function. Por exemplo, para encontrar a pessoa chamada "smith" poderia escrever:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`

## Adicionar, modificar e apagar entidades

Com o REST API, pode realizar todas as manipulações de dados que quiser em 4D.

To add and modify entities, you can call [`$method=update`]($method.md#methodupdate). If you want to delete one or more entities, you can use [`$method=delete`]($method.md#methoddelete).

Además la recuperación de una sola entidad en una clase de datos utilizando [{dataClass}({key})](dataClass.md#dataclasskey), también puede escribir una [función de clase](ClassFunctions.md#function-calls) que devuelva una entity selection (o una colección

Before returning a selection, you can also sort it by using [`$orderby`]($orderby.md) one one or more attributes (even relation attributes).

## Navegando dados

Add the [`$skip`]($skip.md) (to define with which entity to start) and [`$top/$limit`]($top_$limit.md) (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities.

## Criar e gerenciar conjuntos de entidades

Un conjunto de entidades (también conocido como _selección de entidades_) es una colección de entidades obtenidas a través de una petición REST que se almacena en la caché de 4D Server. Usar um conjunto de entidades previne que pesquise continuamente sua aplicação pelos mesmos resultados. Acessar um conjunto de entidades é mais rápido e pode melhorar a velocidade de sua aplicação.

To create an entity set, call [`$method=entityset`]($method.md#methodentityset) in your REST request. As a measure of security, you can also use [`$savedfilter`]($savedfilter.md) and/or [`$savedorderby`]($savedorderby.md) when you call [`$filter`]($filter.md) and/or [`$orderby`]($orderby.md) so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.

Para acceder al conjunto de entidades, debe utilizar `$entityset/{entitySetID}`, por ejemplo:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`

By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to [`$timeout`]($timeout.md). O timeout é continuamente resetado ao valor definido (seja o valor padrão ou um definido por você) a cada vez que for usado.

If you want to remove an entity set from 4D Server's cache, you can use [`$method=release`]($method.md#methodrelease).

Se modificar qualquer dos atributos de entidade no conjunto de entidades, o valor será atualizado. Entretanto, se modificar um valor que era uma parte da pesquisa executada para criar o conjunto de entidades, não será removido do conjunto de entidades mesmo se não se enquadrar mais nos critérios de pesquisa. Qualquer entidade que apagar não será mais parte do conjunto de entidades.

Se o conjunto de entidades não existir mais no cache 4D Server, será recriada com um novo timeout padrão de 10 minutos. O conjunto de entidades será renovado (certas entidades podem ser incluidas e outras podem ser removidas) já que desde a última vez que foi criada, não existe mais antes da recriação).

Using [`$entityset/{entitySetID}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection), you can combine two entity sets that you previously created. Pode então combinar os resultados em ambos, retornar só o que é comum entre os dois, ou retornar o que não é comum entre os dois.

A new selection of entities is returned; however, you can also create a new entity set by calling [`$method=entityset`]($method.md#methodentityset) at the end of the REST request.

## Calcular dados

By using [`$compute`]($compute.md), you can compute the **average**, **count**, **min**, **max**, or **sum** for a specific attribute in a dataclass. Pode também computar todos os valores com a palavra chave $all.

Por exemplo, para obter o maior salário:

`/rest/Employee/salary/?$compute=sum`

Para computar todos os valores e retornar um objeto JSON:

`/rest/Employee/salary/?$compute=$all`

## Chamar as funções de classe do modelo de dados

Puede llamar las [funciones de clase usuarios](ClassFunctions.md) ORDA del modelo de datos vía las peticiones POST, para poder beneficiarse del API de la aplicación objetivo. Por ejemplo, si ha definido una función `getCity()` en la dataclass City, podría llamarla utilizando la siguiente petición:

`/rest/City/getCity`

con los datos en el cuerpo de la petición: `["Paris"]`

> Pode chamar métodos de projeto 4D que são <a href="%7BdataClass%7D.html#4d-configuration">expostos como serviços REST</a>.

## Selecionar atributos a obter

Siempre se puede definir qué atributos devolver en la respuesta REST después de una solicitud inicial pasando su ruta en la solicitud (_por ejemplo_, `Company(1)/name,revenues/`)

Pode aplicar essa técnica a:

| Object                | Sintaxe                                                                                                                           | Exemplo                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Dataclass             | {dataClass}/{att1,att2...}                                                        | /People/firstName,lastName                                                      |
| Coleção de entidades  | {dataClass}/{att1,att2...}/?$filter="{filter}"                                    | /People/firstName,lastName/?$filter="lastName='a@'"                |
| Entidade especificada | {dataClass}({ID})/{att1,att2...}                               | /People(1)/firstName,lastName                                |
|                       | {dataClass}:{attribute}(value)/{att1,att2...}/ | /People:firstName(Larry)/firstName,lastName/ |
| Seleção de entidades  | {dataClass}/{att1,att2...}/$entityset/{entitySetID}                               | /People/firstName/$entityset/528BF90F10894915A4290158B4281E61                   |

Los atributos deben estar delimitados por una coma, _i.e._, `/Employee/firstName,lastName,salary`. Os atributos de armazenamento ou relação podem ser passados.

### Exemplos

Aqui alguns exemplos, mostrando como especificar que atributos vai retornar dependendo da técnica usada para recuperar entidades.

Pode aplicar esse filtro das maneiras a seguir:

- Classes de dados (todas ou uma coleção de entidades em uma classe de dados)
- Entidades especificas
- Conjuntos de entidades

#### Exemplo com uma dataclass

Las siguientes peticiones devuelven sólo el nombre y el apellido de la clase de datos People (ya sea toda la clase de datos o una selección de entidades basada en la búsqueda definida en `$filter`).

`GET  /rest/People/firstName,lastName/`

**Resultado**:

```
{
    __entityModel: "People",
    __COUNT: 4,
    __SENT: 4,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith"
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary"
        },
        {
            __KEY: "3",
            __STAMP: 2,
            firstName: "Pete",
            lastName: "Marley"
        },
        {
            __KEY: "4",
            __STAMP: 1,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
```

`GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`

**Resultado**:

```
{
    __entityModel: "People",
    __COUNT: 1,
    __SENT: 1,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "4",
            __STAMP: 4,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
```

#### Exemplo entidade

As petições abaixo retornar apenas os atributos primeiro nome e último sobrenome de uma entidade especifica na dataclasse People:

`GET  /rest/People(3)/firstName,lastName/`

**Resultado**:

```
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
```

`GET  /rest/People(3)/`

**Resultado**:

```
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    ID: 3,
    firstName: "Pete",
    lastName: "Marley",
    salary: 30000,
    employer: {
        __deferred: {
            uri: "http://127.0.0.1:8081/rest/Company(3)",
            __KEY: "3"
        }
    },
    fullName: "Pete Marley",
    employerName: "microsoft"
 
}
```

#### Exemplo de conjunto de Entidades

Una vez que haya [creado un conjunto de entidades](#creating-and-managing-entity-set), puede filtrar la información que contiene definiendo qué atributos debe devolver:

`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`

## Vendo um atributo de imagem

Se quiser ver um atributo de imagem integralmente, escreva o abaixo:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## Salvar um atributo BLOB ao disco

Se quiser salvar um BLOB armazenado na dataclass, pode escrever:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`

## Recuperar apenas uma entidade

You can use the [`{dataClass}:{attribute}(value)`](%7BdataClass%7D.html#dataclassattributevalue) syntax when you want to retrieve only one entity. É particularmente útil quando quiser fazer uma pesquisa relacionada que não seja criada com a mesma chave primária que a dataclass. Por exemplo, pode escrever:

`GET  /rest/Company:companyCode("Acme001")`
