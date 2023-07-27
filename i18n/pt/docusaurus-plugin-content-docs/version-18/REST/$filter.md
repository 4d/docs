---
id: filter
title: "$filter"
---


 
Allows to query the data in a dataclass or method *(e.g.*, `$filter="firstName!='' AND salary>30000"`)

## Descrição

This parameter allows you to define the filter for your dataclass or method.

### Utilizar um filtro simples

Um filtro é composto pelos seguintes elementos:

**{attribute} {comparator} {value}**

For example: `$filter="firstName=john"` where `firstName` is the **attribute**, `=` is the **comparator** and `john` is the **value**.

### Utilizar um filtro complexo

A more compex filter is composed of the following elements, which joins two queries:

**{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}**

Por exemplo: `$filter="firstName=john AND salary>20000"` onde `firstName` y `salary` são atributos da classe de dados Employee.

### Utilizar a propriedade params

Também pode usar a propriedade params de 4D.

**{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

Por exemplo: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` onde firstName e salary são os atributos da classe de dados Employee.

For more information regarding how to query data in 4D, refer to the [dataClass.query()](https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html) documentation.
> When inserting quotes (') or double quotes ("), you must escape them using using their character code:
> 
> Quotes ('): \u0027 Double quotes ("): \u0022
> 
> Por exemplo, pode escrever o seguinte ao passar um valor com uma aspa ao utilizar a propriedade *params*:  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
> 
> If you pass the value directly, you can write the following: `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Atributo

If the attribute is in the same dataclass, you can just pass it directly (*e.g.*, `firstName`). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (*e.g.*, employer.name). The attribute name is case-sensitive (`firstName` is not equal to `FirstName`).

You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

É possível pesquisar no objeto escrevendo o seguinte:

`GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparador

O comparador deve ser um dos seguintes valores:

| Comparador | Descrição            |
| ---------- | -------------------- |
| =          | é igual a            |
| !=         | diferente de         |
| >          | maior que            |
| >=         | maior ou igual a     |
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
