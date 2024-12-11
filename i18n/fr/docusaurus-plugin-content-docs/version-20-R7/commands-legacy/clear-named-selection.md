---
id: clear-named-selection
title: CLEAR NAMED SELECTION
slug: /commands/clear-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR NAMED SELECTION.Syntax-->**CLEAR NAMED SELECTION** ( *nom* )<!-- END REF-->
<!--REF #_command_.CLEAR NAMED SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nom | Text | &#8594;  | Nom de la sélection temporaire à effacer |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR NAMED SELECTION.Summary-->**CLEAR NAMED SELECTION** efface *nom* de la mémoire et donc libère la mémoire qu'elle utilisait.<!-- END REF-->n'affecte pas les tables, sélections courantes ou enregistrements. Comme les sélections temporaires utilisent de la mémoire, il est conseillé de les effacer si vous n'en avez plus besoin.

Si *nom* a été créée par la commande [CUT NAMED SELECTION](cut-named-selection.md) puis traitée à l'aide de la commande [USE NAMED SELECTION](use-named-selection.md), elle n'existe plus en mémoire. Dans ce cas, vous n'avez pas besoin d'utiliser **CLEAR NAMED SELECTION**.

#### Voir aussi 

[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 333 |
| Thread safe | &check; |
| Interdite sur le serveur ||


