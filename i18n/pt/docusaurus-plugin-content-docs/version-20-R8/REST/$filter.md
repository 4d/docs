---
id: filter
title: $filter
---

Permite consultar los datos de una clase de datos o de un método _(p. ej._, `$filter="firstName!='' AND salary>30000"`)

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

Também pode usar a propriedade params de 4D.

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

Por ejemplo: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` donde firstName y salary son los atributos de la clase de datos Employee.

Para más información sobre cómo consultar datos en 4D, consulte la documentación de [dataClass.query()](../API/DataClassClass.md#query).

> Ao inserir aspas (') ou aspas duplas ("), deve escapar-lhes utilizando o seu código de caracteres:
>
> <li>Aspas ('): \u0027</li>
> <li>Quotes ('): \u0027 Double quotes ("): \u0022</li>
>
> For example, you can write the following when passing a value with a quote when using the _params_ property:\
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> If you pass the value directly, you can write the following:
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Atributo

Si el atributo está en la misma clase de datos, puede pasarlo directamente (_p. ej._, `firstName`). Sin embargo, si quiere consultar otra clase de datos, debe incluir el nombre del atributo relacional y el nombre del atributo, es decir, la ruta de acceso (_por ejemplo_, nombre.empleador). El nombre del atributo distingue entre mayúsculas y minúsculas (`firstName` no es igual a `FirstName`).

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
