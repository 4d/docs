---
id: relate-many-selection
title: RELATE MANY SELECTION
slug: /commands/relate-many-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY SELECTION.Syntax-->**RELATE MANY SELECTION** ( *aField* : Field )<!-- END REF-->
<!--REF #_command_.RELATE MANY SELECTION.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594; | nテーブルのフィールド (リレーションの開始元) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.RELATE MANY SELECTION.Summary-->RELATE MANY SELECTION コマンドは、1テーブルのレコードセレクションを元にしてnテーブルのレコードセレクションを作成し、nテーブルの一番目のレコードをカレントレコードとしてロードします。<!-- END REF-->RELATE MANY SELECTIONは、1テーブルのカレントレコードを変更します。

## 例題 

以下の例では、未収金が$1,000以上の顧客を対象に作成されたすべての請求書を選択しています。\[Invoices\]テーブルの\[Invoices\]Customer IDフィールドは、\[Customers\]テーブルの\[Customers\]IDフィールドにリレートしています。

```4d
  // 顧客を選択
 QUERY([Customers];[Customers]Credit>=1000)
  // これらの顧客に関連するすべての請求書を選択
 RELATE MANY SELECTION([Invoices]Customer ID)
```

## 参照 

[QUERY](../commands/query)  
[RELATE ONE](../commands/relate-one)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 340 |
| スレッドセーフである | yes |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||


