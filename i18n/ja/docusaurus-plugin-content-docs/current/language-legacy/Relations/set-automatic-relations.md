---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *one* : Boolean {; *many* : Boolean} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| one | Boolean | &#8594; | すべてのn対1リレーションの状態 |
| many | Boolean | &#8594; | すべての1対nリレーションの状態 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->**SET AUTOMATIC RELATIONS** は、カレントプロセスで、データベース全体のマニュアルリレートを一時的に自動リレートに変更します。<!-- END REF-->リレートは、次に**SET AUTOMATIC RELATIONS** コマンドを使用するまで自動リレートのままになります。

* *one* が[True](../commands/true) の場合、すべてのn対1のマニュアルリレートを自動リレートに設定します。*one* が[False](../commands/false) の場合、前もって自動リレートにしたすべてのn対1リレートがマニュアルリレートに戻ります。
* *many* も1対nリレートに対して同じように作用します。

このコマンドはデザインモードで既に自動リレートに設定されたものに対しては無効です。

すべてのリレーションをデザインモードでマニュアルに設定した場合、このコマンドを使用して自動リレートを必要とする処理の直前で自動リレートに切り替えることができます (リレーショナル検索やソート等)。処理が終了した後で、再度マニュアルリレートに戻すことができます。

このコマンドはデザインモードで自動リレートに設定されたリレートを自動リレートを使用した処理(例えばリレートを利用した検索や並び替えなど)を行う直前に手動リレートに変更します。処理が終了した後に、再度**SET AUTOMATIC RELATIONS** を呼び出して手動リレートに戻すことができます。

**注意:** 

* **SET AUTOMATIC RELATIONS**コマンドに [True](../commands/true) を渡すと、全ての手動リレートがセッション中に自動モードが"ロック"されます。この場合、 [SET FIELD RELATION](../commands/set-field-relation) コマンドは**SET AUTOMATIC RELATIONS** の前にあっても後ろにあっても、同じセッション中は呼び出しが無視されます。自動モードを解除して[SET FIELD RELATION](../commands/set-field-relation) の呼び出しを有効化する際には、**SET AUTOMATIC RELATIONS** に [False](../commands/false)を渡します。
* 自動リレーション機能はリレートされたテーブルが[DISPLAY SELECTION](../commands/display-selection) 、[MODIFY SELECTION](../commands/modify-selection) 、あるいはサブフォームを使用して表示されたリストフォーム内で表示されている場合には、無効化されているということに注意してください。詳細については*自動およびマニュアルリレーション* を参照してください。

## 例題 

以下の例は、すべてのn対1のマニュアルリレートを自動リレートに設定し、前もって自動リレートにした1対nリレートを手動リレートに戻します:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

## 参照 

[GET AUTOMATIC RELATIONS](../commands/get-automatic-relations)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SELECTION RANGE TO ARRAY](../commands/selection-range-to-array)  
[SELECTION TO ARRAY](../commands/selection-to-array)  
[SET FIELD RELATION](../commands/set-field-relation)  
*リレーションについて*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 310 |
| スレッドセーフである | yes |


