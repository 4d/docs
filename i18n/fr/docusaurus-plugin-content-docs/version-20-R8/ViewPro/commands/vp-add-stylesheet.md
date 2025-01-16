---
id: vp-add-stylesheet
title: VP ADD STYLESHEET
---

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->

**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| styleName  | Text    | -> | Nom du style                                                                |                  |
| styleObj   | Object  | -> | Objet définissant les propriétés de l'attribut                              |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

#### Description

La commande `VP ADD STYLESHEET` <!-- REF #_method_.VP ADD STYLESHEET.Summary -->crée ou modifie la feuille de style *styleName* en fonction de la combinaison des propriétés spécifiées dans *styleObj* dans le document courant<!-- END REF -->. Si une feuille de style ayant le même nom et le même index existe déjà dans le document, cette commande l'écrasera et le remplacera avec les nouvelles valeurs.

> Les feuilles de style créées par cette commande sont sauvegardées avec le document.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *styleName* vous permet de nommer la feuille de style. Si le nom existe déjà dans le même scope, la nouvelle feuille de style remplace la feuille existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Dans *styleObj*, définissez les propriétés de la feuille de style (ex : police, alignement, bordures, etc.). Pour consulter la liste complète des propriétés de style, voir [Propriétés des objets de style](../configuring.md#style-object-properties).

Vous pouvez indiquer l'endroit où définir la feuille de style dans le paramètre optionnel *sheet* à l'aide de l'index de la feuille (l'indexation commence à 0) ou à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

Si une feuille de style *styleName* est définie au niveau du workbook ainsi qu'au niveau de la feuille, le niveau de la feuille est prioritaire sur celui du workbook lorsque la feuille de style est définie.

Pour appliquer la feuille de style, utilisez les commandes [VP SET DEFAULT STYLE](vp-set-default-style.md) ou [VP SET CELL STYLE](vp-set-cell-style.md).

#### Exemple

Le code suivant :

```4d
$styles:=New object
$styles.backColor:="green"
 
//Objet Bordure de ligne
$borders:=New object("color";"green";"style";vk line style medium dash dot)
 
$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders
 
VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)
 
//Pour appliquer le style
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

créera et appliquera l'objet de style suivant nommé *GreenDashDotStyle*:

```
{
 backColor:green,
 borderBottom:{color:green,style:10},
 borderLeft:{color:green,style:10},
 borderRight:{color:green,style:10},
 borderTop:{color:green,style:10}
}
```

#### Voir également

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
