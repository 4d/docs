---
id: old-related-one
title: OLD RELATED ONE
slug: /commands/old-related-one
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED ONE.Syntax-->**OLD RELATED ONE** ( *leChamp* : Field )<!-- END REF-->
<!--REF #_command_.OLD RELATED ONE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ N |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.OLD RELATED ONE.Summary-->**OLD RELATED ONE** fonctionne de la même manière que [RELATE ONE](../commands/relate-one), à la différence près que **OLD RELATED ONE** utilise la valeur précédente de *leChamp* pour établir la relation.<!-- END REF--> 

**Note :** **OLD RELATED ONE** utilise l'ancienne valeur du champ N telle qu'elle est retournée par la fonction [Old](../commands/old). Reportez-vous à la description de cette fonction pour plus d'informations. 

**OLD RELATED ONE** charge l'enregistrement précédemment lié à l'enregistrement courant. Les champs de cet enregistrement sont alors saisissables. Si vous voulez modifier cet ancien enregistrement lié et le sauvegarder, vous devez appeler la commande [SAVE RELATED ONE](../commands/save-related-one). Notez que pour un enregistrement venant d'être créé, il n'y pas d'ancien enregistrement lié. 

## Variables et ensembles système 

Si la commande a été correctement exécutée et si les enregistrements liés ont bien été chargés, la variable système OK prend la valeur 1\. Si l'utilisateur a cliqué sur le bouton **Annuler** dans la boîte de dialogue de choix d'enregistrement (qui apparaît si l'enregistrement lié avait été modifié), la variable OK prend la valeur 0\. 

## Voir aussi 

[Old](../commands/old)  
[OLD RELATED MANY](../commands/old-related-many)  
[RELATE ONE](../commands/relate-one)  
[SAVE RELATED ONE](../commands/save-related-one)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 44 |
| Thread safe | no |
| Modifie les variables | OK |


