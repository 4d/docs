---
id: send-record
title: SEND RECORD
slug: /commands/send-record
displayed_sidebar: docs
---

<!--REF #_command_.SEND RECORD.Syntax-->**SEND RECORD** ({ *laTable* : Table })<!-- END REF-->
<!--REF #_command_.SEND RECORD.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle envoyer l'enregistrement courant ou Table par défaut si ce paramètre est omis |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SEND RECORD.Summary-->**SEND RECORD** envoie l'enregistrement courant de *laTable* vers le port série ou vers un document ouvert par la commande [SET CHANNEL](../commands/set-channel).<!-- END REF--> L'enregistrement est envoyé dans un format interne particulier ne pouvant être interprété que par la commande [RECEIVE RECORD](../commands/receive-record). S'il n'y a pas d'enregistrement courant, **SEND RECORD** ne fait rien.

L'enregistrement est envoyé en totalité, ce qui signifie que les images et les BLOBs stockés dans ou avec l'enregistrement sont également envoyés.

**Important :** Lorsque des enregistrements sont envoyés et reçus par **SEND RECORD** et [RECEIVE RECORD](../commands/receive-record), la structure de la table source et celle de la table de destination doivent être compatibles. Si ce n'est pas le cas, 4D convertira les valeurs en fonction des définitions des tables lorsque [RECEIVE RECORD](../commands/receive-record) sera exécutée.

**Note :** Si vous envoyez un enregistrement à un document avec cette commande, le document doit avoir été ouvert par la commande [SET CHANNEL](../commands/set-channel). Vous ne pouvez pas utiliser **SEND RECORD** avec un document ouvert par [Open document](../commands/open-document), [Create document](../commands/create-document) ou [Append document](../commands/append-document).

**Note de compatibilité :** A compter de la version 11 de 4D, cette commande ne prend plus en charge les sous-tables. 

## Exemple 

Reportez-vous à l'exemple de la commande [RECEIVE RECORD](../commands/receive-record).

## Voir aussi 

[RECEIVE RECORD](../commands/receive-record)  
[RECEIVE VARIABLE](../commands/receive-variable)  
[SEND VARIABLE](../commands/send-variable)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 78 |
| Thread safe | yes |


