---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle se placer sur l'enregistrement suivant ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.NEXT RECORD.Summary-->La commande **NEXT RECORD** place le pointeur d'enregistrement courant sur l'enregistrement suivant dans la sélection courante de *laTable* pour le process courant.<!-- END REF--> Si la sélection courante est vide, ou si [Before selection](before-selection.md) ou [End selection](end-selection.md) retourne Vrai, **NEXT RECORD** ne fait rien.

Si **NEXT RECORD** place le pointeur d'enregistrement courant après la fin de la sélection courante, [End selection](end-selection.md) retourne Vrai, et il n'y a alors plus d'enregistrement courant. Lorsque [End selection](end-selection.md) retourne Vrai, utilisez les commandes [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md) pour replacer le pointeur d'enregistrement courant dans la sélection courante. 

#### Exemple 

Reportez-vous à l'exemple de la commande [DISPLAY RECORD](display-record.md).

#### Voir aussi 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[PREVIOUS RECORD](previous-record.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 51 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Interdite sur le serveur ||


