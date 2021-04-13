---
id: IMAPTransporterClass
title: IMAPTransporter
---

`IMAPTransporter` クラスを使って、IMAP メールサーバーからメッセージを取得することができます。


### IMAP Transporter オブジェクト

IMAP Transporter オブジェクトは [IMP New transporter](#imap-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numToID)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



## IMAP New transporter

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->
**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF IMAPTransporterClass.IMAP New transporter.Params -->
| 参照     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter | <- | [IMAP transporter オブジェクト](#imap-transporter-オブジェクト) |
<!-- END REF -->


#### 説明

`IMAP New transporter` コマンドは、*server* 引数の指定に応じて <!-- REF #_command_.IMAP New transporter.Summary -->新規の IMAP接続を設定します<!-- END REF --> 。戻り値は、新しい *IMAP transporter* オブジェクトです。 返された transporter オブジェクトは、通常メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                       | デフォルト値 (省略時)                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                            |
| .**accessTokenOAuth2**: Text<p>OAuth 2 認証の資格情報を表すテキスト文字列。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 *[IMAP transporter](#imap-transporter-オブジェクト)* オブジェクトには返されません。 | なし                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->| 300                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *必須*                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| なし                               |
| .**password** : Text<p>サーバーとの認証のためのユーザーパスワード *[IMAP transporter](#imap-transporter-オブジェクト)* オブジェクトには返されません。                                                                                                                                                            | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| なし                               |
> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。


#### 戻り値

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
| 参照     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter | <- | [IMAP transporter オブジェクト](#imap-transporter-オブジェクト) |
<!-- END REF -->

#### 説明

`4D.IMAPTransporter.new()` 関数は、 <!-- REF #4D.IMAPTransporter.new().Summary -->新規の `4D.IMAPTransporter`型オブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`IMAP New transporter`](#imap-new-transporter) コマンドと同一です。
 
<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->


<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->
**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->
| 参照       | タイプ    |    | 説明                                                                                                        |
| -------- | ------ |:--:| --------------------------------------------------------------------------------------------------------- |
| msgIDs   | コレクション | -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br> テキスト: メッセージの固有ID<br> 倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | オブジェクト | -> | 追加するキーワードフラグ                                                                                              |
| 戻り値      | オブジェクト | <- | addFlags処理のステータス                                                                                          |
<!-- END REF -->


#### 説明

`.addFlags()` 関数は、 <!-- REF #IMAPTransporterClass.addFlags().Summary -->`msgIDs` のメッセージに対して、`keywords` で指定したフラグを追加します<!-- END REF -->。

`msgIDs` には、以下のいずれかを渡すことができます:

*   指定するメッセージの固有ID を格納した *コレクション*
*   単一のメッセージの固有ID (*テキスト*)
*   以下の定数 (*longint*) を使用することで、選択されているメールボックスの全メッセージを指定することができます:

    | 定数       | 結果 | 説明                        |
    | -------- | -- | ------------------------- |
    | IMAP all | 1  | 選択されたメールボックスの全メッセージを選択します |

`keywords` には、`msgIDs` 引数で指定したメッセージに対して追加するフラグのキーワード値を格納したオブジェクトを渡します。 次のキーワードを渡すことができます:

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
| 参照             | タイプ    |    | 説明                      |
| -------------- | ------ |:--:| ----------------------- |
| mailObj        | オブジェクト | -> | Email オブジェクト            |
| destinationBox | テキスト   | -> | Emailオブジェクトを受信するメールボックス |
| options        | オブジェクト | -> | 文字セット情報を格納したオブジェクト      |
| 戻り値            | オブジェクト | <- | delete処理のステータス          |
<!-- END REF -->


#### 説明

`.append()` 関数は、 <!-- REF #IMAPTransporterClass.append().Summary -->`destinationBox` に指定したメールボックスに、`mailObj` のメールを追加します<!-- END REF -->。

`mailObj` には、Email オブジェクトを渡します。 メールプロパティに関する包括的な詳細については、[Email オブジェクト](emails.html#email-オブジェクト) を参照ください。  `.append()` 関数は Email オブジェクトの `keywords` 属性内のキーワードタグをサポートします。

任意の `destinationBox` には、`mailObj` が追加されるメールボックスの名前を指定することができます。 省略した場合は、カレントメールボックスが使用されます。

任意の `options` には、メールの特定部分の文字セットやエンコーディングを定義するオブジェクトを渡すことができます。 次のプロパティを含みます:

| プロパティ         | タイプ  | 説明                                                                                |
| ------------- | ---- | --------------------------------------------------------------------------------- |
| headerCharset | テキスト | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 取り得る値: 以下の可能な文字セットテーブルを参照ください。 |
| bodyCharset   | テキスト | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 取り得る値: 以下の可能な文字セットテーブルを参照ください。      |

使用可能な文字セット:

| 定数                       | 結果                             | 説明                                                                                       |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li>bodyCharset: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul>                                                                |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 &amp; Quoted-printable</li><li>bodyCharset: ISO-8859-1 &amp; 8-bit</li></ul>                                                                |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: 可能なら US-ASCII、それが不可なら UTF-8 & Quoted-printable (**デフォルト値**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: 可能な場合は US-ASCII、それ以外は UTF-8 & base64                        |


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



## .checkConnectionDelay

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->
**.checkConnectionDelay** : Integer<!-- END REF -->


#### 説明

`.checkConnectionDelay` 関数は、 <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->サーバー接続をチェックするまでの最長時間 (秒単位)<!-- END REF -->を格納します。  関数呼び出しの間隔がこの時間を超過する場合、サーバー接続が確認されます。 プロパティが *server* オブジェクトによって設定されていない場合は、デフォルトで 300 という値が使用されます。
> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。 



<!-- INCLUDE transporter.connectionTimeOut.Desc -->



<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->
**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->
| 参照             | タイプ    |    | 説明                              |
| -------------- | ------ |:--:| ------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | テキスト   | -> | メッセージのコピー先のメールボックス              |
| 戻り値            | オブジェクト | <- | copy処理のステータス                    |
<!-- END REF -->


#### 説明

`.copy()` 関数は、 <!-- REF #IMAPTransporterClass.copy().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へとコピーします<!-- END REF -->。

以下のものを渡すことができます:

- *msgsIDs* には、コピーするメッセージの固有ID を格納したコレクション
- *allMsgs* には、選択されているメールボックスの全メッセージをコピーするための定数 (倍長整数型):

*destinationBox* には、メッセージのコピー先メールボックスの名称をテキスト値で渡すことができます。


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
| 参照   | タイプ    |    | 説明                |
| ---- | ------ |:--:| ----------------- |
| name | テキスト   | -> | 新規メールボックスの名称      |
| 戻り値  | オブジェクト | <- | createBox処理のステータス |
<!-- END REF -->


#### 説明

`.createBox()` 関数は、 <!-- REF #IMAPTransporterClass.createBox().Summary -->`name` に指定した名称の新規メールボックスを作成します<!-- END REF -->。 If the IMAP server’s hierarchy separator character appears elsewhere in the mailbox name, the IMAP server will create any parent names needed to create the given mailbox.

In other words, an attempt to create "Projects/IMAP/Doc" on a server in which "/" is the hierarchy separator character will create:

*   Only the "Doc" mailbox if "Projects" & "IMAP" already exist.
*   "IMAP" & "Doc" mailboxes if only “Projects” already exists.
*   "Projects" & “IMAP” & "Doc" mailboxes, if they do not already exist.

In the `name` parameter, pass the name of the new mailbox.


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
**.delete**( *msgsIDs* : Collection ) : Object<br>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->
| 参照      | タイプ    |    | 説明                              |
| ------- | ------ |:--:| ------------------------------- |
| msgsIDs | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| 戻り値     | オブジェクト | <- | delete処理のステータス                  |
<!-- END REF -->


#### 説明

`.delete()` 関数は、 <!-- REF #IMAPTransporterClass.delete().Summary -->`msgsIDs` または `allMsgs` が指定するメッセージに対して "削除済み" フラグを設定します<!-- END REF -->。

以下のものを渡すことができます:

- `msgsIDs` には、削除するメッセージの固有ID を格納したコレクション
- `allMsgs` には、選択されているメールボックスの全メッセージを削除するための定数 (倍長整数型):

この関数を実行しても、メールが実際に削除される訳ではありません。 "削除済み" フラグがつけられたメッセージも引き続き [.searchMails()](#searchmails) 関数によって検索可能です。 フラグがつけられたメッセージは、[`.expunge()`](#expunge) を実行したときか、別のメールボックスを選択したとき、あるいは([IMAP New transporter](#imap-new-transporter) で作成された) [transporter オブジェクト](#imap-transporter-オブジェクト) が消去されたときにのみ、IMAPサーバーから削除されます。



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
| 参照   | タイプ    |    | 説明                |
| ---- | ------ |:--:| ----------------- |
| name | テキスト   | -> | 削除するメールボックスの名称    |
| 戻り値  | オブジェクト | <- | deleteBox処理のステータス |
<!-- END REF -->


#### 説明

`.deleteBox()` 関数は、 <!-- REF #IMAPTransporterClass.deleteBox().Summary -->`name` に指定した名称のメールボックスを IMAPサーバーから完全に削除します<!-- END REF -->。 Attempting to delete an INBOX or a mailbox that does not exist will generate an error.

In the `name` parameter, pass the name of the mailbox to delete.
> * The function cannot delete a mailbox that has child mailboxes if the parent mailbox has the "\Noselect" attribute.
> * All messages in the deleted mailbox will also be deleted.
> * The ability to delete a mailbox depends on the mail server.


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

"Bills" メールボックスの階層から、"Nova Orion Industries" の子メールボックスを削除します:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("パスワードを入力してください:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// delete mailbox
$name:="Bills"+$transporter.getDelimiter()+"Nova Orion Industries"
$status:=$transporter.deleteBox($name)

If ($status.success)
    ALERT("メールボックスが削除されました。")
    Else
    ALERT("エラー: "+$status.statusText)
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
| 参照  | タイプ    |    | 説明              |
| --- | ------ |:--:| --------------- |
| 戻り値 | オブジェクト | <- | expunge処理のステータス |
<!-- END REF -->

#### 説明

`.expunge()` 関数は、 <!-- REF #IMAPTransporterClass.expunge().Summary -->"deleted" フラグがつけられたメッセージをすべてIMAP メールサーバーから削除します<!-- END REF --> 。"deleted" フラグは [`.delete()`](#delete) または [`.addFlags()`](#addflags) 関数によって設定可能です。

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


<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->
## .getBoxInfo()

<details><summary>履歴</summary>
| バージョン  | 内容        |
| ------ | --------- |
| v18 R5 | name が任意に |
| v18 R4 | 追加        |
</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
| 参照   | タイプ    |    | 説明             |
| ---- | ------ |:--:| -------------- |
| name | テキスト   | -> | メールボックスの名称     |
| 戻り値  | オブジェクト | <- | boxInfo オブジェクト |
<!-- END REF -->


#### 説明

`.getBoxInfo()` 関数は、 <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->*name* が指定するメールボックスに対応する `boxInfo` オブジェクトを返します<!-- END REF -->。 この関数は、[`.selectBox()`](#selectbox) と同じ情報を返しますが、カレントメールボックスは変えません。

任意の *name* パラメーターには、アクセスするメールボックスの名称を渡します。 この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。


**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ    | 説明                                         |
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
| 参照         | タイプ    |    | 説明                    |
| ---------- | ------ |:--:| --------------------- |
| parameters | オブジェクト | -> | 引数のオブジェクト             |
| 戻り値        | コレクション | <- | mailbox オブジェクトのコレクション |
<!-- END REF -->


#### 説明

`.getBoxList()` 関数は、 <!-- REF #IMAPTransporterClass.getBoxList().Summary -->利用可能なメールボックスの情報を mailbox オブジェクトのコレクションとしてを返します<!-- END REF -->。 この関数を使用すると、IMAPメールサーバー上にあるメッセージの一覧をローカルで管理することができるようになります。

In the optional `parameters` parameter, pass an object containing values to filter the returned mailboxes. 以下のものを渡すことができます:

| プロパティ        | タイプ | 説明                                                   |
| ------------ | --- | ---------------------------------------------------- |
| isSubscribed | ブール | <li>**True** to return only subscribed mailboxes</li><li> **False** to return all available mailboxes</li> |

#### 戻り値

返されるコレクションの各オブジェクトには、以下のプロパティが格納されています:

| プロパティ            | タイプ     | 説明                                                                          |
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
| 参照  | タイプ  |    | 説明      |
| --- | ---- |:--:| ------- |
| 戻り値 | テキスト | <- | 階層区切り文字 |
<!-- END REF -->


#### 説明

`.getDelimiter()` 関数は、 <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->メールボックス名で階層レベルを区切るのに使用される文字を返します<!-- END REF -->。

この区切り文字は以下のように使用することができます:

*   下層レベルのメールボックスを作成する
*   メールボックスの階層内での上層・下層レベルを検索する


#### 戻り値

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
**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->
| 参照        | タイプ    |    | 説明                                               |
| --------- | ------ |:--:| ------------------------------------------------ |
| msgNumber | 整数     | -> | メッセージのシーケンス番号                                    |
| msgID     | テキスト   | -> | メッセージの固有ID                                       |
| options   | オブジェクト | -> | メッセージ管理オプション                                     |
| 戻り値       | オブジェクト | <- | [Email オブジェクト](EmailObjectClass.md#email-オブジェクト) |
<!-- END REF -->


#### 説明

`.getMail()` 関数は、 <!-- REF #IMAPTransporterClass.getMail().Summary -->`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメールを `Email` オブジェクトとして返します<!-- END REF -->。 この関すを使用すると、メールのコンテンツをローカルで管理できるようになります。

最初の引数として、次のいずれかを渡すことができます:

*   *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
*   *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *options* 引数として、メッセージの扱い方を定義する追加のオブジェクトを渡すことができます。 次のプロパティを利用することができます:

| プロパティ      | タイプ     | 説明                                                                         |
| ---------- | ------- | -------------------------------------------------------------------------- |
| updateSeen | boolean | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | boolean | true を渡すとメッセージ本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true           |
> * The function generates an error and returns **Null** if *msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> * If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.



#### 戻り値

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

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
**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->
| 参照       | タイプ    |    | 説明                                                       |
| -------- | ------ |:--:| -------------------------------------------------------- |
| ids      | コレクション | -> | メッセージID のコレクション                                          |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号                                          |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号                                         |
| options  | オブジェクト | -> | メッセージ管理オプション                                             |
| 戻り値      | オブジェクト | <- | 次のコレクションを格納したオブジェクト:<br><ul><li>a collection of [Email objects](EmailObjectClass.md#email-object) and</li><li>見つからなかったメッセージの ID または番号のコレクション</li></ul> |
<!-- END REF -->


#### 説明

`.getMails()` 関数は、 <!-- REF #IMAPTransporterClass.getMails().Summary -->`Email` オブジェクトのコレクションを格納したオブジェクトを返します<!-- END REF -->。

**第一シンタックス:**

***.getMails( ids { ; options } ) -> result***

第一シンタックスを使用すると、メッセージID に基づいてメッセージを取得することができます。

*ids* 引数として、取得するメッセージID のコレクションを渡します。 これらの ID は [`.getMail()`](#getmail) で取得することができます。

任意の *options* 引数を渡すと、返されるメッセージのパーツを定義することができます。 利用可能なプロパティについては、以下の **オプション** の表を参照ください。

**第二シンタックス:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

第二シンタックスを使用すると、連続したレンジに基づいてメッセージを取得することができます。 渡される値はメールボックス内でのメッセージの位置を表します。

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。

任意の *options* 引数を渡すと、返されるメッセージのパーツを定義することができます。

**オプション**

| プロパティ      | タイプ | 説明                                                                     |
| ---------- | --- | ---------------------------------------------------------------------- |
| updateSeen | ブール | true 時には、指定されたメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | ブール | true を渡すと指定されたメッセージの本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true |
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> * If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).


#### 戻り値

`.getMails()` は、以下のコレクションを格納したオブジェクトを返します。


| プロパティ | タイプ    | 説明                                                                                                       |
| ----- | ------ | -------------------------------------------------------------------------------------------------------- |
| list  | コレクション | Collection of [`Email` objects](EmailObjectClass.md#email-object). Email オブジェクトが見つからない場合、空のコレクションが返されます。 |

|notFound |Collection| Collection of:<br><ul><li>第一シンタックス - 指定した ID のうち、存在しなかったメッセージの ID</li><li>第二シンタックス - startMsg と endMsg の間の番号のうち、存在しなかったメッセージの番号</li></ul>An empty collection is returned if all messages are found.|


#### 例題

直近の 20件のメールを、"既読" ステータスを変更せずに取得します:

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



<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->
| 参照         | タイプ  |    | 説明                                                            |
| ---------- | ---- |:--:| ------------------------------------------------------------- |
| msgNumber  | 整数   | -> | メッセージのシーケンス番号                                                 |
| msgID      | テキスト | -> | メッセージの固有ID                                                    |
| updateSeen | ブール  | -> | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 |
| 戻り値        | BLOB | <- | メールサーバーから返された MIME文字列の BLOB                                   |
<!-- END REF -->




#### 説明

`.getMIMEAsBlob()` 関数は、 <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します<!-- END REF -->。

最初の引数として、次のいずれかを渡すことができます:

*   *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
*   *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *updateSeen* 引数を渡すと、メールボックス内でメッセージが "既読" とマークされるかどうかを指定します。 以下のものを渡すことができます:

*   **True** - メッセージは "既読" とマークされます (このメッセージが読まれたことを表します)
*   **False** - メッセージの "既読" ステータスは変化しません。
> * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * 開いている接続がない場合、`.getMIMEAsBlob()` は `.selectBox()` で最後に指定されたメールボックスへの接続を開きます。


#### 戻り値

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


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

**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->
| 参照             | タイプ    |    | 説明                              |
| -------------- | ------ |:--:| ------------------------------- |
| msgsIDs        | コレクション | -> | メッセージの固有ID のコレクション (テキスト)       |
| allMsgs        | 整数     | -> | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | テキスト   | -> | メッセージの移動先のメールボックス               |
| 戻り値            | オブジェクト | <- | move処理のステータス                    |
<!-- END REF -->


#### 説明

`.move()` 関数は、 <!-- REF #IMAPTransporterClass.move().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へと移動します<!-- END REF -->。

以下のものを渡すことができます:

- *msgsIDs* には、移動するメッセージの固有ID を格納したコレクション
- *allMsgs* には、選択されているメールボックスの全メッセージを移動するための定数 (倍長整数型):

*destinationBox* には、メッセージの移動先メールボックスの名称をテキスト値で渡すことができます。

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
| 参照       | タイプ    |    | 説明               |
| -------- | ------ |:--:| ---------------- |
| startMsg | 整数     | -> | 先頭メッセージのシーケンス番号  |
| endMsg   | 整数     | -> | 最後のメッセージのシーケンス番号 |
| 戻り値      | コレクション | <- | 固有ID のコレクション     |
<!-- END REF -->


#### 説明

`.numToID()` 関数は、現在選択されているメールボックスにおいて、 <!-- REF #IMAPTransporterClass.numToID().Summary -->*startMsg* および *endMsg* で指定された連続した範囲のメッセージのシーケンス番号を IMAP固有IDへと変換します<!-- END REF --> 。

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。


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


<!-- REF IMAPTransporterClass.removeFlags().Desc -->
## .removeFlags()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->
**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->
| 参照       | タイプ    |    | 説明                                                                                                        |
| -------- | ------ |:--:| --------------------------------------------------------------------------------------------------------- |
| msgIDs   | コレクション | -> | 文字列のコレクション: メッセージの固有ID (テキスト型)<br> テキスト: メッセージの固有ID<br> 倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | オブジェクト | -> | 削除するキーワードフラグ                                                                                              |
| 戻り値      | オブジェクト | <- | removeFlags処理のステータス                                                                                       |
<!-- END REF -->


#### 説明

`.removeFlags()` 関数は、 <!-- REF #IMAPTransporterClass.removeFlags().Summary -->`msgIDs` のメッセージに対して、`keywords` で指定したフラグを削除します<!-- END REF -->。

`msgIDs` には、以下のいずれかを渡すことができます:

*   指定するメッセージの固有ID を格納した *コレクション*
*   単一のメッセージの固有ID (*テキスト*)
*   以下の定数 (*longint*) を使用することで、選択されているメールボックスの全メッセージを指定することができます:

    | 定数       | 結果 | 説明                        |
    | -------- | -- | ------------------------- |
    | IMAP all | 1  | 選択されたメールボックスの全メッセージを選択します |

`keywords` には、`msgIDs` 引数で指定したメッセージから削除するフラグのキーワード値を格納したオブジェクトを渡します。 次のキーワードを渡すことができます:

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
| 参照          | タイプ    |    | 説明                |
| ----------- | ------ |:--:| ----------------- |
| currentName | テキスト   | -> | カレントメールボックスの名称    |
| newName     | テキスト   | -> | 新しいメールボックス名       |
| 戻り値         | オブジェクト | <- | renameBox処理のステータス |
<!-- END REF -->


#### 説明

`.renameBox()` 関数は、 <!-- REF #IMAPTransporterClass.renameBox().Summary -->IMAPサーバー上でメールボックスの名称を変更します<!-- END REF -->。 Attempting to rename a mailbox from a mailbox name that does not exist or to a mailbox name that already exists will generate an error.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.


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

To to rename your “Invoices” mailbox to “Bills”:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// rename mailbox
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("Mailbox renaming successful!")
   Else
   ALERT("Error: "+$status.statusText)
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
| 参照             | タイプ    |    | 説明             |
| -------------- | ------ |:--:| -------------- |
| searchCriteria | テキスト   | -> | 検索条件           |
| 戻り値            | コレクション | <- | メッセージ番号のコレクション |
<!-- END REF -->


#### 説明

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

`.searchMails()` 関数は、 <!-- REF #IMAPTransporterClass.searchMails().Summary -->カレントメールボックスにおいて *searchCriteria* の検索条件に合致するメッセージを検索します<!-- END REF -->。 *searchCriteria* 引数には、一つ以上の検索キーを格納します。

*searchCriteria* はテキスト型の引数で、一つ以上の検索キー (詳細は後述の [利用可能な検索キー](#利用可能な検索キー) 参照) を格納し、検索する値を渡します (渡さない場合もあります)。 検索キーは単一または複数の項目からなります。 たとえば:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> 文字の大小は通常区別されません。

- *searchCriteria* 引数が null 文字列の場合、検索は "すべてを選択" と同等です。
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
| 参照    | タイプ    |    | 説明             |
| ----- | ------ |:--:| -------------- |
| name  | テキスト   | -> | メールボックスの名称     |
| state | 整数     | -> | メールボックスのアクセス状態 |
| 戻り値   | オブジェクト | <- | boxInfo オブジェクト |
<!-- END REF -->


#### 説明

`.selectBox()` 関数は、 <!-- REF #IMAPTransporterClass.selectBox().Summary -->`name` に指定したメールボックスをカレントメールボックスとして選択します<!-- END REF -->。 この関数を使用するとメールボックスに関する情報を取得することができます。
> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the `name` parameter, pass the name of the mailbox to access. この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。

The optional `state` parameter defines the type of access to the mailbox. The possible values are:

| 定数                    | 結果 | 説明                                                                                                                                                                    |
| --------------------- | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1  | The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.                                 |
| IMAP read write state | 0  | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value) |
> * The function generates an error and returns **Null** if name designates a non-existing mailbox.
> * If there is no open connection, `.selectBox()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ      | タイプ    | 説明                                        |
| ---------- | ------ | ----------------------------------------- |
| name       | テキスト   | メールボックスの名称                                |
| mailCount  | number | メールボックス内のメッセージの数                          |
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
| 参照   | タイプ    |    | 説明                |
| ---- | ------ |:--:| ----------------- |
| name | テキスト   | -> | メールボックスの名称        |
| 戻り値  | オブジェクト | <- | subscribe処理のステータス |
<!-- END REF -->


#### 説明

`.subscribe()` 関数は、 <!-- REF #IMAPTransporterClass.subscribe().Summary -->IMAPサーバーの購読メールボックスとして任意のメールボックスを追加・削除します<!-- END REF -->。 As such, you can choose to narrow down a large list of available mailboxes by subscribing to those you usually want to see.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

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

To subscribe to the "Atlas Corp” mailbox in the "Bills" hierarchy:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name)

If ($status.success)
   ALERT("Mailbox subscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
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
| 参照   | タイプ    |    | 説明                  |
| ---- | ------ |:--:| ------------------- |
| name | テキスト   | -> | メールボックスの名称          |
| 戻り値  | オブジェクト | <- | unsubscribe処理のステータス |
<!-- END REF -->


#### 説明

`.unsubscribe()` 関数は、 <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->指定したメールボックスを購読メールボックスから削除します<!-- END REF -->。 This allows you reduce the number of mailboxes you usually see.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

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

To unsubscribe from the "Atlas Corp” mailbox in the "Bills" hierarchy:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name)

If ($status.success)
   ALERT("Mailbox unsubscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->




<style> h2 { background: #d9ebff;}</style>








