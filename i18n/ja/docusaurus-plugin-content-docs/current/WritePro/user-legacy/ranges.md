---
id: ranges
title: Ranges
displayed_sidebar: docs
slug: /WritePro/user/ranges
---



4D Write Proでは、ドキュメントのコンテンツをプログラム上によって選択し操作することができます。選択されたコンテンツにはテキスト、画像、表、そして非表示のフォーマット用タグが含まれることがあるため、4D Write Proではレンジ（範囲オブジェクト）を使用することでこれらを操作することができます。

レンジは次のように、4D Write Proドキュメントの一部をオブジェクト型で：

- 文字、段落、画像、ピクチャー、表などのレンジは、元の親ドキュメント内の文字の位置を通じて定義されます。
- セル、カラム、行のレンジは、それらの位置を通じて定義されており、親の表へアンカーされます。

レンジを使用することで選択した要素を指定したりドキュメントの一部の属性を操作（[`WP GET ATTRIBUTES`](../commands/wp-get-attributes) および [`WP SET ATTRIBUTES`](../commands/wp-set-attributes)）することができます。

レンジにはさまざまなタイプがあり、`wk type` 属性（読み取り専用）を使えば、レンジの種類を知ることができます。各レンジのタイプを定義することができます。また各レンジには、そのレンジを定義する複数の非公開の属性値が含まれます：

| 定数       | 値     | コメント |
|------------|--------|----------|
| `wk end`   | `end`  | 読み込み専用のレンジ用属性 |
| `wk owner` | `owner`| 読み込み専用のレンジ用属性 |
| `wk start` | `start`| 読み込み専用のレンジ用属性 |
| `wk type`  | `type` | 読み込み専用のレンジ用属性。4D Write Proオブジェクトの型。取れる値： <br>- `wk type default`: 定義のないレンジ <br>- `wk type paragraph`: 段落のレンジ <br>- `wk type image`: 画像（アンカー付き画像およびインライン画像） <br>- `wk type image anchored`: アンカー画像 <br> `wk type image inline`: インライン画像 <br> `wk type container`: ヘッダーやフッターなど <br> `wk type table`: 表の参照 <br> `wk type table row`: 表の行参照 <br> `wk type table cell`: 表のセル参照 <br> `wk type table column`: 複数のカラム参照（カラム透明行カラムレンジに対してのみ） <br> `wk type body`: 本文のレンジ |

行、カラムとセルのレンジには、それらを定義するための非公開の属性が存在します： [tables](./handling-tables.md) を参照してください。

| 定数      | 値    | コメント|
|-------------------------|------------------|------------------------|
| `wk column count`       | `columnCount`    | （テーブル、ドキュメント、セクション用の属性）カラムの数。<br>**値の型**：整数（long）<br>- テーブルの場合：読み込みのみの属性<br>- ドキュメントおよびセクションの場合：読み込み／書き込み可能属性。デフォルト値は 1（単一の行）、最大値は 20 |
| `wk first column`       | `firstColumn`    | *(読み込みのみの属性)* テーブル内にある最初のカラムの数。<br>**値の型**：整数（long） |
| `wk first row`          | `firstRow`       | *(読み込みのみの属性)* テーブル内の最初の行の数。<br>**値の型**：整数（long） |
| `wk row count`          | `rowCount`       | *(読み込みのみの属性)* レンジ内の行数。<br>**値の型**：整数（long） |
| `wk table`              | `table`          | *(読み出しのみの属性)* 親テーブル。<br>**値の型**：オブジェクト |
| `wk table ID`           | `tableID`        | *(読み込みのみの属性)* 親テーブルのID。<br>**値の型**：文字列 |



ドキュメントのレンジは次のように定義できます：

- [WP Text range](../commands-legacy/wp-text-range.md) `(wpArea ; startRange ; endRange) -> rangeObj`: 範囲として渡した境界値に基づく新しいレンジを返します。
- [WP Selection range](../commands-legacy/wp-selection-range) `({*} wpArea) -> rangeObj`: 現在のユーザーセレクションに対応した新しいレンジを返します。
- [WP Picture range](../commands-legacy/wp-picture-range) `(rangeObj) -> rangeObj`: 新しい画像のみのレンジを返します。
- [WP Paragraph range](../commands-legacy/wp-paragraph-range) `(rangeObj) -> rangeObj`: 新しい段落のみのレンジを返します。
- [WP Table range](../commands-legacy/wp-table-range) `(rangeObj) -> rangeObj`: 新しい表のみのレンジを返します。

ドキュメント内でのレンジの位置情報（ページ番号、カラム番号など）を取得するには、[`WP Get position`](../commands-legacy/wp-get-position) コマンドを使用してください。



