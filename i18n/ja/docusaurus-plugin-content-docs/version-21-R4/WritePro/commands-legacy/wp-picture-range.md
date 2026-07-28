---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *targetObj* : Object ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジ または 要素 |
| 戻り値 | Object | &#8592; | ピクチャーのみを含んだレンジオブジェクト |
</div>
<!-- END REF-->

## 説明 

<!--REF #_command_.WP Picture range.Summary-->**WP Picture range**コマンドは、*targetObj* 引数に渡したオブジェクト内に含まれるピクチャーのみを格納したレンジオブジェクトを返します。<!-- END REF-->返された画像レンジオブジェクトは、[WP GET ATTRIBUTES](../commands/wp-get-attributes) と[WP SET ATTRIBUTES](../commands/wp-set-attributes) によってピクチャーの属性のみを管理するのに使用することができます。

*targetObj* 引数には、以下のいずれかを渡すことができます:

* レンジ
* 要素 (テーブル / 行 / 段落 / ヘッダー / フッター / 本文 / セクション / サブセクション)

## 例題 

ピクチャーの境界線カラーのみを変えたい場合を考えます:

```4d
 $oPicts:=WP Picture range($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

## 参照 

[WP Add picture](../commands/wp-add-picture)  
[WP INSERT PICTURE](../commands/wp-insert-picture)  
[WP Paragraph range](../commands/wp-paragraph-range)  
[WP Selection range](../commands/wp-selection-range)  
[WP Text range](../commands/wp-text-range)  
*スタイル付テキストテーマのコマンドの使用*  
*ピクチャーを管理する*  

