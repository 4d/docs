---
id: filter
title: '$filter'
---


 
Allows to query the data in a dataclass or method *(e.g.*, `$filter="firstName!='' AND salary>30000"`)


## Descrção

This parameter allows you to define the filter for your dataclass or method.

### Using a simple filter

A filter is composed of the following elements:

**{attribute} {comparator} {value}**

For example: `$filter="firstName=john"` where `firstName` is the **attribute**, `=` is the **comparator** and `john` is the **value**.

### Using a complex filter

A more compex filter is composed of the following elements, which joins two queries:

**{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}**


Por exemplo: `$filter="firstName=john AND salary>20000"` onde `firstName` y `salary` são atributos da classe de dados Employee.

### Using the params property

You can also use 4D's params property.

**{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

Por exemplo: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` onde firstName e salary são os atributos da classe de dados Employee.

For more information regarding how to query data in 4D, refer to the [dataClass.query()](https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html) documentation.
> When inserting quotes (') or double quotes ("), you must escape them using using their character code:
> 
> <li>Quotes ('): \u0027</li>
  <li>Double quotes ("): \u0022</li>
> 
> For example, you can write the following when passing a value with a quote when using the *params* property:  
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

You can search in the object by writing the following:

`GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparator

The comparator must be one of the following values:

| Comparator | Descrção             |
| ---------- | -------------------- |
| =          | equals to            |
| !=         | diferente de         |
| >          | maior que            |
| >=         | maior ou igual a     |
| <          | menor que            |
| <=         | menor que ou igual a |
| begin      | begins with          |

## Exemplos

In the following example, we look for all employees whose last name begins with a "j":

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
