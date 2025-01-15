---
id: vp-add-selection
title: VP ADD SELECTION
---

<!-- REF #_method_.VP ADD SELECTION.Syntax -->

**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SELECTION.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

O comando `VP ADICIONAR SELECÇÃO` <!-- REF #_method_.VP ADD SELECTION.Sumário --> adiciona as células especificadas às células selecionadas <!-- FIM REF -->.

Em *rangeObj*, passe um objeto intervalo de células a adicionar à seleção atual.

> A célula ativa não é modificada.

#### Exemplo

Tem células atualmente seleccionadas:

![](../../assets/en/ViewPro/cmd_vpAddSelection1.PNG)

O código seguinte adicionará células à sua seleção:

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

Resultados:

![](../../assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### Veja também

[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
