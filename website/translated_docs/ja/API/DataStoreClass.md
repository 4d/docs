---
id: DataStoreClass
title: DataStore
---

[データストア](ORDA/dsMapping.md#datastore) とは、ORDA によって提供されるインターフェースオブジェクトです。データストアはデータベースへの参照とアクセスを提供します。 `Datastore` オブジェクトは以下のコマンドによって返されます:

*   [ds](#ds): メインデータストアへのショートカット
*   [Open datastore](#open-datastore): リモートデータストアを開きます

### 概要

|                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
| [<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
| [<!-- INCLUDE #DataStoreClass.encryptionStatus().Syntax -->](#encryptionstatus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.encryptionStatus().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataStoreClass.getRequestLog().Syntax -->](#getrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.getRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Syntax -->](#makeselectionsalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.makeSelectionsAlterable().Summary --> |
| [<!-- INCLUDE #DataStoreClass.provideDataKey().Syntax -->](#providedatakey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.provideDataKey().Summary --> |
| [<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setAdminProtection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
| [<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
| [<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |





## ds

<details><summary>履歴</summary>
| バージョン | 内容                |
| ----- | ----------------- |
| v18   | localID パラメーターを追加 |
| v17   | 追加                |
</details>

<!-- REF #_command_.ds.Syntax -->
**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
| 参照      | タイプ          |    | 説明                        |
| ------- | ------------ | -- | ------------------------- |
| localID | テキスト         | -> | 参照を取得したいリモートデータストアのローカルID |
| 戻り値     | cs.DataStore | <- | データストア参照                  |
<!-- END REF -->


#### 説明

`ds` コマンドは、 <!-- REF #_command_.ds.Summary -->カレントの 4Dデータベース、または *localID* で指定したデータベースに合致するデータストアの参照を返します<!-- END REF -->。

*localID* を省略した (または空の文字列 "" を渡した) 場合には、ローカル4Dデータベース (4D Server でリモートデータベースを開いている場合にはそのデータベース) に合致するデータストアの参照を返します。 データストアは自動的に開かれ、`ds` を介して直接利用することができます。

開かれているリモートデータストアのローカルIDを *localID* パラメーターに渡すと、その参照を取得できます。 このデータストアは、あらかじめカレントデータベース (ホストまたはコンポーネント) によって [`Open datastore`](#open-datastore) コマンドで開かれている必要があります。 このコマンドを使用したときにローカルIDが定義されます。
> ローカルIDのスコープは、当該データストアを開いたデータベースです。

*localID* に合致するデータストアが見つからない場合、コマンドは **Null** を返します。

`ds` を使用するには、データベースが **ORDAの必須要件** の章で説明されているように ORDA に準拠している必要があります。 以下のルールが適用されます:

*   データストアは単一のプライマリーキーを持つテーブルのみを参照します。 プライマリーキーがないテーブル、あるいは複合プライマリーキーがあるテーブルは参照されません。
*   BLOB型属性はデータストアで管理されません。



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
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>

<!-- REF #_command_.Open datastore.Syntax -->
**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore <!-- END REF -->

<!-- REF #_command_.Open datastore.Params -->
| 参照             | タイプ          |    | 説明                                         |
| -------------- | ------------ | -- | ------------------------------------------ |
| connectionInfo | オブジェクト       | -> | リモートデータストアへの接続に使用する接続プロパティ                 |
| localID        | テキスト         | -> | ローカルアプリケーション内で、開かれたデータストアに対して割り当てる ID (必須) |
| 戻り値            | cs.DataStore | <- | データストアオブジェクト                               |
<!-- END REF -->


#### 説明

`Open datastore` コマンドは、 <!-- REF #_command_.Open datastore.Summary -->*connectionInfo* 引数が指定する 4Dデータベースにアプリケーションを接続します<!-- END REF --> 。戻り値は、*localID* ローカルエイリアスに紐づけられた `cs.DataStore` オブジェクトです。

*connectionInfo* で指定する 4Dデータベースはリモートデーターストアとして利用可能でなければなりません。つまり、以下の条件を満たしている必要があります:

*   データベースの Webサーバーは、http または https が有効化された状態で開始されていなければなりません。
*   データベースの

**REST サーバーとして公開</a>** オプションがチェックされている必要があります。</li> 
  
  *   データベースにおいて、少なくとも 1つのクライアントライセンスが利用可能でなければなりません。</ul> 

合致するデータベースが見つからない場合、`Open datastore` は **Null** を返します。

*localID* 引数は、リモートデータストア上で開かれるセッションのローカルエイリアスです。 *localID* 引数の ID がすでにアプリケーションに存在している場合、その ID が使用されています。 そうでない場合、データストアオブジェクトが使用されたときに *localID* のセッションが新規に作成されます。 

一旦セッションが開かれると、以下の 2行の宣言は同等のものとなり、同じデータストアオブジェクトへの参照を返します:



```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds と $myds2 は同一のものです
```


*connectionInfo* には、接続したいリモートデータストアの詳細を格納したオブジェクトを渡します。 オブジェクトは以下のプロパティを格納することができます (*hostname* を除き、すべてのプロパティは任意です):

| プロパティ       | タイプ  | 説明                                                                                                                                                                                                                            |
| ----------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hostname    | テキスト | リモートデータストアの名前または IPアドレス + ":" + ポート番号 (ポート番号は必須)                                                                                                                                                                              |
| user        | テキスト | ユーザー名                                                                                                                                                                                                                         |
| password    | テキスト | ユーザーパスワード                                                                                                                                                                                                                     |
| idleTimeout | 倍長整数 | アクティビティがなかった場合に、セッションがタイムアウトするまでの時間 (分単位)。この時間を過ぎると、4D によって自動的にセッションが閉じられます。 省略時のデフォルトは 60 (1時間) です。 60 (分) 未満の値を指定することはできません (60 未満の値を渡した場合、タイムアウトは 60 (分) に設定されます)。 詳細については、[**セッションの終了**](datastores.md#セッションの終了) を参照ください。 |
| tls         | ブール  | 安全な接続を使用します(*)。 省略時のデフォルトは false です。 可能なかぎり安全な接続を使用することが推奨されます。                                                                                                                                                               |
| type        | テキスト | "4D Server" でなければなりません                                                                                                                                                                                                        |


(*) tls が true だった場合、以下の条件が満たされていれば、HTTPSプロトコルが使用されます:

*   リモートデータストアで HTTPS が有効化されている。
*   指定されたポート番号は、データベース設定で設定されている HTTPS ポートと合致している。
*   データベースに有効な証明書と非公開暗号鍵がインストールされている。 条件を満たさない場合、エラー "1610 - ホスト xxx へのリモートリクエストに失敗しました" が生成されます。



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
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |
</details>

<!-- REF DataStoreClass.dataclassName.Syntax -->
***.dataclassName*** : 4D.DataClass<!-- END REF -->


#### 説明

データストアの各データクラスは [DataStore オブジェクト](ORDA/dsMapping.md#データストア) のプロパティとして利用可能です。 The returned object <!-- REF DataStoreClass.dataclassName.Summary -->contains a description of the dataclass<!-- END REF -->.




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
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>


<!-- REF #DataStoreClass.cancelTransaction().Syntax -->
**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

The `.cancelTransaction()` function <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

`.cancelTransaction()` 関数は、トランザクション中におこなわれたデータ変更をすべてキャンセルします。

複数のトランザクションをネストすること (サブトランザクション) が可能です。 メイントランザクションがキャンセルされると、サブトランザクションも (たとえ個々に[`.validateTransaction()`](#validatetransactions) 関数で承認されていても) すべてキャンセルされます。 




#### 例題

[`.startTransaction()`](#starttransaction) 関数の例題を参照ください。


<!-- END REF -->



<!-- REF DataStoreClass.encryptionStatus().Desc -->
## .encryptionStatus()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #DataStoreClass.encryptionStatus().Syntax -->
**.encryptionStatus()**: Object<!-- END REF -->


<!-- REF #DataStoreClass.encryptionStatus().Params -->
| 参照  | タイプ    |    | 説明                           |
| --- | ------ |:--:| ---------------------------- |
| 戻り値 | オブジェクト | <- | カレントデータストアと、各テーブルの暗号化についての情報 |
<!-- END REF -->


#### 説明

The `.encryptionStatus()` function <!-- REF #DataStoreClass.encryptionStatus().Summary -->returns an object providing the encryption status for the current data file<!-- END REF --> (i.e., the data file of the `ds` datastore). 各テーブルの状態も提供されます。


> その他のデータファイルの暗号化状態を調べるには、`Data file encryption status` コマンドを使います。

**戻り値**

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ       |             |               | タイプ    | 説明                                        |
| ----------- | ----------- | ------------- | ------ | ----------------------------------------- |
| isEncrypted |             |               | ブール    | データファイルが暗号化されていれば true                    |
| keyProvided |             |               | ブール    | 暗号化されたデータファイルに合致する暗号化キーが提供されていれば true (*) |
| tables      |             |               | オブジェクト | 暗号化可能および暗号化されたテーブルと同じ数のプロパティを持つオブジェクト     |
|             | *tableName* |               | オブジェクト | 暗号化可能または暗号化されたテーブル                        |
|             |             | name          | テキスト   | テーブル名                                     |
|             |             | num           | 数値     | テーブル番号                                    |
|             |             | isEncryptable | ブール    | ストラクチャーファイルにおいて、テーブルが暗号化可能と宣言されていれば true  |
|             |             | isEncrypted   | ブール    | データファイルにおいて、テーブルのレコードが暗号化されていれば true      |


(*) 暗号化キーは、以下の手段のいずれかで提供されます:

*   `.provideDataKey()` コマンド
*   データストアを開く前に接続されていたデバイスのルート
*   `Discover data key` コマンド



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
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |


</details>

<!-- REF #DataStoreClass.getInfo().Syntax -->
**.getInfo()**: Object<!-- END REF -->

<!-- REF #DataStoreClass.getInfo().Params -->
| 参照  | タイプ    |    | 説明           |
| --- | ------ |:--:| ------------ |
| 戻り値 | オブジェクト | <- | データストアのプロパティ |
<!-- END REF -->

#### 説明

The `.getInfo()` function <!-- REF #DataStoreClass.getInfo().Summary -->returns an object providing information about the datastore<!-- END REF -->. このメソッドは汎用的なコードを書くのに有用です。

**返されるオブジェクト**

| プロパティ      | タイプ     | 説明                                                                                                                   |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| type       | string  | <li>"4D": ds で利用可能なメインデータストア </li><li>"4D Server": Open datastore で開かれたリモートデータストア</li>                                                                   |
| networked  | boolean | <li>true: ネットワーク接続を介してアクセスされたデータストア</li><li>false: ネットワーク接続を介さずにアクセスしているデータストア (ローカルデータベース)</li>                                                                   |
| localID    | text    | マシン上のデータストアID。 これは、`Open datastore` コマンドで返される localId 文字列です。 メインデータストアの場合は空の文字列 ("") です。                             |
| connection | object  | リモートデータストア接続の情報を格納したオブジェクト (メインデータストアの場合は返されません)。 次のプロパティを含みます:<p><table><tr><th>プロパティ</th><th>タイプ</th><th>説明</th></tr><tr><td>hostname</td><td>text</td><td>リモートデータストアの IPアドレスまたは名称 + ":" + ポート番号</td></tr><tr><td>tls</td><td>boolean</td><td>リモートデータストアとセキュア接続を利用している場合は true</td></tr><tr><td>idleTimeout</td><td>number</td><td>セッション非アクティブタイムアウト (分単位)。</td></tr><tr><td>user</td><td>text</td><td>リモートデータストアにて認証されたユーザー</td></tr></table> |


*   `.getInfo()` 関数が、4D Server またはシングルユーザー版 4D 上で実行された場合、`networked` は false となります。
*   `.getInfo()` 関数が、リモート版 4D 上で実行された場合、`networked` は true となります。




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
| バージョン  | 内容 |
| ------ | -- |
| v17 R6 | 追加 |
</details>

<!-- REF #DataStoreClass.getRequestLog().Syntax -->
**.getRequestLog()** : Collection<!-- END REF -->

<!-- REF #DataStoreClass.getRequestLog().Params -->
| 参照  | タイプ    |    | 説明                                 |
| --- | ------ |:--:| ---------------------------------- |
| 戻り値 | コレクション | <- | オブジェクトのコレクション (要素毎に一つのリクエストを記述します) |
<!-- END REF -->


#### 説明

The `.getRequestLog()` function <!-- REF #DataStoreClass.getRequestLog().Summary -->returns the ORDA requests logged in memory on the client side<!-- END REF -->. ORDAリクエストのログが、[`.startRequestLog()`](#startrequestlog) 関数によって事前に有効化されている必要があります。 

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
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->
**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->
| 参照  | タイプ |    | 説明                                                                             |
| --- | --- |:--:| ------------------------------------------------------------------------------ |
| 戻り値 | ブール | <- | True if the Data Explorer access is disabled, False if it is enabled (default) |
<!-- END REF -->


#### 説明

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `True` if [Data Explorer](Admin/dataExplorer.md) access has been disabled for the working session<!-- END REF -->. 

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function). 



#### 参照

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->




<!-- REF DataStoreClass.makeSelectionsAlterable().Desc -->
## .makeSelectionsAlterable()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |
</details>

<!-- REF #DataStoreClass.makeSelectionsAlterable().Syntax -->
**.makeSelectionsAlterable()**<!-- END REF -->

<!-- REF #DataStoreClass.makeSelectionsAlterable().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

The `.makeSelectionsAlterable()` function <!-- REF #DataStoreClass.makeSelectionsAlterable().Summary -->sets all entity selections as alterable by default in the current application datastores<!-- END REF --> (including [remote datastores](ORDA/remoteDatastores.md)). It is intended to be used once, for example in the `On Startup` database method. 

When this function is not called, new entity selections can be shareable, depending on the nature of their "parent", or [how they are created](ORDA/entities.md#shareable-or-non-shareable-entity-selections).



> This function does not modify entity selections created by [`.copy()`](#copy) or `OB Copy` when the explicit `ck shared` option is used. 




> **Compatibility**: This function must only be used in projects converted from 4D versions prior to 4D v18 R5 and containing [.add()](EntitySelectionClass.md#add) calls. In this context, using `.makeSelectionsAlterable()` can save time by restoring instantaneously the previous 4D behavior in existing projects. On the other hand, using this method in new projects created in 4D v18 R5 and higher **is not recommended**, since it prevents entity selections to be shared, which provides greater performance and scalabitlity. 


<!-- END REF -->


<!-- REF DataStoreClass.provideDataKey().Desc -->
## .provideDataKey()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>

<!-- REF #DataStoreClass.provideDataKey().Syntax -->
**.provideDataKey**( *curPassPhrase* : Text ) : Object <br>**.provideDataKey**( *curDataKey* : Object ) : Object <!-- END REF -->


<!-- REF #DataStoreClass.provideDataKey().Params -->
| 参照            | タイプ    |    | 説明                                    |
| ------------- | ------ | -- | ------------------------------------- |
| curPassPhrase | テキスト   | -> | Current encryption passphrase         |
| curDataKey    | オブジェクト | -> | Current data encryption key           |
| 戻り値           | オブジェクト | <- | Result of the encryption key matching |
<!-- END REF -->


#### 説明

The `.provideDataKey()` function <!-- REF #DataStoreClass.provideDataKey().Summary -->allows providing a data encryption key for the current data file of the datastore and detects if the key matches the encrypted data<!-- END REF -->. This function can be used when opening an encrypted database, or when executing any encryption operation that requires the encryption key, such as re-encrypting the data file.


> * The `.provideDataKey()` function must be called in an encrypted database. If it is called in a non-encrypted database, the error 2003 (the encryption key does not match the data.) is returned. Use the `Data file encryption status` command to determine if the database is encrypted.
> * The `.provideDataKey()` function cannot be called from a remote 4D or an encrypted remote datastore.

If you use the *curPassPhrase* parameter, pass the string used to generate the data encryption key. When you use this parameter, an encryption key is generated.

If you use the *curDataKey* parameter, pass an object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the `New data key` command.

If a valid data encryption key is provided, it is added to the *keyChain* in memory and the encryption mode is enabled:

*   all data modifications in encryptable tables are encrypted on disk (.4DD, .journal. 4Dindx files)
*   all data loaded from encryptable tables is decrypted in memory

**戻り値**

The result of the command is described in the returned object:

| プロパティ      |                          | タイプ    | 説明                                                                              |
| ---------- | ------------------------ | ------ | ------------------------------------------------------------------------------- |
| success    |                          | ブール    | True if the provided encryption key matches the encrypted data, False otherwise |
|            |                          |        | Properties below are returned only if success is *FALSE*                        |
| status     |                          | 数値     | Error code (4 if the provided encryption key is wrong)                          |
| statusText |                          | テキスト   | Error message                                                                   |
| errors     |                          | コレクション | Stack of errors. The first error has the highest index                          |
|            | \[ ].componentSignature | テキスト   | Internal component name                                                         |
|            | \[ ].errCode            | 数値     | Error number                                                                    |
|            | \[ ].message            | テキスト   | Error message                                                                   |


If no *curPassphrase* or *curDataKey* is given, `.provideDataKey()` returns **null** (no error is generated).





#### 例題



```4d 
 var $keyStatus : Object
 var $passphrase : Text

 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
    $keyStatus:=ds.provideDataKey($passphrase)
    If($keyStatus.success)
       ALERT("You have provided a valid encryption key")
    Else
       ALERT("You have provided an invalid encryption key, you will not be able to work with encrypted data")
    End if
 End if
```
 

<!-- END REF -->


<!-- REF DataStoreClass.setAdminProtection().Desc -->
## .setAdminProtection()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
| 参照     | タイプ |    | 説明                                                                                                   |
| ------ | --- | -- | ---------------------------------------------------------------------------------------------------- |
| status | ブール | -> | True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access |
<!-- END REF -->


#### 説明

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](Admin/webAdmin.md#http-port), including for the [Data Explorer](Admin/dataExplorer.md) in `WebAdmin` sessions<!-- END REF -->. 

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](Admin/webAdmin.md#access-key) settings. 

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted. 




#### 例題

You create a *protectDataFile* project method to call before deployments for example:



```4d
 ds.setAdminProtection(True) //Disables the Data Explorer data access
```




#### 参照

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->


<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R6 | 追加 |
</details>

<!-- REF #DataStoreClass.startRequestLog().Syntax -->
**.startRequestLog**()<br>**.startRequestLog**( *file* : 4D.File )<br>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
| 参照     | タイプ     |    | 説明                                   |
| ------ | ------- | -- | ------------------------------------ |
| file   | 4D.File | -> | File object                          |
| reqNum | 整数      | -> | Number of requests to keep in memory |
<!-- END REF -->


#### 説明

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side<!-- END REF -->. 

This function must be called on a remote 4D, otherwise it does nothing. これはクライアント/サーバー環境でのデバッグを想定して設計されています。

The ORDA request log can be sent to a file or to memory, depending on the parameter type: 

*   If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<br>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it. If `.startRequestLog( )` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.
  
  
> A \] character must be manually appended at the end of the file to perform a JSON validation

*   If you passed a *reqNum* integer, the log in memory is emptied (if any) and a new log is initialized. It will keep *reqNum* requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br>If `.startRequestLog()` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

*   If you did not pass any parameter, the log is started in memory. If `.startRequestLog()` was previously called with a *reqNum* (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

ORDAリクエストログのフォーマットの詳細は、[**ORDAクライアントリクエスト**](https://doc.4d.com/4Dv18R6/4D/18-R6/Description-of-log-files.300-5217819.ja.html#4385373) の章を参照ください。



#### 例題 1

You want to log ORDA client requests in a file and use the log sequence number:



```4d 
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //logs folder

 SET DATABASE PARAMETER(Client Log Recording;1) //to trigger the global log sequence number
 ds.startRequestLog($file)
 $e:=ds.Persons.get(30001) //send a request
 ds.stopRequestLog()
 SET DATABASE PARAMETER(Client Log Recording;0)
```




#### 例題 2

You want to log ORDA client requests in memory:



```4d 
 var $es : cs.PersonsSelection
 var $log : Collection

 ds.startRequestLog(3) //keep 3 requests in memory

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
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>

<!-- REF #DataStoreClass.startTransaction().Syntax -->
**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |  | ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled. 


> If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

複数のトランザクションをネストすること (サブトランザクション) が可能です。 Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.




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
| バージョン  | 内容 |
| ------ | -- |
| v17 R6 | 追加 |
</details>

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->
**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |  | ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the client side<!-- END REF --> (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk. 

This function must be called on a remote 4D, otherwise it does nothing. これはクライアント/サーバー環境でのデバッグを想定して設計されています。




#### 例題

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->




<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>

<!-- REF #DataStoreClass.validateTransaction().Syntax -->
**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |  | ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore. 

The function saves the changes to the data on the datastore that occurred during the transaction.

複数のトランザクションをネストすること (サブトランザクション) が可能です。 If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function.




#### 例題

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
