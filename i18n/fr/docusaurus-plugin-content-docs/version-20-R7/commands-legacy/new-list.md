---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Numéro de référence de liste |

<!-- END REF-->

#### Description 

<!--REF #_command_.New list.Summary-->La commande **New list** crée une nouvelle liste hiérarchique vide en mémoire et retourne son numéro de référence unique.<!-- END REF-->

**ATTENTION :** Les listes hiérarchiques résident en mémoire. Une fois que vous en avez terminé avec une liste hiérarchique, il est important que vous l'effaciez à l'aide de la commande [CLEAR LIST](clear-list.md). Ainsi, vous libérez la mémoire occupée par la liste hiérarchique dont vous n'avez plus besoin.

D'autres commandes vous permettent de créer des listes hiérarchiques :

* [Copy list](copy-list.md) crée une nouvelle liste en dupliquant une liste existante.
* [Load list](load-list.md) crée une nouvelle liste en chargeant une énumération créée (manuellement ou par programmation) dans l'éditeur d'énumérations du mode Développement.
* [BLOB to list](blob-to-list.md) crée une nouvelle liste à partir du contenu d'un BLOB dans lequel une liste avait été préalablement stockée.

Une fois que vous avez créé une liste hiérarchique à l'aide de la commande **New list**, vous pouvez :

* Ajouter des éléments à la liste à l'aide des commandes [APPEND TO LIST](append-to-list.md) et [INSERT IN LIST](insert-in-list.md).
* Supprimer des éléments de cette liste à l'aide de la commande [DELETE FROM LIST](delete-from-list.md).

#### Exemple 

Reportez-vous à l'exemple de la commande [APPEND TO LIST](append-to-list.md).

#### Voir aussi 

[APPEND TO LIST](append-to-list.md)  
[BLOB to list](blob-to-list.md)  
[CLEAR LIST](clear-list.md)  
[Copy list](copy-list.md)  
[DELETE FROM LIST](delete-from-list.md)  
[INSERT IN LIST](insert-in-list.md)  
[LIST TO BLOB](list-to-blob.md)  
[Load list](load-list.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 375 |
| Thread safe | &check; |
| Interdite sur le serveur ||


