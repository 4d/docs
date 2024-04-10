---
id: vp-create-table
title: VP CREATE TABLE
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 19 R8       | Soporte de opciones de tema: `bandColumns`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme` |
| 19 R7       | Soporte de la opción `allowAutoExpand`                                                                                         |
| 19 R6       | Añadidos                                                                                                                       |

</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->

**VP CREATE TABLE** ( _rangeObj_ : Object ; _tableName_ : Text {; _source_ : Text} {; _options_ : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

| Parámetros | Tipo                                                                                  |    | Descripción                                                        |                  |
| ---------- | ------------------------------------------------------------------------------------- | -- | ------------------------------------------------------------------ | ---------------- |
| rangeObj   | Object                                                                                | -> | Objeto rango                                                       |                  |
| tableName  | Text                                                                                  | -> | Nombre de la tabla                                                 |                  |
| source     | Text                                                                                  | -> | Nombre de la propiedad del contexto de datos a mostrar en la tabla |                  |
| options    | [cs.ViewPro.TableOptions](../classes.md#tableoptions) | -> | Opciones adicionales                                               | <!-- END REF --> |

#### Descripción

El comando `VP CREATE TABLE` <!-- REF #_method_.VP CREATE TABLE.Summary -->crea una tabla en el rango especificado<!-- END REF -->. Puede crear una tabla en un rango de celdas para facilitar la gestión y el análisis de un grupo de datos relacionados. A table typically contains related data in rows and columns, and takes advantage of a [data context](vp-set-data-context).

![](../../assets/en/ViewPro/vp-create-table.png)

En _rangeObj_, pase el rango de celdas donde se creará la tabla.

En _tableName_, introduzca un nombre para la tabla. El nombre debe:

- ser único en la hoja
- incluir al menos 5 caracteres
- no incluir espacios o empezar con un número

In _source_, you can pass a property name of a [data context](vp-set-data-context.md) to display its data in the table. Esto vincula la tabla al contexto de datos. Cuando se actualiza el contexto de los datos, los datos mostrados en la tabla se actualizan en consecuencia. La propiedad _source_ debe contener una colección de objetos y cada elemento representa una fila.

- Si no especifica una _source_, el comando crea una tabla vacía con el tamaño definido en _rangeObj_.
- Si la _source_ especificada no se puede mostrar completamente en el documento, no se crea ninguna tabla.

In the _options_ parameter, pass an object of the [`cs.ViewPro.TableOptions` class](../classes.md#tableoptions) that contains the table properties to set.

Dentro del objeto _options_, la colección _tableColumns_ determina la estructura de las columnas de la tabla. La longitud de la colección _tableColumns_ debe ser igual al recuento de columnas del rango:

- Cuando el conteo de columnas en _rangeObj_ excede el número de columnas en _tableColumns_, la tabla se llena con columnas vacías adicionales.
- Cuando la cuenta de columnas en _rangeObj_ es inferior al número de _tableColumns_, la tabla muestra un número de columnas que coinciden con el recuento de columnas del rango.

Si pasa una _source_ pero no la opción _tableColumn_, el comando genera las columnas automáticamente. En este caso, _rangeObj_ debe ser un rango de celdas. De lo contrario, se utilizará la primera celda del rango. Cuando se generan columnas automáticamente, se aplican las siguientes reglas:

- Si los datos pasados al comando son una colección de objetos, los nombres de las propiedades se utilizan como títulos de las columnas. Por ejemplo:

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```

Aquí los títulos de las columnas serían `LastName` y `FirstName`.

- Si los datos pasados al comando son una colección de valores escalares, deben contener una colección de subcolecciones:

  - La colección de primer nivel contiene subcolecciones de valores. Cada subcolección define una línea. Pasa una colección vacía para saltar una línea. El número de valores de la primera subcolección determina cuántas columnas se crean.
  - Los índices de las subcolecciones se utilizan como títulos de las columnas.
  - Cada subcolección define los valores de las celdas para la línea. Los valores pueden ser `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` o `Picture`. A `Time` value must be an a object containing a time attribute, as described in [VP SET VALUE](vp-set-value.md).

> Esto sólo funciona cuando se generan columnas automáticamente. No puede utilizar una colección de datos escalares con la opción _tableColumns_.

#### Ejemplo

Para crear una tabla utilizando un contexto de datos:

```4d
// Define un contexto de datos
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Define las columnas de la tabla
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Email"; "dataField"; "email"))

// Crea una tabla de la colección "people"
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

Aquí está el resultado:

![](../../assets/en/ViewPro/vp-create-table.png)

#### Ver también

[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP Get table column index](vp-get-table-column-index.md)<br/>
[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE](vp-remove-table.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)
