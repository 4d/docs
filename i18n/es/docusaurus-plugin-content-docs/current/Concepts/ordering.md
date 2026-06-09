---
id: ordering
title: Ordenando colecciones y objetos
---

To sort a series of data, 4D compares each value against the others by applying comparison criteria defined according to the data type (see [sorting rules](#sorting-rules)). Este proceso se basa en un algoritmo de ordenación que establece un orden total entre todos los elementos. Cuando todos los datos pertenecen al mismo [tipo de datos](./data-types.md), las reglas de comparación son sencillas y están bien definidas.

However, [collections](./dt_collection.md) and [objects](./dt_object.md), including [entity selections](../ORDA/dsMapping.md#entity-selection), can contain elements and attributes of heterogeneous types: scalar types (text, numbers, booleans, dates) or complex types (objects, blobs, collections). When ordering a collection or object containing heterogeneous values, 4D applies a stratified sorting scheme that first partitions elements by type, then applies comparison rules within each type partition.

## Funciones de ordenación

The 4D language provides several mechanisms that rely on sorting collection elements, object attributes, or orchestrate sorting to produce an ordered result:

- **Collection sorting functions**: [`collection.multiSort()`](../API/CollectionClass.md#multisort) (multi-criteria sorting with explicit key and order specification), [`collection.orderBy()`](../API/CollectionClass.md#orderby) (sorting by evaluating an expression on each element), [`collection.sort()`](../API/CollectionClass.md#sort) (in-place sorting according to the natural ordering relation),
- **Funciones de ordenación de la selección de entidades**: [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby), que aplica las mismas reglas de ordenación que las colecciones,
- **Query functions with ordering**: [`entitySelection.query()`](../API/EntitySelectionClass.md#query), [`dataClass.query()`](../API/DataClassClass.md#query) with the `order by attributePath` keyword, which return results in deterministic order,
- **Order-dependent statistical functions**: [`collection.max()`](../API/CollectionClass.md#max), [`collection.min()`](../API/CollectionClass.md#min), [`entitySelection.max()`](../API/EntitySelectionClass.md#max), [`entitySelection.min()`](../API/EntitySelectionClass.md#min), which rely on the ordering relation to identify extrema,
- [**`ORDER BY ATTRIBUTE`**](../commands/order-by-attribute) comando para ordenar una tabla de base de datos en base a un campo objeto.

## Reglas de ordenación

Cuando se ordena una colección o selección de entidades que contiene elementos de diferentes tipos, se aplica una **estratificación basada en el tipo** de acuerdo con el siguiente algoritmo:

1. **Fase de reparto**: los elementos se agrupan en clases de equivalencia en función de su tipo base. Esta fase establece una partición de todo el conjunto de elementos.
2. **Fase de ordenación intraclase**: dentro de cada clase, los elementos se ordenan según reglas de comparación específicas de cada tipo. El orden por defecto es **ascendente**.

Los tipos se ordenan según la secuencia siguiente, con sus respectivas relaciones de comparación en orden ascendente:

| Posición | Tipo           | También incluye                                                                                                        | Regla de comparación                                                                                                                    |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **null**       | punteros (punteros null sólo para colecciones)                                                      | no se aplican criterios de comparación                                                                                                  |
| 2        | **boolean**    |                                                                                                                        | orden lógico: false *antes que* true                                                                                    |
| 3        | **string**     |                                                                                                                        | orden lexicográfico (por ejemplo, "a" *antes* "ab" *antes* "b")                                                      |
| 4        | **number**     | hora (convertido a milisegundos o segundos según la configuración de la base `Time inside objects`) | orden algebraico estándar (comparación numérica)                                                                     |
| 5        | **object**     | blobs, imágenes, punteros no nulos (colecciones)                                                    | orden interno (coherente para las funciones de collection, ver más abajo)                                            |
| 6        | **collection** |                                                                                                                        | orden interno (coherente para las funciones de collection, ver más abajo)                                            |
| 7        | **date**       |                                                                                                                        | orden cronológico (fechas más antiguas *antes* de las más recientes, por ejemplo, ¡1990-01-01! *antes* ¡2000-01-01!) |

### Valores numéricos especiales

Special floating-point values `+INF` (positive infinity), `-INF` (negative infinity), and `NaN` (Not-a-Number) present in collections and objects are ordered according to the following natural sequence: **NaN < -INF < finite values < +INF**.

### Ordenación coherente de las colecciones

Collection sorting functions (see [Ordering functions](#ordering-functions) section above) implement a **consistent sort** for complex types such as objects and collections. By "consistent", we mean that successive calls to the same sorting function (e.g., `collection.orderBy()`) on the same collection produce identical ordering for complex type values. Formally, if a sort expression yields the same comparative result for two elements, the relative order of those elements is preserved.

Other 4D sorting operations do not provide this stability guarantee when comparing complex types.
