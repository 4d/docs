---
id: object-get-scrollbar
title: OBJECT GET SCROLLBAR
slug: /commands/object-get-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLLBAR.Syntax-->**OBJECT GET SCROLLBAR** ( {* ;} *objet* ; *horizontale* ; *verticale* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLLBAR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Variable ou champ (si * omis) |
| horizontale | Boolean, Integer | &#8592; | Visibilité de la barre horizontale |
| verticale | Boolean, Integer | &#8592; | Visibilité de la barre verticale |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET SCROLLBAR.Summary-->La commande **OBJECT GET SCROLLBAR** permet de connaître le statut affiché/masqué des barres de défilement horizontale et verticale de l'objet ou du groupe d'objets désigné par *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

Vous pouvez passer dans *horizontale* et *verticale* des variables de type booléen ou entier long :

* si vous passez des variables booléennes, la valeur retournée reflètera le statut **courant** de la barre de défilement :  
   * si la barre de défilement a été définie comme masquée, le paramètre reçoit Faux,  
   * si la barre de défilement a été définie comme affichée, le paramètre reçoit Vrai,  
   * si la barre de défilement a été définie en mode automatique, le paramètre reçoit Vrai ou Faux en fonction de l'affichage courant de l'objet.
* si vous passez des variables entier long, la valeur retournée reflètera la visibilité définie pour la barre de défilement :  
   * si la barre de défilement a été définie comme masquée, le paramètre reçoit 0,  
   * si la barre de défilement a été définie comme affichée, le paramètre reçoit 1,  
   * si la barre de défilement a été définie en mode automatique, le paramètre reçoit 2.

Cette commande est utilisable avec les objets de formulaire suivants :

* Champs et variables objet texte ou image,
* List box,
* Listes hiérarchiques,
* Sous-formulaires.

Pour plus d'informations, reportez-vous à la description de la commande [OBJECT SET SCROLLBAR](object-set-scrollbar.md).

#### Voir aussi 

[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1076 |
| Thread safe | &cross; |


