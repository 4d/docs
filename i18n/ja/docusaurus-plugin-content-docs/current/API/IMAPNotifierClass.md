---
id: IMAPNotifierClass
title: IMAPNotifier
---

`IMAPNotifier` クラスを使用すると、選択されたメールボックスに対してIMAP IDLE 通知を管理することができます。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 21 R3 | クラスを追加 |

</details>

`IMAPNotifier` クラスは、`4D` クラスストアから利用可能です。

`IMAPNotifier` オブジェクトは[IMAP transporter](./IMAPTransporterClass.md#imap-transporter-object) と関連づけられており、メールボックス通知管理へのアクセスを提供します。

`IMAPNotifier` クラス関数は全てスレッドセーフです。

:::tip 関連したBlog 記事

[Instant Email Notifications with IMAP Transporter](https://blog.4d.com/instant-email-notifications-with-imap-transporter)

:::

### 例題

```4d
// リスナーコールバックを定義
var $parameter : Object
var $transporter : 4D.IMAPTransporter

$parameter:=New object
$parameter.authenticationMode:=IMAP authentication OAUTH2
$parameter.host:="Outlook.office365.com"
$parameter.port:=993
$parameter.accessTokenOAuth2:=$myToken
$parameter.user:="myaddress@email.com"
$parameter.listener:=cs.IMAPListener.new()

$transporter:=IMAP New transporter($parameter)
$transporter.selectBox("INBOX")

$transporter.notifier.start()     
```

## IMAPNotifier オブジェクト

IMAPNotifier オブジェクトは以下のプロパティと関数を提供します:

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #IMAPNotifier.isStarted.Syntax -->](#isstarted)<br/><!-- INCLUDE #IMAPNotifier.isStarted.Summary --> |
| [<!-- INCLUDE #IMAPNotifier.start().Syntax -->](#start)<br/><!-- INCLUDE #IMAPNotifier.start().Summary -->         |
| [<!-- INCLUDE #IMAPNotifier.stop().Syntax -->](#stop)<br/><!-- INCLUDE #IMAPNotifier.stop().Summary -->            |

<!-- REF 4D.IMAPNotifier.new().Desc -->

## 4D.IMAPNotifier.new()

<!-- REF #4D.IMAPNotifier.new().Syntax -->**4D.IMAPNotifier.new**() : 4D.IMAPNotifier<!-- END REF -->

<!-- REF #4D.IMAPNotifier.new().params -->

| 引数  | 型                               |                             | 説明                     |
| --- | ------------------------------- | --------------------------- | ---------------------- |
| 戻り値 | 4D.IMAPNotifier | <- | 新規 IMAPNotifier オブジェクト |

<!-- END REF -->

#### 説明

`4D.IMAPNotifier.new()` 関数は<!-- REF #4D.IMAPNotifier.new().Summary -->新しいIMAPNotifier オブジェクトを作成します<!-- END REF -->。

<!-- END REF -->

<!-- REF IMAPNotifier.isStarted.Desc -->

## .isStarted

<!-- REF #IMAPNotifier.isStarted.Syntax -->**.isStarted** : Boolean<!-- END REF -->

#### 説明

`.isStarted` プロパティは <!-- REF #IMAPNotifier.isStarted.Summary -->通知が開始されたか(`true`) 停止されたか(`false`) を表します<!-- END REF -->。 このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF IMAPNotifier.start().Desc -->

## .start()

<!-- REF #IMAPNotifier.start().Syntax -->**.start**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.start().params -->

| 引数  | 型      |                             | 説明           |
| --- | ------ | :-------------------------: | ------------ |
| 戻り値 | Object | <- | オペレーションステータス |

<!-- END REF -->

#### 説明

`.start()` 関数は<!-- REF #IMAPNotifier.start().Summary -->サーバー通知への登録を開始し、IMAP リスナーコールバックを起動します<!-- END REF -->。

メールボックスは`.start()` を呼び出す前に[`selectBox()`](./IMAPTransporterClass.md#selectbox) を使用して選択しておく必要があります。

コールバック関数は、`.start()` が呼び出されたワーカー内で実行されます。

:::note 注記

- 通知が開始されたら、(`getMail()` あるいは `send()` などの) 他のトランスポーター関数は利用できなくなります。 これらの関数を使用するためにはその前に`.stop()` を呼び出し、そして通知を再開するためには`.start()` をまた呼び出す必要があります。

- IMAP IDLE 通知は、変化が起きたということを表しますが、更新されたメールボックスのデータは提供しません。 メールボックスの状態を更新するためには、通知を停止し、更新されたデータを取得し(例えばを`getMail()` 使用するなど)、その後に通知を再開する必要があります。

:::

#### 返されるオブジェクト

| プロパティ      |                                                                                             | 型          | 説明                                                       |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------- |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                          |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー       |
| errors     |                                                                                             | Collection | 4D エラースタック(サーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                 |
|            | \[].message            | Text       | エラーの詳細                                                   |
|            | \[].componentSignature | Text       | エラーを返したコンポーネントの署名                                        |

<!-- END REF -->

<!-- REF IMAPNotifier.stop().Desc -->

## .stop()

<!-- REF #IMAPNotifier.stop().Syntax -->**.stop**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.stop().params -->

| 引数  | 型      |                             | 説明           |
| --- | ------ | :-------------------------: | ------------ |
| 戻り値 | Object | <- | オペレーションステータス |

<!-- END REF -->

#### 説明

`.stop()` 関数は<!-- REF #IMAPNotifier.stop().Summary -->通知の登録を停止します<!-- END REF -->。 他のトランスポーター関数(`getMail()` あるいは `send()`など) を呼び出す前に、`.stop()` 関数を呼び出す必要があります。

#### 返されるオブジェクト

| プロパティ      |                                                                                             | 型          | 説明                                                       |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------- |
| success    |                                                                                             | Boolean    | 処理が正常に終わった場合には true、それ以外は false                          |
| statusText |                                                                                             | Text       | IMAPサーバーから返されたステータスメッセージ、または 4Dエラースタック内に返された最後のエラー       |
| errors     |                                                                                             | Collection | 4D エラースタック(サーバーレスポンスが受信できた場合には返されません) |
|            | \[].errcode            | Number     | 4Dエラーコード                                                 |
|            | \[].message            | Text       | エラーの詳細                                                   |
|            | \[].componentSignature | Text       | エラーを返したコンポーネントの署名                                        |

<!-- END REF -->




