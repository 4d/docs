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

The `VP RESET SELECTION` command <!-- REF #_method_.VP RESET SELECTION.Summary -->deselects all cells, resulting in no current selection or visible active cell<!-- END REF -->.

> Une cellule active par défaut (cellule A1) reste définie pour les commandes 4D View Pro.

In *vpAreaName*, pass the name of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retournée.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

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
