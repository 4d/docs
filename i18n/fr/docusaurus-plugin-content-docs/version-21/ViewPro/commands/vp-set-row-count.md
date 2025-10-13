---
id: vp-set-row-count
title: VP SET ROW COUNT
---

<!-- REF #_method_.VP SET ROW COUNT.Syntax -->

**VP SET ROW COUNT** ( *vpAreaName* : Text ; *rowCount* : Integer { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW COUNT.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| rowCount   | Integer | -> | Nombre de lignes                                                            |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP SET ROW COUNT` <!-- REF #_method_.VP SET ROW COUNT.Summary -->définit le nombre total de lignes dans *vpAreaName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Passez le nombre total de lignes dans le paramètre *rowCount*. *rowCount* doit être supérieur à 0.

Dans le paramètre facultatif *sheet*, vous pouvez désigner une feuille de calcul spécifique où le *rowCount* sera appliqué (la numérotation commence à 0). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

## Exemple

Le code suivant définit cinq lignes dans la zone 4D View Pro :

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](../../assets/en/ViewPro/cmd_vpSetRowCount.PNG)

## Voir également

[VP Get column count](vp-get-column-count.md)<br/>
[VP get row-count](vp-get-row-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)

