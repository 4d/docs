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

La commande `VP COLUMN AUTOFIT` <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->dimensionne automatiquement les colonnes dans *rangeObj* en fonction de leur contenu<!-- END REF -->.

Dans *rangeObj*, passez un objet plage contenant une plage de colonnes dont la taille doit être gérée automatiquement.

#### Exemple

Les colonnes suivantes sont toutes de la même taille et n'affichent pas certaines parties du texte :

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

La sélection des colonnes et l'exécution du code suivant :

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... redimensionne les colonnes pour correspondre à la taille du contenu :

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### Voir également

[VP ROW AUTOFIT](vp-row-autofit.md)
