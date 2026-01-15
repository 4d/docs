---
id: vp-set-show-print-lines
title: VP SET SHOW PRINT LINES
---

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->

**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| Paramètres | Type    |    | Description                                                                             |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                                 |                  |
| visible    | Boolean | -> | Lignes d'impression affichées si True (par défaut), cachées si False |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis)             | <!-- END REF --> |

## Description

La commande `VP SET SHOW PRINT LINES` <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> détermine si les lignes de l'aperçu avant impression sont affichées dans une feuille de calcul.<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans *visible*, passez `True` pour afficher les lignes d'impression, et `False` pour les cacher. `True` est passé par défaut.

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

La position des lignes d'impression d'une feuille de calcul varie en fonction des sauts de page de cette feuille.

## Exemple

Le code suivant affiche les lignes d'impression dans la deuxième feuille d'un document :

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../../assets/en/ViewPro/vp-set-show-print-lines.png)

Avec un saut de page :

![set-show-print-lines-with-page-break](../../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

## Voir également

[4D Get show print lines](vp-get-show-print-lines.md)
