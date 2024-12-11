---
id: screen-coordinates
title: SCREEN COORDINATES
slug: /commands/screen-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN COORDINATES.Syntax-->**SCREEN COORDINATES** ( *gauche* ; *haut* ; *droite* ; *bas* {; *idEcran* {; *zoneEcran*}} )<!-- END REF-->
<!--REF #_command_.SCREEN COORDINATES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| gauche | Integer | &#8592; | Coordonnée gauche de la zone de l'écran |
| haut | Integer | &#8592; | Coordonnée supérieure de la zone de l'écran |
| droite | Integer | &#8592; | Coordonnée droite de la zone de l'écran |
| bas | Integer | &#8592; | Coordonnée inférieure de la zone de l'écran |
| idEcran | Integer | &#8594;  | Numéro de l'écran ou écran principal si omis |
| zoneEcran | Integer | &#8594;  | Ecran entier (par défaut) ou zone de travail |

<!-- END REF-->

#### Description 

<!--REF #_command_.SCREEN COORDINATES.Summary-->La commande **SCREEN COORDINATES** retourne dans les paramètres *gauche*, *haut*, *droite* et *bas* les coordonnées de l'écran spécifié dans le paramètre *idEcran*.<!-- END REF-->

Si vous omettez le paramètre *idEcran*, **SCREEN COORDINATES** retourne les coordonnées de l'écran principal.

Le paramètre optionnel zoneEcran vous permet d'indiquer si vous souhaitez les coordonnées de la zone de l'écran entier (par défaut) ou uniquement les coordonnées de la zone utilisable disponible. Deux sélecteurs sont disponibles :

| Constante        | Valeur | Comment                                                                                                                                                                             |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Screen size      | 0      | Les coordonnées de l'écran entier. (valeur par défaut)                                                                                                                              |
| Screen work area | 1      | Les coordonnées de la zone de travail disponible pouvant être utilisées (c'est-à-dire non utilisées par la barre de tâches de Windows ou par la barre de menu et le Dock de macOS). |

Les images suivantes illustrent les différences entre la zone de l'écran et la zone de travail :

![](../assets/en/commands/pict4800387.en.png) 

**Notes** :

* Si la barre de tâches ou le Dock est automatiquement caché(e), **SCREEN COORDINATES** retourne toujours la taille de l'écran entier.
* Si une valeur non valide est lue dans *idEcran* ou *zoneEcran*, une valeur zéro est retournée pour toutes les coordonnées.

#### Voir aussi 

[Count screens](count-screens.md)  
[Menu bar screen](menu-bar-screen.md)  
[SCREEN DEPTH](screen-depth.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 438 |
| Thread safe | &check; |
| Interdite sur le serveur ||


