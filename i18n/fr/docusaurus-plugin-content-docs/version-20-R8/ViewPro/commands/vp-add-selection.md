---
id: vp-add-selection
title: VP ADD SELECTION
---

<!-- REF #_method_.VP ADD SELECTION.Syntax -->

**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SELECTION.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

La commande `VP ADD SELECTION` <!-- REF #_method_.VP ADD SELECTION.Summary -->ajoute les cellules spécifiées aux cellules actuellement sélectionnées<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de plusieurs cellules à ajouter à la sélection courante.

> La cellule active n'est pas modifiée.

#### Exemple

Les cellules sélectionnées sont les suivantes :

![](../../assets/en/ViewPro/cmd_vpAddSelection1.PNG)

Le code suivant ajoutera des cellules à votre sélection :

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

Résultat:

![](../../assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### Voir également

[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
