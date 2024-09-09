---
id: vp-reset-selection
title: VP RESET SELECTION
---

<!-- REF #_method_.VP RESET SELECTION.Syntax -->

**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP RESET SELECTION.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

#### Description

La commande `VP RESET SELECTION` <!-- REF #_method_.VP RESET SELECTION.Summary -->désélectionne toutes les cellules, ce qui entraîne l'absence de sélection courante ou de cellule active visible<!-- END REF -->.

> Une cellule active par défaut (cellule A1) reste définie pour les commandes 4D View Pro.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple

Vous souhaitez déselectionner toutes les cellules (la cellule active et toute autre cellule sélectionée) :

```4d
VP RESET SELECTION("myVPArea")
```

#### Voir également

[VP ADD SELECTION](vp-add-selection.md)<br/>
[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
