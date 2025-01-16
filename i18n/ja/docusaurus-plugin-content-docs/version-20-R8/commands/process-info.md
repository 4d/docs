---
id: process-info
title: Process info
displayed_sidebar: docs
---

<!-- REF #_command_.Process info.Syntax -->**Process info** ( *processNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Process info.Params -->

| 引数            | 型       |     | 説明         |
| ------------- | ------- | :-: | ---------- |
| processNumber | Integer |  →  | プロセス番号     |
| 戻り値           | Object  |  ←  | プロセスに関する情報 |

<!-- END REF -->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R7 | 追加 |

</details>

#### 説明

`Process info` コマンドは、<!-- REF #_command_.Process info.Summary -->*processNumber* 引数にプロセス番号を渡したプロセスについての詳細な情報を提供するオブジェクトを返します<!-- END REF -->。 正しくないプロセス番号を渡した場合、コマンドはnull オブジェクトを返します。

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ            | 型                                       | 説明                                                   |
| ---------------- | --------------------------------------- | ---------------------------------------------------- |
| cpuTime          | Real                                    | 実行時間(秒)                           |
| cpuUsage         | Real                                    | このプロセスに割り当てられてる時間のパーセント(0 から1 の間) |
| creationDateTime | Text (Date ISO 8601) | プロセス作成の日時                                            |
| ID               | Integer                                 | プロセス固有のID                                            |
| name             | Text                                    | プロセス名                                                |
| number           | Integer                                 | プロセス番号                                               |
| preemptive       | Boolean                                 | プリエンプティブに実行可能ならTrue、それ以外の場合にはfalse                   |
| sessionID        | Text                                    | セッションUUID                                            |
| state            | Integer                                 | 現在の状態。 取り得る値: 以下を参照のこと               |
| systemID         | Text                                    | ユーザープロセス、4D プロセス、またはスペアプロセスのID                       |
| type             | Integer                                 | 実行中のプロセスタイプ。 取り得る値: 以下を参照のこと         |
| visible          | Boolean                                 | 表示であればTrue、それ以外はFalse                                |

- "state" の取り得る値:

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

- "type" の取り得る値:

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
| None                          | 0   |
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

4D の内部プロセスのtype は負の値を持ち、ユーザーによって生成されたプロセスのtype は正の値を持ちます。 ユーザーによってローンチされたワーカープロセスのtype は5 です。

:::

これが出力されたオブジェクトの一例です:

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

プロセスがプリエンプティブかどうかを調べたい場合を考えます:

```4d

var $preemptive : Boolean
$preemptive:=Process info(Current process).preemptive

```

#### 参照

[Count tasks](../commands-legacy/count-tasks.md)\
[Process activity](process-activity.md)\
[Process state](../commands-legacy/process-state.md)\
[Session info](session-info.md)
