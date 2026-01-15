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

## Description

La commande `VP SET SHEET COUNT` <!-- REF #_method_.VP SET SHEET COUNT.Summary -->définit le nombre de feuilles dans *vpAreaName*<!-- END REF -->.

Dans `number`, passez un nombre correspondant au nombre de feuilles que le document contiendra après l'exécution de la commande.

> **Avertissement** : La commande supprimera des feuilles si le nombre précédent de feuilles dans votre document est supérieur au nombre transmis. Par exemple, si votre document comporte 5 feuilles et que vous avez fixé le nombre de feuilles à 3, la commande supprimera les feuilles numérotées 4 et 5.

## Exemple

Le document comporte actuellement une feuille :

![](../../assets/en/ViewPro/vp-sheet-1.png)

Pour régler le nombre de feuilles sur 3 :

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../../assets/en/ViewPro/vp-sheet-3.png)

## Voir également

[VP Get sheet count](vp-get-sheet-count.md)