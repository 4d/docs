---
id: array-to-list
title: ARRAY TO LIST
slug: /commands/array-to-list
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO LIST.Syntax-->**ARRAY TO LIST** ( *array* : Array ; *list* : Text, Integer {; *itemRefs* : Array} )<!-- END REF-->
<!--REF #_command_.ARRAY TO LIST.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594; | 配列要素のコピー元配列 |
| list | Text, Integer | &#8594; | 配列要素のコピー先リスト |
| itemRefs | Array | &#8594; | 項目参照番号の数値配列 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|14|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.ARRAY TO LIST.Summary-->ARRAY TO LIST コマンドは、配列*array*の要素を使用して、(デザインモードのリストエディタで作成される)階層リストまたは選択リスト*list*リストを作成または置き換えます。<!-- END REF-->

*list* 引数には、選択リスト(文字列)または階層リスト参照([ListRef](# "階層リストへの参照")) を渡すことが出来ます。後者の場合、このコマンドが動くためには、渡すリストは (例えば [New list](../commands/new-list) コマンドを使用するなどして) 事前に作成されている必要があります。

任意の引数*itemRefs*が渡される場合、この配列は数値配列で、*array*配列と同期していなければなりません。各要素は、*array*の対応する要素のリスト項目参照番号を表わします。この引数を省略した場合、4Dにより自動的に1、2...Nという項目参照番号が設定されます。

**互換性に関する注意:** **ARRAY TO LIST** コマンドは、以下の様な制限があることに注意しなければなりません。

* このコマンドはリストの第1レベルの項目のみ設定することが出来ます。
* このコマンドを選択リストに使用すると、アプリケーションのストラクチャを変更する(リストはストラクチャファイルに保存されています)ので、製品のストラクチャファイルがアップデートされた際にローカルな変更は全て失われてしまいます。
* このコマンドは**読み出しのみ**で読み込まれたストラクチャー(たとえば.4dz プロジェクトやコンポーネント)内の選択リストで使用することはできません。

ARRAY TO LIST コマンドを使い、配列の要素に基づくリストを作成することはできます。しかしながら、これらの制約に縛られずにリストの値を自由に使用するためには、*階層リスト* テーマ内にあるコマンドの使用が推奨されます。

## 例題 

以下の例は、配列*atRegions*の要素から構成される“Regions”リストを作成します:  

```4d
 ARRAY TO LIST(atRegions;"Regions")
```

## 例題 

フィールドの異なる値をリストに入れて、例えば階層ポップアップメニューを作成したい場合:

```4d
 ALL RECORDS([Company])
 DISTINCT VALUES([Company]country;$arrCountries)
 CountryList:=New list
 ARRAY TO LIST($arrCountries;CountryList)
```

## エラー管理 

デザインモードのリストエディタで現在編集中のリストにARRAY TO LISTを適用すると、エラー *\-9957* が生成されます。このエラーは[ON ERR CALL](../commands/on-err-call)でインストールされたエラー処理メソッドで管理できます。

## 参照 

[LIST TO ARRAY](../commands/list-to-array)  
[Load list](../commands/load-list)  
[ON ERR CALL](../commands/on-err-call)  
[SAVE LIST](../commands/save-list)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 287 |
| スレッドセーフである | no |
| システム変数を更新する | error |


