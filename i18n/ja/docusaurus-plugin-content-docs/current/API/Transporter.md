---
id: Transporter
title: Transporter クラス
---

## 説明

<!-- REF transporter.acceptUnsecureConnection.Desc -->

## .acceptUnsecureConnection

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->**.acceptUnsecureConnection** : Boolean<!-- END REF -->

#### 説明

`.acceptUnsecureConnection` プロパティは、暗号化された接続が不可能な場合に、 <!-- REF #transporter.acceptUnsecureConnection.Summary -->暗号化されていない接続の確立が許可されてれば **true**<!-- END REF --> を格納します。

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

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #transporter.authenticationMode.Syntax -->**.authenticationMode** : Text<!-- END REF -->

#### 説明

`.authenticationMode` プロパティは、 <!-- REF #transporter.authenticationMode.Summary -->メールサーバーのセッションを開くのに使用される認証モード<!-- END REF -->を格納します。

デフォルトでは、サーバーによってサポートされている最も安全なモードが使用されます。

とりうる値:

| 値        | 定数                             | 説明                    |
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

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

**.authenticationMode** : Text

#### 説明

`.authenticationMode` プロパティは、メールサーバーのセッションを開くのに使用される認証モードを格納します。

デフォルトでは、サーバーによってサポートされている最も安全なモードが使用されます。

とりうる値:

| 値        | 定数                             | 説明                                             |
| -------- | ------------------------------ | ---------------------------------------------- |
| APOP     | `POP3 authentication APOP`     | APOP プロトコルを使用した認証 (POP3 のみ) |
| CRAM-MD5 | `POP3 authentication CRAM MD5` | CRAM-MD5 プロトコルを使用した認証                          |
| LOGIN    | `POP3 authentication login`    | LOGIN プロトコルを使用した認証                             |
| OAUTH2   | `POP3 authentication OAUTH2`   | OAuth2 プロトコルを使用した認証                            |
| PLAIN    | `POP3 authentication plain`    | PLAIN プロトコルを使用した認証                             |

<!-- END REF -->

---

<!-- REF transporter.authenticationModeSMTP.Desc -->

## .authenticationMode

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

**.authenticationMode** : Text

#### 説明

`.authenticationMode` プロパティは、メールサーバーのセッションを開くのに使用される認証モードを格納します。

デフォルトでは、サーバーによってサポートされている最も安全なモードが使用されます。

とりうる値:

| 値        | 定数                             | 説明                    |
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

| リリース  | 内容                |
| ----- | ----------------- |
| 18    | UTF8 base64 をサポート |
| 17 R5 | 追加                |

</details>

<!-- REF #transporter.bodyCharset.Syntax -->**.bodyCharset** : Text<!-- END REF -->

#### 説明

`.bodyCharset` プロパティは、<!-- REF #transporter.bodyCharset.Summary -->  メール本文で使用される文字セットとエンコーディング<!-- END REF -->を格納します。

**とりうる値:**

| 定数                       | 値                                                                                           | 説明                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) & Quoted-printable 、それも不可なら UTF-8 & Quoted-printable</li><li>*bodyCharset*: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) & 7-bit、それも不可なら UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                       |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | *headerCharset* &amp; *bodyCharset*: 可能なら US-ASCII、それが不可なら UTF-8 &amp; Quoted-printable (**デフォルト値**)                                                                  |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | *headerCharset* &amp; *bodyCharset*: 可能な場合は US-ASCII、それ以外は UTF-8 &amp; base64                                                                                                            |

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->

## .connectionTimeOut

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->**.connectionTimeOut** : Integer<!-- END REF -->

#### 説明

`.connectionTimeOut` プロパティは、<!-- REF #transporter.connectionTimeOut.Summary -->サーバー接続の確立までに待機する最長時間 (秒単位)<!-- END REF -->を格納します。 `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される `server` オブジェクトにおいて、 このプロパティが指定されなかった場合のデフォルトは 30 です。

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->

## .headerCharset

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #transporter.headerCharset.Syntax -->**.headerCharset** : Text<!-- END REF -->

#### 説明

`.headerCharset` プロパティは、<!-- REF #transporter.headerCharset.Summary -->メールヘッダーで使用される文字セットとエンコーディング<!-- END REF -->を格納します。 ヘッダーにはメールの次の要素を含みます:

- 件名
- 添付ファイル名
- メール名

**とりうる値:**

