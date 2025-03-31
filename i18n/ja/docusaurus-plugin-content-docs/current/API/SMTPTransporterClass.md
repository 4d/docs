---
id: SMTPTransporterClass
title: SMTPTransporter
---

`SMTPTransporter` クラスを使って、SMTP接続の設定や、*SMTP transporter* オブジェクトを介したメールの送信をおこなうことができます。

### SMTP Transporter オブジェクト

SMTP Transporter オブジェクトは [SMTP New transporter](../commands/smtp-new-transporter.md) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary --> |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                   |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                        |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                        |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                      |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                    |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)<br/><!-- INCLUDE #SMTPTransporterClass.send().Summary -->                                       |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                             |

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

| 引数     | 型                                  |                             | 説明                                                  |
| ------ | ---------------------------------- | :-------------------------: | --------------------------------------------------- |
| server | Object                             |              ->             | メールサーバー情報                                           |
| 戻り値    | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-オブジェクト) |

<!-- END REF -->

#### 説明

`4D.SMTPTransporter.new()` 関数は、 <!-- REF #4D.SMTPTransporter.new().Summary -->新規の `4D.SMTPTransporter`型オブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`SMTP New transporter`](../commands/smtp-new-transporter.md) コマンドと同一です。

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
    ALERT("SMTP接続チェックに成功しました。")
 Else
    ALERT("エラー # "+String($status.status)+", "+$status.statusText)
 End if
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->**.keepAlive** : Boolean<!-- END REF -->

#### 説明

`.keepAlive` プロパティは、<!-- REF #SMTPTransporterClass.keepAlive.Summary -->`transporter` オブジェクトが抹消されるまで、SMTP接続が維持されなければならない場合に **true**<!-- END REF -->、それ以外は **false** を格納します。 `SMTP New transporter` コマンドで `transporter` オブジェクトを作成する際に使用する `server` オブジェクトにおいて、 `keepAlive` プロパティが指定されなかった場合のデフォルトは **true** です。

SMTP接続は、以下の場合に自動的に閉じられます:

- `.keepAlive` プロパティが true (デフォルト) の場合には、`transporter` オブジェクトが消去された時。
- `.keepAlive` プロパティが false の場合には、各 `.send( )` 関数が実行された後。

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>履歴</summary>

| リリース  | 内容             |
| ----- | -------------- |
| 17 R5 | MIMEコンテンツをサポート |
| 17 R4 | 追加             |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->

| 引数   | 型      |                             | 説明                                           |
| ---- | ------ | :-------------------------: | -------------------------------------------- |
| mail | Object |              ->             | 送信する [メール](EmailObjectClass.md#email-オブジェクト) |
| 戻り値  | Object | <- | SMTP ステータス                                   |

<!-- END REF -->

#### 説明

`.send()` 関数は、<!-- REF #SMTPTransporterClass.send().Summary -->[*mail* オブジェクト](EmailObjectClass.md#email-オブジェクト) 引数が指定するメールメッセージを、`transporter` オブジェクトが定義する SMTPサーバーへと送信し、ステータスオブジェクトを返します<!-- END REF -->。

> `transporter` オブジェクトは、事前に `SMTP New transporter` コマンドによって作成されている必要があります。

この関数は、SMTP接続が事前に開かれていなかった場合には、それを作成します。 `transporter` オブジェクトの `.keepAlive` プロパティが **false** であった場合、SMTP接続は `.send()` 実行後に自動的に閉じられます。それ以外の場合には、接続は `transporter` オブジェクトが消去されるまで開いたままになります。 詳細については、[`SMTP New transporter`](#smtp-new-transporter) コマンドの説明を参照してください。

*mail*には、送信する有効な [`Email` オブジェクト](EmailObjectClass.md#email-オブジェクト) を渡します。 メールには送信元 (メールがどこから送られるか) と送信先 (一名以上の受信者) プロパティが含まれている必要がありますが、その他のプロパティは任意です。

#### 返されるオブジェクト

この関数は、SMTP ステータスを表すオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ      | 型      | 説明                                                         |
| ---------- | ------ | ---------------------------------------------------------- |
| success    | ブール    | 送信に成功した場合は true、それ以外は false                                |
| status     | number | SMTPサーバーから返されたコード (メール処理に関係ない問題の場合には 0) |
| statusText | text   | SMTPから返されるステータスメッセージ                                       |

SMTP 処理とは関係のない問題 (例: 必須プロパティがメールにない) が発生した場合、4D はエラーを生成します。 これは、`ON ERR CALL` コマンドでインストールしたメソッドでインターセプトできます。 エラー情報を取得するには、`Last errors` コマンドを使用します。

この場合、結果のステータスオブジェクトには以下の値が含まれます:

| プロパティ      | 値                      |
| ---------- | ---------------------- |
| success    | false                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
