---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( {* ;} *objet* ; *couleurAvantPlan* {; *couleurArrièrePlan* {; *couleurArrièrePlanAlt*}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| couleurAvantPlan | Text, Integer | &#8592; | Valeur de la couleur RVB d'avant-plan |
| couleurArrièrePlan | Text, Integer | &#8592; | Valeur de la couleur RVB d'arrière-plan |
| couleurArrièrePlanAlt | Text, Integer | &#8592; | Valeur de la couleur RVB d'arrière-plan alternée |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->La commande **OBJECT GET RGB COLORS** retourne les couleurs d’avant-plan et d’arrière-plan de l'objet ou du groupe d'objets désigné(s) par *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Lorsque la commande est appliquée à un objet de type List box, la couleur d’arrière plan alternée des lignes peut être retournée dans le paramètre *couleurArrièrePlanAlt*. Dans ce cas, la valeur de *couleurArrièrePlan* est utilisée pour le fond des lignes impaires uniquement. 

Les valeurs de couleurs RVB retournées dans les paramètres *couleurAvantPlan*, *couleurArrièrePlan* et *couleurArrièrePlanAlt* dépendent du type de paramètre :

* si un paramètre de type *texte* est passé, la couleur est retournée au format CSS avec la syntaxe "#rrggbb" (ex : "#0000FF")
* si un paramètre est de type *entier long* est passé, la couleur peut être un entier long de 4 octets au format (0x00RRGGBB), ou bien des valeurs négatives correspondant aux couleurs "système".

Pour plus d’informations sur le format des paramètres *couleurAvantPlan*, *couleurArrièrePlan* et *couleurArrièrePlanAlt*, reportez-vous à la description de la commande [OBJECT SET RGB COLORS](object-set-rgb-colors.md).

#### Voir aussi 

[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  