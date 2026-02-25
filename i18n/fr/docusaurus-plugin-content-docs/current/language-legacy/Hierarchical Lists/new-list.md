---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Numéro de référence de liste |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.New list.Summary-->La commande **New list** crée une nouvelle liste hiérarchique vide en mémoire et retourne son numéro de référence unique.<!-- END REF-->

**ATTENTION :** Les listes hiérarchiques résident en mémoire. Une fois que vous en avez terminé avec une liste hiérarchique, il est important que vous l'effaciez à l'aide de la commande [CLEAR LIST](../commands/clear-list). Ainsi, vous libérez la mémoire occupée par la liste hiérarchique dont vous n'avez plus besoin.

D'autres commandes vous permettent de créer des listes hiérarchiques :

* [Copy list](../commands/copy-list) crée une nouvelle liste en dupliquant une liste existante.
* [Load list](../commands/load-list) crée une nouvelle liste en chargeant une énumération créée (manuellement ou par programmation) dans l'éditeur d'énumérations du mode Développement.
* [BLOB to list](../commands/blob-to-list) crée une nouvelle liste à partir du contenu d'un BLOB dans lequel une liste avait été préalablement stockée.

Une fois que vous avez créé une liste hiérarchique à l'aide de la commande **New list**, vous pouvez :

* Ajouter des éléments à la liste à l'aide des commandes [APPEND TO LIST](../commands/append-to-list) et [INSERT IN LIST](../commands/insert-in-list).
* Supprimer des éléments de cette liste à l'aide de la commande [DELETE FROM LIST](../commands/delete-from-list).

## Exemple 

Reportez-vous à l'exemple de la commande [APPEND TO LIST](../commands/append-to-list).

## Voir aussi 

[APPEND TO LIST](../commands/append-to-list)  
[BLOB to list](../commands/blob-to-list)  
[CLEAR LIST](../commands/clear-list)  
[Copy list](../commands/copy-list)  
[DELETE FROM LIST](../commands/delete-from-list)  
[INSERT IN LIST](../commands/insert-in-list)  
[LIST TO BLOB](../commands/list-to-blob)  
[Load list](../commands/load-list)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 375 |
| Thread safe | no |


