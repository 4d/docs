---
id: object-set-maximum-value
title: OBJECT SET MAXIMUM VALUE
slug: /commands/object-set-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Syntax-->**OBJECT SET MAXIMUM VALUE** ( {* ;} *objet* ; *valeurMaxi* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| valeurMaxi | Date, Time, Number | &#8594;  | Valeur maximale pour l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET MAXIMUM VALUE.Summary-->La commande **OBJECT SET MAXIMUM VALUE** permet de modifier la valeur maximum de l’objet ou des objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

La propriété "Valeur maximum" peut être appliquée aux données de type numérique, date ou heure. Pour plus d’informations, reportez-vous au paragraphe *Valeurs maximales et minimales* dans le manuel *Mode Développement*.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez dans *valeurMaxi* la nouvelle valeur maximum à affecter à l’*objet* pour le process courant. Cette valeur doit correspondre au type de l’objet, sinon l’erreur 18 "Les types sont incompatibles" est retournée.

#### Voir aussi 

[OBJECT GET MAXIMUM VALUE](object-get-maximum-value.md)  
[OBJECT SET MINIMUM VALUE](object-set-minimum-value.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1244 |
| Thread safe | &check; |
| Interdite sur le serveur ||


