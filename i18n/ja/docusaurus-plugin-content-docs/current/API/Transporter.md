---
id: Transporter
title: Transporter クラス
---

## 詳細

<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->

**.acceptUnsecureConnection** : Boolean<!-- END REF -->

#### 詳細

The `.acceptUnsecureConnection` property contains <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** if 4D is allowed to establish an unencrypted connection<!-- END REF --> when encrypted connection is not possible.

暗号化されていない接続が許可されていない場合には **false** が格納されており、その場合に暗号化された接続が不可能な場合にはエラーが返されます。

使用可能なセキュアなポートは次のとおりです:

- SMTP
  - 465: SMTPS
  - 587 または 25: STARTTLS アップグレードがされた SMTP (サーバーがサポートしていれば)

- IMAP
  - 143: IMAP 非暗号化ポート
  - 993: STARTTLS アップグレードがされた IMAP (サーバーがサポートしていれば)

- POP3
  - 110: POP3 非暗号化ポート
  - 995: STARTTLS アップグレードがされた POP3 (サーバーがサポートしていれば)
<!-- END REF -->

---

<!-- REF transporter.authenticationModeIMAP.Desc -->
## .authenticationMode

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #transporter.authenticationMode.Syntax -->

**.authenticationMode** : Text<!-- END REF -->

#### 詳細

The `.authenticationMode` property contains <!-- REF #transporter.authenticationMode.Summary -->the authentication mode used to open the session on the mail server<!-- END REF -->.

デフォルトでは、サーバーによってサポートされている最も安全なモードが使用されます。

とりうる値:

| Value    | 定数                             | 説明                    |
| -------- | ------------------------------ | --------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | CRAM-MD5 プロトコルを使用した認証 |
| LOGIN    | `IMAP authentication login`    | LOGIN プロトコルを使用した認証    |
| OAUTH2   | `IMAP authentication OAUTH2`   | OAuth2 プロトコルを使用した認証   |
| PLAIN    | `IMAP authentication plain`    | PLAIN プロトコルを使用した認証    |

<!-- END REF -->

---

<!-- REF transporter.authenticationModePOP3.Desc -->
## .authenticationMode

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

**.authenticationMode** : Text

#### 詳細

`.authenticationMode` プロパティは、メールサーバーのセッションを開くのに使用される認証モードを格納します。

デフォルトでは、サーバーによってサポートされている最も安全なモードが使用されます。

とりうる値:

| Value    | 定数                             | 説明                          |
| -------- | ------------------------------ | --------------------------- |
| APOP     | `POP3 authentication APOP`     | APOP プロトコルを使用した認証 (POP3 のみ) |
| CRAM-MD5 | `POP3 authentication CRAM-MD5` | CRAM-MD5 プロトコルを使用した認証       |
| LOGIN    | `POP3 authentication login`    | LOGIN プロトコルを使用した認証          |
| OAUTH2   | `POP3 authentication OAUTH2`   | OAuth2 プロトコルを使用した認証         |
| PLAIN    | `POP3 authentication plain`    | PLAIN プロトコルを使用した認証          |

<!-- END REF -->

---

<!-- REF transporter.authenticationModeSMTP.Desc -->
## .authenticationMode

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

**.authenticationMode** : Text

#### 詳細

`.authenticationMode` プロパティは、メールサーバーのセッションを開くのに使用される認証モードを格納します。

デフォルトでは、サーバーによってサポートされている最も安全なモードが使用されます。

とりうる値:

| Value    | 定数                             | 説明                    |
| -------- | ------------------------------ | --------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | CRAM-MD5 プロトコルを使用した認証 |
| LOGIN    | `SMTP authentication login`    | LOGIN プロトコルを使用した認証    |
| OAUTH2   | `SMTP authentication OAUTH2`   | OAuth2 プロトコルを使用した認証   |
| PLAIN    | `SMTP authentication plain`    | PLAIN プロトコルを使用した認証    |

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->
## .bodyCharset

<details><summary>履歴</summary>

| バージョン  | 内容                |
| ------ | ----------------- |
| v18    | UTF8 base64 をサポート |
| v17 R5 | 追加                |

</details>

<!-- REF #transporter.bodyCharset.Syntax -->

**.bodyCharset** : Text<!-- END REF -->

#### 詳細

The `.bodyCharset` property contains <!-- REF #transporter.bodyCharset.Summary -->  the charset and encoding used for the body part of the email<!-- END REF -->.

- 件名
- 添付ファイル名
- メール名

**とりうる値:**

