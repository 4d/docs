---
id: OutgoingMessageClass
title: OutgoingMessage
---

`4D.OutgoingMessage` クラスを使うと、アプリケーションの関数が[REST リクエスト](../REST/REST_requests.md) に応答して返すメッセージを作成することができます。 レスポンスが`4D.OutgoingMessage` 型であった場合、REST サーバーはオブジェクトを返すのではなく、`OutgoingMessage` クラスのオブジェクトインスタンスを返します。

一般的に、このクラスは、[`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) キーワードで宣言され、HTTP GET リクエストを処理するように設計された関数の中で使用することができます。 このようなリクエストは、例えば、ファイルのダウンロード、画像の生成、ダウンロードなどの機能を実装するためや、ブラウザを介して任意のコンテンツタイプを受信するために使用されます。

このクラスのインスタンスは4D Server 上にビルドされ、[4D REST サーバー](../REST/gettingStarted.md) によってのみブラウザに送信することができます。 このクラスを使用することで、HTTP 以外のテクノロジー(例: モバイルなど)を使用することができます。 このクラスを使用することで、HTTP 以外のテクノロジー(例: モバイルなど)を使用することができます。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 20 R7 | クラスを追加 |

</details>

### 例題

この例題では、`getFile()` 関数は[Datastore クラス](../ORDA/ordaClasses.md#datastore-class) に実装されており、REST リクエストによって[呼び出すことができます](../ORDA/ordaClasses.md#onhttpget-keyword)。 ここでの目的は、**testFile.pdf** ファイルをリクエストへのレスポンスとして返すことです: ここでの目的は、**testFile.pdf** ファイルをリクエストへのレスポンスとして返すことです:

```4d
Class extends DataStoreImplementation

exposed onHTTPGet Function getFile() : 4D.OutgoingMessage
	
	var $result:=4D.OutgoingMessage.new()
	var $file:=File("/RESOURCES/testFile.pdf")
	
	$result.setBody($file.getContent())  // これはバイナリーのコンテンツ
	$result.setHeader("Content-Type"; "application/pdf")
	return $result
```

### OutgoingMessage Object

4D.OutgoingMessage オブジェクトは以下のプロパティと関数を提供します:

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutgoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutgoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutgoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutgoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutgoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutgoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutgoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutgoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutgoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutgoingMessageClass.status.Summary -->              |

:::note

4D.OutgoingMessage オブジェクトは[共有不可](../Concepts/shared.md) オブジェクトです。

:::

<!-- REF #OutgoingMessageClass.body.Desc -->

## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### 説明

`.body` プロパティには<!-- REF #OutgoingMessageClass.body.Summary -->送信されるメッセージ本文<!-- END REF -->が格納されています。 `.body` プロパティでは以下のデータ型がサポートされます:

- テキスト
- blob
- object
- image

`.body` プロパティは読み書き可能です。

`.body` プロパティはまた、[`setBody()`](#setbody) 関数を使用しても設定することができます。この場合、`content-type` ヘッダーは自動的に設定されます。

<!-- END REF -->

<!-- REF #OutgoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutgoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### 説明

`.headers` プロパティには<!-- REF #OutgoingMessageClass.headers.Summary -->送信されるメッセージのカレントのヘッダーがキー/値のペアとして格納されてます<!-- END REF -->。

`.headers` プロパティは、読み出し専用です。 ヘッダーを設定するには、[`setHeader()`](#setheader) 関数を使用します。

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Params -->

| 引数   | 型   |    | 説明         |
| ---- | --- | -- | ---------- |
| body | any | -> | 送信メッセージの本文 |

<!-- END REF -->

#### 説明

`.setBody()` 関数は、<!-- REF #OutgoingMessageClass.setBody().Summary -->*body* 引数をメッセージの本文として設定します<!-- END REF -->。

*body* 引数では以下のデータ型がサポートされています:

- Text
- BLOB
- Object
- ピクチャー

この関数が使用された場合、content-type ヘッダーは*body* 引数の型に応じて自動的に設定されます:

- Content-Type: 本文がテキストの場合にはtext/plain
- Content-Type: 本文がBlob の場合にはapplication/octet-stream
- Content-Type: 本文がオブジェクトの場合にはapplication/json
- Content-Type: image/jpeg、image/gif... (本文が画像の場合)

*body* がサポートされていない値の型だった場合、エラーが返されます。

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutgoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Params -->

| 引数    | 型    |    | 説明            |
| ----- | ---- | -- | ------------- |
| key   | Text | -> | 設定するヘッダープロパティ |
| value | Text | -> | ヘッダープロパティの値   |

<!-- END REF -->

#### 説明

`.setHeader()` 関数は、<!-- REF #OutgoingMessageClass.setHeader().Summary -->送信するメッセージのヘッダーの、*key* 引数で指定したキーを、*value* 引数で指定した値で設定します<!-- END REF -->。 両方の引数ともテキスト値でない場合、エラーが発生します。

4D.OutgoingMessage オブジェクトのインスタンスを返すとき、4D は一部のヘッダーを自動的に設定します(例: `Set-Cookie` を `WASID4D=...` および `4DSID__ProjectName_=....` に設定)。

:::note

*value* 引数の値を、*key* 引数で"Content-Type" ヘッダーを指定して設定しようとする場合、この関数を、[`setBody()`](#setbody) の後に呼び出すようにして下さい。`setBody()` は自動的にヘッダーに値を入れるからです。 "Content-Type" ヘッダーの値の一覧については、の[`WEB SEND BLOB`](../commands-legacy/web-send-blob.md) ドキュメンテーションを参照して下さい。

:::

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutgoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Params -->

| 引数     | 型       |    | 説明        |
| ------ | ------- | -- | --------- |
| status | Integer | -> | 設定するステータス |

<!-- END REF -->

#### 説明

`.setStatus()` 関数は、<!-- REF #OutgoingMessageClass.setStatus().Summary -->*status* 引数で与えられたステータスを`status` プロパティに設定します<!-- END REF -->。

*status* が整数値でない場合、エラーが発生します。

HTTP ステータスコードの一覧については、[Wikipedia のHTTP ステータスコードの一覧(英文)](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) のページを参照して下さい。

<!-- END REF -->

<!-- REF #OutgoingMessageClass.status.Desc -->

## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### 説明

`.status` プロパティには、<!-- REF #OutgoingMessageClass.status.Summary -->送信メッセージのカレントのステータス<!-- END REF -->が格納されています。 このプロパティは、[`setStatus()`](setstatus) 関数を使用して設定することができます。

<!-- END REF -->
