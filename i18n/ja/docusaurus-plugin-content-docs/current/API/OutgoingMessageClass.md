---
id: OutgoingMessageClass
title: OutgoingMessage
---

The `4D.OutgoingMessage` class allows you to build messages to be returned by your application functions in response to [REST requests](../REST/REST_requests.md). If the response is of type `4D.OutgoingMessage`, the REST server does not return an object but the object instance of the `OutgoingMessage` class.

Typically, this class can be used in custom [HTTP request handler functions](../WebServer/http-request-handler.md#function-configuration) or in functions declared with the [`onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) keyword and designed to handle HTTP GET requests. このようなリクエストは、例えば、ファイルのダウンロード、画像の生成、ダウンロードなどの機能を実装するためや、ブラウザを介して任意のコンテンツタイプを受信するために使用されます。

このクラアスのインスタンスは4D Server 上にビルドされ、[4D REST サーバー](../REST/gettingStarted.md) によってのみブラウザに送信することができます。 このクラスを使用することで、HTTP 以外のテクノロジー(例: モバイルなど)を使用することができます。 このクラスを使用することで、HTTP 以外のテクノロジー(例: モバイルなど)を使用することができます。

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

4D.OutgoingMessage objects provide the following properties and functions:

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #OutgoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutgoingMessageClass.body.Summary -->                    |
| [<!-- INCLUDE #OutgoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutgoingMessageClass.headers.Summary -->           |
| [<!-- INCLUDE #OutgoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutgoingMessageClass.setBody().Summary -->       |
| [<!-- INCLUDE #OutgoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutgoingMessageClass.setHeader().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutgoingMessageClass.setStatus().Summary --> |
| [<!-- INCLUDE #OutgoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutgoingMessageClass.status.Summary -->              |

:::note

A 4D.OutgoingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::

<!-- REF #OutgoingMessageClass.body.Desc -->

## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### 説明

The `.body` property contains <!-- REF #OutgoingMessageClass.body.Summary -->the outgoing message body<!-- END REF -->. `.body` プロパティでは以下のデータ型がサポートされます:

- text
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

The `.headers` property contains <!-- REF #OutgoingMessageClass.headers.Summary -->the current headers of the outgoing message as key/value pairs<!-- END REF -->.

The `.headers` property is read-only. To set a header, use the [`setHeader()`](#setheader) function.

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Desc -->

## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setBody().Params -->

| 引数   | 型   |    | 説明                           |
| ---- | --- | -- | ---------------------------- |
| body | any | -> | Body of the outgoing message |

<!-- END REF -->

#### 説明

The `.setBody()` function <!-- REF #OutgoingMessageClass.setBody().Summary -->sets the outgoing message *body*<!-- END REF -->.

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

<!-- REF #OutgoingMessageClass.setHeader().Desc -->

## .setHeader()

<!-- REF #OutgoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setHeader().Params -->

| 引数    | 型    |    | 説明                           |
| ----- | ---- | -- | ---------------------------- |
| key   | Text | -> | Header property to set       |
| value | Text | -> | Value of the header property |

<!-- END REF -->

#### 説明

The `.setHeader()` function <!-- REF #OutgoingMessageClass.setHeader().Summary -->sets the outgoing message header *key* with the provided *value*<!-- END REF -->. If both parameters are not Text values, an error is raised.

When returning a 4D.OutgoingMessage object instance, 4D automatically sets some headers (e.g. `Set-Cookie` with `WASID4D=...` and `4DSID__ProjectName_=....`).

:::note

If you set a *value* for the "Content-Type" header *key*, make sure you call this function after the call to [`setBody()`](#setbody), because `setBody()` automatically fills this header. For a list of "Content-Type" header values, please refer to the [`WEB SEND BLOB`](../commands-legacy/web-send-blob.md) documentation.

:::

<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Desc -->

## .setStatus()

<!-- REF #OutgoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->

<!-- REF #OutgoingMessageClass.setStatus().Params -->

| 引数     | 型       |    | 説明            |
| ------ | ------- | -- | ------------- |
| status | Integer | -> | Status to set |

<!-- END REF -->

#### 説明

The `.setStatus()` function <!-- REF #OutgoingMessageClass.setStatus().Summary -->sets the `status` property with the given *status*<!-- END REF -->.

If *status* is not an integer value, an error is raised.

For a list of HTTP status codes, please refer the [HTTP status code list on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

<!-- END REF -->

<!-- REF #OutgoingMessageClass.status.Desc -->

## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### 説明

The `.status` property contains <!-- REF #OutgoingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. This property can be set using the [`setStatus()`](setstatus) function.

<!-- END REF -->
