---
id: qr-get-drop-column
title: QR Get drop column
slug: /commands/qr-get-drop-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Get drop column.Syntax-->**QR Get drop column** ( *zone* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get drop column.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| Résultat | Integer | &#8592; | Emplacement du "déposer" |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get drop column.Summary-->La commande **QR Get drop column** retourne une valeur indiquant l'emplacement auquel un “déposer” a été effectué dans *zone* :

* Si la valeur est négative, elle indique un numéro de colonne (par exemple, -3 indique qu'un “déposer” a été effectué sur la colonne n° 3).<!-- END REF-->
* Si la valeur est positive, elle indique que le “déposer” a été effectué sur le séparateur situé devant la colonne (par exemple, 3 indique qu'un “déposer” a été effectué après la colonne n° 2). Gardez à l'esprit qu'un “déposer” ne peut pas être effectué devant une colonne existante.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR DELETE COLUMN](qr-delete-column.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 747 |
| Thread safe | &cross; |
| Modifie les variables | error |


