---
id: form-set-vertical-resizing
title: FORM SET VERTICAL RESIZING
slug: /commands/form-set-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET VERTICAL RESIZING.Syntax-->**FORM SET VERTICAL RESIZING** ( *redimension* {; *hauteurMini* {; *hauteurMaxi*}} )<!-- END REF-->
<!--REF #_command_.FORM SET VERTICAL RESIZING.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| redimension | Boolean | &#8594;  | Vrai : le formulaire est redimensionnable verticalement Faux : le formulaire n’est pas redimensionnable verticalement |
| hauteurMini | Integer | &#8594;  | Hauteur minimale du formulaire (pixels) |
| hauteurMaxi | Integer | &#8594;  | Hauteur maximale du formulaire (pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM SET VERTICAL RESIZING.Summary-->La commande **FORM SET VERTICAL RESIZING** permet de modifier par programmation les propriétés de redimensionnement vertical du formulaire courant.<!-- END REF--> Par défaut, ces propriétés sont définies dans l’éditeur de formulaires en mode Développement. Les nouvelles propriétés sont fixées pour le process courant, elles ne sont pas stockées avec le formulaire. 

Le paramètre *redimension* permet de définir si le formulaire est redimensionnable verticalement, c’est-à-dire si sa hauteur est modifiable (manuellement par l’utilisateur ou par programmation). 

Si vous passez Vrai, la hauteur du formulaire peut être modifiée par l’utilisateur ; 4D utilise comme bornes les valeurs éventuellement passées dans les paramètres *hauteurMini* et *hauteurMaxi*. 

Si vous passez Faux, la hauteur courante du formulaire n’est pas modifiable ; dans ce cas, il est inutile de passer des valeurs dans les paramètres *hauteurMini* et *hauteurMaxi*. 

Si vous avez passé Vrai dans le premier paramètre, vous pouvez passer dans les paramètres facultatifs *hauteurMini* et *hauteurMaxi* les nouvelles hauteurs minimale et maximale du formulaire en pixels. Si vous omettez ces paramètres, les valeurs définies en mode Développement (le cas échéant) seront utilisées. 

#### Exemple 

Reportez-vous à l'exemple de la commande [FORM SET SIZE](form-set-size.md). 

#### Voir aussi 

[FORM GET VERTICAL RESIZING](form-get-vertical-resizing.md)  
[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 893 |
| Thread safe | &cross; |


