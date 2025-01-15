---
id: qr-run
title: QR RUN
slug: /commands/qr-run
displayed_sidebar: docs
---

<!--REF #_command_.QR RUN.Syntax-->**QR RUN** ( *zone* )<!-- END REF-->
<!--REF #_command_.QR RUN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone à exécuter |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR RUN.Summary-->La commande **QR RUN** provoque l'exécution de l'état rapide désigné par le paramètre *zone*.<!-- END REF--> L'état est généré avec ses paramétrages courants, notamment son type de sortie. Vous pouvez utiliser la commande [QR SET DESTINATION](qr-set-destination.md) pour modifier le type de sortie.

L'état est exécuté sur la table à laquelle appartient la zone. Lorsque *zone* désigne une zone hors écran, il est nécessaire de spécifier la table à utiliser à l'aide de la commande [QR SET REPORT TABLE](qr-set-report-table.md).

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

**4D Server :** Cette commande peut être exécutée sur 4D Server dans le cadre d'une procédure stockée. Dans ce contexte, veillez à ce qu’aucune boîte de dialogue n’apparaisse sur le poste serveur (sauf besoin spécifique). Pour cela, il est nécessaire d’appeler la commande [QR SET DESTINATION](qr-set-destination.md) avec le paramètre "\*". En cas de problème sur l’imprimante (plus de papier, imprimante déconnectée, etc.), aucun message d'erreur n'est généré. 


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 746 |
| Thread safe | &cross; |
| Modifie les variables | error |


