---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Faux si la transaction courante est suspendue |
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

<!--REF #_command_.Active transaction.Summary-->La commande **Active transaction** retourne **Vrai** si le process courant est en transaction et si cette transaction n'est pas suspendue.<!-- END REF--> Elle retourne **Faux** s'il n'y a pas de transaction en cours, ou si la transaction en cours est suspendue. Une transaction peut être suspendue à l'aide de la commande [SUSPEND TRANSACTION](../commands/suspend-transaction). 

Comme cette commande retourne également **Faux** lorsque le process courant n'est pas en transaction, vous aurez besoin d'utiliser la commande [In transaction](../commands/in-transaction) afin de vérifier que le process est bien en transaction. 

Pour plus d'informations, reportez-vous à la section [Suspendre des transactions](../../Develop-legacy/transactions.md#suspending-transactions)
. 

## Description 

Vous voulez connaître le statut courant de transaction :

```4d
 If(In transaction)
    If(Not(Active transaction))
       ALERT("La transaction courante est suspendue")
    Else
       ALERT("La transaction courante est active")
    End if
 Else
    ALERT("Nous ne sommes pas en transaction")
 End if
```

## Voir aussi 

[In transaction](../commands/in-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
[SUSPEND TRANSACTION](../commands/suspend-transaction)  
[Suspendre des transactions](../../Develop-legacy/transactions.md#suspending-transactions)

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1387 |
| Thread safe | yes |


