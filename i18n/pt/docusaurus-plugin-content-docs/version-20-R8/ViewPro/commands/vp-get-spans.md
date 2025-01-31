---
id: vp-get-spans
title: VP Get spans
---

<!-- REF #_method_.VP Get spans.Syntax -->

**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

| Parâmetro  | Tipo   |                             | Descrição                                        |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------ | ---------------- |
| rangeObj   | Object | ->                          | Objeto intervalo                                 |                  |
| Resultados | Object | <- | Objeto de células fundidas no intervalo definido | <!-- END REF --> |

#### Descrição

O comando `VP Get spans` <!-- REF #_method_.VP Get spans.Summary -->recupera os intervalos de células no *rangeObj* designado<!-- END REF -->.

Em *rangeObj*, passe um intervalo de células fusionadas que queira recuperar. Se *rangeObj* não contiver um intervalo de células, um intervalo vazio será retornado.

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
