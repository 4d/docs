---
id: TCPListenerClass
title: TCPListener
---

The `TCPListener` class allows you to create and configure a TCP server in 4D. Once the TCP listener is instantiated, you can receive client TCP connections and communicate using any protocol supporting TCP.

The `TCPListener` class is available from the `4D` class store. You can create a TCP server using the [4D.TCPListener.new()](#4dtcplistenernew) function, which returns a [TCPListener object](#tcplistener-object).

All `TCPListener` class functions are thread-safe.

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
    	//when connected, start a server to handle the communication
	If($event.address # "192.168.@") 
		$result:=Null //in some cases you can reject the connection
	Else
		$result:=cs.MyAsyncTCPConnection.new(This) //see TCPConnection class
	End if
	
Function onError($listener : 4D.TCPListener; $event : 4D.TCPEvent)
	
Function onTerminate($listener : 4D.TCPListener; $event : 4D.TCPEvent)

```

:::note

See [example in TCPConnection class](./TCPConnectionClass.md#asynchronous-example) for a description of the MyAsyncTCPConnection user class.

:::

### TCPListener Object

A TCPListener object is a shared object.

TCPListener objects provide the following properties and functions:

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPListener.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPListener.errors.Summary -->              |
| [<!-- INCLUDE #TCPListener.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPListener.port.Summary -->                    |
| [<!-- INCLUDE #TCPListener.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #TCPListener.terminate().Summary --> |

<!-- REF #4D.TCPListener.new().Desc -->

## 4D.TCPListener.new()

<!-- REF #4D.TCPListener.new().Syntax -->**4D.TCPListener.new**( *port* : Number ; *options* : Object  ) : 4D.TCPListener<!-- END REF -->

<!-- REF #4D.TCPListener.new().params -->

| 引数      | 型                              |                             | 説明                                                           |
| ------- | ------------------------------ | --------------------------- | ------------------------------------------------------------ |
| port    | Number                         | ->                          | TCP port to listen                                           |
| options | Object                         | ->                          | Configuration [options](#options-parameter) for the listener |
| 戻り値     | 4D.TCPListener | <- | New TCPListener object                                       |

<!-- END REF -->

#### 説明

The `4D.TCPListener.new()` function <!-- REF #4D.TCPListener.new().Summary -->creates a new TCP server listening to the specified *port* using the defined *options*, and returns a `4D.TCPListener` object<!-- END REF -->.

#### `options` 引数

In the *options* parameter, pass an object to configure the listener and all the `TCPConnections` it creates:

| プロパティ        | 型       | 説明                                                                                                                                                                                                                                                                                                                                            | デフォルト |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| onConnection | Formula | Callback when a new connection is established. The Formula receives two parameters (*$listener* and *$event*, see below) and must return either null/undefined to prevent the connection or an *option* object that will be used to create the [`TCPConnection`](./TCPConnectionClass.md). | 未定義   |
| onError      | Formula | エラーの場合にトリガーされるコールバック. The Formula receives the `TCPListener` object in *$listener*                                                                                                                                                                                                                                            | 未定義   |
| onTerminate  | Formula | Callback triggered just before the TCPListener is closed. The Formula receives the `TCPListener` object in *$listener*                                                                                                                                                                                                        | 未定義   |

#### コールバック関数

Callback functions receive up to two parameters:

| 引数        | 型                                           | 説明                                                 |
| --------- | ------------------------------------------- | -------------------------------------------------- |
| $listener | [`TCPListener` object](#tcplistener-object) | The current TCP listener instance. |
| $event    | [`TCPEvent` オブジェクト](#tcpevent-オブジェクト)       | イベントに関する情報が含まれているオブジェクト                            |

**コールバックの呼び出しの順番:**

1. `onConnection` is triggered each time a connection is established.
2. `onError` はエラーが発生した場合にトリガーされます。
3. `onTerminate` is always triggered just before a connection is terminated.

#### TCPEvent オブジェクト

[コールバック関数](#コールバック関数) が呼ばれた際には[`TCPEvent`](TCPEventClass.md) オブジェクトが返されます。

<!-- END REF -->

<!-- REF #TCPListener.errors.Desc -->

## .errors

<!-- REF #TCPListener.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### 説明

The `.errors` property contains <!-- REF #TCPListener.errors.Summary -->a collection of error objects associated with the connection<!-- END REF -->. 各エラーオブジェクトにはエラーコード、エラーの詳細、そしてそのエラーを起こしたコンポーネントの署名が格納されています。

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

The `.port` property contains <!-- REF #TCPListener.port.Summary -->the port number of the machine<!-- END REF -->. このプロパティは **読み取り専用** です。

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

The `terminate()` function <!-- REF #TCPListener.terminate().Summary -->closes the listener and releases the port<!-- END REF -->.

<!-- END REF -->

