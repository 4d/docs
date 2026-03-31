---
id: create-empty-set
title: CREATE EMPTY SET
slug: /commands/create-empty-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE EMPTY SET.Syntax-->**CREATE EMPTY SET** ( {*laTable* ;} *ensemble* )<!-- END REF-->
<!--REF #_command_.CREATE EMPTY SET.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle créer un ensemble vide ou Table par défaut si ce paramètre est omis |
| ensemble | Text | &#8594;  | Nom du nouvel ensemble vide |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CREATE EMPTY SET.Summary-->**CREATE EMPTY SET** crée un ensemble vide, *ensemble*, pour *laTable*.<!-- END REF--> Vous pouvez ajouter des enregistrements dans cet ensemble à l'aide de la commande [ADD TO SET](../commands/add-to-set). Si un ensemble du même nom existe déjà, il est effacé et remplacé par le nouvel ensemble.

**Note :** Il n'est pas indispensable d'appeler la commande **CREATE EMPTY SET** avant d'utiliser la commande [CREATE SET](../commands/create-set).

## Exemple 

Reportez-vous à l'exemple proposé dans la section *Présentation des ensembles*.

## Voir aussi 

[CLEAR SET](../commands/clear-set)  
[CREATE SET](../commands/create-set)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 140 |
| Thread safe | yes |


