---
id: imapTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.


### IMAP Transporter オブジェクト

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.addFlags().Syntax -->](#addflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.addFlags().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.append().Syntax -->](#append)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.append().Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.expunge().Syntax -->](#expunge)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getBoxList().Syntax -->](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMails().Syntax -->](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.move().Syntax -->](#move)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.move().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.numToID().Syntax -->](#numToID)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.removeFlags().Syntax -->](#removeflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.removeFlags().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.searchMails().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.selectBox().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



## IMAP New transporter

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->
**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF imapTransporterClass.IMAP New transporter.Params -->
| 参照     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter | <- | [IMAP transporter オブジェクト](#imap-transporter-オブジェクト) |
<!-- END REF -->


#### 説明

`IMAP New transporter` コマンドは、*server* 引数の指定に応じて <!-- REF #_command_.IMAP New transporter.Summary -->新規の IMAP接続を設定します<!-- END REF --> 。戻り値は、新しい *IMAP transporter* オブジェクトです。 The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:

| *server*                                                                                                                                                                                                                                                                                                                                                           | Default value (if omitted)                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                               |
| .**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[IMAP transporter](#imap-transporter-object)* object. | none                                                                |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Summary -->| 300                                                                 |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                         |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| none                                                                |
| .**password** : Text<p>User password for authentication on the server. Not returned in *[IMAP transporter](#imap-transporter-object)* object.                                                                                                                                                                                              | none                                                                |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| none                                                                |
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.


#### 戻り値

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.
> The IMAP connection is automatically closed when the transporter object is destroyed.

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


## 4D.IMAPTransporter.new()


<!-- REF #4D.IMAPTransporter.new().Syntax -->
**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->
| 参照     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter | <- | [IMAP transporter オブジェクト](#imap-transporter-オブジェクト) |
<!-- END REF -->

#### 説明

`4D.IMAPTransporter.new()` 関数は、 <!-- REF #4D.IMAPTransporter.new().Summary -->新規の `4D.IMAPTransporter`型オブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`IMAP New transporter`](#imap-new-transporter) コマンドと同一です。
 
<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->


<!-- REF imapTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #imapTransporterClass.addFlags().Syntax -->
**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.addFlags().Params -->
| 参照       | タイプ    |    | 説明                                                                                                        |
| -------- | ------ |:--:| --------------------------------------------------------------------------------------------------------- |
| msgIDs   | コレクション | -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br> テキスト: メッセージの固有ID<br> 倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | オブジェクト | -> | 追加するキーワードフラグ                                                                                              |
| 戻り値      | オブジェクト | <- | addFlags処理のステータス                                                                                          |
<!-- END REF -->


#### 説明

`.addFlags()` 関数は、 <!-- REF #imapTransporterClass.addFlags().Summary -->`msgIDs` のメッセージに対して、`keywords` で指定したフラグを追加します<!-- END REF -->。

In the `msgIDs` parameter, you can pass either:

*   a *collection* containing the unique IDs of specific messages or
*   the unique ID (*text*) of a single message or
*   the following constant (*longint*) for all messages in the selected mailbox:

    | 定数       | 結果 | 説明                                          |
    | -------- | -- | ------------------------------------------- |
    | IMAP all | 1  | Select all messages in the selected mailbox |

The `keywords` parameter lets you pass an object with keyword values for specific flags to add to `msgIDs`. You can pass any of the following keywords:

| 参照        | タイプ | 説明                                |
| --------- | --- | --------------------------------- |
| $draft    | ブール | メッセージに "draft" フラグを追加するには true    |
| $seen     | ブール | メッセージに "seen" フラグを追加するには true     |
| $flagged  | ブール | メッセージに "flagged" フラグを追加するには true  |
| $answered | ブール | メッセージに "answered" フラグを追加するには true |
| $deleted  | ブール | メッセージに "deleted" フラグを追加するには true  |
> * false値は無視されます。
> * キーワードフラグの解釈は、メールクライアントごとに異なる可能性があります。


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |


#### 例題

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// transporter を作成します
$transporter:=IMAP New transporter($options)

// メールボックスを選択します
$boxInfo:=$transporter.selectBox("INBOX")

// INBOXの全メッセージを既読に設定します
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.addFlags(IMAP all;$flags)
```

<!-- END REF -->


<!-- REF imapTransporterClass.append().Desc -->
## .append()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #imapTransporterClass.append().Syntax -->
**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.append().Params -->
| 参照             | タイプ    |    | 説明                      |
| -------------- | ------ |:--:| ----------------------- |
| mailObj        | オブジェクト | -> | Email オブジェクト            |
| destinationBox | テキスト   | -> | Emailオブジェクトを受信するメールボックス |
| options        | オブジェクト | -> | 文字セット情報を格納したオブジェクト      |
| 戻り値            | オブジェクト | <- | delete処理のステータス          |
<!-- END REF -->


#### 説明

`.append()` 関数は、 <!-- REF #imapTransporterClass.append().Summary -->`destinationBox` に指定したメールボックスに、`mailObj` のメールを追加します<!-- END REF -->。

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](emails.html#email-object).  The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. If omitted, the current mailbox is used.

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. 次のプロパティを含みます:

| プロパティ         | タイプ  | 説明                                                                                                                                                                             |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| headerCharset | テキスト | Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values: See possible charsets table below |
| bodyCharset   | テキスト | Charset and encoding used for the html and text body contents of the email. Possible values: See possible charsets table below                                                 |

Possible charsets:

| 定数                       | 結果                             | 説明                                                                                                        |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                 |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                 |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & base64                               |


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |


#### 例題

To save an email in the Drafts mailbox:

```4d
var $settings; $status; $msg; $imap: Object

$settings:=New object("host"; "domain.com"; "user"; "xxxx"; "password"; "xxxx"; "port"; 993)

$imap:=IMAP New transporter($settings)

$msg:=New object
$msg.from:="xxxx@domain.com"
$msg.subject:="Lorem Ipsum"
$msg.textBody:="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
$msg.keywords:=New object
$msg.keywords["$seen"]:=True // メッセージに既読フラグをつけます
$msg.keywords["$draft"]:=True // // メッセージに下書きフラグをつけます

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->









<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->





<!-- INCLUDE transporter.checkConnection().Desc -->



## .checkConnectionDelay

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.checkConnectionDelay.Syntax -->
**.checkConnectionDelay** : Integer<!-- END REF -->


#### 説明

`.checkConnectionDelay` 関数は、 <!-- REF #imapTransporterClass.checkConnectionDelay.Summary -->サーバー接続をチェックするまでの最長時間 (秒単位)<!-- END REF -->を格納します。  If this time is exceeded between two method calls, the connection to the server will be checked. By default, if the property has not been set in the *server* object, the value is 300.
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless. 



<!-- INCLUDE transporter.connectionTimeOut.Desc -->



<!-- REF imapTransporterClass.copy().Desc -->
## .copy()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.copy().Syntax -->
**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.copy().Params -->
| 参照             | タイプ    |    | 説明                              |
| -------------- | ------ |:--:| ------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | テキスト   | -> | メッセージのコピー先のメールボックス              |
| 戻り値            | オブジェクト | <- | copy処理のステータス                    |
<!-- END REF -->


#### 説明

`.copy()` 関数は、 <!-- REF #imapTransporterClass.copy().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へとコピーします<!-- END REF -->。

以下のものを渡すことができます:

- in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to copy, or
- in the *allMsgs* parameter, the `IMAP all` constant (integer) to copy all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the copies of messages will be placed.


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |




#### 例題 1

選択されたメッセージをコピーします:


```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  //  メッセージの固有ID のコレクションを取得します
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // 見つかったメッセージを "documents" メールボックスへコピーします
 $status:=$transporter.copy($mailIds;"documents")
```

#### 例題 2

カレントメールボックスの全メッセージをコピーします:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // 全メッセージを "documents" メールボックスへコピーします
 $status:=$transporter.copy(IMAP all;"documents")
```

<!-- END REF -->



<!-- REF imapTransporterClass.delete().Desc -->
## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.delete().Syntax -->
**.delete**( *msgsIDs* : Collection ) : Object<br>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.delete().Params -->
| 参照      | タイプ    |    | 説明                              |
| ------- | ------ |:--:| ------------------------------- |
| msgsIDs | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| 戻り値     | オブジェクト | <- | delete処理のステータス                  |
<!-- END REF -->


#### 説明

`.delete()` 関数は、 <!-- REF #imapTransporterClass.delete().Summary -->`msgsIDs` または `allMsgs` が指定するメッセージに対して "削除済み" フラグを設定します<!-- END REF -->。

以下のものを渡すことができます:

- in the `msgsIDs` parameter, a collection containing the unique IDs of the specific messages to delete, or
- in the `allMsgs` parameter, the `IMAP all` constant (integer) to delete all messages in the selected mailbox.

Executing this function does not actually remove messages. Messages with the "delete" flag can still be found by the [.searchMails()](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |




#### 例題 1

選択されたメッセージを削除します:


```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Inbox")

  // メッセージの固有ID のコレクションを取得します
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // 選択されたメッセージを削除します
 $status:=$transporter.delete($mailIds)
```

#### 例題 2

カレントメールボックスの全メッセージを削除します:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Junk Email")

  // カレントメールボックスの全メッセージを削除します
 $status:=$transporter.delete(IMAP all)
```

<!-- END REF -->


<!-- REF imapTransporterClass.expunge().Desc -->
## .expunge()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #imapTransporterClass.expunge().Syntax -->
**.expunge()** : Object<!-- END REF -->

<!-- REF imapTransporterClass.expunge().Params -->
| 参照  | タイプ    |    | 説明              |
| --- | ------ |:--:| --------------- |
| 戻り値 | オブジェクト | <- | expunge処理のステータス |
<!-- END REF -->

#### 説明

`.expunge()` 関数は、 <!-- REF #imapTransporterClass.expunge().Summary -->"deleted" フラグがつけられたメッセージをすべてIMAP メールサーバーから削除します<!-- END REF --> 。"deleted" フラグは [`.delete()`](#delete) または [`.addFlags()`](#addflags) 関数によって設定可能です。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |


#### 例題

```4d
var $options;$transporter;$boxInfo;$status : Object
var $ids : Collection

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// transporter を作成します
$transporter:=IMAP New transporter($options)

// メールボックスを選択します
$boxInfo:=$transporter.selectBox("INBOX")

// INBOX の既読メッセージに削除フラグを立てます
$ids:=$transporter.searchMails("SEEN")
$status:=$transporter.delete($ids)

// "deleted" フラグがついたメッセージをすべて消去します
$status:=$transporter.expunge()
```

<!-- END REF -->


<!-- REF imapTransporterClass.getBoxInfo().Desc -->
## .getBoxInfo()

<details><summary>履歴</summary>
| バージョン  | 内容        |
| ------ | --------- |
| v18 R5 | name が任意に |
| v18 R4 | 追加        |
</details>

<!-- REF #imapTransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxInfo().Params -->
| 参照   | タイプ    |    | 説明             |
| ---- | ------ |:--:| -------------- |
| name | テキスト   | -> | メールボックスの名称     |
| 戻り値  | オブジェクト | <- | boxInfo オブジェクト |
<!-- END REF -->


#### 説明

`.getBoxInfo()` 関数は、 <!-- REF #imapTransporterClass.getBoxInfo().Summary -->*name* が指定するメールボックスに対応する `boxInfo` オブジェクトを返します<!-- END REF -->。 This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.


**返されるオブジェクト**

The `boxInfo` object returned contains the following properties:

| プロパティ      | タイプ    | 説明                                                                  |
| ---------- | ------ | ------------------------------------------------------------------- |
| name       | text   | メールボックスの名称                                                          |
| mailCount  | number | Number of messages in the mailbox                                   |
| mailRecent | number | Number of messages with the "recent" flag (indicating new messages) |



#### 例題

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX には "+String($info.mailRecent)+" 件の最近のメールがあります。")
```

<!-- END REF -->




<!-- REF imapTransporterClass.getBoxList().Desc -->
## .getBoxList()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getBoxList().Syntax -->
**.getBoxList()** : Collection<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxList().Params -->
| 参照  | タイプ    |    | 説明                    |
| --- | ------ |:--:| --------------------- |
| 戻り値 | コレクション | <- | mailbox オブジェクトのコレクション |
<!-- END REF -->


#### 説明

`.getBoxList()` 関数は、 <!-- REF #imapTransporterClass.getBoxList().Summary -->利用可能なメールボックスの情報を mailbox オブジェクトのコレクションとしてを返します<!-- END REF -->。 This function allows you to locally manage the list of messages located on the IMAP mail server.

#### 戻り値

Each object of the returned collection contains the following properties:

| プロパティ            | タイプ     | 説明                                                                                                                   |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | メールボックスの名称                                                                                                           |
| \[].selectable  | boolean | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>               |
| \[].inferior    | boolean | Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul> |
| \[].interesting | boolean | Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>                      |


If the account does not contain any mailboxes, an empty collection is returned.
> * If there is no open connection, `.getBoxList()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.


#### 例題


```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("新規メールが届いています: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->



<!-- REF imapTransporterClass.getDelimiter().Desc -->
## .getDelimiter()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getDelimiter().Syntax -->
**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #imapTransporterClass.getDelimiter().Params -->
| 参照  | タイプ  |    | 説明      |
| --- | ---- |:--:| ------- |
| 戻り値 | テキスト | <- | 階層区切り文字 |
<!-- END REF -->


#### 説明

`.getDelimiter()` 関数は、 <!-- REF #imapTransporterClass.getDelimiter().Summary -->メールボックス名で階層レベルを区切るのに使用される文字を返します<!-- END REF -->。

この区切り文字は以下のように使用することができます:

*   下層レベルのメールボックスを作成する
*   メールボックスの階層内での上層・下層レベルを検索する


#### 戻り値

メールボックス名の区切り文字
> * If there is no open connection, `.getDelimiter()` will open a connection.
> * If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.



#### 例題


```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("新規メールが届いています: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->



<!-- REF imapTransporterClass.getMail().Desc -->
## .getMail()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getMail().Params -->
| 参照        | タイプ    |    | 説明                                               |
| --------- | ------ |:--:| ------------------------------------------------ |
| msgNumber | 整数     | -> | メッセージのシーケンス番号                                    |
| msgID     | テキスト   | -> | Unique ID of the message                         |
| options   | オブジェクト | -> | メッセージ管理オプション                                     |
| 戻り値       | オブジェクト | <- | [Email オブジェクト](emailObjectClass.md#email-オブジェクト) |
<!-- END REF -->


#### 説明

`.getMail()` 関数は、 <!-- REF #imapTransporterClass.getMail().Summary -->`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメールを `Email` オブジェクトとして返します<!-- END REF -->。 This function allows you to locally handle the email contents.

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. The following properties are available:

| プロパティ      | タイプ     | 説明                                                                                                                          |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | If True, the message is marked as "seen" in the mailbox. If False, the message is not marked as "seen". Default value: True |
| withBody   | boolean | Pass True to return the body of the message. If False, only the message header is returned. Default value: True             |
> * The function generates an error and returns **Null** if *msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> * If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.


#### 戻り値

`.getMail()` returns an [`Email` object](emailObjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

#### 例題

ID = 1のメッセージを取得します:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  // transporter を作成します
 $transporter:=IMAP New transporter($server)

  //メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Inbox")

  // ID = 1 の Emailオブジェクトを取得します
 $mail:=$transporter.getMail(1)
```

<!-- END REF -->



<!-- REF imapTransporterClass.getMails().Desc -->
## .getMails()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.getMails().Syntax -->
**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getMails().Params -->
| 参照       | タイプ    |    | 説明                                                       |
| -------- | ------ |:--:| -------------------------------------------------------- |
| ids      | コレクション | -> | メッセージID のコレクション                                          |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号                                          |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号                                         |
| options  | オブジェクト | -> | メッセージ管理オプション                                             |
| 戻り値      | オブジェクト | <- | 次のコレクションを格納したオブジェクト:<br><ul><li>[Email オブジェクト](emailObjectClass.md#email-オブジェクト) のコレクション</li><li>見つからなかったメッセージの ID または番号のコレクション</li></ul> |
<!-- END REF -->


#### 説明

`.getMails()` 関数は、 <!-- REF #imapTransporterClass.getMails().Summary -->`Email` オブジェクトのコレクションを格納したオブジェクトを返します<!-- END REF -->。

**第一シンタックス:**

***.getMails( ids { ; options } ) -> result***

The first syntax allows you to retrieve messages based on their IDs.

In the *ids* parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional *options* parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**第二シンタックス:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

The second syntax allows you to retrieve messages based on a sequential range. The values passed represent the position of the messages in the mailbox.

In the *startMsg* parameter, pass an *integer* value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an *integer* value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional *options* parameter allows you to define the parts of the messages to be returned.

**オプション**

| プロパティ      | タイプ | 説明                                                                                                                                        |
| ---------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | ブール | If True, the specified messages are marked as "seen" in the mailbox. If False, the messages are not marked as "seen". Default value: True |
| withBody   | ブール | Pass True to return the body of the specified messages. If False, only the message headers are returned. Default value: True              |
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> * If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).


#### 戻り値

`.getMails()` returns an object containing the following collections:


| プロパティ    | タイプ    | 説明                                                                                                                                 |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| list     | コレクション | Collection of [`Email` objects](emailObjectClass.md#email-object). If no Email objects are found, an empty collection is returned. |
| notFound | コレクション | Collection of:<br><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found.                       |


#### 例題

You want to retrieve the 20 most recent emails without changing their "seen" status:

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter 

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
        // 直近20件のメッセージのヘッダーを、"既読" にせずに取得します
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
        New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
        // ...
    End for each
 End if
```

<!-- END REF -->



<!-- REF imapTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #imapTransporterClass.getMIMEAsBlob().Params -->
| 参照         | タイプ  |    | 説明                                                            |
| ---------- | ---- |:--:| ------------------------------------------------------------- |
| msgNumber  | 整数   | -> | メッセージのシーケンス番号                                                 |
| msgID      | テキスト | -> | Unique ID of the message                                      |
| updateSeen | ブール  | -> | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 |
| 戻り値        | BLOB | <- | メールサーバーから返された MIME文字列の BLOB                                   |
<!-- END REF -->



#### 説明

`.getMIMEAsBlob()` 関数は、 <!-- REF #imapTransporterClass.getMIMEAsBlob().Summary -->`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します<!-- END REF -->。

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. 以下のものを渡すことができます:

*   **True** - to mark the message as "seen" (indicating the message has been read)
*   **False** - to leave the message's "seen" status untouched
> * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.


#### 戻り値

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](emailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


#### 例題


```4d
 var $server : Object
 var $boxInfo : Variant
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  // transporter を作成します
 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("Inbox")

  // BLOB を取得します
 $blob:=$transporter.getMIMEAsBlob(1)
```

<!-- END REF -->



<!-- INCLUDE transporter.host.Desc -->




<!-- INCLUDE transporter.logFile.Desc -->



<!-- REF imapTransporterClass.move().Desc -->
## .move()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.move().Syntax -->
**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.move().Params -->
| 参照             | タイプ    |    | 説明                              |
| -------------- | ------ |:--:| ------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | テキスト   | -> | メッセージの移動先のメールボックス               |
| 戻り値            | オブジェクト | <- | move処理のステータス                    |
<!-- END REF -->


#### 説明

`.move()` 関数は、 <!-- REF #imapTransporterClass.move().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へと移動します<!-- END REF -->。

以下のものを渡すことができます:

- in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to move, or
- in the *allMsgs* parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |




#### 例題 1

選択されたメッセージを移動します:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // メッセージの固有IDのコレクションを取得します
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // カレントメールボックス内で見つかったメッセージを "documents" メールボックスに移動します
 $status:=$transporter.move($mailIds;"documents")
```

#### 例題 2

カレントメールボックスの全メッセージを移動します:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // カレントメールボックスの全メッセージを "documents" メールボックスに移動します
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->



<!-- REF imapTransporterClass.numToID().Desc -->
## .numToID()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.numToID().Syntax -->
**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #imapTransporterClass.numToID().Params -->
| 参照       | タイプ    |    | 説明               |
| -------- | ------ |:--:| ---------------- |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号  |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号 |
| 戻り値      | コレクション | <- | 固有ID のコレクション     |
<!-- END REF -->


#### 説明

`.numToID()` 関数は、現在選択されているメールボックスにおいて、 <!-- REF #imapTransporterClass.numToID().Summary -->*startMsg* および *endMsg* で指定された連続した範囲のメッセージのシーケンス番号を IMAP固有IDへと変換します<!-- END REF --> 。

In the *startMsg* parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.


#### 戻り値

メソッドは文字列 (固有ID) のコレクションを返します。

#### 例題


```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  // メールボックスを選択します
 $boxInfo:=$transporter.selectBox("inbox")

  // 最も古い 5通のメッセージID を取得します
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  // カレントメールボックスからメッセージを削除します
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->


<!-- REF imapTransporterClass.removeFlags().Desc -->
## .removeFlags()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #imapTransporterClass.removeFlags().Syntax -->
**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.removeFlags().Params -->
| 参照       | タイプ    |    | 説明                                                                                                        |
| -------- | ------ |:--:| --------------------------------------------------------------------------------------------------------- |
| msgIDs   | コレクション | -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br> テキスト: メッセージの固有ID<br> 倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | オブジェクト | -> | 削除するキーワードフラグ                                                                                              |
| 戻り値      | オブジェクト | <- | removeFlags処理のステータス                                                                                       |
<!-- END REF -->


#### 説明

`.removeFlags()` 関数は、 <!-- REF #imapTransporterClass.removeFlags().Summary -->`msgIDs` のメッセージに対して、`keywords` で指定したフラグを削除します<!-- END REF -->。

In the `msgIDs` parameter, you can pass either:

*   a *collection* containing the unique IDs of specific messages or
*   the unique ID (*text*) of a single message or
*   the following constant (*longint*) for all messages in the selected mailbox:

    | 定数       | 結果 | 説明                                          |
    | -------- | -- | ------------------------------------------- |
    | IMAP all | 1  | Select all messages in the selected mailbox |

The `keywords` parameter lets you pass an object with keyword values for specific flags to remove from `msgIDs`. You can pass any of the following keywords:

| 参照        | タイプ | 説明                                |
| --------- | --- | --------------------------------- |
| $draft    | ブール | メッセージの "draft" フラグを削除するには true    |
| $seen     | ブール | メッセージの "seen" フラグを削除するには true     |
| $flagged  | ブール | メッセージの "flagged" フラグを削除するには true  |
| $answered | ブール | メッセージの "answered" フラグを削除するには true |
| $deleted  | ブール | メッセージの "deleted" フラグを削除するには true  |

false値は無視されます。


**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 説明                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |


#### 例題

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// transporter を作成します
$transporter:=IMAP New transporter($options)

// メールボックスを選択します
$boxInfo:=$transporter.selectBox("INBOX")

// INBOX の全メッセージを未読にします
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```

<!-- END REF -->



<!-- INCLUDE transporter.port.Desc -->


<!-- REF imapTransporterClass.searchMails().Desc -->
## .searchMails()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #imapTransporterClass.searchMails().Syntax -->
**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #imapTransporterClass.searchMails().Params -->
| 参照             | タイプ    |    | 説明             |
| -------------- | ------ |:--:| -------------- |
| searchCriteria | テキスト   | -> | 検索条件           |
| 戻り値            | コレクション | <- | メッセージ番号のコレクション |
<!-- END REF -->


#### 説明

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

`.searchMails()` 関数は、 <!-- REF #imapTransporterClass.searchMails().Summary -->カレントメールボックスにおいて *searchCriteria* の検索条件に合致するメッセージを検索します<!-- END REF -->。 *searchCriteria* consists of one or more search keys.

*searchCriteria* is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. A search key may be a single or multiple items. たとえば:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Matching is usually not case-sensitive

- If the *searchCriteria* is a null string, the search will be equivalent to a “select all”.
- If the *searchCriteria* includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```
... returns all messages with \Flagged flag set AND sent by Smith.
- You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```
... returns all messages with \Seen flag set OR \Flagged flag set

```
searchCriteria = NOT SEEN
```
... returns all messages with \Seen flag not set.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```
... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```
... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

As concerns the last two examples, notice that the result of the search is different when you remove the parentheses of the first search key list.

- The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the *searchCriteria* string. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands). By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```
... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.


#### Search value types

Search-keys may request the value to search for:

- **Search-keys with a date value**: the date is a string that must be formatted as follows: *date-day+"-"+date-month+"-"+date-year* where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters). Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

- **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted. Example: `searchCriteria = FROM "SMITH"` For all search keys that use strings, a message matches the key if the string is a substring of the field. Matching is not case-sensitive.

- **Search-keys with a field-name value**: the field-name is the name of a header field. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive. Examples: `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages. `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set. `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.


#### Authorized search-keys

**ALL**: All messages in the mailbox.  
**ANSWERED**: Messages with the \Answered flag set.  
**UNANSWERED**: Messages that do not have the \Answered flag set.  
**DELETED**: Messages with the \Deleted flag set.  
**UNDELETED**: Messages that do not have the \Deleted flag set.  
**DRAFT**: Messages with the \Draft flag set.  
**UNDRAFT**: Messages that do not have the \Draft flag set.  
**FLAGGED**: Messages with the \Flagged flag set.  
**UNFLAGGED**: Messages that do not have the \Flagged flag set.  
**RECENT**: Messages that have the \Recent flag set.  
**OLD**: Messages that do not have the \Recent flag set.  
**SEEN**: Messages that have the \Seen flag set.  
**UNSEEN**: Messages that do not have the \Seen flag set.  
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.  
**KEYWORD** <flag>: Messages with the specified keyword set.  
**UNKEYWORD** <flag>: Messages that do not have the specified keyword set.  
**BEFORE** <date>: Messages whose internal date is earlier than the specified date.  
**ON** <date>: Messages whose internal date is within the specified date.  
**SINCE** <date>: Messages whose internal date is within or later than the specified date.  
**SENTBEFORE** <date>: Messages whose Date header is earlier than the specified date.  
**SENTON** <date>: Messages whose Date header is within the specified date.  
**SENTSINCE** <date>: Messages whose Date header is within or later than the specified date.  
**TO** <string>: Messages that contain the specified string in the TO header.  
**FROM** <string>: Messages that contain the specified string in the FROM header.  
**CC** <string>: Messages that contain the specified string in the CC header.  
**BCC** <string>: Messages that contain the specified string in the BCC header.  
**SUBJECT** <string>: Messages that contain the specified string in the Subject header.  
**BODY** <string>: Messages that contain the specified string in the message body.  
**TEXT** <string>: Messages that contain the specified string in the header or in the message body.  
**HEADER** <field-name> <string>: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
**UID** <message UID>: Messages with unique identifiers corresponding to the specified unique identifier set.  
**LARGER** <n>: Messages with a size larger than the specified number of bytes.  
**SMALLER** <n>: Messages with a size smaller than the specified number of bytes.  
**NOT** <search-key>: Messages that do not match the specified search key.  
**OR** <search-key1> <search-key2>: Messages that match either search key.  


<!-- END REF -->


<!-- REF imapTransporterClass.selectBox().Desc -->
## .selectBox()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #imapTransporterClass.selectBox().Syntax -->
**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.selectBox().Params -->
| 参照    | タイプ    |    | 説明             |
| ----- | ------ |:--:| -------------- |
| name  | テキスト   | -> | メールボックスの名称     |
| state | 整数     | -> | メールボックスのアクセス状態 |
| 戻り値   | オブジェクト | <- | boxInfo オブジェクト |
<!-- END REF -->


#### 説明

`.selectBox()` 関数は、 <!-- REF #imapTransporterClass.selectBox().Summary -->*name* に指定したメールボックスをカレントメールボックスとして選択します<!-- END REF -->。 This function allows you to retrieve information about the mailbox.
> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional *state* parameter defines the type of access to the mailbox. The possible values are:

| 定数                    | 結果 | 説明                                                                                                                                                                    |
| --------------------- | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1  | The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.                                 |
| IMAP read write state | 0  | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value) |
> * The function generates an error and returns **Null** if name designates a non-existing mailbox.
> * If there is no open connection, `.selectBox()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**返されるオブジェクト**

The `boxInfo` object returned contains the following properties:

| プロパティ      | タイプ    | 説明                                        |
| ---------- | ------ | ----------------------------------------- |
| name       | テキスト   | メールボックスの名称                                |
| mailCount  | number | Number of messages in the mailbox         |
| mailRecent | number | Number of messages with the "recent" flag |


#### 例題


```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" // 必須
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```

<!-- END REF -->




<!-- INCLUDE transporter.user.Desc -->




<style> h2 { background: #d9ebff;}</style>








