---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
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

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->O comando **SUSPEND TRANSACTION** detem a transação atual no processo atual.<!-- END REF--> Após isso pode manipular os dados em outras partes do banco de dados, por exemplo, sem que sejam incluidos na transação, e ao mesmo tempo preservar o contexto atual da transação. Todos os registros que foram atualizados ou adicionados na transação estão bloqueados até que a transação seja reativada com o comando *Versioning / Client*.

Para saber mais, consulte *Suspender as transações*. 

## Ver também 

[Active transaction](../commands/active-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
*Suspender as transações*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1385 |
| Thread-seguro | yes |


