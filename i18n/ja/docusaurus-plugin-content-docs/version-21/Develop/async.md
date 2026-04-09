---
id: async
title: 非同期実行
---

4D では **同期的** および **非同期** な実行モードの両方をサポートしており、これによりデベロッパーがパフォーマンス、レスポンス、作業負荷分散に基づいて最適なアプローチを選択することができます。

## 基本

#### 同期的実行

同期実行は **シーケンシャル** なフローに従います。これはそれぞれの指示が、次の指示が始まるまでに完了するというステップ・バイ・ステップ方式です。 これはつまりオペレーションが完了するまで実行スレッドがブロックされるということを意味します。

同期的実行は以下のような場合で使用されます:

- タスクの実行が厳密な順番に従う必要があるとき。
- パフォーマンスへの影響が最小限である(例: 素早いオペレーション)。
- ブロッキングが許容可能な、シングルスレッドでのコンテキストで実行される。
- 同期実行はUI をブロックするため、ブロックが起きても許容され得る、素早く順序付けされたタスクに対して適しています。

#### 非同期実行

非同期実行は**イベント駆動型**であり、タスクを実行中でも他の操作を完了させることができます。 これは実行フローを管理するために、 **コールバック**、**ワーカー**、および **イベントハンドラ** といったものに依存します。

非同期実行は以下のような場合で使用されます:

- 操作が長時間にわたる(例: サーバーのレスポンスを待つなど)。
- レスポンシブネスの良さが重要である場合(例: UI インタラクションなど)。
- バックグラウンド処理、ネットワーク通信、あるいは並列処理などを実行する場合。

同期的実行と非同期実行のどちらを選んだら良いかについては、以下の表をご覧下さい:

| シナリオ                       | 最適なアプローチ  |
| -------------------------- | --------- |
| 最小限の処理とクイックなオペレーション        | **同期的実行** |
| 厳密な順番に従う必要があるタスク           | **同期的実行** |
| 長時間にわたるバックグラウンド処理          | **非同期実行** |
| 長時間にわたるUI インタラクション処理       | **非同期実行** |
| 短時間のUI インタラクション処理          | **同期的実行** |
| 高パフォーマンスが必要な、マルチスレッドワークロード | **非同期実行** |

## 基本原理

4D はさまざまなクラスやコマンドを通して、ビルトインの**非同期実行**機能を提供します。 これらを使用することで、カレンとプロセスをブロックすることなく、他のオペレーションが完了するのを待ちながら、バックグラウンド処理、ネットワーク通信、そして大量のデータ処理などを行うことができます。

4D における非同期イベントの管理の一般的な概念は、**ワーカー**(イベントをリッスンするプロセス)および**コールバック**(あるイベントが発生した際に自動的に実行される関数またはフォーミュラ)を使用した非同期メッセージモデルに基づいています。 ここでは何かの結果を待つ(同期モード)のではなく、特定のイベントが発生した際に自動的に呼び出される関数を提供します。 コールバックはクラス関数(推奨)またはフォーミュラオブジェクトとして渡すことができます。

