---
id: smtp-new-transporter
title: SMTP New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!--REF #_command_.SMTP New transporter.Params-->

| 引数     | 型                                  |   | 説明                                                                                |
| ------ | ---------------------------------- | - | --------------------------------------------------------------------------------- |
| server | Object                             | → | メールサーバー情報                                                                         |
| 戻り値    | 4D.SMTPTransporter | ← | [SMTP transporter オブジェクト](../API/SMTPTransporterClass.md#smtp-transporter-object) |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                                   |
| ----- | ------------------------------------ |
| 18    | logFile プロパティを追加                     |
| 17 R5 | bodyCharset と headerCharset プロパティを追加 |
| 17 R4 | 追加                                   |

</details>

#### 説明

`SMTP New transporter` コマンドは、<!-- REF #_command_.SMTP New transporter.Summary -->新規のSMTP 接続を設定します<!-- END REF -->。このSMTP 接続は*server* 引数の指定に応じて設定され、コマンドは新しい[SMTP transporter オブジェクト](../API/SMTPTransporterClass.md#smtp-transporter-object) オブジェクトを返します。 返された transporter オブジェクトは、通常メールの送信に使用されます。 返された transporter オブジェクトは、通常メールの送信に使用されます。 返された transporter オブジェクトは、通常メールの送信に使用されます。 返された transporter オブジェクトは、通常メールの送信に使用されます。 返された transporter オブジェクトは、通常メールの送信に使用されます。 返された transporter オブジェクトは、通常メールの送信に使用されます。 返された transporter オブジェクトは、通常メールの送信に使用されます。 返された transporter オブジェクトは、通常メールの送信に使用されます。

> このコマンドは SMTPサーバーとの接続を開始しません。 このコマンドは SMTPサーバーとの接続を開始しません。 このコマンドは SMTPサーバーとの接続を開始しません。 このコマンドは SMTPサーバーとの接続を開始しません。 SMTP 接続は、実際には[`.send()`](../API/SMTPTransporterClass.md#send) 関数が実行されたときに開かれます。
>
> SMTP接続は、以下の場合に自動的に閉じられます:
>
> - [`.keepAlive`](#keepalive) プロパティが true (デフォルト) の場合に、transporter オブジェクトが消去された時。
> - [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) プロパティがfalse に設定されている場合に、[`.send()`](../API/SMTPTransporterClass.md#send) 関数が実行された後。

*server* 引数には、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                         | デフォルト値 (省略時)                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/SMTPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                      | false                                                                                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 Not returned in *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)* object. | なし                                                                                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/SMTPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                        | サーバーがサポートするもっともセキュアな認証モードが使用されます                                                                 |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](../API/SMTPTransporterClass.md#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                                                                                                                                                                                                                                                                                             | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/SMTPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                           | 30                                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](../API/SMTPTransporterClass.md#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                                                                                                                                                                                                                                                                                       | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/SMTPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                  | *mandatory*                                                                                      |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](../API/SMTPTransporterClass.md#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                                                                                                                                                                                                                                                                                                 | true                                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/SMTPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                         | なし                                                                                               |
| **password** : Text<br/>サーバーとの認証のためのユーザーパスワード。 Not returned in *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)* object.                                                                                                                                                                                                                                                                              | なし                                                                                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/SMTPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                  | 587                                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](../API/SMTPTransporterClass.md#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                                                                                                                                                                                                                                                                                             | 100                                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/SMTPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                  | なし                                                                                               |

#### 戻り値

この関数は[**SMTP transporter オブジェクト**](../API/SMTPTransporterClass.md#smtp-transporter-object) を返します。 返されるプロパティはすべて **読み取り専用** です。 返されるプロパティはすべて **読み取り専用** です。 返されるプロパティはすべて **読み取り専用** です。

#### 例題

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" // 必須
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" // Logsフォルダーに保存する拡張されたログ

 var $transporter : 4D.SMTPTransporter
 $transporter:=SMTP New transporter($server)

 $email:=New object
 $email.subject:="my first mail "
 $email.from:="4d@gmail.com"
 $email.to:="4d@4d.com;test@4d.com"
 $email.textBody:="Hello World"
 $email.htmlBody:="<h1>Hello World</h1><h4>'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'</h4>\
 <p>There are many variations of passages of Lorem Ipsum available."\
 +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("メール送信中にエラーが発生しました: "+$status.message)
 End if
```

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1608                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
