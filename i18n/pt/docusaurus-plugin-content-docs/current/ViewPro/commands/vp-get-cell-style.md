---
id: vp-get-cell-style
title: VP Get cell style
---

<!-- REF #_method_.VP Get cell style.Syntax -->

**VP Get cell style** (  _rangeObj_ : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get cell style.Params -->

| Parâmetro  | Tipo   |    | Descrição        |                  |
| ---------- | ------ | -- | ---------------- | ---------------- |
| rangeObj   | Object | -> | Objeto intervalo |                  |
| Resultados | Object | <- | Objecto estilo   | <!-- END REF --> |

#### Descrição

The `VP Get cell style` command <!-- REF #_method_.VP Get cell style.Summary -->returns a [style object](../configuring.md#style-objects) for the first cell in the _rangeObj_<!-- END REF -->.

In _rangeObj_, pass a range containing the style to retrieve.

- If _rangeObj_ contains a cell range, the cell style is returned.
- If _rangeObj_ contains a range that is not a cell range, the style of the first cell in the range is returned.
- If _rangeObj_ contains several ranges, only the style of the first cell in the first range is returned.

#### Exemplo

Para obter os detalhes sobre o estilo na célula selecionada (B2):

![](../../assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

Este código:

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

... devolverá este objecto:

```4d
{
  "backColor":"Azure",
  "borderBottom":
   {
     "color":#800080,
     "style":5
   }
  "font":"8pt Arial",
  "foreColor":"red",
  "hAlign":1,
  "isVerticalText":"true",
  "vAlign":0
}
```

#### Veja também

[VP GET DEFAULT STYLE](vp-get-default-style.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)
