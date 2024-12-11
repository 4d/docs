---
id: graph-settings
title: GRAPH SETTINGS
slug: /commands/graph-settings
displayed_sidebar: docs
---

<!--REF #_command_.GRAPH SETTINGS.Syntax-->**GRAPH SETTINGS** ( *graphImage* ; *xmin* ; *xmax* ; *ymin* ; *ymax* ; *xprop* ; *grilleX* ; *grilleY* ; *titre* {; *titre2* ; ... ; *titreN*} )<!-- END REF-->
<!--REF #_command_.GRAPH SETTINGS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| graphImage | Picture | &#8594;  | Variable image |
| xmin | Integer, Date, Time | &#8594;  | Valeur minimale de l'échelle des X pour graphe proportionnel (lignes ou points) |
| xmax | Integer, Date, Time | &#8594;  | Valeur maximale de l'échelle des X pour graphe proportionnel (lignes ou points) |
| ymin | Integer | &#8594;  | Valeur minimale de l'échelle des Y |
| ymax | Integer | &#8594;  | Valeur maximale de l'échelle des Y |
| xprop | Boolean | &#8594;  | VRAI pour l'échelle des X proportionnelle ; FAUX pour l'échelle des X normale (lignes ou points) |
| grilleX | Boolean | &#8594;  | VRAI pour la grille sur l'axe des X ; FAUX pour pas de grille sur l'axe des X (seulement si xprop est VRAI) |
| grilleY | Boolean | &#8594;  | VRAI pour la grille sur l'axe des Y; FAUX pour pas de grille sur l'axe des Y |
| titre | Text | &#8594;  | Titre(s) pour les titre(s) des série(s) |

<!-- END REF-->

#### Description 

<!--REF #_command_.GRAPH SETTINGS.Summary-->La commande **GRAPH SETTINGS** permet de paramétrer les échelles et les grilles d'un graphe placé dans un formulaire.<!-- END REF--> Le graphe doit déjà avoir été défini à l'aide de la commande [GRAPH](graph.md). **GRAPH SETTINGS** ne fait rien s'il s'agit d'un graphe de type secteurs. Cette commande doit impérativement être appelée dans le même process que le formulaire.

**Note :** Vous ne devez pas appeler cette commande si le graphe a été généré par la commande [GRAPH](graph.md) avec le paramètre *graphParams* de type [Objet](# "Données structurées sous forme d'objet natif 4D"). Reportez-vous à la description de la commande [GRAPH](graph.md) pour plus d'informations.

Les paramètres *xmin*, *xmax*, *ymin* et *ymax* fixent les valeurs minimales et maximales pour les axes des X ou Y. Si la valeur des deux paramètres correspondants au même axe est nulle (0, ?00:00:00? ou !00/00/00! selon le type de données), les valeurs de graphe par défaut seront utilisées. Les paramètres *xmin* et *xmax* ne sont pris en compte que pour les graphes proportionnels (*xprop* est **Vrai**).  
Le paramètre *xprop* fixe l'axe des X comme proportionnel (sont concernés par cette option les graphes de type 4, 5 et 6). Lorsque ce paramètre est Vrai, chaque point sera placé sur l'axe des X par rapport aux valeurs des points si elles sont de type numérique, heure ou date.

Les paramètres *grilleX* et *grilleY* montrent ou cachent les grilles. Une grille pour l'axe des X sera affichée s'il s'agit d'un graphe en points ou en lignes proportionnel.

Le(s) paramètre(s) *titre* spécifient les titres des légendes.

#### Exemple 

Reportez-vous à l'exemple de la commande GRAPHE.

#### Voir aussi 

[GRAPH](graph.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 298 |
| Thread safe | &check; |
| Interdite sur le serveur ||


