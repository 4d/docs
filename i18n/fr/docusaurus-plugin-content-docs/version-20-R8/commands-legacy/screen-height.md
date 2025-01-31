---
id: screen-height
title: Screen height
slug: /commands/screen-height
displayed_sidebar: docs
---

<!--REF #_command_.Screen height.Syntax-->**Screen height** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Screen height.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Windows : hauteur de la fenêtre de l'application ou hauteur de l'écran si * est spécifiéMacintosh : hauteur de l'écran principal |
| Résultat | Integer | &#8592; | Hauteur exprimée en pixels |

<!-- END REF-->

#### Description 

<!--REF #_command_.Screen height.Summary-->Sous Windows, **Screen height** retourne la hauteur de la fenêtre d'application 4D (fenêtre MDI).<!-- END REF--> Si vous passez le paramètre optionnel *\**, **Screen height** retourne la hauteur de l'écran. 

Sous Mac OS, **Screen height** retourne la hauteur de l'écran principal, c'est-à-dire celui qui contient la barre de menus.

#### Voir aussi 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen width](screen-width.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 188 |
| Thread safe | &cross; |


