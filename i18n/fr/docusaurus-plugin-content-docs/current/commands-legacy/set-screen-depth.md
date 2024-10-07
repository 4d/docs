---
id: set-screen-depth
title: SET SCREEN DEPTH
slug: /commands/set-screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SET SCREEN DEPTH.Syntax-->**SET SCREEN DEPTH** ( *profondeur* {; *couleur* {; écran}} )<!-- END REF-->
<!--REF #_command_.SET SCREEN DEPTH.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| profondeur | Entier long | &#x1F852; | Profondeur de l'écran (nombre de couleurs = 2 ^ profondeur) |
| couleur | Entier long | &#x1F852; | 1 = écran couleur 0 = écran en niveaux de gris |
| écran | Entier long | &#x1F852; | Numéro de l'écran ou écran principal si omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET SCREEN DEPTH.Summary-->**SET SCREEN DEPTH** vous permet de modifier la profondeur et les paramètres de couleurs/niveaux de gris de l'écran dont vous avez passé le numéro dans *écran*.<!-- END REF--> Si vous ne passez pas ce paramètre, la commande s'applique à l'écran principal.

Pour connaître les valeurs à passer dans les paramètres *profondeur* et *couleur*, reportez-vous à la description de la commande [SCREEN DEPTH](screen-depth.md).

#### Voir aussi 

[SCREEN DEPTH](screen-depth.md)  