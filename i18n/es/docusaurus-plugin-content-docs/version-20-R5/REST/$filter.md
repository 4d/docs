---
id: filter
title: $filter
---

Allows to query the data in a dataclass or method _(e.g._, `$filter="firstName!='' AND salary>30000"`)

## Descripción

Este parámetro le permite definir el filtro para su clase de datos o método.

### Utilizar un filtro simple

Un filtro se compone de los siguientes elementos:

**{attribute} {comparator} {value}**

For example: `$filter="firstName=john"` where `firstName` is the **attribute**, `=` is the **comparator** and `john` is the **value**.

### Utilizar un filtro complejo

Un filtro más complejo se compone de los siguientes elementos, que unen dos consultas:

**{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}**

For example: `$filter="firstName=john AND salary>20000"` where `firstName` and `salary` are attributes in the Employee dataclass.

### Utilizar la propiedad params

También puede utilizar la propiedad params de 4D.

**{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` where firstName and salary are attributes in the Employee dataclass.

For more information regarding how to query data in 4D, refer to the [dataClass.query()](../API/DataClassClass.md#query) documentation.

> Al insertar comillas (') o comillas dobles ("), debe escaparlas utilizando su código de caracteres:
>
> <li>Comillas ('): \u0027</li>
> <li>Comillas dobles ("): \u0022</li>
>
> For example, you can write the following when passing a value with a quote when using the _params_ property:\
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> If you pass the value directly, you can write the following:
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Atributo

If the attribute is in the same dataclass, you can just pass it directly (_e.g._, `firstName`). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (_e.g._, employer.name). The attribute name is case-sensitive (`firstName` is not equal to `FirstName`).

También puede consultar los atributos de tipo Object utilizando la anotación de puntos. Por ejemplo, si tiene un atributo cuyo nombre es "objAttributo" con la siguiente estructura:

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

Puede buscar en el objeto escribiendo lo siguiente:

` GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparador

El comparador debe ser uno de los siguientes valores:

| Comparador | Descripción       |
| ---------- | ----------------- |
| =          | igual a           |
| !=         | diferente de      |
| >          | mayor que         |
| > =        | mayor o igual que |
| <          | menor que         |
| <=         | menor o igual que |
| begin      | comienza con      |

## Ejemplos

En el siguiente ejemplo, buscamos a todos los empleados cuyo apellido empieza por "j":

```
 GET  /rest/Employee?$filter="lastName begin j"
```

En este ejemplo, buscamos en la clase de datos Empleado todos los empleados cuyo salario sea superior a 20.000 y que no trabajen para una empresa llamada Acme:

```
 GET  /rest/Employee?$filter="salary>20000 AND  
 employer.name!=acme"&$orderby="lastName,firstName"
```

En este ejemplo, buscamos en la clase de datos Person todas las personas cuya propiedad número en el atributo anotherobj de tipo Object es mayor que 50:

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```
