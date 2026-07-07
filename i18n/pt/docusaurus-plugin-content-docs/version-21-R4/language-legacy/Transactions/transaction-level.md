---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Nível transação atual (0 se nenhuma transação for iniciada) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Transaction level.Summary-->O comando Transaction level retorna o nível de transação atual para o processo.<!-- END REF--> Este comando considera todas as transações do processo atual, sem importar se foram iniciadas através da linguagem 4D ou através de SQL.

## Ver também 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
*Usar Transações*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 961 |
| Thread-seguro | yes |


