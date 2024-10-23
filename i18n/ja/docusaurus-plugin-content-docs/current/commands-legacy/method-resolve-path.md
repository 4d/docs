---
id: method-resolve-path
title: METHOD RESOLVE PATH
slug: /commands/method-resolve-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD RESOLVE PATH.Syntax-->**METHOD RESOLVE PATH** ( *path* ; *methodType* ; *ptrTable* ; *objectName* ; *formObjectName* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD RESOLVE PATH.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text | &#8594;  | 解決するパス |
| methodType | Integer | &#8592; | オブジェクトタイプセレクター |
| ptrTable | Pointer | &#8592; | テーブル参照 |
| objectName | Text | &#8592; | フォームまたはデータベースメソッド名 |
| formObjectName | Text | &#8592; | フォームオブジェクト名 |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD RESOLVE PATH.Summary-->**METHOD RESOLVE PATH**コマンドは*path*引数に渡された内部パス名を解決し、*methodType*、*ptrTable*、*objectName*、そして *formObjectName*引数にそれぞれ情報を返します。<!-- END REF-->

*methodType* 引数はメソッドのタイプを示す値を受け取ります。この値を*Design Object Access*テーマの定数と比較することができます:

| 定数                   | 型    | 値  | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------- | ---- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path database method | 倍長整数 | 2  | 指定したデータベースメソッド名。以下のメソッドのリスト:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | 倍長整数 | 4  | プロジェクトフォームメソッドとすべてのフォームオブジェクトメソッドのパス。例:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path project method  | 倍長整数 | 1  | メソッド名。<br/>例: *MyProjectMethod*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Path table form      | 倍長整数 | 16 | テーブルフォームメソッドとすべてのフォームオブジェクトメソッド。例:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Path trigger         | 倍長整数 | 8  | データベーストリガーのパス。例:<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

**注意:** コマンドはあ、実際にメソッドがデータベース/プロジェクト内に存在するかどうかはチェックしません。エラーは無効なテーブル名が渡されたときにのみ生成されます。

*ptrTable* 引数は、パスがテーブルフォームメソッドやトリガーを参照する場合、データベーステーブルへのポインターを受け取ります。

*objectName* 引数は以下のいずれかを受け取ります:

* パスがテーブルフォームまたはプロジェクトフォームを参照する場合、フォーム名
* パスがデータベースメソッドを参照する場合、データベースメソッド名

*formObjectName* 引数は、パスがオブジェクトメソッドを参照する場合、フォームオブジェクト名を受け取ります。

コマンドがコンポーネントから実行された場合、デフォルトではコンポーネントメソッドに関する情報を返します。*\** 引数を渡すと、ホストデータベースメソッドに関する情報を返します。

#### 例題 1 

データベースメソッドパスの解決:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 2
  // $tablePtr: Nil ポインター
  // $objectName: "onStartup"
  // $formObjectName: ""
```

#### 例題 2 

テーブルフォームのオブジェクトメソッドのパス解決:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[tableForm]/Table1/output1/myVar1";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 16
  // $tablePtr: -> [Table1]
  // $objectName: "output*1"
  // $formObjectName: "Btn*1"
```

#### 参照 

[METHOD Get path](method-get-path.md)  