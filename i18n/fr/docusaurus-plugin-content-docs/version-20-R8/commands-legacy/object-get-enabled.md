---
id: object-get-enabled
title: OBJECT Get enabled
slug: /commands/object-get-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enabled.Syntax-->**OBJECT Get enabled** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enabled.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Variable (si * omis) |
| Résultat | Boolean | &#8592; | Vrai = objet(s) activé(s), Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get enabled.Summary-->La commande **OBJECT Get enabled** retourne Vrai si l'objet ou le groupe d'objets désigné par *objet* est activé dans le formulaire et Faux s’il est inactivé.<!-- END REF--> 

Un objet activé réagit aux clics souris et aux raccourcis clavier.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable (variable objet uniquement). 

Cette commande peut être appliquée aux types d'objets suivants :

* Bouton, Bouton par défaut, Bouton 3D, Bouton invisible, Bouton inversé
* Bouton radio, Bouton radio 3D, Bouton image
* Case à cocher, Case à cocher 3D
* Pop-up menu, Liste déroulante, Combo Box, Menu/Liste déroulante
* Thermomètre, Règle

#### Voir aussi 

[OBJECT SET ENABLED](object-set-enabled.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1079 |
| Thread safe | &cross; |


