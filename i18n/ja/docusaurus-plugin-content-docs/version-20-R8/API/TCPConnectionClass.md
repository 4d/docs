---
id: TCPConnectionClass
title: TCPConnection
---

`TCPConnection` クラスを使用すると、サーバーへのTransmission Control Protocol (TCP) クライアント接続を管理でき、これによってデータの送受信と、コールバックを使用した接続ライフサイクルイベントの管理が可能になります。

`TCPConnection` クラスは`4D` クラスストアにて提供されています。 TCP 接続は、[TCPConnection オブジェクト](#tcpconnection-オブジェクト) を返す[4D.TCPConnection.new()](#4dtcpconnectionnew) 関数を使用して作成できます。

全ての`TCPConnection` クラス関数はスレッドセーフです。

標準の4D オブジェクトの*refcounting* のおかげで、TCPConnection は参照されなくなったら自動的にリリースされるようになっています。 結果的に、それに関連したリソースは、明示的な終了を必要とせずに適切にクリーンアップされます。

TCPConnection オブジェクトはメモリ内にそれへの参照が存在しなくなった時にリリースされます。 これ一般的に、例えばメソッド実行の最後にローカル変数が消去されるときに発生します。 接続を"強制的に" 終了させたい場合には、[**Null** を代入することで**参照を無効化**してください](../Concepts/dt_object.md#リソース)。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 20 R8 | クラスを追加 |

</details>

### 例題

以下の例題は、4D.TCPConnection および 4D.TCPEvent クラスを使用してどのようにTCP クライアント接続を管理し、イベントを扱い、データを送信し、そして適切に接続を閉じるかを表しています。 同期の例と非同期の例の両方が提供されています。

#### 同期の例

以下の例題は、設定にシンプルなオブジェクトを使うことでどのように接続を確立し、データを送信し、通信を終了するかを表しています:

```4d
var $domain : Text := "127.0.0.1"
var $port : Integer := 10000
var $options : Object := New object() // 設定オブジェクト
var $tcpClient : 4D.TCPConnection
var $message : Text := "test message"

// 接続を開く
$tcpClient := 4D.TCPConnection.new($domain; $port; $options)

// データを送信する
var $blobData : Blob
TEXT TO BLOB($message; $blobData; UTF8 text without length)
$tcpClient.send($blobData)

// シャットダウンする
$tcpClient.shutdown()
$tcpClient.wait(0)

```

#### 非同期の例

以下の例題は、接続ライフサイクルとイベントを管理するクラスを定義し、非同期に使用する方法を表しています:

```4d
// Class definition: cs.MyAsyncTCPConnection

Class constructor($url : Text; $port : Integer)
    This.connection := Null
    This.url := $url
    This.port := $port

// ワーカーの中でローンチされたサーバーの一つに接続する
Function connect()
    This.connection := 4D.TCPConnection.new(This.url; This.port; This)

// サーバーへの接続を切断する
Function disconnect()
    This.connection.shutdown()
    This.connection := Null

// サーバーにデータを送信する
Function getInfo()
    var $blob : Blob
    TEXT TO BLOB("Information"; $blob)
    This.connection.send($blob)

// 接続が正常に確立された時に呼び出されるコールバック
Function onConnection($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Connection established")

// 接続が適切に閉じられた時に呼び出されるコールバック
Function onShutdown($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Connection closed")

// サーバーからデータが受信されたときに呼び出されるコールバック
Function onData($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT(BLOB to text($event.data; UTF8 text without length))

	// 警告: 一つのネットワークパケットで必要なデータを全て受け取れる保証はありません。	

// 接続が予期せず閉じられた時に呼び出されるコールバック
Function onError($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
    ALERT("Connection error")

// TCPConnection オブジェクトがリリースされる直前、onShutdown/onError の後に呼び出されるコールバック
Function onTerminate($connection : 4D.TCPConnection; $event : 4D.TCPEvent)
	ALERT("Connection terminated")


```

##### 使用例

AsyncTCP という名前の新しいメソッドを作成し、このメソッドでTCP 接続を初期化して管理します:

```4d
var $myObject : cs.MyAsyncTCPConnection
$myObject := cs.MyAsyncTCPConnection.new("myURL"; 10000)
$myObject.connect()
$myObject.getInfo()
$myObject.disconnect()

```

AsyncTCP メソッドをワーカー内で呼び出します:

```4d
CALL WORKER("new process"; "Async_TCP")

```

### TCPConnection オブジェクト

TCPConnection オブジェクトは共有不可のオブジェクトです。

TCPConnection オブジェクトは以下のプロパティと関数を提供します:

|                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE #4D.TCPConnection.closed.Summary -->           |
| [<!-- INCLUDE #4D.TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #4D.TCPConnection.errors.Summary -->           |
| [<!-- INCLUDE #4D.TCPConnection.noDelay.Syntax -->](#noDelay)<br/><!-- INCLUDE #4D.TCPConnection.noDelay.Summary -->        |
| [<!-- INCLUDE #4D.TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #4D.TCPConnection.send().Summary -->             |
| [<!-- INCLUDE #4D.TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #4D.TCPConnection.shutdown().Summary --> |
| [<!-- INCLUDE #4D.TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #4D.TCPConnection.wait().Summary -->             |

<!-- REF #4D.TCPConnection.new().Desc -->

## 4D.TCPConnection.new()

<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : Text ; *serverPort* : Number ; *options* : Object  ) : 4D.TCPConnection<!-- END REF -->

<!-- REF #4D.TCPConnection.new().options -->

| 引数            | 型             |                             | 説明                        |
| ------------- | ------------- | --------------------------- | ------------------------- |
| serverAddress | Text          | ->                          | サーバーのドメイン名またはIP アドレス      |
| serverPort    | Integer       | ->                          | サーバーのポート番号                |
| options       | Object        | ->                          | 接続の設定[オプション](#options-引数) |
| 戻り値           | TCPConnection | <- | 新しいTCPConnection オブジェクト   |

<!-- END REF -->

#### 説明

`4D.TCPConnection.new()` 関数は、<!-- REF #4D.TCPConnection.new().Summary -->*serverAddress* および *serverPort* 引数で接続したサーバーへ、*options* 引数で定義されたオプションを使用して、新規のTCP 接続を作成し、`4D.HTTPRequest` オブジェクトを返します<!-- END REF -->。

#### `options` 引数

*options* に渡すオブジェクトは、次のプロパティを持つことができます:

| プロパティ        | 型       | 説明                                          | デフォルト |
| ------------ | ------- | ------------------------------------------- | ----- |
| onConnection | Formula | 接続が確立した時にトリガーされるコールバック                      | 未定義   |
| onData       | Formula | データが受信されたときにトリガーされるコールバック                   | 未定義   |
| onShutdown   | Formula | 接続が適切に閉じられた時にトリガーされるコールバック                  | 未定義   |
| onError      | Formula | エラーの場合にトリガーされるコールバック                        | 未定義   |
| onTerminate  | Formula | TCPConnection がリリースされる直前にトリガーされるコールバック      | 未定義   |
| noDelay      | Boolean | **読み出し専用** `true` の場合にはNagle のアルゴリズムを無効化します | false |

#### コールバック関数

すべてのコールバック関数は、2つの引数を受け取ります:

| 引数          | 型                                               | 説明                      |
| ----------- | ----------------------------------------------- | ----------------------- |
| $connection | [`TCPConnection` オブジェクト](#tcpconnection-オブジェクト) | カレントのTCP 接続インスタンス       |
| $event      | [`TCPEvent` オブジェクト](#tcpevent-オブジェクト)           | イベントに関する情報が含まれているオブジェクト |

**コールバックの呼び出しの順番:**

1. `onConnection` は接続が確立した時にトリガーされます。
2. `onData` はデータが受信されるたびにトリガーされます。
3. `onShutdown` または `onError` はそれぞれ以下の場合にトリガーされます:
   - `onShutdown` は接続が適切に閉じられた時にトリガーされます。
   - `onError` はエラーが発生した場合にトリガーされます。
4. `onTerminate` は常にTCPConnection がリリースされる直前にトリガーされます(接続が閉じられたか、エラーが発生した場合です)。

#### TCPEvent オブジェクト

[コールバック関数](#コールバック関数) が呼ばれた際には[`TCPEvent`](TCPEventClass.md) オブジェクトが返されます。

<!-- END REF -->

<!-- REF #4D.TCPConnection.closed.Desc -->

## .closed

<!-- REF #4D.TCPConnection.closed.Syntax -->**closed** : Boolean<!-- END REF -->

#### 説明

`.closed` プロパティには<!-- REF #4D.TCPConnection.closed.Summary -->接続が閉じられたかどうかの情報が格納されています<!-- END REF -->。 エラーによって、あるいは`shutdown()` を呼び出したから、あるいはサーバーが閉じられたなどの理由で接続が閉じられている場合には`true` を返します。

<!-- END REF -->

<!-- REF #4D.TCPConnection.errors.Desc -->

## .errors

<!-- REF #4D.TCPConnection.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### 説明

`.errors` プロパティには、<!-- REF #4D.TCPConnection.errors.Summary -->接続に関連したエラーオブジェクトのコレクションが格納されています<!-- END REF -->。 各エラーオブジェクトにはエラーコード、エラーの詳細、そしてそのエラーを起こしたコンポーネントの署名が格納されています。

| プロパティ  |                                                                                           | 型          | 説明                  |
| ------ | ----------------------------------------------------------------------------------------- | ---------- | ------------------- |
| errors |                                                                                           | Collection | エラー発生時の 4Dエラースタック   |
|        | [].errCode            | Number     | 4Dエラーコード            |
|        | [].message            | Text       | 4Dエラーの詳細            |
|        | [].componentSignature | Text       | エラーを返した内部コンポーネントの署名 |

<!-- END REF -->

<!-- REF #4D.TCPConnection.noDelay.Desc -->

## .noDelay

<!-- REF #4D.TCPConnection.noDelay.Syntax -->**noDelay** : Boolean<!-- END REF -->

#### 説明

`.noDelay` プロパティには、<!-- REF #4D.TCPConnection.noDelay.Summary -->whether Nagle のアルゴリズムが無効化されている(`true`) か有効化されている(`false`) かの情報が格納されています<!-- END REF -->。 このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF #4D.TCPConnection.send().Desc -->

## .send()

<!-- REF #4D.TCPConnection.send().Syntax -->**.send**( *data* : Blob )<!-- END REF -->

<!-- REF #4D.TCPConnection.send().options -->

| 引数   | 型    |    | 説明      |
| ---- | ---- | -- | ------- |
| data | BLOB | -> | 送信するデータ |

<!-- END REF -->

#### 説明

`send()` 関数は<!-- REF #4D.TCPConnection.send().Summary -->データをサーバーに送信します<!--END REF -->。 接続がまだ確立されていない場合には、データは接続が確立されたあとに送信されます。

<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().Desc -->

## .shutdown()

<!-- REF #4D.TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().options -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`shutdown()` 関数は、<!-- REF #4D.TCPConnection.shutdown().Summary -->接続の*write* チャンネル(クライアントからサーバーへのストリーム)を閉じます<!-- END REF -->。その一方で、*read* チャンネル(サーバーからクライアントへのストリーム)は開かれたままとなります。これによって、接続がサーバーによって完全に閉じられるか、エラーが発生するまでは、データを受信し続けることができます。

<!-- END REF -->

<!-- REF #4D.TCPConnection.wait().Desc -->

## .wait()

<!-- REF #4D.TCPConnection.wait().Syntax -->**.wait**( { *timeout* : Real } )<!-- END REF -->

<!-- REF #4D.TCPConnection..wait().options -->

| 引数      | 型    |     | 説明                           |
| ------- | ---- | :-: | ---------------------------- |
| timeout | Real |  -> | 最大待機時間(秒) |

<!-- END REF -->

#### 説明

`wait()` 関数は<!-- REF #4D.TCPConnection.wait().Summary -->TCP 接続が閉じられるか、あるいは`timeout` 引数で指定した秒数に達するまで待ちます<!-- END REF -->。

:::note

`.wait()` の実行中、コールバック関数は、`SystemWorker` インスタンスから発生したものであるかどうかに関わらず、実行されます。 コールバックから [`terminate()`](#terminate) を呼び出すことで、`.wait()` を終了することができます。 コールバックから[`shutdown()`](#shutdown) を呼び出すことで、`.wait()` を終了することができます。

:::

<!-- END REF -->
