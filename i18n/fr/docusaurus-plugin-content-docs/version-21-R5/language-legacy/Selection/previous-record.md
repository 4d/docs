---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** ({ *laTable* : Table })<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle se placer sur l'enregistrement précédent de la sélection courante ou Table par défaut si ce paramètre est omis |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.PREVIOUS RECORD.Summary-->**PREVIOUS RECORD** place le pointeur d'enregistrement courant sur l'enregistrement précédent dans la sélection courante de *laTable* pour le process courant.<!-- END REF--> Si la sélection courante est vide, ou si [Before selection](../commands/before-selection) ou [End selection](../commands/end-selection) renvoie Vrai, **PREVIOUS RECORD** ne fait rien.

Si **PREVIOUS RECORD** place le pointeur d'enregistrement courant avant la sélection courante, [End selection](../commands/end-selection) retourne Vrai, et il n'y a plus d'enregistrement courant. Dans ce cas, utilisez les commandes [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) ou [GOTO SELECTED RECORD](../commands/goto-selected-record) pour replacer le pointeur d'enregistrement courant dans la sélection courante.

## Voir aussi 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[LAST RECORD](../commands/last-record)  
[NEXT RECORD](../commands/next-record)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 110 |
| Thread safe | yes |
| Change l'enregistrement courant ||


