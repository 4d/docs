---
id: vp-column-autofit
title: VP COLUMN AUTOFIT
---

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->

**VP COLUMN AUTOFIT** ( _rangeObj_ : Object )<!-- END REF -->

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango | <!-- END REF --> |

#### Descripción

El comando `VP COLUMN AUTOFIT` <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->dimensiona automáticamente la(s) columna(s) en _rangeObj_ según su contenido<!-- END REF -->.

En _rangeObj_, pase un objeto de rango que contenga un rango de columnas cuyo tamaño se manejará automáticamente.

#### Ejemplo

Las siguientes columnas tienen el mismo tamaño y no muestran parte del texto:

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

La selección de las columnas y la ejecución de este código:

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... redimensiona las columnas para ajustarse al tamaño de los contenidos:

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### Ver también

[VP ROW AUTOFIT](vp-row-autofit.md)
