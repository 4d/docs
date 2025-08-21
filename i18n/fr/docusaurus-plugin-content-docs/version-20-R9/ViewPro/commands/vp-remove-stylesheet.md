---
id: vp-remove-stylesheet
title: VP REMOVE STYLESHEET
---

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->

**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| styleName  | Text    | -> | Nom du style à supprimer                                                    |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP REMOVE STYLESHEET` <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->supprime la feuille de style passée dans le *styleName* du *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez la feuille de style à supprimer dans le paramètre *styleName*.

Vous pouvez définir, dans le paramètre optionnel *sheet*, l'emplacement dans lequel vous souhaitez supprimer le style, à l'aide de l'indice de la feuille (la numérotation commence à partir de 0) ou à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

## Exemple

Pour supprimer l'objet de style *GreenDashDotStyle* de la feuille courante :

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

## Voir également

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)