---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle se placer sur l'enregistrement précédent de la sélection courante ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.PREVIOUS RECORD.Summary-->**PREVIOUS RECORD** place le pointeur d'enregistrement courant sur l'enregistrement précédent dans la sélection courante de *laTable* pour le process courant.<!-- END REF--> Si la sélection courante est vide, ou si [Before selection](before-selection.md) ou [End selection](end-selection.md) renvoie Vrai, **PREVIOUS RECORD** ne fait rien.

Si **PREVIOUS RECORD** place le pointeur d'enregistrement courant avant la sélection courante, [End selection](end-selection.md) retourne Vrai, et il n'y a plus d'enregistrement courant. Dans ce cas, utilisez les commandes [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md) pour replacer le pointeur d'enregistrement courant dans la sélection courante.

#### Voir aussi 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 110 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Interdite sur le serveur ||


