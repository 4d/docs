---
id: vp-remove-span
title: VP REMOVE SPAN
---

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->

**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

O comando `VP REMOVE SPAN` <!-- REF #_method_.VP REMOVE SPAN.Summary -->remove o span das células em *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range object of the cell span. As células geradas no alcance são divididas em células individuais.

#### Exemplo

Para remover todos os intervalos de células deste documento:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //find all cell spans
 $span:=VP Get spans(VP All("ViewProArea"))

 
  //remove the cell spans
 VP REMOVE SPAN($span)
```

Resultados:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### Veja também

[VP ADD SPAN](vp-add-span.md)<br/>
[VP Get spans](vp-get-spans.md)
