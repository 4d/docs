---
id: qr-delete-offscreen-area
title: QR DELETE OFFSCREEN AREA
slug: /commands/qr-delete-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Syntax-->**QR DELETE OFFSCREEN AREA** ( *zone* )<!-- END REF-->
<!--REF #_command_.QR DELETE OFFSCREEN AREA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Summary-->La commande **QR DELETE OFFSCREEN AREA** efface de la mémoire la zone hors écran dont la référence a été passée dans le paramètre *zone*.<!-- END REF-->

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR New offscreen area](qr-new-offscreen-area.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 754 |
| Thread safe | &cross; |
| Modifie les variables | error |


