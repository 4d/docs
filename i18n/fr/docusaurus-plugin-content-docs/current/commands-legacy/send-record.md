---
id: send-record
title: SEND RECORD
slug: /commands/send-record
displayed_sidebar: docs
---

<!--REF #_command_.SEND RECORD.Syntax-->**SEND RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.SEND RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle envoyer l'enregistrement courant ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.SEND RECORD.Summary-->**SEND RECORD** envoie l'enregistrement courant de *laTable* vers le port série ou vers un document ouvert par la commande [SET CHANNEL](set-channel.md).<!-- END REF--> L'enregistrement est envoyé dans un format interne particulier ne pouvant être interprété que par la commande [RECEIVE RECORD](receive-record.md). S'il n'y a pas d'enregistrement courant, **SEND RECORD** ne fait rien.

L'enregistrement est envoyé en totalité, ce qui signifie que les images et les BLOBs stockés dans ou avec l'enregistrement sont également envoyés.

**Important :** Lorsque des enregistrements sont envoyés et reçus par **SEND RECORD** et [RECEIVE RECORD](receive-record.md), la structure de la table source et celle de la table de destination doivent être compatibles. Si ce n'est pas le cas, 4D convertira les valeurs en fonction des définitions des tables lorsque [RECEIVE RECORD](receive-record.md) sera exécutée.

**Note :** Si vous envoyez un enregistrement à un document avec cette commande, le document doit avoir été ouvert par la commande [SET CHANNEL](set-channel.md). Vous ne pouvez pas utiliser **SEND RECORD** avec un document ouvert par [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md).

**Note de compatibilité :** A compter de la version 11 de 4D, cette commande ne prend plus en charge les sous-tables. 

#### Exemple 

Reportez-vous à l'exemple de la commande [RECEIVE RECORD](receive-record.md).

#### Voir aussi 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND VARIABLE](send-variable.md)  