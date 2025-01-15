---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MESSAGES OFF.Summary-->Os comandos MESSAGES OFF e [MESSAGES ON](messages-on.md) acendem e apagam os termômetros de progressão mostrados por 4D enquanto operações de longa duração são executadas.<!-- END REF--> Automaticamente são mostradas as mensagens. 

| Apply Formula | Quick Report     | Order by     |
| ------------- | ---------------- | ------------ |
| Export Data   | Import Data      | Graph        |
| Query by Form | Query by Formula | Query Editor |

A tabela a seguir lista os comandos que mostram termômetros de progresso:

[APPLY TO SELECTION](apply-to-selection.md)  
[Average](average.md)  
[BUILD APPLICATION](build-application.md)  
[DISTINCT VALUES](distinct-values.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[ORDER BY FORMULA](order-by-formula.md)  
[QR REPORT](qr-report.md)  
[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[REDUCE SELECTION](reduce-selection.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  
[SCAN INDEX](scan-index.md)  
[Sum](sum.md)

**Nota para 4D Server:** as janelas de mensagens de progresso não se mostram no servidor, estas operações se listam automaticamente na *\_o\_PAGE SETUP* da janela de administração. Se deseja forçar a visualização destas janelas de progresso, deve chamar ao comando [MESSAGES ON](messages-on.md) no servidor. 

#### Exemplo 

O exemplo a seguir elimina os termômetros de progresso antes de realizar uma ordenação e depois os restabelece depois de terminar a operação de ordenação: 

```4d
 MESSAGES OFF
 ORDER BY([Direções];[Direções]CEP;>;[Direções]Nome2;>)
 MESSAGES ON
```

#### Ver também 

[MESSAGES ON](messages-on.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 175 |
| Thread-seguro | &check; |


