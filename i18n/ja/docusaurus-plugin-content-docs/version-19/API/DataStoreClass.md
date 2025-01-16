---
id: DataStoreClass
title: DataStore
---

[データストア](ORDA/dsMapping.md#datastore) とは、ORDA によって提供されるインターフェースオブジェクトです。データストアはデータベースへの参照とアクセスを提供します。 `Datastore` オブジェクトは以下のコマンドによって返されます:

* [ds](#ds): メインデータストアへのショートカット
* [Open datastore](#open-datastore): リモートデータストアを開きます

### 概要

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |

## ds

<details><summary>履歴</summary>

| リリース | 内容                  |
| ---- | ------------------- |
| 18   | localID パラメーターをサポート |
| 17   | 追加                  |

</details>

<!-- REF #_command_.ds.Syntax -->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->


<!-- REF #_command_.ds.Params -->
| 引数      | 型            |    | 説明                                  |
| ------- | ------------ | -- | ----------------------------------- |
| localID | Text         | -> | 参照を取得したいリモートデータストアのローカルID           |
| 戻り値     | cs.DataStore | <- | データストア参照|<!-- END REF -->

|

#### 説明

`ds` コマンドは、 <!-- REF #_command_.ds.Summary -->カレントの 4Dデータベース、または *localID* で指定したデータベースに合致するデータストアの参照を返します<!-- END REF -->。

*localID* を省略した (または空の文字列 "" を渡した) 場合には、ローカル4Dデータベース (4D Server でリモートデータベースを開いている場合にはそのデータベース) に合致するデータストアの参照を返します。 データストアは自動的に開かれ、`ds` を介して直接利用することができます。

開かれているリモートデータストアのローカルIDを *localID* パラメーターに渡すと、その参照を取得できます。 このデータストアは、あらかじめカレントデータベース (ホストまたはコンポーネント) によって [`Open datastore`](#open-datastore) コマンドで開かれている必要があります。 このコマンドを使用したときにローカルIDが定義されます。
> ローカルIDのスコープは、当該データストアを開いたデータベースです。

*localID* に合致するデータストアが見つからない場合、コマンドは **Null** を返します。

`ds` を使用するには、データベースが **ORDAの必須要件** の章で説明されているように ORDA に準拠している必要があります。 以下のルールが適用されます:

* データストアは単一のプライマリーキーを持つテーブルのみを参照します。 プライマリーキーがないテーブル、あるいは複合プライマリーキーがあるテーブルは参照されません。
* BLOB型属性はデータストアで管理されません。

#### 例題 1

4Dデータベースのメインデータストアを使用します:

```4d
 $result:=ds.Employee.query("firstName = :1";"S@")
```

#### 例題 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs.DataStore

 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")

 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
```

```4d
  // getFirst メソッド
  // getFirst(localID;dataclass) -> entity
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity

 $0:=ds($localId)[$dataClassName].all().first()
```

## Open datastore

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #_command_.Open datastore.Syntax -->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->


<!-- REF #_command_.Open datastore.Params -->
| 引数             | 型            |    | 説明                                         |
| -------------- | ------------ | -- | ------------------------------------------ |
| connectionInfo | Object       | -> | リモートデータストアへの接続に使用する接続プロパティ                 |
| localID        | Text         | -> | ローカルアプリケーション内で、開かれたデータストアに対して割り当てる ID (必須) |
| 戻り値            | cs.DataStore | <- | データストアオブジェクト|<!-- END REF -->

|

#### 説明

`Open datastore` コマンドは、 <!-- REF #_command_.Open datastore.Summary -->*connectionInfo* 引数が指定する 4Dデータベースにアプリケーションを接続します<!-- END REF --> 。戻り値は、*localID* ローカルエイリアスに紐づけられた `cs.DataStore` オブジェクトです。

*connectionInfo* で指定する 4Dデータベースはリモートデーターストアとして利用可能でなければなりません。つまり、以下の条件を満たしている必要があります:

* データベースの Webサーバーは、http または https が有効化された状態で開始されていなければなりません。
* データベースの [**REST サーバーとして公開**](REST/configuration.md#restサーバーを開始する) オプションがチェックされている必要があります。
* データベースにおいて、少なくとも 1つのクライアントライセンスが利用可能でなければなりません。

合致するデータベースが見つからない場合、`Open datastore` は **Null** を返します。

*localID* 引数は、リモートデータストア上で開かれるセッションのローカルエイリアスです。 *localID* 引数の ID がすでにアプリケーションに存在している場合、その ID が使用されています。 そうでない場合、データストアオブジェクトが使用されたときに *localID* のセッションが新規に作成されます。

一旦セッションが開かれると、以下の 2行の宣言は同等のものとなり、同じデータストアオブジェクトへの参照を返します:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds と $myds2 は同一のものです
```

*connectionInfo* には、接続したいリモートデータストアの詳細を格納したオブジェクトを渡します。 オブジェクトは以下のプロパティを格納することができます (*hostname* を除き、すべてのプロパティは任意です):

| プロパティ       | 型       | 説明                                                                                                                                                                                                                                          |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | Text    | リモートデータストアの名前または IPアドレス + ":" + ポート番号 (ポート番号は必須)                                                                                                                                                                                            |
| user        | Text    | ユーザー名                                                                                                                                                                                                                                       |
| password    | Text    | ユーザーパスワード                                                                                                                                                                                                                                   |
| idleTimeout | Integer | アクティビティがなかった場合に、セッションがタイムアウトするまでの時間 (分単位)。この時間を過ぎると、4D によって自動的にセッションが閉じられます。 省略時のデフォルトは 60 (1時間) です。 60 (分) 未満の値を指定することはできません (60 未満の値を渡した場合、タイムアウトは 60 (分) に設定されます)。 詳細については、[**セッションの終了**](../ORDA/remoteDatastores.md#セッションの終了) を参照ください。 |
| tls         | Boolean | 安全な接続を使用します(*)。 省略時のデフォルトは false です。 可能なかぎり安全な接続を使用することが推奨されます。                                                                                                                                                                             |
| type        | Text    | "4D Server" でなければなりません                                                                                                                                                                                                                      |

(*) tls が true だった場合、以下の条件が満たされていれば、HTTPSプロトコルが使用されます:

* リモートデータストアで HTTPS が有効化されている。
* 指定されたポート番号は、データベース設定で設定されている HTTPS ポートと合致している。
* データベースに有効な証明書と非公開暗号鍵がインストールされている。 条件を満たさない場合、エラー "1610 - ホスト xxx へのリモートリクエストに失敗しました" が生成されます。

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

#### エラー管理

エラーが起きた場合、コマンドは **Null** を返します。 リモートデータベースにアクセスできなかった場合 (アドレス違い、Webサーバーが開始されていない、http/https が有効化されていない、等)、エラー1610 "ホスト XXX へのリモートリクエストに失敗しました" が生成されます。 このエラーは `ON ERR CALL` で実装されたメソッドで割り込み可能です。

<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->***.dataclassName*** : 4D.DataClass<!-- END REF -->

#### 説明

データストアの各データクラスは [DataStore オブジェクト](ORDA/dsMapping.md#データストア) のプロパティとして利用可能です。 戻り値のオブジェクトには、 <!-- REF DataStoreClass.dataclassName.Summary -->データクラスの詳細が格納されています<!-- END REF -->。

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
| 引数 | 型 |  | 説明                                           |
| -- | - |::| -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->

|

#### 説明

`.cancelTransaction()` 関数は、 <!-- REF #DataStoreClass.cancelTransaction().Summary -->トランザクションをキャンセルします<!-- END REF --> 。このトランザクションは、指定データストアのカレントプロセスにおいて、[`.startTransaction()`](#starttransaction) によって開かれたものです。

`.cancelTransaction()` 関数は、トランザクション中におこなわれたデータ変更をすべてキャンセルします。

複数のトランザクションをネストすること (サブトランザクション) が可能です。 メイントランザクションがキャンセルされると、サブトランザクションも (たとえ個々に[`.validateTransaction()`](#validatetransactions) 関数で承認されていても) すべてキャンセルされます。

#### 例題

[`.startTransaction()`](#starttransaction) 関数の例題を参照ください。

<!-- END REF -->

<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
| 引数  | 型      |    | 説明                                                      |
| --- | ------ |:--:| ------------------------------------------------------- |
| 戻り値 | Object | <- | カレントデータストアと、各テーブルの暗号化についての情報|<!-- END REF -->

|

#### 説明

`.encryptionStatus()` 関数は、 <!-- REF #DataStoreClass.encryptionStatus().Summary -->カレントデータファイルの暗号化状態を示すオブジェクトを返します<!-- END REF --> 。カレントデータファイルとはつまり、`ds` データストアのデータファイルです。 各テーブルの状態も提供されます。
> その他のデータファイルの暗号化状態を調べるには、`Data file encryption status` コマンドを使います。

**戻り値**

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ       |             |               | 型       | 説明                                        |
| ----------- | ----------- | ------------- | ------- | ----------------------------------------- |
| isEncrypted |             |               | Boolean | データファイルが暗号化されていれば true                    |
| keyProvided |             |               | Boolean | 暗号化されたデータファイルに合致する暗号化キーが提供されていれば true (*) |
| テーブル        |             |               | Object  | 暗号化可能および暗号化されたテーブルと同じ数のプロパティを持つオブジェクト     |
|             | *tableName* |               | Object  | 暗号化可能または暗号化されたテーブル                        |
|             |             | name          | Text    | テーブル名                                     |
|             |             | num           | Number  | テーブル番号                                    |
|             |             | isEncryptable | Boolean | ストラクチャーファイルにおいて、テーブルが暗号化可能と宣言されていれば true  |
|             |             | isEncrypted   | Boolean | データファイルにおいて、テーブルのレコードが暗号化されていれば true      |

(*) 暗号化キーは、以下の手段のいずれかで提供されます:

* `.provideDataKey()` コマンド
* データストアを開く前に接続されていたデバイスのルート
* `Discover data key` コマンド

#### 例題

カレントデータファイル内で暗号化されているテーブルの数を知りたい場合:

```4d
 var $status : Object

 $status:=dataStore.encryptionStatus()

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

<!-- REF DataStoreClass.getInfo().Desc -->
## .getInfo()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->**.getInfo()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.getInfo().Params -->
| 引数  | 型      |    | 説明                                      |
| --- | ------ |:--:| --------------------------------------- |
| 戻り値 | Object | <- | データストアのプロパティ|<!-- END REF -->

|

#### 説明

`.getInfo()` 関数は、 <!-- REF #DataStoreClass.getInfo().Summary -->データストアの情報を提供するオブジェクトを返します<!-- END REF -->。 このメソッドは汎用的なコードを書くのに有用です。

**返されるオブジェクト**

| プロパティ      | 型       | 説明                                                                                        |
| ---------- | ------- | ----------------------------------------------------------------------------------------- |
| type       | string  | <li>"4D": ds で利用可能なメインデータストア </li><li>"4D Server": Open datastore で開かれたリモートデータストア</li>                                        |
| networked  | boolean | <li>true: ネットワーク接続を介してアクセスされたデータストア</li><li>false: ネットワーク接続を介さずにアクセスしているデータストア (ローカルデータベース)</li>                                        |
| localID    | text    | マシン上のデータストアID。 これは、`Open datastore` コマンドで返される localId 文字列です。 メインデータストアの場合は空の文字列 ("") です。  |
| connection | object  | リモートデータストア接続の情報を格納したオブジェクト (メインデータストアの場合は返されません)。 次のプロパティを含みます:<table><tr><th>プロパティ</th><th>型</th><th>説明</th></tr><tr><td>hostname</td><td>text</td><td>リモートデータストアの IPアドレスまたは名称 + ":" + ポート番号</td></tr><tr><td>tls</td><td>boolean</td><td>リモートデータストアとセキュア接続を利用している場合は true</td></tr><tr><td>idleTimeout</td><td>number</td><td>セッション非アクティブタイムアウト (分単位)。</td></tr><tr><td>user</td><td>text</td><td>リモートデータストアにて認証されたユーザー</td></tr></table> |

* `.getInfo()` 関数が、4D Server またはシングルユーザー版 4D 上で実行された場合、`networked` は false となります。
* `.getInfo()` 関数が、リモート版 4D 上で実行された場合、`networked` は true となります。

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

<!-- REF DataStoreClass.getRequestLog().Desc -->
## .getRequestLog()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R6 | 追加 |

</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->**.getRequestLog()** : Collection<!-- END REF -->


<!-- REF #DataStoreClass.getRequestLog().Params -->
| 引数  | 型          |    | 説明                                                            |
| --- | ---------- |:--:| ------------------------------------------------------------- |
| 戻り値 | Collection | <- | オブジェクトのコレクション (要素毎に一つのリクエストを記述します)|<!-- END REF -->

|

#### 説明

`.getRequestLog()` 関数は、 <!-- REF #DataStoreClass.getRequestLog().Summary -->クライアント側のメモリに記録されている ORDAリクエストを返します<!-- END REF -->。 ORDAリクエストのログが、[`.startRequestLog()`](#startrequestlog) 関数によって事前に有効化されている必要があります。

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
| 引数  | 型       |    | 説明                                                                                   |
| --- | ------- |:--:| ------------------------------------------------------------------------------------ |
| 戻り値 | Boolean | <- | データエクスプローラーへのアクセスが無効に設定されている場合は true、有効の場合は false (デフォルト)|<!-- END REF -->

|

#### 説明

`.isAdminProtected()` 関数は、 <!-- REF #DataStoreClass.isAdminProtected().Summary -->現在のセッションにおいて [データエクスプローラー](Admin/dataExplorer.md) へのアクセスが無効に設定されているの場合は `true`を返します<!-- END REF -->。

`webAdmin`セッションにおいて、データエクスプローラーへのアクセスはデフォルトで有効となっていますが、管理者によるデータアクセスを禁止するため無効にすることもできます ([`.setAdminProtection()`](#setadminprotection) 関数参照)。

#### 参照

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->

<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->**.makeSelectionsAlterable()**<!-- END REF -->


<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| 引数 | 型 |  | 説明                                           |
| -- | - |::| -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->

|

#### 説明

`.makeSelectionsAlterable()` 関数は、 <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->カレントアプリケーションのデータストアにおいて、すべての新規エンティティセレクションをデフォルトで追加可能に設定します<!-- END REF --> ([リモートデータストア](ORDA/remoteDatastores.md) を含む)。 これはたとえば `On Startup` データベースメソッドなどで、一度だけ使用することが想定されています。

このメソッドが呼ばれてない場合、新規エンティティセレクションはそれぞれの "親" の性質や作成方法に応じて、共有可能に設定される場合もあります ([共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) 参照)。

> この関数は、`OB Copy` または [`.copy()`](#copy) に `ck shared` オプションを明示的に使用して作成されたエンティティセレクションには適用されません。

> **互換性に関する注記**: このメソッドは 4D v18 R5 より前のバージョンから変換されたプロジェクトで、[.add()](EntitySelectionClass.md#add) の呼び出しを使用しているものにおいてのみ使用してください。 このコンテキストにおいては、`.makeSelectionsAlterable()` を使用することで、既存プロジェクト内で以前の 4D のふるまいを再現し、時間を節約できます。 逆に、4D v18 R5 以降のバージョンで作成された新規プロジェクトにおいては、この関数の使用は **推奨されていません**。エンティティセレクションを共有可能にできないため、パフォーマンスとスケーラビリティの観点で妨げになるからです。

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
| 引数            | 型      |    | 説明                                       |
| ------------- | ------ | -- | ---------------------------------------- |
| curPassPhrase | Text   | -> | カレントのパスフレーズ                              |
| curDataKey    | Object | -> | カレントのデータ暗号化キー                            |
| 戻り値           | Object | <- | 暗号化キーのチェックの結果|<!-- END REF -->

|

#### 説明

`.provideDataKey()` 関数は、 <!-- REF #DataStoreClass.provideDataKey().Summary -->データストアのカレントデータファイルのデータ暗号化キーを受け取り、暗号化されたデータと合致するかどうかチェックします<!-- END REF -->。 この関数は、暗号化されたデータベースを開くときや、データファイルの再暗号化など暗号化キーが必要となる暗号化オペレーションを実行する際に使用します。
> * `.provideDataKey()` 関数は暗号化されたデータベース内で呼び出される必要があります。 暗号化されていないデータベース内で呼び出した場合、エラー2003 (暗号化キーはデータと合致しません) が返されます。 データベースが暗号化されているかどうかを調べるには `Data file encryption status` コマンドを使用します。
> * リモートの 4D または暗号化されたリモートデータストアから、`.provideDataKey()` 関数を呼び出すことはできません。

*curPassPhrase* パラメーターを使用する場合は、データ暗号化キーの生成に使用した文字列を渡します。 このパラメーターを使用した場合、暗号化キーが生成されます。

*curDataKey* パラメーターを使用する場合は、データ暗号化キー (*encodedKey* プロパティ) を格納するオブジェクトを渡します。 このキーは、`New data key` コマンドで生成された可能性があります。

有効な暗号化キーが提供された場合、そのキーはメモリ内の *keyChain* に追加され、暗号化モードが有効になります:

* 暗号化可能テーブルに対するデータ編集はすべて、ディスク上 (.4DD、.journal、 .4Dindx ファイル) で暗号化されます。
* 暗号化可能テーブルから読み出したすべてのデータは、メモリ内で復号化されます。

**戻り値**

コマンドの実行結果は、戻り値のオブジェクトに格納されます:

| プロパティ      |                          | 型          | 説明                                          |
| ---------- | ------------------------ | ---------- | ------------------------------------------- |
| success    |                          | Boolean    | 提供された暗号化キーが暗号化データと合致すれば true、それ以外は false    |
|            |                          |            | 以下のプロパティは、success が *FALSE* であった場合にのみ返されます。 |
| status     |                          | Number     | エラーコード (提供された暗号化キーが間違っていた場合には 4)            |
| statusText |                          | Text       | エラーメッセージ                                    |
| errors     |                          | Collection | エラーのスタック。 最初のエラーに最も高いインデックスが割り当てられます。       |
|            | \[ ].componentSignature | Text       | 内部コンポーネント名                                  |
|            | \[ ].errCode            | Number     | エラー番号                                       |
|            | \[ ].message            | Text       | エラーメッセージ                                    |

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

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->
**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
| 引数     | 型       |    | 説明                                                                                                       |
| ------ | ------- | -- | -------------------------------------------------------------------------------------------------------- |
| status | Boolean | -> | `webAdmin`ポート上で、データエクスプローラーによるデータアクセスを無効にするには true、アクセスを有効にするには false (デフォルト)|<!-- END REF -->

|

#### 説明

`.setAdminProtection()` 関数は、 <!-- REF #DataStoreClass.setAdminProtection().Summary -->`WebAdmin`セッションにおける [データエクスプローラー](Admin/dataExplorer.md) 含め、[Web管理ポート](Admin/webAdmin.md#httpポート)上でのデータアクセスを無効に設定することができます<!-- END REF -->。

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

<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R6 | 追加 |

</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
| 引数     | 型       |    | 説明                                          |
| ------ | ------- | -- | ------------------------------------------- |
| file   | 4D.File | -> | File オブジェクト                                 |
| reqNum | Integer | -> | メモリ内に保管するリクエストの数|<!-- END REF -->

|

#### 説明

`.startRequestLog()` 関数は、 <!-- REF #DataStoreClass.startRequestLog().Summary -->クライアント側で ORDAリクエストのログを開始します<!-- END REF -->。

このメソッドはリモート側の 4D で呼び出す必要があり、それ以外の場合には何もしません。 これはクライアント/サーバー環境でのデバッグを想定して設計されています。

ORDA リクエストログは、渡した引数によってファイルまたはメモリに送ることができます:

* `File` コマンドで作成された *file* オブジェクトを渡した場合、ログデータはオブジェクト (JSON フォーマット) のコレクションとしてこのファイルに書き込まれます。 各オブジェクトは一つのリクエストを表します。<br/>ファイルがまだ存在しない場合には、作成されます。 もしファイルが既に存在する場合、新しいログデータはそこに追加されていきます。 メモリへのログ記録が既に始まっている状態で、 `.startRequestLog( )`が file 引数付きで呼び出された場合、メモリに記録されていたログは停止され消去されます。
> JSON 評価を実行するには、ファイルの終わりに手動で \] 文字を追加する必要があります。

* *reqNum* (倍長整数) 引数を渡した場合、メモリ内のログは (あれば) 消去され、新しいログが初期化されます。 *reqNum* 引数が指定する数にリクエスト数が到達するまでは、ログはメモリに保管され、到達した場合には古いエントリーから消去されていきます (FIFO スタック)。<br/> ファイルへのログ記録が既に始まっている状態で、`.startRequestLog()` が *reqNum* 引数付きで呼び出された場合、ファイルへのログは停止されます。

* 引数を何も渡さなかった場合、ログはメモリに記録されていきます。 前もって `.startRequestLog()` が*reqNum* 引数付きで 呼び出されていた場合 (ただし `.stopRequestLog()` の前)、ログが次回消去されるかまたは`.stopRequestLog()` が呼び出されるまで、ログデータはメモリ内にスタックされます。

ORDAリクエストログのフォーマットの詳細は、[**ORDAクライアントリクエスト**](https://doc.4d.com/4Dv18R6/4D/18-R6/Description-of-log-files.300-5217819.ja.html#4385373) の章を参照ください。

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
| 引数 | 型 |  | 説明                                           |
| -- | - |  | -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->


|


#### 説明

`.startTransaction()` 関数は、 <!-- REF #DataStoreClass.startTransaction().Summary -->対象データストアに対応するデータベース上で、カレントプロセス内のトランザクションを開始します<!-- END REF -->。 トランザクションプロセス中にデータストアのエンティティに加えられた変更は、トランザクションが確定されるかキャンセルされるまで一時的に保管されたままになります。
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

| リリース  | 内容 |
| ----- | -- |
| 17 R6 | 追加 |

</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->**.stopRequestLog()**  <!-- END REF -->


<!-- REF #DataStoreClass.stopRequestLog().Params -->
| 引数 | 型 |  | 説明                                           |
| -- | - |  | -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->

|

#### 説明

`.stopRequestLog()` 関数は、 <!-- REF #DataStoreClass.stopRequestLog().Summary -->クライアント側の ORDAリクエストのログをすべて停止します<!-- END REF --> (ファイル・メモリとも)。 これは、開かれたドキュメントを実際に閉じてディスクに保存するため、ファイルにログを取っている場合にとくに有用です。

このメソッドはリモート側の 4D で呼び出す必要があり、それ以外の場合には何もしません。 これはクライアント/サーバー環境でのデバッグを想定して設計されています。

#### 例題

[`.startRequestLog()`](#startrequestlog) の例題を参照ください。

<!-- END REF -->

<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->**.validateTransaction()**  <!-- END REF -->


<!-- REF #DataStoreClass.validateTransaction().Params -->
| 引数 | 型 |  | 説明                                           |
| -- | - |  | -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->

|

#### 説明

`.validateTransaction()` 関数は、 <!-- REF #DataStoreClass.validateTransaction().Summary -->トランザクションを受け入れます <!-- END REF -->。このトランザクションは、対象データストアの対応するレベルで [`.startTransaction()`](#starttransaction) で開始されたものです。

この関数は、トランザクション中におこなわれたデータストア上のデータの変更を保存します。

複数のトランザクションをネストすること (サブトランザクション) が可能です。 メイントランザクションがキャンセルされると、サブトランザクションも (たとえ個々にこの関数で承認されていても) すべてキャンセルされます。

#### 例題

[`.startTransaction()`](#starttransaction) の例題を参照ください。

<!-- END REF -->
