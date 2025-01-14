---
id: end-selection
title: End selection
slug: /commands/end-selection
displayed_sidebar: docs
---

<!--REF #_command_.End selection.Syntax-->**End selection** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.End selection.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードポインタがセレクションの最後のレコードよりも 後ろにあるかテストするテーブル、または 省略時、デフォルトテーブル |
| 戻り値 | Boolean | &#8592; | Yes (TRUE) or No (FALSE) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.End selection.Summary-->**End selection** は、カレントレコードポインタが*aTable*のカレントセレクションの後ろにある場合TRUEを返します。<!-- END REF-->一般に**End selection** は、[NEXT RECORD](next-record.md) コマンドで、カレントレコードポインタが最後のレコードの後に移動したかどうかをチェックするために使用します。カレントセレクションが空の場合、**End selection** はTRUEを返します。

カレントレコードのポインタをセレクション内に戻すには、[FIRST RECORD](first-record.md)、[LAST RECORD](last-record.md) または [GOTO SELECTED RECORD](goto-selected-record.md) を使用します。[PREVIOUS RECORD](previous-record.md) では、ポインタはセレクション内に戻りません。

[PRINT SELECTION](print-selection.md) またはプリント...メニューを選択してレポートを印刷する場合、**End selection** は最後のフッタでTRUEを返します。以下のステートメントを使用して、最後のフッタを判定して最終ページに特殊なフッタを印刷することができます:

```4d
  // 集計レポートの出力用フォームのフォームメソッド
 $vpFormTable:=Current form table
 Case of
  // ...
    :(Form event code=On Printing Footer)
  // フッタが印刷されようとしている
       If(End selection($vpFormTable->))
  // 最後のフッタ用のコード
       Else
  // フッタ用のコード
       End if
 End case
```

#### 例題 

以下のフォームメソッドはレポートの印刷中に使用します。*vFooter*変数を設定し、最終ページのフッタエリアに印刷します:

```4d
  // [Finances];"Summary" Form Method
 Case of
  // ...
    :(Form event code=On Printing Footer)
       If(End selection([Finances]))
          vFooter:="c2001 Acme Corp." // 最後のページのフッタ
       Else
          vFooter:="" // 他のページのフッタ
       End if
 End case
```

#### 参照 

[Before selection](before-selection.md)  
[Form event code](../commands/form-event-code.md)"  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PRINT SELECTION](print-selection.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 36 |
| スレッドセーフである | &check; |


