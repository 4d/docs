---
id: compute
title: '$compute'
---

Calculate on specific attributes (*e.g.*, `Employee/salary/?$compute=sum)` or in the case of an Object attribute (*e.g.*, Employee/objectAtt.property1/?$compute=sum)


## Descrição

This parameter allows you to do calculations on your data.

If you want to perform a calculation on an attribute, you write the following:

 `GET  /rest/Employee/salary/?$compute=$all`

If you want to pass an Object attribute, you must pass one of its property. Por exemplo:

 `GET  /rest/Employee/objectAtt.property1/?$compute=$all`

Pode utilizar qualquer uma das seguintes palavras-chave:


| Palavra-chave | Descrição                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $all          | A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String |
| average       | Obter a média de um atributo numérico                                                                                                                                                 |
| count         | Obter o número total na coleção ou na classe de dados (em ambos os casos há que especificar um atributo)                                                                              |
| min           | Get the minimum value on a numerical attribute or the lowest value in an attribute of type String                                                                                     |
| max           | Get the maximum value on a numerical attribute or the highest value in an attribute of type String                                                                                    |
| sum           | Obter a soma de um atributo numérico                                                                                                                                                  |


## Exemplo

If you want to get all the computations for an attribute of type Number, you can write:

 `GET  /rest/Employee/salary/?$compute=$all`

**Resposta**:

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

Se quiser obter todos os cálculos para um atributo do tipo String, pode escrever:

 `GET  /rest/Employee/firstName/?$compute=$all`

**Resposta**:

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

**Resposta**:

`235000`


If you want to perform a calculation on an Object attribute, you can write the following:

 `GET  /rest/Employee/objectAttribute.property1/?$compute=sum`

Responsa:

`45`  