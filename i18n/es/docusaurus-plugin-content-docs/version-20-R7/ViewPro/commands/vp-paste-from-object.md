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
| options    | Integer | -> | Especifica lo que se pega             | <!-- END REF --> |

#### Descripción

El comando `VP PASTE FROM OBJECT` <!-- REF #_method_.PASTE FROM OBJECT.Summary -->pega el contenido, estilo y fórmulas almacenadas en *dataObject* al objeto *rangeObj*<!-- END REF -->.

En *rangeObj* pase el objeto rango de celdas donde se pegarán los valores, el formato y/o las celdas de la fórmula. Si *rangeObj* se refiere a más de una celda, sólo se utiliza la primera.

En *dataObject*, pase el objeto que contiene los datos de la celda, el formato y las fórmulas a pegar.

En el parámetro opcional *options*, puede especificar qué pegar en el rango de celdas. Valores posibles:

|Constante|Descripción|
\|---|---|---|
|`vk clipboard options all`|Pega todos los objetos de datos, incluyendo valores, formato y fórmulas.|
|`vk clipboard options formatting`|Pega solo el formato.|
|`vk clipboard options formulas`|Pega solo las fórmulas.|
|`vk clipboard options formulas and formatting`|Pega fórmulas y formato.|
|`vk clipboard options values`|Pega solo valores.|
|`vk clipboard options value and formatting`|Pega valores y formato.|

Se tienen en cuenta las opciones de pegado definidas en las [opciones del libro de trabajo](vp-set-workbook-options.md).

Si *options* se refiere a una opción de pegado que no está presente en el objeto copiado (por ejemplo, fórmulas), el comando no hace nada.

#### Ejemplo

Ver el ejemplo de [VP Copy to object](vp-copy-to-object.md)

#### Ver también

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
