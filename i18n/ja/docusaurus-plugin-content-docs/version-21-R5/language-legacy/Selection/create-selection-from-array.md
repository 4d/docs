---
id: create-selection-from-array
title: CREATE SELECTION FROM ARRAY
slug: /commands/create-selection-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Syntax-->**CREATE SELECTION FROM ARRAY** ( *aTable* : Table ; *recordArray* : Integer, Boolean array {; *selectionName* : Text} )<!-- END REF-->
<!--REF #_command_.CREATE SELECTION FROM ARRAY.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | セレクションを作成するテーブル |
| recordArray | Integer, Boolean array | &#8594; | レコード番号の配列, または ブール配列 (True = レコードをセレクションに含める False = レコードをセレクションに含めない) |
| selectionName | Text | &#8594; | 作成する命名セレクションの名前, または 引数を省略した場合、コマンドをカレント セレクションに適用する |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6.7|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Summary-->**CREATE SELECTION FROM ARRAY** コマンドは、以下の方法で*selectionName*<!-- END REF--> 命名セレクションを作成します:

* *aTable*のレコード番号値を納めた配列、または
* *aTable*のレコードごとに、レコードを含める ([True](../commands/true))/含めない ([False](../commands/false))の値を納めたブール配列。

**警告:** 命名セレクションはメモリ内に作成、ロードされます。したがって、このコマンドを実行する前に十分なメモリがあることを確認してください。

*selectionName*を省略した場合や空の文字列を渡した場合、コマンドはカレントセレクションに適用されます。結果カレントセレクションは更新されます。

このコマンドで倍長整数配列を使用すると、配列の各要素は作成される*selectionName*内のレコードのレコード番号を表わします。レコード番号が正しくない (作成されていないレコード) 場合、エラー-10503が生成されます。

**注意:** 配列の中には、同じレコード番号が含まれないよう注意してください。そうでなければ、結果としてセレクションは不正確なものになります。

このコマンドでブール配列を使用する場合、配列のN番目の要素はレコード番号Nが*selectionName*に含まれる ([True](../commands/true)) か含まれないか ([False](../commands/false)) を示します。*recordArray*の要素数は*aTable*のレコード数と等しくなければなりません。配列要素数がレコード数よりも少ない場合、配列によって定義されたレコードのみがセレクションとなります。

**注意:** ブール配列では、コマンドは配列要素0から (テーブルのレコード数) -1を使用します。

**警告:** レコードが削除されてその後再度作成された場合には、レコード番号が再利用されることがあるという点に注意してください(*レコード番号について* 参照)

## エラー管理 

レコード番号が不正 (レコードがまだ作成されていない) だった場合、エラー-10503が生成されます。このエラーは[ON ERR CALL](../commands/on-err-call)でインストールされたエラー処理メソッドでとらえることができます。

## 参照 

[CLEAR NAMED SELECTION](../commands/clear-named-selection)  
[COPY NAMED SELECTION](../commands/copy-named-selection)  
[CREATE SET FROM ARRAY](../commands/create-set-from-array)  
[LONGINT ARRAY FROM SELECTION](../commands/longint-array-from-selection)  
[SELECTION TO ARRAY](../commands/selection-to-array)  
[USE NAMED SELECTION](../commands/use-named-selection)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 640 |
| スレッドセーフである | yes |
| システム変数を更新する | error |
| カレントセレクションを変更する ||


