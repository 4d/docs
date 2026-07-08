---
id: stop-sql-server
title: STOP SQL SERVER
slug: /commands/stop-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.STOP SQL SERVER.Syntax-->**STOP SQL SERVER**<!-- END REF-->
<!--REF #_command_.STOP SQL SERVER.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
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

<!--REF #_command_.STOP SQL SERVER.Summary-->O comando STOP SQL SERVER pára o servidor SQL integrado da aplicação 4D na qual foi executado.<!-- END REF-->  
  
Se o servidor SQL foi lançado, todas as conexões SQL são interrompidas e o servidor não aceita mais pesquisas SQL externas. Se o servidor SQL não foi lançado, o comando não faz nada.  
  
**Nota**: este comando não afeta o funcionamento do motor SQL interno de 4D. O motor SQL sempre está disponível para pesquisas internas.

## Ver também 

[START SQL SERVER](../commands/start-sql-server)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 963 |
| Thread-seguro | no |


