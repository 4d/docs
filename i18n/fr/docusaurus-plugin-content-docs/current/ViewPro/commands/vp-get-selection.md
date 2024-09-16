---
id: vp-get-selection
title: VP Get selection
---

<!-- REF #_method_.VP Get selection.Syntax -->

**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get selection.Params -->

| Paramètres | Type    |                             | Description                                                                 |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Object  | <- | Objet plage de toutes les cellules                                          | <!-- END REF --> |

#### Description

La commande `VP Get selection` <!-- REF #_method_.VP Get selection.Summary -->retourne un nouvel objet plage référençant les cellules courantes sélectionnées<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

![](../../assets/en/ViewPro/cmd_vpGetSelection.PNG)

Le code suivant récupèrera les coordonnées de la cellule active :

```4d
$currentSelection:=VP Get selection("myVPArea")

 
//retourne un objet plage contenant :  
//$currentSelection.ranges[0].column=5
//$currentSelection.ranges[0].columnCount=2
//$currentSelection.ranges[0].row=8
//$currentSelection.ranges[0].rowCount=6
```

#### Voir également

[VP ADD SELECTION](vp-add-selection.md)<br/>
[VP Get active cell](vp-get-active-cell.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
