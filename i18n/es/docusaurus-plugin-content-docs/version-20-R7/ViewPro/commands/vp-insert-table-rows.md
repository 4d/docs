---
id: vp-insert-table-rows
title: VP INSERT TABLE ROWS
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->

**VP INSERT TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

| Parámetros  | Tipo    |    | Descripción                                                    |                  |
| ----------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName   | Text    | -> | Nombre de la tabla                                             |                  |
| row         | Integer | -> | Índice en la tabla de la línea inicial a insertar              |                  |
| count       | Integer | -> | Número de líneas a añadir (debe ser >0)     |                  |
| insertAfter | Integer | -> | `vk table insert before` o `vk table insert after` *fila*      |                  |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP INSERT TABLE ROWS` <!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->inserta una o *count* fila(s) vacía(s) en el *tableName* especificado en el índice *row* especificado<!-- END REF -->.

En el parámetro *insertAfter*, puede pasar una de las siguientes constantes para indicar si la(s) línea(s) debe(n) ser insertada(s) antes o después del índice *row*:

| Constante                | Valor | Descripción                                                                                         |
| ------------------------ | ----- | --------------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0     | Insertar fila(s) antes de la *fila* (por defecto si se omite) |
| `vk table insert after`  | 1     | Insertar línea(s) después de la *línea*                                          |

Este comando inserta algunas líneas en la tabla *tableName*, NO en la hoja. El número total de líneas de la hoja no se ve afectado por el comando. Los datos presentes debajo de la tabla (si los hay) se desplazan automáticamente hacia abajo según el número de líneas añadidas.

Si la tabla *tableName* está vinculada a un [contexto de datos](vp-set-data-context.md), el comando inserta nuevos elementos vacíos en la colección.

Si *tableName* no existe o si no hay suficiente espacio en la hoja, no ocurre nada.

#### Ejemplo

Usted crea una tabla con un contexto de datos:

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../../assets/en/ViewPro/table-base.png)

Si quiere insertar dos líneas y dos columnas en la tabla, puede escribir:

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../../assets/en/ViewPro/table-insert.png)

#### Ver también

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
