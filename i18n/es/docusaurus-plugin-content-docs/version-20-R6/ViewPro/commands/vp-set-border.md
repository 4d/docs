---
id: vp-set-border
title: VP SET BORDER
---

<!-- REF #_method_.VP SET BORDER.Syntax -->

**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object ; *borderPosObj* : Objeto ) <!-- END REF -->

<!-- REF #_method_.VP SET BORDER.Params -->

| Parámetros     | Tipo   |    | Descripción                                     |                  |
| -------------- | ------ | -- | ----------------------------------------------- | ---------------- |
| rangeObj       | Object | -> | Objeto rango                                    |                  |
| borderStyleObj | Object | -> | Objeto que contiene el estilo de línea de borde |                  |
| borderPosObj   | Object | -> | Objeto que contiene la posición del borde       | <!-- END REF --> |

#### Descripción

El comando `VP SET BORDER` <!-- REF #_method_.VP SET BORDER.Summary -->aplica los estilos de borde definidos en *borderStyleObj* y *borderPosObj* al rango definido en *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un rango de celdas donde se aplicará el estilo de borde. Si *rangeObj* contiene múltiples celdas, los bordes aplicados con `VP SET BORDER` se aplicarán al *rangeObj* como un todo (a diferencia del comando [`VP SET CELL STYLE`](vp-set-cell-style) que aplica bordes a cada celda del *rangeObj*). Si ya se ha aplicado una hoja de estilo, `VP SET BORDER` anulará la configuración de bordes aplicada anteriormente para el *rangeObj*.

El parámetro *borderStyleObj* permite definir el estilo de las líneas del borde. *borderStyleObj* soporta las siguientes propiedades:

| Propiedad | Tipo    | Descripción                                                                      | Valores posibles                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | ------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color     | text    | Define el color del borde. Por defecto = black.  | Sintaxis de color CSS "#rrggbb" (sintaxis preferida), sintaxis de color CSS "rgb(r,g,b)" (sintaxis alternativa), nombre de color CSS (sintaxis alternativa)                                                                                                                                                                                                                                                       |
| style     | Integer | Define el estilo del borde. Por defecto = empty. | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |

Puede definir la posición del *borderStyleObj* (es decir, dónde se aplica la línea) con el *borderPosObj*:

| Propiedad       | Tipo    | Descripción                                                                                           |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| all             | boolean | Estilo de la línea de borde aplicado a todos los bordes.                              |
| left            | boolean | Estilo de la línea de borde aplicado al borde izquierdo.                              |
| top             | boolean | Estilo de la línea de borde aplicado al borde superior.                               |
| right           | boolean | Estilo de la línea de borde aplicado al borde derecho.                                |
| bottom          | boolean | Estilo de la línea de borde aplicado al borde inferior.                               |
| outline         | boolean | Estilo de línea de borde aplicado únicamente a los bordes exteriores.                 |
| inside          | boolean | Estilo de la línea de borde aplicado únicamente a los bordes interiores.              |
| innerHorizontal | boolean | Estilo de la línea de borde aplicado únicamente a los bordes horizontales interiores. |
| innerVertical   | boolean | Estilo de la línea de borde aplicado sólo a los bordes verticales interiores.         |

#### Ejemplo 1

Este código produce un borde alrededor de todo el rango:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### Ejemplo 2

Este código demuestra la diferencia entre `VP SET BORDER` y la configuración de bordes con el comando [`VP SET CELL STYLE`](vp-set-cell-style.md):

```4d
// Definir los bordes con VP SET BORDER
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)

// // Definir los bordes con VP SET CELL STYLE
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

#### Ver también

[VP SET CELL STYLE](vp-set-cell-style.md)
