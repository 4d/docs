---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *targetObj* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジ または 要素 |
| 戻り値 | Object | &#8592; | ピクチャーのみを含んだレンジオブジェクト |

<!-- END REF-->

#### 互換性に関する注意 

<!--REF #_command_.WP Picture range.Summary-->**WP Picture range** は以前のバージョンの4D Write Pro では**WP Create picture range** という名前でした。<!-- END REF-->分かりやすさのために名前が変更されています。

#### 説明 

新しい**WP Picture range**コマンドは、*targetObj* 引数に渡したオブジェクト内に含まれるピクチャーのみを格納したレンジオブジェクトを返します。返された画像レンジオブジェクトは、[WP GET ATTRIBUTES](../commands/wp-get-attributes.md) と[WP SET ATTRIBUTES](../commands/wp-set-attributes.md) によってピクチャーの属性のみを管理するのに使用することができます。

*targetObj* 引数には、以下のいずれかを渡すことができます:

* レンジ
* 要素 (テーブル / 行 / 段落 / ヘッダー / フッター / 本文 / セクション / サブセクション)

#### 例題 

ピクチャーの境界線カラーのみを変えたい場合を考えます:

```4d
 $oPicts:=WP Picture range($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

#### 参照 

[WP Add picture](../commands/wp-add-picture.md)  
[WP INSERT PICTURE](../commands/wp-insert-picture.md)  
[WP Paragraph range](wp-paragraph-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  
*スタイル付テキストテーマのコマンドの使用*  
*ピクチャーを管理する*  