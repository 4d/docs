---
id: ordering
title: Ordering collections and objects
---

To sort a series of data, 4D compares each value against the others by applying comparison criteria defined according to the data type (see [sorting rules](#sorting-rules)). This process relies on a sorting algorithm that establishes a total order across all elements. When all data belongs to the same [data type](./data-types.md), the comparison rules are straightforward and well-defined.

However, [collections](./dt_collection.md) and [objects](./dt_object.md), including [entity selections](../ORDA/dsMapping.md#entity-selection), can contain elements and attributes of heterogeneous types: scalar types (text, numbers, booleans, dates) or complex types (objects, blobs, collections). When ordering a collection or object containing heterogeneous values, 4D applies a stratified sorting scheme that first partitions elements by type, then applies comparison rules within each type partition.

## Ordering functions

The 4D language provides several mechanisms that rely on sorting collection elements, object attributes, or orchestrate sorting to produce an ordered result:

- **Collection sorting functions**: [`collection.multiSort()`](../API/CollectionClass.md#multisort) (multi-criteria sorting with explicit key and order specification), [`collection.orderBy()`](../API/CollectionClass.md#orderby) (sorting by evaluating an expression on each element), [`collection.sort()`](../API/CollectionClass.md#sort) (in-place sorting according to the natural ordering relation),
- **Entity selection sorting functions**: [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby), which applies the same sorting rules as collections,
- **Query functions with ordering**: [`entitySelection.query()`](../API/EntitySelectionClass.md#query), [`dataClass.query()`](../API/DataClassClass.md#query) with the `order by attributePath` keyword, which return results in deterministic order,
- **Order-dependent statistical functions**: [`collection.max()`](../API/CollectionClass.md#max), [`collection.min()`](../API/CollectionClass.md#min), [`entitySelection.max()`](../API/EntitySelectionClass.md#max), [`entitySelection.min()`](../API/EntitySelectionClass.md#min), which rely on the ordering relation to identify extrema,
- [**`ORDER BY ATTRIBUTE`**](../commands/order-by-attribute) command to order a database table based upon an object field.

## Sorting rules

When a collection or entity selection containing elements of different types is sorted, a **type-based stratification** is applied according to the following algorithm:

1. **Partitioning phase**: Elements are grouped into equivalence classes based on their base type. This phase establishes a partition of the entire element set.
2. **Intra-class ordering phase**: Within each class, elements are sorted according to type-specific comparison rules. The default order is **ascending**.

Types are ordered according to the following sequence, with their respective comparison relations in ascending order:

| Rank | Tipo           | Also includes                                                                                                          | Comparison rule                                                                                                                                     |
| ---- | -------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **null**       | pointers (null pointers only for collections)                                                       | no comparison criteria applicable                                                                                                                   |
| 2    | **boolean**    |                                                                                                                        | logical ordering: false *before* true                                                                                               |
| 3    | **string**     |                                                                                                                        | lexicographical order (e.g., "a" *before* "ab" *before* "b")                                     |
| 4    | **number**     | time (converted to milliseconds or seconds depending on the `Time inside objects` database setting) | standard algebraic order (numeric comparison)                                                                                    |
| 5    | **object**     | blobs, pictures, non-null pointers (collections)                                                    | internal order (consistent for collection functions, see below)                                                                  |
| 6    | **collection** |                                                                                                                        | internal order (consistent for collection functions, see below)                                                                  |
| 7    | **date**       |                                                                                                                        | chronological order (older dates *before* newer dates, e.g., !1990-01-01! *before* !2000-01-01!) |

### Special numeric values

Special floating-point values `+INF` (positive infinity), `-INF` (negative infinity), and `NaN` (Not-a-Number) present in collections and objects are ordered according to the following natural sequence: **NaN < -INF < finite values < +INF**.

### Consistent ordering in collections

Collection sorting functions (see [Ordering functions](#ordering-functions) section above) implement a **consistent sort** for complex types such as objects and collections. By "consistent", we mean that successive calls to the same sorting function (e.g., `collection.orderBy()`) on the same collection produce identical ordering for complex type values. Formally, if a sort expression yields the same comparative result for two elements, the relative order of those elements is preserved.

Other 4D sorting operations do not provide this stability guarantee when comparing complex types.
