---
id: structure
title: ストラクチャーページ
---

## プライマリーキー

These options in the preferences modify the default name and type of the primary key fields that are added automatically by 4D when new tables are created or by means of the [Primary key manager](https://doc.4d.com/4Dv20/4D/20.2/Primary-key-manager.300-6750292.en.html)).

次のオプションから選択することができます:

- **Name** (デフォルトでは "ID"): プライマリーキーのフィールドのデフォルト名を設定します。 [4D の命名規則](Concepts/identifiers.md#テーブルとフィールド) に従う範囲内であればどんな名前も使用できます。
- **デフォルトタイプ** (デフォルトでは [倍長整数](Concepts/dt_number.md)): プライマリーキーフィールドのデフォルトの型を設定します。 UUID を選択することもできます。 この場合、デフォルトで作成されたプライマリーキーフィールドは [文字型](Concepts/dt_string.md) となり、**UUIDフォーマット** と　**自動UUID** プロパティにチェックが入っています。

## ストラクチャーエディター

このオプショングループでは、4Dストラクチャーエディターの表示を設定します。

### ストラクチャーの描画クォリティ

このオプションで、ストラクチャーエディターの描画レベルを変更できます。 デフォルトで品質は **高** に設定されています。 標準品質を選択して、表示速度を優先させることができます。 The effect of this setting is mainly perceptible when using the zoom function (see the "Zoom" paragraph in [Structure editor](https://doc.4d.com/4Dv20/4D/20.2/Structure-editor.300-6750284.en.html#105667)).

### フォルダーが表示対象外のとき

This option sets the appearance of dimmed tables in the Structure editor, when you carry out selections by folder (see [Highlight/dim tables by folder](https://doc.4d.com/4Dv20/4D/20.2/Structure-editor.300-6750284.en.html#4592928)). 薄暗く表示 (テーブルイメージの代わりに影が表示される) または非表示 (テーブルは完全に見えなくなる) が選択できます。

