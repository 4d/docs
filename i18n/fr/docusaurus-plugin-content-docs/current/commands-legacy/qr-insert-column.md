---
id: qr-insert-column
title: QR INSERT COLUMN
slug: /commands/qr-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.QR INSERT COLUMN.Syntax-->**QR INSERT COLUMN** ( *zone* ; *numColonne* ; *objet* )<!-- END REF-->
<!--REF #_command_.QR INSERT COLUMN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| numColonne | Integer | &#8594;  | Numéro de colonne |
| objet | Field, Variable, Pointer | &#8594;  | Objet à insérer dans la colonne |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR INSERT COLUMN.Summary-->La commande **QR INSERT COLUMN** insère ou crée dans *zone* une colonne à un emplacement spécifique.<!-- END REF--> Les colonnes situées à droite de la colonne ajoutée seront décalées en conséquence.

*numColonne* indique le numéro de la colonne, correspondant à la position de la colonne — les colonnes sont numérotées de gauche à droite.

La valeur passée dans *objet* sera l'intitulé par défaut de la colonne.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

**Note :** Cette commande ne peut pas être utilisée avec un état en tableau croisé.

#### Exemple 

La ligne suivante insère (ou crée) une première colonne dans la zone MaZone et la remplit avec le contenu du champ Noms. L'intitulé par défaut de la colonne sera “Noms” : 

```4d
 QR INSERT COLUMN(MaZone;1;->[Table 1]Noms)
```

#### Voir aussi 

[QR DELETE COLUMN](qr-delete-column.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 748 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


