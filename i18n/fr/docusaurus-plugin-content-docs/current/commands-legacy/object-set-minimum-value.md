---
id: object-set-minimum-value
title: OBJECT SET MINIMUM VALUE
slug: /commands/object-set-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Syntax-->**OBJECT SET MINIMUM VALUE** ( {* ;} *objet* ; *valeurMini* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MINIMUM VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| valeurMini | Date, Time, Number | &#8594;  | Valeur minimale pour l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET MINIMUM VALUE.Summary-->La commande **OBJECT SET MINIMUM VALUE** permet de modifier la valeur minimum de l’objet ou des objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

La propriété "Valeur minimum" peut être appliquée aux données de type numérique, date ou heure. Pour plus d’informations, reportez-vous au paragraphe *Valeurs maximales et minimales* dans le manuel *Mode Développement*.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez dans *valeurMini* la nouvelle valeur minimum à affecter à l’objet pour le process courant. Cette valeur doit correspondre au type de l’objet, sinon l’erreur 18 "Les types sont incompatibles" est retournée. 

#### Voir aussi 

[OBJECT GET MINIMUM VALUE](object-get-minimum-value.md)  
[OBJECT SET MAXIMUM VALUE](object-set-maximum-value.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1242 |
| Thread safe | &check; |
| Interdite sur le serveur ||


