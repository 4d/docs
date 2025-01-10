---
id: DataStoreClass
title: DataStore
---

[データストア](ORDA/dsMapping.md#datastore) とは、ORDA によって提供されるインターフェースオブジェクトです。データストアはデータベースへの参照とアクセスを提供します。 `Datastore` オブジェクトは以下のコマンドによって返されます:

- [ds](../commands/ds.md): メインデータストアへのショートカット
- [Open datastore](../commands/open-datastore.md): リモートデータストアを開きます

### 概要

|                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<br/><!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->                   |
| [<!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Syntax -->](#clearallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.clearAllRemoteContexts().Summary -->    |
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<br/><!-- INCLUDE DataStoreClass.dataclassName.Summary -->                                     |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<br/><!-- INCLUDE #DataStoreClass.encryptionStatus().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.flushAndLock().Syntax -->](#flushAndLock)<br/><!-- INCLUDE #DataStoreClass.flushAndLock().Summary -->                                  |
| [<!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Syntax -->](#getallremotecontexts)<br/><!-- INCLUDE #DataStoreClass.getAllRemoteContexts().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getGlobalStamp().Syntax -->](#getglobalstamp)<br/><!-- INCLUDE #DataStoreClass.getGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataStoreClass.getInfo().Summary -->                                                 |
| [<!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Syntax -->](#getremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.getRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<br/><!-- INCLUDE #DataStoreClass.getRequestLog().Summary -->                               |
| [<!-- INCLUDE #DataStoreClass.locked().Syntax -->](#locked)<br/><!-- INCLUDE #DataStoreClass.locked().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<br/><!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<br/><!-- INCLUDE #DataStoreClass.provideDataKey().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)<br/><!-- INCLUDE #DataStoreClass.setAdminProtection().Summary -->                |
| [<!-- INCLUDE #DataStoreClass.setGlobalStamp().Syntax -->](#setglobalstamp)<br/><!-- INCLUDE #DataStoreClass.setGlobalStamp().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Syntax -->](#setremotecontextinfo)<br/><!-- INCLUDE #DataStoreClass.setRemoteContextInfo().Summary -->          |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<br/><!-- INCLUDE #DataStoreClass.startRequestLog().Summary -->                         |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<br/><!-- INCLUDE #DataStoreClass.startTransaction().Summary -->                      |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<br/><!-- INCLUDE #DataStoreClass.stopRequestLog().Summary -->                            |
| [<!-- INCLUDE #DataStoreClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #DataStoreClass.unlock().Summary -->                                                    |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<br/><!-- INCLUDE #DataStoreClass.validateTransaction().Summary -->             |

<!-- REF DataStoreClass.dataclassName.Desc -->

## *.dataclassName*

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### 説明

データストアの各データクラスは [DataStore オブジェクト](ORDA/dsMapping.md#データストア) のプロパティとして利用可能です。 戻り値のオブジェクトには <!-- REF DataStoreClass.dataclassName.Summary -->データクラスの詳細が格納されています<!-- END REF -->。

#### 例題

```4d
 var $emp : cs.Employee
 var $sel : cs.EmployeeSelection
 $emp:=ds.Employee //$emp は Employeeデータクラスを格納します
 $sel:=$emp.all() // 全従業員のエンティティセレクションを取得します

  // あるいは以下のように直接書くことも可能です:
 $sel:=ds.Employee.all()
```

<!-- END REF -->

<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #DataStoreClass.cancelTransaction().Syntax -->**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.cancelTransaction()` 関数は、指定データストアのカレントプロセスにおいて、[`.startTransaction()`](#starttransaction) によって開かれた <!-- REF #DataStoreClass.cancelTransaction().Summary -->トランザクションをキャンセルします<!-- END REF -->。

`.cancelTransaction()` 関数は、トランザクション中におこなわれたデータ変更をすべてキャンセルします。

複数のトランザクションをネストすること (サブトランザクション) が可能です。 メイントランザクションがキャンセルされると、サブトランザクションも (たとえ個々に[`.validateTransaction()`](#validatetransactions) 関数で承認されていても) すべてキャンセルされます。

#### 例題

[`.startTransaction()`](#starttransaction) 関数の例題を参照ください。

<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Desc -->

## .clearAllRemoteContexts()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.clearAllRemoteContexts().Syntax -->**.clearAllRemoteContexts()**<!-- END REF -->

<!-- REF #DataStoreClass.clearAllRemoteContexts().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.clearAllRemoteContexts()` 関数は、 <!-- REF #DataStoreClass.clearAllRemoteContexts().Summary -->データストアのすべてのアクティブコンテキストの全属性をクリアします<!-- END REF -->。

この機能は主にデバッグで使用されます。 注意しなければならないのは、デバッガーを開くと、デバッガーはサーバーにリクエストを送り、データクラス属性をすべてクエリして表示することです。 このため、不要なデータでコンテキストが過負荷になることがあります。

そのような場合は、`.clearAllRemoteContexts()` を使用してコンテキストをクリアし、クリーンな状態を保つことができます。

#### 参照

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)

<!-- REF DataStoreClass.encryptionStatus().Desc -->

## .encryptionStatus()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.encryptionStatus().Params -->

| 引数  | 型      |                             | 説明                           |
| --- | ------ | :-------------------------: | ---------------------------- |
| 戻り値 | Object | <- | カレントデータストアと、各テーブルの暗号化についての情報 |

<!-- END REF -->

#### 説明

`.encryptionStatus()` 関数は、<!-- REF #DataStoreClass.encryptionStatus().Summary -->カレントデータファイルの暗号化状態を示すオブジェクトを返します<!-- END REF -->。カレントデータファイルとはつまり、`ds` データストアのデータファイルです。 各テーブルの状態も提供されます。

> その他のデータファイルの暗号化状態を調べるには、`Data file encryption status` コマンドを使います。

**戻り値**

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ       |             |               | 型       | 説明                                                            |
| ----------- | ----------- | ------------- | ------- | ------------------------------------------------------------- |
| isEncrypted |             |               | Boolean | データファイルが暗号化されていれば true                                        |
| keyProvided |             |               | Boolean | 暗号化されたデータファイルに合致する暗号化キーが提供されていれば true (\*) |
| テーブル        |             |               | Object  | 暗号化可能および暗号化されたテーブルと同じ数のプロパティを持つオブジェクト                         |
|             | *tableName* |               | Object  | 暗号化可能または暗号化されたテーブル                                            |
|             |             | name          | Text    | テーブル名                                                         |
|             |             | num           | Number  | テーブル番号                                                        |
|             |             | isEncryptable | Boolean | ストラクチャーファイルにおいて、テーブルが暗号化可能と宣言されていれば true                      |
|             |             | isEncrypted   | Boolean | データファイルにおいて、テーブルのレコードが暗号化されていれば true                          |

(\*) 暗号化キーは、以下の手段のいずれかで提供されます:

- `.provideDataKey()` コマンド
- データストアを開く前に接続されていたデバイスのルート
- `Discover data key` コマンド

#### 例題

カレントデータファイル内で暗号化されているテーブルの数を知りたい場合:

```4d
 var $status : Object

 $status:=ds.encryptionStatus()

 If($status.isEncrypted) // データベースが暗号化されていれば
    C_LONGINT($vcount)
    C_TEXT($tabName)
    For each($tabName;$status.tables)
       If($status.tables[$tabName].isEncrypted)
          $vcount:=$vcount+1
       End if
    End for each
    ALERT("データベースには "+String($vcount)+" 件の暗号化されたテーブルが存在しています。")
 Else
    ALERT("このデータベースは暗号化されていません。")
 End if
```

<!-- END REF -->

<!-- REF DataClassClass.flushAndLock().Desc -->

## .flushAndLock()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #DataStoreClass.flushAndLock().Syntax -->**.flushAndLock()**<!-- END REF -->

<!-- REF #DataStoreClass.flushAndLock().Params -->

| 引数 | 型 |   | 説明         |
| -- | - | - | ---------- |
|    |   |   | 引数を必要としません |

<!-- END REF -->

#### 説明

`.flushAndLock()` 関数は、<!-- REF #DataStoreClass.flushAndLock().Summary -->ローカルデータストアのキャッシュをフラッシュし、データベースに対して他のプロセスが書き込み操作をおこなうのを防ぎます<!-- END REF -->。 これにより、データストアは凍結状態におかれます。 この関数は、たとえばアプリケーションのスナップショットを実行する前に呼び出す必要があります。

:::info

この関数は次の場合にのみ使えます:

- ローカルデータストア ([`ds`](../commands/ds.md)) を対象に。
- クライアント/サーバー環境では、サーバーマシン上にて。

:::

この関数が実行されると、他のすべてのプロセスで `.save()` などの書き込み操作や、追加の `.flushAndLock()` の呼び出しが凍結され、データストアのロックが解除されるまで続きます。

同一プロセス内で `.flushAndLock()` を複数回呼び出した場合、データストアのロックを解除するには、同じ回数だけ [`.unlock()`](#unlock) を呼び出す必要があります。

データストアのロックが解除されるのは、以下の場合です:

- 同プロセス内で [`.unlock()`](#unlock) 関数が呼び出された場合、または
- `.flushAndLock()` 関数を呼び出したプロセスが終了した場合。

データストアがすでに他のプロセスからロックされている場合、`.flushAndLock()` の呼び出しは凍結され、データストアのロックが解除されたときに実行されます。

`.flushAndLock()` 関数が実行できない場合 (リモートの 4D で実行された場合など) には、エラーが発生します。

:::caution

[バックアップ](../Backup/backup.md) や [VSS](https://doc.4d.com/4Dv20/4D/20/Using-Volume-Shadow-Copy-Service-on-Windows.300-6330532.ja.html)
、[MSC](../MSC/overview.md) を含む他の 4D機能およびサービスもデータストアをロックすることがあります。 予期せぬ相互作用を避けるため、`.flushAndLock()` を呼び出す前に、データストアをロックするような他の操作がおこなわれていないことを確認してください。

:::

#### 例題

データフォルダーとともにカレントジャーナルファイルのコピーを作成します:

```4d
$destination:=Folder(fk documents folder).folder("Archive")
$destination.create()

ds.flushAndLock() // 他のプロセスからの書き込み操作をブロックします

$dataFolder:=Folder(fk data folder)
$dataFolder.copyTo($destination) // データフォルダーをコピーします

$oldJournalPath:=New log file // ジャーナルを閉じて、新しいものを作成します
$oldJournal:=File($oldJournalPath; fk platform path)
$oldJournal.moveTo($destination) // 閉じたジャーナルを保存します

ds.unlock() // コピー操作をおこなったので、データストアのロックを解除します
```

#### 参照

[.locked()](#locked)<br/>[.unlock()](#unlock)

<!-- REF DataClassClass.getAllRemoteContexts().Desc -->

## .getAllRemoteContexts()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.getAllRemoteContexts().Syntax -->**.getAllRemoteContexts()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getAllRemoteContexts().Params -->

| 引数  | 型          |                             | 説明                     |
| --- | ---------- | --------------------------- | ---------------------- |
| 戻り値 | Collection | <- | 最適化コンテキストオブジェクトのコレクション |

<!-- END REF -->

> **上級者向け:** この機能は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

#### 説明

`.getAllRemoteContexts()` 関数は、<!-- REF #DataStoreClass.getAllRemoteContexts().Summary -->データストア内のすべてのアクティブな最適化コンテキストに関する情報を格納するオブジェクトのコレクションを返します<!-- END REF -->。

> コンテキストの作成に関する詳細については、[クライアント/サーバーの最適化](../ORDA/client-server-optimization.md#最適化コンテキスト) を参照ください。

返されたコレクション内の各オブジェクトは、[`.getRemoteContextInfo()`](#返されるオブジェクト) セクションに記載されているプロパティを持ちます。

#### 例題

次のコードは 2つのコンテキストを設定し、`.getAllRemoteContexts()` を使用してそれらを取得します:

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $addresses : cs.AddressSelection
var $p : cs.PersonsEntity
var $a : cs.AddressEntity
var $contextA; $contextB : Object
var $info : Collection
var $text : Text

// リモートデータストアを開きます
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// コンテキストA を設定します
$contextA:=New object("context"; "contextA")
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each 

// コンテキストB を設定します
$contextB:=New object("context"; "contextB")
$addresses:=$ds.Address.all($contextB)
$text:=""
For each ($a; $addresses)
    $text:=$a.zipCode
End for each 

// すべてのリモートコンテキストを取得します (contextA と contextB)
$info:=$ds.getAllRemoteContexts()
//$info = [{name:"contextB"; dataclass:"Address"; main:"zipCode"},
{name:"contextA";dataclass:"Persons";main:"firstname,address.city"}]
```

> この例はデモンストレーションであり、実際の実装を想定したものではありません。

#### 参照

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataClassClass.getGlobalStamp().Desc -->

## .getGlobalStamp()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R3 | 追加 |

</details>

<!-- REF #DataStoreClass.getGlobalStamp().Syntax -->**.getGlobalStamp**() : Real<!-- END REF -->

<!-- REF #DataStoreClass.getGlobalStamp().Params -->

| 引数  | 型    |                             | 説明                |
| --- | ---- | --------------------------- | ----------------- |
| 戻り値 | Real | <- | グローバル変更スタンプのカレント値 |

<!-- END REF -->

#### 説明

`.getGlobalStamp()` 関数は、<!-- REF #DataStoreClass.getGlobalStamp().Summary -->データストアのグローバル変更スタンプのカレント値を返します<!-- END REF -->。

:::info

この関数は次の場合にのみ使えます:

- ローカルデータストア ([`ds`](../commands/ds.md)) を対象に。
- クライアント/サーバー環境では、サーバーマシン上にて。

:::

グローバルスタンプとデータ変更追跡の詳細については、[**グローバルスタンプの使い方**](../ORDA/global-stamp.md) を参照ください。

#### 例題

```4d
var $currentStamp : Real
var $hasModifications : Boolean

$currentStamp:=ds.getGlobalStamp()
methodWhichCouldModifyEmployees // なんらかのコード
$hasModifications:=($currentStamp # ds.getGlobalStamp())
```

#### 参照

[.setGlobalStamp()](#setglobalstamp)

<!-- REF DataStoreClass.getInfo().Desc -->

## .getInfo()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->

| 引数  | 型      |                             | 説明           |
| --- | ------ | :-------------------------: | ------------ |
| 戻り値 | Object | <- | データストアのプロパティ |

<!-- END REF -->

#### 説明

`.getInfo()` 関数は、<!-- REF #DataStoreClass.getInfo().Summary -->データストアの情報を提供するオブジェクトを返します<!-- END REF -->。 このメソッドは汎用的なコードを書くのに有用です。

**返されるオブジェクト**

| プロパティ      | 型      | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string | <li>"4D": ds で利用可能なメインデータストア</li><li>"4D Server": Open datastore で開かれたリモートデータストア</li>                                                                                                                                                                                                                                                                                                                                                                                                                               |
| networked  | ブール    | <li>true: ネットワーク接続を介してアクセスされたデータストア</li><li>false: ネットワーク接続を介さずにアクセスしているデータストア (ローカルデータベース)</li>                                                                                                                                                                                                                                                                                                                                                                                                                    |
| localID    | text   | マシン上のデータストアID。 これは、`Open datastore` コマンドで返される localId 文字列です。 メインデータストアの場合は空の文字列 ("") です。                                                                                                                                                                                                                                                                                                                                                                                                         |
| connection | object | リモートデータストア接続の情報を格納したオブジェクト (メインデータストアの場合は返されません)。 次のプロパティを含みます:<table><tr><th>プロパティ</th><th>タイプ</th><th>説明</th></tr><tr><td>hostname</td><td>text</td><td>リモートデータストアの IPアドレスまたは名称 + ":" + ポート番号</td></tr><tr><td>tls</td><td>boolean</td><td>リモートデータストアとセキュア接続を利用している場合は true</td></tr><tr><td>idleTimeout</td><td>number</td><td>セッション非アクティブタイムアウト (分単位)。</td></tr><tr><td>user</td><td>text</td><td>リモートデータストアにて認証されたユーザー</td></tr></table> |

- `.getInfo()` 関数が、4D Server またはシングルユーザー版 4D 上で実行された場合、`networked` は false となります。
- `.getInfo()` 関数が、リモート版 4D 上で実行された場合、`networked` は true となります。

#### 例題 1

```4d
 var $info : Object

 $info:=ds.getInfo() // 4D Server または 4D 上で実行した場合
  //{"type":"4D","networked":false,"localID":""}

 $info:=ds.getInfo() // リモート版4D 上で実行した場合
  //{"type":"4D","networked":true,"localID":""}
```

#### 例題 2

リモートデータストアの場合:

```4d
  var $remoteDS : cs.DataStore
  var $info; $connectTo : Object

 $connectTo:=New object("hostname";"111.222.33.44:8044";"user";"marie";"password";"aaaa")
 $remoteDS:=Open datastore($connectTo;"students")
 $info:=$remoteDS.getInfo()

  //{"type":"4D Server",
  //"localID":"students",
  //"networked":true,
  //"connection":{hostname:"111.222.33.44:8044","tls":false,"idleTimeout":2880,"user":"marie"}}
```

<!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Desc -->

## .getRemoteContextInfo()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.getRemoteContextInfo().Syntax -->**.getRemoteContextInfo**(*contextName* : Text) : Object <!-- END REF -->

<!-- REF #DataStoreClass.getRemoteContextInfo().Params -->

| 引数          | 型      |                             | 説明           |
| ----------- | ------ | --------------------------- | ------------ |
| contextName | Text   | ->                          | コンテキストの名称    |
| 戻り値         | Object | <- | 最適化コンテキストの詳細 |

<!-- END REF -->

> **上級者向け:** この機能は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

#### 説明

`.getRemoteContextInfo()` 関数は、<!-- REF #DataStoreClass.getRemoteContextInfo().Summary -->*contextName* で指定したデータストアの最適化コンテキストに関する情報を格納するオブジェクトを返します<!-- END REF -->。

最適化コンテキストの作成に関する詳細については、[クライアント/サーバーの最適化](../ORDA/client-server-optimization.md#最適化コンテキスト) を参照ください。

#### 返されるオブジェクト

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ                               | 型    | 説明                                                                                                                                                                                    |
| ----------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                                | Text | コンテキストの名称                                                                                                                                                                             |
| main                                | Text | コンテキストに関連する属性 (複数の場合はカンマ区切り)                                                                                                                                       |
| dataclass                           | Text | データクラスの名称                                                                                                                                                                             |
| currentItem (任意) | Text | コンテキストがリストボックスとリンクしている場合の [ページモード](../ORDA/remoteDatastores.md#エンティティセレクション型リストボックス) の属性。 コンテキスト名がリストボックスに使用されていない場合、または currentItem に対応するコンテキストが存在しない場合は、`Null` または空のテキスト要素として返されます。 |

コンテキストは属性に対するフィルターとして動作するため、*main* が空で返された場合、それはフィルターが適用されておらず、サーバーがすべてのデータクラス属性を返すことを意味します。

#### 例題

[.setRemoteContextInfo()](#example-1-3) の例題を参照ください。

#### 参照

[.setRemoteContextInfo()](#setremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.getRequestLog().Desc -->

## .getRequestLog()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R6 | 追加 |

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->

| 引数  | 型          |                             | 説明                                                    |
| --- | ---------- | :-------------------------: | ----------------------------------------------------- |
| 戻り値 | Collection | <- | オブジェクトのコレクション (要素毎に一つのリクエストを記述します) |

<!-- END REF -->

#### 説明

`.getRequestLog()` 関数は、<!-- REF #DataStoreClass.getRequestLog().Summary -->クライアント側のメモリに記録されている ORDAリクエストを返します<!-- END REF -->。 ORDAリクエストのログが、[`.startRequestLog()`](#startrequestlog) 関数によって事前に有効化されている必要があります。

このメソッドはリモートの 4D で呼び出す必要があり、そうでない場合には空のコレクションを返します。 これはクライアント/サーバー環境でのデバッグを想定して設計されています。

**戻り値**

スタックされたリクエストオブジェクトのコレクションが返されます。 直近のリクエストにはインデックス 0 が振られています。

ORDAリクエストログのフォーマットの詳細は、[**ORDAクライアントリクエスト**](https://doc.4d.com/4Dv18R6/4D/18-R6/Description-of-log-files.300-5217819.ja.html#4385373) の章を参照ください。

#### 例題

[`.startRequestLog()`](#startrequestlog) の例題2を参照ください。

<!-- END REF -->

<!-- REF DataStoreClass.isAdminProtected().Desc -->

## .isAdminProtected()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->

| 引数  | 型       |                             | 説明                                                                            |
| --- | ------- | :-------------------------: | ----------------------------------------------------------------------------- |
| 戻り値 | Boolean | <- | データエクスプローラーへのアクセスが無効に設定されているの場合は true、有効の場合は false (デフォルト) |

<!-- END REF -->

#### 説明

`.isAdminProtected()` 関数は、<!-- REF #DataStoreClass.isAdminProtected().Summary -->現在のセッションにおいて [データエクスプローラー](../Admin/dataExplorer.md) へのアクセスが無効に設定されているの場合は **true** を返します<!-- END REF -->。

`webAdmin`セッションにおいて、データエクスプローラーへのアクセスはデフォルトで有効となっていますが、管理者によるデータアクセスを禁止するため無効にすることもできます ([`.setAdminProtection()`](#setadminprotection) 関数参照)。

#### 参照

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->

<!-- REF DataClassClass.locked().Desc -->

## .locked()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #DataStoreClass.locked().Syntax -->**.locked()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.locked().Params -->

| 引数  | 型       |                             | 説明               |
| --- | ------- | --------------------------- | ---------------- |
| 戻り値 | Boolean | <- | ロックされている場合は true |

<!-- END REF -->

#### 説明

`.locked()` 関数は、<!-- REF #DataStoreClass.locked().Summary -->ローカルデータストアが現在ロックされている場合、**true** を返します<!-- END REF -->。

データファイルのスナップショットを実行する前などに、[.flushAndLock()](#flushandlock) 関数を使用してデータストアをロックすることができます。

:::caution

この関数は、データストアがバックアップや VSS などの他の管理機能によってロックされた場合にも、 `true` を返します ([.flushAndLock()](#flushandlock) 参照)。

:::

#### 参照

[.flushAndLock()](#flushandlock)<br/>[.unlock()](#unlock)

<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->

## .makeSelectionsAlterable()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.makeSelectionsAlterable()` 関数は、<!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->カレントアプリケーションのデータストアにおいて、すべての新規エンティティセレクションをデフォルトで追加可能に設定します<!-- END REF --> ([リモートデータストア](../ORDA/remoteDatastores.md) を含む)。 これはたとえば `On Startup` データベースメソッドなどで、一度だけ使用することが想定されています。

このメソッドが呼ばれてない場合、新規エンティティセレクションはそれぞれの "親" の性質や作成方法に応じて、共有可能に設定される場合もあります ([共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) 参照)。

> この関数は、`OB Copy` または [`.copy()`](#copy) に `ck shared` オプションを明示的に使用して作成されたエンティティセレクションには適用されません。

> **互換性に関する注記**: このメソッドは 4D v18 R5 より前のバージョンから変換されたプロジェクトで、[.add()](EntitySelectionClass.md#add) の呼び出しを使用しているものにおいてのみ使用してください。 このコンテキストにおいては、`.makeSelectionsAlterable()` を使用することで、既存プロジェクト内で以前の 4D のふるまいを再現し、時間を節約できます。
> 逆に、4D v18 R5 以降のバージョンで作成された新規プロジェクトにおいては、この関数の使用は **推奨されていません**。エンティティセレクションを共有可能にできないため、パフォーマンスとスケーラビリティの観点で妨げになるからです。

<!-- END REF -->

<!-- REF DataStoreClass.provideDataKey().Desc -->

## .provideDataKey()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->**.provideDataKey**( *curPassPhrase* : Text ) : Object <br/>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->

<!-- REF #DataStoreClass.provideDataKey().Params -->

| 引数            | 型      |                             | 説明            |
| ------------- | ------ | --------------------------- | ------------- |
| curPassPhrase | Text   | ->                          | カレントのパスフレーズ   |
| curDataKey    | Object | ->                          | カレントのデータ暗号化キー |
| 戻り値           | Object | <- | 暗号化キーのチェックの結果 |

<!-- END REF -->

#### 説明

`.provideDataKey()` 関数は、<!-- REF #DataStoreClass.provideDataKey().Summary -->データストアのカレントデータファイルのデータ暗号化キーを受け取り、暗号化されたデータと合致するかどうかチェックします<!-- END REF -->。 この関数は、暗号化されたデータベースを開くときや、データファイルの再暗号化など暗号化キーが必要となる暗号化オペレーションを実行する際に使用します。

> - `.provideDataKey()` 関数は暗号化されたデータベース内で呼び出される必要があります。 暗号化されていないデータベース内で呼び出した場合、エラー2003 (暗号化キーはデータと合致しません)  が返されます。 データベースが暗号化されているかどうかを調べるには `Data file encryption status` コマンドを使用します。
> - リモートの 4D または暗号化されたリモートデータストアから、`.provideDataKey()` 関数を呼び出すことはできません。

*curPassPhrase* パラメーターを使用する場合は、データ暗号化キーの生成に使用した文字列を渡します。 このパラメーターを使用した場合、暗号化キーが生成されます。

*curDataKey* パラメーターを使用する場合は、データ暗号化キー (*encodedKey* プロパティ) を格納するオブジェクトを渡します。 このキーは、`New data key` コマンドで生成された可能性があります。

有効な暗号化キーが提供された場合、そのキーはメモリ内の *keyChain* に追加され、暗号化モードが有効になります:

- 暗号化可能テーブルに対するデータ編集はすべて、ディスク上 (.4DD、.journal、 .4Dindx ファイル) で暗号化されます。
- 暗号化可能テーブルから読み出したすべてのデータは、メモリ内で復号化されます。

**戻り値**

コマンドの実行結果は、戻り値のオブジェクトに格納されます:

| プロパティ      |                                                                                              | 型          | 説明                                                  |
| ---------- | -------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------- |
| success    |                                                                                              | Boolean    | 提供された暗号化キーが暗号化データと合致すれば true、それ以外は false            |
|            |                                                                                              |            | 以下のプロパティは、success が *FALSE* であった場合にのみ返されます。         |
| status     |                                                                                              | Number     | エラーコード (提供された暗号化キーが間違っていた場合には 4) |
| statusText |                                                                                              | Text       | エラーメッセージ                                            |
| errors     |                                                                                              | Collection | エラーのスタック。 最初のエラーに最も高いインデックスが割り当てられます。               |
|            | \[ ].componentSignature | Text       | 内部コンポーネント名                                          |
|            | \[ ].errCode            | Number     | エラー番号                                               |
|            | \[ ].message            | Text       | エラーメッセージ                                            |

*curPassphrase* および *curDataKey* のどちらの引数も渡されなかった場合、`.provideDataKey()` は **null** を返します (この場合エラーは生成されません)。

#### 例題

```4d
 var $keyStatus : Object
 var $passphrase : Text

 $passphrase:=Request("パスフレーズを入力してください。")
 If(OK=1)
    $keyStatus:=ds.provideDataKey($passphrase)
    If($keyStatus.success)
       ALERT("提供された暗号化キーは有効です。")
    Else
       ALERT("提供された暗号化キーは無効です。暗号化データの編集はできません。")
    End if
 End if
```

<!-- END REF -->

<!-- REF DataStoreClass.setAdminProtection().Desc -->

## .setAdminProtection()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->

<!-- REF #DataStoreClass.setAdminProtection().Params -->

| 引数     | 型       |    | 説明                                                                                               |
| ------ | ------- | -- | ------------------------------------------------------------------------------------------------ |
| status | Boolean | -> | `webAdmin`ポート上で、データエクスプローラーによるデータアクセスを無効にするには true、アクセスを有効にするには false (デフォルト) |

<!-- END REF -->

#### 説明

`.setAdminProtection()` 関数は、<!-- REF #DataStoreClass.setAdminProtection().Summary -->WebAdminセッションにおける [データエクスプローラー](Admin/dataExplorer.md) 含め、[Web管理ポート](Admin/webAdmin.md#httpポート)上でのデータアクセスを無効に設定することができます<!-- END REF -->。

この関数が呼び出されなかった場合のデフォルトでは、データエクスプローラーを使用した `WebAdmin` 権限を持つセッションについて、Web管理ポート上のデータアクセスは常に許可されます。 環境によっては (たとえば、アプリケーションサーバーが第三者のマシン上でホストされている場合)、 管理者に対して [access key](Admin/webAdmin.md#access-key) 設定を含むサーバー設定の編集は許可しても、データ閲覧はできないようにしたいかもしれません。

このような場合にこの関数を呼び出すことで、ユーザーセッションが `WebAdmin` 権限を持っていても、マシンの Web管理ポート上でのデータエクスプローラーによるデータアクセスを無効にすることができます。 この関数を実行するとデータファイルは即座に保護され、そのステータスがディスク上に保存されます: アプリケーションを再起動しても、データファイルは保護されたままです。

#### 例題

運用前に呼び出す *protectDataFile* プロジェクトメソッドを作成します:

```4d
 ds.setAdminProtection(True) // データエクスプローラーによるデータアクセスを無効化します
```

#### 参照

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->

<!-- REF DataClassClass.setGlobalStamp().Desc -->

## .setGlobalStamp()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R3 | 追加 |

</details>

<!-- REF #DataStoreClass.setGlobalStamp().Syntax -->**.setGlobalStamp**( *newStamp* : Real)<!-- END REF -->

<!-- REF #DataStoreClass.setGlobalStamp().Params -->

| 引数       | 型    |    | 説明               |
| -------- | ---- | -- | ---------------- |
| newStamp | Real | -> | グローバル変更スタンプの新しい値 |

<!-- END REF -->

:::info 詳細モード

これは、グローバルスタンプのカレント値を変更する必要があるデベロッパー用の関数です。 十分な注意を払って使用してください。

:::

#### 説明

`.setDataStore()` 関数は、<!-- REF #DataStoreClass.setGlobalStamp().Summary -->データストアのグローバル変更スタンプの新しい値として *newStamp* を設定します<!-- END REF -->。

:::info

この関数は次の場合にのみ使えます:

- ローカルデータストア ([`ds`](../commands/ds.md)) を対象に。
- クライアント/サーバー環境では、サーバーマシン上にて。

:::

グローバルスタンプとデータ変更追跡の詳細については、[**グローバルスタンプの使い方**](../ORDA/global-stamp.md) を参照ください。

#### 例題

次のコードは、グローバル変更スタンプを設定します:

```4d
var $newValue: Real
$newValue:=ReadValueFrom // 代入するための新しい値を取得します
ds.setGlobalStamp($newValue)
```

#### 参照

[.getGlobalStamp()](#getglobalstamp)

<!-- REF #DataStoreClass.setRemoteContextInfo().Desc -->

## .setRemoteContextInfo()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.setRemoteContextInfo().Syntax -->**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer}})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassName* : Text; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributes* : Text {; *contextType* : Text { ; *pageLength* : Integer }})<br/>**.setRemoteContextInfo**( *contextName* : Text ; *dataClassObject* : 4D.DataClass ; *attributesColl* : Collection {; *contextType* : Text { ; *pageLength* : Integer }} )<!-- END REF -->

<!-- REF #DataStoreClass.setRemoteContextInfo().Params -->

| 引数              | 型                            |    | 説明                                                                                          |
| --------------- | ---------------------------- | -- | ------------------------------------------------------------------------------------------- |
| contextName     | Text                         | -> | コンテキストの名称                                                                                   |
| dataClassName   | Text                         | -> | データクラスの名称                                                                                   |
| dataClassObject | 4D.DataClass | -> | DataClass オブジェクト (例: datastore.Employee) |
| attributes      | Text                         | -> | カンマ区切りの属性リスト                                                                                |
| attributesColl  | Collection                   | -> | 属性名 (テキスト) のコレクション                                                       |
| contextType     | Text                         | -> | 渡す場合、値は "main" または "currentItem" のいずれか                                                      |
| pageLength      | Integer                      | -> | コンテキストにリンクされたエンティティセレクションのページ長 (デフォルトは 80)                               |

<!-- END REF -->

> **上級者向け:** この機能は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

#### 説明

`.setRemoteContextInfo()` 関数は、<!-- REF #DataStoreClass.setRemoteContextInfo().Summary -->指定したデータクラス属性を *contextName* の最適化コンテキストにリンクします<!-- END REF -->。 指定した属性に対して最適化コンテキストが既に存在する場合、このコマンドはそれを置き換えます。

ORDAクラスの関数にコンテキストを渡すと、RESTリクエストの最適化が即座に発動します:

- 自動モードのときとは異なり、先頭エンティティは完全にロードされません。
- 80件のエンティティ (または `pageLength` に対応するエンティティ数) のページが直ちにサーバーに要求される際、コンテキストの属性のみが要求されます。

> 最適化コンテキストの作成に関する詳細については、[クライアント/サーバーの最適化](../ORDA/client-server-optimization.md#最適化コンテキスト) を参照ください。

*contextName* には、データクラス属性にリンクする最適化コンテキストの名前を渡します。

コンテキストを受け取るデータクラスを指定するために、*dataClassName* または *dataClassObject* を渡すことができます。

コンテキストにリンクする属性を指定するには、*attributes* (テキスト) にカンマ区切りの属性リストを渡すか、属性名のコレクションを *attributesColl* (テキストのコレクション) に渡します。

*attributes* が空のテキスト、または *attributesColl* が空のコレクションの場合、データクラスのすべてのスカラー属性が最適化コンテキストに置かれます。 データクラスに存在しない属性を渡した場合、それは無視され、エラーが返されます。

*contextType* を渡して、コンテキストが標準コンテキストか、リストボックスに表示されているカレントエンティティセレクション項目のコンテキストかを指定することができます。

- "main" (デフォルト) を渡すと、*contextName* は標準コンテキストを指定します。
- "currentItem" の場合には、渡された属性はカレント項目のコンテキストに置かれます。  [エンティティセレクション型リストボックス](../ORDA/remoteDatastores.md#エンティティセレクション型リストボックス) を参照ください。

*pageLength* には、サーバーに要求するデータクラスエンティティの数を指定します。

エンティティセレクションであるリレーション属性 (1対N) について、*pageLength* を渡すことができます。 シンタックスは、`relationAttributeName:pageLength` です (例: employees:20)。

#### 例題 1

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Object
var $text : Text

// リモートデータストアを開きます
$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

// コンテキストを設定します
$contextA:=New object("context"; "contextA")
$ds.setRemoteContextInfo("contextA"; $ds.Persons; "firstname, lastname")

// ループを使い、サーバーにリクエストを送信します
$persons:=$ds.Persons.all($contextA)
$text:=""
For each ($p; $persons)
    $text:=$p.firstname + " " + $p.lastname
End for each

// コンテキストの情報を確認します
$info:=$ds.getRemoteContextInfo("contextA")
// $info = {name:"contextA";dataclass:"Persons";main:"firstname, lastname"}
```

> この例はデモンストレーションであり、実際の実装を想定したものではありません。

#### 例題 2

以下のコードでは、`Address` データクラスのエンティティ 30件のページをサーバーに要求しています。 返されるエンティティは、`zipCode` 属性のみを含みます。

各 `Address` エンティティに対して、20件の Persons エンティティが返され、それらには `lastname` と `firstname` 属性のみが含まれます:

```4d
var $ds : 4D.DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.setRemoteContextInfo("contextA"; $ds.Address; "zipCode, persons:20,\
persons.lastname, persons.firstname"; "main"; 30)
```

#### 例題 3 - リストボックス

```4d
// フォームのロード時に
Case of 
    : (Form event code=On Load)

        Form.ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

       // ページコンテキストの属性を設定します
        Form.ds.setRemoteContextInfo("LB"; Form.ds.Persons; "age, gender,\
        children"; "currentItem")

        Form.settings:=New object("context"; "LB")
        Form.persons:=Form.ds.Persons.all(Form.settings)
        // Form.persons がリストボックスに表示されます
End case 

// カレント項目のコンテキストの属性を取得します
Form.currentItemLearntAttributes:=Form.selectedPerson.getRemoteContextAttributes()
// Form.currentItemLearntAttributes = "age, gender, children"
```

#### 参照

[.getRemoteContextInfo()](#getremotecontextinfo)<br/>[.getAllRemoteContexts()](#getallremotecontexts)<br/>[.clearAllRemoteContexts()](#clearallremotecontexts)

<!-- REF DataStoreClass.startRequestLog().Desc -->

## .startRequestLog()

<details><summary>履歴</summary>

| リリース  | 内容                          |
| ----- | --------------------------- |
| 20    | サーバー側のサポート、新しい `options` 引数 |
| 17 R6 | 追加                          |

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *file* : 4D.File ; *options* : Integer )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->

<!-- REF #DataStoreClass.startRequestLog().Params -->

| 引数      | 型                       |    | 説明                                             |
| ------- | ----------------------- | -- | ---------------------------------------------- |
| file    | 4D.File | -> | File オブジェクト                                    |
| options | Integer                 | -> | ログレスポンスオプション (サーバーのみ)       |
| reqNum  | Integer                 | -> | メモリ内に保管するリクエストの数 (クライアントのみ) |

<!-- END REF -->

#### 説明

`.startRequestLog()` 関数は、<!-- REF #DataStoreClass.startRequestLog().Summary -->クライアント側でまたはサーバーサイドで ORDAリクエストのログを開始します<!-- END REF -->。 これはクライアント/サーバー環境でのデバッグを想定して設計されています。

:::info

ORDAリクエストログのフォーマットの詳細は、[**ORDAリクエスト**](../Debugging/debugLogFiles.md#ordaリクエスト) の章を参照ください。

:::

#### クライアント側

クライアント側の ORDAリクエストログを作成するには、リモートマシン上でこの関数を呼び出します。 ログは、渡した引数によってファイルまたはメモリに送ることができます:

- `File` コマンドで作成された *file* オブジェクトを渡した場合、ログデータはオブジェクト (JSON フォーマット) のコレクションとしてこのファイルに書き込まれます。 各オブジェクトは一つのリクエストを表します。<br/>ファイルがまだ存在しない場合には、作成されます。 もしファイルが既に存在する場合、新しいログデータはそこに追加されていきます。
  メモリへのログ記録が既に始まっている状態で、 `.startRequestLog()`が file 引数付きで呼び出された場合、メモリに記録されていたログは停止され消去されます。

> JSON 評価を実行するには、ファイルの終わりに手動で \] 文字を追加する必要があります。

- *reqNum* (倍長整数) 引数を渡した場合、メモリ内のログは (あれば) 消去され、新しいログが初期化されます。 *reqNum* 引数が指定する数にリクエスト数が到達するまでは、ログはメモリに保管され、到達した場合には古いエントリーから消去されていきます (FIFO スタック)。<br/>ファイルへのログ記録が既に始まっている状態で、`.startRequestLog()` が *reqNum* 引数付きで呼び出された場合、ファイルへのログは停止されます。

- 引数を何も渡さなかった場合、ログはメモリに記録されていきます。 前もって `.startRequestLog()` が*reqNum* 引数付きで 呼び出されていた場合 (ただし `.stopRequestLog()` の前)、ログが次回消去されるかまたは`.stopRequestLog()` が呼び出されるまで、ログデータはメモリ内にスタックされます。

#### サーバー側

サーバー側の ORDAリクエストログを作成するには、サーバーマシン上でこの関数を呼び出します。 ログは、`.jsonl` 形式のファイルに書き込まれます。 各オブジェクトは 1つのリクエストを表します。 ファイルが存在しない場合は、作成されます。 もしファイルが既に存在する場合、新しいログデータはそこに追加されていきます。

- *file* 引数を渡した場合、ログデータはこのファイルの指定位置に書き込まれます。 - *file* 引数を省略した場合、または引数が NULL の場合、ログデータは *ordaRequests.jsonl* という名前のファイルに書き込まれ、"/LOGS" フォルダーに保存されます。
- *options* 引数を使って、サーバーのレスポンスをログに記録するかどうか、および本文をログに含めるかどうかを指定することができます。 引数を省略した場合のデフォルトでは、全レスポンスがログに記録されます。 この引数には、以下の定数を使用することができます:

| 定数                            | 説明                                         |
| ----------------------------- | ------------------------------------------ |
| srl log all                   | 全レスポンスをログに残します (デフォルト値) |
| srl log no response           | レスポンスの記録を無効化します                            |
| srl log response without body | 本文を除いたレスポンスをログに残します                        |

#### 例題 1

ORDA クライアントリクエストをファイルに記録し、ログシーケンス番号を使用します:

```4d
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") // Logs フォルダー

 SET DATABASE PARAMETER(Client Log Recording;1) // グローバルログシーケンス番号をトリガーします
 ds.startRequestLog($file)
 $e:=ds.Persons.get(30001) // リクエストを送信します
 ds.stopRequestLog()
 SET DATABASE PARAMETER(Client Log Recording;0)
```

#### 例題 2

ORDA クライアントリクエストをメモリに記録します:

```4d
 var $es : cs.PersonsSelection
 var $log : Collection

 ds.startRequestLog(3) // メモリにはリクエストを 3つまで保管します
 $es:=ds.Persons.query("name=:1";"Marie")
 $es:=ds.Persons.query("name IN :1";New collection("Marie"))
 $es:=ds.Persons.query("name=:1";"So@")

 $log:=ds.getRequestLog()
 ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")
```

#### 例題 3

ORDA サーバーリクエストを専用ファイルに記録し、ログシーケンス番号と処理時間の記録を有効化します:

```4d
SET DATABASE PARAMETER(4D Server Log Recording;1)

$file:=Folder(fk logs folder).file("myOrdaLog.jsonl")
ds.startRequestLog($file)
...
ds.stopRequestLog()
SET DATABASE PARAMETER(4D Server Log Recording;0)


```

<!-- END REF -->

<!-- REF DataStoreClass.startTransaction().Desc -->

## .startTransaction()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.startTransaction()` 関数は、<!-- REF #DataStoreClass.startTransaction().Summary -->対象データストアに対応するデータベース上で、カレントプロセス内のトランザクションを開始します<!-- END REF -->。 トランザクションプロセス中にデータストアのエンティティに加えられた変更は、トランザクションが確定されるかキャンセルされるまで一時的に保管されたままになります。

> このメソッドがメインのデータストア (`ds` コマンドで返されるデータストア) で呼ばれた場合、トランザクションはメインのデータストアとそのデータベースで実行されるすべてのオペレーションに適用されます。これには、そこで実行される ORDA とクラシック言語も含まれます。

複数のトランザクションをネストすること (サブトランザクション) が可能です。 個々のトランザクションまたはサブトランザクションは、それぞれキャンセルするか確定される必要があります。 メイントランザクションがキャンセルされると、サブトランザクションも (たとえ個々に`.validateTransaction()` 関数で承認されていても) すべてキャンセルされます。

#### 例題

```4d
 var $connect; $status : Object
 var $person : cs.PersonsEntity
 var $ds : cs.DataStore
 var $choice : Text
 var $error : Boolean

 Case of
    :($choice="local")
       $ds:=ds
    :($choice="remote")
       $connect:=New object("hostname";"111.222.3.4:8044")
       $ds:=Open datastore($connect;"myRemoteDS")
 End case

 $ds.startTransaction()
 $person:=$ds.Persons.query("lastname=:1";"Peters").first()

 If($person#Null)
    $person.lastname:="Smith"
    $status:=$person.save()
 End if
 ...
 ...
 If($error)
    $ds.cancelTransaction()
 Else
    $ds.validateTransaction()
 End if
```

<!-- END REF -->

<!-- REF DataStoreClass.stopRequestLog().Desc -->

## .stopRequestLog()

<details><summary>履歴</summary>

| リリース  | 内容         |
| ----- | ---------- |
| 20    | サーバー側のサポート |
| 17 R6 | 追加         |

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->

| 引数 | 型 |   | 説明         |
| -- | - | - | ---------- |
|    |   |   | 引数を必要としません |

<!-- END REF -->

#### 説明

`.stopRequestLog()` 関数は、<!-- REF #DataStoreClass.stopRequestLog().Summary -->呼び出されたマシン (クライアントまたはサーバー) 上の ORDAリクエストのログをすべて停止します<!-- END REF -->(ファイル・メモリとも)。

実際には、ディスク上で開かれているドキュメントを閉じます。 クライアント側で、メモリ上でログの記録が開始されていた場合、そのログを停止します。

ORDAリクエストログがマシン上で開始されていない場合、この関数は何もしません。

#### 例題

[`.startRequestLog()`](#startrequestlog) の例題を参照ください。

<!-- END REF -->

<!-- REF DataClassClass.unlock().Desc -->

## .unlock()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #DataStoreClass.unlock().Syntax -->**.unlock()**<!-- END REF -->

<!-- REF #DataStoreClass.unlock().Params -->

| 引数 | 型 |   | 説明         |
| -- | - | - | ---------- |
|    |   |   | 引数を必要としません |

<!-- END REF -->

#### 説明

`.unlock()` 関数は、<!-- REF #DataStoreClass.unlock().Summary -->データストアにおける、書き込み操作に対する現在のロックが同じプロセスで設定されていた場合、そのロックを解除します<!-- END REF -->。 ローカルデータストアの書き込み操作は、[`.flushAndLock()`](#flushandlock) 関数を使用してロックすることができます。

現在のロックがデータストアの唯一のロックであった場合、書き込み操作は直ちに可能になります。 `.flushAndLock()` 関数がプロセス内で複数回呼ばれている場合、データストアのロックを解除するには、同じ回数だけ `.unlock()` を呼び出す必要があります。

`.unlock()` 関数は、対応する `.flushAndLock()` を呼び出したプロセス内で呼び出す必要があります。そうでない場合には、この関数は何もおこなわず、ロックも解除されません。

ロックが解除されているデータストアで `.unlock()` 関数を呼び出した場合、何もおこりません。

#### 参照

[.flushAndLock()](#flushandlock)<br/>[.locked()](#locked)

<!-- REF DataStoreClass.validateTransaction().Desc -->

## .validateTransaction()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->

| 引数 | 型 |   | 説明         |
| -- | - | - | ---------- |
|    |   |   | 引数を必要としません |

<!-- END REF -->

#### 説明

`.validateTransaction()` 関数は、対象データストアの対応するレベルで [`.startTransaction()`](#starttransaction) で開始された<!-- REF #DataStoreClass.validateTransaction().Summary -->トランザクションを受け入れます<!-- END REF -->。

この関数は、トランザクション中におこなわれたデータストア上のデータの変更を保存します。

複数のトランザクションをネストすること (サブトランザクション) が可能です。 メイントランザクションがキャンセルされると、サブトランザクションも (たとえ個々にこの関数で承認されていても) すべてキャンセルされます。

#### 例題

[`.startTransaction()`](#starttransaction) の例題を参照ください。

<!-- END REF -->
