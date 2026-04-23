---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
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

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->La commande **SUSPEND TRANSACTION** suspend les mécanismes de la transaction courante dans le process courant.<!-- END REF--> Vous pouvez alors manipuler des données dans d'autres parties de la base, sans qu'elles soient contrôlées par la transaction, tout en préservant le contexte courant de la transaction. Tout enregistrement qui a été mis à jour ou ajouté durant la transaction est verrouillé jusqu'à ce que la transaction soit réactivée à l'aide de la commande [RESUME TRANSACTION](../commands/resume-transaction).

Pour plus d'informations, veuillez vous référer à la section [Suspendre des transactions](../../Develop-legacy/transactions.md#suspending-transactions). 

## Voir aussi 

[Active transaction](../commands/active-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
[Suspendre des transactions](../../Develop-legacy/transactions.md#suspending-transactions)


## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1385 |
| Thread safe | yes |


