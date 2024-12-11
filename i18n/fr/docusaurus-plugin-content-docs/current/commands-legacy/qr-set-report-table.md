---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *zone* ; *numTable* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| numTable | Integer | &#8594;  | Numéro de table |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET REPORT TABLE.Summary-->La commande **QR SET REPORT TABLE** désigne via le paramètre *numTable* le numéro de la table courante de l'état rapide dont la référence est passée dans le paramètre *zone*.<!-- END REF--> 

Il est impératif qu'une table soit associée à un état car l'éditeur d'états utilisera la sélection courante de cette table pour afficher les données, effectuer les calculs et propager les liens si nécessaire. 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *numTable* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR Get report table](qr-get-report-table.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 757 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


