---
id: object-set-data-source-formula
title: OBJECT SET DATA SOURCE FORMULA
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Syntax-->**OBJECT SET DATA SOURCE FORMULA** ( {* ;} *object* ; *formula* )<!-- END REF-->

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Params-->

| Paramètres | Type                       |                             | Description                                                                                                             |
| ---------- | -------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| \*         | Opérateur                  | &#8594; | Si spécifié, *object* est un nom d'objet (chaîne)<br/>Si omis, *object* est un champ ou une variable |
| object     | any                        | &#8594; | Nom d'objet (si \* est spécifié) ou<br/>Champ ou variable (si \* est omis)        |
| formula    | 4D.Formula | &#8594; | Formule à assigner comme source de données                                                                              |

<!-- END REF-->

## Description

La commande **OBJECT SET DATA SOURCE FORMULA** <!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Summary--> assigne une formule (expression) comme source de données de l'objet ou des objets désigné(s) par les paramètres *object* et *\** <!-- END REF-->. La formule doit être fournie sous la forme d'un objet [`4D.Formula`](../API/FunctionClass.md#formula-objects).

Si vous passez le paramètre facultatif *\**, vous indiquez que le paramètre *object* est un nom d'objet (chaîne de caractères). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *object* est une variable ou un champ. Dans ce cas, vous passez un champ ou une référence de variable en non une chaîne de caractères (champ ou variable objet de formulaire).

La *formule* agit comme la source à partir de laquelle l'objet récupère sa valeur à l'exécution. Cela permet un comportement dynamique, tel que des valeurs calculées, un affichage conditionnel ou des données dérivées.

Si *Null* est passé dans le paramètre *formula*, 4D réinitialisera la source de données de l'objet à une [variable dynamique de formulaire](../FormObjects/properties_Object.md#dynamic-variables).

Si la commande est appliquée à un objet qui n'existe pas ou qui ne prend pas en charge les formules, elle ne fait rien.

:::note Notes

- La formule est exécutée dans le contexte du formulaire qui possède l'objet. Lorsque vous travaillez avec des formulaires imbriqués (par exemple, des sous-formulaires), assurez-vous que la formule est définie et affectée dans le contexte de formulaire approprié afin d'éviter tout comportement inattendu.
- Si vous assignez une formule à un objet de saisie ou à tout objet dont la valeur est modifiable, assurez-vous que l'expression est [**assignable**](../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

:::

## Exemple

Vous souhaitez lier dynamiquement un objet de saisie à une expression. Par exemple, afficher le prix réduit en fonction d'un prix de base et d'une valeur de réduction :

```4d

Form.basePrice := 100
Form.discount := 0.2

$discountedFormula := Formula(Form.basePrice * (1 - Form.discount))

OBJECT SET DATA SOURCE FORMULA(*;"DiscountedPriceInput"; $discountedFormula)

```

## Voir aussi

[OBJECT Get data source formula](object-get-data-source-formula.md)<br/>
[LISTBOX SET COLUMN FORMULA](../commands-legacy/listbox-set-column-formula.md)<br/>
[OBJECT SET DATA SOURCE](../commands-legacy/object-set-data-source.md)<br/>
[OBJECT SET VALUE](../commands-legacy/object-set-value.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1851                        |
| Thread safe        | no |


