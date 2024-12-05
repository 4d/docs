---
id: pop3-new-transporter
title: POP3 New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!--REF #_command_.POP3 New transporter.Params-->

| 引数     | 型                                  |   | 説明                                                                                |
| ------ | ---------------------------------- | - | --------------------------------------------------------------------------------- |
| server | Object                             | → | メールサーバー情報                                                                         |
| 戻り値    | 4D.POP3Transporter | ← | [POP3 transporter オブジェクト](../API/POP3TransporterClass.md#pop3-transporter-object) |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

#### 説明

`POP3 New transporter` コマンドは、<!-- REF #_command_.POP3 New transporter.Summary -->新規のPOP3 接続を設定します<!-- END REF -->。このPOP3 接続は、*server* 引数の指定に応じて設定され、コマンドは新しい[POP3 transporter](../API/POP3TransporterClass.md#pop3-transporter-object) オブジェクトを返します。 返される transporter オブジェクトは通常、メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                    | デフォルト値 (省略時)  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/POP3TransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                 | false                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 これは\*[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)\* オブジェクトでは返されません。 | なし                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/POP3TransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                   | サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/POP3TransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                      | 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/POP3TransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                             | *mandatory*                      |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/POP3TransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                    | なし                               |
| **.password** : Text<br/>サーバーとの認証のためのユーザーパスワード。 これは\*[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)\* オブジェクトでは返されません。                                                                                                                                                                                                                                                             | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/POP3TransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                             | 995                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/POP3TransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                             | なし                               |

#### 戻り値

この関数は[**POP3 transporter オブジェクト**](../API/POP3TransporterClass.md#pop3-transporter-object) を返します。 返されるプロパティはすべて **読み取り専用** です。

> POP3接続は、transporter オブジェクトが消去された時点で自動的に閉じられます。

#### 例題

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" // 必須
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" // Logsフォルダーに保存するログ

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("メール受信中にエラーが発生しました: "+$status.statusText)
 End if
```
