---
id: object-get-keyboard-layout
title: OBJECT Get keyboard layout
slug: /commands/object-get-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get keyboard layout.Syntax-->**OBJECT Get keyboard layout** ( * ; *object* : Text ) : Text<br/>**OBJECT Get keyboard layout** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get keyboard layout.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時objectはオブジェクト名 (文字列)省略時objectは変数またはフィールド |
| object | any | &#8594; | オブジェクト名 (* 指定時)変数またはフィールド (* 省略時) |
| 戻り値 | Text | &#8592; | レイアウトのランゲージコード、"" = レイアウトなし |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|初出|

</details>
</div>

## 説明 

<!--REF #_command_.OBJECT Get keyboard layout.Summary-->**OBJECT Get keyboard layout**コマンドは*object* と *\** 引数で指定したオブジェクトにカレントプロセスで割り当てられたカレントキーボードレイアウトを返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

このコマンドは使用する言語の (RFC3066、ISO639、そしてISO3166に基づく) コードを示す文字列を返します。詳細は[SET DATABASE LOCALIZATION](../commands/set-database-localization)コマンドの説明を参照してください。

## 参照 

[OBJECT SET KEYBOARD LAYOUT](../commands/object-set-keyboard-layout)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1180 |
| スレッドセーフである | no |


