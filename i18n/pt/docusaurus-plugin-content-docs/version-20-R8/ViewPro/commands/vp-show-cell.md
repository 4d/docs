---
id: vp-show-cell
title: VP SHOW CELL
---

<!-- REF #_method_.VP SHOW CELL.Syntax -->

**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Integer; *hPos* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SHOW CELL.Params -->

| Parâmetro | Tipo    |    | Descrição                                      |                  |
| --------- | ------- | -- | ---------------------------------------------- | ---------------- |
| rangeObj  | Object  | -> | Objeto intervalo                               |                  |
| vPos      | Integer | -> | Posição vertical da vista da célula ou linha   |                  |
| hPos      | Integer | -> | Posição horizontal da vista da célula ou linha | <!-- END REF --> |

#### Descrição

The `VP SHOW CELL` command <!-- REF #_method_.VP SHOW CELL.Summary -->vertically and horizontally repositions the view of the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells as an object to designate the cells to be viewed. The view of the *rangeObj* will be positioned vertically or horizontally (i.e., where *rangeObj* appears) based on the *vPos* and *hPos* parameters. The *vPos* parameter defines the desired vertical position to display the *rangeObj*, and the *hPos* parameter defines the desired horizontal position to display the *rangeObj*.

Estão disponíveis os seguintes selectores:

| Selector              | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                  | Disponível com *vPos* | Disponível com *hPos* |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------- |
| `vk position bottom`  | Alinhamento vertical para o fundo da célula ou linha.                                                                                                                                                                                                                                                                                                                                                      | X                     |                       |
| `vk position center`  | Alinhamento com o centro. The alignment will be to the cell, row, or column limit according to the view position indicated:<li>Vertical view position - cell or row</li><li>Horizontal view position - cell or column</li>                                                                                                                                                                 | X                     | X                     |
| `vk position left`    | Alinhamento horizontal à esquerda da célula ou coluna                                                                                                                                                                                                                                                                                                                                                                      |                       | X                     |
| `vk position nearest` | Alinhamento ao limite mais próximo (superior, inferior, esquerda, direita, centro). The alignment will be to the cell, row, or column limit according to the view position indicated:<li>Vertical view position (top, center, bottom) - cell or row </li><li>Horizontal view position (left, center, right) - cell or column</li> | X                     | X                     |
| `vk position right`   | Alinhamento horizontal à direita da célula ou coluna                                                                                                                                                                                                                                                                                                                                                                       |                       | X                     |
| `vk position top`     | Alinhamento vertical ao topo da célula ou linha                                                                                                                                                                                                                                                                                                                                                                            | X                     |                       |

> Este comando só é eficaz se o reposicionamento da vista for possível. For example, if the *rangeObj* is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if *rangeObj* is in cell C3 and the view is repositioned to the center or the bottom right. A vista mantém-se inalterada.

#### Exemplo

You want to view the cell in column AY, row 51 in the center of the 4D View Pro area:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
// Move the view to show the cell VP SHOW CELL($displayCell;vk position center;vk position center)
```

Resultados:

![](../../assets/en/ViewPro/cmd_vpShowCell1.PNG)

The same code with the vertical and horizontal selectors changed to show the same cell positioned at the top right of the 4D View Pro area:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
  // Move the view to show the cell VP SHOW CELL($displayCell;vk position top;vk position right)
```

Resultados:

![](../../assets/en/ViewPro/cmd_vpShowCell2.PNG)

#### Veja também

[VP Cell](vp-cell.md)<br/>
[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)
