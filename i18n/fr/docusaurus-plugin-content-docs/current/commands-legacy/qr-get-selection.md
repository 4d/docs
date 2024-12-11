---
id: qr-get-selection
title: QR GET SELECTION
slug: /commands/qr-get-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SELECTION.Syntax-->**QR GET SELECTION** ( *zone* ; *gauche* ; *haut* {; *droite* {; *bas*}} )<!-- END REF-->
<!--REF #_command_.QR GET SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| gauche | Integer | &#8592; | Limite gauche |
| haut | Integer | &#8592; | Limite supérieure |
| droite | Integer | &#8592; | Limite droite |
| bas | Integer | &#8592; | Limite inférieure |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET SELECTION.Summary-->La commande **QR GET SELECTION** retourne les coordonnées de la sélection courante de la *zone*.<!-- END REF--> 

*gauche* retourne le numéro de la colonne représentant la limite gauche de la sélection. Si *gauche* vaut 0, la ligne entière est sélectionnée.  
*haut* retourne le numéro de la ligne représentant la limite supérieure de la sélection. Si *haut* vaut 0, la colonne entière est sélectionnée.

**Note :** Si les paramètres *gauche* and *haut* valent 0, la totalité de la zone est sélectionnée. 

*droite* retourne le numéro de la colonne représentant la limite droite de la sélection.  
*bas* retourne le numéro de la ligne représentant la limite inférieure de la sélection.

**Note :** Si la *zone* ne contient aucune sélection, les paramètres *gauche*, *haut*, *droite* et *bas* retournent -1.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR SET SELECTION](qr-set-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 793 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


