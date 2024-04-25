---
id: entityset
title: $entityset
---

After [creating an entity set]($method.md#methodentityset) by using `$method=entityset`, you can then use it subsequently.

## Sintaxis disponible

| Sintaxis                                                                                                                                                                       | Ejemplo                                                                        | Descripción                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| [**$entityset/{entitySetID}**](#entitysetentitySetID)                                                                                                                          | `/People/$entityset/0ANUMBER`                                                  | Recupera un conjunto de entidades existente                                                         |
| [**$entityset/{entitySetID}?$operator...&$otherCollection**](#entitysetentitysetidoperatorothercollection) | `/Employee/$entityset/0ANUMBER?$logicOperator=AND &$otherCollection=C0ANUMBER` | Crea un nuevo conjunto de entidades a partir de la comparación de conjuntos de entidades existentes |

## $entityset/{entitySetID}

Retrieves an existing entity set (_e.g._, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)

### Descripción

Esta sintaxis permite ejecutar cualquier operación sobre un conjunto de entidades definido.

Because entity sets have a time limit on them (either by default or after calling `$timeout` with your own limit), you can call `$savedfilter` and `$savedorderby` to save the filter and order by statements when you create an entity set.

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: [`$expand`]($expand.md), [`$filter`]($filter.md), [`$orderby`]($orderby.md), [`$skip`]($skip.md), and [`$top/$limit`]($top_$limit.md).

### Ejemplo

Después de crear un conjunto de entidades, el ID del conjunto de entidades se devuelve junto con los datos. Llame a este ID de la siguiente manera:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`

## $entityset/{entitySetID}?$operator...&$otherCollection

Cree otro conjunto de entidades basado en conjuntos de entidades creados anteriormente

| Parámetros       | Tipo   | Descripción                                                                 |
| ---------------- | ------ | --------------------------------------------------------------------------- |
| $operator        | String | Uno de los operadores lógicos para probar con el otro conjunto de entidades |
| $otherCollection | String | ID del conjunto de entidades                                                |

### Descripción

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/{entitySetID}?$operator... &$otherCollection` syntax, the `$operator` property (whose values are shown below), and another entity set (entity set #2) defined by the `$otherCollection` property. Los dos conjuntos de entidades deben estar en la misma clase de datos.

You can then create another entity set containing the results from this call by using the `$method=entityset` at the end of the REST request.

Aquí están los operadores lógicos:

| Operador  | Descripción                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AND       | Devuelve las entidades comunes a ambos conjuntos de entidades                                                                                                                                          |
| O         | Devuelve las entidades contenidas en ambos conjuntos de entidades                                                                                                                                      |
| EXCEPT    | Devuelve las entidades del conjunto de entidades #1 menos las del conjunto de entidades #2                                                                                                             |
| INTERSECT | Devuelve true o false si hay una intersección de las entidades en ambos conjuntos de entidades (lo que significa que al menos una entidad es común en ambos conjuntos de entidades) |

> Los operadores lógicos no distinguen entre mayúsculas y minúsculas, por lo que puede escribir "AND" o "and".

A continuación se muestra una representación de los operadores lógicos basada en dos conjuntos de entidades. La sección roja es la que se devuelve.

**AND**

![](../assets/en/REST/and.png)

**OR**

![](../assets/en/REST/or.png)

**EXCEPT**

![](../assets/en/REST/except.png)

La sintaxis es la siguiente:

`GET  /rest/dataClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

### Ejemplo

En el ejemplo siguiente, devolvemos las entidades que están en ambos conjuntos de entidades ya que estamos utilizando el operador lógico AND:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

Si queremos saber si los dos conjuntos de entidades se cruzan, podemos escribir lo siguiente:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

Si hay una intersección, esta consulta devuelve true. En caso contrario, devuelve false.

En el siguiente ejemplo creamos un nuevo conjunto de entidades que combina todas las entidades de ambos conjuntos de entidades:

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
