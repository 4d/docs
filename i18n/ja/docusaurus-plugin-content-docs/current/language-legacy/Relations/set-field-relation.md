---
id: set-field-relation
title: SET FIELD RELATION
slug: /commands/set-field-relation
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD RELATION.Syntax-->**SET FIELD RELATION** ( manyTable | manyField ; *one* : Integer ; *many* : Integer )<!-- END REF-->
<!--REF #_command_.SET FIELD RELATION.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| manyTable &#124; manyField | テーブル, フィールド | &#8594; | リレーションの開始テーブル, または リレーションの開始フィールド |
| one | Integer | &#8594; | テーブルまたはフィールドを開始点とする n対1リレーションの状態 |
| many | Integer | &#8594; | テーブルまたはフィールドを開始点とする 1対nリレーションの状態 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SET FIELD RELATION.Summary-->**SET FIELD RELATION** コマンドを使用すると、デザインモードのリレートプロパティウィンドウで設定した初期状態が何であれ、データベースの各リレートの自動/マニュアルの状態を個別に設定できます。<!-- END REF--> 

1番目の引数には、テーブルやフィールドの名前を渡します:

* フィールド名 (*manyField*) を渡すと、コマンドは指定したnフィールドから開始するリレートに対してのみ適用されます。
* テーブル名 (*manyTable*) を渡すと、コマンドは指定したnテーブルから開始するリレートに対してのみ適用されます。
* *manyField*または*manyTable*から開始するリレートが存在しない場合、シンタックスエラー16（“このフィールドにはリレートが設定されていません。”）が生成され、システム変数OKには0が代入されます。

引数*one*と*many*には、指定した1対nリレートやn対1リレートに適用される自動/マニュアルの状態を示す値を渡します。この値として、"*Relations*"テーマの定数を使用できます。

| 定数                      | 型    | 値 | コメント                                    |
| ----------------------- | ---- | - | --------------------------------------- |
| Automatic               | 倍長整数 | 3 | カレントプロセスに対し、リレートを自動に設定する。               |
| Do not modify           | 倍長整数 | 0 | リレートの現在のステータスを変更しない。                    |
| Manual                  | 倍長整数 | 2 | カレントプロセスに対し、リレートをマニュアルに設定する。            |
| Structure configuration | 倍長整数 | 1 | アプリケーションのストラクチャウインドウで指定されたリレートの設定を使用する。 |

**Note:** このコマンドを使用して行った変更は、カレントプロセスに対してのみ適用されます。リレートプロパティウィンドウのオプションを用いて指定されたリレート設定は変更されません。

**Note:** [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)コマンドに対して[True](../commands/true) を同じセッション中に渡したとき、**SET FIELD RELATION**への呼び出しは、それが[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)の前にあろうと後ろにあろうと無視されます。自動モードをロックして**SET FIELD RELATION**への呼び出しを有効化するためには、[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)に[False](../commands/false) を渡します。

## 例題 

以下のコードを実行すると、クイックレポートエディター内において、有用なリレートだけを自動に設定できるようになります:

```4d
 SET AUTOMATIC RELATIONS(False;False) // リレーションのリセット
  //以下のリレーションのみが使用されます
 SET FIELD RELATION([Invoices]Cust_IDt;Automatic;Automatic)
 SET FIELD RELATION([Invoice_Row]Invoice_ID;Automatic;Automatic)
 QR REPORT([Invoices];Char(1))
```

## 参照 

[GET AUTOMATIC RELATIONS](../commands/get-automatic-relations)  
[GET FIELD RELATION](../commands/get-field-relation)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 919 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