This model is common to [`CALL WORKER`](../commands-legacy/call-worker.md), [`CALL FORM`](../commands-legacy/call-form.md), and [classes that support aynchronous execution](#asynchronous-programming-with-4d-classes). これらのコマンド/クラスは全て、バックグラウンドで実行されるオペレーションを開始します。 オペレーションを開始するステートメントは、オペレーションが終わるのを待たずに即座に戻ります。

### ワーカー

非同期プログラミングは [**ワーカー**](../Develop/processes.md#ワーカープロセス) (ワーカープロセス) というシステムに依存しています。これを使用することでメインプロセスをブロックすることなく、コードを実行することができます。 これは特に、インターフェースをレスポンシブな状態にしたまま、長時間にわたるタスク(HTTP 呼び出し、外部プロセスの実行、バックグラウンド処理など)を処理するのに有効です。

非同期プログラミングにおいてワーカープロセスの使用は**必須**です。いわゆる"クラシック"なプロセスはプロセスメソッドが終了した時に実行を自動的に終了するため、コールバックを使用するようなことができないからです。 ワーカープロセスであればその後も生き続け、**イベントをリッスンする**ことができます。

### イベントキュー(メールボックス)

Each worker (or form window for [`CALL FORM`](../commands-legacy/call-form.md)) has its own message queue. [`CALL WORKER`](../commands-legacy/call-worker.md) or [`CALL FORM`](../commands-legacy/call-form.md) simply posts a message to this queue. ワーカーは、独自のコンテキスト内において、メッセージを一つずつ受信した順番で管理していきます。 プロセス変数、カレンとレクション、などは保持されます。

### メッセージを介した双方向通信

呼び出しプロセスがメッセージを投稿すると、ワーカーはそれを実行します。 The worker can in turn post a message (via [`CALL WORKER`](../commands-legacy/call-worker.md) or [`CALL FORM`](../commands-legacy/call-form.md)) back to the caller or another worker to notify an event (task completion, data received, error, progress, etc.). この機構により、クラシックな同期呼び出しの応答を置き換えることができます。

### イベントリスニング

イベント駆動型の開発において、一部のコードが、入ってくるイベントを聞ける(リッスンできる)状態でなければならい事は明らかです。 イベントは、ユーザーインターフェース(オブジェクトのマウスクリックやキーボードのキーが押されたなど)や、HTTP リクエストや他のアクションの完了などのその他のインタラクションによって生成され得ます。 例えば、フォームが`DIALOG` コマンドを使用して表示されている場合、ユーザーアクションによってイベントがトリガーされ、それをコードで処理することが可能です。 ボタンをクリックした場合はボタンに割り当てられたコードがトリガーされることになります。

非同期実行のコンテキストにおいては、以下の機能がリスニングモード内でコードを配置します:

- [`CALL WORKER`](../commands-legacy/call-worker.md) executes the code for which it has been called, then returns to a listening status from where it can be called afterwards.
- [`CALL FORM`](../commands-legacy/call-form.md) opens a form and makes it listen for incoming messages from the event queue.
- `wait()` を呼び出すと、他のインスタンスからのコールバック内の `terminate()` あるいは `shutdown()` をリッスンします。

### イベントのトリガー

イベントは実行フローの間に自動的にトリガーされ、対応するコールバックへと渡されます。 `wait()` の途中に `terminate()` あるいは `shutdown()` を呼び出すことで、強制的にイベントをトリガーさせることもできます。

### コールバック実行コンテキスト

4D がコールバックを実行する時、それをカレントプロセス(ワーカー)のコンテキストにおいて実行します。つまり、例えばオブジェクトがフォーム内でインスタンス化された場合、コールバックもその同じフォームのコンテキスト内で実行されるということです。

コールバックが適切に非同期モードで実行されるためには、オペレーションは一般的に、ワーカーから(`CALL WORKER` 経由で)ローンチされる必要があります。 UI を管理しているプロセスからローンチした場合、UI がイベントをリッスンできる状態になるまで一部のコールバックが呼び出されない可能性があります。

### 非同期オブジェクトのリリース

4D では、全てのオブジェクトは、メモリ内に [そのオブジェクトへの参照がもう残っていない](../Concepts/dt_object.md#resources) 場合にそのオブジェクトがリリースされます。 これは一般的に、メソッド実行の最後にローカル変数が消去される時に発生します。

非同期クラスにおいては、オブジェクトをインスタンス化したプロセス内において **追加の参照** が必ず4D によって維持されています。 この参照はオペレーションが完了したときにのみリリースされます。つまり、 `onTerminate` イベントがトリガーされたあとです。 この自動参照によって、変数から特別に参照していなくても、オブジェクトを最後まで存続させることができます。

オブジェクトを任意のタイミングで"強制的に"リリースしたい場合、`.shutdown()` あるいは `terminate()` 関数を使用します: これらは`onTerminate` イベントをトリガーするため、オブジェクトはリリースされます。

### 共通した概念を示した表

| 機能                              | 非同期のローンチの方法                                                                           | コールバック / イベントの管理                                              |
| ------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| CALL WORKER                     | CALL WORKER("wk"; "MyMethod"; $params)                             | MyMethod は $params の引数を渡して呼び出されます                             |
| CALL FORM                       | CALL FORM($win; "MyMethod"; $params)                               | MyMethod は $params の引数を渡して呼び出されます                             |
| 4D.SystemWorker | 4D.SystemWorker.new(cmd; $options) | コールバック: onData、onResponse、onError、onTerminate |

## 4Dクラスによる非同期プログラミング

複数の4D クラスが非同期処理をサポートしています:

- [`HTTPRequest`](../API/HTTPRequestClass.md) – Handles asynchronous HTTP requests and responses.
- [`SystemWorker`](../API/SystemWorkerClass.md) – Executes external processes asynchronously.
- [`TCPConnection`](../API/TCPConnectionClass.md) – Manages TCP client connections with event-driven callbacks.
- [`TCPListener`](../API/TCPListenerClass.md) – Manages TCP server connections.
- [`UDPSocket`](../API/UDPSocketClass.md) – Sends and receives UDP packets.
- [`WebSocket`](../API/WebSocketClass.md) – Manages WebSocket client connections.
- [`WebSocketServer`](../API/WebSocketServerClass.md) – Manages WebSocket server connections.

All these classes follow the same rules regarding asynchronous execution. Their constructor accepts an *options* parameter that is used to configure your asynchronous object. It is recommended that the *options* object is a [user class](../Concepts/classes.md) instance which has callback functions. For example, you can create an `onResponse()` function in the class, it will be automatically called asychronously when a *reponse* event is fired.

We recommend the following sequence:

1. You create the user class where you declare callback functions, for example a `cs.Params` with `onError()` and `onResponse()` functions.
2. You instantiate the user class (in our example using `cs.Params.new()`) that will configure your asynchronous object.
3. You call the constructor of the 4D class (for example `4D.SystemWorker.new()`) and pass the *options* object as parameter. It starts the operations passed immediately without delay.

Here is a full example of implementation of an *options* object based upon a user class:

```4d
// asynchronous code creation
var $options:=cs.Params.new(10) //see cs.Params class code below
var $systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ";$options) 


// "Params" class

Class constructor ($timeout : Real)
 This.dataType:="text"
    This.data:=""
    This.dataError:=""
    This.timeout:=$timeout

Function onResponse($systemWorker : Object)
     This._createFile("onResponse"; $systemWorker.response)

Function onData($systemWorker : Object; $info : Object)
     This.data+=$info.data
     This._createFile("onData";this.data)

Function onDataError($systemWorker : Object; $info : Object)
     This.dataError+=$info.data
     This._createFile("onDataError";this.dataError)

Function onTerminate($systemWorker : Object)
     var $textBody : Text
     $textBody:="Response: "+$systemWorker.response
     $textBody+="ResponseError: "+$systemWorker.responseError
     This._createFile("onTerminate"; $textBody)

Function _createFile($title : Text; $textBody : Text)
     TEXT TO DOCUMENT(Get 4D folder(Current resources folder)+$title+".txt"; $textBody)

```

Note that `onResponse`, `onData`, `onDataError`, and `onTerminate` are functions supported by [`4D.SystemWorker`](../API/SystemWorkerClass.md).

Once the user class is instantiated; 4D is put in [event listening](#event-listening) mode, in which case 4D can [trigger an event](#event-triggering) that calls the corresponding function in the user class.

:::tip

In some cases, you might want to use formulas as property values instead of class functions. Although it is not the best practice, a syntax such as the following is supported:

```4d
var $options.onResponse:=Formula(myMethod) 
```

:::

## Synchronous execution in asynchronous code

Even when using modern, asynchronous code, you may need to introduce a degree of synchronous execution. For example, you may want a function to wait for a certain amount of time to get a result. It could be the case with guaranteed fast network connections or system workers. Then, you can enforce synchronous execution using the `wait()` function.

The **`.wait()`** function pauses execution of the current process and puts 4D in [event listening](#event-listening) mode. Keep in mind that it will trigger events received from any sources, not only from the object on which the `wait()` function was called.

The `wait()` function returns when the `onTerminate` event has been triggered on the object, or when the provided timeout (if any) has expired. Consequently, you can explicitly exit from a `.wait()` by calling `shutdown()` or `terminate()` from within a callback. Otherwise, the `.wait()` is exited when the current operation ends.

例:

```4d
var $options:=cs.Params.new() 
var $systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ";$options) 
$systemworker.wait(0.5) // Waits for up to 0.5 seconds for get file info
```

## 参照

[Blog post: Launch an external process asynchronously](https://blog.4d.com/launch-an-external-process-asynchronously/)<br/>
[Asynchronous Call](../aikit/asynchronous-call.md)
