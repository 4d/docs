---
id: clear-set
title: CLEAR SET
slug: /commands/clear-set
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SET.Syntax-->**CLEAR SET** ( *ensemble* )<!-- END REF-->
<!--REF #_command_.CLEAR SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ensemble | Text | &#8594;  | Nom de l'ensemble à effacer de la mémoire |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR SET.Summary-->**CLEAR SET** efface *ensemble* de la mémoire et la libère ainsi pour d'autres utilisations.<!-- END REF--> **CLEAR SET** n'a aucune conséquence sur les tables, sélections ou enregistrements. Pour sauvegarder un ensemble avant de l'effacer, utiliser la commande [SAVE SET](save-set.md). Comme les ensembles consomment de la mémoire, pensez à les effacer dès qu'ils ne sont plus nécessaires.

#### Exemple 

Reportez-vous à l'exemple de la commande [USE SET](use-set.md).

#### Voir aussi 

[CREATE EMPTY SET](create-empty-set.md)  
[CREATE SET](create-set.md)  
[LOAD SET](load-set.md)  