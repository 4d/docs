---
id: filter
title: $filter
---

Permite consultar los datos de una clase de datos o de un método (*por ejemplo*, `$filter="firstName!='' AND salary>30000"`)

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

También puede utilizar la propiedad `params` de 4D, que es una colección de valores.

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]'**

Por ejemplo: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` donde firstName y salary son los atributos de la clase de datos Employee.

Para más información sobre cómo consultar datos en 4D, consulte la documentación de [dataClass.query()](../API/DataClassClass.md#query).

> Al insertar comillas (') o comillas dobles ("), debe escaparlas utilizando su código de caracteres:
>
> <li>Comillas ('): \u0027</li>
> <li>Comillas dobles ("): \u0022</li>
>
> Por ejemplo, puede escribir lo siguiente al pasar un valor con comillas cuando utilice la propiedad \*params  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> Si pasa el valor directamente, puede escribir lo siguiente:
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Atributo

Si el atributo está en la misma clase de datos, puede pasarlo directamente (*p. ej.*, `firstName`). Sin embargo, si quiere consultar otra clase de datos, debe incluir el nombre del atributo relacional y el nombre del atributo, es decir, la ruta de acceso (*por ejemplo*, nombre.empleador). El nombre del atributo distingue entre mayúsculas y minúsculas (`firstName` no es igual a `FirstName`).

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

## Similitud vectorial

If the attribute stores [**vector objects**](../API/VectorClass.md) (see how to [configure a 4D field to only store 4D.Vector class objects](../Develop/field-properties.md#class)), you can filter the dataclass using **vectors**, aka **embeddings**.

For more information about vector similarity searches, please refer to [Query by vector similarity](../API/DataClassClass.md#query-by-vector-similarity) section.

Utilice la propiedad `params` para ofrecer al filtro el parámetro de comparación de vectores, utilizando una sintaxis como:

**\{vectorAttribute\} \{comparator\} \{placeholder\}&$params=vectorComparison**

El parámetro *vectorComparison* es una colección de los siguientes elementos:

| Propiedad                                                                        | Tipo                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].vector    | Colección de números | Obligatorio. Una colección que representa el vector a comparar                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [].metric    | Text                 | Opcional. [Cálculo vectorial](../API/VectorClass.md#understanding-the-different-vector-computations) a utilizar para la consulta. Supported values:<li>"cosine" (default if omitted): calculates the cosine similarity between vectors.</li><li>"dot": calculates the dot similarity of vectors.</li><li>"euclidean": calculates the Euclidean distance between vectors. |
| [].threshold | Real                 | Opcional (por defecto: 0,5). Un valor umbral utilizado para filtrar las comparaciones de vectores en función de su puntuación de similitud coseno, punto o euclídea según la "métrica" seleccionada. Es altamente recomendable elegir una similitud que se adapte mejor a su caso de uso específico para obtener resultados óptimos.                                                                                                                     |

Only a subset of **comparator** symbols is supported with vector comparisons. Tenga en cuenta que comparan los resultados con el valor umbral:

| Comparador        | Símbolo(s) | Comentario                  |
| ----------------- | ----------------------------- | --------------------------- |
| Menor que         | <    | Inferior al umbral          |
| Mayor que         | >                             | Superior al umbral          |
| Menor o igual que | <=   | Inferior o igual al umbral  |
| Mayor o igual que | > =                           | Mayor o igual que el umbral |

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

En este ejemplo, hacemos una búsqueda vectorial con valores de base:

```
 GET  /rest/Person/?filter="VectorAtt>=:1"&$params='[{vector:[1,2,3],threshold:1}]'
```
