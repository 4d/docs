---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|15 R4|Créé|

</details>
</div>

## Description 

<!--REF #_command_.RESUME TRANSACTION.Summary-->La commande **RESUME TRANSACTION** réactive la transaction qui a été suspendue à l'aide de la commande [SUSPEND TRANSACTION](../commands/suspend-transaction) au niveau correspondant dans le process courant.<!-- END REF--> Toute opération effectuée après l'appel de cette commande retourne sous le contrôle de la transaction (hormis si plusieurs transactions suspendues sont imbriquées). 

Pour plus d'informations, veuillez vous référer à la section [Suspendre des transactions](../../Develop-legacy/transactions.md#suspending-transactions)
.

## Voir aussi 

[Active transaction](../commands/active-transaction)  
[SUSPEND TRANSACTION](../commands/suspend-transaction)  
[Suspendre des transactions](../../Develop-legacy/transactions.md#suspending-transactions)

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1386 |
| Thread safe | yes |


