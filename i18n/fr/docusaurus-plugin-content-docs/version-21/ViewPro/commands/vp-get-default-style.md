---
id: vp-get-default-style
title: VP Get default style
---

<!-- REF #_method_.VP Get default style.Syntax -->

**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get default style.Params -->

| Paramètres | Type    |                             | Description                                                                 |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Object  | <- | Paramètres de style par défaut                                              | <!-- END REF --> |

## Description

La commande `VP Get default style` <!-- REF #_method_.VP Get default style.Summary -->retourne un objet de style par défaut pour une feuille<!-- END REF -->. L'objet retourné contient les propriétés de rendu de document de base, ainsi que les paramètres de style par défaut (le cas échéant) précédemment définis par la méthode [VP SET DEFAULT STYLE](vp-set-default-style.md). Pour plus d'informations sur les propriétés de style, voir [Objets de style et feuilles de style] (../configuring.md#style-objects--style-sheets).

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où obtenir le nombre de colonnes dans le paramètre optionnel *sheet* en utilisant l'index de la feuille (compter commence à 0). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

## Exemple

Pour lire les détails du style par défaut de ce document :

![](../../assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

Le code suivant :

```4d
$defaultStyle:=VP Get default style("myDoc")
```

retournera ces informations dans l'objet *$defaultStyle* :

```4d
{
 backColor:#E6E6FA,
 hAlign:0,
 vAlign:0,
 font:12pt papyrus
}
```

## Voir également

[VP Get cell style](vp-get-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
