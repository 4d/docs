---
id: ob-is-shared
title: OB Is shared
slug: /commands/ob-is-shared
displayed_sidebar: docs
---

<!--REF #_command_.OB Is shared.Syntax-->**OB Is shared** ( *toCheck* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is shared.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| toCheck | Object, Collection | &#8594;  | チェックするオブジェクトまたはコレクション |
| 戻り値 | Boolean | &#8592; | オブジェクトまたはコレクションが共有可能であればTrue、編集可能であればFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Is shared.Summary-->**OB Is shared** コマンドは*toCheck* 引数のオブジェクトまたはコレクションが共有の場合には**True** を返します。<!-- END REF-->それ以外の場合には**False** を返します(*共有オブジェクトと共有コレクション*参照)。

このコマンドは*toCheck* 引数に共有可能なエンティティセレクションを渡した場合には**True** を返します(参照)。


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1759 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


