---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
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

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->VALIDATE TRANSACTION aceita a transação que foi iniciada com [START TRANSACTION](../commands/start-transaction) do nível correspondente do processo atual.<!-- END REF--> O comando salva as mudanças aos dados do banco que ocorreram durante a transação.

Iniciando com a versão 11 de 4D, você pode aninhar diversas transações (sub-transações). Se a transação principal for cancelada, todas as sub-transações serão canceladas, mesmo se eles tiverem sido individualmente confirmadas usando o comando.

## Variáveis e conjuntos do sistema 

A variável de sistema Ok é estabelecida como 1 se a transação for validada corretamente. De outro modo, é estabelecida como 0.  
  
Note que quando OK for estabelecido como 0, a transação é automaticamente cancelada internamente (equivalente a [CANCEL TRANSACTION](../commands/cancel-transaction)). Assim, não deve chamar explicitamente [CANCEL TRANSACTION](../commands/cancel-transaction) se OK=0, particularmente no contexto de transações aninhadas, porque o cancelamento será então aplicada as transações de nível mais alto.

## Ver também 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
*Usar Transações*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 240 |
| Thread-seguro | yes |
| Modificar variáveis | OK |


