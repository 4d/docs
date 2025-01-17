---
id: object-get-maximum-value
title: OBJECT GET MAXIMUM VALUE
slug: /commands/object-get-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Syntax-->**OBJECT GET MAXIMUM VALUE** ( {* ;} *objet* ; *valeurMaxi* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| valeurMaxi | Date, Time, Number | &#8592; | Valeur maximale actuelle de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Summary-->La commande **OBJECT GET MAXIMUM VALUE** retourne dans la variable *valeurMaxi* la valeur maximum actuelle de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

La propriété "Valeur maximum" peut être définie via la Liste des propriétés en mode Développement ou via la commande [OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

#### Voir aussi 

[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1245 |
| Thread safe | &cross; |


