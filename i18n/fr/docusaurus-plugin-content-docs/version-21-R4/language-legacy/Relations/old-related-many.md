---
id: old-related-many
title: OLD RELATED MANY
slug: /commands/old-related-many
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED MANY.Syntax-->**OLD RELATED MANY** ( *leChamp* : Field )<!-- END REF-->
<!--REF #_command_.OLD RELATED MANY.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ recevant un lien |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.OLD RELATED MANY.Summary-->**OLD RELATED MANY** fonctionne comme la commande [RELATE MANY](../commands/relate-many), à la différence près que **OLD RELATED MANY** utilise l'ancienne valeur du champ pour activer le lien.<!-- END REF-->**OLD RELATED MANY** utilise l'ancienne valeur du champ N, telle qu'elle est retournée par la fonction [Old](../commands/old). Reportez-vous à la description de cette fonction pour plus d'informations.

**OLD RELATED MANY** modifie la sélection de la table liée. La commande sélectionne le premier enregistrement de la sélection courante et en fait l'enregistrement courant. 

## Voir aussi 

[OLD RELATED ONE](../commands/old-related-one)  
[RELATE MANY](../commands/relate-many)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 263 |
| Thread safe | yes |
| Change l'enregistrement courant ||
| Change la sélection courante ||


