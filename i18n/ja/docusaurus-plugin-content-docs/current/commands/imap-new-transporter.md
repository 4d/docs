---
id: imap-new-transporter
title: IMAP New transporter
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| 引数     | 型                                  |     | 説明                                                                                |
| ------ | ---------------------------------- | :-: | --------------------------------------------------------------------------------- |
| server | Object                             |  →  | メールサーバー情報                                                                         |
| 戻り値    | 4D.IMAPTransporter |  ←  | [IMAP transporter オブジェクト](../API/IMAPTransporterClass.md#imap-transporter-object) |

<!-- END REF -->

#### 説明

`IMAP New transporter` コマンドは、*server* 引数の指定に応じて<!-- REF #_command_.IMAP New transporter.Summary -->新規の IMAP接続を設定します<!-- END REF -->。戻り値は、新しい*transporter* オブジェクトです。 返される transporter オブジェクトは通常、メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                        | デフォルト値 (省略時)  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/IMAPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                     | false                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 これは\*[IMAP transporter](../API/IMAPTransporterClass.md#imap-transporter-object)\* オブジェクトではでは返されません。 | なし                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/IMAPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                       | サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](../API/IMAPTransporterClass.md#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                               | 300                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/IMAPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                          | 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/IMAPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                 | *mandatory*                      |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/IMAPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                        | なし                               |
| .**password** : Text<br/>サーバーとの認証のためのユーザーパスワード。 *[IMAP transporter](#imap-transporter-オブジェクト)* オブジェクトには返されません。                                                                                                                                                                                                                                                                                                  | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/IMAPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                 | 993                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/IMAPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                 | なし                               |

> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。

#### 戻り値

このファンクション[**IMAP transporter オブジェクト**](../API/IMAPTransporterClass.md#imap-transporter-object). 返されるプロパティはすべて **読み取り専用** です。

> IMAP接続は、transporter オブジェクトが消去された時点で自動的に閉じられます。

#### 例題

```4d
$server:=New object
$server.host:="imap.gmail.com" // 必須
$server.port:=993
$server.user:="4d@gmail.com"
$server.password:="XXXXXXXX"
$server.logFile:="LogTest.txt" // Logsフォルダーに保存するログファイル

var $transporter : 4D.IMAPTransporter
$transporter:=IMAP New transporter($server)

$status:=$transporter.checkConnection()
If(Not($status.success))
   ALERT("エラーが発生しました: "+$status.statusText)
End if
```
