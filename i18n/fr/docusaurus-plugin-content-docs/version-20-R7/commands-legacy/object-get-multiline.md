---
id: object-get-multiline
title: OBJECT Get multiline
slug: /commands/object-get-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get multiline.Syntax-->**OBJECT Get multiline** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get multiline.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Integer | &#8592; | Statut multiligne de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get multiline.Summary-->La commande **OBJECT Get multiline** retourne le statut courant de l’option "Multilignes" de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF-->

L’option "Multilignes" d’un objet peut avoir été définie en mode Développement via la Liste des propriétés, ou à l’aide de la commande [OBJECT SET MULTILINE](object-set-multiline.md). 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

La valeur retournée correspond à l’une des constantes suivantes du thème "*Objets de formulaire (Propriétés)*" :

| Constante      | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiline Auto | Entier long | 0      | Dans les zones mono-lignes, les mots situés en fin de ligne sont tronqués et il n’y a pas de retours à la ligne. <br/>Dans les zones multi-lignes, 4D effectue des retours à la ligne automatiques                                                                                                                                         |
| Multiline No   | Entier long | 2      | Il n’y a aucun retour à la ligne : le texte est toujours affiché sur une seule ligne. Si le champ ou la variable alpha ou texte contient des retour chariots, le texte situé après le premier retour chariot est effacé dès que la zone est modifié                                                                                                |
| Multiline Yes  | Entier long | 1      | Dans les zones mono-lignes, le texte est affiché jusqu’au premier retour chariot ou au dernier mot affichable en entier. 4D insère des retours à la ligne, il est possible de faire défiler le contenu de la zone en appuyant sur la touche flèche basse.<br/>Dans les zones multi-lignes, 4D effectue des retours à la ligne automatiques |

**Note :** Si vous appliquez la commande **OBJECT Get multiline** à un objet ne prenant pas en charge l’option "Multilignes", la valeur 0 est retournée.  

#### Voir aussi 

[OBJECT SET MULTILINE](object-set-multiline.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1254 |
| Thread safe | &cross; |


