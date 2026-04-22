---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15 R4|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.RESUME TRANSACTION.Summary-->O comando **RESUME TRANSACTION** reativa a transação que foi suspensa utilizando *ServerSpecialBuild*  no nível correspondente no processo atual.<!-- END REF--> Todas as operações que são executadas depois deste comando são realizadas sob o controle de transações (exceto quando várias transações suspensas estão aninhadas).

Para saber mais, consulte *Suspender as transações*.

## Ver também 

[Active transaction](../commands/active-transaction)  
[SUSPEND TRANSACTION](../commands/suspend-transaction)  
*Suspender as transações*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1386 |
| Thread-seguro | yes |


