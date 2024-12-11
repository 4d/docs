---
id: get-assert-enabled
title: Get assert enabled
slug: /commands/get-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.Get assert enabled.Syntax-->**Get assert enabled** : Boolean<!-- END REF-->
<!--REF #_command_.Get assert enabled.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True = アサーションは有効<br/>False = アサーションは無効 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get assert enabled.Summary-->Get assert enabled コマンドは カレントプロセスでアサーションが有効か無効かによって[True](true.md "True")または[False](false.md "False")を返します。<!-- END REF-->アサーションについての詳細は[ASSERT](assert.md "ASSERT")コマンドの説明を参照してください。

デフォルトでアサーションは有効ですが、[SET ASSERT ENABLED](set-assert-enabled.md "SET ASSERT ENABLED")コマンドを使用して無効にできます。

#### 参照 

[ASSERT](assert.md)  
[Asserted](asserted.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1130 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


