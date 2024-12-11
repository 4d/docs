---
id: get-plugin-access
title: Get plugin access
slug: /commands/get-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.Get plugin access.Syntax-->**Get plugin access** ( *plugIn* ) : Text<!-- END REF-->
<!--REF #_command_.Get plugin access.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | プラグイン番号 |
| 戻り値 | Text | &#8592; | プラグインに割り当てられたグループ名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get plugin access.Summary-->Get plugin accessコマンドは引数 *plugIn* に渡した番号を持つプラグインの使用を許可されているユーザグループの名前を返します。<!-- END REF-->プラグインに割り当てられているグループが存在しない場合、コマンドは空の文字列 ("") を返します。 

プラグインの番号に割り当てられているユーザのグループを調べたい場合、そのプラグイン番号を引数 *plugIn* に渡します。プラグインのライセンスには4DクライアントWebとSOAPライセンスがあります。“” テーマにある以下の定数の1つを渡します。

| 定数                     | 型    | 値         |
| ---------------------- | ---- | --------- |
| 4D Client SOAP license | 倍長整数 | 808465465 |
| 4D Client Web license  | 倍長整数 | 808465209 |
| 4D for OCI license     | 倍長整数 | 808465208 |
| 4D ODBC Pro license    | 倍長整数 | 808464946 |
| 4D View license        | 倍長整数 | 808465207 |
| 4D Write license       | 倍長整数 | 808464697 |

#### 参照 

[SET GROUP ACCESS](set-group-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 846 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


