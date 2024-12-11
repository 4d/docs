---
id: set-user-alias
title: SET USER ALIAS
slug: /commands/set-user-alias
displayed_sidebar: docs
---

<!--REF #_command_.SET USER ALIAS.Syntax-->**SET USER ALIAS** ( *alias* )<!-- END REF-->
<!--REF #_command_.SET USER ALIAS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| alias | Text | &#8594;  | 4Dユーザーアカウントに対して使用する代理の名前、またはその名前をリセットするためには"" |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET USER ALIAS.Summary-->**SET USER ALIAS** コマンドは、カレントのセッションの間、カレントの4D ユーザーアカウント名の代わりに使用できるもう一つのカスタムの名前を定義します。<!-- END REF-->この代わりの名前は、メモリに残されますが、カレントユーザーに対してのみ適用されます。

**注:** このコマンドはクライアントの4Dあるいはシングルユーザー版4Dでのみ呼び出すことが可能です。4D Server では使用は許可されていません。

*alias* 引数には、カレントの4D ユーザー名の代わりに表示させたい代わりの名前を渡します。

コマンドが実行されると、カレントの4D ユーザーアカウントが返される/表示されるところには全て*alias* 引数で指定したエイリアス名が使用されるようになります。具体的には、[Current user](current-user.md)、 [Process activity](../commands/process-activity.md) および [LOCKED BY](locked-by.md) などのコマンド、あるいは4D Server 管理ウィンドウの[ORDER BY FORMULA](order-by-formula.md) などです。クライアント/サーバー環境においては、このコマンドは例えば[Current user](current-user.md) コマンドなどによって各ユーザーがサーバー上では識別されるように、必ずリモートアプリケーションで使用しなければなりません(例え全てのリモートアプリケーションが同じ4D ユーザーアカウントを使用していたとしてもサーバーでは使用できません)。

カレントの4D ユーザーから*alias* 引数で指定したエイリアスを削除するためには、**SET USER ALIAS**("") という形で呼び出してください。

**注:** [CHANGE CURRENT USER](change-current-user.md) コマンドを呼び出すと、カレントユーザーのエイリアス名はリセットされます。

#### 例題 

アプリケーションの中で、ユーザーはカスタムのテーブルで管理されており、同じ4D ユーザーアカウントを使用する場合を考えます。それぞれのクライアントマシンで、以下のようなコードを実行することができます:

```4d
 SET USER ALIAS([myUsers]userName)
```

#### 参照 

[CHANGE CURRENT USER](change-current-user.md)  
[Current user](current-user.md)  
[SET GROUP ACCESS](set-group-access.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1666 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


