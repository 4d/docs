---
id: POP3TransporterClass
title: POP3Transporter
---

`POP3Transporter` クラスを使って、POP3 メールサーバーからメッセージを取得することができます。

### POP3 Transporter オブジェクト

POP3 Transporter オブジェクトは [POP3 New transporter](#pop3-new-transporter) コマンドによってインスタンス化されます。 これらは、次のプロパティや関数を持ちます:

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|


<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #_command_.POP3 New transporter.Params -->
| 引数     | 型                  |    | 説明                                                                             |
| ------ | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server | object             | -> | メールサーバー情報                                                                      |
| 戻り値    | 4D.POP3Transporter | <- | [POP3 transporter オブジェクト](#pop3-transporter-オブジェクト)|<!-- END REF -->


|


#### 説明

`POP3 New transporter` コマンドは、 <!-- REF #_command_.POP3 New transporter.Summary -->新規の POP3接続を設定します<!-- END REF -->。この POP3接続は、*server* 引数の指定に応じてを設定され、コマンドの戻り値は新しい *[POP3 transporter](#pop3-transporter-オブジェクト)* オブジェクトです。 返される transporter オブジェクトは通常、メールの受信に使用されます。

*server* 引数として、以下のプロパティを持つオブジェクトを渡します:

| *server*                                                                                                                                                                                                                                                                       | デフォルト値 (省略時)                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| false                            |
| .**accessTokenOAuth2**: Text<br/> OAuth2 認証の資格情報を表すテキスト文字列。 `authenticationMode` が OAUTH2 の場合のみ使用されます。 `accessTokenOAuth2` が使用されているが `authenticationMode` が省略されていた場合、OAuth2 プロトコルが使用されます (サーバーで許可されていれば)。 *[POP3 transporter](#pop3-transporter-オブジェクト)* オブジェクトには返されません。 | なし                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| サーバーがサポートするもっともセキュアな認証モードが使用されます |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *必須*                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| なし                               |
| **.password** : Text<br/> サーバーとの認証のためのユーザーパスワード。 *[POP3 transporter](#pop3-transporter-オブジェクト)* オブジェクトには返されません。                                                                                                                                                          | なし                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| なし                               |

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

<!-- END REF -->

## 4D.POP3Transporter.new()

<!-- REF #4D.POP3Transporter.new().Syntax -->**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #4D.POP3Transporter.new().Params -->
| 引数     | 型                  |    | 説明                                                                             |
| ------ | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server | オブジェクト             | -> | メールサーバー情報                                                                      |
| 戻り値    | 4D.POP3Transporter | <- | [POP3 transporter オブジェクト](#pop3-transporter-オブジェクト)|<!-- END REF -->

|

#### 説明

`4D.POP3Transporter.new()` 関数は、 <!-- REF #4D.POP3Transporter.new().Summary -->`4D.POP3Transporter` 型の新しいオブジェクトを作成して返します<!-- END REF -->. この関数の機能は、[`POP3 New transporter`](#pop3-new-transporter) コマンドと同一です。

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModePOP3.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

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

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

## .delete()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->**.delete**( *msgNumber* : Integer )<!-- END REF -->


<!-- REF #POP3TransporterClass.delete().Params -->
| 引数        | 型  |    | 説明                                      |
| --------- | -- |:--:| --------------------------------------- |
| msgNumber | 整数 | -> | 削除するメッセージの番号|<!-- END REF -->

|

##### 説明

`.delete()` 関数は、 <!-- REF #POP3TransporterClass.delete().Summary -->*msgNumber* で指定したメールメッセージに対して、POP3サーバーから削除するためのフラグを立てます<!-- END REF -->.

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

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->**.getBoxInfo()** : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| 引数  | 型      |    | 説明                                        |
| --- | ------ |:--:| ----------------------------------------- |
| 戻り値 | オブジェクト | <- | boxInfo オブジェクト|<!-- END REF -->

|

##### 説明

`.getBoxInfo()` 関数は、 <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->対象の [`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックスに対応する `boxInfo` オブジェクトを返します<!-- END REF -->. この関数を使用するとメールボックスに関する情報を取得することができます。

返される `boxInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ     | 型      | 説明                |
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

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMail().Params -->
| 引数        | 型      |    | 説明                                                                          |
| --------- | ------ |:--:| --------------------------------------------------------------------------- |
| msgNumber | 整数     | -> | リスト中のメッセージの番号                                                               |
| 戻り値       | オブジェクト | <- | [Email オブジェクト](EmailObjectClass.md#email-object)|<!-- END REF -->

|

##### 説明

`.getMail()` 関数は、 <!-- REF #POP3TransporterClass.getMail().Summary -->[`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールを `Email` オブジェクトとして返します<!-- END REF -->. この関すを使用すると、メールのコンテンツをローカルで管理できるようになります。

*msgNumber* には、取得するメッセージの番号を渡します。 この番号は、[`.getMailInfoList()`](#getmailinfolist) 関数によって number プロパティに返されます。

この関数は、以下の場合には Null を返します:

* *msgNumber* で指定したメッセージが存在しない場合
* 指定したメッセージが `.delete( )` によって削除フラグが立てられていた場合

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

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| 引数        | 型      |    | 説明                                         |
| --------- | ------ |:--:| ------------------------------------------ |
| msgNumber | 整数     | -> | リスト中のメッセージの番号                              |
| 戻り値       | オブジェクト | <- | MailInfo オブジェクト|<!-- END REF -->

|

##### 説明

`.getMailInfo()` 関数は、 <!-- REF #POP3TransporterClass.getMailInfo().Summary -->[`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールの `mailInfo` オブジェクトを返します<!-- END REF -->. この関数を使用するとメールに関する情報を取得することができます。

*msgNumber* には、取得するメッセージの番号を渡します。 この番号は、[`.getMailInfoList()`](#getmailinfolist) 関数によって number プロパティに返されます。

返される `mailInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ | 型      | 説明                |
| ----- | ------ | ----------------- |
| size  | Number | メッセージのサイズ (バイト単位) |
| id    | Text   | メッセージの固有ID        |

この関数は、以下の場合には **Null** を返します:

* *msgNumber* で指定したメッセージが存在しない場合
* 指定したメッセージが `.delete( )` によって削除フラグが立てられていた場合

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

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->**.getMailInfoList()** : Collection<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| 引数  | 型      |    | 説明                                                  |
| --- | ------ |:--:| --------------------------------------------------- |
| 戻り値 | コレクション | <- | `mailInfo` オブジェクトのコレクション|<!-- END REF -->

|

##### 説明

`.getMailInfoList()` 関数は、 <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->[`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の全メッセージについて記述した `mailInfo` オブジェクトのコレクションを返します<!-- END REF -->. この関数を使用すると、POP3メールサーバー上にあるメッセージの一覧をローカルで管理することができるようになります。

返されるコレクションの各 `mailInfo` オブジェクトには、以下のプロパティが格納されています:

| プロパティ        | 型      | 説明                                  |
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

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->


<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| 引数        | 型    |    | 説明                                                     |
| --------- | ---- |:--:| ------------------------------------------------------ |
| msgNumber | 整数   | -> | リスト中のメッセージの番号                                          |
| 戻り値       | BLOB | <- | メールサーバーから返された MIME文字列の BLOB|<!-- END REF -->

|

##### 説明

`.getMIMEAsBlob()` 関数は、 <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->[`POP3_transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します<!-- END REF -->.

*msgNumber* には、取得するメッセージの番号を渡します。 この番号は、[`.getMailInfoList()`](#getmailinfolist) 関数によって number プロパティに返されます。

この関数は、以下の場合には空の BLOB を返します:

* *msgNumber* で指定したメッセージが存在しない場合
* 指定したメッセージが `.delete()` によって削除フラグが立てられていた場合

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

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF POP3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R2 | 追加 |

</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->**.undeleteAll()**<!-- END REF -->


<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| 引数 | 型 |  | 説明                                           |
| -- | - |::| -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->

|

##### 説明

`.undeleteAll()` 関数は、 <!-- REF #POP3TransporterClass.undeleteAll().Summary -->[`POP3_transporter`](#pop3-transporter-オブジェクト) 内のメールに設定された削除フラグをすべて除去します<!-- END REF -->.

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
