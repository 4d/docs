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

O comando `VP REMOVE SPAN` <!-- REF #_method_.VP REMOVE SPAN.Summary -->remove o span das células em _rangeObj_<!-- END REF -->.

Em _rangeObj_, passe um objeto de alcance do intervalo da célula. As células geradas no alcance são divididas em células individuais.

#### Exemplo

Para remover todos os intervalos de células deste documento:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //encontre todas as células fusionadas
 $span:=VP Obter spans(VP All("ViewProArea"))


  /remove a célula
 VP SPAN($span)
```

Resultados:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### Veja também

[VP ADD SPAN](vp-add-span.md)<br/>
[VP Get spans](vp-get-spans.md)