| 定数                       | Value                          | 説明                                                                                           |
| ------------------------ | ------------------------------ | -------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li>*bodyCharset*: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul>                                                                    |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 &amp; Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 &amp; 8-bit</li></ul>                                                                    |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: 可能なら US-ASCII、それが不可なら UTF-8 & Quoted-printable (**デフォルト値**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: 可能な場合は US-ASCII、それ以外は UTF-8 & base64                        |

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->

**.connectionTimeOut** : Integer<!-- END REF -->

#### 詳細

The `.connectionTimeOut` property contains <!-- REF #transporter.connectionTimeOut.Summary -->the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される `server` オブジェクトにおいて、 このプロパティが指定されなかった場合のデフォルトは 30 です。

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->
## .headerCharset

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #transporter.headerCharset.Syntax -->

**.headerCharset** : Text<!-- END REF -->

#### 詳細

The `.headerCharset` property contains <!-- REF #transporter.headerCharset.Summary --> the charset and encoding used for the email header<!-- END REF -->. ヘッダーにはメールの次の要素を含みます:

- 件名
- 添付ファイル名
- メール名

**とりうる値:**

| 定数                       | Value                          | 説明                                                                                       |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li>*bodyCharset*: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul>                                                                |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 &amp; Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 &amp; 8-bit</li></ul>                                                               |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: 可能なら US-ASCII、それが不可なら UTF-8 & Quoted-printable (デフォルト値) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: 可能な場合は US-ASCII、それ以外は UTF-8 & base64                    |

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->
## .host

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #transporter.host.Syntax -->

**.host** : Text<!-- END REF -->

#### 詳細

The `.host` property contains <!-- REF #transporter.host.Summary -->the name or the IP address of the host server<!-- END REF -->. この情報はメール通信 (SMTP、POP3、IMAP) に使用されます。

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->
## .logFile

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #transporter.logFile.Syntax -->

**.logFile** : Text<!-- END REF -->

#### 詳細

The `.logFile` property contains <!-- REF #transporter.logFile.Summary -->the path of the extended log file defined (if any) for the mail connection<!-- END REF -->. パスは、カレント Logs フォルダーを基準とした相対パス、あるいは絶対パスを指定できます。

`SET DATABASE PARAMETER` コマンドで有効化される通常のログファイルとは異なり、拡張ログファイルはすべての送信されたメールの MIMEコンテンツを保存し、サイズ制限がありません。 拡張ログファイルの詳細については、以下の章をそれぞれ参照ください:

- **SMTP 接続** - [4DSMTPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **POP3 接続** - [4DPOP3Log.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **IMAP 接続** - [4DIMAPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->

---

<!-- REF transporter.port.Desc -->
## .port

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #transporter.port.Syntax -->

**.port** : Integer<!-- END REF -->

#### 詳細

The `.port` property contains <!-- REF #transporter.port.Summary --> the port number used for mail transactions<!-- END REF -->. `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される *server* オブジェクトにおいて、 このプロパティが指定されなかった場合に使用されるポートは次のとおりです:

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

<!-- REF #transporter.sendTimeOut.Syntax -->

**.sendTimeOut** : Integer<!-- END REF -->

#### 詳細

The `.sendTimeOut` property contains <!-- REF #transporter.sendTimeOut.Summary --> the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. .

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->
## .user

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #transporter.user.Syntax -->

**.user** : Text<!-- END REF -->

#### 詳細

The `.user` property contains <!-- REF #transporter.user.Summary --> the user name used for authentication on the mail server<!-- END REF -->.

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->
## .checkConnection()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #transporter.checkConnection().Syntax -->

**.checkConnection()** : Object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->
| 引数     | タイプ    |    | 詳細                                                    |
| ------ | ------ |:--:| ----------------------------------------------------- |
| Result | Object | <- | transporter オブジェクト接続のステータス|<!-- END REF -->

|

#### 詳細

The `.checkConnection()` function <!-- REF #transporter.checkConnection().Summary --> checks the connection using information stored in the transporter object<!-- END REF -->, recreates the connection if necessary, and returns the status. この関数を使用して、ユーザーから提供された値が有効かどうかを検証することができます。

#### 返されるオブジェクト

この関数はメールサーバーにリクエストを送信し、メールステータスを表すオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ      |                          | タイプ        | 詳細                                                |
| ---------- | ------------------------ | ---------- | ------------------------------------------------- |
| success    |                          | boolean    | チェックが成功した場合には true、それ以外は false                    |
| status     |                          | number     | (SMTPのみ) メールサーバーから返されたコード (メール処理に関係ない問題の場合には 0)   |
| statusText |                          | text       | メールサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                          | collection | 4Dエラースタック (メールサーバーレスポンスが受信できた場合には返されません)          |
|            | \[ ].errCode            | number     | 4Dエラーコード                                          |
|            | \[ ].message            | text       | 4Dエラーの詳細                                          |
|            | \[ ].componentSignature | text       | エラーを返した内部コンポーネントの署名                               |

<!-- END REF -->
