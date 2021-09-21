---
id: POP3TransporterClass
title: POP3Transporter
---

`POP3Transporter` クラスを使って、POP3 メールサーバーからメッセージを取得することができます。


### POP3 Transporter オブジェクト

POP3 Transporter オブジェクトは [POP3 New transporter](#pop3-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;暗号化されていない接続の確立が許可されてれば **true**|
| [**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;メールサーバーのセッションを開くのに使用される認証モード|
| [**.checkConnection()** : Object](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp; transporter オブジェクトが保存する情報を使用して接続をチェックします|
| [**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;サーバー接続の確立までに待機する最長時間 (秒単位)|
| [**.delete**( *msgNumber* : Integer )](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;*msgNumber* で指定したメールメッセージに対して、POP3サーバーから削除するためのフラグを立てます|
| [**.getBoxInfo()** : Object](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;対象の [`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックスに対応する `boxInfo` オブジェクトを返します|
| [**.getMail**( *msgNumber* : Integer ) : Object](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;[`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールを `Email` オブジェクトとして返します|
| [**.getMailInfo**( *msgNumber* : Integer ) : Object](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;[`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールの `mailInfo` オブジェクトを返します|
| [**.getMailInfoList()** : Collection](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;[`POP3 transporter`](#pop3-transporter-オブジェクト)が指定するメールボックス内の全メッセージについて記述した `mailInfo` オブジェクトのコレクションを返します|
| [**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;[`POP3_transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します|
| [**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;ホストサーバーの名前または IPアドレス|
| [**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;メール接続に対して定義された拡張ログファイル (あれば) へのフルパス|
| [**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; メール通信に使用されるポート番号|
| [**.undeleteAll()**](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;[`POP3_transporter`](#pop3-transporter-オブジェクト) 内のメールに設定された削除フラグをすべて除去します|
| [**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; メールサーバーでの認証に使用されたユーザー名|



## POP3 New transporter

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter
| 引数     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | object             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.POP3Transporter | <- | [POP3 transporter オブジェクト](#pop3-transporter-オブジェクト) |


#### 説明

`POP3 New transporter` コマンドは、*server* 引数の指定に応じて 新規の POP3接続を設定します。戻り値は、新しい *[POP3 transporter](#pop3-transporter-オブジェクト)* オブジェクトです。 返された transporter オブジェクトは、通常メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:


| *server*                                                                                                                                                                                                                                                                                                                                           | デフォルト値 (省略時)                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;暗号化されていない接続の確立が許可されてれば **true**| False                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<p>OAuth2 認証の資格情報を表すテキスト文字列またはトークンオブジェクト。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 *[POP3 transporter](#pop3-transporter-オブジェクト)* オブジェクトには返されません。 | なし                               |
| [**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;メールサーバーのセッションを開くのに使用される認証モード| サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;サーバー接続の確立までに待機する最長時間 (秒単位)| 30                               |
| [**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;ホストサーバーの名前または IPアドレス| *必須*                             |
| [**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;メール接続に対して定義された拡張ログファイル (あれば) へのフルパス| なし                               |
| **.password** : Text<p>サーバーとの認証のためのユーザーパスワード *[POP3 transporter](#pop3-transporter-オブジェクト)* オブジェクトには返されません。                                                                                                                                                                                                                 | なし                               |
| [**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; メール通信に使用されるポート番号| 995                              |
| [**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; メールサーバーでの認証に使用されたユーザー名| なし                               |


#### 戻り値

この関数は、[**POP3 transporter オブジェクト**](#pop3-transporter-オブジェクト) を返します。 返されるプロパティはすべて **読み取り専用** です。
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


## 4D.POP3Transporter.new()


**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter
| 引数     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | Object             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.POP3Transporter | <- | [POP3 transporter オブジェクト](#pop3-transporter-オブジェクト) |

#### 説明

`4D.POP3Transporter.new()` 関数は、 新規の `4D.POP3Transporter`型オブジェクトを作成して返します。 この関数の機能は、[`POP3 New transporter`](#pop3-new-transporter) コマンドと同一です。

## .acceptUnsecureConnection

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.acceptUnsecureConnection** : Boolean

#### 説明

`.acceptUnsecureConnection` プロパティは、暗号化された接続が不可能な場合に、 暗号化されていない接続の確立が許可されてれば **true** を格納します。

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

| 値        | 定数                             | 説明                          |
| -------- | ------------------------------ | --------------------------- |
| APOP     | `POP3 authentication APOP`     | APOP プロトコルを使用した認証 (POP3 のみ) |
| CRAM-MD5 | `POP3 authentication CRAM-MD5` | CRAM-MD5 プロトコルを使用した認証       |
| LOGIN    | `POP3 authentication login`    | LOGIN プロトコルを使用した認証          |
| OAUTH2   | `POP3 authentication OAUTH2`   | OAuth2 プロトコルを使用した認証         |
| PLAIN    | `POP3 authentication plain`    | PLAIN プロトコルを使用した認証          |





## .checkConnection()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.checkConnection()** : Object
| 引数  | タイプ    |    | 説明                         |
| --- | ------ |:--:| -------------------------- |
| 戻り値 | Object | <- | transporter オブジェクト接続のステータス |


#### 説明

`.checkConnection()` 関数は、  transporter オブジェクトが保存する情報を使用して接続をチェックします。必要なら再接続をし、そのステータスを返します。 この関数を使用して、ユーザーから提供された値が有効かどうかを検証することができます。


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





#### 例題

```4d
 var $pw :  Text
 var $options : Object
 $options:=New object

 $pw:=Request("パスワードを入力してください:")
 if(OK=1)
    $options.host:="pop3.gmail.com"

    $options.user:="test@gmail.com"
    $options.password:=$pw

    $transporter:=POP3 New transporter($options)

    $status:=$transporter.checkConnection()
    If($status.success)
       ALERT("POP3接続チェックに成功しました。")
    Else
       ALERT("Error: "+$status.statusText)
    End if
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

`.connectionTimeOut` プロパティは、 サーバー接続の確立までに待機する最長時間 (秒単位)を格納します。 `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される `server` オブジェクトにおいて、 このプロパティが指定されなかった場合のデフォルトは 30 です。






## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

**.delete**( *msgNumber* : Integer )
| 引数        | タイプ     |    | 説明           |
| --------- | ------- |:--:| ------------ |
| msgNumber | Integer | -> | 削除するメッセージの番号 |


##### 説明

`.delete( )` 関数は、 *msgNumber* で指定したメールメッセージに対して、POP3サーバーから削除するためのフラグを立てます。

*msgNumber* には、削除するメールの番号を渡します。 この番号は、[`.getMailInfoList()`](#getmailinfolist) 関数によって number プロパティに返されます。

この関数を実行しても、メールが実際に削除される訳ではありません。 フラグが立てられたメールは、(`POP3 New transporter` で作成された) `POP3_transporter` オブジェクトが消去された時に初めて POP3サーバーから削除されます。 立てたフラグは、`.undeleteAll()` 関数を使用して削除することもできます。
> カレントセッションが予期せず終了して接続が閉じられた場合 (例: タイムアウト、ネットワーク問題等) にはエラーメッセージが生成され、削除フラグが立てられたメールは削除されずに POP3サーバー上に残ります。

##### 例題

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // "セッション終了時に削除" とメールのフラグを立てます
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // セッションを強制的に終了し、削除フラグを立てたメールを削除します
 CONFIRM("選択されているメッセージは削除されます。";"削除する";"元に戻す")
 If(OK=1) // 削除を選んだ場合
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() // 削除フラグを消去します
 End if
```




## .getBoxInfo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

**.getBoxInfo()** : Object
| 引数  | タイプ    |    | 説明             |
| --- | ------ |:--:| -------------- |
| 戻り値 | Object | <- | boxInfo オブジェクト |


##### 説明

`.getBoxInfo()` 関数は、 対象の [`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックスに対応する `boxInfo` オブジェクトを返します。 この関数を使用するとメールボックスに関する情報を取得することができます。

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ     | タイプ    | 説明                |
| --------- | ------ | ----------------- |
| mailCount | Number | メールボックス内のメッセージの数  |
| size      | Number | メッセージのサイズ (バイト単位) |



##### 例題

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" // 必須
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

  // メールボックス情報
 $boxInfo:=$transporter.getBoxInfo()
 ALERT("メールボックスには "+String($boxInfo.mailCount)+" 件のメッセージがあります。")
```




## .getMail()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

**.getMail**( *msgNumber* : Integer ) : Object
| 引数        | タイプ     |    | 説明                                               |
| --------- | ------- |:--:| ------------------------------------------------ |
| msgNumber | Integer | -> | リスト中のメッセージの番号                                    |
| 戻り値       | Object  | <- | [Email オブジェクト](EmailObjectClass.md#email-オブジェクト) |


##### 説明

`.getMail()` 関数は、 [`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールを `Email` オブジェクトとして返します。 この関すを使用すると、メールのコンテンツをローカルで管理できるようになります。

*msgNumber* には、取得するメッセージの番号を渡します。 この番号は、[`.getMailInfoList()`](#getmailinfolist) 関数によって number プロパティに返されます。

この関数は、以下の場合には Null を返します:

*   *msgNumber* で指定したメッセージが存在しない場合
*   指定したメッセージが `.delete( )` によって削除フラグが立てられていた場合


**返されるオブジェクト**

`.getMail()` は [`Email` オブジェクト](EmailObjectClass.md#email-object) を返します。


##### 例題

メールボックスにある最初のメールの送信者を調べます:

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" // 必須
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```




## .getMailInfo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

**.getMailInfo**( *msgNumber* : Integer ) : Object
| 引数        | タイプ     |    | 説明              |
| --------- | ------- |:--:| --------------- |
| msgNumber | Integer | -> | リスト中のメッセージの番号   |
| 戻り値       | Object  | <- | MailInfo オブジェクト |


##### 説明

`.getMailInfo()` 関数は、 [`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールの `mailInfo` オブジェクトを返します。 この関数を使用するとメールに関する情報を取得することができます。

*msgNumber* には、取得するメッセージの番号を渡します。 この番号は、[`.getMailInfoList()`](#getmailinfo) 関数によって number プロパティに返されます。

返される `mailInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ | タイプ  | 説明                |
| ----- | ---- | ----------------- |
| size  | 数値   | メッセージのサイズ (バイト単位) |
| id    | テキスト | メッセージの固有ID        |

この関数は、以下の場合には **Null** を返します:

*   *msgNumber* で指定したメッセージが存在しない場合
*   指定したメッセージが `.delete( )` によって削除フラグが立てられていた場合


##### 例題


```4d
 var $server; $mailInfo : Object
 var $mailNumber : Integer

 $server.host:="pop.gmail.com" // 必須
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

  // メッセージ情報
 $mailInfo:=$transporter.getMailInfo(1) // 先頭メールを取得します
 If($mailInfo #Null)
    ALERT("最初のメールのサイズは "+String($mailInfo.size)+" バイトです。")
 End if
```




## .getMailInfoList()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

**.getMailInfoList()** : Collection
| 引数  | タイプ        |    | 説明                       |
| --- | ---------- |:--:| ------------------------ |
| 戻り値 | Collection | <- | `mailInfo` オブジェクトのコレクション |


##### 説明

`.getMailInfoList()` 関数は、 [`POP3 transporter`](#pop3-transporter-オブジェクト)が指定するメールボックス内の全メッセージについて記述した `mailInfo` オブジェクトのコレクションを返します。 この関数を使用すると、POP3メールサーバー上にあるメッセージの一覧をローカルで管理することができるようになります。

返されるコレクションの各 `mailInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ        | タイプ    | 説明                                  |
| ------------ | ------ | ----------------------------------- |
| \[ ].size   | Number | メッセージのサイズ (バイト単位)                   |
| \[ ].number | Number | メッセージの番号                            |
| \[ ].id     | Text   | メッセージの固有ID (メッセージをローカルに保存する場合に有用です) |

メールボックスにメッセージが一通もない場合、空のコレクションが返されます。



#### number と id プロパティについて

*number* プロパティは、`POP3_transporter` が作成された時点でのメールボックス内にあるメッセージの数です。 *number* プロパティは、特定のメッセージと紐づいた静的な値ではなく、セッション開始時点のメールボックス内のメッセージ同士の関係に応じてセッション間で値が異なります。 メッセージに割り当てられた番号は、[`POP3_transporter`](#pop3-transporter-オブジェクト) が維持されている間のみ有効です。 `POP3_transporter` が消去されると、削除フラグが立てられていたメッセージは削除されます。 ユーザーが再度サーバーにログインした場合、メールボックス内にあるカレントメッセージに対して、1 から x までの番号が再度割り振られます。

これに対し、*id* プロパティは、メッセージがサーバーで受信された時に割り振られる固有の番号です。 その番号はメッセージを受信した日付と時間を使用して計算され、POP3サーバーによって値が割り当てられます。 残念ながら、POP3サーバーは *id* プロパティをメッセージに対する主な参照としては使用しません。 POP3 セッションの間、サーバー上のメッセージを参照するには *number* プロパティを指定する必要があります。 メッセージ参照をデータベース内に取得しながらメッセージ本文はサーバー上に残しておくようなソリューションを開発する場合、メッセージの指定には細心の注意を払う必要があります。


##### 例題

メールボックス内にあるメールの総数と総サイズを取得します:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" // 必須
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 C_COLLECTION($mailInfo)
 C_LONGINT($vNum;$vSize)

 $mailInfo:=$transporter.getMailInfoList()
 $vNum:=$mailInfo.length
 $vSize:=$mailInfo.sum("size")

 ALERT("メールボックスには "+String($vNum)+" 件のメッセージがあります。合計サイズは "+String($vSize)+" バイトです。")
```




## .getMIMEAsBlob()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |
</details>

**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob
| 引数        | タイプ     |    | 説明                          |
| --------- | ------- |:--:| --------------------------- |
| msgNumber | Integer | -> | リスト中のメッセージの番号               |
| 戻り値       | BLOB    | <- | メールサーバーから返された MIME文字列の BLOB |


##### 説明

`.getMIMEAsBlob()` 関数は、 [`POP3_transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します。

*msgNumber* には、取得するメッセージの番号を渡します。 この番号は、[`.getMailInfoList()`](#getmailinfolist) 関数によって number プロパティに返されます。

この関数は、以下の場合には空の BLOB を返します:

*   *msgNumber* で指定したメッセージが存在しない場合
*   指定したメッセージが `.delete()` によって削除フラグが立てられていた場合


**返される BLOB**

`.getMIMEAsBlob()` は `BLOB` を返します。この BLOB はデータベースにアーカイブしたり、`MAIL Convert from MIME` コマンドを使用して [`Email` オブジェクト](EmailObjectClass.md#email-object) へと変換したりすることができます。


##### 例題

メールボックス内にあるメールの総数と総サイズを取得します:

```4d
 var $server : Object
 var $mailInfo : Collection
 var $blob : Blob
 var $transporter : 4D.POP3Transporter

 $server:=New object
 $server.host:="pop.gmail.com"
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $blob:=$transporter.getMIMEAsBlob($mailInfo[0].number)
```



## .host

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.host** : Text

#### 説明

`.host` プロパティは、 ホストサーバーの名前または IPアドレスを格納します。 この情報はメール通信 (SMTP、POP3、IMAP) に使用されます。








## .logFile

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

**.logFile** : Text

#### 説明

`.logFile` プロパティは、 メール接続に対して定義された拡張ログファイル (あれば) へのフルパスを格納します。 パスは、カレント Logs フォルダーを基準とした相対パス、あるいは絶対パスを指定できます。

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

`.port` プロパティは、  メール通信に使用されるポート番号を格納します。 `SMTP New transporter` や `POP3 New transporter`、 `IMAP New transporter` のコマンドで `transporter` オブジェクトを作成する際に使用される *server* オブジェクトにおいて、 このプロパティが指定されなかった場合に使用されるポートは次のとおりです:

*   **SMTP** - 587
*   **POP3** - 995
*   **IMAP** - 993








## .undeleteAll()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

**.undeleteAll()**
| 引数 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |


##### 説明

`.undeleteAll()` 関数は、 [`POP3_transporter`](#pop3-transporter-オブジェクト) 内のメールに設定された削除フラグをすべて除去します。 




## .user

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.user** : Text

#### 説明
`.user` プロパティは、  メールサーバーでの認証に使用されたユーザー名を格納します。 





<style> h2 { background: #d9ebff;}</style>
