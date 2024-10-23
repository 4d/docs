---
id: object-set-enabled
title: OBJECT SET ENABLED
slug: /commands/object-set-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENABLED.Syntax-->**OBJECT SET ENABLED** ( {* ;} *objet* ; *actif* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENABLED.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| actif | Boolean | &#8594;  | Vrai = objet(s) activé(s), Faux sinon |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET ENABLED.Summary-->La commande **OBJECT SET ENABLED** permet d’activer ou d’inactiver l’objet ou le groupe d’objets désigné par *objet* dans le formulaire courant.<!-- END REF--> 

Un objet activé réagit aux clics souris et aux raccourcis clavier.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable (variable objet uniquement). 

Passez Vrai dans le paramètre *actif* pour activer les objets et Faux pour les inactiver. 

Cette commande peut être appliquée aux types d'objets suivants :

* Bouton, Bouton par défaut, Bouton 3D, Bouton invisible, Bouton inversé
* Bouton radio, Bouton radio 3D, Bouton image
* Case à cocher, Case à cocher 3D
* Pop-up menu, Liste déroulante, Combo Box, Menu/Liste déroulante
* Thermomètre, Règle

**Note :** Cette commande est sans effet avec un objet auquel une action standard a été assignée (4D se charge de modifier l’état de cet objet lorsque c’est nécessaire), sauf dans le cas des actions **Valider** et **Annuler**.

#### Voir aussi 

[OBJECT Get enabled](object-get-enabled.md)  