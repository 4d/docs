---
id: set-assert-enabled
title: SET ASSERT ENABLED
slug: /commands/set-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.SET ASSERT ENABLED.Syntax-->**SET ASSERT ENABLED** ( *assertions* {; *} )<!-- END REF-->
<!--REF #_command_.SET ASSERT ENABLED.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| assertions | Boolean | &#8594;  | True = アサーションを有効にする<br/>False = アサーションを無効にする |
| * | 演算子 | &#8594;  | 省略時 = すべてのプロセスにコマンドを適用 (既存および後で作成されるものを含む)<br/>指定時= カレントプロセスのみにコマンドを適用 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET ASSERT ENABLED.Summary-->**SET ASSERT ENABLED** コマンドを使用してアプリケーションの4Dコードに挿入されたアサーションを無効にしたり、再度有効にしたりできます。<!-- END REF-->アサーションに関する詳細は[ASSERT](assert.md)コマンドの説明を参照してください。

デフォルトで、プログラムに追加されたアサーションは、インタープリタモードでもコンパイル済みモードでも有効です。このコマンドは、ときにアサーションの評価に実行時間のコストが必要であったり、アプリケーションのエンドユーザからアサーションを隠ぺいしたいなどの理由で、アサーションを無効にしたいときに使用できます。典型的には、**SET ASSERT ENABLED**コマンドを[On Startupデータベースメソッド](on-startup-database-method.md)で使用して、 アプリケーションがテストモードや運用モードかによって、アサーションを有効にしたり無効にしたりします。

デフォルトで**SET ASSERT ENABLED**コマンドはアプリケーションのすべてのプロセスに効果を及ぼします。コマンドの効果をカレントプロセスに限定するには、 *\** 引数を渡します。

アサーションが無効にされていると、[ASSERT](assert.md)コマンドに渡された式は評価されないことに留意してください。[ASSERT](assert.md)を呼び出すコード行は動作においてもパフォーマンスにおいても、 アプリケーションの処理に一切影響を及ぼしません。

#### 例題 

アサーションを無効にする:

```4d
 SET ASSERT ENABLED(False)
 ASSERT(TestMethod) // アサーションが無効なのでTestMethodは呼び出されない
```

#### 参照 

[ASSERT](assert.md)  
[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1131 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


