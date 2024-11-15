---
id: level
title: Level
slug: /commands/level
displayed_sidebar: docs
---

<!--REF #_command_.Level.Syntax-->**Level**  : Integer<!-- END REF-->
<!--REF #_command_.Level.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | カレントのブレークまはたヘッダのレベル |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Level.Summary-->Levelは、現在のブレークまたはヘッダのレベルを調べるために使用します。<!-- END REF-->このコマンドは、On HeaderおよびOn Printing Breakイベント中でレベル数を返します。

レベル0は、印刷される最後のレベルで、総合計を印刷するのに適しています。Levelは、最初のソートフィールドのブレークを印刷するときに1を返し、2番目ソートフィールドでブレークを印刷するときに2を返します。

#### 例題 

以下の例はフォームメソッドのテンプレートです。集計レポートでフォームが出力フォームとして使用される際に、発生する可能性のあるイベントをすべて示しています。ヘッダやブレークがプリントされるときにLevelが呼び出されます:

```4d
  // 集計レポートの出力フォームメソッド
 $vpFormTable:=Current form table
 Case of
  // ...
    :(FORM Event=On Header)
  // ヘッダエリアが印刷されようとしている
       Case of
          :(Before selection($vpFormTable->))
  // 最初のヘッダブレークのコード
          :(Level=1)
  // Level 1のヘッダブレークコード
          :(Level=2)
  // Level 2のヘッダブレークコード
  // ...
       End case
    :(FORM Event=On Printing Details)
  // レコードが印刷されようとしている
  // 各レコード毎のコード
    :(FORM Event=On Printing Break)
  // ブレークエリアが印刷されようとしている
       Case of
          :(Level=0)
  // ブレークLevel 0のコード
          :(Level=1)
  // ブレークLevel 1のコード
  // ...
       End case
    :(FORM Event=On Printing Footer)
       If(End selection($vpFormTable->))
  // 最後のフッタのコード
       Else
  // フッタのコード
       End if
 End case
```

#### 参照 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Form event code](form-event-code.md)  
[PRINT SELECTION](print-selection.md)  