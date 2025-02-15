---
id: TCPEventClass
title: TCPEvent
---

`TCPEvent` クラスはTCP 接続のライフサイクル中に発生するイベントに関する情報を提供します。 これは[TCPConnection](TCPConnectionClass.md) が開いた時に生成され、一般的には`onConnection`、`onData`、`onError` などのコールバックの中で使用されます。 これは[TCPConnection](TCPConnectionClass.md) が開いた時に生成され、一般的には`onConnection`、`onData`、`onError` などのコールバックの中で使用されます。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 20 R8 | クラスを追加 |

</details>

### TCPEvent オブジェクト

`TCPEvent` オブジェクトは変更不可であり、ストリーム不可です。

次のプロパティを利用することができます:

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.TCPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #4D.TCPEvent.data.Summary --> |
| [<!-- INCLUDE #4D.TCPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #4D.TCPEvent.type.Summary --> |

<!-- REF #4D.TCPEvent.data.Desc -->

## .data

<!-- REF #4D.TCPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### 説明

`.data` プロパティには、<!-- REF #4D.TCPEvent.data.Summary -->イベントに関連づけられたデータ<!-- END REF -->が格納されています。 これは`"data"` 型のイベントにおいてのみ有効です。 これは`"data"` 型のイベントにおいてのみ有効です。

:::note

ローレベルな TCP/IP 接続を扱っている場合、全てのデータが単一のパケットで到着するという保証はない、という点に留意して下さい。 データは順番通りに届きますが、複数のパケットに断片化されて届く可能性があります。 データは順番通りに届きますが、複数のパケットに断片化されて届く可能性があります。

:::

<!-- END REF -->

<!-- REF #4D.TCPEvent.type.Desc -->

## .type

<!-- REF #4D.TCPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### 説明

`.type` プロパティには、<!-- REF #4D.TCPEvent.type.Summary -->イベントのタイプ<!-- END REF --> が格納されます。 とりうる値: とりうる値:

- `"connection"`: TCPConnection が正常に確立されたことを表します。
- `"data"`: データが受信されたことを表します。
- `"error"`: TCPConnection の最中にエラーが発生したことを示します。
- `"close"`: TCPConnection が適切に閉じられたことを示します。
- `"terminate"`: TCPConnection がリリースされる直前であることを示します。

<!-- END REF -->
