---
id: filter
title: $filter
---

Permite consultar los datos de una clase de datos o de un método _(p. ej._, `$filter="firstName!='' AND salary>30000"`)

## Descripción

Este parámetro le permite definir el filtro para su clase de datos o método.

### Utilizar un filtro simple

Un filtro se compone de los siguientes elementos:

**\{attribute\} {comparator} {value}**

Por ejemplo: `$filter="firstName=john"` donde `firstName` es el **atributo**, `=` es el **comparador** y `john` es el **valor**.

### Utilizar un filtro complejo

Un filtro más complejo se compone de los siguientes elementos, que unen dos consultas:

**\{attribute\} {comparator} {value} {AND/OR/EXCEPT} \{attribute\} {comparator} {value}**

Por ejemplo: `$filter="firstName=john AND salary>20000"` donde `firstName` y `salary` son atributos de la clase de datos Employee.

### Utilizar la propiedad params

También puede utilizar la propiedad params de 4D.

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

Por ejemplo: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` donde firstName y salary son los atributos de la clase de datos Employee.

Para más información sobre cómo consultar datos en 4D, consulte la documentación de [dataClass.query()](../API/DataClassClass.md#query).

> Al insertar comillas (') o comillas dobles ("), debe escaparlas utilizando su código de caracteres:
>
> <li>Comillas ('): \u0027</li>
> <li>Comillas dobles ("): \u0022</li>
>
> Por ejemplo, puede escribir lo siguiente al pasar un valor con comillas cuando utilice la propiedad \*params\
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> Si pasa el valor directamente, puede escribir lo siguiente:
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Atributo

Si el atributo está en la misma clase de datos, puede pasarlo directamente (_p. ej._, `firstName`). Sin embargo, si quiere consultar otra clase de datos, debe incluir el nombre del atributo relacional y el nombre del atributo, es decir, la ruta de acceso (_por ejemplo_, nombre.empleador). El nombre del atributo distingue entre mayúsculas y minúsculas (`firstName` no es igual a `FirstName`).

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

| Comparador                  | Descripción       |
| --------------------------- | ----------------- |
| =                           | igual a           |
| !=                          | diferente de      |
| >                           | mayor que         |
| > =                         | mayor o igual que |
| <  | menor que         |
| <= | menor o igual que |
| begin                       | comienza con      |

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
