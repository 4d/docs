---
id: asserted
title: Asserted
slug: /commands/asserted
displayed_sidebar: docs
---

<!--REF #_command_.Asserted.Syntax-->**Asserted** ( *boolExpression* {; *messageText*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Asserted.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| boolExpression | Boolean | &#8594;  | ブール式 |
| messageText | Text | &#8594;  | エラーメッセージテキスト |
| 戻り値 | Boolean | &#8592; | boolExpressionの評価結果 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Asserted.Summary-->**Asserted** コマンドは[ASSERT](assert.md)コマンドと同様の処理を行います。<!-- END REF-->1つの違いは、このコマンドは*boolExpression*引数の評価結果を戻り値として返すことです。このため、条件の評価としてアサーションを使用できます (例題参照)。アサーションの処理とこのコマンドの引数に関する詳細情報は[ASSERT](assert.md)コマンドの説明を参照してください。

**Asserted**はブール式を引数として受け入れ、この式の評価結果を返します。アサーションが有効で式が[False](false.md "False")の場合 ([SET ASSERT ENABLED](set-assert-enabled.md)コマンド参照)、[ASSERT](assert.md)と同様エラー-10518が生成されます。アサーションが無効にされていると、**Asserted**はエラー生成することなしに、渡された式の結果を返します。

**注:** [ASSERT](assert.md)コマンド同様 、**Asserted**もインタープリタモードでもコンパイル済みモードでも動作します。

#### 例題 

式の評価部にアサーションを挿入する:

```4d
 READ WRITE([Table 1])
 LOAD RECORD([Table 1])
 If(Asserted(Not(Locked([Table 1]))))
  // このコードはレコードがロックされているとエラー-10518を生成する
    ...
 End if
```

#### 参照 

[ASSERT](assert.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1132 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


