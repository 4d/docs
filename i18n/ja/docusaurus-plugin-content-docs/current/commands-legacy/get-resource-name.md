---
id: get-resource-name
title: Get resource name
slug: /commands/get-resource-name
displayed_sidebar: docs
---

<!--REF #_command_.Get resource name.Syntax-->**Get resource name** ( *resType* ; *resID* {; *resFile*} ) : Text<!-- END REF-->
<!--REF #_command_.Get resource name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | 4文字のリソースタイプ |
| resID | Integer | &#8594;  | リソースID番号 |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |
| 戻り値 | Text | &#8592; | リソースの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get resource name.Summary-->**Get resource name**コマンドは、*resType*のタイプで*resID*のIDを持つリソースの名前を返します。<!-- END REF-->

*resFile*に有効なリソースファイル参照番号を渡すと、リソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合は、現在開かれているすべてのリソースファイル内で検索されます。

リソースが存在しない場合、**Get resource name**は空の文字列を返します。


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 513 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


