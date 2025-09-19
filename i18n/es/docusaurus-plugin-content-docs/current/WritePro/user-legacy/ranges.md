---
id: ranges
title: Rangos
displayed_sidebar: docs
slug: /WritePro/user/ranges
---



4D Write Pro le permite seleccionar y manipular por programación el contenido del documento. Dado que el contenido seleccionado puede incluir texto, imágenes, tablas, etc., y también etiquetas de formato (invisibles), 4D Write Pro funciona con objetos llamados **rangos**.

Un rango es un objeto que representa una porción de un documento 4D Write Pro:

- un rango de caracteres, párrafos, imágenes o tablas se define a través de posiciones de caracteres dentro del documento principal,
- un rango de celdas, columnas y filas se define a través de las posiciones de las celdas y están ancladas a la tabla principal.

Puede usarse para designar elementos a seleccionar o manipular atributos en una parte del documento (usando [`WP GET ATTRIBUTES`](../commands/wp-get-attributes) y [`WP SET ATTRIBUTES`](../commands/wp-set-attributes)).

Hay diferentes tipos de rangos. Puede determinar el tipo de rango utilizando el atributo `wk type` (solo lectura). Cada rango contiene varios atributos privados que lo definen:

| Constante   | Valor | Comentario |
|------------|-------|------------|
| `wk end`   | `end` | (Atributo de rango de sólo lectura) |
| `wk owner` | `owner` | (Atributo de rango de sólo lectura) |
| `wk start` | `start` | (Atributo de rango de sólo lectura) |
| `wk type`  | `type` | (Atributo de rango de sólo lectura) Tipo de rango 4D Write Pro. Puede ser 0: rango por defecto (por defecto), 1: rango párrafo, 2: rango imagen |

Los rangos de filas, columnas y celdas de [tables](./handling-tables.md) tienen atributos privados específicos que permiten definirlos:

| Constante              | Valor            | Comentario |
|------------------------|------------------|-------------|
| `wk cell count`        | `cellCount`      | Número total de celdas en la fila.<br>**Tipo de valor**: Entero largo *(valor para `wk type table row`)* |
| `wk column count`      | `columnCount`    | *(Atributo de rango de sólo lectura)* Número total de columnas del rango.<br>**Tipo de valor**: Entero largo |
| `wk first column`      | `firstColumn`    | *(Atributo de rango de sólo lectura)* Número de la primera columna del rango.<br>**Valor**: Entero largo |
| `wk first row`         | `firstRow`       | *(Atributo de rango de sólo lectura)* Número de la primera fila del rango.<br>**Valor**: Entero largo |
| `wk header row count`  | `headerRowCount` | *(Lectura/Escritura)* Número de líneas de la tabla con el atributo `wk header` definido como True.<br>El valor máximo es 5. Si se pasa un valor superior a 5, `wk header` se define como True sólo para las cinco primeras líneas *(ver [Encabezados repetidos](./handling-tables.md#repeated-headers))* |
| `wk row count`         | `rowCount`       | *(Atributo de rango de sólo lectura)* Número total de columnas en el rango.<br>**Valor**: Entero largo |
| `wk table`             | `table`          | *(Atributo de solo lectura)* La tabla padre.<br>**Tipo de valor**: objeto |
| `wk table ID`          | `tableID`        | *(Atributo de rango de sólo lectura)* ID de la tabla principal del rango.<br>**Valor**: cadena |



Varios comandos le permiten definir rangos:

- [WP Text range](../commands-legacy/wp-text-range.md): devuelve un nuevo rango correspondiente a los límites que pasa como parámetros.
- [WP Selection range](../commands-legacy/wp-selection-range): devuelve un nuevo rango que corresponde a la selección usuario actual.
- [WP Picture range](../commands-legacy/wp-picture-range): devuelve un nuevo rango que contiene solo las imágenes.
- [WP Paragraph range](../commands-legacy/wp-paragraph-range): devuelve un nuevo rango que contiene solo los párrafos.
- [WP Table range](../commands-legacy/wp-table-range): devuelve un nuevo rango que contiene solo las tablas.

Puede obtener información sobre la posición de un rango en un documento (número de página, número de columna…) usando la comando [WP Get position](../commands-legacy/wp-get-position).



