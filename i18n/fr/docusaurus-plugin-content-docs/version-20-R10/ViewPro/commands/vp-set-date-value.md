---
id: vp-set-date-value
title: VP SET DATE VALUE
---

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->

**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE VALUE.Params -->

| Paramètres    | Type   |    | Description         |                  |
| ------------- | ------ | -- | ------------------- | ---------------- |
| rangeObj      | Object | -> | Objet plage         |                  |
| dateValue     | Date   | -> | Valeur date à fixer |                  |
| formatPattern | Text   | -> | Format de la valeur | <!-- END REF --> |

## Description

La commande `VP SET DATE VALUE` <!-- REF #_method_.VP SET DATE VALUE.Summary --> attribue une valeur de date spécifiée à une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

Le paramètre *dateValue* indique une valeur date à assigner à *rangeObj*.

L'option *formatPattern* définit un modèle pour le paramètre *dateValue*. Passez un format personnalisé ou utilisez ou utilisez l'une des constantes suivantes :

| Constante               | Description                             | Configuration par défaut des US |
| ----------------------- | --------------------------------------- | ------------------------------- |
| `vk pattern long date`  | Format ISO 8601 long pour la date       | "dddd, dd MMMM yyyy"            |
| `vk pattern month day`  | Format ISO 8601 pour le mois et le jour | "MMMM dd"                       |
| `vk pattern short date` | Format ISO 8601 court pour la date      | "MM/dd/yyyy"                    |
| `vk pattern year month` | Format ISO 8601 pour le mois et l'année | "yyyy MMMM"                     |

Pour plus d'informations sur les modèles et les caractères de formatage, veuillez consulter la section [Formats de date et d'heure] (../configuring.md#date-and-time-formats).

## Exemple

```4d
//Fixer la valeur de la cellule à la date du jour
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))
 
//Fixer la valeur de la cellule à une date spécifique avec un format désigné
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

## Voir également

[4D View Pro cell format](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)

