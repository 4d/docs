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

## Description

La commande `VP ROW AUTOFIT` <!-- REF #_method_.VP ROW AUTOFIT.Summary -->dimensionne automatiquement les ligne(s) de *rangeObj* en fonction de leur contenu<!-- END REF -->.

Dans *rangeObj*, passez un objet plage contenant une plage de lignes dont la taille sera automatiquement gérée.

## Exemple

Les lignes suivantes n'affichent pas correctement le texte :

![](../../assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)

```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

Résultat:

![](../../assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

## Voir également

[VP Column autofit](vp-column-autofit.md)

