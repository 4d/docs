---
id: structure
title: ストラクチャーページ
---

## プライマリーキー

These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the [Primary key manager](https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html)).

次のオプションから選択することができます:

- **Name** ("ID" by default): Sets the default name of primary key fields. You can use any name you want, as long as it respects the [4D naming rules](Concepts/identifiers.md#tables-and-fields).
- **Type** ([Longint](Concepts/dt_number.md) by default): Sets the default type of primary key fields. UUID を選択することもできます。 In this case, the primary key fields created by default are of the [Alpha type](Concepts/dt_string.md) and have the **UUID Format** and **Auto UUID** field properties checked.

## ストラクチャーエディター

このオプショングループでは、4Dストラクチャーエディターの表示を設定します。

### ストラクチャーの描画クォリティ

このオプションで、ストラクチャーエディターの描画レベルを変更できます。 By default, the quality is set to **High**. 標準品質を選択して、表示速度を優先させることができます。 The effect of this setting is mainly perceptible when using the zoom function (see the "Zoom" paragraph in [Structure editor](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html)).

### フォルダーが表示対象外のとき

This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see [Highlight/dim tables by folder](https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928)). 薄暗く表示 (テーブルイメージの代わりに影が表示される) または非表示 (テーブルは完全に見えなくなる) が選択できます。
