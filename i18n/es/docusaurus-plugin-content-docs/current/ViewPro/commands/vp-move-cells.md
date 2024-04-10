---
id: vp-move-cells
title: VP MOVE CELLS
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

<!-- REF #_method_.VP MOVE CELLS.Syntax -->

**VP MOVE CELLS** ( _originRange_ : Object ; _targetRange_ : Object ; _options_ : Object )<!-- END REF -->

<!-- REF #_method_.VP MOVE CELLS.Params -->

| Parámetros  | Tipo   |    | Descripción                                                  |                  |
| ----------- | ------ | -- | ------------------------------------------------------------ | ---------------- |
| originRange | Object | -> | Rango de celdas desde donde copiar                           |                  |
| targetRange | Object | -> | Rango de destino para los valores, el formato y las fórmulas |                  |
| options     | Object | -> | Opciones adicionales                                         | <!-- END REF --> |

#### Descripción

The `VP MOVE CELLS` command <!-- REF #_method_.VP MOVE CELLS.Summary -->moves or copies the values, style and formulas from _originRange_ to _targetRange_<!-- END REF -->.

_originRange_ y _targetRange_ pueden referirse a diferentes áreas View Pro.

En _originRange_, pase un objeto rango que contenga los valores, el estilo y las celdas de la fórmula a copiar o mover. If _originRange_ is a combined range, only the first one is used.

In _targetRange_, pass the range of cells where the cell values, style, and formulas will be copied or moved.

El parámetro _options_ tiene varias propiedades:

| Propiedad    | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy         | Boolean | Determines if the values, formatting and formulas of the cells in _originRange_ are removed after the command executes:<ul><li>_False_ (default) to remove them</li><li>_True_ to keep them</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| pasteOptions | Longint | Especifica lo que se pega. Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Pastes all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Pastes only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Pastes only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Pastes the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Pastes only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Pastes the values and formatting.</td></tr></table></p> |

The paste options defined in the [workbook options](vp-set-workbook-options.md) are taken into account.

#### Ejemplo

Para copiar el contenido, los valores, el formato y las fórmulas de un rango origen:

```4d
var $originRange; $targetRange; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.pasteOptions:=vk clipboard options all

VP MOVE CELLS($originRange; $targetRange; $options)
```

#### Ver también

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
