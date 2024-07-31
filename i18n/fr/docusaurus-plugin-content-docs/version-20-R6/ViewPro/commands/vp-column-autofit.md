---
id: vp-column-autofit
title: VP COLUMN AUTOFIT
---

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->

**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

The `VP COLUMN AUTOFIT` command <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->automatically sizes the column(s) in *rangeObj* according to their contents<!-- END REF -->.

In *rangeObj*, pass a range object containing a range of the columns whose size will be automatically handled.

#### Exemple

Les colonnes suivantes sont toutes de la même taille et n'affichent pas certaines parties du texte :

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

La sélection des colonnes et l'exécution du code suivant :

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... resizes the columns to fit the size of the contents:

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### Voir également

[VP ROW AUTOFIT](vp-row-autofit.md)
