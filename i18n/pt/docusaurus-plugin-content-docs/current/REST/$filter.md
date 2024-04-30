---
id: filter
title: $filter
---

Allows to query the data in a dataclass or method _(e.g._, `$filter="firstName!='' AND salary>30000"`)

## Descrição

Este parâmetro permite-lhe definir o filtro para a sua dataclass ou método.

### Utilizar um filtro simples

Um filtro é composto pelos seguintes elementos:

**{attribute} {comparator} {value}**

For example: `$filter="firstName=john"` where `firstName` is the **attribute**, `=` is the **comparator** and `john` is the **value**.

### Utilizar um filtro complexo

A more complex filter is composed of the following elements, which joins two queries:

**{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}**

For example: `$filter="firstName=john AND salary>20000"` where `firstName` and `salary` are attributes in the Employee dataclass.

### Utilizar a propriedade params

Também pode usar a propriedade params de 4D.

**{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` where firstName and salary are attributes in the Employee dataclass.

For more information regarding how to query data in 4D, refer to the [dataClass.query()](../API/DataClassClass.md#query) documentation.

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

If the attribute is in the same dataclass, you can just pass it directly (_e.g._, `firstName`). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (_e.g._, employer.name). The attribute name is case-sensitive (`firstName` is not equal to `FirstName`).

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

| Comparador | Descrição            |
| ---------- | -------------------- |
| =          | é igual a            |
| !=         | diferente de         |
| >          | maior que            |
| > =        | maior ou igual a     |
| <          | menor que            |
| <=         | menor que ou igual a |
| begin      | começa com           |

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
