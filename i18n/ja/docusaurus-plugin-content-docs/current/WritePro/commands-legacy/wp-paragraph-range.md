---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *targetObj* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro レンジ または 要素の参照 |
| 戻り値 | Object | &#8592; | 段落のみを格納したレンジ |

<!-- END REF-->

#### 互換性に関する注意 

<!--REF #_command_.WP Paragraph range.Summary-->**WP Paragraph range** は以前のバージョンの4D Write Pro では**WP Create Paragraph range** という名前でした。<!-- END REF-->分かりやすさのために名前が変更されています。

#### 説明 

新しい**WP Paragraph range**コマンドは、*targetObj* 引数内のオブジェクトと交差する段落のみだけを内包したレンジオブジェクトを返します。返されたレンジオブジェクトの段落は[WP GET ATTRIBUTES](../commands/wp-get-attributes.md) や[WP SET ATTRIBUTES](../commands/wp-set-attributes.md) コマンドなどで使用でき、それによって段落属性のみを管理することができます。

*targetObj* 引数には、以下のいずれかを渡すことができます:

* レンジ
* 要素 (テーブル / 行 / 段落 / ヘッダー / フッター / 本文 / セクション / サブセクション)

#### 例題 

段落に対してのみパッディングを設定したい場合を考えます:

```4d
 $oParagraphs:=WP Paragraph range($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

#### 参照 

[WP Picture range](wp-picture-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  