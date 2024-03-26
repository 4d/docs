---
id: vp-remove-span
title: VP REMOVE SPAN
---

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->

**VP REMOVE SPAN** ( _rangeObj_ : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

The `VP REMOVE SPAN` command <!-- REF #_method_.VP REMOVE SPAN.Summary -->removes the span from the cells in _rangeObj_<!-- END REF -->.

In _rangeObj_, pass a range object of the cell span. As células geradas no alcance são divididas em células individuais.

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
