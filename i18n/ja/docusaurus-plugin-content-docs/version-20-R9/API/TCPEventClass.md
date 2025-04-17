---
id: TCPEventClass
title: TCPEvent
---

`TCPEvent` クラスはTCP 接続のライフサイクル中に発生するイベントに関する情報を提供します。 これは[TCPConnection](TCPConnectionClass.md) が開いた時に生成され、一般的には`onConnection`、`onData`、`onError` などのコールバックの中で使用されます。 これは[TCPConnection](TCPConnectionClass.md) が開いた時に生成され、一般的には`onConnection`、`onData`、`onError` などのコールバックの中で使用されます。

<details><summary>履歴</summary>

| リリース  | 内容                              |
| ----- | ------------------------------- |
| 20 R9 | New `ip`, and `port` attributes |
| 20 R8 | クラスを追加                          |

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

The `.data` property contains <!-- REF #TCPEvent.data.Summary -->the data associated with the event<!-- END REF -->. これは`"data"` 型のイベントにおいてのみ有効です。

:::note

ローレベルな TCP/IP 接続を扱っている場合、全てのデータが単一のパケットで到着するという保証はない、という点に留意して下さい。 データは順番通りに届きますが、複数のパケットに断片化されて届く可能性があります。 データは順番通りに届きますが、複数のパケットに断片化されて届く可能性があります。

:::

<!-- END REF -->

<!-- REF #TCPEvent.ip.Desc -->

## .ip

<!-- REF #TCPEvent.ip.Syntax -->**ip** : Text<!-- END REF -->

#### 説明

The `.ip` property contains <!-- REF #TCPEvent.ip.Summary -->the IP address of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPEvent.port.Desc -->

## .port

<!-- REF #TCPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### 説明

The `.port` property contains <!-- REF #TCPEvent.port.Summary -->the port number of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPEvent.type.Desc -->

## .type

<!-- REF #TCPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### 説明

The `.type` property contains <!-- REF #TCPEvent.type.Summary -->the type of the event<!-- END REF -->. とりうる値:

- `"connection"`: TCPConnection が正常に確立されたことを表します。
- `"data"`: データが受信されたことを表します。
- `"error"`: TCPConnection の最中にエラーが発生したことを示します。
- `"close"`: TCPConnection が適切に閉じられたことを示します。
- `"terminate"`: TCPConnection がリリースされる直前であることを示します。

<!-- END REF -->



