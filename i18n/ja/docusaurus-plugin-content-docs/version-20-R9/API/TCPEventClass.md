---
id: TCPEventClass
title: TCPEvent
---

`TCPEvent` クラスはTCP 接続のライフサイクル中に発生するイベントに関する情報を提供します。 これは[TCPConnection](TCPConnectionClass.md) が開いた時に生成され、一般的には`onConnection`、`onData`、`onError` などのコールバックの中で使用されます。 これは[TCPConnection](TCPConnectionClass.md) が開いた時に生成され、一般的には`onConnection`、`onData`、`onError` などのコールバックの中で使用されます。

<details><summary>履歴</summary>

| リリース  | 内容                     |
| ----- | ---------------------- |
| 20 R9 | 新しい `ip` および `port` 属性 |
| 20 R8 | クラスを追加                 |

</details>

### TCPEvent オブジェクト

`TCPEvent` オブジェクトは変更不可であり、ストリーム不可です。

次のプロパティを利用することができます:

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #TCPEvent.data.Summary --> |
| [<!-- INCLUDE #TCPEvent.ip.Syntax -->](#ip)<br/><!-- INCLUDE #TCPEvent.ip.Summary -->       |
| [<!-- INCLUDE #TCPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPEvent.port.Summary --> |
| [<!-- INCLUDE #TCPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #TCPEvent.type.Summary --> |

<!-- REF #TCPEvent.data.Desc -->

## .data

<!-- REF #TCPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### 説明

`.data` プロパティには、<!-- REF #TCPEvent.data.Summary -->イベントに関連づけられたデータ<!-- END REF -->が格納されています。 これは`"data"` 型のイベントにおいてのみ有効です。

:::note

ローレベルな TCP/IP 接続を扱っている場合、全てのデータが単一のパケットで到着するという保証はない、という点に留意して下さい。 データは順番通りに届きますが、複数のパケットに断片化されて届く可能性があります。

:::

<!-- END REF -->

<!-- REF #TCPEvent.ip.Desc -->

## .ip

<!-- REF #TCPEvent.ip.Syntax -->**ip** : Text<!-- END REF -->

#### 説明

`.ip` プロパティには、<!-- REF #TCPConnection.port.Summary -->リモートマシンのIP アドレス<!-- END REF -->が格納されています。

<!-- END REF -->

<!-- REF #TCPEvent.port.Desc -->

## .port

<!-- REF #TCPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### 説明

`.port` プロパティには、<!-- REF #TCPEvent.port.Summary --> リモートマシンのポート番号<!-- END REF -->が格納されています。

<!-- END REF -->

<!-- REF #TCPEvent.type.Desc -->

## .type

<!-- REF #TCPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### 説明

`.type` プロパティには、<!-- REF #TCPEvent.type.Summary -->イベントのタイプ<!-- END REF --> が格納されます。 とりうる値:

- `"connection"`: TCPConnection が正常に確立されたことを表します。
- `"data"`: データが受信されたことを表します。
- `"error"`: TCPConnection の最中にエラーが発生したことを示します。
- `"close"`: TCPConnection が適切に閉じられたことを示します。
- `"terminate"`: TCPConnection がリリースされる直前であることを示します。

<!-- END REF -->



