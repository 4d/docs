---
id: form-get-properties
title: FORM GET PROPERTIES
slug: /commands/form-get-properties
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET PROPERTIES.Syntax-->**FORM GET PROPERTIES** ( {*laTable* ;} *nomForm* ; *largeur* ; *hauteur* {; *nbPages* {; *largeurFixe* {; *hauteurFixe* {; *titre*}}}} )<!-- END REF-->
<!--REF #_command_.FORM GET PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table du formulaire ou Table par défaut si ce paramètre est omis |
| nomForm | Text | &#8594;  | Nom du formulaire |
| largeur | Integer | &#8592; | Largeur du formulaire (en pixels) |
| hauteur | Integer | &#8592; | Hauteur du formulaire (en pixels) |
| nbPages | Integer | &#8592; | Nombre de pages du formulaire |
| largeurFixe | Boolean | &#8592; | Vrai = Largeur fixe, Faux = Largeur variable |
| hauteurFixe | Boolean | &#8592; | Vrai = Hauteur fixe, Faux = Hauteur variable |
| titre | Text | &#8592; | Nom de la fenêtre du formulaire |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET PROPERTIES.Summary-->La commande **FORM GET PROPERTIES** retourne des propriétés du formulaire *nomForm*.<!-- END REF--> 

Les paramètres *largeur* et *hauteur* retournent (en pixels) la largeur et la hauteur du formulaire. Ces valeurs sont déterminées à partir des propriétés de dimensionnement du formulaire :

* Si la taille du formulaire est **automatique**, sa largeur et sa hauteur sont calculées de manière à ce qu’il affiche tous les objets qu’il contient, en tenant compte, le cas échéant, des marges horizontale et verticale qui ont été définies.
* Si la taille du formulaire est **fixe**, sa largeur et sa hauteur sont celles qui ont été saisies manuellement dans les zones correspondantes.
* Si la taille du formulaire est **basée sur un objet**, sa largeur et sa hauteur sont calculées par rapport à la position de cet objet.

Le paramètre *nbPages* retourne le nombre de pages du formulaire, page 0 (zéro) non comprise.

Les paramètres *largeurFixe* et *hauteurFixe* indiquent si la largeur et la hauteur du formulaire sont fixes (le paramètre contient Vrai) ou redimensionnables (le paramètre contient Faux). 

Le paramètre *titre* retourne le nom de la fenêtre du formulaire, tel qu’il a été défini dans la Liste des propriétés en mode Développement. Si aucun nom n’a été défini, le paramètre *titre* contient une chaîne vide. 

#### Voir aussi 

[FORM GET OBJECTS](form-get-objects.md)  
[FORM SET SIZE](form-set-size.md)  
[Open form window](open-form-window.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 674 |
| Thread safe | &cross; |


