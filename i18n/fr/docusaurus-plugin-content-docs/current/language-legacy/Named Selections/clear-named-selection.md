---
id: clear-named-selection
title: CLEAR NAMED SELECTION
slug: /commands/clear-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR NAMED SELECTION.Syntax-->**CLEAR NAMED SELECTION** ( *nom* : Text )<!-- END REF-->
<!--REF #_command_.CLEAR NAMED SELECTION.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nom | Text | &#8594;  | Nom de la sélection temporaire à effacer |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CLEAR NAMED SELECTION.Summary-->**CLEAR NAMED SELECTION** efface *nom* de la mémoire et donc libère la mémoire qu'elle utilisait.<!-- END REF-->n'affecte pas les tables, sélections courantes ou enregistrements. Comme les sélections temporaires utilisent de la mémoire, il est conseillé de les effacer si vous n'en avez plus besoin.

Si *nom* a été créée par la commande [CUT NAMED SELECTION](../commands/cut-named-selection) puis traitée à l'aide de la commande [USE NAMED SELECTION](../commands/use-named-selection), elle n'existe plus en mémoire. Dans ce cas, vous n'avez pas besoin d'utiliser **CLEAR NAMED SELECTION**.

## Voir aussi 

[COPY NAMED SELECTION](../commands/copy-named-selection)  
[CUT NAMED SELECTION](../commands/cut-named-selection)  
[USE NAMED SELECTION](../commands/use-named-selection)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 333 |
| Thread safe | yes |


