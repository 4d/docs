---
id: receive-variable
title: RECEIVE VARIABLE
slug: /commands/receive-variable
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE VARIABLE.Syntax-->**RECEIVE VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.RECEIVE VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8592; | Variable dans laquelle recevoir une variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.RECEIVE VARIABLE.Summary-->La commande **RECEIVE VARIABLE** reçoit *variable*, une variable envoyée par la commande [SEND VARIABLE](send-variable.md), depuis un document ou un port série préalablement ouvert par la commande [SET CHANNEL](set-channel.md).<!-- END REF-->

En mode interprété, si la variable n'existe pas préalablement à l'appel de **RECEIVE VARIABLE**, elle sera créée, typée et remplie en fonction de ce qui a été reçu. En mode compilé, la variable doit être du même type que celle qui est reçue. Dans les deux cas, le contenu de la variable est remplacé par celui de la variable reçue.

**Notes :**

1. Si vous recevez une variable depuis un document avec cette commande, le document doit avoir été ouvert par la commande [SET CHANNEL](set-channel.md). Vous ne pouvez pas utiliser **RECEIVE VARIABLE** avec un document ouvert par [Open document](open-document.md), [Create document](create-document.md) ou [Append document](append-document.md).
2. Cette commande ne fonctionne pas avec les variables de type tableau. Si vous voulez envoyer et recevoir des tableaux via un document ou un port série, utilisez les *Commandes du thème BLOB*.
3. Pendant l'exécution d'un **RECEIVE VARIABLE**, l'utilisateur peut interrompre l'opération en appuyant sur les touches **Ctrl**+**Alt**+**Maj** (sous Windows) ou **Commande**+**Option**+**Maj** (sous Mac OS). Cette interruption génère une erreur –9994 que vous pouvez intercepter à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md). Généralement, vous devez gérer les interruptions d'une réception uniquement lors d'une communication série.

#### Exemple 

Reportez-vous à l'exemple de la commande [RECEIVE RECORD](receive-record.md).

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la variable est correctement reçue, sinon elle prend la valeur 0\. 

#### Voir aussi 

[ON ERR CALL](on-err-call.md)  
[RECEIVE RECORD](receive-record.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 81 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


