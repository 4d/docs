---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *leChamp* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ pour lequel connaître la valeur de priorité des index |
| Résultat | Integer | &#8592; | Valeur de priorité courante des index du champ |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|16 R2|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get adjusted index cache priority.Summary-->La commande **Get adjusted index cache priority** retourrne la valeur ajustée de priorité de cache appliquée par le gestionnaire de cache à l'index ou aux index du champ *leChamp*.<!-- END REF--> Cette commande est destinée uniquement à la phase de débogage et de mise au point de l'application. 

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

## Voir aussi 

[ADJUST INDEX CACHE PRIORITY](../commands/adjust-index-cache-priority)  
*Gestion des priorités dans le cache de la base*  
[SET INDEX CACHE PRIORITY](../commands/set-index-cache-priority)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1427 |
| Thread safe | yes |


