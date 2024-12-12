---
id: screen-width
title: Screen width
slug: /commands/screen-width
displayed_sidebar: docs
---

<!--REF #_command_.Screen width.Syntax-->**Screen width** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Screen width.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Windows : largeur de la fenêtre de l'application ou largeur de l'écran si * est spécifiéMacintosh : largeur de l'écran principal |
| Résultat | Integer | &#8592; | Largeur exprimée en pixels |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Screen width.Summary-->Sous Windows, **Screen width** retourne la largeur de la fenêtre d'application 4D (fenêtre MDI).<!-- END REF--> Si vous passez le paramètre optionnel \*, **Screen width** retourne la largeur de l'écran.

Sous Mac OS, **Screen width** retourne la largeur de l'écran principal, c'est-à-dire celui qui contient la barre de menus.

#### Voir aussi 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen height](screen-height.md)  