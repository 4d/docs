---
id: vp-remove-table
title: VP REMOVE TABLE
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R6       | Añadidos       |

</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->

**VP REMOVE TABLE** ( *vpAreaName* : Object; *tableName* : Text {; *options* : Integer} {; *sheet* : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre del área View Pro                                       |                  |
| tableName  | Text    | -> | Nombre de la tabla a eliminar                                  |                  |
| options    | Integer | -> | Opciones adicionales                                           |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP REMOVE TABLE` <!-- REF #_method_.VP REMOVE TABLE.Summary -->elimina una tabla<!-- END REF --> que haya creado con [VP CREATE TABLE](vp-create-table.md).

En *vpAreaName*, pase el nombre del área donde se encuentra la tabla a eliminar.

En *tableName*, pase el nombre de la tabla a eliminar.

En *options*, puede especificar comportamientos adicionales. Los valores posibles son:

| Constante               | Valor | Descripción                                  |
| ----------------------- | ----- | -------------------------------------------- |
| vk table remove all     | 0     | Eliminar todos los estilos y datos incluidos |
| vk table remove style   | 1     | Eliminar estilo pero mantener datos          |
| vk tabla eliminar datos | 2     | Eliminar datos pero mantener el estilo       |

Los nombres de tablas se definen a nivel de la hoja. Puede especificar dónde se encuentra la tabla utilizando el parámetro opcional *sheet* (la indexación comienza en 0).

#### Ejemplo

Para eliminar la tabla "people" en la segunda hoja y mantener los datos en las celdas:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)
