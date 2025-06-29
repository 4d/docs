---
id: process-info
title: Process info
displayed_sidebar: docs
---

<!-- REF #_command_.Process info.Syntax -->**Process info** ( *processNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Process info.Params -->

| Parâmetro     | Tipo    |                             | Descrição                     |
| ------------- | ------- | :-------------------------: | ----------------------------- |
| processNumber | Integer | &#8594; | Process number                |
| Resultados    | Object  | &#8592; | Information about the process |

<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R7   | Adicionado |

</details>

## Descrição

O comando `Process info` <!-- REF #_command_.Process info.Summary -->retorna um objeto que fornece informações detalhadas sobre o processo cujo número você passa em *processNumber*<!-- END REF -->. If you pass an incorrect process number, the command returns a null object.

O objeto retornado contém as propriedades abaixo:

| Propriedade      | Tipo                                    | Descrição                                                                                    |
| ---------------- | --------------------------------------- | -------------------------------------------------------------------------------------------- |
| cpuTime          | Real                                    | Tempo de execução (segundos)                                              |
| cpuUsage         | Real                                    | Percentage of time devoted to this process (between 0 and 1)              |
| creationDateTime | Text (Date ISO 8601) | Date and time of process creation                                                            |
| ID               | Integer                                 | ID única do processo                                                                         |
| name             | Text                                    | Nome de processo                                                                             |
| number           | Integer                                 | Process number                                                                               |
| preemptive       | Parâmetros                              | True if run preemptive, false otherwise                                                      |
| sessionID        | Text                                    | UUID da sessão                                                                               |
| state            | Integer                                 | Estado atual. Valores possíveis: veja abaixo                 |
| systemID         | Text                                    | ID for the user process, 4D process or spare process                                         |
| type             | Integer                                 | Tipo de processo em execução. Valores possíveis: veja abaixo |
| visible          | Parâmetros                              | True if visible, false otherwise                                                             |

- Valores possíveis para "state":

| Parâmetros                | Valor |
| ------------------------- | ----- |
| Does not exist            | -100  |
| Aborted                   | -1    |
| Executing                 | 0     |
| Delayed                   | 1     |
| Waiting for user event    | 2     |
| Waiting for input output  | 3     |
| Waiting for internal flag | 4     |
| Paused                    | 5     |

- Valores possíveis para "type":

| Parâmetros                    | Valor |
| ----------------------------- | ----- |
| Apple event manager           | -7    |
| Backup process                | -19   |
| Cache manager                 | -4    |
| Client manager process        | -31   |
| Compiler process              | -29   |
| Created from execution dialog | 3     |
| Created from menu command     | 2     |
| DB4D Cron                     | -49   |
| DB4D Flush cache              | -46   |
| DB4D Garbage collector        | -47   |
| DB4D Index builder            | -45   |
| DB4D Listener                 | -51   |
| DB4D Mirror                   | -50   |
| DB4D Worker pool user         | -48   |
| Design process                | -2    |
| Event manager                 | -8    |
| Execute on client process     | -14   |
| Execute on server process     | 1     |
| External task                 | -9    |
| HTTP Listener                 | -56   |
| HTTP Log flusher              | -58   |
| HTTP Worker pool server       | -55   |
| Indexing process              | -5    |
| Internal 4D server process    | -18   |
| Internal timer process        | -25   |
| Log file process              | -20   |
| Logger process                | -57   |
| Main 4D process               | -39   |
| Main process                  | -1    |
| Method editor macro process   | -17   |
| Monitor process               | -26   |
| MSC process                   | -22   |
| Nenhum                        | 0     |
| On exit process               | -16   |
| Other 4D process              | -10   |
| Other internal process        | -40   |
| Other user process            | 4     |
| Restore Process               | -21   |
| Serial Port Manager           | -6    |
| Server interface process      | -15   |
| ServerNet Listener            | -43   |
| ServerNet Session manager     | -44   |
| SOAP process                  | -33   |
| SQL Listener                  | -54   |
| SQL Method execution process  | -24   |
| SQL Net Session manager       | -53   |
| SQL Worker pool server        | -52   |
| Web process on 4D remote      | -12   |
| Web process with no context   | -3    |
| Web server process            | -13   |
| Web server spare process      | -32   |
| Worker pool in use            | -41   |
| Worker pool spare             | -42   |
| Processo do trabalhador       | 5     |

:::note

4D's internal processes have a negative type value and processes generated by the user have a positive value. Worker processes launched by user have type 5.

:::

Aqui está um exemplo de objeto de saída:

```json

{
    "number": 4,
    "name": "Application process",
    "sessionID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
    "ID": 4,
    "visible": true,
    "type": -18,
    "state": 0,
    "creationDateTime": "2024-09-22T12:46:39.787Z",
    "preemptive": false,
    "systemID": "123145476132864",
    "cpuUsage": 0,
    "cpuTime": 0.006769
}

```

## Exemplo

You want to know if the process is preemptive:

```4d

var $preemptive : Boolean
$preemptive:=Process info(Current process).preemptive


```

## Veja também

[Count tasks](../commands-legacy/count-tasks.md)\
[Process activity](process-activity.md)\
[Process state](../commands-legacy/process-state.md)\
[Session info](session-info.md)
