---
id: vp-set-default-style
title: VP SET DEFAULT STYLE
---

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->

**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| Paramètres | Type    |    | Description                                                             |                  |
| ---------- | ------- | -- | ----------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                 |                  |
| styleObj   | Object  | -> | Objet style                                                             |                  |
| sheet      | Integer | -> | Indice de la feuille (par défaut = feuille courante) | <!-- END REF --> |

## Description

La commande `VP SET DEFAULT STYLE` <!-- REF #_method_.VP SET DEFAULT STYLE. ummary -->définit le style dans le *styleObj* comme style par défaut pour une feuille *sheet*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le *styleObj* vous permet de passer un objet contenant des paramètres de style. Vous pouvez utiliser une feuille de style existante ou créer un nouveau style. Pour plus d'informations, voir le paragraphe [Objets de style](../configuring.md#style-objects).

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille de calcul spécifique où le style sera défini. Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

## Exemple

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //couleur violet clair
 
VP SET DEFAULT STYLE("myDoc";$style)
```

![](../../assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

## Voir également

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get default style](vp-get-default-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)