---
id: vp-row-autofit
title: VP ROW AUTOFIT
---

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->

**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

The `VP ROW AUTOFIT` command <!-- REF #_method_.VP ROW AUTOFIT.Summary -->automatically sizes the row(s) in *rangeObj* according to their contents<!-- END REF -->.

In *rangeObj*, pass a range object containing a range of the rows whose size will be automatically handled.

#### Exemple

Les lignes suivantes n'affichent pas correctement le texte :

![](../../assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)

```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

Résultat:

![](../../assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### Voir également

[VP Column autofit](vp-column-autofit.md)
