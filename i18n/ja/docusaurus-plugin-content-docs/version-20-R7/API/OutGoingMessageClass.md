---
id: OutGoingMessageClass
title: OutGoingMessage
---

`4D.OutGoingMessage` クラスを使うと、アプリケーションの関数が[REST リクエスト](../REST/REST_requests.md) に応答して返すメッセージを作成することができます。 レスポンスが`4D.OutGoingMessage` 型であった場合、REST サーバーはオブジェクトを返すのではなく、`OutgoingMessage` クラスのオブジェクトインスタンスを返します。

一般的に、このクラスは、[`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) キーワードで宣言され、HTTP GET リクエストを処理するように設計された関数の中で使用することができます。 このようなリクエストは、例えば、ファイルのダウンロード、画像の生成、ダウンロードなどの機能を実装するためや、ブラウザを介して任意のコンテンツタイプを受信するために使用されます。

このクラアスのインスタンスは4D Server 上にビルドされ、[4D REST サーバー](../REST/gettingStarted.md) によってのみブラウザに送信することができます。 このクラスを使用することで、HTTP 以外のテクノロジー(例: モバイルなど)を使用することができます。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 20 R7 | クラスを追加 |

</details>

### 例題

この例題では、`getFile()` 関数は[Datastore クラス](../ORDA/ordaClasses.md#datastore-class) に実装されており、REST リクエストによって[呼び出すことができます](../ORDA/ordaClasses.md#onhttpget-keyword)。 ここでの目的は、**testFile.pdf** ファイルをリクエストへのレスポンスとして返すことです:

```4d
Class extends DataStoreImplementation

exposed onHTTPGet Function getFile() : 4D.OutgoingMessage
	
	var $result:=4D.OutgoingMessage.new()
	var $file:=File("/RESOURCES/testFile.pdf")
	
	$result.setBody($file.getContent())  // これはバイナリーのコンテンツ
	$result.setHeader("Content-Type"; "application/pdf")
	return $result
```

### OutGoingMessage Object

4D.OutGoingMessage objects provide the following properties and functions:

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutGoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutGoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutGoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutGoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutGoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutGoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutGoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutGoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutGoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutGoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutGoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutGoingMessageClass.status.Summary -->              |

:::note

A 4D.OutGoingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::

<!-- REF #OutGoingMessageClass.body.Desc -->

## .body

<!-- REF #OutGoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### 説明

The `.body` property contains <!-- REF #OutGoingMessageClass.body.Summary -->the outgoing message body<!-- END REF -->. The following data types are supported in the `.body` property:

- text
- blob
- object
- image

The `.body` property is read-write.

You can also set the `.body` property using the [`setBody()`](#setbody) function, in which case the `content-type` header is automatically set.

<!-- END REF -->

<!-- REF #OutGoingMessageClass.headers.Desc -->

## .headers

<!-- REF #OutGoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### 説明

The `.headers` property contains <!-- REF #OutGoingMessageClass.headers.Summary -->the current headers of the outgoing message as key/value pairs<!-- END REF -->.

The `.headers` property is read-only. To set a header, use the [`setHeader()`](#setheader) function.

<!-- END REF -->

<!-- REF #OutGoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutGoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutGoingMessageClass.setBody().Params -->

| 引数   | 型   |    | 説明                           |
| ---- | --- | -- | ---------------------------- |
| body | any | -> | Body of the outgoing message |

<!-- END REF -->

#### 説明

The `.setBody()` function <!-- REF #OutGoingMessageClass.setBody().Summary -->sets the outgoing message *body*<!-- END REF -->.

The following data types are supported in the *body*:

- Text
- BLOB
- Object
- ピクチャー

When this function is used, the content-type header is automatically set depending on the *body* type:

- Content-Type:text/plain if the body is a Text
- Content-Type:application/octet-stream if body is a Blob
- Content-Type:application/json if body is an Object
- Content-Type:image/jpeg, image/gif... if body is an Image

If *body* is not of a supported value type, an error is returned.

<!-- END REF -->

<!-- REF #OutGoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutGoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutGoingMessageClass.setHeader().Params -->

| 引数    | 型    |    | 説明                           |
| ----- | ---- | -- | ---------------------------- |
| key   | Text | -> | Header property to set       |
| value | Text | -> | Value of the header property |

<!-- END REF -->

#### 説明

The `.setHeader()` function <!-- REF #OutGoingMessageClass.setHeader().Summary -->sets the outgoing message header *key* with the provided *value*<!-- END REF -->. If both parameters are not Text values, an error is raised.

When returning a 4D.OutGoingMessage object instance, 4D automatically sets some headers (e.g. `Set-Cookie` with `WASID4D=...` and `4DSID__ProjectName_=....`).

:::note

If you set a *value* for the "Content-Type" header *key*, make sure you call this function after the call to [`setBody()`](#setbody), because `setBody()` automatically fills this header. For a list of "Content-Type" header values, please refer to the [`WEB SEND BLOB`](../commands-legacy/web-send-blob.md) documentation.

:::

<!-- END REF -->

<!-- REF #OutGoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutGoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutGoingMessageClass.setStatus().Params -->

| 引数     | 型       |    | 説明            |
| ------ | ------- | -- | ------------- |
| status | Integer | -> | Status to set |

<!-- END REF -->

#### 説明

The `.setStatus()` function <!-- REF #OutGoingMessageClass.setStatus().Summary -->sets the `status` property with the given *status*<!-- END REF -->.

If *status* is not an integer value, an error is raised.

For a list of HTTP status codes, please refer the [HTTP status code list on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

<!-- END REF -->

<!-- REF #OutGoingMessageClass.status.Desc -->

## .status

<!-- REF #OutGoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### 説明

The `.status` property contains <!-- REF #OutGoingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. This property can be set using the [`setStatus()`](setstatus) function.

<!-- END REF -->
