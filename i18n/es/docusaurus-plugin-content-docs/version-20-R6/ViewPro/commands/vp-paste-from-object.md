---
id: vp-paste-from-object
title: VP PASTE FROM OBJECT
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->

**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Longint} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| Parámetros | Tipo    |    | Descripción                           |                  |
| ---------- | ------- | -- | ------------------------------------- | ---------------- |
| rangeObj   | Object  | -> | Objeto de rango de celda              |                  |
| dataObject | Object  | -> | Objeto que contiene los datos a pegar |                  |
| options    | Longint | -> | Especifica lo que se pega             | <!-- END REF --> |

#### Descripción

The `VP PASTE FROM OBJECT` command <!-- REF #_method_.PASTE FROM OBJECT.Summary -->pastes the contents, style and formulas stored in *dataObject* to the *rangeObj* object<!-- END REF -->.

In *rangeObj*, pass the cell range object where the values, formatting, and/or formula cells will be pasted. Si *rangeObj* se refiere a más de una celda, sólo se utiliza la primera.

En *dataObject*, pase el objeto que contiene los datos de la celda, el formato y las fórmulas a pegar.

En el parámetro opcional *options*, puede especificar qué pegar en el rango de celdas. Valores posibles:

|Constant|Description|
\|---|---|---|
|`vk clipboard options all`|Pastes all data objects, including values, formatting, and formulas.|
|`vk clipboard options formatting`|Pastes only the formatting.|
|`vk clipboard options formulas`|Pastes only the formulas.|
|`vk clipboard options formulas and formatting`|Pastes formulas and formatting.|
|`vk clipboard options values`|Pastes only values.|
|`vk clipboard options value and formatting`|Pastes values and formatting.|

Se tienen en cuenta las opciones de pegado definidas en las [opciones del libro de trabajo](vp-set-workbook-options.md).

If *options* refers to a paste option not present in the copied object (e.g. formulas), the command does nothing.

#### Ejemplo

Ver el ejemplo de [VP Copy to object](vp-copy-to-object.md)

#### Ver también

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
