---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( * ; *object* : Text ; *foregroundColor* : Text, Integer {; *backgroundColor* : Text, Integer {; *altBackgrndColor* : Text, Integer {; *borderColor* : Text, Integer}}} )<br/>**OBJECT GET RGB COLORS** ( *object* : Variable, Field ; *foregroundColor* : Text, Integer {; *backgroundColor* : Text, Integer {; *altBackgrndColor* : Text, Integer {; *borderColor* : Text, Integer}}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数またはフィールド |
| object | any | &#8594; | オブジェクト名 (* 指定時) または <br/>フィールドまたは変数 (* 省略時) |
| foregroundColor | Text, Integer | &#8592; | 描画色のRGBカラー値 |
| backgroundColor | Text, Integer | &#8592; | 背景色のRGBカラー値 |
| altBackgrndColor | Text, Integer | &#8592; | 奇数行の色のRGBカラー値 |
| borderColor | Text, Integer | &#8592; | 境界線のRGBカラー値 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|21 R5|*borderColor* 引数に対応|
|17 R6|変更|
|12|初出|

</details>
</div>

## 説明 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->**OBJECT GET RGB COLORS**コマンドは、*object*で指定されたオブジェクトまたはオブジェクトグループの前景色と背景色、およびオプションで交互の背景色と境界線の色を返します。<!-- END REF-->

オプションの*\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。

このコマンドをリストボックスタイプのオブジェクトに適用すると、*altBackgrndColor* 引数に奇数行のカラー値が返されることがあります。この場合、*backgroundColor* の値は偶数行の背景色にのみ使用されます。

[`borderColor`プロパティ](../../FormObjects/properties_BackgroundAndBorder.md#border-color)をサポートするオブジェクトにコマンドを適用した場合、境界線の色は *borderColor* 引数に返されます。

:::note

*borderColor* 引数はバイナリデータベースでは使用できません。

:::

*foregroundColor*、*backgroundColor*、*altBackgrndColor*、および *borderColor* 引数に返されるRGBカラー値は、引数の型によって異なります:

- Text型の引数の場合、カラーは"#rrggbb"形式のCSSカラーとして返されます (例: "#0000FF")
- Integer型の引数の場合、カラーは4バイト整数 (0x00RRGGBB) またはシステムカラーに対応する負の値として返されます。

これらの引数の形式について詳しくは、[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors)コマンドの説明を参照してください。

## 参照 

[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1074 |
| スレッドセーフである | no |

