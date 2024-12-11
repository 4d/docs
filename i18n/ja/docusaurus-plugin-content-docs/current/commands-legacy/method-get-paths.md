---
id: method-get-paths
title: METHOD GET PATHS
slug: /commands/method-get-paths
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS.Syntax-->**METHOD GET PATHS** ( {*folderName* ;} *methodType* ; *arrPaths* {; *stamp*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| folderName | Text | &#8594;  | ホームページのフォルダー名 |
| methodType | Integer | &#8594;  | 取得するメソッドタイプセレクター |
| arrPaths | Text array | &#8592; | メソッドパスおよび名前の配列 |
| stamp | Real | &#8594;  | スタンプの最小値 |
| &#8592; | 新しい現在値 |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.METHOD GET PATHS.Summary-->**METHOD GET PATHS**コマンドはアプリケーションのうち、*methodType*引数で指定したタイプであるメソッドの内部的なパス名と名前を*arrPaths*配列に返します。<!-- END REF-->

メソッドが4Dエクスプローラーのホームページでフォルダーを使用して階層化されていれば、オプションの*folderName*引数にフォルダー名を渡すことができます。この場合*arrPaths*配列にはこのフォルダーに含まれるメソッドのみのパスが返されます。

**注:** *folderName*に"@"文字は使用できません。

*methodType* 引数には*arrPaths*配列にパスを取得したいメソッドのタイプを渡します。*Design Object Access*テーマの以下の定数を個別にあるいは加算して使用できます:

| 定数                   | 型    | 値   | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------- | ---- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path all objects     | 倍長整数 | \-1 | データベースのすべてのメソッドのパス                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Path class           | 倍長整数 | 32  | クラス定義のパス。例:<br/>\[class\]/Person<br/>\[class\]/Student                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Path database method | 倍長整数 | 2   | 指定したデータベースメソッド名。以下のメソッドのリスト:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | 倍長整数 | 4   | プロジェクトフォームメソッドとすべてのフォームオブジェクトメソッドのパス。例:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path project method  | 倍長整数 | 1   | メソッド名。<br/>例: *MyProjectMethod*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Path table form      | 倍長整数 | 16  | テーブルフォームメソッドとすべてのフォームオブジェクトメソッド。例:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Path trigger         | 倍長整数 | 8   | データベーストリガーのパス。例:<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

*stamp*引数を使用すれば特定の時点以降に更新されたメソッドのパスだけを取得できます。バージョンコントロールシステムの一部として、最新のバックアップ以降に更新されたメソッドだけをアップデートするようにできます。   
動作の概要: 4Dはメソッド更新カウンターを保持します。メソッドが作成され再び保存されるたびに、このカウンターは増分され、その現在値がメソッドの内部的なスタンプに格納されます。  
*stamp*引数を渡すと、コマンドはこの引数に渡された値と同じかそれより大きなスタンプ値を持つメソッドのみを返します。さらにコマンドは*stamp*引数に更新カウンターの新しい値を返します。この値を保持すれば、次回このコマンドを呼び出す際にこの値を渡すことができ、前回のコマンド実行以降に作成あるいは更新されたメソッドのみを取得できます。

メソッドがコンポーネントから実行された場合、デフォルトでコンポーネントメソッドのパスが返されます。*\** 引数を渡すと配列にはホストデータベースのメソッドパスが返されます。

コマンドが複製されたメソッド名を検知した場合、-9802エラー("オブジェクトパスが固有ではありません")が生成されます。この場合、MSCを使用してデータベースストラクチャーを検証することが望ましいと言えます。

#### 例題 1 

"web"フォルダー内のプロジェクトメソッドを取得する:

```4d
 METHOD GET PATHS("web";Path project method;arrPaths)
```

#### 例題 2 

データベースメソッドとトリガーを取得する:

```4d
 METHOD GET PATHS(Path trigger+Path database method;arrPaths)
```

#### 例題 3 

最新のバックアップ以降に更新されたプロジェクトメソッドを取得する:

```4d
  // 前回のスタンプ値を参照
 $stamp :=Max([Backups]cur_stamp)
 METHOD GET PATHS(Path project method;arrPaths;$stamp)
  // 最新のスタンプ値を保存
 CREATE RECORD([Backups])
 [Backups]cur_stamp :=$stamp
 SAVE RECORD([Backups])
```

#### 例題 4 

[METHOD SET CODE](method-set-code.md)コマンドの例題参照。

#### 参照 

[Current method path](current-method-path.md)  
[METHOD GET FOLDERS](method-get-folders.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1163 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


