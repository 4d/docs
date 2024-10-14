---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *zone* ) -> Résultat<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &srarr; | Référence de la zone |
| Résultat | Integer | &larr; | Numéro de table |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get report table.Summary-->La commande **QR Get report table** retourne le numéro de la table courante de l'état désigné par le paramètre *zone*.<!-- END REF--> 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR SET REPORT TABLE](qr-set-report-table.md)  