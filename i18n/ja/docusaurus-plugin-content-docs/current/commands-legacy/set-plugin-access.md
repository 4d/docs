---
id: set-plugin-access
title: SET PLUGIN ACCESS
slug: /commands/set-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.SET PLUGIN ACCESS.Syntax-->**SET PLUGIN ACCESS** ( *plugIn* ; *group* )<!-- END REF-->
<!--REF #_command_.SET PLUGIN ACCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | プラグイン番号 |
| group | Text | &#8594;  | プラグインに関連するグル―プの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET PLUGIN ACCESS.Summary-->SET PLUGIN ACCESS コマンドを使用すれば、データベース上にインストールされた各 "シリアルされた" プラグインをプログラムで設定する環境をユーザグループに提供することができます。<!-- END REF-->

**Note:** グループエディタを使用して、デザインモードで操作を実行することも可能です。

引数 *plugIn* にユーザのグループに割り当てられたプラグインの番号を渡します。プラグインのライセンスには4DクライアントWebとSOAPライセンスがあります。 *Is License Available* テーマにある以下の定数の1つを渡します。

| 定数                     | 型    | 値         |
| ---------------------- | ---- | --------- |
| 4D Client SOAP license | 倍長整数 | 808465465 |
| 4D Client Web license  | 倍長整数 | 808465209 |
| 4D for OCI license     | 倍長整数 | 808465208 |
| 4D ODBC Pro license    | 倍長整数 | 808464946 |
| 4D View license        | 倍長整数 | 808465207 |
| 4D Write license       | 倍長整数 | 808464697 |

*group* 引数には、プラグインの使用を許可されているユーザが存在しているグループの名前を渡します。

**Note:** 

* 1度にプラグインを使用できるのは、1つのグループだけです。他のグループがプラグインアクセス権を所有している場合、このコマンドを実行すると、そのグループはその権限を失います。
* 使用されたライセンスはセッションの間、*group* 引数で指定されたグループ内の4D ユーザーアカウントに割り当てられます。これはアカウントのグループ所属状況が変わっても、*group* 引数のグループがプラグインアクセス権を失っても変わりません。

#### 参照 

[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET GROUP ACCESS](set-group-access.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 845 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


