---
id: current-process-name
title: Current process name
slug: /commands/current-process-name
displayed_sidebar: docs
---

<!--REF #_command_.Current process name.Syntax-->**Current process name**  : Text<!-- END REF-->
<!--REF #_command_.Current process name.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome do processo atual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15 R5|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Current process name.Summary-->O comando **Current process name** devolve o nome do processo no qual este comando se chama.<!-- END REF-->

Este comando é particularmente útil no contexto dos processos de trabalho (ver *Sobre Workers*). Pode ser utilizado para identificar o processo worker a chamar ao escrever código genérico. 

## Exemplo 

Se quiser chamar a um processo worker e passar o nome de processo de chamada como parâmetro:

```4d
 CALL WORKER(1;"myMessage";Current process name;"Start:"+String(vMax))
```

## Ver também 

[CALL WORKER](../commands/call-worker)  
[KILL WORKER](../commands/kill-worker)  
*Sobre Workers*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1392 |
| Thread-seguro | yes |


