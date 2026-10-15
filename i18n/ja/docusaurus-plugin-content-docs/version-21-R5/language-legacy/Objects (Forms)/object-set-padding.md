---
id: object-set-padding
title: OBJECT SET PADDING
slug: /commands/object-set-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PADDING.Syntax-->**OBJECT SET PADDING** ( * ; *object* : Text ; *padding* : Object )<br/>**OBJECT SET PADDING** ( *object* : Variable, Field ; *padding* : Object )<!-- END REF-->

<!--REF #_command_.OBJECT SET PADDING.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時、objectはオブジェクト名 (文字列)<br/>省略時、objectは変数またはフィールド |
| object | Text, Variable, Field | &#8594; | オブジェクト名 (* 指定時)または<br/>変数またはフィールド (* 省略時) |
| padding | Object | &#8594; | パディング値 |

</div>
<!-- END REF-->

<div class="no-index">

<details><summary>履歴</summary>

| リリース | 内容 |
| --- | --- |
| 21 R5 | 初出 |

</details>

</div>

## 説明

<!--REF #_command_.OBJECT SET PADDING.Summary-->**OBJECT SET PADDING** コマンドは、*object* と *\** 引数で指定したオブジェクトのパディングを設定します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数またはフィールドです。この場合、文字列ではなく変数またはフィールドの参照を渡します。

*padding* には、以下のプロパティを含むオブジェクトを渡します:

| プロパティ | 型 | 説明 |
| --- | --- | --- |
| `top` | Integer | コンテンツと上枠線の間のパディング |
| `bottom` | Integer | コンテンツと下枠線の間のパディング |
| `left` | Integer | コンテンツと左枠線の間のパディング |
| `right` | Integer | コンテンツと右枠線の間のパディング |

すべてのプロパティは省略可能です。プロパティを省略した場合、その現在値は変更されません。

パディング値はピクセル単位です。負の値を割り当てると、有効なパディングは0に設定されます。

パディングは以下のタイプのフォームオブジェクトに適用できます:

* [テキストエリア](../../FormObjects/text.md)
* [入力オブジェクト](../../FormObjects/input_overview.md)
* [リストボックス](../../FormObjects/listbox_overview.md)
* [リストボックス列](../../FormObjects/listbox-column.md)
* [リストボックスヘッダー](../../FormObjects/properties_Headers.md)および[フッター](../../FormObjects/properties_Footers.md)

リストボックス、リストボックス列、およびリストボックスのヘッダーとフッターでは、同じ*padding*オブジェクトが使用されますが、描画には`top`と`left`の値のみが考慮されます:

- `top`は上と下のパディングとして適用されます。
- `left`は左と右のパディングとして適用されます。

## 例題

```4d 
var $padding:={top: 20; left: 10}
OBJECT SET PADDING(*; "List box"; $padding)
```

`top`の値は上下のパディングに適用され、`left`の値は左右のパディングに適用されます。

## 参照

[OBJECT Get padding](../commands/object-get-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1865 |
| スレッドセーフである | no |