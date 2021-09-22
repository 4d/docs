---
id: SMTPTransporterClass
title: SMTPTransporter
---

`SMTPTransporter` クラスを使って、SMTP接続の設定や、*SMTP transporter* オブジェクトを介したメールの送信をおこなうことができます。



### SMTP Transporter オブジェクト

SMTP Transporter オブジェクトは [SMTP New transporter](#smtp-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:


|                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection                                                          |
| [**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server                                                                      |
| [**.bodyCharset** : Text](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;  the charset and encoding used for the body part of the email                                                                                         |
| [**.checkConnection()** : Object](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp; checks the connection using information stored in the transporter object                                                                  |
| [**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server                                                      |
| [**.headerCharset** : Text](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp; the charset and encoding used for the email header                                                                                                |
| [**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server                                                                                                                        |
| [**.keepAlive** : Boolean](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed                                                          |
| [**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection                                                                                     |
| [**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions                                                                                                                       |
| [**.send**( *mail* : Object ) : Object](#send)<p>&nbsp;&nbsp;&nbsp;&nbsp;sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object |
| [**.sendTimeOut** : Integer](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp; the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs                                                                |
| [**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server                                                                                                           |



## SMTP New transporter

<details><summary>履歴</summary>
| バージョン  | 内容                                   |
| ------ | ------------------------------------ |
| v18    | logFile プロパティを追加                     |
| v17 R5 | bodyCharset と headerCharset プロパティを追加 |
| v17 R4 | 追加                                   |
</details>

**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter
| 引数     | タイプ                |    | 説明                                                   |
| ------ | ------------------ |:--:| ---------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                            |
| 戻り値    | 4D.SMTPTransporter | <- | [SMTP transporter オブジェクト](#smtp-transporter-オブエジェクト) |


#### 説明

The `SMTP New transporter` command configures a new SMTP connection according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. 返された transporter オブジェクトは、通常メールの送信に使用されます。

> このコマンドは SMTPサーバーとの接続を開始しません。 SMTP接続は、実際には [`.send()`](#send) 関数が実行された時に開かれます。  
> 
> SMTP接続は、以下の場合に自動的に閉じられます:<br /> * [`keepAlive`](#keepalive) プロパティが true (デフォルト) の場合には、transporter オブジェクトが消去された時。 * [`keepAlive`](#keepalive) プロパティが false の場合には、各 [`.send( )`](#send) 関数が実行された後。




*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                                                                            | デフォルト値 (省略時)                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection                                                                                                                                                             | False                                 |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<p>OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 *[SMTP transporter](#smtp-transporter-オブジェクト)* オブジェクトには返されません。 | なし                                    |
| [**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server                                                                                                                                                                         | サーバーがサポートするもっともセキュアな認証モードが使用されます      |
| [**.bodyCharset** : Text](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;  the charset and encoding used for the body part of the email                                                                                                                                                                                            | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server                                                                                                                                                         | 30                                    |
| [**.headerCharset** : Text](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp; the charset and encoding used for the email header                                                                                                                                                                                                   | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server                                                                                                                                                                                                                           | *必須*                                  |
| [**.keepAlive** : Boolean](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed                                                                                                                                                             | True                                  |
| [**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection                                                                                                                                                                                        | なし                                    |
| **password** : Text<p>サーバーとの認証のためのユーザーパスワード *[SMTP transporter](#smtp-transporter-オブジェクト)* オブジェクトには返されません。                                                                                                                                                                                                                  | なし                                    |
| [**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions                                                                                                                                                                                                                          | 587                                   |
| [**.sendTimeOut** : Integer](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp; the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs                                                                                                                                                                    | 100                                   |
| [**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server                                                                                                                                                                                                               | なし                                    |



#### 戻り値

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


## 4D.SMTPTransporter.new()


**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter
| 引数     | タイプ                |    | 説明                                                   |
| ------ | ------------------ |:--:| ---------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                            |
| 戻り値    | 4D.SMTPTransporter | <- | [SMTP transporter オブジェクト](#smtp-transporter-オブエジェクト) |

#### 説明

The `4D.SMTPTransporter.new()` function creates and returns a new object of the `4D.SMTPTransporter` type. この関数の機能は、[`SMTP New transporter`](#smtp-new-transporter) コマンドと同一です。



## .acceptUnsecureConnection

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.acceptUnsecureConnection** : Boolean

#### 説明

The `.acceptUnsecureConnection` property contains **True** if 4D is allowed to establish an unencrypted connection when encrypted connection is not possible.

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
    - 995: POP3 with STARTTLS upgrade if supported by the server.




## .authenticationMode

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
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





## .bodyCharset

<details><summary>履歴</summary>
| バージョン  | 内容                |
| ------ | ----------------- |
| v18    | UTF8 base64 をサポート |
| v17 R5 | 追加                |
</details>

**.bodyCharset** : Text

#### 説明

The `.bodyCharset` property contains   the charset and encoding used for the body part of the email.

*   件名
*   添付ファイル名
*   メール名

**とりうる値:**

| 定数                       | 値                              | 説明                                                                                           |
| ------------------------ | ------------------------------ | -------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li>*bodyCharset*: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul>                                                                    |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 &amp; Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 &amp; 8-bit</li></ul>                                                                    |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: 可能なら US-ASCII、それが不可なら UTF-8 & Quoted-printable (**デフォルト値**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: 可能な場合は US-ASCII、それ以外は UTF-8 & base64                        |







## .checkConnection()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.checkConnection()** : Object
| 引数  | タイプ    |    | 説明                         |
| --- | ------ |:--:| -------------------------- |
| 戻り値 | オブジェクト | <- | transporter オブジェクト接続のステータス |


#### 説明

The `.checkConnection()` function  checks the connection using information stored in the transporter object, recreates the connection if necessary, and returns the status. この関数を使用して、ユーザーから提供された値が有効かどうかを検証することができます。


#### 返されるオブジェクト

この関数はメールサーバーにリクエストを送信し、メールステータスを表すオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ      |                          | タイプ        | 説明                                                |
| ---------- | ------------------------ | ---------- | ------------------------------------------------- |
| success    |                          | boolean    | チェックが成功した場合には true、それ以外は false                    |
| status     |                          | number     | (SMTPのみ) メールサーバーから返されたコード (メール処理に関係ない問題の場合には 0)   |
| statusText |                          | text       | メールサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                          | collection | 4Dエラースタック (メールサーバーレスポンスが受信できた場合には返されません)          |
|            | \[ ].errCode            | number     | 4Dエラーコード                                          |
|            | \[ ].message            | text       | 4Dエラーの詳細                                          |
|            | \[ ].componentSignature | text       | エラーを返した内部コンポーネントの署名                               |





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



## .connectionTimeOut

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.connectionTimeOut** : Integer


#### 説明

The `.connectionTimeOut` property contains the maximum wait time (in seconds) allowed to establish a connection to the server. `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される `server` オブジェクトにおいて、 このプロパティが指定されなかった場合のデフォルトは 30 です。








## .headerCharset

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.headerCharset** : Text

#### 説明

The `.headerCharset` property contains  the charset and encoding used for the email header. ヘッダーにはメールの次の要素を含みます:

*   件名
*   添付ファイル名
*   メール名

**とりうる値:**

| 定数                       | 値                              | 説明                                                                                       |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li>*bodyCharset*: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul>                                                                |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 &amp; Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 &amp; 8-bit</li></ul>                                                               |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: 可能なら US-ASCII、それが不可なら UTF-8 & Quoted-printable (デフォルト値) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: 可能な場合は US-ASCII、それ以外は UTF-8 & base64                    |






## .host

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.host** : Text

#### 説明

The `.host` property contains the name or the IP address of the host server. この情報はメール通信 (SMTP、POP3、IMAP) に使用されます。







## .keepAlive

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.keepAlive** : Boolean

#### 説明

The `.keepAlive` property contains **True** if the SMTP connection must be kept alive until the `transporter` object is destroyed, and **False** otherwise. `SMTP New transporter` コマンドで `transporter` オブジェクトを作成する際に使用する `server` オブジェクトにおいて、 `keepAlive` プロパティが指定されなかった場合のデフォルトは **true** です。

SMTP接続は、以下の場合に自動的に閉じられます:

*   `.keepAlive` プロパティが true (デフォルト) の場合には、`transporter` オブジェクトが消去された時。
*   `.keepAlive` プロパティが false の場合には、各 `.send( )` 関数が実行された後。






## .logFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.logFile** : Text

#### 説明

The `.logFile` property contains the path of the extended log file defined (if any) for the mail connection. パスは、カレント Logs フォルダーを基準とした相対パス、あるいは絶対パスを指定できます。

`SET DATABASE PARAMETER` コマンドで有効化される通常のログファイルとは異なり、拡張ログファイルはすべての送信されたメールの MIMEコンテンツを保存し、サイズ制限がありません。 拡張ログファイルの詳細については、以下の章をそれぞれ参照ください:

*   **SMTP 接続** - [4DSMTPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **POP3 接続** - [4DPOP3Log.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **IMAP 接続** - [4DIMAPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)









## .port

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.port** : Integer

#### 説明

The `.port` property contains  the port number used for mail transactions. `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される *server* オブジェクトにおいて、 このプロパティが指定されなかった場合に使用されるポートは次のとおりです:

*   **SMTP** - 587
*   **POP3** - 995
*   **IMAP** - 993







## .send()

<details><summary>履歴</summary>
| バージョン  | 内容             |
| ------ | -------------- |
| v17 R5 | MIMEコンテンツをサポート |
| v17 R4 | 追加             |
</details>

**.send**( *mail* : Object ) : Object
| 引数   | タイプ    |    | 説明                                           |
| ---- | ------ |:--:| -------------------------------------------- |
| mail | オブジェクト | -> | 送信する [メール](EmailObjectClass.md#email-オブジェクト) |
| 戻り値  | オブジェクト | <- | SMTP ステータス                                   |


#### 説明

The `.send()` function sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object.
> `transporter` オブジェクトは、事前に `SMTP New transporter` コマンドによって作成されている必要があります。

この関数は、SMTP接続が事前に開かれていなかった場合には、それを作成します。 `transporter` オブジェクトの `.keepAlive` プロパティが false であった場合、SMTP接続は `.send()` 実行後に自動的に閉じられます。そ例外の場合には、接続は `transporter` オブジェクトが消去されるまで開いたままになります。 詳細については、[`SMTP New transporter`](#smtp-new-transporter) コマンドの説明を参照してください。

*mail*には、送信する有効な [`Email` オブジェクト](EmailObjectClass.md#email-オブジェクト) を渡します。 メールには送信元 (メールがどこから送られるか) と送信先 (一名以上の受信者) プロパティが含まれている必要がありますが、その他のプロパティは任意です。


#### 返されるオブジェクト

この関数は、SMTP ステータスを表すオブジェクトを返します. このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ      | タイプ     | 説明                                      |
| ---------- | ------- | --------------------------------------- |
| success    | boolean | 送信に成功した場合は true、それ以外は false             |
| status     | number  | SMTPサーバーから返されたコード (メール処理に関係ない問題の場合には 0) |
| statusText | text    | SMTPから返されるステータスメッセージ                    |

SMTP 処理とは関係のない問題 (例: 必須プロパティがメールにない) が発生した場合、4D はエラーを生成します。これは、`ON ERR CALL` コマンドでインストールしたメソッドでインターセプトできます。 エラー情報を取得するには、`GET LAST ERROR STACK` コマンドを使用します。

この場合、結果のステータスオブジェクトには以下の値が含まれます:

| プロパティ      | 値                      |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |


## .sendTimeOut

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.sendTimeOut** : Integer

#### 説明
The `.sendTimeOut` property contains  the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs. `.sendTimeOut` プロパティが `server` オブジェクトによって設定されていない場合は、デフォルトで 100 という値が使用されます。






## .user

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.user** : Text

#### 説明
The `.user` property contains  the user name used for authentication on the mail server.




<style> h2 { background: #d9ebff;}</style>
