---
id: vp-set-show-print-lines
title: VP SET SHOW PRINT LINES
---

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->

**VP SET SHOW PRINT LINES** ( _vpAreaName_ : Text {; visible : Boolean}{; _sheet_ : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| Paramètres | Type    |    | Description                                                                             |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                                 |                  |
| visible    | Boolean | -> | Lignes d'impression affichées si True (par défaut), cachées si False |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis)             | <!-- END REF --> |

#### Description

The `VP SET SHOW PRINT LINES` command <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro.

In _visible_, pass `True` to display the print lines, and `False` to hide them. `True` is passed by default.

In _sheet_, pass the index of the target sheet. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

La position des lignes d'impression d'une feuille de calcul varie en fonction des sauts de page de cette feuille.

#### Exemple

Le code suivant affiche les lignes d'impression dans la deuxième feuille d'un document :

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../../assets/en/ViewPro/vp-set-show-print-lines.png)

Avec un saut de page :

![set-show-print-lines-with-page-break](../../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### Voir également

[4D Get show print lines](vp-get-show-print-lines.md)
