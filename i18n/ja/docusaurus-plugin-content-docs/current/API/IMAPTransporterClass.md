---
id: IMAPTransporterClass
title: IMAPTransporter
---

`IMAPTransporter` クラスを使って、IMAP メールサーバーからメッセージを取得することができます。

### IMAP Transporter オブジェクト

IMAP Transporter オブジェクトは [IMP New transporter](#imap-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

## IMAP New transporter

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->

**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF IMAPTransporterClass.IMAP New transporter.Params -->
| 引数     | タイプ                |    | 詳細                                                                             |
| ------ | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server | Object             | -> | メールサーバー情報                                                                      |
| Result | 4D.IMAPTransporter | <- | [IMAP transporter object](#imap-transporter-object)|<!-- END REF -->

|

#### 詳細

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the *server* parameter and returns a new *transporter* object. 返された transporter オブジェクトは、通常メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                                                                                                | デフォルト値 (省略時)                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 *[IMAP transporter](#imap-transporter-オブジェクト)* オブジェクトには返されません。 | なし                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->| 300                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *必須*                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| なし                               |
| .**password** : Text<br/>User password for authentication on the server. *[IMAP transporter](#imap-transporter-オブジェクト)* オブジェクトには返されません。                                                                                                                                                                                                                           | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| なし                               |
> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。

#### Result

この関数は、[**IMAP transporter オブジェクト**](#imap-transporter-オブジェクト) を返します。 返されるプロパティはすべて **読み取り専用** です。
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

## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->

**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->
| 引数     | タイプ                |    | 詳細                                                                             |
| ------ | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server | Object             | -> | メールサーバー情報                                                                      |
| Result | 4D.IMAPTransporter | <- | [IMAP transporter object](#imap-transporter-object)|<!-- END REF -->

|

#### 詳細

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->creates and returns a new object of the `4D.IMAPTransporter` type<!-- END REF -->. .

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->

**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->
| 引数       | タイプ    |    | 詳細                                                                                                          |
| -------- | ------ |:--:| ----------------------------------------------------------------------------------------------------------- |
| msgIDs   | コレクション | -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br/> テキスト: メッセージの固有ID<br/> 倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | Object | -> | 追加するキーワードフラグ                                                                                                |
| Result   | Object | <- | addFlags処理のステータス|<!-- END REF -->

|

#### 詳細

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the `msgIDs` for the specified `keywords`<!-- END REF -->.

`msgIDs` には、以下のいずれかを渡すことができます:

* 指定するメッセージの固有ID を格納した *コレクション*
* 単一のメッセージの固有ID (*テキスト*)
* 以下の定数 (*longint*) を使用することで、選択されているメールボックスの全メッセージを指定することができます:

 | 定数       | Value | 説明                        |
 | -------- | ----- | ------------------------- |
 | IMAP all | 1     | 選択されたメールボックスの全メッセージを選択します |

`keywords` には、`msgIDs` 引数で指定したメッセージに対して追加するフラグのキーワード値を格納したオブジェクトを渡します。 次のキーワードを渡すことができます:

| 引数        | タイプ | 詳細                                            |
| --------- | --- | --------------------------------------------- |
| $draft    | ブール | メッセージに "draft" フラグを追加するには true                |
| $seen     | ブール | メッセージに "seen" フラグを追加するには true                 |
| $flagged  | ブール | True to add the "flagged" flag to the message |
| $answered | ブール | メッセージに "answered" フラグを追加するには true             |
| $deleted  | ブール | メッセージに "deleted" フラグを追加するには true              |
> * false値は無視されます。
> * キーワードフラグの解釈は、メールクライアントごとに異なる可能性があります。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
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

<!-- REF IMAPTransporterClass.append().Desc -->
## .append()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->

**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->
| 引数             | タイプ    |    | 詳細                                        |
| -------------- | ------ |:--:| ----------------------------------------- |
| mailObj        | Object | -> | Email オブジェクト                              |
| destinationBox | テキスト   | -> | Emailオブジェクトを受信するメールボックス                   |
| options        | Object | -> | 文字セット情報を格納したオブジェクト                        |
| Result         | Object | <- | append処理のステータス|<!-- END REF -->

|

#### 詳細

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

`mailObj` には、Email オブジェクトを渡します。 メールプロパティに関する包括的な詳細については、[Email オブジェクト](EmailObjectClass.md#email-オブジェクト) を参照ください。 `.append()` 関数は Email オブジェクトの `keywords` 属性内のキーワードタグをサポートします。

任意の `destinationBox` には、`mailObj` が追加されるメールボックスの名前を指定することができます。 省略した場合は、カレントメールボックスが使用されます。

任意の `options` には、メールの特定部分の文字セットやエンコーディングを定義するオブジェクトを渡すことができます。 次のプロパティを含みます:

| プロパティ         | タイプ  | 詳細                                                                                |
| ------------- | ---- | --------------------------------------------------------------------------------- |
| headerCharset | テキスト | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 取り得る値: 以下の可能な文字セットテーブルを参照ください。 |
| bodyCharset   | テキスト | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 取り得る値: 以下の可能な文字セットテーブルを参照ください。      |

使用可能な文字セット:

| 定数                       | Value                          | 説明                                                                                       |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li>bodyCharset: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul>                                                                |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 &amp; Quoted-printable</li><li>bodyCharset: ISO-8859-1 &amp; 8-bit</li></ul>                                                                |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: 可能なら US-ASCII、それが不可なら UTF-8 & Quoted-printable (**デフォルト値**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: 可能な場合は US-ASCII、それ以外は UTF-8 & base64                        |

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |

#### 例題

Drafts メールボックスにメールを保存します:

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

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->

**.checkConnectionDelay** : Integer<!-- END REF -->

#### 詳細

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  関数呼び出しの間隔がこの時間を超過する場合、サーバー接続が確認されます。 プロパティが *server* オブジェクトによって設定されていない場合は、デフォルトで 300 という値が使用されます。
> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->

**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->
| 引数             | タイプ    |    | 詳細                                      |
| -------------- | ------ |:--:| --------------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)               |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ         |
| destinationBox | テキスト   | -> | メッセージのコピー先のメールボックス                      |
| Result         | Object | <- | copy処理のステータス|<!-- END REF -->

|

#### 詳細

The `.copy()` function <!-- REF #IMAPTransporterClass.copy().Summary -->The `.getMails()` function<!-- END REF -->.

以下のものを渡すことができます:

* *msgsIDs* には、コピーするメッセージの固有ID を格納したコレクション
* *allMsgs* には、選択されているメールボックスの全メッセージをコピーするための定数 (倍長整数型):

*destinationBox* には、メッセージのコピー先メールボックスの名称をテキスト値で渡すことができます。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
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

<!-- REF IMAPTransporterClass.createBox().Desc -->
## .createBox()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->

**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->
| 引数     | タイプ    |    | 詳細                                                                  |
| ------ | ------ |:--:| ------------------------------------------------------------------- |
| name   | テキスト   | -> | 新規メールボックスの名称                                                        |
| Result | Object | <- | Status of the mailbox creation operation|<!-- END REF -->

|

#### 詳細

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. IMAPサーバーの階層区切り文字がメールボックス名内に含まれる場合、IMAPサーバーは指定のメールボックスを作成するのに必要な親階層を作成します。

たとえば、"/" が階層区切り文字として使われるサーバーにおいて、"Projects/IMAP/Doc" を作成しようとした場合:

* "Projects" & "IMAP" がすでに存在する場合は "Doc" メールボックスのみを作成します。
* “Projects” のみが存在する場合は、"IMAP" & "Doc" メールボックスを作成します。
* いずれも存在しない場合には、"Projects" & “IMAP” & "Doc" メールボックスをそれぞれ作成します。

`name` には、新しいメールボックスの名前を渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |

#### 例題

新しい “Invoices” メールボックスを作成します:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("パスワードを入力してください:")
If(OK=1)
$options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$status:=$transporter.createBox("Invoices")

If ($status.success)
ALERT("メールボックスが作成できました。")
Else
ALERT("エラー: "+$status.statusText)
End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.delete().Desc -->
## .delete()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->

**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->
| 引数      | タイプ    |    | 詳細                                                        |
| ------- | ------ |:--:| --------------------------------------------------------- |
| msgsIDs | コレクション | -> | メッセージの固有ID のコレクション (テキスト)                                 |
| allMsgs | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ                           |
| Result  | Object | <- | Status of the delete operation|<!-- END REF -->

|

#### 詳細

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->The `.removeFlags()` function<!-- END REF -->.

以下のものを渡すことができます:

* `msgsIDs` には、削除するメッセージの固有ID を格納したコレクション
* `allMsgs` には、選択されているメールボックスの全メッセージを削除するための定数 (倍長整数型):

この関数を実行しても、メールが実際に削除される訳ではありません。 "削除済み" フラグがつけられたメッセージも引き続き [.searchMails()](#searchmails) 関数によって検索可能です。 フラグがつけられたメッセージは、[`.expunge()`](#expunge) を実行したときか、別のメールボックスを選択したとき、あるいは([IMAP New transporter](#imap-new-transporter) で作成された) [transporter オブジェクト](#imap-transporter-オブジェクト) が消去されたときにのみ、IMAPサーバーから削除されます。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
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

<!-- REF IMAPTransporterClass.deleteBox().Desc -->
## .deleteBox()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->

**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->
| 引数   | タイプ  |    | 詳細             |
| ---- | ---- |:--:| -------------- |
| name | テキスト | -> | 削除するメールボックスの名称 |

|Result|Object|<-|Status of the mailbox deletion operation|<!-- END REF -->

#### 詳細

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. 存在しないメールボックス、または INBOX を削除しようとして場合には、エラーが生成されます。

`name` には、削除するメールボックスの名前を渡します。
> * 子メールボックスを持つ親メールボックスが "\Noselect" 属性を持っている場合、そのメールボックスは削除できません。
> * 削除されるメールボックス内のメッセージもすべて削除されます。
> * メールボックス削除の可否はメールサーバーに依存します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |

#### 例題

"Bills" メールボックスの階層から、"Nova Orion Industries" の子メールボックスを削除します:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// delete mailbox
$name:="Bills"+$transporter.getDelimiter()+"Nova Orion Industries"
$status:=$transporter.deleteBox($name)

If ($status.success)
 ALERT("Mailbox deletion successful!")
 Else
 ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Desc -->
## .expunge()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->

**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->
| 引数     | タイプ    |    | 詳細                                                          |
| ------ | ------ |:--:| ----------------------------------------------------------- |
| Result | Object | <- | Status of the expunge operation |<!-- END REF -->

|

#### 詳細

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
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

<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->

## .getBoxInfo()

<details><summary>履歴</summary>

| バージョン  | 内容           |
| ------ | ------------ |
| v18 R5 | *name* は任意です |

|v18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->

**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
| 引数     | タイプ    |    | 詳細                                        |
| ------ | ------ |:--:| ----------------------------------------- |
| name   | テキスト   | -> | メールボックスの名称                                |
| Result | Object | <- | boxInfo object|<!-- END REF -->

|

#### 詳細

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox *name*<!-- END REF -->. この関数は、[`.selectBox()`](#selectbox) と同じ情報を返しますが、カレントメールボックスは変えません。

任意の *name* パラメーターには、アクセスするメールボックスの名称を渡します。 この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。

*name* のメールボックスが選択不可の場合、または見つからない場合には、関数はエラーを生成し、**null** を返します。

**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ    | 詳細                                         |
| ---------- | ------ | ------------------------------------------ |
| name       | text   | メールボックスの名称                                 |
| mailCount  | number | メールボックス内のメッセージの数                           |
| mailRecent | number | (新しいメッセージであることを表す) "recent" フラグがついたメッセージの数 |

#### 例題

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX には "+String($info.mailRecent)+" 件の最近のメールがあります。")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxList().Desc -->
## .getBoxList()

<details><summary>履歴</summary>

| バージョン  | 内容                 |
| ------ | ------------------ |
| v18 R4 | 追加                 |
| v19    | `isSubscribed` を追加 |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->

**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->
| 引数         | タイプ    |    | 詳細                                                       |
| ---------- | ------ |:--:| -------------------------------------------------------- |
| parameters | Object | -> | 引数のオブジェクト                                                |
| Result     | コレクション | <- | Collection of mailbox objects|<!-- END REF -->

|

#### 詳細

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. この関数を使用すると、IMAPメールサーバー上にあるメッセージの一覧をローカルで管理することができるようになります。

任意の `parameters` パラメーターには、返されるメールボックスをフィルターするための値を格納したオブジェクトを渡すことができます。 以下のものを渡すことができます:

| プロパティ        | タイプ | 詳細                                                   |
| ------------ | --- | ---------------------------------------------------- |
| isSubscribed | ブール | <li>**True**: 購読しているメールボックスのみを返します。</li><li> **False**: すべての利用可能なメールボックスを返します</li> |

#### Result

返されるコレクションの各オブジェクトには、以下のプロパティが格納されています:

| プロパティ            | タイプ     | 詳細                                                                          |
| ---------------- | ------- | --------------------------------------------------------------------------- |
| \[].name        | text    | メールボックスの名称                                                                  |
| \[].selectable  | boolean | アクセス権でメールボックスを選択できるかどうかを表します: <ul><li>true - メールボックスは選択可能</li><li>false - メールボックスは選択不可能</li></ul>                     |
| \[].inferior    | boolean | アクセス権でメールボックス内に下の階層レベルを作成できるかどうかを表します: <ul><li>true - 下の階層レベルは作成可能</li><li>false - 下の階層レベルは作成不可能</li></ul>            |
| \[].interesting | boolean | サーバーがメールボックスに “interesting” のマーク付けをしているかどうかを表します: <ul><li>true - メールボックスはサーバーから "interesting" のマーク付けをされています。 たとえば、メールボックスには新着メッセージが入っている場合が考えられます。</li><li>false - メールボックスはサーバーから "interesting" のマーク付けをされていません。</li></ul> |

アカウントにメールボックスが一つもない場合、空のコレクションが返されます。
> * 開いている接続がない場合、`.getBoxList()` は接続を開きます。
> * 接続が指定された時間 (`IMAP New transporter` 参照) 以上に使用されなかった場合には、`.checkConnection( )` 関数が自動的に呼び出されます。

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

<!-- REF IMAPTransporterClass.getDelimiter().Desc -->
## .getDelimiter()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->

**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->
| 引数     | タイプ  |    | 詳細                                 |
| ------ | ---- |:--:| ---------------------------------- |
| Result | テキスト | <- | 階層区切り文字|<!-- END REF -->

|

#### 詳細

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

この区切り文字は以下のように使用することができます:

* 下層レベルのメールボックスを作成する
* メールボックスの階層内での上層・下層レベルを検索する

#### Result

メールボックス名の区切り文字
> * 開いている接続がない場合、`.getDelimiter()` は接続を開きます。
> * 接続が指定された時間 ([IMAP New transporter](#checkconnectiondelay) 参照) 以上に使用されなかった場合には、[`.checkConnection()`](#checkconnection) 関数が自動的に呼び出されます。

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

<!-- REF IMAPTransporterClass.getMail().Desc -->
## .getMail()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->

**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->
| 引数        | タイプ    |    | 詳細                                                                          |
| --------- | ------ |:--:| --------------------------------------------------------------------------- |
| msgNumber | 整数     | -> | メッセージのシーケンス番号                                                               |
| msgID     | テキスト   | -> | メッセージの固有ID                                                                  |
| options   | Object | -> | メッセージ管理オプション                                                                |
| Result    | Object | <- | [Email object](EmailObjectClass.md#email-object)|<!-- END REF -->

|

#### 詳細

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. この関すを使用すると、メールのコンテンツをローカルで管理できるようになります。

最初の引数として、次のいずれかを渡すことができます:

* *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
* *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *options* 引数として、メッセージの扱い方を定義する追加のオブジェクトを渡すことができます。 次のプロパティを利用することができます:

| プロパティ      | タイプ     | 詳細                                                                         |
| ---------- | ------- | -------------------------------------------------------------------------- |
| updateSeen | boolean | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | boolean | true を渡すとメッセージ本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true           |
> * *msgID* 引数が存在しないメッセージを指定した場合、関数はエラーを生成し **Null** を返します。
> * [`.selectBox()`](#selectbox) によって選択されたメールボックスがない場合、エラーが生成されます。
> * 開いている接続がない場合、`.getMail()` は [`.selectBox()`](#selectbox) で最後に指定されたメールボックスへの接続を開きます。

#### Result

`.getMail()` は、以下の IMAP特有のプロパティを持つ [`Email` オブジェクト](EmailObjectClass.md#email-オブジェクト)を返します: *id*、*receivedAt*、および *size*。

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

<!-- REF IMAPTransporterClass.getMails().Desc -->
## .getMails()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->

**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->
| 引数       | タイプ    |    | 詳細                                                                                   |
| -------- | ------ |:--:| ------------------------------------------------------------------------------------ |
| ids      | コレクション | -> | メッセージID のコレクション                                                                      |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号                                                                      |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号                                                                     |
| options  | Object | -> | メッセージ管理オプション                                                                         |
| Result   | Object | <- | 次のコレクションを格納したオブジェクト:<br/><ul><li>[Email オブジェクト](EmailObjectClass.md#email-オブジェクト) のコレクション</li><li>見つからなかったメッセージの ID または番号のコレクション</li></ul>|<!-- END REF -->

|

#### 詳細

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

**第一シンタックス:**

***.getMails( ids { ; options } ) -> result***

第一シンタックスを使用すると、メッセージID に基づいてメッセージを取得することができます。

*ids* 引数として、取得するメッセージID のコレクションを渡します。 これらの ID は [`.getMail()`](#getmail) で取得することができます。

任意の *options* 引数を渡すと、返されるメッセージのパートを定義することができます。 利用可能なプロパティについては、以下の **オプション** の表を参照ください。

**第二シンタックス:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

第二シンタックスを使用すると、連続したレンジに基づいてメッセージを取得することができます。 渡される値はメールボックス内でのメッセージの位置を表します。

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。

任意の *options* 引数を渡すと、返されるメッセージのパートを定義することができます。

**オプション**

| プロパティ      | タイプ | 詳細                                                                     |
| ---------- | --- | ---------------------------------------------------------------------- |
| updateSeen | ブール | true 時には、指定されたメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | ブール | true を渡すと指定されたメッセージの本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true |
> * [`.selectBox()`](#selectbox) によって選択されたメールボックスがない場合、エラーが生成されます。
> * 開いている接続がない場合、`.getMails()` は [`.selectBox()`](#selectbox) で最後に指定されたメールボックスへの接続を開きます。

#### Result

`.getMails()` は、以下のコレクションを格納したオブジェクトを返します。

| プロパティ    | タイプ    | 詳細                                                                                                  |
| -------- | ------ | --------------------------------------------------------------------------------------------------- |
| list     | コレクション | [`Email`](EmailObjectClass.md#email-オブジェクト) オブジェクトのコレクション。 Email オブジェクトが見つからない場合、空のコレクションが返されます。    |
| notFound | コレクション | 使用したシンタックスによって返されるものが異なります:<br/><ul><li>第一シンタックス - 指定した ID のうち、存在しなかったメッセージの ID</li><li>第二シンタックス - startMsg と endMsg の間の番号のうち、存在しなかったメッセージの番号</li></ul>すべてのメッセージが見つかった場合には、空のコレクションが返されます。 |

#### 例題

直近の 20件のメールを、"既読" ステータスを変更せずに取得します:

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
  // retrieve the headers of the last 20 messages without marking them as read
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
     New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
    // ...
    End for each
 End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->

**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->
| 引数         | タイプ  |    | 詳細                                                                               |
| ---------- | ---- |:--:| -------------------------------------------------------------------------------- |
| msgNumber  | 整数   | -> | メッセージのシーケンス番号                                                                    |
| msgID      | テキスト | -> | メッセージの固有ID                                                                       |
| updateSeen | ブール  | -> | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。                    |
| Result     | BLOB | <- | Blob of the MIME string returned from the mail server|<!-- END REF -->

|

#### 詳細

The `.copy()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->copies the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

最初の引数として、次のいずれかを渡すことができます:

* *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
* *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *updateSeen* 引数を渡すと、メールボックス内でメッセージが "既読" とマークされるかどうかを指定します。 以下のものを渡すことができます:

* **True** - メッセージは "既読" とマークされます (このメッセージが読まれたことを表します)
* **False** - to leave the message's "seen" status untouched > * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message, > * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated, > * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.
> * *msgNumber* または *msgID* 引数が存在しないメッセージを指定した場合、関数は空の BLOB を返します。
> * [`.selectBox()`](#selectbox) によって選択されたメールボックスがない場合、エラーが生成されます。
> * 開いている接続がない場合、`.getMIMEAsBlob()` は `.selectBox()` で最後に指定されたメールボックスへの接続を開きます。

#### Result

`.getMIMEAsBlob()` は `BLOB` を返します。この BLOB はデータベースにアーカイブしたり、`MAIL Convert from MIME` コマンドを使用して [`Email` オブジェクト](EmailObjectClass.md#email-object) へと変換したりすることができます。

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

<!-- REF IMAPTransporterClass.move().Desc -->
## .move()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->

**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->
| 引数             | タイプ    |    | 詳細                                                      |
| -------------- | ------ |:--:| ------------------------------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)                               |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ                         |
| destinationBox | テキスト   | -> | メッセージの移動先のメールボックス                                       |
| Result         | Object | <- | Status of the move operation|<!-- END REF -->

|

#### 詳細

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

以下のものを渡すことができます:

* *msgsIDs* には、移動するメッセージの固有ID を格納したコレクション
* *allMsgs* には、選択されているメールボックスの全メッセージを移動するための定数 (倍長整数型):

*destinationBox* には、メッセージの移動先メールボックスの名称をテキスト値で渡すことができます。

> RFC [8474](https://tools.ietf.org/html/rfc8474) に準拠している IMAPサーバーでのみ、この関数はサポートされます。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
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

<!-- REF IMAPTransporterClass.numToID().Desc -->
## .numToID()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->

**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->
| 引数       | タイプ    |    | 詳細                                                  |
| -------- | ------ |:--:| --------------------------------------------------- |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号                                     |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号                                    |
| Result   | コレクション | <- | Collection of unique IDs|<!-- END REF -->

|

#### 詳細

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg*<!-- END REF --> in the currently selected mailbox.

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。

#### Result

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

<!-- REF IMAPTransporterClass.removeFlags().Desc -->
## .removeFlags()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->

**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->
| 引数       | タイプ    |    | 詳細                                                                                                          |
| -------- | ------ |:--:| ----------------------------------------------------------------------------------------------------------- |
| msgIDs   | コレクション | -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br/> テキスト: メッセージの固有ID<br/> 倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | Object | -> | 削除するキーワードフラグ                                                                                                |
| Result   | Object | <- | Status of the removeFlags operation|<!-- END REF -->

|

#### 詳細

The `.delete()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

`msgIDs` には、以下のいずれかを渡すことができます:

* 指定するメッセージの固有ID を格納した *コレクション*
* 単一のメッセージの固有ID (*テキスト*)
* 以下の定数 (*longint*) を使用することで、選択されているメールボックスの全メッセージを指定することができます:

 | 定数       | Value | 説明                        |
 | -------- | ----- | ------------------------- |
 | IMAP all | 1     | 選択されたメールボックスの全メッセージを選択します |

`keywords` には、`msgIDs` 引数で指定したメッセージから削除するフラグのキーワード値を格納したオブジェクトを渡します。 次のキーワードを渡すことができます:

| 引数        | タイプ | 詳細                                |
| --------- | --- | --------------------------------- |
| $draft    | ブール | メッセージの "draft" フラグを削除するには true    |
| $seen     | ブール | メッセージの "seen" フラグを削除するには true     |
| $flagged  | ブール | メッセージの "flagged" フラグを削除するには true  |
| $answered | ブール | メッセージの "answered" フラグを削除するには true |
| $deleted  | ブール | メッセージの "deleted" フラグを削除するには true  |

false値は無視されます。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
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

<!-- REF IMAPTransporterClass.renameBox().Desc -->
## .renameBox()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->

**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->
| 引数          | タイプ    |    | 詳細                                                          |
| ----------- | ------ |:--:| ----------------------------------------------------------- |
| currentName | テキスト   | -> | カレントメールボックスの名称                                              |
| newName     | テキスト   | -> | 新しいメールボックス名                                                 |
| Result      | Object | <- | Status of the renaming operation|<!-- END REF -->

|

#### 詳細

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. 存在しないメールボックスの名称を変更しようとしたり、すでに使われているメールボックス名に変更しようとしたりすると、エラーが生成されます。

`currentName` には、名称変更するメールボックスの名前を渡します。

メールボックスの新しい名称は `newName` に渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |

#### 例題

“Invoices” メールボックスを “Bills” に名称変更します:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("パスワードを入力してください:")

If(OK=1) $options.host:="imap.gmail.com"

$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// メールボックスの名称変更
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("メールボックスの名称が変更されました。")
   Else
   ALERT("エラー: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF IMAPTransporterClass.searchMails().Desc -->
## .searchMails()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->

**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->
| 引数             | タイプ    |    | 詳細                                                       |
| -------------- | ------ |:--:| -------------------------------------------------------- |
| searchCriteria | テキスト   | -> | 検索条件                                                     |
| Result         | コレクション | <- | Collection of message numbers|<!-- END REF -->

|

#### 詳細

> この関数は、[IMAP プロトコル](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) の仕様に基づいています。

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given *searchCriteria* in the current mailbox<!-- END REF -->. .

*searchCriteria* はテキスト型の引数で、一つ以上の検索キー (詳細は後述の [利用可能な検索キー](#利用可能な検索キー) 参照) を格納し、検索する値を渡します (渡さない場合もあります)。 検索キーは単一または複数の項目からなります。 例:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> 文字の大小は通常区別されません。

* *searchCriteria* 引数が null 文字列の場合、検索は "すべてを選択" と同等です。
* 引数が複数の検索キーを格納している場合、それらすべてに合致する和集合 (AND) が検索結果になります。

```
searchCriteria = FLAGGED FROM "SMITH"
```

... この検索結果は \Flagged フラグが設定されていて、かつ Smith から送られたメッセージをすべて返します。

* **OR** および **NOT** 演算子を、以下のように使用することができます:

```
searchCriteria = OR SEEN FLAGGED
```

... \Seen フラグが設定されている、あるいは \Flagged フラグが設定されているメッセージをすべて返します。

```
searchCriteria = NOT SEEN
```

... \Seen フラグが設定されていないメッセージをすべて返します。

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... content-type ヘッダーが "Mixed" を格納しているもののうち、"Text" は格納していないメッセージを返します。

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... content-type ヘッダーが "e" を格納しているもののうち、Subject ヘッダーが "o"を格納していないもの、かつ content-type ヘッダーが"Mixed" でないメッセージを返します。

最後の 2例については、最初の検索キーリストのカッコを取り除いてしまうと検索結果が異なることに注意してください。

* *searchCriteria* 引数には任意の \[CHARSET] 指定を含めることができます。 これは "CHARSET" という単語の後に実際の文字コード \[CHARSET] (US ASCII, ISO-8859 など) が続きます。 これは *searchCriteria* 文字列の文字コードを指定します。 そのため、\[CHARSET] 指定を使用する場合には *searchCriteria* 文字列を指定された文字コードへと変換する必要があります (詳細については `CONVERT FROM TEXT` または `Convert to text` コマンドを参照ください)。 デフォルトでは、searchCriteria 引数に拡張された文字列が含まれていた場合には4D はそれを Quotable Printable へとエンコードします。

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... これは、検索条件に iso-8859 文字コードを使用し、必要に応じてサーバーは検索前に検索条件をこの文字コードに変換しなければならない、ということを意味します。

#### 検索する値の型について

検索キーによっては、次の型の検索値が必要となる場合があります:

* **Search-keys with a field-name value**: the field-name is the name of a header field. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

* **文字列値の検索キー**: string はあらゆる文字列を含みうるため、引用符でくくらなければなりません。 文字列が特殊文字 (スペース文字など) をまったく含まない場合には、引用符で括る必要はありません。 このような文字列を引用符でくくることは、渡した文字列値が正確に解釈されることを保証します。 Example: `searchCriteria = FROM "SMITH"` For all search keys that use strings, a message matches the key if the string is a substring of the field. 合致は文字の大小を区別しません。

* **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

* **フラグ値の検索キー**: flag は一つ以上のキーワードを (標準のフラグを含めて) 受け入れます。複数指定する場合にはスペースで区切ります。 例: `searchCriteria = KEYWORD \Flagged \Draft`

* **メッセージセット値の検索キー**: 複数のメッセージを識別します。 メッセージシーケンス番号は、1 から始まりメールボックスのメッセージの総数までの連続した番号です。 個別の番号はカンマで区切ります。コロンは、その前後の番号を含めた連続した番号を指定します。 Examples: `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages. `searchCriteria = 1:5 ANSWERED` は、メッセージシーケンス番号 1 から 5番のメッセージのうち、\Answered フラグが設定されているメッセージを検索します。 `searchCriteria= 2,4 ANSWERED` は、メッセージセレクション (メッセージ番号 2番と4番) のうち、\Answered フラグが設定されているメッセージを検索します。

#### 利用可能な検索キー

**ALL**: メールボックスの全メッセージ  
**ANSWERED**: \Answered フラグが設定されたメッセージ  
**UNANSWERED**: \Answered フラグが設定されていないメッセージ  
**DELETED**: \Deleted フラグが設定されたメッセージ  
**UNDELETED**: \Deleted フラグが設定されていないメッセージ  
**DRAFT**: \Draft フラグが設定されているメッセージ  
**UNDRAFT**: \Draft フラグが設定されていないメッセージ  
**FLAGGED**: \Flagged フラグが設定されているメッセージ  
**UNFLAGGED**: \Flagged フラグが設定されていないメッセージ  
**RECENT**: \Recent フラグが設定されているメッセージ  
**OLD**: \Recent フラグが設定されていないメッセージ  
**SEEN**: \Seen フラグが設定されているメッセージ  
**UNSEEN**: \Seen フラグが設定されていないメッセージ  
**NEW**: \Recent フラグが設定されているが \Seen フラグが設定されていないメッセージ。 This is functionally equivalent to “(RECENT UNSEEN)”.  
***KEYWORD ***flag******: Messages with the specified keyword set.  
***UNKEYWORD ***flag******: Messages that do not have the specified keyword set.  
***BEFORE ***date******: Messages whose internal date is earlier than the specified date.  
***ON ***date******: Messages whose internal date is within the specified date.  
***SINCE ***date******: Messages whose internal date is within or later than the specified date.  
***SENTBEFORE ***date******: Messages whose Date header is earlier than the specified date.  
***SENTON ***date******: Messages whose Date header is within the specified date.  
***SENTSINCE ***date******: Messages whose Date header is within or later than the specified date.  
***TO ***string******: Messages that contain the specified string in the TO header.  
***FROM ***string******: Messages that contain the specified string in the FROM header.  
***CC ***string******: Messages that contain the specified string in the CC header.  
***BCC ***string******: Messages that contain the specified string in the BCC header.  
***SUBJECT ***string******: Messages that contain the specified string in the Subject header.  
***BODY ***string******: Messages that contain the specified string in the message body.  
***TEXT ***string******: Messages that contain the specified string in the header or in the message body.  
***HEADER *field-name* ***string******: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
***UID ***message-UID******: Messages with unique identifiers corresponding to the specified unique identifier set.  
***LARGER ***n******: Messages with a size larger than the specified number of bytes.  
***SMALLER ***n******: Messages with a size smaller than the specified number of bytes.  
***NOT ***search-key******: Messages that do not match the specified search key.  
***OR *search-key1* ***search-key2******: Messages that match either search key.  

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->
## .selectBox()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->

**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->
| 引数     | タイプ    |    | 詳細                                        |
| ------ | ------ |:--:| ----------------------------------------- |
| name   | テキスト   | -> | メールボックスの名称                                |
| state  | 整数     | -> | メールボックスのアクセス状態                            |
| Result | Object | <- | boxInfo object|<!-- END REF -->

|

#### 詳細

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the *name* mailbox as the current mailbox<!-- END REF -->. この関数を使用するとメールボックスに関する情報を取得することができます。
> カレントメールボックスを変更せずに、メールボックスから情報を取得するには、[`.getBoxInfo()`](#getboxinfo) を使用します。

*name* には、アクセスするメールボックスの名前を渡します。 この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。

任意の *state* 引数を渡すと、メールボックスへのアクセスタイプを定義できます。 取りうる値は以下の通りです:

| 定数                    | Value | 説明                                                                         |
| --------------------- | ----- | -------------------------------------------------------------------------- |
| IMAP read only state  | 1     | 選択されたメールボックスは読み取り専用権限でアクセスされます。 新しいメッセージを表す "新着" フラグはそのまま変化しません。           |
| IMAP read write state | 0     | 選択されたメールボックスは読み書き可能権限でアクセスされます。 メッセージは "既読" と判断され、"新着" フラグは失われます。 (デフォルト値) |
> * *name* 引数が存在しないメールボックスを指定した場合、関数はエラーを生成し **Null** を返します。
> * 開いている接続がない場合、`.selectBox()` は接続を開きます。
> * 接続が指定された時間 (`IMAP New transporter` 参照) 以上に使用されなかった場合には、[`.checkConnection()`](#checkconnection) 関数が自動的に呼び出されます。

**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ    | 詳細                      |
| ---------- | ------ | ----------------------- |
| name       | テキスト   | メールボックスの名称              |
| mailCount  | number | メールボックス内のメッセージの数        |
| mailRecent | number | "recent" フラグがついたメッセージの数 |

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

<!-- REF IMAPTransporterClass.subscribe().Desc -->
## .subscribe()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->

**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->
| 引数     | タイプ    |    | 詳細                                                           |
| ------ | ------ |:--:| ------------------------------------------------------------ |
| name   | テキスト   | -> | メールボックスの名称                                                   |
| Result | Object | <- | Status of the subscribe operation|<!-- END REF -->

|

#### 詳細

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. .

`name` には、購読するメールボックスの名前を渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |

#### 例題

"Bills" 階層下の "Atlas Corp” メールボックスを購読します:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("パスワードを入力してください:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name)

If ($status.success)
   ALERT("メールボックスの購読に成功しました。")
   Else
   ALERT("エラー: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->
## .unsubscribe()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->

**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->
| 引数     | タイプ    |    | 詳細                                                             |
| ------ | ------ |:--:| -------------------------------------------------------------- |
| name   | テキスト   | -> | メールボックスの名称                                                     |
| Result | Object | <- | Status of the unsubscribe operation|<!-- END REF -->

|

#### 詳細

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. これにより、確認するメールボックスの数を減らせます。

`name` には、購読を解除するメールボックスの名前を渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                         | タイプ    | 詳細                                                 |
| ---------- | ----------------------- | ------ | -------------------------------------------------- |
| success    |                         | ブール    | 処理が正常に終わった場合には true、それ以外は false                    |
| statusText |                         | テキスト   | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー |
| errors     |                         | コレクション | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません)          |
|            | \[].errcode            | 数値     | 4Dエラーコード                                           |
|            | \[].message            | テキスト   | 4Dエラーの詳細                                           |
|            | \[].componentSignature | テキスト   | エラーを返した内部コンポーネントの署名                                |

#### 例題

"Bills" 階層下の "Atlas Corp” メールボックスの購読を解除します:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("パスワードを入力してください:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name)

If ($status.success)
   ALERT("メールボックスの購読を解除しました。")
   Else
   ALERT("エラー: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
