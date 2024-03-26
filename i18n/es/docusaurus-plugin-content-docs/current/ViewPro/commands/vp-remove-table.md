---
id: vp-remove-table
title: VP REMOVE TABLE
---

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R6  | Añadidos       |

</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->

**VP REMOVE TABLE** ( _vpAreaName_ : Object; _tableName_ : Text {; _options_ : Integer} {; _sheet_ : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre del área View Pro                                       |                  |
| tableName  | Text    | -> | Nombre de la tabla a eliminar                                  |                  |
| options    | Integer | -> | Opciones adicionales                                           |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

The `VP REMOVE TABLE` command <!-- REF #_method_.VP REMOVE TABLE.Summary -->removes a table<!-- END REF --> that you created with [VP CREATE TABLE](vp-create-table.md).

In _vpAreaName_, pass the name of the area where the table to remove is located.

En _tableName_, pase el nombre de la tabla a eliminar.

In _options_, you can specify additional behavior. Los valores posibles son:

| Constante               | Valor | Descripción                                  |
| ----------------------- | ----- | -------------------------------------------- |
| vk table remove all     | 0     | Eliminar todos los estilos y datos incluidos |
| vk table remove style   | 1     | Eliminar estilo pero mantener datos          |
| vk tabla eliminar datos | 2     | Eliminar datos pero mantener el estilo       |

Los nombres de tablas se definen a nivel de la hoja. You can specify where the table is located using the optional _sheet_ parameter (indexing starts at 0).

#### Ejemplo

Para eliminar la tabla "people" en la segunda hoja y mantener los datos en las celdas:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)
