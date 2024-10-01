---
id: IMAPTransporterClass
title: IMAPTransporter
---

`IMAPTransporter` クラスを使って、IMAP メールサーバーからメッセージを取得することができます。

### IMAP Transporter オブジェクト

IMAP Transporter オブジェクトは [IMP New transporter](#imap-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->       |
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<br/><!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<br/><!-- INCLUDE #IMAPTransporterClass.append().Summary -->                                       |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                         |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary --> |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                            |
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<br/><!-- INCLUDE #IMAPTransporterClass.copy().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<br/><!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #IMAPTransporterClass.delete().Summary -->                                       |
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<br/><!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<br/><!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<br/><!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->                     |
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<br/><!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                   |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                          |
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<br/><!-- INCLUDE #IMAPTransporterClass.move().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)<br/><!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<br/><!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<br/><!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                   |
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)<br/><!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<br/><!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<br/><!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<br/><!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                   |

## IMAP New transporter

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| 引数     | 型                                  |                             | 説明                                                  |
| ------ | ---------------------------------- | :-------------------------: | --------------------------------------------------- |
| server | Object                             |              ->             | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter | <- | [IMAP transporter オブジェクト](#imap-transporter-オブジェクト) |

<!-- END REF -->

#### 説明

`IMAP New transporter` コマンドは、*server* 引数の指定に応じて<!-- REF #_command_.IMAP New transporter.Summary -->新規の IMAP接続を設定します<!-- END REF -->。戻り値は、新しい `IMAP transporter` オブジェクトです。 返される transporter オブジェクトは通常、メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                   | デフォルト値 (省略時)  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                              | false                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 *[IMAP transporter](#imap-transporter-オブジェクト)* オブジェクトには返されません。 | なし                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                | サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                        | 300                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                   | 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                          | *mandatory*                      |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                 | なし                               |
| .**password** : Text<br/>サーバーとの認証のためのユーザーパスワード。 *[IMAP transporter](#imap-transporter-オブジェクト)* オブジェクトには返されません。                                                                                                                                                                                                                                                             | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                          | 993                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                          | なし                               |

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

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->

| 引数     | 型                                  |                             | 説明                                                  |
| ------ | ---------------------------------- | :-------------------------: | --------------------------------------------------- |
| server | Object                             |              ->             | メールサーバー情報                                           |
| 戻り値    | 4D.IMAPTransporter | <- | [IMAP transporter オブジェクト](#imap-transporter-オブジェクト) |

<!-- END REF -->

#### 説明

`4D.IMAPTransporter.new()` 関数は、<!-- REF #4D.IMAPTransporter.new().Summary -->新規の `4D.IMAPTransporter`型オブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`IMAP New transporter`](#imap-new-transporter) コマンドと同一です。

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->

## .addFlags()

<details><summary>履歴</summary>

| リリース  | 内容             |
| ----- | -------------- |
| 20    | カスタムキーワードをサポート |
| 18 R6 | 追加             |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->

| 引数       | 型          |                             | 説明                                                                                                                                                                                            |
| -------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs   | Collection |              ->             | 文字列のコレクション: メッセージの固有ID (テキスト型)<br/>&#xA;テキスト: メッセージの固有ID<br/>&#xA;倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | Object     |              ->             | 追加するキーワードフラグ                                                                                                                                                                                  |
| 戻り値      | Object     | <- | addFlags処理のステータス                                                                                                                                                                              |

<!-- END REF -->

#### 説明

`.addFlags()` 関数は、<!-- REF #IMAPTransporterClass.addFlags().Summary -->
`msgIDs` のメッセージに対して、`keywords` で指定したフラグを追加します<!-- END REF -->。

`msgIDs` には、以下のいずれかを渡すことができます:

- 指定するメッセージの固有ID を格納した *コレクション*
- 単一のメッセージの固有ID (*テキスト*)
- 以下の定数 (*longint*) を使用することで、選択されているメールボックスの全メッセージを指定することができます:

| 定数       | 値 | 説明                        |
| -------- | - | ------------------------- |
| IMAP all | 1 | 選択されたメールボックスの全メッセージを選択します |

`keywords` を使って、`msgIDs` 引数で指定したメッセージに対して追加するフラグを定義します。 以下の標準フラグおよびカスタムフラグを使用することができます (カスタムフラグのサポートはサーバーの実装に依存します)。

| プロパティ           | 型       | 説明                                |
| --------------- | ------- | --------------------------------- |
| $draft          | Boolean | メッセージに "draft" フラグを追加するには true    |
| $seen           | Boolean | メッセージに "seen" フラグを追加するには true     |
| $flagged        | Boolean | メッセージに "flagged" フラグを追加するには true  |
| $answered       | Boolean | メッセージに "answered" フラグを追加するには true |
| $deleted        | Boolean | メッセージに "deleted" フラグを追加するには true  |
| `<custom flag>` | Boolean | メッセージにカスタムフラグを追加するには true         |

カスタムフラグ名は、次の規則に従う必要があります: キーワードは、制御文字とスペースを含まない、文字の大小を区別する文字列であり、次の文字は使用できません: `( ) { ] % * " \`

> - キーワードが考慮されるためには、その値が true でなければなりません。
> - キーワードフラグの解釈は、メールクライアントごとに異なる可能性があります。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->

| 引数             | 型      |                             | 説明                      |
| -------------- | ------ | :-------------------------: | ----------------------- |
| mailObj        | Object |              ->             | Email オブジェクト            |
| destinationBox | Text   |              ->             | Emailオブジェクトを受信するメールボックス |
| options        | Object |              ->             | 文字セット情報を格納したオブジェクト      |
| 戻り値            | Object | <- | append処理のステータス          |

<!-- END REF -->

#### 説明

`.append()` 関数は、<!-- REF #IMAPTransporterClass.append().Summary -->`destinationBox` に指定したメールボックスに、`mailObj` のメールを追加します<!-- END REF -->。

`mailObj` には、Email オブジェクトを渡します。 メールプロパティに関する包括的な詳細については、[Email オブジェクト](EmailObjectClass.md#email-オブジェクト) を参照ください。 `.append()` 関数は Email オブジェクトの `keywords` 属性内のキーワードタグをサポートします。

任意の `destinationBox` には、`mailObj` が追加されるメールボックスの名前を指定することができます。 省略した場合は、カレントメールボックスが使用されます。

任意の `options` には、メールの特定部分の文字セットやエンコーディングを定義するオブジェクトを渡すことができます。 次のプロパティを含みます:

| プロパティ         | 型    | 説明                                                                                                                |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 取り得る値: 以下の可能な文字セットテーブルを参照ください。 |
| bodyCharset   | Text | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 取り得る値: 以下の可能な文字セットテーブルを参照ください。                      |

使用可能な文字セット:

| 定数                       | 値                                                                                           | 説明                                                                                                                                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) & Quoted-printable、それも不可なら UTF-8 & Quoted-printable</li><li>bodyCharset: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) & 7-bit、それも不可なら UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | headerCharset &amp; bodyCharset: 可能なら US-ASCII、それが不可なら UTF-8 &amp; Quoted-printable (**デフォルト値**)                                                                |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | headerCharset &amp; bodyCharset: 可能な場合は US-ASCII、それ以外は UTF-8 &amp; base64                                                                                                          |

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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
$msg.keywords["$draft"]:=True // メッセージに下書きフラグをつけます

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : Integer<!-- END REF -->

#### 説明

`.checkConnectionDelay` 関数は、<!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->サーバー接続をチェックするまでの最長時間 (秒単位)<!-- END REF --> を格納します。  関数呼び出しの間隔がこの時間を超過する場合、サーバー接続が確認されます。 プロパティが *server* オブジェクトによって設定されていない場合は、デフォルトで 300 という値が使用されます。

> **警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにしてください。そうでない場合、クライアントタイムアウトは無意味になります。

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->

## .copy()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->

| 引数             | 型          |                             | 説明                                              |
| -------------- | ---------- | :-------------------------: | ----------------------------------------------- |
| msgsIDs        | Collection |              ->             | メッセージの固有ID のコレクション (テキスト)    |
| allMsgs        | Integer    |              ->             | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | Text       |              ->             | メッセージのコピー先のメールボックス                              |
| 戻り値            | Object     | <- | copy処理のステータス                                    |

<!-- END REF -->

#### 説明

`.copy()` 関数は、<!-- REF #IMAPTransporterClass.copy().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へとコピーします<!-- END REF -->。

以下のものを渡すことができます:

- *msgsIDs* には、コピーするメッセージの固有ID を格納したコレクション
- *allMsgs* には、選択されているメールボックスの全メッセージをコピーするための定数 (倍長整数型):

*destinationBox* には、メッセージのコピー先メールボックスの名称をテキスト値で渡すことができます。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->

| 引数   | 型      |                             | 説明                |
| ---- | ------ | :-------------------------: | ----------------- |
| name | Text   |              ->             | 新規メールボックスの名称      |
| 戻り値  | Object | <- | createBox処理のステータス |

<!-- END REF -->

#### 説明

`.createBox()` 関数は、<!-- REF #IMAPTransporterClass.createBox().Summary -->`name` に指定した名称の新規メールボックスを作成します<!-- END REF -->。 IMAPサーバーの階層区切り文字がメールボックス名内に含まれる場合、IMAPサーバーは指定のメールボックスを作成するのに必要な親階層を作成します。

たとえば、"/" が階層区切り文字として使われるサーバーにおいて、"Projects/IMAP/Doc" を作成しようとした場合:

- "Projects" & "IMAP" がすでに存在する場合は "Doc" メールボックスのみを作成します。
- “Projects” のみが存在する場合は、"IMAP" & "Doc" メールボックスを作成します。
- いずれも存在しない場合には、"Projects" & "IMAP" & "Doc" メールボックスをそれぞれ作成します。

`name` には、新しいメールボックスの名前を渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->

| 引数      | 型          |                             | 説明                                              |
| ------- | ---------- | :-------------------------: | ----------------------------------------------- |
| msgsIDs | Collection |              ->             | メッセージの固有ID のコレクション (テキスト)    |
| allMsgs | Integer    |              ->             | `IMAP all`: 選択されたメールボックスの全メッセージ |
| 戻り値     | Object     | <- | delete処理のステータス                                  |

<!-- END REF -->

#### 説明

`.delete()` 関数は、<!-- REF #IMAPTransporterClass.delete().Summary -->
`msgsIDs` または `allMsgs` が指定するメッセージに対して "削除済み" フラグを設定します<!-- END REF -->。

以下のものを渡すことができます:

- `msgsIDs` には、削除するメッセージの固有ID を格納したコレクション
- `allMsgs` には、選択されているメールボックスの全メッセージを削除するための定数 (倍長整数型):

この関数を実行しても、メールが実際に削除される訳ではありません。 "削除済み" フラグがつけられたメッセージも引き続き [.searchMails()](#searchmails) 関数によって検索可能です。 フラグがつけられたメッセージは、[`.expunge()`](#expunge) を実行したときか、別のメールボックスを選択したとき、あるいは([IMAP New transporter](#imap-new-transporter) で作成された) [transporter オブジェクト](#imap-transporter-オブジェクト) が消去されたときにのみ、IMAPサーバーから削除されます。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->

| 引数   | 型      |                             | 説明                |
| ---- | ------ | :-------------------------: | ----------------- |
| name | Text   |              ->             | 削除するメールボックスの名称    |
| 戻り値  | Object | <- | deleteBox処理のステータス |

<!-- END REF -->

#### 説明

`.deleteBox()` 関数は、<!-- REF #IMAPTransporterClass.deleteBox().Summary -->
`name` に指定した名称のメールボックスを IMAPサーバーから完全に削除します<!-- END REF -->。 存在しないメールボックス、または INBOX を削除しようとして場合には、エラーが生成されます。

`name` には、削除するメールボックスの名前を渡します。

> - 子メールボックスを持つ親メールボックスが "\Noselect" 属性を持っている場合、そのメールボックスは削除できません。
> - 削除されるメールボックス内のメッセージもすべて削除されます。
> - メールボックス削除の可否はメールサーバーに依存します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->

| 引数  | 型      |                             | 説明              |
| --- | ------ | :-------------------------: | --------------- |
| 戻り値 | Object | <- | expunge処理のステータス |

<!-- END REF -->

#### 説明

`.expunge()` 関数は、<!-- REF #IMAPTransporterClass.expunge().Summary -->"deleted" フラグがつけられたメッセージをすべて IMAP メールサーバーから削除します<!-- END REF -->。"deleted" フラグは、[`.delete()`](#delete) または [`.addFlags()`](#addflags) 関数によって設定可能です。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース  | 内容           |
| ----- | ------------ |
| 20    | *id* が返されます  |
| 18 R5 | *name* は任意です |
| 18 R4 | 追加           |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| 引数   | 型      |                             | 説明             |
| ---- | ------ | :-------------------------: | -------------- |
| name | Text   |              ->             | メールボックスの名称     |
| 戻り値  | Object | <- | boxInfo オブジェクト |

<!-- END REF -->

#### 説明

`.getBoxInfo()` 関数は、<!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->カレントメールボックス、または *name* が指定するメールボックスに対応する `boxInfo` オブジェクトを返します<!-- END REF -->。 この関数は、[`.selectBox()`](#selectbox) と同じ情報を返しますが、カレントメールボックスは変えません。

任意の *name* パラメーターには、アクセスするメールボックスの名称を渡します。 この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。

*name* のメールボックスが選択不可の場合、または見つからない場合には、関数はエラーを生成し、**null** を返します。

**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ      | 型      | 説明                                                            |
| ---------- | ------ | ------------------------------------------------------------- |
| name       | text   | メールボックスの名称                                                    |
| mailCount  | number | メールボックス内のメッセージの数                                              |
| mailRecent | number | (新しいメッセージであることを表す) "recent" フラグがついたメッセージの数 |
| id         | text   | メールボックスの固有ID                                                  |

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

| リリース  | 内容                 |
| ----- | ------------------ |
| 18 R4 | 追加                 |
| 19    | `isSubscribed` を追加 |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->

| 引数         | 型          |                             | 説明                    |
| ---------- | ---------- | :-------------------------: | --------------------- |
| parameters | Object     |              ->             | 引数のオブジェクト             |
| 戻り値        | Collection | <- | mailbox オブジェクトのコレクション |

<!-- END REF -->

#### 説明

`.getBoxList()` 関数は、<!-- REF #IMAPTransporterClass.getBoxList().Summary -->利用可能なメールボックスの情報を mailbox オブジェクトのコレクションとしてを返します<!-- END REF -->。 この関数を使用すると、IMAPメールサーバー上にあるメッセージの一覧をローカルで管理することができるようになります。

任意の `parameters` パラメーターには、返されるメールボックスをフィルターするための値を格納したオブジェクトを渡すことができます。 以下のものを渡すことができます:

| プロパティ        | 型       | 説明                                                                                 |
| ------------ | ------- | ---------------------------------------------------------------------------------- |
| isSubscribed | Boolean | <li>**True**: 購読しているメールボックスのみを返します。</li><li>**False**: すべての利用可能なメールボックスを返します。</li> |

#### 戻り値

返されるコレクションの各オブジェクトには、以下のプロパティが格納されています:

| プロパティ                                                                                | 型       | 説明                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | メールボックスの名称                                                                                                                                                                                                                               |
| \[].selectable  | boolean | アクセス権でメールボックスを選択できるかどうかを表します:<ul><li>true - メールボックスは選択可能</li><li>false - メールボックスは選択不可能</li></ul>                                                                                                                         |
| \[].inferior    | boolean | アクセス権でメールボックス内に下の階層レベルを作成できるかどうかを表します:<ul><li>true - 下の階層レベルは作成可能</li><li>false - 下の階層レベルは作成不可能</li></ul>                                                                                                                |
| \[].interesting | boolean | サーバーがメールボックスに “interesting” のマーク付けをしているかどうかを表します:<ul><li>true - メールボックスはサーバーから "interesting" のマーク付けをされています。 たとえば、メールボックスには新着メッセージが入っている場合が考えられます。</li><li>false - メールボックスはサーバーから "interesting" のマーク付けをされていません。</li></ul> |

アカウントにメールボックスが一つもない場合、空のコレクションが返されます。

> - 開いている接続がない場合、`.getBoxList()` は接続を開きます。
> - 接続が指定された時間 (`IMAP New transporter` 参照) 以上に使用されなかった場合には、`.checkConnection( )` 関数が自動的に呼び出されます。

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

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->

| 引数  | 型    |                             | 説明      |
| --- | ---- | :-------------------------: | ------- |
| 戻り値 | Text | <- | 階層区切り文字 |

<!-- END REF -->

#### 説明

`.getDelimiter()` 関数は、<!-- REF #IMAPTransporterClass.getDelimiter().Summary -->メールボックス名で階層レベルを区切るのに使用される文字を返します<!-- END REF -->。

この区切り文字は以下のように使用することができます:

- 下層レベルのメールボックスを作成する
- メールボックスの階層内での上層・下層レベルを検索する

#### 戻り値

メールボックス名の区切り文字

> - 開いている接続がない場合、`.getDelimiter()` は接続を開きます。
> - 接続が指定された時間 ([IMAP New transporter](#checkconnectiondelay) 参照) 以上に使用されなかった場合には、[`.checkConnection()`](#checkconnection) 関数が自動的に呼び出されます。

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

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->

| 引数        | 型       |                             | 説明                                               |
| --------- | ------- | :-------------------------: | ------------------------------------------------ |
| msgNumber | Integer |              ->             | メッセージのシーケンス番号                                    |
| msgID     | Text    |              ->             | メッセージの固有ID                                       |
| options   | Object  |              ->             | メッセージ管理オプション                                     |
| 戻り値       | Object  | <- | [Email オブジェクト](EmailObjectClass.md#email-オブジェクト) |

<!-- END REF -->

#### 説明

`.getMail()` 関数は、<!-- REF #IMAPTransporterClass.getMail().Summary -->
`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメールを `Email` オブジェクトとして返します<!-- END REF -->。 この関すを使用すると、メールのコンテンツをローカルで管理できるようになります。

最初の引数として、次のいずれかを渡すことができます:

- *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
- *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *options* 引数として、メッセージの扱い方を定義する追加のオブジェクトを渡すことができます。 次のプロパティを利用することができます:

| プロパティ      | 型       | 説明                                                                                         |
| ---------- | ------- | ------------------------------------------------------------------------------------------ |
| updateSeen | boolean | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | boolean | true を渡すとメッセージ本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true           |

> - *msgID* 引数が存在しないメッセージを指定した場合、関数はエラーを生成し **Null** を返します。
> - [`.selectBox()`](#selectbox) によって選択されたメールボックスがない場合、エラーが生成されます。
> - 開いている接続がない場合、`.getMail()` は [`.selectBox()`](#selectbox) で最後に指定されたメールボックスへの接続を開きます。

#### 戻り値

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

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->

| 引数       | 型          |                             | 説明                                                                                                                                                         |
| -------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids      | Collection |              ->             | メッセージID のコレクション                                                                                                                                            |
| startMsg | Integer    |              ->             | 先頭メッセージのシーケンス番号                                                                                                                                            |
| endMsg   | Integer    |              ->             | 最後のメッセージのシーケンス番号                                                                                                                                           |
| options  | Object     |              ->             | メッセージ管理オプション                                                                                                                                               |
| 戻り値      | Object     | <- | 次のコレクションを格納したオブジェクト:<br/><ul><li>[Email オブジェクト](EmailObjectClass.md#email-オブジェクト) のコレクション</li><li>見つからなかったメッセージの ID または番号のコレクション</li></ul> |

<!-- END REF -->

#### 説明

`.getMails()` 関数は、<!-- REF #IMAPTransporterClass.getMails().Summary -->`Email` オブジェクトのコレクションを格納したオブジェクトを返します<!-- END REF -->。

**第一シンタックス:**

***.getMails( ids { ; options } ) -> result***

第一シンタックスを使用すると、メッセージID に基づいてメッセージを取得することができます。

*ids* 引数として、取得するメッセージID のコレクションを渡します。 これらの ID は [`.getMail()`](#getmail) で取得することができます。

任意の *options* 引数を渡すと、返されるメッセージのパートを定義することができます。 利用可能なプロパティについては、以下の **オプション** の表を参照ください。

**第二シンタックス:**

***.getMails( startMsg ; endMsg { ; options } ) -> result***

第二シンタックスを使用すると、連続したレンジに基づいてメッセージを取得することができます。 渡される値はメールボックス内でのメッセージの位置を表します。

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*endMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。

任意の *options* 引数を渡すと、返されるメッセージのパートを定義することができます。

**Options**

| プロパティ      | 型       | 説明                                                                                     |
| ---------- | ------- | -------------------------------------------------------------------------------------- |
| updateSeen | Boolean | true 時には、指定されたメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 デフォルト値: true |
| withBody   | Boolean | true を渡すと指定されたメッセージの本文を返します。 false 時には、メッセージヘッダーのみが返されます。 デフォルト値: true |

> - [`.selectBox()`](#selectbox) によって選択されたメールボックスがない場合、エラーが生成されます。
> - 開いている接続がない場合、`.getMails()` は [`.selectBox()`](#selectbox) で最後に指定されたメールボックスへの接続を開きます。

#### 戻り値

`.getMails()` は、以下のコレクションを格納したオブジェクトを返します。

| プロパティ    | 型          | 説明                                                                                                                                                                                                                             |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| list     | Collection | [`Email`](EmailObjectClass.md#email-オブジェクト) オブジェクトのコレクション。 Email オブジェクトが見つからない場合、空のコレクションが返されます。                                                                                                                               |
| notFound | Collection | 使用したシンタックスによって返されるものが異なります:<br/><ul><li>第一シンタックス - 指定した ID のうち、存在しなかったメッセージの ID のコレクション</li><li>第二シンタックス - startMsg と endMsg の間の番号のうち、存在しなかったメッセージのシーケンス番号のコレクション</li></ul>すべてのメッセージが見つかった場合には、空のコレクションが返されます。 |

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

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->

| 引数         | 型       |                             | 説明                                                            |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------- |
| msgNumber  | Integer |              ->             | メッセージのシーケンス番号                                                 |
| msgID      | Text    |              ->             | メッセージの固有ID                                                    |
| updateSeen | Boolean |              ->             | true 時には、メールボックス内でメッセージを "既読" にします。 false 時にはメッセージの状態は変化しません。 |
| 戻り値        | BLOB    | <- | メールサーバーから返された MIME文字列の BLOB                                   |

<!-- END REF -->

#### 説明

`.getMIMEAsBlob()` 関数は、<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->
`IMAP_transporter` が指定するメールボックス内の、*msgNumber* または *msgID* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します<!-- END REF -->。

最初の引数として、次のいずれかを渡すことができます:

- *msgNumber* に、取得するメッセージのシーケンス番号 (*倍長整数*) を渡します。
- *msgID*に、取得するメッセージの固有ID (*テキスト*) を渡します。

任意の *updateSeen* 引数を渡すと、メールボックス内でメッセージが "既読" とマークされるかどうかを指定します。 以下のものを渡すことができます:

- **True** - メッセージは "既読" とマークされます (このメッセージが読まれたことを表します)
- **False** - メッセージの "既読" ステータスは変化しません。

> * *msgNumber* または *msgID* 引数が存在しないメッセージを指定した場合、関数は空の BLOB を返します。
> * [`.selectBox()`](#selectbox) によって選択されたメールボックスがない場合、エラーが生成されます。
> * 開いている接続がない場合、`.getMIMEAsBlob()` は `.selectBox()` で最後に指定されたメールボックスへの接続を開きます。

#### 戻り値

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

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->

| 引数             | 型          |                             | 説明                                              |
| -------------- | ---------- | :-------------------------: | ----------------------------------------------- |
| msgsIDs        | Collection |              ->             | メッセージの固有ID のコレクション (テキスト)    |
| allMsgs        | Integer    |              ->             | `IMAP all`: 選択されたメールボックスの全メッセージ |
| destinationBox | Text       |              ->             | メッセージの移動先のメールボックス                               |
| 戻り値            | Object     | <- | move処理のステータス                                    |

<!-- END REF -->

#### 説明

`.move()` 関数は、<!-- REF #IMAPTransporterClass.move().Summary -->*msgsIDs* または *allMsgs* で定義されたメッセージを IMAP サーバーの *destinationBox* へと移動します<!-- END REF -->。

以下のものを渡すことができます:

- *msgsIDs* には、移動するメッセージの固有ID を格納したコレクション
- *allMsgs* には、選択されているメールボックスの全メッセージを移動するための定数 (倍長整数型):

*destinationBox* には、メッセージの移動先メールボックスの名称をテキスト値で渡すことができます。

> RFC [8474](https://tools.ietf.org/html/rfc8474) に準拠している IMAPサーバーでのみ、この関数はサポートされます。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->

| 引数       | 型          |                             | 説明               |
| -------- | ---------- | :-------------------------: | ---------------- |
| startMsg | Integer    |              ->             | 先頭メッセージのシーケンス番号  |
| endMsg   | Integer    |              ->             | 最後のメッセージのシーケンス番号 |
| 戻り値      | Collection | <- | 固有ID のコレクション     |

<!-- END REF -->

#### 説明

`.numToID()` 関数は、現在選択されているメールボックスにおいて、<!-- REF #IMAPTransporterClass.numToID().Summary -->*startMsg* および *endMsg* で指定された連続した範囲のメッセージのシーケンス番号を IMAP固有IDへと変換します<!-- END REF -->。

*startMsg* には、連続したレンジの最初のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*startMsg* <= 0) を渡した場合、メールボックスの最初のメッセージが連続レンジの先頭メッセージとして扱われます。

*endMsg* には、連続レンジに含める最後のメッセージの番号に対応する *倍長整数* の値を渡します。 負の値 (*endMsg* <= 0) を渡した場合、メールボックスの最後のメッセージが連続レンジの最終メッセージとして扱われます。

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

| リリース  | 内容             |
| ----- | -------------- |
| 20    | カスタムキーワードをサポート |
| 18 R6 | 追加             |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->

| 引数       | 型          |                             | 説明                                                                                                                                                                                            |
| -------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs   | Collection |              ->             | 文字列のコレクション: メッセージの固有ID (テキスト型)<br/>&#xA;テキスト: メッセージの固有ID<br/>&#xA;倍長整数 (IMAP all): 選択されたメールボックス内の全メッセージ |
| keywords | Object     |              ->             | 削除するキーワードフラグ                                                                                                                                                                                  |
| 戻り値      | Object     | <- | removeFlags処理のステータス                                                                                                                                                                           |

<!-- END REF -->

#### 説明

`.removeFlags()` 関数は、<!-- REF #IMAPTransporterClass.removeFlags().Summary -->`msgIDs` のメッセージに対して、`keywords` で指定したフラグを削除します<!-- END REF -->。

`msgIDs` には、以下のいずれかを渡すことができます:

- 指定するメッセージの固有ID を格納した *コレクション*
- 単一のメッセージの固有ID (*テキスト*)
- 以下の定数 (*longint*) を使用することで、選択されているメールボックスの全メッセージを指定することができます:

| 定数       | 値 | 説明                        |
| -------- | - | ------------------------- |
| IMAP all | 1 | 選択されたメールボックスの全メッセージを選択します |

`keywords` を使って、`msgIDs` 引数で指定したメッセージから削除するフラグを定義します。 以下の標準フラグおよびカスタムフラグを使用することができます:

| 引数              | 型       | 説明                                |
| --------------- | ------- | --------------------------------- |
| $draft          | Boolean | メッセージの "draft" フラグを削除するには true    |
| $seen           | Boolean | メッセージの "seen" フラグを削除するには true     |
| $flagged        | Boolean | メッセージの "flagged" フラグを削除するには true  |
| $answered       | Boolean | メッセージの "answered" フラグを削除するには true |
| $deleted        | Boolean | メッセージの "deleted" フラグを削除するには true  |
| `<custom flag>` | Boolean | メッセージのカスタムフラグを削除するには true         |

カスタムフラグの詳細については、[.addFlags()](#addflags) を参照ください。

> - キーワードが考慮されるためには、その値が true でなければなりません。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->

| 引数          | 型      |                             | 説明                |
| ----------- | ------ | :-------------------------: | ----------------- |
| currentName | Text   |              ->             | カレントメールボックスの名称    |
| newName     | Text   |              ->             | 新しいメールボックス名       |
| 戻り値         | Object | <- | renameBox処理のステータス |

<!-- END REF -->

#### 説明

`.renameBox()` 関数は、<!-- REF #IMAPTransporterClass.renameBox().Summary -->IMAPサーバー上でメールボックスの名称を変更します<!-- END REF -->。 存在しないメールボックスの名称を変更しようとしたり、すでに使われているメールボックス名に変更しようとしたりすると、エラーが生成されます。

`currentName` には、名称変更するメールボックスの名前を渡します。

メールボックスの新しい名称は `newName` に渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->

| 引数             | 型          |                             | 説明             |
| -------------- | ---------- | :-------------------------: | -------------- |
| searchCriteria | Text       |              ->             | 検索条件           |
| 戻り値            | Collection | <- | メッセージ番号のコレクション |

<!-- END REF -->

#### 説明

> この関数は、[IMAP プロトコル](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) の仕様に基づいています。

`.searchMails()` 関数は、<!-- REF #IMAPTransporterClass.searchMails().Summary -->カレントメールボックスにおいて *searchCriteria* の検索条件に合致するメッセージを検索します<!-- END REF -->。 *searchCriteria* 引数には、一つ以上の検索キーを格納します。

*searchCriteria* はテキスト型の引数で、一つ以上の検索キー (詳細は後述の [利用可能な検索キー](#利用可能な検索キー) 参照) を格納し、検索する値を渡します (渡さない場合もあります)。 検索キーは単一または複数の項目からなります。 例:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> 文字の大小は通常区別されません。

- *searchCriteria* 引数が null 文字列の場合、検索は "すべてを選択" と同等です。
- 引数が複数の検索キーを格納している場合、それらすべてに合致する和集合 (AND) が検索結果になります。

```
searchCriteria = FLAGGED FROM "SMITH"
```

... この検索結果は \Flagged フラグが設定されていて、かつ Smith から送られたメッセージをすべて返します。

- **OR** および **NOT** 演算子を、以下のように使用することができます:

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

... content-type ヘッダーが "e" を格納しているもののうち、Subject ヘッダーが "o" を格納していないもの、かつ content-type ヘッダーが "Mixed" でないメッセージを返します。

最後の 2例については、最初の検索キーリストのカッコを取り除いてしまうと検索結果が異なることに注意してください。

- *searchCriteria* 引数には任意の \[CHARSET] 指定を含めることができます。 これは "CHARSET" という単語の後に実際の文字コード \[CHARSET] (US ASCII, ISO-8859 など) が続きます。 これは *searchCriteria* 文字列の文字コードを指定します。 そのため、\[CHARSET] 指定を使用する場合には *searchCriteria* 文字列を指定された文字コードへと変換する必要があります (詳細については `CONVERT FROM TEXT` または `Convert to text` コマンドを参照ください)。
  デフォルトでは、searchCriteria 引数に拡張された文字列が含まれていた場合には4D はそれを Quotable Printable へとエンコードします。

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... これは、検索条件に iso-8859 文字コードを使用し、必要に応じてサーバーは検索前に検索条件をこの文字コードに変換しなければならない、ということを意味します。

#### 検索する値の型について

検索キーによっては、次の型の検索値が必要となる場合があります:

- **日付値の検索キー**:
  date は日付を指定する文字列で、以下のようにフォーマットされている必要があります: *date-day+"-"+date-month+"-"+date-year*。ここでの date-day は日付の数値 (最大2桁) を意味し、date-month は月の名前 (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) を意味し、date-year は年 (4桁) を意味します。
  例: `searchCriteria = SENTBEFORE 1-Feb-2000` (日付は特殊文字を含まないため、通常は引用符でくくる必要はありません)

- **文字列値の検索キー**: string はあらゆる文字列を含みうるため、引用符でくくらなければなりません。 文字列が特殊文字 (スペース文字など) をまったく含まない場合には、引用符で括る必要はありません。 このような文字列を引用符でくくることは、渡した文字列値が正確に解釈されることを保証します。
  例: `searchCriteria = FROM "SMITH"`<br />
  文字列を使用するすべての検索キーに対し、フィールドの文字列に検索キーが含まれる場合には検索に合致したとみなされます。 合致は文字の大小を区別しません。

- **field-name 値の検索キー**: field-name はヘッダーフィールドの名称です。
  例: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **フラグ値の検索キー**: flag は一つ以上のキーワードを (標準のフラグを含めて) 受け入れます。複数指定する場合にはスペースで区切ります。
  例: `searchCriteria = KEYWORD \Flagged \Draft`

- **メッセージセット値の検索キー**: 複数のメッセージを識別します。 メッセージシーケンス番号は、1 から始まりメールボックスのメッセージの総数までの連続した番号です。 個別の番号はカンマで区切ります。コロンは、その前後の番号を含めた連続した番号を指定します。
  例:<br />
  `2,4:7,9,12:*` は、15通あるメールボックスの場合に `2,4,5,6,7,9,12,13,14,15` を指定します。
  `searchCriteria = 1:5 ANSWERED` は、メッセージシーケンス番号 1 から 5番のメッセージのうち、\Answered フラグが設定されているメッセージを検索します。
  `searchCriteria= 2,4 ANSWERED` は、メッセージセレクション (メッセージ番号 2番と4番) のうち、\Answered フラグが設定されているメッセージを検索します。

#### 利用可能な検索キー

**ALL**: メールボックスの全メッセージ\
**ANSWERED**: \Answered フラグが設定されたメッセージ\
**UNANSWERED**: \Answered フラグが設定されていないメッセージ\
**DELETED**: \Deleted フラグが設定されたメッセージ\
**UNDELETED**: \Deleted フラグが設定されていないメッセージ\
**DRAFT**: \Draft フラグが設定されているメッセージ\
**UNDRAFT**: \Draft フラグが設定されていないメッセージ\
**FLAGGED**: \Flagged フラグが設定されているメッセージ\
**UNFLAGGED**: \Flagged フラグが設定されていないメッセージ\
**RECENT**: \Recent フラグが設定されているメッセージ\
**OLD**: \Recent フラグが設定されていないメッセージ\
**SEEN**: \Seen フラグが設定されているメッセージ\
**UNSEEN**: \Seen フラグが設定されていないメッセージ\
**NEW**: \Recent フラグが設定されているが \Seen フラグが設定されていないメッセージ。 これは機能的には “(RECENT UNSEEN)” と同じです。\
**KEYWORD* flag*\*\*: 指定されたキーワードが設定されているメッセージ\
**UNKEYWORD* flag*\*\*: 指定されたキーワードが設定されていないメッセージ\
**BEFORE* date*\*\*: 内部の日付が指定日より前のメッセージ\
**ON* date*\*\*: 内部の日付が指定日に合致するメッセージ\
**SINCE* date*\*\*: 内部の日付が指定日より後のメッセージ\
**SENTBEFORE* date*\*\*: 日付ヘッダーが指定日より前のメッセージ\
**SENTON* date*\*\*: 日付ヘッダーが指定日に合致するメッセージ\
**SENTSINCE* date*\*\*: 日付ヘッダーが指定日以降のメッセージ\
**TO* string*\*\*: TO ヘッダーに指定文字列が含まれているメッセージ\
**FROM* string*\*\*: FROM ヘッダーに指定文字列が含まれているメッセージ\
**CC* string*\*\*: CC ヘッダーに指定文字列が含まれているメッセージ\
**BCC* string*\*\*: BCC ヘッダーに指定文字列が含まれているメッセージ\
**SUBJECT* string*\*\*: 件名ヘッダーに指定文字列が含まれているメッセージ\
**BODY* string*\*\*: メッセージ本文に指定文字列が含まれているメッセージ\
**TEXT* string*\*\*: ヘッダーまたはメッセージ本文に指定文字列が含まれているメッセージ\
**HEADER *field-name* *string***: 指定フィールド名のヘッダーを持ち、そのフィールド内に指定文字列が含まれているメッセージ\
**UID *message-UID***: 指定された固有識別子に対応する固有識別子を持つメッセージ\
**LARGER *n***: 指定バイト数以上のサイズを持つメッセージ\
**SMALLER *n***: 指定バイト数以下のサイズを持つメッセージ\
**NOT *search-key***: 指定検索キーに合致しないメッセージ\
**OR *search-key1* *search-key2***: いずれかの検索キーに合致するメッセージ

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>履歴</summary>

| リリース  | 内容                                      |
| ----- | --------------------------------------- |
| 20    | *id*, *flags*, *permanentFlags* が返されます。 |
| 18 R4 | 追加                                      |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| 引数    | 型       |                             | 説明             |
| ----- | ------- | :-------------------------: | -------------- |
| name  | Text    |              ->             | メールボックスの名称     |
| state | Integer |              ->             | メールボックスのアクセス状態 |
| 戻り値   | Object  | <- | boxInfo オブジェクト |

<!-- END REF -->

#### 説明

`.selectBox()` 関数は、 <!-- REF #IMAPTransporterClass.selectBox().Summary -->*name* に指定したメールボックスをカレントメールボックスとして選択します<!-- END REF -->。 この関数を使用するとメールボックスに関する情報を取得することができます。

> カレントメールボックスを変更せずに、メールボックスから情報を取得するには、[`.getBoxInfo()`](#getboxinfo) を使用します。

*name* には、アクセスするメールボックスの名前を渡します。 この名称は明確な左から右への階層を表し、特定の区切り文字でレベルを区分けします。 この区切り文字は [`.getDelimiter()`](#getdelimiter) 関数で調べることができます。

任意の *state* 引数を渡すと、メールボックスへのアクセスタイプを定義できます。 取りうる値は以下の通りです:

| 定数                    | 値 | 説明                                                                                            |
| --------------------- | - | --------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1 | 選択されたメールボックスは読み取り専用権限でアクセスされます。 新しいメッセージを表す "新着" フラグはそのまま変化しません。                              |
| IMAP read write state | 0 | 選択されたメールボックスは読み書き可能権限でアクセスされます。 メッセージは "既読" と判断され、"新着" フラグは失われます。 (デフォルト値) |

> - *name* 引数が存在しないメールボックスを指定した場合、関数はエラーを生成し **Null** を返します。
> - 開いている接続がない場合、`.selectBox()` は接続を開きます。
> - 接続が指定された時間 (`IMAP New transporter` 参照) 以上に使用されなかった場合には、[`.checkConnection()`](#checkconnection) 関数が自動的に呼び出されます。

**返されるオブジェクト**

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ          | 型      | 説明                                                                                   |
| -------------- | ------ | ------------------------------------------------------------------------------------ |
| name           | Text   | メールボックスの名称                                                                           |
| mailCount      | number | メールボックス内のメッセージの数                                                                     |
| mailRecent     | number | "recent" フラグがついたメッセージの数                                                              |
| id             | text   | メールボックスの固有ID                                                                         |
| flags          | text   | メールボックスで現在使用されているフラグのリスト (スペース区切り)。                               |
| permanentFlags | text   | クライアントが永続的に変更可能なフラグ (IMAPサーバーが管理する \Recent フラグを除く) の、スペース区切りのリスト。 |

:::info

`permanentFlags` の文字列に特別なフラグ \* が含まれている場合、それは、サーバーが [カスタムフラグ](#addflags) をサポートしていることを意味します。

:::

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

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->

| 引数   | 型      |                             | 説明                |
| ---- | ------ | :-------------------------: | ----------------- |
| name | Text   |              ->             | メールボックスの名称        |
| 戻り値  | Object | <- | subscribe処理のステータス |

<!-- END REF -->

#### 説明

`.subscribe()` 関数は、<!-- REF #IMAPTransporterClass.subscribe().Summary -->IMAPサーバーの購読メールボックスとして任意のメールボックスを追加します<!-- END REF -->。 利用可能なメールボックスが大量にある場合、すべてを取得するのを避けるため、確認したいメールボックスだけを購読することができます。

`name` には、購読するメールボックスの名前を渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->

| 引数   | 型      |                             | 説明                  |
| ---- | ------ | :-------------------------: | ------------------- |
| name | Text   |              ->             | メールボックスの名称          |
| 戻り値  | Object | <- | unsubscribe処理のステータス |

<!-- END REF -->

#### 説明

`.unsubscribe()` 関数は、<!-- REF #IMAPTransporterClass.unsubscribe().Summary -->指定したメールボックスを購読メールボックスから削除します<!-- END REF -->。 これにより、確認するメールボックスの数を減らせます。

`name` には、購読を解除するメールボックスの名前を渡します。

**返されるオブジェクト**

この関数は、IMAP ステータスを表すオブジェクトを返します:

| プロパティ      |                                                                                             | 型          | 説明                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                              |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー           |
| errors     |                                                                                             | Collection | 4Dエラースタック (IMAPサーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                     |
|            | \[].message            | Text       | 4Dエラーの詳細                                                     |
|            | \[].componentSignature | Text       | エラーを返した内部コンポーネントの署名                                          |

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
