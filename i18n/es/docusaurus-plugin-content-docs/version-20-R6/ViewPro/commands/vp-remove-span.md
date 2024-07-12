---
id: vp-remove-span
title: VP REMOVE SPAN
---

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->

**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango | <!-- END REF --> |

#### Descripción

The `VP REMOVE SPAN` command <!-- REF #_method_.VP REMOVE SPAN.Summary -->removes the span from the cells in *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto rango de la fusión. Las celdas fusionadas en el rango se dividen en celdas individuales.

#### Ejemplo

Para eliminar todas las fusiones de celdas de este documento:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //identifica todas las celdas fusionadas
 $span:=VP Get spans(VP All("ViewProArea"))

 //eliminar las fusiones
 VP REMOVE SPAN($span)
```

Resultado:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### Ver también

[VP ADD SPAN](vp-add-span.md)<br/>
[VP Get spans](vp-get-spans.md)
