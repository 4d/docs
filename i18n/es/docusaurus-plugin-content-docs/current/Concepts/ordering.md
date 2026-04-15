---
id: ordering
title: Ordenando colecciones y objetos
---

To sort a series of data, 4D compares each value against the others by applying comparison criteria defined according to the data type (see [sorting rules](#sorting-rules)). Este proceso se basa en un algoritmo de ordenación que establece un orden total entre todos los elementos. When all data belongs to the same [data type](./data-types.md), the comparison rules are straightforward and well-defined.

However, [collections](./dt_collection.md) and [objects](./dt_object.md), including [entity selections](../ORDA/dsMapping.md#entity-selection), can contain elements and attributes of heterogeneous types: scalar types (text, numbers, booleans, dates) or complex types (objects, blobs, collections). When ordering a collection or object containing heterogeneous values, 4D applies a stratified sorting scheme that first partitions elements by type, then applies comparison rules within each type partition.

## Funciones de ordenación

The 4D language provides several mechanisms that rely on sorting collection elements, object attributes, or orchestrate sorting to produce an ordered result:

- **Collection sorting functions**: [`collection.multiSort()`](../API/CollectionClass.md#multisort) (multi-criteria sorting with explicit key and order specification), [`collection.orderBy()`](../API/CollectionClass.md#orderby) (sorting by evaluating an expression on each element), [`collection.sort()`](../API/CollectionClass.md#sort) (in-place sorting according to the natural ordering relation),
- **Entity selection sorting functions**: [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby), which applies the same sorting rules as collections,
- **Query functions with ordering**: [`entitySelection.query()`](../API/EntitySelectionClass.md#query), [`dataClass.query()`](../API/DataClassClass.md#query) with the `order by attributePath` keyword, which return results in deterministic order,
- **Order-dependent statistical functions**: [`collection.max()`](../API/CollectionClass.md#max), [`collection.min()`](../API/CollectionClass.md#min), [`entitySelection.max()`](../API/EntitySelectionClass.md#max), [`entitySelection.min()`](../API/EntitySelectionClass.md#min), which rely on the ordering relation to identify extrema,
- [**`ORDER BY ATTRIBUTE`**](../commands/order-by-attribute) comando para ordenar una tabla de base de datos en base a un campo objeto.

## Reglas de ordenación

When a collection or entity selection containing elements of different types is sorted, a **type-based stratification** is applied according to the following algorithm:

1. **Fase de reparto**: los elementos se agrupan en clases de equivalencia en función de su tipo base. Esta fase establece una partición de todo el conjunto de elementos.
2. **Intra-class ordering phase**: Within each class, elements are sorted according to type-specific comparison rules. The default order is **ascending**.

Los tipos se ordenan según la secuencia siguiente, con sus respectivas relaciones de comparación en orden ascendente:

| Rank | Tipo           | También incluye                                                                                                        | Regla de comparación                                                                                                                    |
| ---- | -------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **null**       | punteros (punteros null sólo para colecciones)                                                      | no se aplican criterios de comparación                                                                                                  |
| 2    | **boolean**    |                                                                                                                        | orden lógico: false *antes que* true                                                                                    |
| 3    | **string**     |                                                                                                                        | orden lexicográfico (por ejemplo, "a" *antes* "ab" *antes* "b")                                                      |
| 4    | **number**     | time (converted to milliseconds or seconds depending on the `Time inside objects` database setting) | orden algebraico estándar (comparación numérica)                                                                     |
| 5    | **object**     | blobs, imágenes, punteros no nulos (colecciones)                                                    | orden interno (coherente para las funciones de collection, ver más abajo)                                            |
| 6    | **collection** |                                                                                                                        | orden interno (coherente para las funciones de collection, ver más abajo)                                            |
| 7    | **date**       |                                                                                                                        | orden cronológico (fechas más antiguas *antes* de las más recientes, por ejemplo, ¡1990-01-01! *antes* ¡2000-01-01!) |

### Valores numéricos especiales

Special floating-point values `+INF` (positive infinity), `-INF` (negative infinity), and `NaN` (Not-a-Number) present in collections and objects are ordered according to the following natural sequence: **NaN < -INF < finite values < +INF**.

### Ordenación coherente de las colecciones

Collection sorting functions (see [Ordering functions](#ordering-functions) section above) implement a **consistent sort** for complex types such as objects and collections. By "consistent", we mean that successive calls to the same sorting function (e.g., `collection.orderBy()`) on the same collection produce identical ordering for complex type values. Formally, if a sort expression yields the same comparative result for two elements, the relative order of those elements is preserved.

Other 4D sorting operations do not provide this stability guarantee when comparing complex types.
