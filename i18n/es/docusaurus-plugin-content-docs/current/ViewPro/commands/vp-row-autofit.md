---
id: vp-row-autofit
title: VP ROW AUTOFIT
---

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->

**VP ROW AUTOFIT** ( _rangeObj_ : Object) <!-- END REF -->

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango | <!-- END REF --> |

#### Descripción

The `VP ROW AUTOFIT` command <!-- REF #_method_.VP ROW AUTOFIT.Summary -->automatically sizes the row(s) in _rangeObj_ according to their contents<!-- END REF -->.

In _rangeObj_, pass a range object containing a range of the rows whose size will be automatically handled.

#### Ejemplo

Las siguientes líneas no muestran correctamente el texto:

![](../../assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)

```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

Resultado:

![](../../assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### Ver también

[VP Column autofit](vp-column-autofit.md)
