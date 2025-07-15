---
id: UDPSocketClass
title: UDPSocket
---

`UDPSocket` クラスを使用すると、UDP パケットの送信と受信が可能になります。 UDP (User Datagram Protocol) は、データを送信するための、実装が簡単なプロトコルです。 これはTCP よりも早くてシンプル(TCP のヘッダーが最低20 バイトであるのに対してUDP はヘッダーがわずか8 バイト)ですが、信頼性のレベルは同じではありません。 これはデータが目的地に迅速に到着する必要のあるアプリケーションに有用です。 ただし、これは配信の検証も、正常に配信されなかったデータの復旧もエラーチェックも行うことはできません。

`UDPSocket` クラスは`4D` クラスストアから利用可能です。 UDP 接続は、 [UDPSocket オブジェクト](#udpsocket-object) を返す [4D.UDPSocket.new()](#4dudpsocketnew) 関数を使用することで作成することができます。

標準の4D オブジェクトの *refcounting* のおかげで、UDPSocket はそれがもう参照されなくなったときに自動的にリリースされます。これはつまりメモリ内にUDPSocket への参照が残っていない状態になったときを意味します。 これ一般的に、例えばメソッド実行の最後にローカル変数が消去されるときに発生します。 結果として、それに関連したリソースは、明示的な終了を必要とせずに適切にクリーンアップされます。 しかしながら、ソケットを"強制的に"終了させたい場合には、[**Null** を代入することで**参照を無効化** してください](../Concepts/dt_object.md#リソース)。

:::info 4DTCPUDPLog.txt ファイル

UDP ソケットに関連したイベントを記録する[4DTCPUDPLog.txt ログファイル]を使用すると、 デバッグやモニタリングを行うことができます。 記録されるイベントには、データ送信、エラー、接続ライフサイクル情報などが含まれます。

:::

<details><summary>履歴</summary>

| リリース   | 内容     |
| ------ | ------ |
| 20 R10 | クラスを追加 |

</details>

### 例題

### UDPSocket オブジェクト

UDPSocket オブジェクトは変更不可であり、ストリーム不可です。

UDPSocket オブジェクトは以下のプロパティと関数を提供します:

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPSocket.errors.Syntax -->](#errors)<br/><!-- INCLUDE #UDPSocket.errors.Summary --> |
| [<!-- INCLUDE #UDPSocket.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPSocket.port.Summary -->       |
| [<!-- INCLUDE #UDPSocket.send().Syntax -->](#send)<br/><!-- INCLUDE #UDPSocket.send().Summary -->   |

<!-- REF #4D.UDPSocket.new().Desc -->

## 4D.UDPSocket.new()

<!-- REF #4D.UDPSocket.new().Syntax -->**4D.UDPSocket.new**( *options* : Object  ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ; *options* : Object  ) : 4D.UDPSocket<!-- END REF -->

<!-- REF #4D.UDPSocket.new().params -->

| 引数      | 型         |                             | 説明                                                                       |
| ------- | --------- | --------------------------- | ------------------------------------------------------------------------ |
| port    | Integer   | ->                          | UDP ソケットに使用されるローカルのポート番号(0 または省略時には使用されていないポートを探して使用) |
| options | Object    | ->                          | ソケットの接続[オプション](#options引数)                                               |
| 戻り値     | UDPSocket | <- | 新規UDPSocket オブジェクト                                                       |

<!-- END REF -->

#### 説明

`4D.UDPSocket.new()` 関数は、<!-- REF #4D.UDPSocket.new().Summary -->*port* 引数(あれば)で指定されたポートまたは未使用のランダムなポート上で、 *options* 引数で定義されたオプションを使用して新しいUDP ソケットを作成し、`4D.UDPSocket` オブジェクトを返します<!-- END REF -->。

#### `options` 引数

*options* に渡すオブジェクトは、次のプロパティを持つことができます:

| プロパティ       | 型       | 説明                         | デフォルト |
| ----------- | ------- | -------------------------- | ----- |
| onData      | Formula | データが受信されたときにトリガーされるコールバック  | 未定義   |
| onError     | Formula | エラーの場合にトリガーされるコールバック       | 未定義   |
| onTerminate | Formula | ポートがリリースされた時にトリガーされるコールバック | 未定義   |

#### コールバック関数

すべてのコールバック関数は、2つの引数を受け取ります:

| 引数      | 型                                       | 説明                      |
| ------- | --------------------------------------- | ----------------------- |
| $socket | [`UDPSocket` オブジェクト](#udpsocket-オブジェクト) | カレントのUDPSocket インスタンス。  |
| $event  | [`UDPEvent` オブジェクト](#udppevent-オブジェクト)  | イベントに関する情報が含まれているオブジェクト |

**コールバックの呼び出しの順番:**

1. `onData` はデータが受信されるたびにトリガーされます。
2. `onError` はエラーが発生した場合にトリガーされます。
3. `onTerminate` は常にポートが閉じられる直前にトリガーされます(ソケットが閉じられたか、エラーが発生した場合です)。

#### UDPEvent オブジェクト

[コールバック関数](#コールバック関数) が呼ばれた際には[`UDPEvent`](UDPEventClass.md) オブジェクトが返されます。

<!-- END REF -->

<!-- REF #UDPSocket.errors.Desc -->

## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### 説明

`.errors` プロパティには<!-- REF #UDPSocket.errors.Summary -->ソケットに関連したエラーオブジェクトのコレクション<!-- END REF -->が格納されています。 各エラーオブジェクトにはエラーコード、エラーの詳細、そしてそのエラーを起こしたコンポーネントの署名が格納されています。

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

`.port` プロパティには<!-- REF #UDPSocket.port.Summary -->リッスンするポート番号<!-- END REF --> が格納されています。 このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF #UDPSocket.send().Desc -->

## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->

| 引数         | 型       |    | 説明                                   |
| ---------- | ------- | -- | ------------------------------------ |
| data       | BLOB    | -> | 送信するデータ                              |
| hostName   | Text    | -> | サーバーの名前またはIP アドレス                    |
| remotePort | Integer | -> | 接続するリモートポート(0=任意) |

<!-- END REF -->

#### 説明

`send()` 関数は、<!-- REF #UDPSocket.send().Summary -->*data* 引数のデータを*hostName* で指定したリモートサーバーに、*remotePort* 引数で指定したポート番号で送信します<!-- END REF -->。

*hostName* 引数はデータの送信先のサーバーの名前またはIP アドレスです。

*remotePort* 引数は接続するポート番号です。 0 を渡した場合、利用可能な任意のポートが使用されます。

<!-- END REF -->

#### 参照

[UDPEvent](UDPEventClass.md)