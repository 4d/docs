---
id: qr-delete-column
title: QR DELETE COLUMN
slug: /commands/qr-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE COLUMN.Syntax-->**QR DELETE COLUMN** ( *zone* ; *numColonne* )<!-- END REF-->
<!--REF #_command_.QR DELETE COLUMN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| numColonne | Integer | &#8594;  | Numéro de colonne |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR DELETE COLUMN.Summary-->La commande **QR DELETE COLUMN** supprime de la *zone* la colonne dont le numéro a été passé dans *numColonne*.<!-- END REF--> Cette commande ne peut pas être utilisée avec les états en tableau croisé.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *numColonne* est incorrect, l’erreur -9852 est générée.

#### Exemple 

Cet exemple supprime la troisième colonne de l'état : 

```4d
 If(QR Get report kind(MaZone)=qr list report)
    QR DELETE COLUMN(MaZone;3)
 End if
```

#### Voir aussi 

[QR INSERT COLUMN](qr-insert-column.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 749 |
| Thread safe | &cross; |
| Modifie les variables | error |


