---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( {* ;} *objet* ; *valeurMini* )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| valeurMini | Date, Time, Number | &#8592; | Valeur minimale actuelle de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->La commande **OBJECT GET MINIMUM VALUE** retourne dans la variable *valeurMini* la valeur minimum courante de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF-->

La propriété "Valeur minimum" peut être définie via la Liste des propriétés en mode Développement ou via la commande [OBJECT SET MINIMUM VALUE](object-set-minimum-value.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

#### Voir aussi 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1243 |
| Thread safe | &check; |
| Interdite sur le serveur ||