| 定数                       | 値                                                                                           | 説明                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) & Quoted-printable 、それも不可なら UTF-8 & Quoted-printable</li><li>*bodyCharset*: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) & 7-bit、それも不可なら UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                       |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | *headerCharset* & *bodyCharset*: 可能なら US-ASCII、それが不可なら UTF-8 & Quoted-printable (デフォルト値)                                                                              |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | *headerCharset* &amp; *bodyCharset*: 可能な場合は US-ASCII、それ以外は UTF-8 &amp; base64                                                                                                            |

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->

## .host

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #transporter.host.Syntax -->**.host** : Text<!-- END REF -->

#### 説明

`.host` プロパティは、<!-- REF #transporter.host.Summary -->ホストサーバーの名前または IPアドレス<!-- END REF -->を格納します。 この情報はメール通信 (SMTP、POP3、IMAP) に使用されます。

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->

## .logFile

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #transporter.logFile.Syntax -->**.logFile** : Text<!-- END REF -->

#### 説明

`.logFile` プロパティは、 <!-- REF #transporter.logFile.Summary -->メール接続に対して定義された拡張ログファイル (あれば) へのフルパス<!-- END REF -->を格納します。 パスは、カレント Logs フォルダーを基準とした相対パス、あるいは絶対パスを指定できます。

`SET DATABASE PARAMETER` コマンドで有効化される通常のログファイルとは異なり、拡張ログファイルはすべての送信されたメールの MIMEコンテンツを保存し、サイズ制限がありません。 拡張ログファイルの詳細については、以下の章をそれぞれ参照ください:

- **SMTP 接続** - [4DSMTPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **POP3 接続** - [4DPOP3Log.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **IMAP 接続** - [4DIMAPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->

---

<!-- REF transporter.port.Desc -->

## .port

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #transporter.port.Syntax -->**.port** : Integer<!-- END REF -->

#### 説明

`.port` プロパティは、 <!-- REF #transporter.port.Summary -->メール通信に使用されるポート番号<!-- END REF -->を格納します。 `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される *server* オブジェクトにおいて、 このプロパティが指定されなかった場合に使用されるポートは次のとおりです:

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->

## .sendTimeOut

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #transporter.sendTimeOut.Syntax -->**.sendTimeOut** : Integer<!-- END REF -->

#### 説明

`.sendTimeOut` プロパティは、<!-- REF #transporter.sendTimeOut.Summary -->`.send()` 呼び出し時のタイムアウト時間 (秒単位)<!-- END REF --> を格納します。 `.sendTimeOut` プロパティが `server` オブジェクトによって設定されていない場合は、デフォルトで 100 という値が使用されます。

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->

## .user

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #transporter.user.Syntax -->**.user** : Text<!-- END REF -->

#### 説明

`.user` プロパティは、<!-- REF #transporter.user.Summary -->メールサーバーでの認証に使用されたユーザー名<!-- END REF -->を格納します。

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->

## .checkConnection()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #transporter.checkConnection().Syntax -->**.checkConnection()** : Object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->

| 引数  | 型      |                             | 説明                         |
| --- | ------ | :-------------------------: | -------------------------- |
| 戻り値 | Object | <- | transporter オブジェクト接続のステータス |

<!-- END REF -->

#### 説明

`.checkConnection()` 関数は、<!-- REF #transporter.checkConnection().Summary -->`transporter` オブジェクトが保存する情報を使用して接続をチェックします<!-- END REF -->。必要なら再接続をし、そのステータスを返します。 この関数を使用して、ユーザーから提供された値が有効かどうかを検証することができます。

#### 返されるオブジェクト

この関数はメールサーバーにリクエストを送信し、メールステータスを表すオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ      |                                                                                              | 型          | 説明                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------- |
| success    |                                                                                              | boolean    | チェックが成功した場合には true、それ以外は false                                                        |
| status     |                                                                                              | number     | (SMTPのみ) メールサーバーから返されたコード (メール処理に関係ない問題の場合には 0) |
| statusText |                                                                                              | テキスト       | メールサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー                                     |
| errors     |                                                                                              | collection | 4Dエラースタック (メールサーバーレスポンスが受信できた場合には返されません)                           |
|            | \[ ].errCode            | number     | 4Dエラーコード                                                                              |
|            | \[ ].message            | テキスト       | 4Dエラーの詳細                                                                              |
|            | \[ ].componentSignature | テキスト       | エラーを返した内部コンポーネントの署名                                                                   |

<!-- END REF -->
