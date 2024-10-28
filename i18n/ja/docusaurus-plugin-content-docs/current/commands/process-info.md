---
id: process-info
title: Process info
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R7 | 追加 |

</details>

<!-- REF #_command_.Process info.Syntax -->**Process info** ( *processNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Process info.Params -->

| 引数            | 型      |     | 説明                            |
| ------------- | ------ | :-: | ----------------------------- |
| processNumber | 整数     |  →  | Process number                |
| 戻り値           | オブジェクト |  ←  | Information about the process |

<!-- END REF -->

#### 説明

The `Process info` command <!-- REF #_command_.Process info.Summary -->returns an object providing detailed information about process whose number you pass in *processNumber*<!-- END REF -->. If you pass an incorrect process number, the command returns a null object.

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ            | 型                                       | 説明                                                                               |
| ---------------- | --------------------------------------- | -------------------------------------------------------------------------------- |
| cpuTime          | 実数                                      | Running time (seconds)                                        |
| cpuUsage         | 実数                                      | Percentage of time devoted to this process (between 0 and 1)  |
| creationDateTime | Text (Date ISO 8601) | Date and time of process creation                                                |
| ID               | 倍長整数                                    | Process unique ID                                                                |
| name             | テキスト                                    | プロセス名                                                                            |
| number           | 倍長整数                                    | Process number                                                                   |
| プリエンプティブ         | ブール                                     | True if run preemptive, false otherwise                                          |
| sessionID        | テキスト                                    | Session UUID                                                                     |
| state            | 倍長整数                                    | Current status. Possible values: see below       |
| systemID         | テキスト                                    | ID for the user process, 4D process or spare process                             |
| type             | 倍長整数                                    | Running process type. Possible values: see below |
| visible          | ブール                                     | True if visible, false otherwise                                                 |

- Possible values for "state":

| 定数                        | 値    |
| ------------------------- | ---- |
| Does not exist            | -100 |
| Aborted                   | -1   |
| Executing                 | 0    |
| Delayed                   | 1    |
| Waiting for user event    | 2    |
| Waiting for input output  | 3    |
| Waiting for internal flag | 4    |
| Paused                    | 5    |

- Possible values for "type":

| 定数                            | 値   |
| ----------------------------- | --- |
| Apple event manager           | -7  |
| Backup process                | -19 |
| Cache manager                 | -4  |
| Client manager process        | -31 |
| Compiler process              | -29 |
| Created from execution dialog | 3   |
| Created from menu command     | 2   |
| DB4D Cron                     | -49 |
| DB4D Flush cache              | -46 |
| DB4D Garbage collector        | -47 |
| DB4D Index builder            | -45 |
| DB4D Listener                 | -51 |
| DB4D Mirror                   | -50 |
| DB4D Worker pool user         | -48 |
| Design process                | -2  |
| Event manager                 | -8  |
| Execute on client process     | -14 |
| Execute on server process     | 1   |
| External task                 | -9  |
| HTTP Listener                 | -56 |
| HTTP Log flusher              | -58 |
| HTTP Worker pool server       | -55 |
| Indexing process              | -5  |
| Internal 4D server process    | -18 |
| Internal timer process        | -25 |
| Log file process              | -20 |
| Logger process                | -57 |
| Main 4D process               | -39 |
| Main process                  | -1  |
| Method editor macro process   | -17 |
| Monitor process               | -26 |
| MSC process                   | -22 |
| なし                            | 0   |
| On exit process               | -16 |
| Other 4D process              | -10 |
| Other internal process        | -40 |
| Other user process            | 4   |
| Restore Process               | -21 |
| Serial Port Manager           | -6  |
| Server interface process      | -15 |
| ServerNet Listener            | -43 |
| ServerNet Session manager     | -44 |
| SOAP process                  | -33 |
| SQL Listener                  | -54 |
| SQL Method execution process  | -24 |
| SQL Net Session manager       | -53 |
| SQL Worker pool server        | -52 |
| Web process on 4D remote      | -12 |
| Web process with no context   | -3  |
| Web server process            | -13 |
| Web server spare process      | -32 |
| Worker pool in use            | -41 |
| Worker pool spare             | -42 |
| Worker process                | 5   |

:::note

4D's internal processes have a negative type value and processes generated by the user have a positive value. Worker processes launched by user have type 5.

:::

Here is an example of output object:

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

#### 例題

You want to know if the process is preemptive:

```4d

var $preemptive : Boolean
$preemptive:=Process info(Current process).preemptive


```

#### 参照

[Count tasks](../commands-legacy/count-tasks.md)\
[Process activity](process-activity.md)\
[Process state](../commands-legacy/process-state.md)\
[Session info](session-info.md)
