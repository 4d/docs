---
id: locked-by
title: LOCKED BY
slug: /commands/locked-by
displayed_sidebar: docs
---

<!--REF #_command_.LOCKED BY.Syntax-->**LOCKED BY** ( {*aTable* ;} *process* ; *4Duser* ; *sessionUser* ; *processName* )<!-- END REF-->
<!--REF #_command_.LOCKED BY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードロックをテストするテーブル, または 省略時、デフォルトテーブル |
| process | Integer | &#8592; | プロセス参照番号 |
| 4Duser | Text | &#8592; | 4Dユーザ名 |
| sessionUser | Text | &#8592; | ワークセッションを開いているユーザ |
| processName | Text | &#8592; | プロセス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LOCKED BY.Summary-->LOCKED BY は、レコードをロックしたユーザやプロセスに関する情報を返します。<!-- END REF-->変数にはそれぞれプロセス番号(\*)、4Dアプリケーションのユーザ名、システムユーザ名、そしてプロセス名が返されます。レコードがロックされている場合、これらの情報を使用してカスタムダイアログ内でユーザに警告できます。

(\*) これは実際にレコードをロックしたコードが実行されているマシン上でのプロセス番号です。サーバー上で実行されているトリガやメソッドの場合は、サーバーマシン上での"ツイン"プロセスの番号が返されます。リモートアプリケーションで実行されているメソッドの場合には、リモートマシン上のプロセス番号が返されます。

レコードがロックされていない場合、*process* は0を返し、*4Duser*、*sessionUser*、および*processName* は空の文字列を返します。読み込み状態でロードしようとしたレコードが削除されている場合には、*process* は-1を返し、*4Duser*、*sessionUser*、および*processName* は空の文字列を返します。

*4Duser* 引数は、4D パスワードシステムのユーザー名、あるいは[SET USER ALIAS](set-user-alias.md) で定義されたユーザーエイリアスです(あれば)。パスワードシステムがない場合あるいはエイリアスが定義されていない場合でも、“Designer” が返されます。

*sessionUser* 引数はクライアントマシンでセッションを開いたユーザ名に対応します。この名前は特に、4D Serverの管理ウィンドウに、開かれたプロセスごとに表示されます。

レコードが *$lock REST request* によってロックされていた場合、それぞれの情報は以下のようになります:

* *process* は-2 を返す
* *4Duser* は "" を返す
* *sessionUser* は "" を返す
* *processName* はロックしてる人のIP アドレスを返します。例: "127.0.0.1"

#### 参照 

[Locked](locked.md)  
*レコードのロック*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 353 |
| スレッドセーフである | &check; |


