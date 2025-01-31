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

**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )<!-- END REF -->

<!-- REF #_method_.VP MOVE CELLS.Params -->

| Parámetros  | Tipo   |    | Descripción                                                  |                  |
| ----------- | ------ | -- | ------------------------------------------------------------ | ---------------- |
| originRange | Object | -> | Rango de celdas desde donde copiar                           |                  |
| targetRange | Object | -> | Rango de destino para los valores, el formato y las fórmulas |                  |
| options     | Object | -> | Opciones adicionales                                         | <!-- END REF --> |

#### Descripción

El comando `VP MOVE CELLS` <!-- REF #_method_.VP MOVE CELLS.Summary -->mueve o copia los valores, estilo y fórmulas de *originRange* a *targetRange*<!-- END REF -->.

*originRange* y *targetRange* pueden referirse a diferentes áreas View Pro.

En *originRange*, pase un objeto rango que contenga los valores, el estilo y las celdas de la fórmula a copiar o mover. Si *originRange* es un rango combinado, sólo se utiliza el primero.

En *targetRange*, pase el rango de celdas donde se copiarán o moverán los valores de las celdas, el estilo y las fórmulas.

El parámetro *options* tiene varias propiedades:

| Propiedad    | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy         | Boolean | Determina si los valores, el formato y las fórmulas de las celdas de *originRange* se eliminan después de ejecutar el comando:<ul><li>*False* (por defecto) para eliminarlos</li><li>*True* para mantenerlos</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| pasteOptions | Integer | Especifica lo que se pega. Valores posibles: <p><table><tr><th>Valor</th><th>Descripción</th></tr><tr><td>`vk clipboard options all` (por defecto)</td><td>Pega todos los objetos de datos, incluidos los valores, el formato y las fórmulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Pega sólo el formato.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Pega sólo las fórmulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Pega las fórmulas y el formato.</td></tr><tr><td>`vk clipboard options values`</td><td>Pega sólo los valores.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Pega los valores y el formato.</td></tr></table></p> |

Se tienen en cuenta las opciones de pegado definidas en las [opciones del libro de trabajo](vp-set-workbook-options.md).

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
