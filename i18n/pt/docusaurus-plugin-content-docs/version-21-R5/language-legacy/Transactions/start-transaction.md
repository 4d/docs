---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
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

START TRANSACTION inicia uma transação no processo atual. Todas as mudanças nos dados (registros) do banco dentro da transação são armazenados temporariamente até que a transação seja validada ou cancelada.  

A partir da versão 11 de 4D, pode aninhar várias transações (subtransações). Cada transação ou subtransação deve ser finalmente cancelada ou validada. Note que se a transação principal for cancelada, todas as subtransações também são canceladas, sem importar seu resultado.

## Ver também 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[Transaction level](../commands/transaction-level)  
*Usar Transações*  
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 239 |
| Thread-seguro | yes |


