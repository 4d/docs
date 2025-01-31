---
id: form-set-horizontal-resizing
title: FORM SET HORIZONTAL RESIZING
slug: /commands/form-set-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Syntax-->**FORM SET HORIZONTAL RESIZING** ( *redimension* {; *largeurMini* {; *largeurMaxi*}} )<!-- END REF-->
<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| redimension | Boolean | &#8594;  | Vrai : le formulaire est redimensionnable horizontalement Faux : le formulaire n’est pas redimensionnable horizontalement |
| largeurMini | Integer | &#8594;  | Largeur minimale du formulaire (pixels) |
| largeurMaxi | Integer | &#8594;  | Largeur maximale du formulaire (pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Summary-->La commande **FORM SET HORIZONTAL RESIZING** permet de modifier par programmation les propriétés de redimensionnement horizontal du formulaire courant.<!-- END REF--> Par défaut, ces propriétés sont définies dans l’éditeur de formulaires en mode Développement. Les nouvelles propriétés sont fixées pour le process courant, elles ne sont pas stockées avec le formulaire. 

Le paramètre *redimension* permet de définir si le formulaire est redimensionnable horizontalement, c’est-à-dire si sa largeur est modifiable (manuellement par l’utilisateur ou par programmation). 

Si vous passez Vrai, la largeur du formulaire peut être modifiée par l’utilisateur ; 4D utilise comme bornes les valeurs éventuellement passées dans les paramètres *largeurMini* et *largeurMaxi*.

Si vous passez Faux, la largeur courante du formulaire n’est pas modifiable ; dans ce cas, il est inutile de passer des valeurs dans les paramètres *largeurMini* et *largeurMaxi*. 

Si vous avez passé Vrai dans le premier paramètre, vous pouvez passer dans les paramètres facultatifs *largeurMini* et *largeurMaxi* les nouvelles largeurs minimale et maximale du formulaire en pixels. Si vous omettez ces paramètres, les valeurs définies en mode Développement (le cas échéant) seront utilisées.

#### Exemple 

Reportez-vous à l'exemple de la commande [FORM SET SIZE](form-set-size.md). 

#### Voir aussi 

[FORM GET HORIZONTAL RESIZING](form-get-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  
[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 892 |
| Thread safe | &cross; |


