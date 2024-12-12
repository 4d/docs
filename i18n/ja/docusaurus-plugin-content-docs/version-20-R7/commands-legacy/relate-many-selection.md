---
id: relate-many-selection
title: RELATE MANY SELECTION
slug: /commands/relate-many-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY SELECTION.Syntax-->**RELATE MANY SELECTION** ( *aField* )<!-- END REF-->
<!--REF #_command_.RELATE MANY SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | nテーブルのフィールド (リレーションの開始元) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RELATE MANY SELECTION.Summary-->RELATE MANY SELECTION コマンドは、1テーブルのレコードセレクションを元にしてnテーブルのレコードセレクションを作成し、nテーブルの一番目のレコードをカレントレコードとしてロードします。<!-- END REF-->

**Note:** RELATE MANY SELECTIONは、1テーブルのカレントレコードを変更します。

#### 例題 

以下の例では、未収金が$1,000以上の顧客を対象に作成されたすべての請求書を選択しています。\[Invoices\]テーブルの\[Invoices\]Customer IDフィールドは、\[Customers\]テーブルの\[Customers\]IDフィールドにリレートしています。

```4d
  // 顧客を選択
 QUERY([Customers];[Customers]Credit>=1000)
  // これらの顧客に関連するすべての請求書を選択
 RELATE MANY SELECTION([Invoices]Customer ID)
```

#### 参照 

[QUERY](query.md)  
[RELATE ONE](relate-one.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  