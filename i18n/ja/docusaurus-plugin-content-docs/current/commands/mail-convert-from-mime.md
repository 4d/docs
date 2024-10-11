---
id: mail-convert-from-mime
title: MAIL Convert from MIME
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL Convert from MIME.Params -->

| 引数   | 型          |                              | 説明           |
| ---- | ---------- | :--------------------------: | ------------ |
| mime | Blob, Text | &#x1F852 | MIME形式のメール   |
| 戻り値  | オブジェクト     | &#x1F850 | Email オブジェクト |

<!-- END REF -->

#### 説明

`MAIL Convert from MIME` コマンドは、<!-- REF #_command_.MAIL Convert from MIME.Summary -->MIMEドキュメントを有効な Emailオブジェクトへと変換します<!-- END REF -->。

> 戻り値の Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

*mime* には、変換する有効な MIME ドキュメントを渡します。 これはどのメールサーバーまたはアプリケーションから提供されたものでも可能です。 *mime* 引数として、BLOB またはテキストを渡すことができます。 MIME がファイルから渡された場合、文字セットと改行コード変換に関する問題を避けるため、BLOB型の引数を使用することが推奨されます。

#### 返されるオブジェクト

Email オブジェクト。

#### 例題 1

テキストドキュメントとして保存された MIME のメールのテンプレートを読み込み、メールを送信します。

```4d
var $mime: Blob
var $mail;$server;$transporter;$status: Object

$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())

$mail:=MAIL Convert from MIME($mime)
$mail.to:="smith@mail.com"
$mail.subject:="Hello world"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="test@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($mail)
```

#### 例題 2

この例題では、ピクチャーが含まれた 4D Write Pro ドキュメントを直接送信します:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// 4D Write Pro ドキュメントを MIME に書き出します
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// 4D Write Pro MIME 変数をメールオブジェクトに変換します
$email:=MAIL Convert from MIME($mime)

// Email オブジェクトのヘッダーを設定します
$email.subject:="4D Write Pro HTML body"
$email.from:="YourEmail@gmail.com"
$email.to:="RecipientEmail@mail.com"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="YourEmail@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($email)
```

\| mime | BLOB, Text | 🡒 | Email in MIME |
\| Function result | Object | 🡐 | Email object |
