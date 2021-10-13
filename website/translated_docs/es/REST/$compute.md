---
id: compute
title: '$compute'
---

Calculate on specific attributes (*e.g.*, `Employee/salary/?$compute=sum)` or in the case of an Object attribute (*e.g.*, Employee/objectAtt.property1/?$compute=sum)


## Descripción

This parameter allows you to do calculations on your data.

If you want to perform a calculation on an attribute, you write the following:

 `GET  /rest/Employee/salary/?$compute=$all`

If you want to pass an Object attribute, you must pass one of its property. Por ejemplo:

 `GET  /rest/Employee/objectAtt.property1/?$compute=$all`

You can use any of the following keywords:


| Palabras clave | Descripción                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $all           | A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String |
| average        | Get the average on a numerical attribute                                                                                                                                              |
| count          | Obtener el número total en la colección o en la clase de datos (en ambos casos hay que especificar un atributo)                                                                       |
| min            | Get the minimum value on a numerical attribute or the lowest value in an attribute of type String                                                                                     |
| max            | Get the maximum value on a numerical attribute or the highest value in an attribute of type String                                                                                    |
| sum            | Get the sum on a numerical attribute                                                                                                                                                  |


## Ejemplo

If you want to get all the computations for an attribute of type Number, you can write:

 `GET  /rest/Employee/salary/?$compute=$all`

**Respuesta**:

````
{
    "salary": {
        "count": 4,
        "sum": 335000,
        "average": 83750,
        "min": 70000,
        "max": 99000
    }
}
````

If you want to get all the computations for an attribute of type String, you can write:

 `GET  /rest/Employee/firstName/?$compute=$all`

**Respuesta**:

````
{
    "salary": {
        "count": 4,
        "min": Anne,
        "max": Victor
    }
}
````

If you want to just get one calculation on an attribute, you can write the following:

 `GET  /rest/Employee/salary/?$compute=sum`

**Respuesta**:

`235000`


If you want to perform a calculation on an Object attribute, you can write the following:

 `GET  /rest/Employee/objectAttribute.property1/?$compute=sum`

Response:

`45`  