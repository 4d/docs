---
id: send-variable
title: SEND VARIABLE
slug: /commands/send-variable
displayed_sidebar: docs
---

<!--REF #_command_.SEND VARIABLE.Syntax-->**SEND VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.SEND VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable à envoyer |

<!-- END REF-->

#### Description 

<!--REF #_command_.SEND VARIABLE.Summary-->**SEND VARIABLE** envoie *variable* vers le document ou le port série préalablement ouvert par la commande [SET CHANNEL](set-channel.md).<!-- END REF--> La variable est envoyée dans un format interne spécial qui ne peut être relu que par la commande [RECEIVE VARIABLE](receive-variable.md). **SEND VARIABLE** envoie la totalité de la variable (y compris son type et sa valeur).

**Notes :**

1. Si vous envoyez une variable à un document avec cette commande, le document doit avoir été ouvert par la commande [SET CHANNEL](set-channel.md). Vous ne pouvez pas utiliser **SEND VARIABLE** avec un document ouvert par [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md).
2. Cette commande ne fonctionne pas avec les variables de type tableau. Si vous voulez envoyer et recevoir des tableaux via un document ou un port série, utilisez les *Commandes du thème BLOB*.

#### Exemple 

Reportez-vous à l'exemple de la commande [RECEIVE RECORD](receive-record.md).

#### Voir aussi 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND RECORD](send-record.md)  
[SET CHANNEL](set-channel.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 80 |
| Thread safe | &check; |


