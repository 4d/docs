---
id: object-get-padding
title: OBJECT Get padding
slug: /commands/object-get-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get padding.Syntax-->**OBJECT Get padding** ( * ; *object* : Text ) : Object<br/>**OBJECT Get padding** ( *object* : Variable, Field ) : Object<!-- END REF-->

<!--REF #_command_.OBJECT Get padding.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時、objectはオブジェクト名 (文字列)<br/>省略時、objectは変数またはフィールド |
| object | Text, Variable, Field | &#8594; | オブジェクト名 (* 指定時)または<br/>変数またはフィールド (* 省略時) |
| 戻り値 | Object | &#8592; | パディング値 |

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

<!--REF #_command_.OBJECT Get padding.Summary-->**OBJECT Get padding** コマンドは、*object* と *\** 引数で指定したオブジェクトの現在のパディング値を含むオブジェクトを返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数またはフィールドです。この場合、文字列ではなく変数またはフィールドの参照を渡します。

**注:** このコマンドを複数のオブジェクトに対して適用した場合、最後のオブジェクトのパディング値のみが返されます。

返されるオブジェクトには以下のプロパティが含まれます:

| プロパティ | 型 | 説明 |
| --- | --- | --- |
| `top` | Integer | コンテンツと上枠線の間のパディング |
| `bottom` | Integer | コンテンツと下枠線の間のパディング |
| `left` | Integer | コンテンツと左枠線の間のパディング |
| `right` | Integer | コンテンツと右枠線の間のパディング |

パディング値はピクセル単位です。

パディング値は以下のフォームオブジェクトのタイプで取得できます:

* [テキストエリア](../../FormObjects/text.md)
* [入力オブジェクト](../../FormObjects/input_overview.md)
* [リストボックス](../../FormObjects/listbox_overview.md)
* [リストボックス列](../../FormObjects/listbox-column.md)
* [リストボックスヘッダー](../../FormObjects/properties_Headers.md)および[フッター](../../FormObjects/properties_Footers.md)

リストボックス、リストボックス列、およびリストボックスのヘッダーとフッターでは、返される`top`と`bottom`の値は同じで、`left`と`right`の値も同じです。

## 例題

```4d 

var $currentPadding:=OBJECT Get padding(*; "My Input")
// $currentPadding = {"left":10,"right":15,"top":20,"bottom":35}

```


## 参照

[OBJECT SET PADDING](../commands/object-set-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1866 |
| スレッドセーフである | no |