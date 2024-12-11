---
id: sql-execute
title: SQL EXECUTE
slug: /commands/sql-execute
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE.Syntax-->**SQL EXECUTE** ( *sqlStatement* {; *boundObj*}{; *boundObj2* ; ... ; *boundObjN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| sqlStatement | Text | &#8594;  | 実行するSQLコマンド |
| boundObj | Variable, Field | &#8592; | 結果を受け取る(必要に応じて) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL EXECUTE.Summary-->**SQL EXECUTE**コマンドを使用してSQLコマンドを実行し、結果を4Dのオブジェクト(配列、変数またはフィールド) にバインドできます。<!-- END REF-->

このコマンドを実行するためには、カレントプロセスで有効な接続が指定されていなければなりません。

*sqlStatement*引数には実行するSQLコマンドが含まれています。*boundObj*はその結果を受け取ります。変数は列の順番でバインドされ、残っているリモートカラムは放棄されます。

:::note

このコマンドは最大127個の*boundObj*パラメーターをサポートする。 

:::

*boundObj*に4Dのフィールドが渡された場合、コマンドはレコードを作成し自動的に保存します。4Dのフィールドは同じテーブルに属していなければなりません (テーブル1のフィールドとテーブル2のフィールドを同じ呼び出しで渡すことはできません)。複数のテーブルのフィールドが渡された場合、エラーが発生します。

**警告:** *boundObj* 引数に4Dのフィールドを渡して*SELECT*コマンドを実行した場合、常にリモート4Dのデータが更新されます。リモートソースのデータをローカルに取得したい場合、まずデータを配列に取得して*INSERT*コマンドを呼び出します (例題 6参照)。 

*boundObj*引数に4Dの配列を渡す場合、コマンドを呼び出す前に、その配列を宣言することをお勧めします。これは処理されるデータのタイプを検証するためです。必要に応じて配列は自動でサイズ変更されます。

4D変数の場合、1度に1つのレコードが取得されます。他の結果は無視されます。

**注:** SQLクエリで4D式を参照することについての詳細は、*SQLコマンドの概要*を参照してください。

#### 例題 1 

以下の例で、データソースにあるempテーブルのenameカラムを取得します。その結果は、4Dのフィールドの\[Employee\]Nameに保存されます。4Dのレコードは自動的に作成されます。

```4d
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;[Employee]Name)
 SQL LOAD RECORD(SQL all records)
```

#### 例題 2 

レコードの作成を確認するには、トランザクションにコードを投入します。そしてオペレーションが十分であると判明した場合のみ、それを認証します。

```4d
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="SELECT alpha_field FROM app_testTable"
 START TRANSACTION
 SQL EXECUTE(SQLStmt;[Table2]Field1)
 While(Not(SQL End selection))
    SQL LOAD RECORD
    ... //ここにデータを検証するコードを設定します。
 End while
 VALIDATE TRANSACTION //トランザクションの検証
```

#### 例題 3 

以下の例では、データソースにあるempテーブルのenameカラムを取得します。その結果は、*aName* 配列に保存されます。１度に10個のレコードを取って来ます。

```4d
 ARRAY TEXT(aName;20)
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;aName)
 While(Not(SQL End selection))
    SQL LOAD RECORD(10)
 End while
```

#### 例題 4 

以下の例では、データソースの特定のID(WHERE節) のためのempテーブルのenameとジョブを取得します。その結果は、4Dの変数、*vName*と*vJob*に保存されます。最初のレコードだけを取って来ます。

```4d
 SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"
 SQL EXECUTE(SQLStmt;vName;vJob)
 SQL LOAD RECORD
```

#### 例題 5 

以下の例では、データソースにあるTestテーブルのBlob\_Fieldカラムを取得します。その結果は、BLOB変数に保存されます。そして、レコードがロードされる度に、そのBLOB変数の値を更新します。

```4d
 var MyBlob : Blob
 SQL LOGIN
 SQL EXECUTE("SELECT Champ_Blob FROM Test";MonBlob)
 While(Not(SQL End selection))
  //結果を調査します。
    SQL LOAD RECORD
  //呼び出す度にMyBlobの値を更新します。
 End while
```

#### 例題 6 

リモートの4D Serverデータベースからデータをローカルに取得します:

```4d
  // リモートデータベースにログインする
 SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)
 If(OK=1)
  // これ以降、すべてのSQL命令はリモートデータベース上で実行されます
    var $LastName_value : Text // 検索文で使用される4D変数
    ARRAY TEXT($a_LastName;0) // LastNameデータの一時的な格納場所
    ARRAY TEXT($a_FirstName;0) // FirstNameデータの一時的な格納場所
    var $UseSQL : Boolean //データをローカルに格納する方法の選択
 
    $LastName_value:="Smith" // 4D変数の初期化
 
  // SQLリクエスト中の一番目のプレースホルダー "?" に、4Dの$LastName_value変数を割り当てる
    SQL SET PARAMETER($LastName_value;SQL param in)
 
  // リモートのPERSONSテーブルから"LastName = Smith"であるLastNameとFirstNameカラムの
  // 値を取得、$a_LastName と $a_FirstName 配列に格納する
    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)
    If(Not(SQL End selection)) // レコードが検索されたら
 
       SQL LOAD RECORD(SQL all records) // 全レコードをロードする
       SQL CANCEL LOAD
 
       $UseSQL:=True // データを統合する方法を選択
 
       If($UseSQL) // SQLリクエストを使用する場合
          SQL LOGOUT // リモートデータベースからログアウトする
          SQL LOGIN(SQL_INTERNAL;"user";"password") // ローカルデータベースにログイン
  // これ以降、すべてのSQL命令はローカルデータベース上で実行されます
  // $a_LastName と $a_FirstName 配列中のデータをローカルのPERSONSテーブルに保存
          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")
          SQL CANCEL LOAD
 
       Else // 4Dコマンドを使用する場合
 
          REDUCE SELECTION([PERSONS];0)
          ARRAY TO SELECTION($a_LastName;[PERSONS]LastName;$a_FirstName;[PERSONS]FirstName)
 
       End if
    End if
    SQL LOGOUT // 接続を閉じる
 End if
```

#### システム変数およびセット 

コマンドが正しく実行されると、OKシステム変数は1に、そうでなければ0に設定されます。

#### 参照 

[SQL LOAD RECORD](sql-load-record.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 820 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


