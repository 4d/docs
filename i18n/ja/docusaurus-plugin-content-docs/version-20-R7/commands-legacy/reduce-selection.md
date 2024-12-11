---
id: reduce-selection
title: REDUCE SELECTION
slug: /commands/reduce-selection
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE SELECTION.Syntax-->**REDUCE SELECTION** ( {*aTable* ;} *number* )<!-- END REF-->
<!--REF #_command_.REDUCE SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションの数を減らすテーブル, または 省略時デフォルトテーブル |
| number | Integer | &#8594;  | 選択するレコード数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.REDUCE SELECTION.Summary-->REDUCE SELECTIONは、*aTable*の新しいレコードセレクションを作成します。<!-- END REF-->このコマンドは*aTable*のカレントセレクションの先頭から*number*個のレコードセレクションを返します。REDUCE SELECTIONは、カレントプロセスの*aTable*のカレントセレクションに適用されます。これはカレントプロセスの*aTable*のカレントセレクションを変更し、新しいセレクションの先頭レコードをカレントレコードにします。

**Note:** ステートメントREDUCE SELECTION(aTable;0)が実行されると、*aTable*のカレントセレクションおよびカレントレコードはなくなります。

#### 例題 

以下の例では最初に、20を超える国の販売店を対象にしたコンテストの正確な統計を検索します。国ごとに$50,000以上の製品売上を記録した上位3店と、全世界で上位100店に含まれる販売店に対し、賞が送られます。ほんの数行のコードで、この複雑な処理がインデックス検索を利用して実行されます:

```4d
 CREATE EMPTY SET([Dealers];"Winners") // 空のセットを作成
 SCAN INDEX([Dealers]Sales amount;100;<) // インデックスの最後からスキャン
 CREATE SET([Dealers];"100 best Dealers") // 選択されたレコードをセットに格納
 For($Country;1;Records in table([Countries])) // 国ごとに
  // この国の販売店を検索
    QUERY([Dealers];[Dealers]Country=[Countries]Name;*) // ...$50,000以上売った販売店
    QUERY([Dealers];&;[Dealers]Sales amount>=50000)
    CREATE SET([Dealers];"WinnerDealers") // セットに格納
  // 上位100位以内のセットに結合
    INTERSECTION("WinnerDealers";"100 best Dealers";"WinnerDealers")
    USE SET("WinnerDealers") // 国ごとの上位成績者
  // 降順で並び替え
    ORDER BY([Dealers];[Dealers]Sales amount;<)
    REDUCE SELECTION([Dealers];3) // 3位までを選択
    CREATE SET([Dealers];"WinnerDealers") // その国の勝者
  // 全世界の勝者リストに加える
    UNION("WinnerDealers";"TheWinners";"TheWinners")
 End for
 CLEAR SET("100 best Dealers") // このセットはもう必要ない
 CLEAR SET("WinnerDealers") // このセットも必要ない
 USE SET("The Winners") // これが勝者
 CLEAR SET("The Winners") // このセットはもう必要ない
 OUTPUT FORM([Dealers];"Prize letter") // 印刷フォームを選択
 PRINT SELECTION([Dealers]) // 手紙を印刷
```

#### 参照 

[ORDER BY](order-by.md)  
[QUERY](query.md)  
[SCAN INDEX](scan-index.md)  
*セット*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 351 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


