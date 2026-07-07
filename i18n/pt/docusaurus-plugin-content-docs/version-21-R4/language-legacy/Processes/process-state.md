---
id: process-state
title: Process state
slug: /commands/process-state
displayed_sidebar: docs
---

<!--REF #_command_.Process state.Syntax-->**Process state** ( *processo* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Process state.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594; | Número de processo |
| Resultado | Integer | &#8592; | Estado do processo |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.Process state.Summary-->O comando Process state devolve o estado do processo cujo número foi passado em *processo*.<!-- END REF--> 

O resultado da função pode ser um dos valores das seguintes constantes predefinidas:

| Constante                 | Tipo          | Valor | Comentário                                                                                                                                                                                                                                       |
| ------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Does not exist            | Inteiro longo | \-100 |                                                                                                                                                                                                                                                  |
| Aborted                   | Inteiro longo | \-1   |                                                                                                                                                                                                                                                  |
| Executing                 | Inteiro longo | 0     |                                                                                                                                                                                                                                                  |
| Delayed                   | Inteiro longo | 1     |                                                                                                                                                                                                                                                  |
| Waiting for user event    | Inteiro longo | 2     |                                                                                                                                                                                                                                                  |
| Waiting for input output  | Inteiro longo | 3     |                                                                                                                                                                                                                                                  |
| Waiting for internal flag | Inteiro longo | 4     |                                                                                                                                                                                                                                                  |
| Paused                    | Inteiro longo | 5     |                                                                                                                                                                                                                                                  |

Se o processo não existe (o qual significa que não passou um número no intervalo de 1 a [Count tasks](count-tasks.md "Count tasks")), Process state devolve Does not exist (-100).

## Exemplo 

O seguinte exemplo coloca o nome e número de referencia para cada processo nos arrays *asProcNome* e *aiProcNum*e. O método prova se o processo tem sido abortado. Neste caso, o nome e o número do processo não são adicionados aos arrays:

```4d
 $vlNbTareas:=Count tasks
 ARRAY TEXT(asProcNome;$vlNbTarfeas)
 ARRAY INTEGER(aiProcNume;$vlNbTarefas)
 $vlAtualCont:=0
 For($vlProcess;1;$vlNbTarefas)
    If(Process state($vlProcess)>=Executing)
       $vlAtualCont:=$vlAtualCont+1
       PROCESS PROPERTIES($vlProcess;asProcNome{$vlAtualCont};$vlEstado;$vlHora)
       aiProcNume{$vlAtualCont}:=$vlProcess
    End if
 End for
  // Eliminar os elementos extras supérfluo
 ARRAY TEXT(asProcNome;$vlAtualCont)
 ARRAY INTEGER(aiProcNume;$vlAtualCont)
```

## Ver também 

[Count tasks](../commands/count-tasks)  
[Process info](../commands/process-info)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 330 |
| Thread-seguro | no |



