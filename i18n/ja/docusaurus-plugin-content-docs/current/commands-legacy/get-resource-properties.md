---
id: get-resource-properties
title: Get resource properties
slug: /commands/get-resource-properties
displayed_sidebar: docs
---

<!--REF #_command_.Get resource properties.Syntax-->**Get resource properties** ( *resType* ; *resID* {; *resFile*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get resource properties.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | 4文字のリソースタイプ |
| resID | Integer | &#8594;  | リソースID番号 |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |
| 戻り値 | Integer | &#8592; | リソースの属性 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get resource properties.Summary-->**Get resource properties**コマンドは、*resType*に渡されるタイプかつ*resID*に渡されるIDを持つリソースの属性を返します。<!-- END REF-->

*resFile*に有効なリソースファイル参照番号を渡すと、リソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合は、現在開かれているすべてのリソースファイル内で検索されます。

リソースが存在しない場合、**Get resource properties**は0を返し、システム変数OKに0が設定されます。

**Get resource properties**によって返される数値は、ビットが特別の意味を持っているビットフィールド値として理解する必要があります。

#### 例題 

[Get resource name](get-resource-name.md "Get resource name")の例題参照

#### システム変数およびセット 

リソースが存在しない場合OK変数は0に、そうでなければ1に設定されます。


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 515 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


