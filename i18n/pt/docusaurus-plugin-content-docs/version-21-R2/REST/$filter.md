---
id: filter
title: $filter
---

Allows to query the data in a dataclass or method (*e.g.*, `$filter="firstName!='' AND salary>30000"`)

## Descrição

Este parâmetro permite-lhe definir o filtro para a sua dataclass ou método.

### Utilizar um filtro simples

Um filtro é composto pelos seguintes elementos:

**\{attribute\} {comparator} {value}**

Por ejemplo: `$filter="firstName=john"` donde `firstName` es el **atributo**, `=` es el **comparador** y `john` es el **valor**.

### Utilizar um filtro complexo

A more complex filter is composed of the following elements, which joins two queries:

**\{attribute\} {comparator} {value} {AND/OR/EXCEPT} \{attribute\} {comparator} {value}**

Por ejemplo: `$filter="firstName=john AND salary>20000"` donde `firstName` y `salary` son atributos de la clase de datos Employee.

### Utilizar a propriedade params

You can also use 4D's `params` property which is a collection of values.

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]'**

Por ejemplo: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` donde firstName y salary son los atributos de la clase de datos Employee.

Para más información sobre cómo consultar datos en 4D, consulte la documentación de [dataClass.query()](../API/DataClassClass.md#query).

> Ao inserir aspas (') ou aspas duplas ("), deve escapar-lhes utilizando o seu código de caracteres:
>
> <li>Aspas ('): \u0027</li>
> <li>Quotes ('): \u0027 Double quotes ("): \u0022</li>
>
> For example, you can write the following when passing a value with a quote when using the *params* property:  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> Se você passar o valor diretamente, poderá escrever o seguinte:
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Atributo

Si el atributo está en la misma clase de datos, puede pasarlo directamente (*p. ej.*, `firstName`). Sin embargo, si quiere consultar otra clase de datos, debe incluir el nombre del atributo relacional y el nombre del atributo, es decir, la ruta de acceso (*por ejemplo*, nombre.empleador). El nombre del atributo distingue entre mayúsculas y minúsculas (`firstName` no es igual a `FirstName`).

Também é possível consultar atributos do tipo Object utilizando a notação de ponto. Por exemplo, se tiver um atributo cujo nome é "objAttribute" com a seguinte estrutura:

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

É possível pesquisar no objeto escrevendo o seguinte:

` GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparador

O comparador deve ser um dos seguintes valores:

| Comparador                  | Descrição            |
| --------------------------- | -------------------- |
| =                           | é igual a            |
| !=                          | diferente de         |
| >                           | maior que            |
| > =                         | maior ou igual a     |
| <  | menor que            |
| <= | menor que ou igual a |
| begin                       | começa com           |

## Vector similarity

If the attribute stores [**vector objects**](../API/VectorClass.md) (see how to [configure a 4D field to only store 4D.Vector class objects](../Develop/field-properties.md#class)), you can filter the dataclass using **vectors**, aka **embeddings**.

For more information about vector similarity searches, please refer to [Query by vector similarity](../API/DataClassClass.md#query-by-vector-similarity) section.

Use the `params` property to provide the filter with the vector comparison parameter, using a syntax like:

**\{vectorAttribute\} \{comparator\} \{placeholder\}&$params=vectorComparison**

The *vectorComparison* parameter is a collection of the following elements:

| Propriedade                                                                      | Tipo                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].vector    | Collection of numbers | Obrigatório. A collection that represents the vector to compare                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [].metric    | Text                  | Opcional. [Vector computation](../API/VectorClass.md#understanding-the-different-vector-computations) to use for the query. Supported values:<li>"cosine" (default if omitted): calculates the cosine similarity between vectors.</li><li>"dot": calculates the dot similarity of vectors.</li><li>"euclidean": calculates the Euclidean distance between vectors. |
| [].threshold | Real                  | Optional (default: 0.5). A threshold value used to filter vector comparisons based on their cosine, dot or euclidean similarity score according to the selected "metric". It is highly recommended to choose a similarity that best fits your specific use case for optimal results.                                                                                                                                               |

Only a subset of **comparator** symbols is supported with vector comparisons. Note that they compare results to the threshold value:

| Comparador           | Símbolos                    | Comentário                             |
| -------------------- | --------------------------- | -------------------------------------- |
| Menor que            | <  | Lower than the threshold               |
| Maior que            | >                           | Greater than the threshold             |
| Menor que ou igual a | <= | Lower than or equal to the threshold   |
| Maior ou igual a     | > =                         | Greater than or equal to the threshold |

## Exemplos

No exemplo seguinte, procuramos todos os empregados cujo apelido começa por "j":

```
 GET  /rest/Employee?$filter="lastName begin j"
```

Nesse exemplo pesquisamos na classe de dados Empregado todos os empregados cujo salário seja superior a  20.000 e que não trabalhem para uma empresa chamada Acme:

```
 GET  /rest/Employee?$filter="salary>20000 AND  
 employer.name!=acme"&$orderby="lastName,firstName"
```

Neste exemplo, buscamos na classe de dados Person todas as pessoas cuja propriedade número no atributo anotherobj de tipo Object for maior que 50:

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```

In this example, we do a vector search with basic values:

```
 GET  /rest/Person/?filter="VectorAtt>=:1"&$params='[{vector:[1,2,3],threshold:1}]'
```
