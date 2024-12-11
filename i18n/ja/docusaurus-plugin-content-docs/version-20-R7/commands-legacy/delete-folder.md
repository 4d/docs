---
id: delete-folder
title: DELETE FOLDER
slug: /commands/delete-folder
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FOLDER.Syntax-->**DELETE FOLDER** ( *folder* {; *deleteOption*} )<!-- END REF-->
<!--REF #_command_.DELETE FOLDER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| folder | Text | &#8594;  | 削除されるフォルダーの名称またはフルパス |
| deleteOption | Integer | &#8594;  | フォルダー削除オプション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE FOLDER.Summary-->DELETE FOLDER コマンドは*folder* に渡したフルパスまたは名前を持つフォルダーを削除します。<!-- END REF-->パラメーターを省略した場合のデフォルトでは、安全のため **DELETE FOLDER** は空のフォルダーのみ削除します。空でないフォルダーを削除するには *deleteOption* を使います。*deleteOption* には "*System Documents*" テーマの次の定数を受け渡すことができます:

| 定数                   | 型    | 値 | コメント               |
| -------------------- | ---- | - | ------------------ |
| Delete only if empty | 倍長整数 | 0 | フォルダの中身が空の場合のみ削除する |
| Delete with contents | 倍長整数 | 1 | フォルダを中身ごと削除する      |

* Delete only if empty (0) を受け渡した場合、または *deleteOption* を省略した場合:  
   * *folder* パラメーターに指定したフォルダーは、空の場合に限り削除されます。空でない場合には削除処理は行わず、エラー -47 (ファイルが既に開かれている、あるいはフォルダが空ではありません。) が発生します。  
   * 指定したフォルダーがが存在しない場合にはエラー \-120 (存在しないディレクトリを指定するパス名を使用してファイルにアクセスしようとしました。) が生成されます。
* Delete with contents (1) を受け渡した場合:  
   * *folder* パラメーターに指定したフォルダーは、格納されている要素ごと削除されます。  
   **警告:** フォルダーや格納要素がロックされていたり、読み取り専用に設定されていても、カレントユーザーが処理に必要な権限を持っていれば削除されます。  
   * フォルダーや格納要素を削除できない場合、最初の削除不能な要素を検知した時点で処理は中断され、エラー**\*** が返されます。この場合、フォルダーは一部削除済みの可能性があります。処理が中断された場合には、[Last errors](last-errors.md)  を使って、問題となったファイルの名称とパスを取得できます。  
   * *folder* パラメーターに指定したフォルダーがが存在しない場合、このコマンドは処理を行わず、エラーも発生しません。  
   (\*) Windows: -54 (ロックされたファイルを書き込みのために開こうとしました。)  
   OS X: -45 (ファイルがロックされている、あるいはパス名が不正です。)

これらのエラーは [ON ERR CALL](on-err-call.md) コマンドによって実装したメソッドでインターセプトすることができます。

#### 参照 

  
[DELETE DOCUMENT](delete-document.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 693 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


