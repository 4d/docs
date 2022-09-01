---
id: SMTPTransporterClass
title: SMTPTransporter
---

`SMTPTransporter` クラスを使って、SMTP接続の設定や、*SMTP transporter* オブジェクトを介したメールの送信をおこなうことができます。

### SMTP Transporter オブジェクト

SMTP Transporter オブジェクトは [SMTP New transporter](#smtp-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.send().Summary -->|
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

<!-- REF SMTPTransporterClass.SMTP New transporter.Desc -->
## SMTP New transporter

<details><summary>履歴</summary>

| バージョン  | 内容                                   |
| ------ | ------------------------------------ |
| v18    | logFile プロパティを追加                     |
| v17 R5 | bodyCharset と headerCharset プロパティを追加 |
| v17 R4 | 追加                                   |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->

**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #_command_.SMTP New transporter.Params -->
| 引数     | タイプ                |    | 詳細                                                                             |
| ------ | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server | Object             | -> | メールサーバー情報                                                                      |
| Result | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF -->

|

#### 詳細

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. 返された transporter オブジェクトは、通常メールの送信に使用されます。

> このコマンドは SMTPサーバーとの接続を開始しません。 SMTP接続は、実際には [`.send()`](#send) 関数が実行された時に開かれます。  
> 
> SMTP接続は、以下の場合に自動的に閉じられます:
> 
> * when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
> * after each  [`.send( )`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                                                                        | デフォルト値 (省略時)                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                 |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。 | なし                                    |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| サーバーがサポートするもっともセキュアな認証モードが使用されます      |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                    |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *必須*                                  |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->| true                                  |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| なし                                    |
| **password** : Text<br/>User password for authentication on the server. OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。                                                                                                                                                                                                                            | なし                                    |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 587                                   |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->| 100                                   |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| なし                                    |

#### Result

この関数は、[**SMTP transporter オブジェクト**](#smtp-transporter-オブジェクト) を返します。 返されるプロパティはすべて **読み取り専用** です。

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

<!-- END REF -->

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->

**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->
| 引数     | タイプ                |    | 詳細                                                                             |
| ------ | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server | Object             | -> | メールサーバー情報                                                                      |
| Result | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF -->

|

#### 詳細

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->creates and returns a new object of the `4D.SMTPTransporter` type<!-- END REF -->. この関数の機能は、[`SMTP New transporter`](#smtp-new-transporter) コマンドと同一です。

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

SMTPステータスコードについての詳細は [こちらのページ](https://www.usps.org/info/smtp_status.html) を参照ください。

#### 例題

```4d
 var $pw : Text
 var $options : Object
 var $transporter : 4D.SMTPTransporter
 $options:=New object

 $pw:=Request("パスワードを入力してください:")
 $options.host:="smtp.gmail.com"

 $options.user:="test@gmail.com"
 $options.password:=$pw

 $transporter:=SMTP New transporter($options)

 $status:=$transporter.checkConnection()
 If($status.success=True)
    ALERT("SMTP接続チェックに成功しました。
 ")
 Else
    ALERT("エラー # "+String($status.status)+", "+$status.statusText)
 End if
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->

**.keepAlive** : Boolean<!-- END REF -->

#### 詳細

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. `SMTP New transporter` コマンドで `transporter` オブジェクトを作成する際に使用する `server` オブジェクトにおいて、 `keepAlive` プロパティが指定されなかった場合のデフォルトは **true** です。

SMTP接続は、以下の場合に自動的に閉じられます:

* `.keepAlive` プロパティが true (デフォルト) の場合には、`transporter` オブジェクトが消去された時。
* `.keepAlive` プロパティが false の場合には、各 `.send( )` 関数が実行された後。

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>履歴</summary>

| バージョン  | 内容             |
| ------ | -------------- |
| v17 R5 | MIMEコンテンツをサポート |
| v17 R4 | 追加             |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->

**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->
| 引数     | タイプ    |    | 詳細                                           |
| ------ | ------ |:--:| -------------------------------------------- |
| mail   | Object | -> | 送信する [メール](EmailObjectClass.md#email-オブジェクト) |
| Result | Object | <- | SMTP status|<!-- END REF -->

|

#### 詳細

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.
> `transporter` オブジェクトは、事前に `SMTP New transporter` コマンドによって作成されている必要があります。

この関数は、SMTP接続が事前に開かれていなかった場合には、それを作成します。 `transporter` オブジェクトの `.keepAlive` プロパティが false であった場合、SMTP接続は `.send()` 実行後に自動的に閉じられます。 詳細については、[`SMTP New transporter`](#smtp-new-transporter) コマンドの説明を参照してください。

*mail*には、送信する有効な [`Email` オブジェクト](EmailObjectClass.md#email-オブジェクト) を渡します。 メールには送信元 (メールがどこから送られるか) と送信先 (一名以上の受信者) プロパティが含まれている必要がありますが、その他のプロパティは任意です。

#### 返されるオブジェクト

この関数は、SMTP ステータスを表すオブジェクトを返します. このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ      | タイプ     | 詳細                                      |
| ---------- | ------- | --------------------------------------- |
| success    | boolean | 送信に成功した場合は true、それ以外は false             |
| status     | number  | SMTPサーバーから返されたコード (メール処理に関係ない問題の場合には 0) |
| statusText | text    | SMTPから返されるステータスメッセージ                    |

SMTP 処理とは関係のない問題 (例: 必須プロパティがメールにない) が発生した場合、4D はエラーを生成します。 これは、`ON ERR CALL` コマンドでインストールしたメソッドでインターセプトできます。 エラー情報を取得するには、`GET LAST ERROR STACK` コマンドを使用します。

この場合、結果のステータスオブジェクトには以下の値が含まれます:

| プロパティ      | Value                  |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
