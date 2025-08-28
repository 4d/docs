---
id: UDPEventClass
title: UDPEvent
---

`UDPEvent` クラスはUDP ソケットのライフサイクル中に発生するイベントに関する情報を提供します。 これは[UDPSocket](UDPSocketClass.md) が開いた時に生成され、`onData`、`onError`、および `onTerminate` などのコールバックの中で使用されます。

<details><summary>履歴</summary>

| リリース   | 内容     |
| ------ | ------ |
| 20 R10 | クラスを追加 |

</details>

### UDPEvent オブジェクト

`UDPEvent` オブジェクトは変更不可であり、ストリーム不可です。

次のプロパティを利用することができます:

|                                                                                                      |
| ---------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPEvent.address.Syntax -->](#address)<br/><!-- INCLUDE #UDPEvent.address.Summary --> |
| [<!-- INCLUDE #UDPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #UDPEvent.data.Summary -->          |
| [<!-- INCLUDE #UDPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPEvent.port.Summary -->          |
| [<!-- INCLUDE #UDPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #UDPEvent.type.Summary -->          |

<!-- REF UDPEvent.address.Desc -->

## .address

<!-- REF #UDPEvent.address.Syntax -->**address** : Text<!-- END REF -->

#### 説明

The `.address` property contains <!-- REF #UDPEvent.address.Summary -->the IP address of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF UDPEvent.data.Desc -->

## .data

<!-- REF #UDPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### 説明

`.data` プロパティには、<!-- REF #UDPEvent.data.Summary -->イベントに関連づけられたデータ<!-- END REF --> が格納されています。 これは"data" 型のイベントにおいてのみ有効です。

<!-- END REF -->

<!-- REF UDPEvent.port.Desc -->

## .port

<!-- REF #UDPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### 説明

`.port` プロパティには<!-- REF #UDPEvent.port.Summary -->リモートマシンのポート番号<!-- END REF --> が格納されています。

<!-- END REF -->

<!-- REF UDPEvent.type.Desc -->

## .type

<!-- REF #UDPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### 説明

`.type` プロパティには<!-- REF #UDPEvent.type.Summary -->イベントのタイプ<!-- END REF --> が格納されています。 とりうる値:

- `"data"`: データが受信されたことを表します。
- `"error"`: UDPSocket の最中にエラーが発生したことを示します。
- `"terminate"`: UPDSocket がリリースされる直前であることを示します。

<!-- END REF -->

#### 参照

[UDPSocket](UDPSocketClass.md)