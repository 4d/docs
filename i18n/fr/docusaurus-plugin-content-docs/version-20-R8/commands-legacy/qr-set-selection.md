---
id: qr-set-selection
title: QR SET SELECTION
slug: /commands/qr-set-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SELECTION.Syntax-->**QR SET SELECTION** ( *zone* ; *gauche* ; *haut* {; *droite* {; *bas*}} )<!-- END REF-->
<!--REF #_command_.QR SET SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| gauche | Integer | &#8594;  | Limite gauche |
| haut | Integer | &#8594;  | Limite supérieure |
| droite | Integer | &#8594;  | Limite droite |
| bas | Integer | &#8594;  | Limite inférieure |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET SELECTION.Summary-->La commande **QR SET SELECTION** permet de sélectionner une cellule, une ligne, une colonne ou encore la totalité de la *zone*, comme vous le feriez à l'aide de la souris.<!-- END REF--> Cette commande permet également de désélectionner la sélection courante. 

*gauche* contient le numéro de la colonne représentant la limite gauche de la sélection. Si *gauche* vaut 0, la ligne entière est sélectionnée.  
*haut* contient le numéro de la ligne représentant la limite supérieure de la sélection. Si *haut* vaut 0, la colonne entière est sélectionnée.  
*droite* contient le numéro de la colonne représentant la limite droite de la sélection.  
*bas* contient le numéro de la ligne représentant la limite inférieure de la sélection.

**Notes** 

* Si les paramètres *gauche* et *haut* valent 0, la totalité de la zone est sélectionnée.
* Pour tout désélectionner, passez -1 dans les paramètres *gauche*, *haut*, *droite* et *bas*.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR GET SELECTION](qr-get-selection.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 794 |
| Thread safe | &cross; |
| Modifie les variables | error |


