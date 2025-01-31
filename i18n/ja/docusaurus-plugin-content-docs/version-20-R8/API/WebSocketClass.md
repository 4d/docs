---
id: WebSocketClass
title: WebSocket
---

`WebSocket` クラスを使用すると、サーバーとの WebSocket クライアント接続を開いて、データを送受信し、接続を閉じることができます。

WebSocketクライアント接続は、たとえばリアルタイムで財務データを受信したり、チャットでメッセージを送受信したりするのに便利です。

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R2 | 追加 |

</details>

### 例題

この例題では、基本的な WebSocketクライアントを作成します。

1. WebSocket イベントコールバックを処理するためのコールバック関数を含む `WSConnectionHandler` ユーザークラスを作成します:

```4d
// WSConnectionHandler クラス

Class constructor

Function onMessage($ws : 4D.WebSocket; $event : Object)
   ALERT($event.data)

Function onTerminate($ws : 4D.WebSocket; $event : Object)
   ALERT("接続を終了しました")
```

2. 4D.WebSocket をインスタンス化して、4Dフォームから WebSocketサーバーに接続します:

```4d
Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())
```

3. 4Dフォームから WebSocketサーバーにメッセージを送るには、次のように書きます:

```4d
Form.webSocket.send("Hello world")

```

### WebSocket オブジェクト

