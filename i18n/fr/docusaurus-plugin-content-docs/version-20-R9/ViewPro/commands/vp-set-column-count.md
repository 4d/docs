---
id: vp-set-column-count
title: VP SET COLUMN COUNT
---

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->

**VP SET COLUMN COUNT** ( *vpAreaName* : Text ; *columnCount* : Integer { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

| Paramètres  | Type    |    | Description                                                                 |                  |
| ----------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| columnCount | Integer | -> | Nombre de colonnes                                                          |                  |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP SET COLUMN COUNT` <!-- REF #_method_.VP SET COLUMN COUNT.Summary -->définit le nombre total de colonnes dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez le nombre total de colonnes dans le paramètre *columnCount*. *columnCount* doit être supérieur à 0.

Dans le paramètre facultatif *sheet*, vous pouvez désigner une feuille de calcul spécifique où le *columnCount* sera appliqué (le comptage commence à 0). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

## Exemple

Le code suivant définit cinq colonnes dans la zone 4D View Pro :

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

## Voir également

[VP Get column count](vp-get-column-count.md)<br/>
[VP Get row count](vp-get-row-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
