---
id: transporter
title: Transporter クラス
---

## 説明


<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->
**.acceptUnsecureConnection** : Boolean<!-- END REF -->


#### 説明

`.acceptUnsecureConnection` プロパティは、暗号化された接続が不可能な場合に、 <!-- REF #transporter.acceptUnsecureConnection.Summary -->暗号化されていない接続の確立が許可されてれば **true**<!-- END REF --> を格納します。

It contains **False** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

Available secured ports are:

- SMTP
    - 465: SMTPS
    - 587 or 25: SMTP with STARTTLS upgrade if supported by the server.

- IMAP
    - 143: IMAP non-encrypted port
    - 993: IMAP with STARTTLS upgrade if supported by the server

- POP3
    - 110: POP3 non-encrypted port
    - 995: POP3 with STARTTLS upgrade if supported by the server.
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

#### 説明

`.authenticationMode` プロパティは、 <!-- REF #transporter.authenticationMode.Summary -->メールサーバーのセッションを開くのに使用される認証モード<!-- END REF -->を格納します。

By default, the most secured mode supported by the server is used.

Possible values are:

| 結果       | 定数                             | 説明                                     |
| -------- | ------------------------------ | -------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Authentication using CRAM-MD5 protocol |
| LOGIN    | `IMAP authentication login`    | Authentication using LOGIN protocol    |
| OAUTH2   | `IMAP authentication OAUTH2`   | Authentication using OAuth2 protocol   |
| PLAIN    | `IMAP authentication plain`    | Authentication using PLAIN protocol    |

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

#### 説明

`.authenticationMode` プロパティは、メールサーバーのセッションを開くのに使用される認証モードを格納します。

By default, the most secured mode supported by the server is used.

Possible values are:

| 結果       | 定数                             | 説明                                             |
| -------- | ------------------------------ | ---------------------------------------------- |
| APOP     | `POP3 authentication APOP`     | Authentication using APOP protocol (POP3 only) |
| CRAM-MD5 | `POP3 authentication CRAM-MD5` | Authentication using CRAM-MD5 protocol         |
| LOGIN    | `POP3 authentication login`    | Authentication using LOGIN protocol            |
| OAUTH2   | `POP3 authentication OAUTH2`   | Authentication using OAuth2 protocol           |
| PLAIN    | `POP3 authentication plain`    | Authentication using PLAIN protocol            |

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

#### 説明

`.authenticationMode` プロパティは、メールサーバーのセッションを開くのに使用される認証モードを格納します。

By default, the most secured mode supported by the server is used.

Possible values are:

| 結果       | 定数                             | 説明                                     |
| -------- | ------------------------------ | -------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Authentication using CRAM-MD5 protocol |
| LOGIN    | `SMTP authentication login`    | Authentication using LOGIN protocol    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Authentication using OAuth2 protocol   |
| PLAIN    | `SMTP authentication plain`    | Authentication using PLAIN protocol    |

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


#### 説明

`.bodyCharset` プロパティは、 <!-- REF #transporter.bodyCharset.Summary -->  メール本文で使用される文字セットとエンコーディング<!-- END REF -->を格納します。

*   subject,
*   attachment filename(s),
*   email name.

**とりうる値:**

| 定数                       | 結果                             | 説明                                                                                                            |
| ------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                     |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64                               |

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



#### 説明

`.connectionTimeOut` プロパティは、 <!-- REF #transporter.connectionTimeOut.Summary -->サーバー接続の確立までに待機する最長時間 (秒単位)<!-- END REF -->を格納します。 By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

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


#### 説明

`.headerCharset` プロパティは、 <!-- REF #transporter.headerCharset.Summary --> メールヘッダーで使用される文字セットとエンコーディング<!-- END REF -->を格納します。 The header includes the following parts of the email:

*   subject,
*   attachment filename(s),
*   email name.

**とりうる値:**

| 定数                       | 結果                             | 説明                                                                                                        |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                 |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64                           |

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


#### 説明

`.host` プロパティは、 <!-- REF #transporter.host.Summary -->ホストサーバーの名前または IPアドレス<!-- END REF -->を格納します。 この情報はメール通信 (SMTP、POP3、IMAP) に使用されます。

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


#### 説明

`.logFile` プロパティは、 <!-- REF #transporter.logFile.Summary -->メール接続に対して定義された拡張ログファイル (あれば) へのフルパス<!-- END REF -->を格納します。 It can be relative (to the current Logs folder) or absolute.

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:

*   **SMTP connections** - [4DSMTPLog.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#4165231)
*   **POP3 connections** - [4DPOP3Log.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#4837674)
*   **IMAP connections** - [4DIMAPLog.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#5040475)




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


#### 説明

`.port` プロパティは、 <!-- REF #transporter.port.Summary --> メール通信に使用されるポート番号<!-- END REF -->を格納します。 By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

*   **SMTP** - 587
*   **POP3** - 995
*   **IMAP** - 993


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


#### 説明
`.sendTimeOut` プロパティは、 <!-- REF #transporter.sendTimeOut.Summary --> `.send( )` 呼び出し時のタイムアウト時間 (秒単位)<!-- END REF -->を格納します。 `.sendTimeOut` プロパティが `server` オブジェクトによって設定されていない場合は、デフォルトで 100 という値が使用されます。

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


#### 説明
`.user` プロパティは、 <!-- REF #transporter.user.Summary --> メールサーバーでの認証に使用されたユーザー名<!-- END REF -->を格納します。 

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
| 参照  | タイプ    |    | 説明                         |
| --- | ------ |:--:| -------------------------- |
| 戻り値 | オブジェクト | <- | transporter オブジェクト接続のステータス |
<!-- END REF -->


#### 説明

`.checkConnection()` 関数は、 <!-- REF #transporter.checkConnection().Summary --> transporter オブジェクトが保存する情報を使用して接続をチェックします<!-- END REF -->。必要なら再接続をし、そのステータスを返します。 この関数を使用して、ユーザーから提供された値が有効かどうかを検証することができます。


#### 返されるオブジェクト

この関数はメールサーバーにリクエストを送信し、メールステータスを表すオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ      |                          | タイプ        | 説明                                                                                                           |
| ---------- | ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------ |
| success    |                          | boolean    | True if the check is successful, False otherwise                                                             |
| status     |                          | number     | (SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing) |
| statusText |                          | text       | Status message returned by the mail server, or last error returned in the 4D error stack                     |
| errors     |                          | collection | 4D error stack (not returned if a mail server response is received)                                          |
|            | \[ ].errCode            | number     | 4Dエラーコード                                                                                                     |
|            | \[ ].message            | text       | 4Dエラーの詳細                                                                                                     |
|            | \[ ].componentSignature | text       | エラーを返した内部コンポーネントの署名                                                                                          |



<!-- END REF -->



