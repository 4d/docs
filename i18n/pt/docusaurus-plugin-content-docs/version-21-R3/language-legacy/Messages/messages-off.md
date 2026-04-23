---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|17 R4|Modificado|
|11 SQL Release 3|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.MESSAGES OFF.Summary-->Os comandos MESSAGES OFF e [MESSAGES ON](../commands/messages-on) acendem e apagam os termômetros de progressão mostrados por 4D enquanto operações de longa duração são executadas.<!-- END REF--> Automaticamente são mostradas as mensagens. 

| Apply Formula | Quick Report     | Order by     |
| ------------- | ---------------- | ------------ |
| Export Data   | Import Data      | Graph        |
| Query by Form | Query by Formula | Query Editor |

A tabela a seguir lista os comandos que mostram termômetros de progresso:

[APPLY TO SELECTION](../commands/apply-to-selection)  
[Average](../commands/average)  
[BUILD APPLICATION](../commands/build-application)  
[DISTINCT VALUES](../commands/distinct-values)  
[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[Max](../commands/max)  
[Min](../commands/min)  
[ORDER BY](../commands/order-by)  
[ORDER BY FORMULA](../commands/order-by-formula)  
[QR REPORT](../commands/qr-report)  
[QUERY](../commands/query)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY BY EXAMPLE](../commands/query-by-example)  
[QUERY SELECTION](../commands/query-selection)  
[QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)  
[REDUCE SELECTION](../commands/reduce-selection)  
[RELATE MANY SELECTION](../commands/relate-many-selection)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  
[SCAN INDEX](../commands/scan-index)  
[Sum](../commands/sum)

**Nota para 4D Server:** as janelas de mensagens de progresso não se mostram no servidor, estas operações se listam automaticamente na *\_o\_PAGE SETUP* da janela de administração. Se deseja forçar a visualização destas janelas de progresso, deve chamar ao comando [MESSAGES ON](../commands/messages-on) no servidor. 

## Exemplo 

O exemplo a seguir elimina os termômetros de progresso antes de realizar uma ordenação e depois os restabelece depois de terminar a operação de ordenação: 

```4d
 MESSAGES OFF
 ORDER BY([Direções];[Direções]CEP;>;[Direções]Nome2;>)
 MESSAGES ON
```

## Ver também 

[MESSAGES ON](../commands/messages-on)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 175 |
| Thread-seguro | yes |


