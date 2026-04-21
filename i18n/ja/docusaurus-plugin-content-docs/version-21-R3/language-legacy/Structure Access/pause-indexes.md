---
id: pause-indexes
title: PAUSE INDEXES
slug: /commands/pause-indexes
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE INDEXES.Syntax-->**PAUSE INDEXES** ( *aTable* : Table )<!-- END REF-->
<!--REF #_command_.PAUSE INDEXES.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | インデックスを停止するテーブル |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|14|初出|

</details>
</div>

## 説明 

<!--REF #_command_.PAUSE INDEXES.Summary-->**PAUSE INDEXES**コマンドは、*aTable* のインデックスを、プライマリーキーのインデックスを除き一時的に無効にします。<!-- END REF-->.

イ ンデックスはデータ (.4DIndx file) やデータベースのストラクチャ (\_USER\_INDEXES、*システムテーブル*を参照)から削除されるわけではありませんが、無効とされるためそれ以上更新されることはありません。インデックスが 無効化されると、*aTable* で実行される全てのオペレーション(クエリ、ソート、レコード追加、変更と削除)はインデックスを使用しなくなります。

このコマンドは主に複数のインデックスを持つテーブルのデータを、大量にインポートないし修正する際に有用です。4Dはレコードが検証されるたびにインデックスを更新しなければならないので、このオペレーションは相当な時間を要する可能性があります。インデックスを事前に無効化しておくことでオペレーションの飛躍的にスピードアップさせることが出来ます。

オペレーションが終了した後にインデックスを再開させるためには、 *aTable* に [RESUME INDEXES](../commands/resume-indexes) コマンドをしようします。 

**注:** [CREATE INDEX](../commands/create-index) コマンドと [DELETE INDEX](../commands/delete-index) コマンドを使用することによって似たような結果を得ることが出来ますが、そこには大きな違いがあります:

* *aTable* のそれぞれのインデックスに対して[DELETE INDEX](../commands/delete-index) / [CREATE INDEX](../commands/create-index) コマンドを呼び出す必要があります。
* [DELETE INDEX](../commands/delete-index) / [CREATE INDEX](../commands/create-index) コマンドを呼び出すと、インデックスの内部番号が変わりますが、**PAUSE INDEXES** / [RESUME INDEXES](../commands/resume-indexes) ではその限りではありません。インデックス番号が変わると、データセットを変更するときにデータの自動再インデックスが生成されます。

**PAUSE INDEXES** コマンドをテーブルに使用し、 [RESUME INDEXES](../commands/resume-indexes) コマンドをそのテーブルに使用することなくデータベースを閉じた場合、このテーブルのインデックスはデータベースが再開したときに全て自動的にリビルドされます。

**注:** このコマンドは4Dリモートからは実行することができません。

## 例題 

大量のデータをインポートするメソッド例:

```4d
 PAUSE INDEXES([Articles])
 IMPORT DATA("HugeImport.txt") //Importing
 RESUME INDEXES([Articles])
```

## 参照 

[DELETE INDEX](../commands/delete-index)  
[RESUME INDEXES](../commands/resume-indexes)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1293 |
| スレッドセーフである | yes |