WebSocketオブジェクトは、以下のプロパティと機能を提供します:

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketClass.dataType.Syntax -->](#dataType)<br/><!-- INCLUDE #WebSocketClass.dataType.Summary -->        |
| [<!-- INCLUDE #WebSocketClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketClass.handler.Summary -->           |
| [<!-- INCLUDE #WebSocketClass.id.Syntax -->](#id)<br/><!-- INCLUDE #WebSocketClass.id.Summary -->                          |
| [<!-- INCLUDE #WebSocketClass.send().Syntax -->](#send)<br/><!-- INCLUDE #WebSocketClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketClass.status.Syntax -->](#status)<br/><!-- INCLUDE #WebSocketClass.status.Summary -->              |
| [<!-- INCLUDE #WebSocketClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #WebSocketClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketClass.url.Syntax -->](#url)<br/><!-- INCLUDE #WebSocketClass.url.Summary -->                       |

## 4D.WebSocket.new()

<details><summary>履歴</summary>

| リリース  | 内容                                         |
| ----- | ------------------------------------------ |
| 20 R3 | *connectionHandler* で `headers` プロパティをサポート |

</details>

<!-- REF #4D.WebSocket.new().Syntax -->**4D.WebSocket.new**( *url* : Text { ; *connectionHandler* : Object } ) : 4D.WebSocket<!-- END REF -->

<!-- REF #4D.WebSocket.new().Params -->

| 引数                                         | 型                            |                             | 説明                                        |
| ------------------------------------------ | ---------------------------- | :-------------------------: | ----------------------------------------- |
| url                                        | Text                         |              ->             | 接続先の URL                                  |
| [connectionHandler](#connectionHandler-引数) | Object                       |              ->             | WebSocket用コールバックを宣言しているオブジェクト             |
| 戻り値                                        | 4D.WebSocket | <- | 新しい [WebSocket オブジェクト](#websocket-オブジェクト) |

<!-- END REF -->

`4D.WebSocket.new()` 関数は、<!-- REF #4D.WebSocket.new().Summary -->*url* で指定したアドレスの WebSocketサーバーに接続された新しい [`4D.WebSocket` オブジェクト](#websocket-オブジェクト) を作成して返します<!-- END REF -->。 `4D.WebSocket` オブジェクトは、サーバーとの WebSocket接続の作成と管理、およびデータの送受信のための API を提供します。

*url*には、WebSocketサーバーが応答する URL を渡します。 以下の URLパターンが使用できます:

- 標準接続用: `ws://host[:port]path[?query]`
- TLSセキュア接続用: `wss://host[:port]path[?query]`

接続できない場合、`null` オブジェクトが返され、エラーが生成されます (このエラーは `ON ERR CALL` で実装したメソッドによってインターセプトできます)。

### *connectionHandler* パラメーター

*connectionHandler* には、接続イベントに応じて呼び出されるコールバック関数のほか、処理するデータ型やヘッダーを含むオブジェクトを渡すことができます。

- コールバックは、接続を開始したフォームまたはワーカーのコンテキストで自動的に呼び出されます。
- フォームまたはワーカーが閉じられていない限り、WebSocket は有効です。

| プロパティ       | 型                            | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onMessage   | [Function](FunctionClass.md) | WebSocket データ用のコールバック関数。 WebSocket がデータを受信するたびに呼び出されます。 コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.type` (text): 常に "message"</li><li>`$2.data` (text, BLOB, または object。`dataType` 参照): 受信データ</li></ul>                                                                                                                                                                                                                                                                                                                                                                        |
| onError     | [Function](FunctionClass.md) | 実行エラー用のコールバック関数。 コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.type` (text): 常に "error"</li><li>`$2.errors`: 実行エラーの場合、4Dエラースタックのコレクション。<ul><li>[].errCode (number): 4Dエラーコード</li><li>[].message (text): 4Dエラーの説明</li><li>[].componentSignature (text) - エラーを返した内部コンポーネントの署名</li></ul></li></ul> |
| onTerminate | [Function](FunctionClass.md) | WebSocket が終了した時のコールバック関数。 コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.code` (number、読み取り専用): 符号なし短整数型で、サーバーから送られたクローズコードを格納します。</li><li>`$2.reason` (text、読み取り専用): サーバーが接続を切断した理由。 これは、対象のサーバーとサブプロトコルに固有のものです。</li></ul>                                                                                                                                                                                                                                                                                                                                                      |
| onOpen      | [Function](FunctionClass.md) | WebSocket が開始した時のコールバック関数。 コールバックは以下の引数を受け取ります:<li>`$1`: WebSocket オブジェクト</li><li>`$2`: Object</li><ul><li>`$2.type` (text): 常に "open"</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| dataType    | Text                         | 受信または送信されたデータの型。 可能な値: "text" (デフォルト), "blob", "object"。 "text" = utf-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| headers     | Object                       | WebSocket のヘッダー。<li>標準的な key 割り当てのシンタックス:` headers.*key*:=*value*` (同じ key を複数指定する場合、*value* にコレクションを使用できます)</li><li>Cookie割り当てのシンタックス (特定の場合): `headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"`</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

以下は、コールバック呼び出しの流れです:

1. `onOpen` は 1回実行されます。
2. `onMessage` が 0回以上実行されます。
3. `onError` が 0回または 1回実行されます (処理を停止します)。
4. `onTerminate` は常に実行されます。

#### 例題

`WSConnectionHandler` ユーザークラスでヘッダーを設定します:

```4d
// WSConnectionHandler クラス

Class constructor($myToken:Text)

// サーバーに送信するヘッダーを作成します
This.headers:=New object("x-authorization";$myToken)
// 2つの Cookie を設定します
This.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"
...

```

<!-- REF #WebSocketClass.dataType.Desc -->

## .dataType

<!-- REF #WebSocketClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### 説明

`.dataType` プロパティは、<!-- REF #WebSocketClass.dataType.Summary -->レスポンス本文のデータ型です<!-- END REF -->。 "text"、"blob"、"object" のいずれかです。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.handler.Desc -->

## .handler

<!-- REF #WebSocketClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### 説明

`.handler` プロパティは、<!-- REF #WebSocketClass.handler.Summary -->接続を開始するのに使用された `connectionHandler` オブジェクトを取得するアクセサーを格納します<!-- END REF -->。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.id.Desc -->

## .id

<!-- REF #WebSocketClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### 説明

`.id` プロパティは、<!-- REF #WebSocketClass.id.Summary -->接続の一意な識別子を格納します<!-- END REF -->。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.send().Desc -->

## .send()

<!-- REF #WebSocketClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketClass.send().Params -->

| 引数      | 型                  |     | 説明        |
| ------- | ------------------ | :-: | --------- |
| message | Text, Blob, Object |  -> | 送信するメッセージ |

<!-- END REF -->

#### 説明

`.send()` 関数は、<!-- REF #WebSocketClass.send().Summary -->定義されたデータ型 (Text、Blob、または Object) で、WebSocket サーバーに *message* を送信します<!-- END REF -->。

*メッセージ* の型によって、以下の内容が送信されます:

| 型      | 内容                                                                                                                      |
| ------ | ----------------------------------------------------------------------------------------------------------------------- |
| Text   | UTF-8 のテキスト                                                                                                             |
| BLOB   | バイナリデータ                                                                                                                 |
| Object | JSON UTF-8 のテキスト ([`JSON Stringify`](https://doc.4d.com/4dv20/help/command/ja/page1217.html) と同じ結果)。 |

<!-- END REF -->

<!-- REF #WebSocketClass.status.Desc -->

## .status

<!-- REF #WebSocketClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### 説明

`.status` プロパティは、<!-- REF #WebSocketClass.status.Summary -->現在の接続ステータスを格納します ("Connecting"、"Closing"、"Closed"、"Connected" のいずれか)<!-- END REF -->。

このプロパティは 読み取り専用 です。

<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketClass.terminate().Syntax -->**.terminate**( { *code* : Integer { ; *reason* : Text } } )<!-- END REF -->

<!-- REF #WebSocketClass.terminate().Params -->

| 引数     | 型       |     | 説明                    |
| ------ | ------- | :-: | --------------------- |
| code   | Integer |  -> | 接続が切断される理由を示すステータスコード |
| reason | Text    |  -> | 接続が切断される理由を説明するテキスト   |

<!-- END REF -->

#### 説明

`.terminate()` 関数は、<!-- REF #WebSocketClass.terminate().Summary -->任意の *code* および *reason* 引数とともに、WebSocket 接続を閉じます<!-- END REF -->。

*code* には、接続を閉じる理由を説明するステータスコードを渡すことができます ([RFC6455 の WebSocket Connection Close Code](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) も参照ください):

- 指定しなかった場合、接続のクローズコードは自動的に設定されます: 通常終了の場合は 1000、そうでない場合は、接続が切断された実際の理由を示す 1001〜1015 の標準値。
- 指定された場合、この code パラメーターの値は自動設定の値をオーバーライドします。 値は整数でなくてはなりません。 1000、または 3000-4999 の範囲のカスタムコードが利用できます。 *code* を指定する場合は、*reason* の値も指定する必要があります。

*reason* には、接続を閉じる理由を説明するテキストを渡すことができます。

<!-- END REF -->

<!-- REF #WebSocketClass.url.Desc -->

## .url

<!-- REF #WebSocketClass.url.Syntax -->**.url** : Text<!-- END REF -->

#### 説明

`.url` プロパティは、<!-- REF #WebSocketClass.url.Summary -->WebSocket が接続した URL を格納します<!-- END REF -->。 これは、[`new()`](#4dwebsocketnew) 関数に渡した URL と同じです。

このプロパティは 読み取り専用 です。

<!-- END REF -->
