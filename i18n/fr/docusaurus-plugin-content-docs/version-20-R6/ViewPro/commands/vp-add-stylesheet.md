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

The `VP ADD STYLESHEET` command <!-- REF #_method_.VP ADD STYLESHEET.Summary -->creates or modifies the *styleName* style sheet based upon the combination of the properties specified in *styleObj* in the open document<!-- END REF -->. Si une feuille de style ayant le même nom et le même index existe déjà dans le document, cette commande l'écrasera et le remplacera avec les nouvelles valeurs.

> Les feuilles de style créées par cette commande sont sauvegardées avec le document.

In *vpAreaName*, pass the name of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retournée.

The *styleName* parameter lets you assign a name to the style sheet. Si le nom existe déjà dans le même scope, la nouvelle feuille de style remplace la feuille existante. A noter que vous pouvez utiliser le même nom pour plusieurs scopes (ci-dessous).

Within the *styleObj*, designate the settings for the style sheet (e.g., font, text decoration, alignment, borders, etc.). For the full list of style properties, see [Style object properties](../configuring.md#style-object-properties).

You can designate where to define the style sheet in the optional *sheet* parameter using the sheet index (indexing starts at 0) or with the following constants:

- `vk current sheet`
- `vk workbook`

If a *styleName* style sheet is defined at the workbook level and at a sheet level, the sheet level has priority over the workbook level when the style sheet is set.

To apply the style sheet, use the [VP SET DEFAULT STYLE](vp-set-default-style.md) or [VP SET CELL STYLE](vp-set-cell-style.md) commands.

#### Exemple

Le code suivant :

```4d
$styles:=New object
$styles.backColor:="green"
 
//Line Border Object
$borders:=New object("color";"green";"style";vk line style medium dash dot)
 
$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders
 
VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)
 
//To apply the style
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

will create and apply the following style object named *GreenDashDotStyle*:

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
