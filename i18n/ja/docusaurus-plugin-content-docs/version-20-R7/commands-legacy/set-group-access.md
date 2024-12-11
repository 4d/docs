---
id: set-group-access
title: SET GROUP ACCESS
slug: /commands/set-group-access
displayed_sidebar: docs
---

<!--REF #_command_.SET GROUP ACCESS.Syntax-->**SET GROUP ACCESS** {( *groups* )}<!-- END REF-->
<!--REF #_command_.SET GROUP ACCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| groups | Collection | &#8594;  | セッションの間4D ユーザーアカウントを所属させたいグループの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET GROUP ACCESS.Summary-->**SET GROUP ACCESS** コマンドはカレントセッションにおいて4D ユーザーアカウントの所属情報を変更します。<!-- END REF-->それまでの所属情報は全てリセットされ、*groups* 引数で指定されたグループへの新しい所属が設定されます。

**注:** 

* このコマンドのスコープはカレントセッションです。例えば[CHANGE CURRENT USER](change-current-user.md) をその後に呼び出した場合、定義された所属情報は全てリセットされます。
* このコマンドはリモートの4D、またはシングルユーザー版の4D アプリケーションでのみ呼び出し可能です。4D Server では呼び出しは許可されていません。

*groups* 引数には、4D ユーザーアカウントを所属させる既存のグループ名のコレクションを渡します(存在しないグループ名を渡した場合、それは無視されます)。空のコレクションを渡した場合、4D ユーザーアカウントはどのグループにも所属していない状態になります。

*groups* 引数を省略した場合、4D ユーザーアカウントの所属情報はディスク上に保存されている所属情報にリセットされます。

**注:** 指定したグループが"シリアル化された"機能(例: プラグインなど)へのアクセスを提供している場合、それに対応するライセンスはセッションが完了するまで4D ユーザーアカウントが使用し、そのユーザーに割り当てられたままになります。コマンドを呼び出してグループへの所属情報がキャンセルされたとしても変わりません。

#### 例題 

カレントのユーザーをセッションの間、"admin" および "plugins" グループに所属させたい場合を考えます:

```4d
 $groups:=New collection("admin";"plugins")
 SET GROUP ACCESS($groups)
```

#### 参照 

[Get group access](get-group-access.md)  
[Get plugin access](get-plugin-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  
[SET USER ALIAS](set-user-alias.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1737 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


