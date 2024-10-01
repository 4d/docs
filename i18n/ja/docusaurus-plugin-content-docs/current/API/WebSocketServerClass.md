---
id: WebSocketServerClass
title: WebSocketServer
---

`WebSocketServer` クラスを使って、4D で WebSocketサーバーを作成および設定することができます。 4D WebSocketサーバーがアクティブになると、[`WebSocketConnection` クラス](WebSocketConnectionClass.md) を使用して 4D とクライアント間で WebSocket 接続を開き、使用することができます。

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

:::note WebSocket サーバーについて

WebSocketプロトコルは、WebSocketサーバーとクライアント (Webブラウザーなど) の間の双方向通信のチャンネルを提供します。 WebSocketサーバーの詳細については、[Wikipedia のページ](https://ja.wikipedia.org/wiki/WebSocket) を参照ください。

:::

:::info 参照

4D WebSocketサーバーについては、[こちらのブログ記事](https://blog.4d.com/ja/new-built-in-websocket-server/) も参照ください。

:::

### 要件

4D で WebSocketサーバーを作成し、扱うには、4Dビルトインクラスを 2つ使用する必要があります。

- このクラス (`4D.WebSocketServer`) は、サーバー自体を管理するためのものです。
- [`4D.WebSocketConnection`](WebSocketConnectionClass.md) クラスを使用して、接続とメッセージを管理します。

さらに、2つのユーザークラスを作成し、コールバック関数を定義する必要があります:

- サーバー接続を処理するためのユーザークラス
- メッセージを処理するためのユーザークラス

接続を維持するため、[WebSocketサーバーの作成](#4dwebsocketservernew) は [ワーカー](https://doc.4d.com/4dv19R/help/command/ja/page1389.html) 内にておこなう必要があります。

[4D Webサーバー](WebServerClass.md) を起動しておく必要があります。

### 例題

この基本的な例では、WebSocketサーバーはメッセージを大文字で返します。

1. ワーカーを使用して (必須) WebSocketサーバーを作成し、サーバー接続処理用のユーザークラスをパラメーターとして渡します。

```4d
    // ユーザークラスのインスタンスを作成します
    // これが、サーバーへの接続を処理します
var $handler:cs.myServerHandler
$handler:=cs.myServerHandler.new()

CALL WORKER("WebSocketServer"; Formula(wss:=4D.WebSocketServer.new($handler)))  
    // WebSocket を変数 (wss) に代入しておくことで
    // あとで wss.terminate() の呼び出しが可能になります
```

2. サーバーへの接続を処理するためのコールバック関数を含む `myServerHandler` ユーザークラスを定義します:

```4d
// myServerHandler クラス

Function onConnection($wss : Object; $event : Object) : Object
	// ユーザークラスのインスタンスを返します
	// このインスタンスがサーバーへの接続を処理します
	return cs.myConnectionHandler.new()
```

3. メッセージを処理するためのコールバック関数を含む `myConnectionHandler` ユーザークラスを定義します:

```4d
// myConnectionHandler クラス

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	// メッセージを大文字に変えて送信します
	$ws.send(Uppercase($message.data))

```

:::tip クライアントサイド JS

WebSocket 接続を処理するクライアントサイドの Javascriptコードの例については、[このブログの記事](https://blog.4d.com/ja/new-built-in-websocket-server/) を参照ください。

:::

### WebSocketServer オブジェクト

WebSocketサーバーオブジェクトは、以下のプロパティと機能を提供します:

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketServerClass.connections.Syntax -->](#connections)<br/><!-- INCLUDE #WebSocketServerClass.connections.Summary --> |
| [<!-- INCLUDE #WebSocketServerClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #WebSocketServerClass.dataType.Summary -->          |
| [<!-- INCLUDE #WebSocketServerClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketServerClass.handler.Summary -->             |
| [<!-- INCLUDE #WebSocketServerClass.path.Syntax -->](#path)<br/><!-- INCLUDE #WebSocketServerClass.path.Summary -->                      |
| [<!-- INCLUDE #WebSocketServerClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketServerClass.terminate().Summary -->   |
| [<!-- INCLUDE #WebSocketServerClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #WebSocketServerClass.terminated.Summary -->    |

## 4D.WebSocketServer.new()

<!-- REF #4D.WebSocketServer.new().Syntax -->**4D.WebSocketServer.new**( *WSSHandler* : Object { ; *options* : Object } ) : 4D.WebSocketServer<!-- END REF -->

<!-- REF #4D.WebSocketServer.new().Params -->

| 引数                           | 型                                  |                             | 説明                                        |
| ---------------------------- | ---------------------------------- | :-------------------------: | ----------------------------------------- |
| [WSSHandler](#wsshandler-引数) | Object                             |              ->             | WebSocketサーバー用コールバックを宣言しているユーザークラスのオブジェクト |
| [options](#options-引数)       | Object                             |              ->             | WebSocket の設定パラメーター                       |
| 戻り値                          | 4D.WebSocketServer | <- | 新しい WebSocketServer オブジェクト                |

<!-- END REF -->

`4D.WebSocketServer.new()` 関数は、<!-- REF #4D.WebSocketServer.new().Summary -->指定した *WSSHandler* コールバックと、*options* の設定 (任意) を使用して WebSocketサーバーを作成および起動し、`4D.WebSocketServer` オブジェクトを返します<!-- END REF -->。

この関数を呼び出すには、[4D Webサーバー](WebServerClass.md) が起動されている必要があります。 WebSocketサーバーの **ホスト** と **ポート** は、4D Webサーバーのホストとポートと同じです。

### *WSSHandler* 引数

*WSSHandler* 引数には、WebSocketサーバーでイベント (主に接続イベント) が発生するたびに呼び出されるユーザークラスのインスタンスを渡します。 このクラスでは、以下のコールバック関数を定義します (`onConnection` のみ必須):

| プロパティ        | 型                            | 説明                                                                        | デフォルト     |
| ------------ | ---------------------------- | ------------------------------------------------------------------------- | --------- |
| onConnection | [Function](FunctionClass.md) | (必須) 新規クライアント接続が開始した時のコールバック (後述参照) | undefined |
| onOpen       | [Function](FunctionClass.md) | WebSocketサーバーが起動した時のコールバック (後述参照)                      | undefined |
| onTerminate  | [Function](FunctionClass.md) | WebSocketサーバーが終了した時のコールバック (後述参照)                      | undefined |
| onError      | [Function](FunctionClass.md) | エラーが発生した時のコールバック (後述参照)                                | undefined |

**WSHandler.onConnection**(*WSServer* : Object ; *event* : Object) : Object | null

| 引数       |         | 型                                  |                             | 説明                                                                                                                                                                                                                                                                                                                                                                    |
| -------- | ------- | ---------------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer |         | 4D.WebSocketServer | <- | カレントの WebSocketサーバーオブジェクト                                                                                                                                                                                                                                                                                                                                             |
| event    |         | Object                             | <- | 引数                                                                                                                                                                                                                                                                                                                                                                    |
|          | type    | Text                               |                             | "connection"                                                                                                                                                                                                                                                                                                                                                          |
|          | request | Object                             |                             | `request` オブジェクト。 接続要求に関する情報を格納します (後述参照)                                                                                                                                                                                                                                                                                                          |
| 戻り値      |         | Object                             |              ->             | [`connectionHandler` オブジェクト](#connectionhandler-オブジェクト) (後述参照)。 この関数が `connectionHandler` オブジェクトを返す場合、[`4D.WebSocketConnection` オブジェクト](WebSocketConnectionClass.md#websocketconnection-オブジェクト) が自動的に作成され、[カレント接続のコレクション](#connections) に追加されます。 その後、このオブジェクトは `connectionHandler` オブジェクトの各関数に引数として受け取られます。 戻り値が null または undefined の場合、接続は解除されます。 |

このコールバックは、ハンドシェイクが完了したときに呼び出されます。 WebSocket 接続を作成するためには、有効な [`connectionHandler` オブジェクト](#connectionhandler-オブジェクト) を指定して呼び出す必要があり、そうでない場合は接続がキャンセルされます。

**WSHandler.onOpen**(*WSServer* : Object ; *event* : Object)

| 引数       |      | 型                                  |                             | 説明                        |
| -------- | ---- | ---------------------------------- | :-------------------------: | ------------------------- |
| WSServer |      | 4D.WebSocketServer | <- | カレントの WebSocketサーバーオブジェクト |
| event    |      | Object                             | <- | 引数                        |
|          | type | Text                               |                             | "open"                    |

WebSocketサーバーが起動したときに発生するイベントです。

**WSHandler.onTerminate**(*WSServer* : Object ; *event* : Object)

| 引数       |      | 型                                  |                             | 説明                        |
| -------- | ---- | ---------------------------------- | :-------------------------: | ------------------------- |
| WSServer |      | 4D.WebSocketServer | <- | カレントの WebSocketサーバーオブジェクト |
| event    |      | Object                             | <- | 引数                        |
|          | type | Text                               |                             | "terminate"               |

HTTPサーバーまたは WebSocketサーバーが終了したときに発生するイベントです。

**WSHandler.onError**(*WSServer* : Object ; *event* : Object)

| 引数       |        | 型                                  |                             | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------- | ------ | ---------------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WSServer |        | 4D.WebSocketServer | <- | カレントの WebSocketサーバーオブジェクト                                                                                                                                                                                                                                                                                                                                                                                                                   |
| event    |        | Object                             | <- | 引数                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|          | type   | Text                               |                             | "error"                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|          | errors | Collection                         |                             | 実行エラーの場合、4Dエラースタックのコレクション<li>\[].errCode (number) - 4Dエラーコード</li><li>\[].message (text) - 4Dエラーの説明</li><li>\[].componentSignature (text) - エラーを返した内部コンポーネントの署名</li> |

WebSocketサーバーでエラーが発生したときに発生するイベントです。

### `WSSHandler` クラスの例

この基本的なチャット機能の例では、*WSSHandler* クラスを使って WebSocket サーバー接続を管理する方法を説明します。

```4d
// myWSServerHandler クラス 

Function onConnection($wss : Object; $event : Object) : Object

	If (VerifyAddress($event.request.remoteAddress))
		// VerifyAddress メソッドはクライアントのアドレスを検証します
		// 返される WSConnectionHandler オブジェクトは、この接続に関連する 
		// 4D.WebSocketConnection オブジェクトをインスタンス化するために
		// 4D によって使用されます
		return cs.myConnectionHandler.new()   
		// connectionHandler オブジェクト参照
	Else 
		// 接続は解除されます
		return Null 
	End if 

Function onOpen($wss : Object; $event : Object)
LogFile("*** サーバー起動")

Function onTerminate($wss : Object; $event : Object)
LogFile("*** サーバー終了")

Function onError($wss : Object; $event : Object)
LogFile("!!! サーバーエラー: "+$event.errors.first().message)

```

### `request` オブジェクト

`request` オブジェクトには、次のプロパティが格納されています:

| 引数            | 型      | 説明                                                                                                                         |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| headers       | Object | クライアントの HTTP GET リクエスト。 `headers.key=value` (同じ key を複数指定する場合、value にコレクションを使用できます)                     |
| query         | Object | URL 引数を含むオブジェクト。 たとえば、引数が以下のような場合: `?key1=value1&key2=value2` -> `query.key1=value1`, `query.key2=value2`。 |
| url           | Text   | 実際の HTTPリクエストにおける URL の部分を格納します。 例: `GET /status?name=ryan HTTP/1.1` -> url="/status?name=ryan"            |
| remoteAddress | Text   | クライアントの IPアドレス                                                                                                             |

### `connectionHandler` オブジェクト

`WSHandler.onConnection` コールバックの結果として、`connectionHandler` オブジェクトを渡します。これは、WebSocket 接続でイベントが発生するたび (主にメッセージが受信されるたび) に呼び出されるユーザークラスのインスタンスです。 このクラスでは、以下のコールバック関数を定義します (`onMessage` のみ必須):

| 引数          | 型                            | 説明                                                     |
| ----------- | ---------------------------- | ------------------------------------------------------ |
| onMessage   | [Function](FunctionClass.md) | (必須) この接続から新しいメッセージを受信したときに呼び出される関数 |
| onOpen      | [Function](FunctionClass.md) | `4D.WebSocketConnection` が作成されたときに呼び出される関数             |
| onTerminate | [Function](FunctionClass.md) | 接続が終了したときに呼び出される関数                                     |
| onError     | [Function](FunctionClass.md) | エラーが発生したときに呼び出される関数                                    |

**connectionHandler.onMessage**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| 引数    |      | 型                                                       |                             | 説明                       |
| ----- | ---- | ------------------------------------------------------- | :-------------------------: | ------------------------ |
| ws    |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | カレントの WebSocket 接続オブジェクト |
| event |      | Object                                                  | <- | 引数                       |
|       | type | Text                                                    |                             | "message"                |
|       | data | Text / Blob / Object                                    |                             | クライアントから送信されたデータ         |

WebSocket データ用のコールバックです。 WebSocket がデータを受信するたびに呼び出されます。

**connectionHandler.onOpen**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| 引数    |      | 型                                                       |                             | 説明                       |
| ----- | ---- | ------------------------------------------------------- | :-------------------------: | ------------------------ |
| ws    |      | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | カレントの WebSocket 接続オブジェクト |
| event |      | Object                                                  | <- | 引数                       |
|       | type | Text                                                    |                             | "open"                   |

`connectionHandler` オブジェクトが作成されたときに呼び出されます (`WSS.onConnection` イベントの後)。

**connectionHandler.onTerminate**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| 引数    |        | 型                                                       |                             | 説明                                                                                                       |
| ----- | ------ | ------------------------------------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------- |
| ws    |        | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) | <- | カレントの WebSocket 接続オブジェクト                                                                                 |
| event |        | Object                                                  | <- | 引数                                                                                                       |
|       | type   | Text                                                    |                             | "terminate"                                                                                              |
|       | code   | Number                                                  |                             | 接続が切断された理由を示すステータスコード。 WebSocket がエラーコードを返さない場合、エラーが発生しなかった場合は `code` が 1005 に、エラーが発生した場合は 1006 に設定されます。 |
|       | reason | Text                                                    |                             | 接続が切断された理由を説明するテキスト。 WebSocket が理由を返さない場合、reason は未定義です。                                                 |

WebSocket 終了したときに呼び出されます。

**connectionHandler.onError**(*ws* : 4D.WebSocketConnection ; *event* : Object)

| 引数    |        |            | 型                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                             | 説明                       |
| ----- | ------ | ---------- | ------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------ |
| ws    |        |            | [`4D.WebSocketConnection`](WebSocketConnectionClass.md) |                                                                                                                                                                                                         <-                                                                                                                                                                                                         | カレントの WebSocket 接続オブジェクト |
| event |        |            | Object                                                  |                                                                                                                                                                                                         <-                                                                                                                                                                                                         | 引数                       |
|       | type   |            | Text                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                             | "error"                  |
|       | errors | Collection |                                                         | 実行エラーの場合、4Dエラースタックのコレクション<li>\[].errCode (number) - 4Dエラーコード</li><li>\[].message (text) - 4Dエラーの説明</li><li>\[].componentSignature (text) - エラーを返した内部コンポーネントの署名</li> |                          |

エラーが発生したときに呼び出されます。

### `connectionHandler` クラスの例

この基本的なチャット機能の例では、*connectionHandler* クラスを使ってメッセージを処理する方法を説明します。

```4d
// myConnectionHandler クラス

Function onMessage($ws : 4D.WebSocketConnection; $message : Object)
	// すべてのチャットクライアントにメッセージを送信します
	This.broadcast($ws;$message.data)

Function onOpen($ws : 4D.WebSocketConnection; $message : Object)
	// 新規接続ユーザーにメッセージを送信します
	$ws.send("チャットへようこそ！") 
	// その他の接続済チャットクライアントに "新規クライアントが接続しました" メッセージを送信します
	This.broadcast($ws;"新規クライアントが接続しました")

Function onTerminate($ws : 4D.WebSocketConnection; $message : Object)
	// その他の接続中クライアントに "クライアントが切断されました" メッセージを送信します
	This.broadcast($ws;"クライアント接続が切断されました")

Function broadcast($ws : 4D.WebSocketConnection; $message:text)
	var $client:4D.WebSocketConnection
	// すべてのチャットクライアントにメッセージを送信します
	For each ($client; $ws.wss.connections)
		// id がカレント接続ではないことを確認します
		If ($client.id#$ws.id)
			$client.send($message)
		End if
	End for each

```

### *options* 引数

任意の *options* 引数には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ    | 型    | 説明                                                                                                                                                                                                                                                                                                        | デフォルト     |
| -------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| path     | Text | WebSocketサーバーにアクセスするためのパス。 パスが定義されていない場合、WebSocketサーバーはすべての接続を管理します                                                                                                                                                                                                                                       | undefined |
| dataType | Text | `connectionHandler.onMessage` で受信するデータ、および [`WebSocketConnection.send()`](WebSocketConnectionClass.md#send) 関数で送信するデータの型。 値: "text", "blob", "object"。 "object" の場合: (送信) object を json形式に変換して送信します; (受信) json形式を受信して object に変換します | text      |

<!-- REF #WebSocketServerClass.connections.Desc -->

## .connections

<!-- REF #WebSocketServerClass.connections.Syntax -->**.connections** : Collection<!-- END REF -->

#### 説明

`.connections` プロパティは、<!-- REF #WebSocketServerClass.connections.Summary -->WebSocketサーバーが処理しているカレントの接続をすべて格納します<!-- END REF -->。 コレクションの各要素が [`WebSocketConnection` オブジェクト](WebSocketConnectionClass.md) です。

接続が終了すると、このオブジェクトの [`status`](WebSocketConnectionClass.md#status) は "Closed" に変わり、コレクションから削除されます。

<!-- END REF -->

<!-- REF #WebSocketServerClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketServerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### 説明

`.dataType` プロパティは、<!-- REF #WebSocketServerClass.dataType.Summary -->受信または送信されるデータの型<!-- END REF -->を格納します。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketServerClass.handler.Desc -->

## .handler

<!-- REF #WebSocketServerClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### 説明

`.handler` プロパティは、<!-- REF #WebSocketServerClass.handler.Summary -->WebSocketサーバーの開始に使用された `WSSHandler` オブジェクトを取得するアクセサーです<!-- END REF -->。

<!-- END REF -->

<!-- REF #WebSocketServerClass.path.Desc -->

## .path

<!-- REF #WebSocketServerClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

`.path` プロパティは、<!-- REF #WebSocketServerClass.path.Summary -->WebSocketサーバーにアクセスするためのパスのパターンです<!-- END REF -->。 パスが定義されなかった場合、WebSocketサーバーはすべての接続を管理します。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketServerClass.terminate().Syntax -->**.terminate**()<br/>**.terminate**( *timeout* : Integer )<!-- END REF -->

<!-- REF #WebSocketServerClass.terminate().Params -->

| 引数      | 型       |     | 説明                                                 |
| ------- | ------- | :-: | -------------------------------------------------- |
| timeout | Integer |  -> | WebSocketサーバーを終了するまでの待機時間 (秒単位) |

<!-- END REF -->

#### 説明

`.terminate()` 関数は、<!-- REF #WebSocketServerClass.terminate().Summary -->WebSocketサーバーを終了します<!-- END REF -->。

*timeout* 値が設定されていない場合のデフォルトでは、関数はクローズハンドシェイクを初期化し、相手からクローズフレームを受信するのを待ちます。 その後、FINパケットを送信し、クリーンにソケットを閉じます。 応答を受け取ると、ソケットは破棄されます。

*timeout* 値が設定されている場合:

- 待機時間に達したら強制的にソケットを破棄します。
- *timeout* = 0 の場合、クローズフレームや、FINパケットの交換なしで、強制的かつ即座にソケットを破棄します。

<!-- END REF -->

<!-- REF #WebSocketServerClass.terminated.Desc -->

## .terminated

<!-- REF #WebSocketServerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### 説明

`.terminated` プロパティは、<!-- REF #WebSocketServerClass.terminated.Summary -->WebSocketサーバーが終了している場合には true です<!-- END REF -->。

このプロパティは 読み取り専用 です。

<!-- END REF -->
