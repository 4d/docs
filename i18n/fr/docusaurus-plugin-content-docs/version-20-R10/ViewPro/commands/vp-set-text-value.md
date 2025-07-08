---
id: vp-set-text-value
title: VP SET TEXT VALUE
---

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->

**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| Paramètres    | Type   |    | Description          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objet plage          |                  |
| textValue     | Text   | -> | Valeur texte à fixer |                  |
| formatPattern | Text   | -> | Format de la valeur  | <!-- END REF --> |

## Description

La commande `VP SET TEXT VALUE` <!-- REF #_method_.VP SET TEXT VALUE.Summary -->assigne une valeur texte spécifique à une plage de cellules désignée<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

Le paramètre *textValue* indique une valeur texte à assigner à *rangeObj*.

Le paramètre optionnel *formatPattern* définit un [modèle](../configuring.md#cell-format) pour le paramètre *textValue*.

## Exemple

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

## Voir également

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)