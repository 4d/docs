---
id: UDPSocketClass
title: UDPSocket
---

The `UDPSocket` class allows you to send and receive UDP packets. UDP (User Datagram Protocol) is an easy-to-implement protocol for sending data. It is faster and simpler than TCP (only 8 bytes of header as opposed to at least 20 bytes in TCP), but it does not offer the same level of reliability. It is useful for applications where data must arrive at their destination quickly. However, it does not allow verification of delivery, nor does it allow error-checking or recovery of data that was not delivered correctly.

The `UDPSocket` class is available from the `4D` class store. You can create a UDP connection using the [4D.UDPSocket.new()](#4dudpsocketnew) function, which returns a [UDPSocket object](#udpsocket-object).

Thanks to the standard 4D object *refcounting*, a UDPSocket is automatically released when it is no longer referenced, i.e. when no more references to them exist in memory. これ一般的に、例えばメソッド実行の最後にローカル変数が消去されるときに発生します。 Consequently, the associated resources are properly cleaned up without requiring explicit closure. However, if you want to "force" the closure of a socket at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

:::info 4DTCPUDPLog.txt file

For debugging and monitoring, you can use the [4DTCPUDPLog.txt log file] that records events related to UDP sockets. 記録されるイベントには、データ送信、エラー、接続ライフサイクル情報などが含まれます。

:::

<details><summary>履歴</summary>

| リリース   | 内容     |
| ------ | ------ |
| 20 R10 | クラスを追加 |

</details>

### 例題

### UDPSocket Object

A UDPSocket object is immutable, non streamable.

UDPSocket objects provide the following properties and functions:

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPSocket.errors.Syntax -->](#errors)<br/><!-- INCLUDE #UDPSocket.errors.Summary --> |
| [<!-- INCLUDE #UDPSocket.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPSocket.port.Summary -->       |
| [<!-- INCLUDE #UDPSocket.send().Syntax -->](#send)<br/><!-- INCLUDE #UDPSocket.send().Summary -->   |

<!-- REF #4D.UDPSocket.new().Desc -->

## 4D.UDPSocket.new()

<!-- REF #4D.UDPSocket.new().Syntax -->**4D.UDPSocket.new**( *options* : Object  ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ; *options* : Object  ) : 4D.UDPSocket<!-- END REF -->

<!-- REF #4D.UDPSocket.new().params -->

| 引数      | 型         |                             | 説明                                                                                             |
| ------- | --------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| port    | Integer   | ->                          | Local port used for UDP socket (0 or omitted = find any unused port to use) |
| options | Object    | ->                          | Configuration [options](#options-parameter) for the socket                                     |
| 戻り値     | UDPSocket | <- | New UDPSocket object                                                                           |

<!-- END REF -->

#### 説明

The `4D.UDPSocket.new()` function <!-- REF #4D.UDPSocket.new().Summary -->creates a new UDP socket using the defined *options* on the specified *port* (if any) or on a random unused port, and returns a `4D.UDPSocket` object<!-- END REF -->.

#### `options` 引数

*options* に渡すオブジェクトは、次のプロパティを持つことができます:

| プロパティ       | 型       | 説明                                           | デフォルト |
| ----------- | ------- | -------------------------------------------- | ----- |
| onData      | Formula | データが受信されたときにトリガーされるコールバック                    | 未定義   |
| onError     | Formula | エラーの場合にトリガーされるコールバック                         | 未定義   |
| onTerminate | Formula | Callback triggered when the port is released | 未定義   |

#### コールバック関数

すべてのコールバック関数は、2つの引数を受け取ります:

| 引数      | 型                                       | 説明                                              |
| ------- | --------------------------------------- | ----------------------------------------------- |
| $socket | [`UDPSocket` object](#udpsocket-object) | The current UDPSocket instance. |
| $event  | [`UDPEvent` object](#udppevent-object)  | イベントに関する情報が含まれているオブジェクト                         |

**コールバックの呼び出しの順番:**

1. `onData` はデータが受信されるたびにトリガーされます。
2. `onError` はエラーが発生した場合にトリガーされます。
3. `onTerminate` is always triggered just before the port is released (socket is closed or an error occured).

#### UDPEvent object

A [`UDPEvent`](UDPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->

<!-- REF #UDPSocket.errors.Desc -->

## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### 説明

The `.errors` property contains <!-- REF #UDPSocket.errors.Summary -->a collection of error objects associated with the socket<!-- END REF -->. 各エラーオブジェクトにはエラーコード、エラーの詳細、そしてそのエラーを起こしたコンポーネントの署名が格納されています。

| プロパティ  |                                                                                           | 型          | 説明                  |
| ------ | ----------------------------------------------------------------------------------------- | ---------- | ------------------- |
| errors |                                                                                           | Collection | エラー発生時の 4Dエラースタック   |
|        | [].errCode            | Number     | 4Dエラーコード            |
|        | [].message            | Text       | 4Dエラーの詳細            |
|        | [].componentSignature | Text       | エラーを返した内部コンポーネントの署名 |

<!-- END REF -->

<!-- REF #UDPSocket.port.Desc -->

## .port

<!-- REF #UDPSocket.port.Syntax -->**port** : Number<!-- END REF -->

#### 説明

The `.port` property contains <!-- REF #UDPSocket.port.Summary -->the port number to listen to<!-- END REF -->. このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF #UDPSocket.send().Desc -->

## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->

| 引数         | 型       |    | 説明                                                   |
| ---------- | ------- | -- | ---------------------------------------------------- |
| data       | BLOB    | -> | 送信するデータ                                              |
| hostName   | Text    | -> | Name or IP address of server                         |
| remotePort | Integer | -> | Remote port to connect to (0=any) |

<!-- END REF -->

#### 説明

The `send()` function <!-- REF #UDPSocket.send().Summary -->sends *data* to the remote *hostName* server on the specified *remotePort*<!-- END REF -->.

*hostName* is the name or IP address of the server where the data will be sent.

*remotePort* is the number of the port to be connected to. If you pass 0, any available port will be used.

<!-- END REF -->

#### 参照

[UDPEvent](UDPEventClass.md)