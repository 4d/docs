---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| Paramètres    | Type    |    | Description                                    |                  |
| ------------- | ------- | -- | ---------------------------------------------- | ---------------- |
| rangeObj      | Object  | -> | Objet plage                                    |                  |
| champ         | Pointer | -> | Référence au champ dans la structure virtuelle |                  |
| formatPattern | Text    | -> | Format du champ                                | <!-- END REF --> |

## Description

La commande `VP SET FIELD` <!-- REF #_method_.VP SET FIELD.Summary -->attribue un champ virtuel de la base de données 4D à une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur. Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur.

Le paramètre *field* spécifie un [champ virtuel](../formulas.md#referencing-fields-using-the-virtual-structure) de la base de données 4D à affecter à *rangeObj*. Le nom de la structure virtuelle pour *field* peut être visualisé dans la barre de formule. Si l'une des cellules de *rangeObj* a un contenu existant, elle sera remplacée par *field*.

L'option *formatPattern* définit un modèle pour le paramètre *field*. Vous pouvez passer n'importe quel [format personnalisé] valide (../configuring.md#cell-format).

## Exemple

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

## Voir également

[VP SET VALUE](vp-set-value.md)

