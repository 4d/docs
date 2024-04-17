---
id: vp-remove-table-columns
title: VP REMOVE TABLE COLUMNS
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->

**VP REMOVE TABLE COLUMNS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _column_ : Integer {; _count_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName  | Text    | -> | Nombre de la tabla                                             |                  |
| column     | Integer | -> | Índice en la tabla de la columna inicial a eliminar            |                  |
| count      | Text    | -> | Número de columnas a eliminar (debe ser >0) |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

The `VP REMOVE TABLE COLUMNS` command <!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->removes one or _count_ column(s) in the specified _tableName_ at the specified _column_ index<!-- END REF -->. El comando elimina valores y estilos.

El comando elimina las columnas de la tabla _tableName_, NO de la hoja. El número total de columnas de la hoja no se ve afectado por el comando. Los datos a la derecha de la tabla (si los hay) se desplazan automáticamente a la izquierda según el número de columnas eliminadas.

Si _tableName_ no existe, no pasa nada.

#### Ejemplo

Para eliminar dos columnas de la tercera columna de la tabla "dataTable":

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

#### Ver también

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
