---
id: vp-set-date-time-value
title: VP SET DATE TIME VALUE
---

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->

**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

| Paramètres    | Type   |    | Description          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objet plage          |                  |
| dateValue     | Date   | -> | Valeur date à fixer  |                  |
| timeValue     | Time   | -> | Valeur heure à fixer |                  |
| formatPattern | Text   | -> | Format de la valeur  | <!-- END REF --> |

## Description

La commande `VP SET DATE TIME VALUE` <!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->assigne une valeur date et heure spécifique à une plage de cellule désignée<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

Le paramètre *dateValue* indique une valeur date à assigner à *rangeObj*.

Le paramètre *timeValue* indique une valeur heure (exprimée en secondes) à assigner à *rangeObj*.

Le paramètre optionnel *formatPattern* définit un modèle pour les paramètres *dateValue* et *timeValue*. Pour plus d'informations sur les modèles et les caractères de formatage, veuillez consulter la section [Formats de date et d'heure] (../configuring.md#date-and-time-formats).

## Exemple

```4d
//Définir la valeur de la cellule comme étant la date et l'heure actuelles
VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)
 
//Fixer la valeur de la cellule au 18 décembre.
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

## Voir également

[4D View Pro cell format](../configuring.md#cell-format)<br/>
[VP SET DATE VALUE](vp-set-date-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)