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

El comando `VP ROW AUTOFIT` <!-- REF #_method_.VP ROW AUTOFIT.Summary -->dimensiona automáticamente la(s) fila(s) de _rangeObj_ en función de su contenido<!-- END REF -->.

En _rangeObj_, pase un objeto rango que contenga un rango de líneas cuyo tamaño se gestionará automáticamente.

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
