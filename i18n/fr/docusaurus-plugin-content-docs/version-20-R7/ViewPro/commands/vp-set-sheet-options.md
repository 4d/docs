---
id: vp-set-sheet-options
title: VP SET SHEET OPTIONS
---

<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->

**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET OPTIONS.Params -->

| Paramètres   | Type    |    | Description                                                                 |                  |
| ------------ | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName   | Text    | -> | Nom de la zone 4D View Pro                                                  |                  |
| sheetOptions | Object  | -> | Option(s) de la feuille à définir                        |                  |
| sheet        | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

#### Description

La commande `VP SET SHEET OPTIONS` <!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->permet de définir différentes options de feuille de la zone *vpAreaName* <!-- END REF -->.

Passez le nom de la zone 4D View Pro dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Passez un objet contenant les options à définir dans le paramètre *sheetOptions*. Pour consulter la liste complète des options disponibles, consultez le paragraphe [Options feuille](../configuring.md#sheet-options).

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

#### Exemple 1

Vous souhaitez protéger toutes les cellules à l'exception de la plage C5:D10 :

```4d
// Activer la protection sur la feuille courante
var $options : Object
  
$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea";$options)
  
// marquer les cellules C5:D10 comme 'déverrouillées'
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```

#### Exemple 2

Vous souhaitez protéger votre document pendant que vos utilisateurs redimensionnent les lignes et colonnes :

```4d
var $options : Object

$options:=New object
// Activer la protection
$options.isProtected:=True
$options.protectionOptions:=New object
// Permettre à l'utilisateur de redimensionner les lignes
$options.protectionOptions.allowResizeRows=True;
// Permettre à l'utilisateur de redimensionner les colonnes
$options.protectionOptions.allowResizeColumns=True;

// Appliquer la protection à la feuille courante
VP SET SHEET OPTIONS("ViewProArea";$options)
```

#### Exemple 3

Vous souhaitez personnaliser la couleur des onglets, des lignes figées, du quadrillage, du fond de la sélection et de la bordure de la sélection :

```4d
var $options : Object
   
$options:=New object
// Personnaliser la couleur de l'onglet de la feuille 1
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"
   
VP SET SHEET OPTIONS("ViewProArea";$options;0)
 
// Personnaliser la couleur de l'onglet de la feuille 2
$options.sheetTabColor:="red"
   
VP SET SHEET OPTIONS("ViewProArea";$options;1)
 
// Personnaliser la couleur de l'onglet de la feuille 3
$options.sheetTabColor:="blue"
  
VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

Résultat:

![](../../assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### Exemple 4

Vous souhaitez masquer le quadrillage et les en-têtes des lignes et colonnes.

```4d
var $options : Object
  
$options:=New object
$options.gridline:=New object()
$options.gridline.showVerticalGridline:=False
$options.gridline.showHorizontalGridline:=False
$options.rowHeaderVisible:=False
$options.colHeaderVisible:=False
  
VP SET SHEET OPTIONS("ViewProArea";$options)
```

Résultat:

![](../../assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)

#### Voir également

[4D View Pro sheet options](../configuring.md#sheet-options)<br/>
[VP Get sheet options](vp-get-sheet-options.md)
