---
id: TCPListenerClass
title: TCPListener
---

`TCPListener` クラスを使用すると、4D で TCP サーバーを作成および設定することができます。 TCP リスナーがインスタンス化されると、クライアントからのTCP 接続を受信し、TCP をサポートしているあらゆるプロトコルを使用して通信することができるようになります。

`TCPListener` クラスは `4D` クラスストアにて提供されています。 TCP サーバーは、[TCPListener オブジェクト](#tcplistener-オブジェクト) を返す [4D.TCPListener.new()](#4dtcplistenernew) 関数を使用して作成できます。

全ての`TCPListener` クラス関数はスレッドセーフです。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 20 R9 | クラスを追加 |

</details>

### 例題

```4d

property listener : 4D.TCPListener

Class constructor($port : Integer)
	
	This.listener:=4D.TCPListener.new($port; This)
		
Function terminate()
	
	This.listener.terminate()
	
Function onConnection($listener : 4D.TCPListener; $event : 4D.TCPEvent)->$result
    	// 接続したら、通信を管理するサーバーを開始する
	If($event.address # "192.168.@") 
		$result:=Null // 特定の場合には接続を拒否します
	Else
		$result:=cs.MyAsyncTCPConnection.new(This) // 詳細はTCPConnection クラスを参照のこと
	End if
	
Function onError($listener : 4D.TCPListener; $event : 4D.TCPEvent)
	
Function onTerminate($listener : 4D.TCPListener; $event : 4D.TCPEvent)

```

:::note

MyAsyncTCPConnection ユーザークラスの詳細については、[TCPConnection クラスの例題](./TCPConnectionClass.md#asynchronous-example) を参照して下さい。

:::

### TCPListener オブジェクト

TCPListener オブジェクトは共有オブジェクトです。

TCPListener オブジェクトは以下のプロパティや関数を提供します:

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPListener.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPListener.errors.Summary -->              |
| [<!-- INCLUDE #TCPListener.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPListener.port.Summary -->                    |
| [<!-- INCLUDE #TCPListener.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #TCPListener.terminate().Summary --> |

<!-- REF #4D.TCPListener.new().Desc -->

## 4D.TCPListener.new()

<!-- REF #4D.TCPListener.new().Syntax -->**4D.TCPListener.new**( *port* : Number ; *options* : Object  ) : 4D.TCPListener<!-- END REF -->

<!-- REF #4D.TCPListener.new().params -->

| 引数      | 型                              |                             | 説明                          |
| ------- | ------------------------------ | --------------------------- | --------------------------- |
| port    | Number                         | ->                          | リッスンするTCP ポート番号             |
| options | Object                         | ->                          | リスナーの設定[オプション](#options-引数) |
| 戻り値     | 4D.TCPListener | <- | 新規TCPListener オブジェクト        |

<!-- END REF -->

#### 説明

`4D.TCPListener.new()` 関数は、<!-- REF #4D.TCPListener.new().Summary -->*port* 引数で指定したポートをリッスンする新規のサーバーを、*options* 引数で定義されたオプションを使用して作成し、`4D.TCPListener` オブジェクトを返します<!-- END REF -->。

#### `options` 引数

*options* 引数には、リスナーとそれが作成する全ての`TCPConnections` を設定するオブジェクトを渡します:

| プロパティ        | 型       | 説明                                                                                                                                                                                                                      | デフォルト |
| ------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| onConnection | Formula | 新規接続が確立した時にトリガーされるコールバック。 このフォーミュラは2つの引数(*$listener* および *$event*、以下参照)を受け取り、接続を阻止するためにnull/undefined か、または[`TCPConnection`](./TCPConnectionClass.md) を作成するのに使用される *option* オブジェクトのいずれかを返さなかればなりません。 | 未定義   |
| onError      | Formula | エラーの場合にトリガーされるコールバック. このフォーミュラは\*$listener\* に `TCPListener` オブジェクトを受け取ります。                                                                                                                             | 未定義   |
| onTerminate  | Formula | TCPListener が閉じられる直前にトリガーされるコールバック。 このフォーミュラは\*$listener\* に `TCPListener` オブジェクトを受け取ります。                                                                                                                               | 未定義   |

#### コールバック関数

コールバック関数は、最大2つの引数を受け取ります:

| 引数        | 型                                           | 説明                      |
| --------- | ------------------------------------------- | ----------------------- |
| $listener | [`TCPListener` オブジェクト](#tcplistener-オブジェクト) | カレントのTCP リスナーインスタンス     |
| $event    | [`TCPEvent` オブジェクト](#tcpevent-オブジェクト)       | イベントに関する情報が含まれているオブジェクト |

**コールバックの呼び出しの順番:**

1. `onConnection` は接続が確立したときに毎回トリガーされます。
2. `onError` はエラーが発生した場合にトリガーされます。
3. `onTerminate` は接続が終了する直前に必ずトリガーされます。

#### TCPEvent オブジェクト

[コールバック関数](#コールバック関数) が呼ばれた際には[`TCPEvent`](TCPEventClass.md) オブジェクトが返されます。

<!-- END REF -->

<!-- REF #TCPListener.errors.Desc -->

## .errors

<!-- REF #TCPListener.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### 説明

`.errors` プロパティには<!-- REF #TCPListener.errors.Summary -->接続に関連したエラーオブジェクトのコレクションが格納されています<!-- END REF -->。 各エラーオブジェクトにはエラーコード、エラーの詳細、そしてそのエラーを起こしたコンポーネントの署名が格納されています。

| プロパティ  |                                                                                           | 型          | 説明                  |
| ------ | ----------------------------------------------------------------------------------------- | ---------- | ------------------- |
| errors |                                                                                           | Collection | エラー発生時の 4Dエラースタック   |
|        | [].errCode            | Number     | 4Dエラーコード            |
|        | [].message            | Text       | 4Dエラーの詳細            |
|        | [].componentSignature | Text       | エラーを返した内部コンポーネントの署名 |

<!-- END REF -->

<!-- REF #TCPListener.port.Desc -->

## .port

<!-- REF #TCPListener.port.Syntax -->**port** : Number<!-- END REF -->

#### 説明

`.port` プロパティは、<!-- REF #TCPListener.port.Summary -->マシンのポート番号<!-- END REF -->を格納します。 このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF #TCPListener.terminate().Desc -->

## .terminate()

<!-- REF #TCPListener.terminate().Syntax -->**.terminate**()<!-- END REF -->

<!-- REF #TCPListener.terminate().params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`terminate()` 関数は<!-- REF #TCPListener.terminate().Summary -->リスナーを閉じ、ポートを閉じます<!-- END REF -->。

<!-- END REF -->

