---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->CANCEL TRANSACTION cancela a transação que foi aberta pelo comando [START TRANSACTION](../commands/start-transaction) do nível correspondente no processo atual.<!-- END REF--> CANCEL TRANSACTION cancela todas as operações executadas nos dados durante a transação.

**Nota:** **CANCEL TRANSACTION** não tem efeito nas possíveis modificações realizadas nos registros atuais que não foram guardados, seguem sendo mostradas depois da execução do comando.

## Ver também 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transaction level](../commands/transaction-level)  
*Usar Transações*  
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 241 |
| Thread-seguro | yes |


