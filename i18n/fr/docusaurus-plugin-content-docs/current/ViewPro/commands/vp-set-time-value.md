---
id: vp-set-time-value
title: VP SET TIME VALUE
---

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->

**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Time { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| Paramètres    | Type   |    | Description          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objet plage          |                  |
| timeValue     | Time   | -> | Valeur heure à fixer |                  |
| formatPattern | Text   | -> | Format de la valeur  | <!-- END REF --> |

## Description

La commande `VP SET TIME VALUE` <!-- REF #_method_.VP SET TIME VALUE.Summary --> attribue une valeur de temps spécifiée à une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) (créée par exemple avec [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) dont vous voulez spécifier la valeur. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre \*timeValue \* spécifie une durée exprimée en secondes à attribuer à *rangeObj*.

Le paramètre optionnel *formatPattern* définit un [modèle](../configuring.md#cell-format) pour le paramètre *timeValue*.

## Exemple

```4d
//Fixer la valeur à l'heure actuelle
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)
 
//Fixer la valeur à une heure spécifique avec un format désigné
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

## Voir également

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)

