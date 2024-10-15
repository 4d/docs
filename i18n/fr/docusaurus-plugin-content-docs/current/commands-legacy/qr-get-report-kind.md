---
id: qr-get-report-kind
title: QR Get report kind
slug: /commands/qr-get-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report kind.Syntax-->**QR Get report kind** ( *zone* ) -> Résultat<!-- END REF-->
<!--REF #_command_.QR Get report kind.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &rarr; | Référence de la zone |
| Résultat | Integer | &larr; | Type d'état |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get report kind.Summary-->La commande **QR Get report kind** retourne le *type* d'état présent dans la *zone*.<!-- END REF--> 

Vous pouvez comparer le résultat avec les constantes du thème *QR Types d'états* :

| Constante       | Type        | Valeur |
| --------------- | ----------- | ------ |
| qr cross report | Entier long | 2      |
| qr list report  | Entier long | 1      |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR SET REPORT KIND](qr-set-report-kind.md)  