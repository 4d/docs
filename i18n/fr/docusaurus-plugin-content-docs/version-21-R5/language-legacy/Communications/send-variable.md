---
id: send-variable
title: SEND VARIABLE
slug: /commands/send-variable
displayed_sidebar: docs
---

<!--REF #_command_.SEND VARIABLE.Syntax-->**SEND VARIABLE** ( *variable* : Variable )<!-- END REF-->
<!--REF #_command_.SEND VARIABLE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable à envoyer |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.SEND VARIABLE.Summary-->**SEND VARIABLE** envoie *variable* vers le document ou le port série préalablement ouvert par la commande [SET CHANNEL](../commands/set-channel).<!-- END REF--> La variable est envoyée dans un format interne spécial qui ne peut être relu que par la commande [RECEIVE VARIABLE](../commands/receive-variable). **SEND VARIABLE** envoie la totalité de la variable (y compris son type et sa valeur).

**Notes :**

1. Si vous envoyez une variable à un document avec cette commande, le document doit avoir été ouvert par la commande [SET CHANNEL](../commands/set-channel). Vous ne pouvez pas utiliser **SEND VARIABLE** avec un document ouvert par [Open document](../commands/open-document), [Create document](../commands/create-document) ou [Append document](../commands/append-document).
2. Cette commande ne fonctionne pas avec les variables de type tableau. Si vous voulez envoyer et recevoir des tableaux via un document ou un port série, utilisez les *Commandes du thème BLOB*.

## Exemple 

Reportez-vous à l'exemple de la commande [RECEIVE RECORD](../commands/receive-record).

## Voir aussi 

[RECEIVE RECORD](../commands/receive-record)  
[RECEIVE VARIABLE](../commands/receive-variable)  
[SEND RECORD](../commands/send-record)  
[SET CHANNEL](../commands/set-channel)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 80 |
| Thread safe | yes |


