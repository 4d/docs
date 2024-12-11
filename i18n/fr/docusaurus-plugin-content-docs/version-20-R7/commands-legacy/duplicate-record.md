---
id: duplicate-record
title: DUPLICATE RECORD
slug: /commands/duplicate-record
displayed_sidebar: docs
---

<!--REF #_command_.DUPLICATE RECORD.Syntax-->**DUPLICATE RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.DUPLICATE RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l'enregistrement à dupliquer ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.DUPLICATE RECORD.Summary-->**DUPLICATE RECORD** duplique l'enregistrement courant de *laTable*.<!-- END REF--> Ce nouvel enregistrement devient l'enregistrement courant. S'il n'y a pas d'enregistrement courant, **DUPLICATE RECORD** ne fait rien. Appelez la commande [SAVE RECORD](save-record.md) pour sauvegarder le nouvel enregistrement.

**DUPLICATE RECORD** peut être exécuté pendant la saisie des données. Vous pouvez donc dupliquer l'enregistrement qui est affiché à l'écran. N'oubliez pas que vous devez d'abord appeler [SAVE RECORD](save-record.md) si vous voulez sauvegarder les modifications apportées à l'enregistrement original. 

**Note de compatibilité :** A compter de la version 11 de 4D, cette commande ne prend plus en charge les sous-tables. 

#### Voir aussi 

[SAVE RECORD](save-record.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 225 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Interdite sur le serveur ||


