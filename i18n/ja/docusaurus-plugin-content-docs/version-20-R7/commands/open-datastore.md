---
id: open-datastore
title: Open datastore
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容                            |
| ----- | ----------------------------- |
| 20 R6 | Qodly インスタンスへのアクセスをサポート       |
| 20 R4 | 新しい *passwordAlgorithm* プロパティ |
| 18    | 追加                            |

</details>

<!--REF #_command_.Open datastore.Syntax-->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore<!-- END REF-->

<!--REF #_command_.Open datastore.Params-->

| 引数             | 型                            |   | 説明                                                            |
| -------------- | ---------------------------- | - | ------------------------------------------------------------- |
| connectionInfo | Object                       | → | リモートデータストアへの接続に使用する接続プロパティ                                    |
| localID        | Text                         | → | ローカルアプリケーション内で、開かれたデータストアに対して割り当てる ID (必須) |
| 戻り値            | cs.DataStore | ← | データストアオブジェクト                                                  |

<!-- END REF-->

#### 説明

`Open datastore` コマンドは、<!-- REF #_command_.Open datastore.Summary -->
*connectionInfo* 引数が指定するリモートデータストアにアプリケーションを接続します<!-- END REF -->。戻り値は、*localID* ローカルエイリアスに紐づけられた `cs.DataStore` オブジェクトです。

以下のリモートデータストアが、このコマンドでサポートされています:

| データストアの種類                                                           | 説明                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| リモート4Dアプリケーション                                                      | 次の条件を満たし、リモートデータストアとして利用可能な 4Dアプリケーション:<li>http および/または https が有効な状態で Webサーバーが起動されている。</li><li>データストアが REST に公開されている ([**RESTサーバーとして公開**](REST/configuration.md#restサーバーを開始する) オプションがチェックされている)。</li>ライセンスが必要な場合があります (注記参照)。 |
| [Qodly アプリケーション](https://developer.qodly.com/docs/cloud/getStarted) | 定義されたロールに関連付けられた有効な **APIキー** と **APIエンドポイント** が提供されている Qodly Serverアプリケーション。 *connectionInfo* オブジェクトの `api-key` プロパティを使って APIキーを渡す必要があります。 その後、そのロールに付与された権限の範囲で、返されたデータストアオブジェクトを操作できます。                                                                                          |

:::note

`Open datastore` のリクエストは 4D REST API に依存し、リモートの 4D Server上で接続を開くにあたって、4D クライアントライセンスが必要な場合があります。 選択したカレントユーザーログインモードに応じて認証を構成する方法については、[ユーザーログインモードのセクション](../REST/authUsers.md#ユーザーログインモード) を参照ください。

:::

*connectionInfo* には、接続したいリモートデータストアの詳細を格納したオブジェクトを渡します。 オブジェクトは以下のプロパティを格納することができます (*hostname* を除き、すべてのプロパティは任意です):

| プロパティ       | 型       | リモート4Dアプリケーション                                                                                                                                                                                                                                                                                                                             | Qodly アプリケーション                             |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| hostname    | Text    | リモートデータストアの名前または IPアドレス + ":" + ポート番号 (ポート番号は必須)                                                                                                                                                                                                                                                        | Qodly クラウドインスタンスの APIエンドポイント               |
| user        | Text    | ユーザー名                                                                                                                                                                                                                                                                                                                                      | - (無視されます)              |
| password    | Text    | ユーザーパスワード                                                                                                                                                                                                                                                                                                                                  | - (無視されます)              |
| idleTimeout | Integer | アクティビティがなかった場合に、セッションがタイムアウトするまでの時間 (分単位)。この時間を過ぎると、4D によって自動的にセッションが閉じられます。 省略時のデフォルトは 60 (1時間) です。 60 (分) 未満の値を指定することはできません (60 未満の値を渡した場合、タイムアウトは 60 (分) に設定されます)。 詳細については、[**セッションの終了**](../ORDA/remoteDatastores.md#セッションの終了) を参照ください。 | - (無視されます)              |
| tls         | Boolean | セキュアな接続を使用する場合は true (1)。 省略時のデフォルトは false です。 可能なかぎり安全な接続を使用することが推奨されます。                                                                                                                                                                                                                                               | セキュアな接続を使用する場合は true。 省略時のデフォルトは false です。 |
| type        | Text    | "4D Server" でなければなりません                                                                                                                                                                                                                                                                                                                     | - (無視されます)              |
| api-key     | Text    | - (無視されます)                                                                                                                                                                                                                                                                                                              | Qodly クラウドインスタンスの APIキー                    |

(\*) `tls` が true である場合、以下の条件が満たされていれば、HTTPSプロトコルが使用されます:

- リモートデータストアで HTTPS が有効化されている。
- 指定されたポート番号は、データベース設定で設定されている HTTPS ポートと合致している。
- 4Dアプリケーションに有効な証明書と非公開暗号鍵がインストールされている。 条件を満たさない場合、エラー "1610 - ホスト xxx へのリモートリクエストに失敗しました" が生成されます。

*localID* 引数は、リモートデータストア上で開かれるセッションのローカルエイリアスです。 *localID* 引数の ID がすでにアプリケーションに存在している場合、その ID が使用されています。 そうでない場合、データストアオブジェクトが使用されたときに *localID* のセッションが新規に作成されます。

一旦セッションが開かれると、以下の 2行の宣言は同等のものとなり、同じデータストアオブジェクトへの参照を返します:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds と $myds2 は同一のものです
```

`cs.Datastore` が提供するオブジェクトは、[ORDAマッピングルール](ORDA/dsMapping.md#変換のルール) に基づいてマッピングされます。

合致するデータストアが見つからない場合、`Open datastore` は **Null** を返します。

#### 例題 1

user / password を指定せずにリモートデータストアに接続します:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("このリモートデータストアには "+String($remoteDS.Students.all().length)+" 名の生徒が登録されています")
```

#### 例題 2

user / password / timeout / tls を指定してリモートデータストアに接続します:

```4d
 var $connectTo : Object
 var $remoteDS : cs.DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("このリモートデータストアには "+String($remoteDS.Students.all().length)+" 名の生徒が登録されています")
```

#### 例題 3

複数のリモートデータストアと接続します:

```4d
 var $connectTo : Object
 var $frenchStudents; $foreignStudents : cs.DataStore
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("フランスの生徒は "+String($frenchStudents.Students.all().length)+" 名です")
 ALERT("外国の生徒は "+String($foreignStudents.Students.all().length)+" 名です")
```

#### 例題 4

Qodly アプリケーションへの接続:

```4d
var $connectTo : Object:={hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com"; tls: True}

var $remoteDS : 4D.DataStoreImplementation
var $data : 4D.EntitySelection

$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" // 実際にはハードコードせず 
  // APIキーを安全な場所 (ファイルなど) に保存し、
  // コードで読み込むることが推奨されます

$remoteDS:=Open datastore($connectTo; "remoteId")
$data:=$remoteDS.item.all()

ALERT(String($data.length)+" 件の項目が読み込まれました")

```

#### エラー管理

エラーが起きた場合、コマンドは **Null** を返します。 リモートデータベースにアクセスできなかった場合 (アドレス違い、Webサーバーが開始されていない、http/https が有効化されていない、等)、エラー1610 "ホスト XXX へのリモートリクエストに失敗しました" が生成されます。 このエラーは `ON ERR CALL` で実装されたメソッドで割り込み可能です。

#### 参照

[ds](ds.md)
