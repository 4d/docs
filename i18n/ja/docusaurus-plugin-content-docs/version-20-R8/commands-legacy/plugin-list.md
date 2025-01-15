---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *numbersArray* ; *namesArray* )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| numbersArray | Integer array | &#8592; | プラグイン番号 |
| namesArray | Text array | &#8592; | プラグイン名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PLUGIN LIST.Summary-->PLUGIN LIST コマンドは*numbersArray*配列と*namesArray*配列に、4Dアプリケーションにロードされ、利用可能なプラグインの番号と名前を返します。<!-- END REF-->これら2つの配列は、コマンドによりサイズが調整され、同期されます。

**注:** *numbersArray*配列に返された値と、*Is License Available*テーマの定数の値とを比較できます。

PLUGIN LISTは、4Dに統合されたプラグイン (例: 4D Chart) やサードパーティのプラグインも対象とします。

#### 参照 

[COMPONENT LIST](component-list.md)  
[Get plugin access](get-plugin-access.md)  
[Is license available](is-license-available.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 847 |
| スレッドセーフである | &check; |


