---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
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

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->**VALIDATE TRANSACTION** accepte la transaction ouverte par la commande [START TRANSACTION](../commands/start-transaction) de niveau correspondant dans le process courant.<!-- END REF-->sauvegarde toutes les modifications effectuées sur les données de la base pendant la transaction.

A compter de la version 11 de 4D, vous pouvez imbriquer plusieurs transactions (sous-transactions). Si la transaction principale est annulée, toutes les sous-transactions sont annulées, même si elles ont été validées individuellement à l'aide de cette commande.

## Variables et ensembles système 

La variable système OK prend la valeur 1 si la transaction a été correctement validée, sinon elle prend la valeur 0\. 

A noter que lorsque OK vaut 0, la transaction est automatiquement annulée en interne (équivaut à un [CANCEL TRANSACTION](../commands/cancel-transaction)). Par conséquent, notamment dans le contexte de transactions imbriquées, il ne faut pas appeler explicitement [CANCEL TRANSACTION](../commands/cancel-transaction) si OK=0 car l'annulation sera alors appliquée à la transaction du niveau supérieur. 

## Voir aussi 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transactions](../../Develop-legacy/transactions.md)


## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 240 |
| Thread safe | yes |
| Modifie les variables | OK |


