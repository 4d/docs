---
id: find-window
title: Find window
slug: /commands/find-window
displayed_sidebar: docs
---

<!--REF #_command_.Find window.Syntax-->**Find window** ( *gauche* ; *haut* {; *partieFenêtre*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.Find window.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| gauche | Integer | &#x1F852; | Coordonnée globale gauche |
| haut | Integer | &#x1F852; | Coordonnée globale supérieure |
| partieFenêtre | Integer | &#x1F858; | 3 si une fenêtre est "touchée", 0 sinon |
| Résultat | Integer | &#x1F850; | Numéro de référence de fenêtre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find window.Summary-->La commande **Find window** retourne (s'il existe) le numéro de référence de la première fenêtre "touchée" par le point dont vous passez les coordonnées dans *gauche* et *haut*.<!-- END REF-->

Ces coordonnées doivent être exprimées relativement au coin supérieur gauche de la zone de contenu (l'intérieur) de la fenêtre d'application (sous Windows) ou de l'écran principal (sous Mac OS).

Le paramètre *partieFenêtre* retourne 3 si une fenêtre est touchée, et 0 sinon (**Note de compatibilité :** à compter de 4D v14, les constantes du thème *Chercher fenetre* sont obsolètes). 

#### Voir aussi 

[Frontmost window](frontmost-window.md)  
[Next window](next-window.md)  