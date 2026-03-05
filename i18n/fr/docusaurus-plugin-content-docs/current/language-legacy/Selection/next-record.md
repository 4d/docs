---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle se placer sur l'enregistrement suivant ou Table par défaut si ce paramètre est omis |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.NEXT RECORD.Summary-->La commande **NEXT RECORD** place le pointeur d'enregistrement courant sur l'enregistrement suivant dans la sélection courante de *laTable* pour le process courant.<!-- END REF--> Si la sélection courante est vide, ou si [Before selection](../commands/before-selection) ou [End selection](../commands/end-selection) retourne Vrai, **NEXT RECORD** ne fait rien.

Si **NEXT RECORD** place le pointeur d'enregistrement courant après la fin de la sélection courante, [End selection](../commands/end-selection) retourne Vrai, et il n'y a alors plus d'enregistrement courant. Lorsque [End selection](../commands/end-selection) retourne Vrai, utilisez les commandes [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) ou [GOTO SELECTED RECORD](../commands/goto-selected-record) pour replacer le pointeur d'enregistrement courant dans la sélection courante. 

## Exemple 

Reportez-vous à l'exemple de la commande [DISPLAY RECORD](../commands/display-record).

## Voir aussi 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[LAST RECORD](../commands/last-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 51 |
| Thread safe | yes |
| Change l'enregistrement courant ||


