---
id: vp-get-spans
title: VP Get spans
---

<!-- REF #_method_.VP Get spans.Syntax -->

**VP Get spans** ( _rangeObj_ : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

| Parâmetro  | Tipo   |    | Descrição                                 |                  |
| ---------- | ------ | -- | ----------------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objeto intervalo                          |                  |
| Resultados | Object | <- | Object of cell spans in the defined range | <!-- END REF --> |

#### Descrição

The `VP Get spans` command <!-- REF #_method_.VP Get spans.Summary -->retrieves the cell spans in the designated _rangeObj_<!-- END REF -->.

In _rangeObj_, pass a range of cell spans you want to retrieve. If _rangeObj_ does not contain a cell span, an empty range is returned.

#### Exemplo

Se quiser centrar o texto das células fusionadas neste documento:

![](../../assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Search for all cell spans 
$range:=VP Get spans(VP All("ViewProArea"))
 
//center text
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### Veja também

[VP ADD SPAN](vp-add-span.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
