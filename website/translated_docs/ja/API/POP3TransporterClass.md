---
id: POP3TransporterClass
title: POP3Transporter
---

The `POP3Transporter` class allows you to retrieve messages from a POP3 email server.


### POP3 Transporter オブジェクト

POP3 Transporter objects are instantiated with the [POP3 New transporter](#pop3-new-transporter) command. これらは、次のプロパティや関数を持ちます:


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->
**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF POP3TransporterClass.POP3 New transporter.Params -->
| 参照     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | object             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.POP3Transporter | <- | [POP3 transporter オブジェクト](#pop3-transporter-オブジェクト) |
<!-- END REF -->


#### 説明

`POP3 New transporter` コマンドは、*server* 引数の指定に応じて <!-- REF #_command_.POP3 New transporter.Summary -->新規の POP3接続を設定します<!-- END REF -->。戻り値は、新しい *[POP3 transporter](#pop3-transporter-object)* オブジェクトです。 The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:


| *server*                                                                                                                                                                                                                                                                                                                                                        | Default value (if omitted)                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                               |
| .**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](#smtptransporterobject)* object. | none                                                                |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                         |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| none                                                                |
| **.password** : Text<p>User password for authentication on the server. Not returned in *[SMTP transporter](#smtptransporterobject)* object.                                                                                                                                                                                              | none                                                                |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| none                                                                |


#### 戻り値

The function returns a [**POP3 transporter object**](#pop3-transporter-object). All returned properties are **read-only**.
> The POP3 connection is automatically closed when the transporter object is destroyed.

#### 例題

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log to save in the Logs folder

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->

## 4D.POP3Transporter.new()


<!-- REF #4D.POP3Transporter.new().Syntax -->
**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF #4D.POP3Transporter.new().Params -->
| 参照     | タイプ                |    | 説明                                                  |
| ------ | ------------------ |:--:| --------------------------------------------------- |
| server | オブジェクト             | -> | メールサーバー情報                                           |
| 戻り値    | 4D.POP3Transporter | <- | [POP3 transporter オブジェクト](#pop3-transporter-オブジェクト) |
<!-- END REF -->

#### 説明

`4D.POP3Transporter.new()` 関数は、 <!-- REF #4D.POP3Transporter.new().Summary -->新規の `4D.POP3Transporter`型オブジェクトを作成して返します<!-- END REF -->。 この関数の機能は、[`POP3 New transporter`](#pop3-new-transporter) コマンドと同一です。

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->




<!-- INCLUDE transporter.authenticationModePOP3.Desc -->



<!-- INCLUDE transporter.checkConnection().Desc -->

#### 例題

```4d
 var $pw :  Text
 var $options : Object
 $options:=New object

 $pw:=Request("Please enter your password:")
 if(OK=1)
    $options.host:="pop3.gmail.com"

    $options.user:="test@gmail.com"
    $options.password:=$pw

    $transporter:=POP3 New transporter($options)

    $status:=$transporter.checkConnection()
    If($status.success)
       ALERT("POP3 connection check successful!")
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
```


<!-- INCLUDE transporter.connectionTimeOut.Desc -->




## .delete()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->
**.delete**( *msgNumber* : Integer )<!-- END REF -->

<!-- REF #POP3TransporterClass.delete().Params -->
| 参照        | タイプ |    | 説明           |
| --------- | --- |:--:| ------------ |
| msgNumber | 整数  | -> | 削除するメッセージの番号 |
<!-- END REF -->


##### 説明

`.delete( )` 関数は、 <!-- REF #POP3TransporterClass.delete().Summary -->*msgNumber* で指定したメールメッセージに対して、POP3サーバーから削除するためのフラグを立てます<!-- END REF -->。

In the *msgNumber* parameter, pass the number of the email to delete. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

Executing this method does not actually remove any email. The flagged email will be deleted from the POP3 server only when the `POP3_transporter` object (created with `POP3 New transporter`) is destroyed. The flag could be also be removed using the `.undeleteAll()` method.
> If the current session unexpectedly terminates and the connection is closed (e.g., timeout, network failure, etc.), an error message is generated and messages marked for deletion will remain on the POP3 server.

##### 例題

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Mark your mail as "to be deleted at the end of the session"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Force the session closure to delete the mails marked for deletion
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //deletion confirmed
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //remove deletion flags
 End if
```




## .getBoxInfo()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo()** : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| 参照  | タイプ    |    | 説明             |
| --- | ------ |:--:| -------------- |
| 戻り値 | オブジェクト | <- | boxInfo object |
<!-- END REF -->


##### 説明

`.getBoxInfo()` 関数は、 <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->対象の [`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックスに対応する `boxInfo` オブジェクトを返します<!-- END REF -->。 This function allows you to retrieve information about the mailbox.

The `boxInfo` object returned contains the following properties:

| プロパティ     | タイプ | 説明                                |
| --------- | --- | --------------------------------- |
| mailCount | 数値  | Number of messages in the mailbox |
| size      | 数値  | Message size in bytes             |



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

<!-- REF #POP3TransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMail().Params -->
| 参照        | タイプ    |    | 説明                                               |
| --------- | ------ |:--:| ------------------------------------------------ |
| msgNumber | 整数     | -> | リスト中のメッセージの番号                                    |
| 戻り値       | オブジェクト | <- | [Email object](EmailObjectClass.md#email-object) |
<!-- END REF -->


##### 説明

`.getMail()` 関数は、 <!-- REF #POP3TransporterClass.getMail().Summary -->[`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールを `Email` オブジェクトとして返します<!-- END REF -->。 This function allows you to locally handle the email contents.

Pass in *msgNumber* the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) function.

The method returns Null if:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


**返されるオブジェクト**

`.getMail()` は [`Email` オブジェクト](EmailObjectClass.md#email-object) を返します。


##### 例題

You want to know the sender of the first mail of the mailbox:

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

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->
**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| 参照        | タイプ    |    | 説明              |
| --------- | ------ |:--:| --------------- |
| msgNumber | 整数     | -> | リスト中のメッセージの番号   |
| 戻り値       | オブジェクト | <- | MailInfo オブジェクト |
<!-- END REF -->


##### 説明

`.getMailInfo()` 関数は、 <!-- REF #POP3TransporterClass.getMailInfo().Summary -->[`POP3 transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメールの `mailInfo` オブジェクトを返します<!-- END REF -->。 This function allows you to retrieve information about the email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfo) method.

The `mailInfo` object returned contains the following properties:

| プロパティ | タイプ  | 説明                       |
| ----- | ---- | ------------------------ |
| size  | 数値   | Message size in bytes    |
| id    | テキスト | Unique ID of the message |

The method returns **Null** if:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


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

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->
**.getMailInfoList()** : Collection<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| 参照  | タイプ    |    | 説明                       |
| --- | ------ |:--:| ------------------------ |
| 戻り値 | コレクション | <- | `mailInfo` オブジェクトのコレクション |
<!-- END REF -->


##### 説明

`.getMailInfoList()` 関数は、 <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->[`POP3 transporter`](#pop3-transporter-オブジェクト)が指定するメールボックス内の全メッセージについて記述した `mailInfo` オブジェクトのコレクションを返します<!-- END REF -->。 This function allows you to locally manage the list of messages located on the POP3 mail server.

Each `mailInfo` object in the returned collection contains the following properties:

| プロパティ        | タイプ  | 説明                                  |
| ------------ | ---- | ----------------------------------- |
| \[ ].size   | 数値   | Message size in bytes               |
| \[ ].number | 数値   | メッセージの番号                            |
| \[ ].id     | テキスト | メッセージの固有ID (メッセージをローカルに保存する場合に有用です) |

If the mailbox does not contain a message, an empty collection is returned.



#### number and ID properties

*number* is the number of a message in the mailbox at the time the `POP3_transporter` was created. The *number* property is not a static value in relation to any specific message and will change from session to session dependent on its relation to other messages in the mailbox at the time the session was opened. The numbers assigned to the messages are only valid during the lifetime of the [`POP3_transporter`](#pop3-transporter-object). At the time the `POP3_transporter` is deleted any message marked for deletion will be removed. When the user logs back into the server, the current messages in the mailbox will be renumbered from 1 to x.

The *id* however is a unique number assigned to the message when it was received by the server. This number is calculated using the time and date that the message is received and is a value assigned by your POP3 server. Unfortunately, POP3 servers do not use the *id* as the primary reference to their messages. Throughout the POP3 sessions you will need to specify the *number* as the reference to messages on the server. Developers may need to take some care if developing solutions which bring references to messages into a database but leave the body of the message on the server.


##### 例題

You want to know the total number and size of emails in the mailbox:

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

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| 参照        | タイプ  |    | 説明                                                    |
| --------- | ---- |:--:| ----------------------------------------------------- |
| msgNumber | 整数   | -> | リスト中のメッセージの番号                                         |
| 戻り値       | BLOB | <- | Blob of the MIME string returned from the mail server |
<!-- END REF -->


##### 説明

`.getMIMEAsBlob()` 関数は、 <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->[`POP3_transporter`](#pop3-transporter-オブジェクト) が指定するメールボックス内の、*msgNumber* に対応するメッセージの MIMEコンテンツを格納した BLOB を返します<!-- END REF -->。

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

The method returns an empty BLOB if:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete()`.


**Returned BLOB**

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


##### 例題

You want to know the total number and size of emails in the mailbox:

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
| バージョン  | 内容 |
| ------ | -- |
| v18 R2 | 追加 |
</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->
**.undeleteAll()**<!-- END REF -->

<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


##### 説明

`.undeleteAll()` 関数は、 <!-- REF #POP3TransporterClass.undeleteAll().Summary -->[`POP3_transporter`](#pop3-transporter-オブジェクト) 内のメールに設定された削除フラグをすべて除去します<!-- END REF -->。 

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->



<style> h2 { background: #d9ebff;}</style>
