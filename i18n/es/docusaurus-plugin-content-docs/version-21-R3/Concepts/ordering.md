---
id: ordering
title: Ordenando colecciones y objetos
---

Para ordenar una serie de datos, 4D compara cada valor con los demás aplicando criterios de comparación definidos en función del tipo de datos (ver [reglas de ordenación](#sorting-rules)). Este proceso se basa en un algoritmo de ordenación que establece un orden total entre todos los elementos. Cuando todos los datos pertenecen al mismo [tipo de datos](./data-types.md), las reglas de comparación son sencillas y están bien definidas.

Sin embargo, las [colecciones](./dt_collection.md) y los [objetos](./dt_object.md), incluidas las [selecciones de entidades](../ORDA/dsMapping.md#entity-selection), pueden contener elementos y atributos de tipos heterogéneos: tipos escalares (texto, números, booleanos, fechas) o tipos complejos (objetos, blobs, colecciones). Al ordenar una colección u objeto que contenga valores heterogéneos, 4D aplica un esquema de ordenación estratificada que primero divide los elementos por tipo y, a continuación, aplica reglas de comparación dentro de cada partición de tipo.

## Funciones de ordenación

El lenguaje 4D ofrece varios mecanismos que se basan en ordenar los elementos de una colección o los atributos de un objeto, o que coordinan la ordenación para generar un resultado ordenado:

- **Funciones de ordenación de colecciones**: [`collection.multiSort()`](../API/CollectionClass.md#multisort) (ordenación por múltiples criterios con especificación explícita de clave y orden), [`collection.orderBy()`](../API/CollectionClass.md#orderby) (ordenación mediante la evaluación de una expresión en cada elemento), [`collection.sort()`](../API/CollectionClass.md#sort) (ordenación in situ según la relación de orden natural),
- **Funciones de ordenación de la selección de entidades**: [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderby), que aplica las mismas reglas de ordenación que las colecciones,
- **Funciones de consulta con ordenación**: [`entitySelection.query()`](../API/EntitySelectionClass.md#query), [`dataClass.query()`](../API/DataClassClass.md#query) con la palabra clave `order by attributePath`, que devuelven los resultados en un orden determinista,
- **Funciones estadísticas dependientes del orden**: [`collection.max()`](../API/CollectionClass.md#max), [`collection.min()`](../API/CollectionClass.md#min), [`entitySelection.max()`](../API/EntitySelectionClass.md#max), [`entitySelection.min()`](../API/EntitySelectionClass.md#min), que se basan en la relación de ordenación para identificar los extremos,
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

Los valores especiales de punto flotante `+INF` (infinito positivo), `-INF` (infinito negativo) y `NaN` (Not-a-Number) presentes en colecciones y objetos se ordenan según la siguiente secuencia natural: **NaN < -INF < valores finitos < +INF**.

### Ordenación coherente de las colecciones

Las funciones de ordenación de colecciones (ver la sección [Funciones de ordenación](#ordering-functions) más arriba) implementan una **ordenación coherente** para los tipos complejos, como objetos y colecciones. Por "consistente", queremos decir que las llamadas sucesivas a la misma función de ordenación (por ejemplo, `collection.orderBy()`) en la misma colección producen un orden idéntico para valores complejos de tipo. Formalmente, si una expresión de ordenación arroja el mismo resultado comparativo para dos elementos, se mantiene el orden relativo de dichos elementos.

Otras operaciones de ordenación 4D no ofrecen esta garantía de estabilidad al comparar tipos complejos.
