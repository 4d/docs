---
id: object-get-three-states-checkbox
title: OBJECT Get three states checkbox
slug: /commands/object-get-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get three states checkbox.Syntax-->**OBJECT Get three states checkbox** ( * ; *object* : Text ) : Boolean<br/>**OBJECT Get three states checkbox** ( *object* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get three states checkbox.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594; | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| 戻り値 | Boolean | &#8592; | True = スリーステートチェックボックス、False = 標準のチェックボックス |
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

<!--REF #_command_.OBJECT Get three states checkbox.Summary-->**OBJECT Get three states checkbox**コマンドは、引数 *object* と *\** で指定したチェックボックスの"スリーステート"プロパティの、カレントの状態を返します。<!-- END REF-->

スリーステートのプロパティは、プロパティリストを使用するか、同一プロセスにおいてであれば [OBJECT SET THREE STATES CHECKBOX](../commands/object-set-three-states-checkbox) を呼び出して設定することができます。

## 参照 

[OBJECT SET THREE STATES CHECKBOX](../commands/object-set-three-states-checkbox)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1250 |
| スレッドセーフである | no |


