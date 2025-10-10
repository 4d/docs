---
id: vp-set-frozen-panes
title: VP SET FROZEN PANES
---

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->

**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

| Paramètres | Type    |    | Description                                                                 |
| ---------- | ------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| paneObj    | Object  | -> | Objet contenant des informations sur les colonnes et lignes figées          |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |

<!-- END REF -->

## Description

La commande `VP SET FROZEN PANES` <!-- REF #_method_.VP SET FROZEN PANES.Summary -->définit l'état gelé des colonnes et des lignes du *paneObj* afin qu'elles soient toujours affichées dans le *vpAreaName*<!-- END REF -->. . Un trait continu s'affiche pour indiquer que des lignes et colonnes sont figées. L'emplacement du trait dépend de l'emplacement de la ligne ou colonne figée dans la feuille :

- **Colonnes à gauche ou à droite** : Pour les colonnes situées à gauche de la feuille, la ligne est affichée sur le côté droit de la dernière colonne gelée. Pour les colonnes situées à droite de la feuille, le trait s'affiche sur le côté gauche de la prmeière colonne figée.
- **Lignes en haut ou en bas**: Pour les lignes en haut de la feuille, la ligne est affichée en dessous de la dernière ligne gelée. Pour les lignes situées en bas de la feuille, le trait s'affiche au-dessus de la première ligne figée.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez passer un objet définissant les colonnes et les lignes à geler dans le paramètre *paneObj*. Si vous fixez la valeur d'une propriété de colonne ou de ligne à zéro, cela réinitialise (ne fige plus) la propriété. Si une propriété est définie sur une valeur inférieure à zéro, la commande ne fait rien. Vous pouvez passer :

| Propriété           | Type    | Description                                              |
| ------------------- | ------- | -------------------------------------------------------- |
| columnCount         | Integer | Le nombre de colonnes figées sur la gauche de la feuille |
| trailingColumnCount | Integer | Le nombre de colonnes figées sur la droite de la feuille |
| rowCount            | Integer | Le nombre de lignes figées en haut de la feuille         |
| trailingRowCount    | Integer | Le nombre de lignes figées en bas de la feuille          |

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

## Exemple

Vous souhaitez figer les trois premières colonnes de gauche, deux colonnes de droite et la première ligne :

```4d
C_OBJECT($panes)
 
$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1
 
VP SET FROZEN PANES("ViewProArea";$panes)
```

![](../../assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

## Voir également

[VP Get frozen panes](vp-get-frozen-panes.md)