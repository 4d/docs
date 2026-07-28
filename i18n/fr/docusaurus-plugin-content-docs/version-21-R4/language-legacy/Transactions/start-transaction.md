---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
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

<!--REF #_command_.START TRANSACTION.Summary-->**START TRANSACTION** débute une transaction dans le process courant.<!-- END REF--> Toutes les modifications effectuées sur les données (enregistrements) de la base à l'intérieur de la transaction seront stockées temporairement jusqu'à ce que la transaction soit validée ou annulée.

A compter de la version 11 de 4D, vous pouvez imbriquer plusieurs transactions (sous-transactions). Chaque transaction ou sous-transaction doit être finalement annulée ou validée. A noter que si la transaction principale est annulée, toutes les sous-transactions sont annulées, quels que soient leurs résultats.

## Voir aussi 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[Transaction level](../commands/transaction-level)  
[Transactions](../../Develop-legacy/transactions.md)
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 239 |
| Thread safe | yes |


