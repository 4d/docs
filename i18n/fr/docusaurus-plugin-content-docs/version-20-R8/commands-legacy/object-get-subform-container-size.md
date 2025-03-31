---
id: object-get-subform-container-size
title: OBJECT GET SUBFORM CONTAINER SIZE
slug: /commands/object-get-subform-container-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Syntax-->**OBJECT GET SUBFORM CONTAINER SIZE** ( *largeur* ; *hauteur* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| largeur | Integer | &#8592; | Largeur de l’objet sous-formulaire |
| hauteur | Integer | &#8592; | Hauteur de l’objet sous-formulaire |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Summary-->La commande **OBJECT GET SUBFORM CONTAINER SIZE** retourne la *largeur* et la *hauteur* (en pixels) d’un objet sous-formulaire "courant", affiché dans le formulaire parent.<!-- END REF--> 

Cette commande doit être appelée depuis la méthode d’un formulaire utilisé en sous-formulaire et affiché dans un objet sous-formulaire. Elle retourne la *largeur* et la *hauteur* de l’objet contenant le sous-formulaire.

Cette commande est utile par exemple dans le cas où des objets du sous-formulaire doivent être déplacés et/ou redimensionnés en fonction des caractéristiques de l’objet sous-formulaire lui-même. Dans l’événement formulaire On Load ou On Resize, le sous-formulaire peut appeler cette commande pour calculer la place dont il dispose afin d’afficher son contenu. 

* Si la commande est appelée depuis un formulaire qui n’est pas en cours d’utilisation en tant que sous-formulaire, elle retourne la taille courante de la fenêtre du formulaire.
* Si la commande est appelée en-dehors du contexte de l’affichage l’écran (par exemple lors de l’impression du formulaire), elle retourne 0 dans *largeur* et *hauteur*.

#### Voir aussi 

[OBJECT GET SUBFORM](object-get-subform.md)  
[OBJECT SET SUBFORM](object-set-subform.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1148 |
| Thread safe | &cross; |


