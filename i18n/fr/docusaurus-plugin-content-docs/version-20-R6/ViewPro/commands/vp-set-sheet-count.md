---
id: vp-set-sheet-count
title: VP SET SHEET COUNT
---

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->

**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| number     | Integer | -> | Nombre de feuilles                      | <!-- END REF --> |

#### Description

The `VP SET SHEET COUNT` command <!-- REF #_method_.VP SET SHEET COUNT.Summary -->sets the number of sheets in *vpAreaName*<!-- END REF -->.

In `number`, pass a number corresponding to how many sheets the document will contain after the command is executed.

> **Warning**: The command will delete sheets if the previous amount of sheets in your document is superior to the number passed. Par exemple, si votre document comporte 5 feuilles et que vous avez fixé le nombre de feuilles à 3, la commande supprimera les feuilles numérotées 4 et 5.

#### Exemple

Le document comporte actuellement une feuille :

![](../../assets/en/ViewPro/vp-sheet-1.png)

Pour régler le nombre de feuilles sur 3 :

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../../assets/en/ViewPro/vp-sheet-3.png)

#### Voir également

[VP Get sheet count](vp-get-sheet-count.md)
