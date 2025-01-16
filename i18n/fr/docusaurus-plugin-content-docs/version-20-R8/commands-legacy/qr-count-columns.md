---
id: qr-count-columns
title: QR Count columns
slug: /commands/qr-count-columns
displayed_sidebar: docs
---

<!--REF #_command_.QR Count columns.Syntax-->**QR Count columns** ( *zone* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Count columns.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| Résultat | Integer | &#8592; | Nombre de colonnes dans la zone |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Count columns.Summary-->La commande **QR Count columns** retourne le nombre de colonnes présentes dans l'état rapide désigné par le paramètre *zone*.<!-- END REF-->

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Exemple 

L'exemple suivant permet d'ajouter une colonne supplémentaire à droite de la dernière colonne de la zone :

```4d
 $NbCol:=QR Count columns(MaZone)
 QR INSERT COLUMN(MaZone;$NbCol+1;->[Table 1]Noms)
```

#### Voir aussi 

[QR DELETE COLUMN](qr-delete-column.md)  
[QR INSERT COLUMN](qr-insert-column.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 764 |
| Thread safe | &cross; |
| Modifie les variables | error |


