---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
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

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION** annule la transaction ouverte par la commande [START TRANSACTION](../commands/start-transaction) de niveau correspondant dans le process courant.<!-- END REF-->annule toutes les opérations exécutées sur les données et stockées pendant la transaction. 

**Note :** **CANCEL TRANSACTION** est sans effet sur les modifications éventuellement effectuées dans les enregistrements courants mais non stockées - elles restent affichées après l'exécution de la commande.

## Voir aussi 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transaction level](../commands/transaction-level)  
[Transactions](../../Develop-legacy/transactions.md)
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 241 |
| Thread safe | yes |


