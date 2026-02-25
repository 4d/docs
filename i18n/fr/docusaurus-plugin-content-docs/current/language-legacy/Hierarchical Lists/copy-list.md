---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *liste* ) : Integer<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Numéro de référence de la liste à copier |
| Résultat | Integer | &#8592; | Numéro de référence de la nouvelle liste |
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

<!--REF #_command_.Copy list.Summary-->La commande **Copy list** duplique la liste dont vous passez le numéro de référence dans le paramètre *liste* et retourne le numéro de référence de la nouvelle liste.<!-- END REF-->

Le contenu de la liste copiée est entièrement dupliqué. Une fois que vous en avez terminé avec la copie de la liste, appelez la commande [CLEAR LIST](../commands/clear-list) pour l'effacer.

## Voir aussi 

[CLEAR LIST](../commands/clear-list)  
[Load list](../commands/load-list)  
[New list](../commands/new-list)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 626 |
| Thread safe | no |


