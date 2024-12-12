---
id: create-empty-set
title: CREATE EMPTY SET
slug: /commands/create-empty-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE EMPTY SET.Syntax-->**CREATE EMPTY SET** ( {*laTable* ;} *ensemble* )<!-- END REF-->
<!--REF #_command_.CREATE EMPTY SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle créer un ensemble vide ou Table par défaut si ce paramètre est omis |
| ensemble | Text | &#8594;  | Nom du nouvel ensemble vide |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE EMPTY SET.Summary-->**CREATE EMPTY SET** crée un ensemble vide, *ensemble*, pour *laTable*.<!-- END REF--> Vous pouvez ajouter des enregistrements dans cet ensemble à l'aide de la commande [ADD TO SET](add-to-set.md). Si un ensemble du même nom existe déjà, il est effacé et remplacé par le nouvel ensemble.

**Note :** Il n'est pas indispensable d'appeler la commande **CREATE EMPTY SET** avant d'utiliser la commande [CREATE SET](create-set.md).

#### Exemple 

Reportez-vous à l'exemple proposé dans la section *Présentation des ensembles*.

#### Voir aussi 

[CLEAR SET](clear-set.md)  
[CREATE SET](create-set.md)  