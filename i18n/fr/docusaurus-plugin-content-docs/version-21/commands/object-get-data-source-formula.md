---
id: object-get-data-source-formula
title: OBJECT Get data source formula
---

<!--REF #_command_.OBJECT Get data source formula.Syntax-->**OBJECT Get data source formula** ( {* ;} *object* ) : 4D.Formula<!-- END REF-->

<!--REF #_command_.OBJECT Get data source formula.Params-->

| Paramètres | Type                       |                             | Description                                                                                                             |
| ---------- | -------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| \*         | Opérateur                  | &#8594; | Si spécifié, *object* est un nom d'objet (chaîne)<br/>Si omis, *object* est un champ ou une variable |
| object     | any                        | &#8594; | Nom d'objet (si \* est spécifié) ou<br/>Champ ou variable (si \* est omis)        |
| formula    | 4D.Formula | &#8592; | Formule associée à l'objet de formulaire (`Null` si aucune formule n'est associée)                   |

<!-- END REF-->

## Description

La commande **OBJECT Get data source formula**<!--REF #_command_.OBJECT Get data source formula.Summary--> renvoie la formule (le cas échéant) associée à l'objet ou aux objets désigné(s) par les paramètres *object* et *\**.<!-- END REF-->

Si vous passez le paramètre facultatif *\**, vous indiquez que le paramètre *object* est un nom d'objet (chaîne de caractères). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *object* est une variable ou un champ. Dans ce cas, vous passez un champ ou une référence de variable en non une chaîne de caractères (champ ou variable objet de formulaire).

Lorsqu'une formule est associée à un objet de formulaire, elle agit comme source de données de l'objet au moment de l'exécution.

Si cette commande est appliquée à un objet auquel aucune formule personnalisée n'a été attribuée, elle renvoie la [variable dynamique de formulaire](../FormObjects/properties_Object.md#dynamic-variables) attribuée automatiquement.  
Si l'objet n'existe pas ou ne prend pas en charge les formules, il renvoie `Null`.

## Exemple

Vous voulez vérifier quelle formule (s'il y en a) est liée à un objet :

```4d
$formula:=OBJECT Get data source formula(*; "myInput")

```

## Voir également

[OBJECT SET DATA SOURCE FORMULA](object-set-data-source-formula.md)<br/>
[LISTBOX GET COLUMN FORMULA](../commands-legacy/listbox-get-column-formula.md)<br/>
[OBJECT SET DATA SOURCE](../commands-legacy/object-set-data-source.md)<br/>
[OBJECT GET VALUE](../commands-legacy/object-get-value.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1852                        |
| Thread safe        | &cross; |


