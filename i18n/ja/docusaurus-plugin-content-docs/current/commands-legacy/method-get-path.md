---
id: method-get-path
title: METHOD Get path
slug: /commands/method-get-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get path.Syntax-->**METHOD Get path** ( *methodType* {; *aTable*}{; *objectName*{; *formObjectName*}}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.METHOD Get path.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| methodType | Integer | &#8594;  | オブジェクトタイプセレクターを指定 |
| aTable | Table | &#8594;  | テーブル参照 |
| objectName | Text | &#8594;  | フォームまたはメソッド名 |
| formObjectName | Text | &#8592; | フォームオブジェクト名 |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |
| 戻り値 | Text | &#8592; | オブジェクトのフルパス |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD Get path.Summary-->**METHOD Get path**コマンドはメソッドの完全な内部パス名を返します。<!-- END REF-->

*methodType*引数にはパスを取得したいメソッドのタイプを渡します。*Design Object Access*テーマの以下の定数を使用できます:

| 定数                   | 型    | 値  | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------- | ---- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path database method | 倍長整数 | 2  | 指定したデータベースメソッド名。以下のメソッドのリスト:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | 倍長整数 | 4  | プロジェクトフォームメソッドとすべてのフォームオブジェクトメソッドのパス。例:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path project method  | 倍長整数 | 1  | メソッド名。<br/>例: *MyProjectMethod*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Path table form      | 倍長整数 | 16 | テーブルフォームメソッドとすべてのフォームオブジェクトメソッド。例:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Path trigger         | 倍長整数 | 8  | データベーストリガーのパス。例:<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

*aTable*, *objectName* および *formObjectName* 引数にはメソッドパス名を取得したいオブジェクトのタイプに応じて値を渡します:  

| **Type of object**   | *aTable* | *objectName* | *formObjectName* |
| -------------------- | -------- | ------------ | ---------------- |
| Path Project form    | O        | O (オプション)    |                  |
| Path Table form      | O        | O            | O (オプション)        |
| Path Database method | O        |              |                  |
| Path Project method  | O        |              |                  |
| Path Trigger         | O        |              |                  |

**注:** コマンドはメソッドがデータベース内で実際に存在するかどうかはチェックしません。無効なデータベースメソッド名がPath database method セレクターと一緒に渡された時に限り、エラーが生成されます。

コマンドがコンポーネントから実行された場合、デフォルトでコンポーネントメソッドのパスが返されます。*\** 引数を渡すと配列にはホストデータベースのメソッドパス名が返されます。

#### 例題 

```4d
  // "On Startup"データベースメソッドのパス名を取得:
 $path:=METHOD Get path(Path database method;"onStartup")
 
  // [Employees]テーブルのトリガーのパス名を取得:
 $path:=METHOD Get path(Path trigger;[Employees])
 
  // [Employees]テーブルの"input"フォームの"OK"オブジェクトメソッドのパス名を取得:
 $path:=METHOD Get path(Path table form;[Employees];"input";"OK")
```

#### 参照 

[Current method path](current-method-path.md)  
[METHOD OPEN PATH](method-open-path.md)  
[METHOD RESOLVE PATH](method-resolve-path.md)  