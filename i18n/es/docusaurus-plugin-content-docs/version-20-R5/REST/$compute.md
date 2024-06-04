---
id: compute
title: $compute
---

Cálculo de atributos específicos (_e._, `Employee/salary/?$compute=sum)` o en el caso de un atributo Objeto (_por ejemplo_, Employee/objectAtt.property1/?$compute=sum)

## Descripción

Este parámetro le permite realizar cálculos sobre sus datos.

Si desea realizar un cálculo sobre un atributo, escriba lo siguiente:

`GET  /rest/Employee/salary/?$compute=$all`

Si desea pasar un atributo Objeto, debe pasar una de sus propiedades. Por ejemplo:

`GET  /rest/Employee/objectAtt.property1/?$compute=$all`

Puede utilizar cualquiera de las siguientes palabras claves:

| Palabras clave | Descripción                                                                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $all           | Un objeto JSON que define todas las funciones del atributo (promedio, recuento, mínimo, máximo y suma para los atributos de tipo Number y count, mínimo y máximo para los atributos de tipo String |
| average        | Obtener la media de un atributo numérico                                                                                                                                                                              |
| count          | Obtener el número total en la colección o en la clase de datos (en ambos casos hay que especificar un atributo)                                                                                    |
| min            | Obtener el valor mínimo de un atributo numérico o el valor más bajo en un atributo de tipo String                                                                                                                     |
| max            | Obtener el valor máximo de un atributo numérico o el valor más alto en un atributo de tipo String                                                                                                                     |
| sum            | Obtener la suma de un atributo numérico                                                                                                                                                                               |

## Ejemplo

Si desea obtener todos los cálculos de un atributo de tipo Número, puede escribir:

`GET  /rest/Employee/salary/?$compute=$all`

**Response**:

```
{
    "salary": {
        "count": 4,
        "sum": 335000,
        "average": 83750,
        "min": 70000,
        "max": 99000
    }
}
```

Si desea obtener todos los cálculos de un atributo de tipo String, puede escribir:

`GET  /rest/Employee/firstName/?$compute=$all`

**Response**:

```
{
    "salary": {
        "count": 4,
        "min": Anne,
        "max": Victor
    }
}
```

Si desea obtener un cálculo con un atributo, escriba lo siguiente:

`GET  /rest/Employee/salary/?$compute=sum`

**Response**:

`235000`

Si desea realizar un cálculo con un atributo Objeto, escriba lo siguiente:

`GET  /rest/Employee/objectAttribute.property1/?$compute=sum`

Respuesta:

`45`
