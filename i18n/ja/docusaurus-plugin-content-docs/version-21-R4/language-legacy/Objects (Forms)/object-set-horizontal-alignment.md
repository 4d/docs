---
id: object-set-horizontal-alignment
title: OBJECT SET HORIZONTAL ALIGNMENT
slug: /commands/object-set-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Syntax-->**OBJECT SET HORIZONTAL ALIGNMENT** ( * ; *object* : Text ; *alignment* : Integer )<br/>**OBJECT SET HORIZONTAL ALIGNMENT** ( *object* : Variable, Field ; *alignment* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| alignment | Integer | &#8594; | 整列コード |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|20|変更|
|15 R4|変更|
|13|名称変更|
|12|名称変更|
|6.8.1|初出|

</details>
</div>

## 説明 

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Summary-->**OBJECT SET HORIZONTAL ALIGNMENT**コマンドは、引数*object* および *\** で指定したオブジェクトを整列します。<!-- END REF-->

オプションの *\** 引数を指定した場合、*object* はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object* はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

*Form Objects (Properties)*テーマ内にある以下の定数の1つを*alignment* 引数に渡します:

| 定数            | 型    | 値 | コメント                       |
| ------------- | ---- | - | -------------------------- |
| Align center  | 倍長整数 | 3 |                            |
| Align default | 倍長整数 | 1 |                            |
| Align left    | 倍長整数 | 2 |                            |
| Align right   | 倍長整数 | 4 |                            |
| wk justify    | 倍長整数 | 5 | 4D Write Proとテキスト入力エリアに適用。 |

整列を適用できるフォームオブジェクトは次の通りです:

* スクロール可能エリア
* コンボボックス
* ボタン
* ラジオボタン
* チェックボックス
* スタティックテキスト
* グループエリア
* ポップアップメニュー/ドロップダウンリスト
* フィールド
* 変数
* リストボックス
* リストボックス列
* リストボックスヘッダー
* リストボックスフッター
* *4D Write Proリファレンス*エリア

## 参照 

[OBJECT Get horizontal alignment](../commands/object-get-horizontal-alignment)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 706 |
| スレッドセーフである | no |


