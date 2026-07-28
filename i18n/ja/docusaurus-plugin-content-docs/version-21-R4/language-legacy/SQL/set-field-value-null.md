---
id: set-field-value-null
title: SET FIELD VALUE NULL
slug: /commands/set-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD VALUE NULL.Syntax-->**SET FIELD VALUE NULL** ( *aField* : Field )<!-- END REF-->
<!--REF #_command_.SET FIELD VALUE NULL.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594; | NULL値を割り当てるフィールド |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SET FIELD VALUE NULL.Summary-->SET FIELD VALUE NULL コマンドは、*aField* 引数によって指定されたフィールドにNULL値を割り当てます。<!-- END REF--> 

NULL値は、4DのSQLカーネルによって使用されます。詳細については、4D SQL Referenceマニュアルを参照して下さい。

**注:** 

* ストラクチャエディタレベルで、4DフィールドへのNULL値を非許可にすることができます(Design Referenceマニュアルを参照) 。
* **SET FIELD VALUE NULL** はオブジェクトフィールドの中身を消去します。

## 参照 

[Is field value Null](../commands/is-field-value-null)  
[Null](../commands/null)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 965 |
| スレッドセーフである | yes |


