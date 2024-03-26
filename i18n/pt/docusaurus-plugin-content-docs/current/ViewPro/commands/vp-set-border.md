---
id: vp-set-border
title: VP SET BORDER
---

<!-- REF #_method_.VP SET BORDER.Syntax -->

**VP SET BORDER** ( _rangeObj_ : Object ; _borderStyleObj_ : Object  ; _borderPosObj_ : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET BORDER.Params -->

| Parâmetro      | Tipo   |    | Descrição                           |                  |
| -------------- | ------ | -- | ----------------------------------- | ---------------- |
| rangeObj       | Object | -> | Objeto intervalo                    |                  |
| borderStyleObj | Object | -> | Objeto que contém o estilo da borda |                  |
| borderPosObj   | Object | -> | Object containing border placement  | <!-- END REF --> |

#### Descrição

The `VP SET BORDER` command <!-- REF #_method_.VP SET BORDER.Summary -->applies the border style(s) defined in _borderStyleObj_ and _borderPosObj_ to the range defined in the _rangeObj_<!-- END REF -->.

In _rangeObj_, pass a range of cells where the border style will be applied. If the _rangeObj_ contains multiple cells, borders applied with `VP SET BORDER` will be applied to the _rangeObj_ as a whole (as opposed to the [`VP SET CELL STYLE`](vp-set-cell-style.md) command which applies borders to each cell of the _rangeObj_). If a style sheet has already been applied, `VP SET BORDER` will override the previously applied border settings for the _rangeObj_.

The _borderStyleObj_ parameter allows you to define the style for the lines of the border. The _borderStyleObj_ supports the following properties:

| Propriedade | Tipo    | Descrição                                       | Valores possíveis                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | ------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color       | text    | Define a cor da margem. Predefinição = black.   | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                                                                                                                                                                                                                 |
| style       | Integer | Define o estilo da borda. Predefinição = vazio. | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |

You can define the position of the _borderStyleObj_ (i.e., where the line is applied) with the _borderPosObj_:

| Propriedade     | Tipo    | Descrição                                                                  |
| --------------- | ------- | -------------------------------------------------------------------------- |
| all             | boolean | Estilo de linha de fronteira aplicado a todas as fronteiras.               |
| left            | boolean | Estilo de linha de fronteira aplicado à fronteira esquerda.                |
| top             | boolean | Estilo de linha da borda aplicado à borda superior.                        |
| direita         | boolean | Estilo de linha de fronteira aplicado à fronteira direita.                 |
| bottom          | boolean | Estilo da linha de fronteira aplicado à fronteira inferior.                |
| outline         | boolean | Estilo da linha de fronteira aplicado apenas às fronteiras exteriores.     |
| inside          | boolean | Estilo da linha de fronteira aplicado apenas às fronteiras interiores.     |
| innerHorizontal | boolean | Estilo de linha da borda aplicado apenas às bordas horizontais interiores. |
| innerVertical   | boolean | Estilo da borda aplicado apenas a bordas verticais interiores.             |

#### Exemplo 1

Este código produz uma borda à volta de todo o intervalo:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### Exemplo 2

This code demonstrates the difference between `VP SET BORDER` and setting borders with the [`VP SET CELL STYLE`](vp-set-cell-style.md) command:

```4d
// Set borders using VP SET BORDER
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
 
// // Set borders using VP SET CELL STYLE
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

#### Veja também

[VP SET CELL STYLE](vp-set-cell-style.md)
