---
id: listboxOverview
title: リストボックス
---

## 概要

リストボックスは複合アクティブオブジェクトで、同期化された複数列 (カラムとも呼びます) の形式でデータの表示・入力がおこなえます。 リストボックスは、エンティティセレクションやレコードセレクションなどのデータベースコンテンツのほか、コレクションや配列などのランゲージコンテンツと紐づけることができます。 データ入力、列の並べ替え、イベント管理、外観のカスタマイズ、 列の移動など、リストボックスには高度な機能が備わっています。

![](assets/en/FormObjects/listbox.png)

リストボックスには 1つ以上の列があり、その内容が自動的に同期化されます。 理論上、列数に制限はありません (マシンのリソースに依存します)。

### 基本のユーザー機能

実行中、リストボックスはリストとしてデータを表示し、入力を受け付けます。 セルを編集可能にするには ([その列について入力が許可されていれば](#入力の管理))、セル上で2回クリックします:

![](assets/en/FormObjects/listbox_edit.png)

リストボックスのセルには、複数行のテキストを入力・表示できます。 セル内で改行するには、**Ctrl+Return** (Windows) または **Command+Return** (macOS) を押します。

セルにはブールやピクチャー、日付、時間、数値も表示することができます。 ヘッダーをクリックすると、列の値をソートできます ([標準ソート](ソートの管理))。 すべての列が自動で同期されます。

またそれぞれの列幅を変更できるほか、ユーザーはマウスを使用して [列](properties_ListBox.md#locked-columns-and-static-columns) や [行](properties_Action.md#movable-rows) の順番を (そのアクションが許可されていれば) 入れ替えることもできます。 リストボックスは [階層モード](#階層リストボックス) で使用することもできます。

ユーザーは標準のショートカットを使用して 1つ以上の行を選択できます。**Shift+クリック** で連続した行を、**Ctrl+クリック** (Windows) や **Command+クリック** (macOS) で非連続行を選択できます。

### リストボックスの構成要素

リストボックスオブジェクトは、以下4つの項目で構成されます:

* リストボックスオブジェクトの全体 
* 列 
* 列ヘッダー 
* 列フッター 

![](assets/en/FormObjects/listbox_parts.png)

それぞれが独自のオブジェクト名や固有のプロパティを持ちます。 たとえば、列の数や、交互に使用する行の背景色などはリストボックスオブジェクトのプロパティで指定し、各列の幅は列プロパティ、ヘッダーのフォントはヘッダープロパティで指定します。

リストボックスオブジェクトやリストボックスの各列に対して、オブジェクトメソッドを設定することができます。 オブジェクトメソッドの呼び出しは、次の順でおこなわれます:

1. 各列のオブジェクトメソッド
2. リストボックスのオブジェクトメソッド

[ヘッダー](#リストボックスヘッダー) と [フッター](#リストボックスフッター) で発生したイベントは、その列のオブジェクトメソッドが受け取ります。

### リストボックスの型

リストボックスには複数のタイプがあり、動作やプロパティの点で異なります。 リストボックスの型は [データソースプロパティ](properties_Object.md#データソース) で定義します:

- **配列**: 各列に 4D 配列を割り当てます。 配列タイプのリストボックスは [階層リストボックス](listbox_overview.md#階層リストボックス) として表示することができます。 
- **セレクション** (**カレントセレクション** または **命名セレクション**): 各列に式 (たとえばフィールド) を割り当てます。それぞれの行はセレクションのレコードを基に評価されます。
- **コレクションまたはエンティティセレクション**: 各列に式を割り当てます。各行の中身はコレクションの要素ごと、あるいはエンティティセレクションのエンティティごとに評価されます。 

> 1つのリストボックス内に複数のデータソースタイプを組み合わせて指定することはできません。 データソースは、リストボックス作成時に定義され、 プログラムによって後から変更することはできません。

### リストボックスの管理

リストボックスオブジェクトはプロパティによってあらかじめ設定可能なほか、プログラムにより動的に管理することもできます。

4D ランゲージにはリストボックス関連のコマンドをまとめた "リストボックス" テーマが専用に設けられていますが、"オブジェクトプロパティ" コマンドや `EDIT ITEM`、`Displayed line number` コマンドなど、ほかのテーマのコマンドも利用することができます。 詳細については *4D ランゲージリファレンスマニュアル* の[リストボックスコマンド一覧](https://doc.4d.com/4Dv18/4D/18/List-Box-Commands-Summary.300-4505230.ja.html)を参照してください。

## リストボックスオブジェクト

### 配列リストボックス

配列リストボックスでは、それぞれの列に 4D の 1次元配列を割り当てなければなりません。ポインター配列を除きすべてのタイプの配列を使用できま す。 行数は配列の要素数により決定されます。

デフォルトで 4D は各列に “ColumnX” という名前の配列変数を割り当てます。 この配列変数名は [列のプロパティ](listbox_overview.md#列特有のプロパティ) で変更できます。 列ごとの表示フォーマットを指定するには、`OBJECT SET FORMAT` コマンドも使用できます。

> 配列タイプのリストボックスは、特別なメカニズムをもつ [階層モード](listbox_overview.md#階層リストボックス) で表示することができます。

配列タイプのリストボックスでは、入力あるいは表示される値は 4Dランゲージで制御します。 列に [選択リスト](properties_DataSource.md#選択リスト) を割り当てて、データ入力を制御することもできます。 リストボックスのハイレベルコマンド (`LISTBOX INSERT ROWS` や `LISTBOX DELETE ROWS` 等) や配列操作コマンドを使用して、列の値を管理します。 たとえば、列の内容を初期化するには、以下の命令を使用できます:

```4d
ARRAY TEXT(ColumnName;size)
```

リストを使用することもできます:

```4d
LIST TO ARRAY("ListName";ColumnName)
```

> **警告**: 異なる配列サイズの列がリストボックスに含まれる場合、もっとも小さい配列サイズの数だけを表示します。 そのため、各配列の要素数は同じにしなければなりません。 リストボックスの列が一つでも空の場合 (ランゲージにより配列が正しく定義またはサイズ設定されなかったときに発生します)、リストボックスは何も表示しません。

### セレクションリストボックス

このタイプのリストボックスでは、列ごとにフィールド (例: `[Employees]LastName`) や式を割り当てます。 式は 1つ以上のフィールド (たとえば `[Employees]FirstName+“ ”[Employees]LastName`) または単にフォーミュラ (たとえば `String(Milliseconds)`) を使用できます。 式にはプロジェクトメソッド、変数、あるいは配列項目も指定できます。 カラムをプログラムで変更するには、`LISTBOX SET COLUMN FORMULA` および `LISTBOX INSERT COLUMN FORMULA` コマンドを使用します。

それぞれの行はセレクションのレコードを基に評価されます。セレクションは **カレントセレクション** または **命名セレクション**です。

デー タソースがカレントセレクションである場合、データベースに対しておこなわれた変更はリストボックスに自動で反映され、またリストボックスへの変更も自動で データベースに適用されます。 つまりカレントセレクションは常に両方で同じです。

### コレクションまたはエンティティセレクションリストボックス

このタイプのリストボックスでは、各カラムに式が割り当てられている必要があります。 各行の中身はコレクション要素ごと、あるいはエンティティセレクションのエンティティごとに評価されます。

コレクションの各要素、またはエンティティセレクションの各エンティティは、[This](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.ja.html) コマンドを用いてオブジェクトとして取得します。 カラムの式にはプロジェクトメソッド、変数、あるいはフォーミュラが指定可能で、`This` を通して得た各エンティティあるいはコレクション要素オブジェクトが利用できます。例: `This.<propertyPath>` (あるいはスカラー値のコレクションの場合は `This.value`)。 カラムをプログラムで変更するには、`LISTBOX SET COLUMN FORMULA` および `LISTBOX INSERT COLUMN FORMULA` コマンドを使用します。

データソースがエンティティセレクションの場合、リストボックス側に対しておこなった変更は自動的にデータベースに保存されます。 その一方で、データベース側に対しておこなった変更は、該当エンティティがリロードされてはじめてリストボックス側に反映されます。

データソースがコレクションの場合、リストボックス内の値に変更をおこなった場合、その変更はコレクションにも反映されます。 その一方で、コレクションに対して、たとえば *コレクション* テーマの様々なメソッドを使用して変更をおこなった場合、コレクション変数を自らに再代入することで明示的に 4D に通知する必要があり、それによってリストボックスのコンテンツは更新されます。 たとえば:

```4d
myCol:=myCol.push("new value") // リストボックスに new value を表示
```

### プロパティ一覧

提供されるプロパティはリストボックスのタイプに依存します。

| プロパティ                                                                        | 配列リストボックス | セレクションリストボックス | コレクションまたはエンティティセレクションリストボックス |
| ---------------------------------------------------------------------------- | --------- | ------------- | ---------------------------- |
| [交互に使用する背景色](properties_BackgroundAndBorder.md#alternate-background-color)   | ○         | ○             | ○                            |
| [背景色](properties_BackgroundAndBorder.md#background-color)                    | ○         | ○             | ○                            |
| [太字](properties_Text.md#bold)                                                | ○         | ○             | ○                            |
| [背景色式](properties_BackgroundAndBorder.md#background-color-expression)        |           | ○             | ○                            |
| [境界線スタイル](properties_BackgroundAndBorder.md#border-line-style)               | ○         | ○             | ○                            |
| [下](properties_CoordinatesAndSizing.md#bottom)                               | ○         | ○             | ○                            |
| [クラス](properties_Object.md#css-class)                                        | ○         | ○             | ○                            |
| [コレクションまたはエンティティセレクション](properties_Object.md#collection-or-entity-selection) |           | ○             | ○                            |
| [カラム自動リサイズ](properties_ResizingOptions.md#column-auto-resizing)              | ○         | ○             | ○                            |
| [カレントの項目](properties_DataSource.md#current-item)                             |           |               | ○                            |
| [カレントの項目の位置](properties_DataSource.md#current-item-position)                 |           |               | ○                            |
| [データソース](properties_Object.md#data-source)                                   | ○         | ○             | ○                            |
| [詳細フォーム名](properties_ListBox.md#detail-form-name)                            |           | ○             |                              |
| [ヘッダーを表示](properties_Headers.md#display-headers)                             | ○         | ○             | ○                            |
| [フッターを表示](properties_Footers.md#display-footers)                             | ○         | ○             | ○                            |
| [行をダブルクリック](properties_ListBox.md#double-click-on-row)                       |           | ○             |                              |
| [ドラッグ有効](properties_Action.md#droppable)                                     | ○         | ○             | ○                            |
| [ドロップ有効](properties_Action.md#droppable)                                     | ○         | ○             | ○                            |
| [フォーカス可](properties_Entry.md#focusable)                                      | ○         | ○             | ○                            |
| [フォント](properties_Text.md#font)                                              | ○         | ○             | ○                            |
| [フォントカラー](properties_Text.md#font_color)                                     | ○         | ○             | ○                            |
| [フォントカラー式](properties_Text.md#font-color-expression)                         |           | ○             | ○                            |
| [フォントサイズ](properties_Text.md#font-size)                                      | ○         | ○             | ○                            |
| [高さ (リストボックス)](properties_CoordinatesAndSizing.md#height)                    | ○         | ○             | ○                            |
| [高さ (ヘッダー)](properties_Headers.md#height)                                    | ○         | ○             | ○                            |
| [高さ (フッター)](properties_Footers.md#height)                                    | ○         | ○             | ○                            |
| [追加の空白の行を非表示](properties_BackgroundAndBorder.md#hide-extra-blank-rows)       | ○         | ○             | ○                            |
| [フォーカスの四角を隠す](properties_Appearance.md#hide-focus-rectangle)                 | ○         | ○             | ○                            |
| [セレクションハイライトを非表示](properties_Appearance.md#hide-selection-highlight)         | ○         | ○             | ○                            |
| [階層リストボックス](properties_Object.md#hierarchical-list-box)                      | ○         |               |                              |
| [ハイライトセット](properties_ListBox.md#highlight-set)                              |           | ○             |                              |
| [横揃え](properties_Text.md#horizontal-alignment)                               | ○         | ○             | ○                            |
| [横線カラー](properties_Gridlines.md#horizontal-line-color)                       | ○         | ○             | ○                            |
| [横スクロールバー](properties_Appearance.md#horizontal-scroll-bar)                   | ○         | ○             | ○                            |
| [横方向サイズ変更](properties_ResizingOptions.md#horizontal-sizing)                  | ○         | ○             | ○                            |
| [イタリック](properties_Text.md#italic)                                           | ○         | ○             | ○                            |
| [左](properties_CoordinatesAndSizing.md#left)                                 | ○         | ○             | ○                            |
| [マスターテーブル](properties_DataSource.md#table)                                   |           | ○             |                              |
| [メタ情報式](properties_Text.md#meta-info-expression)                             |           |               | ○                            |
| [メソッド](properties_Action.md#method)                                          | ○         | ○             | ○                            |
| [行の移動可](properties_Action.md#movable-rows)                                   | ○         |               |                              |
| [命名セレクション](properties_DataSource.md#selectionName)                           |           | ○             |                              |
| [列数](properties_ListBox.md#number-of-columns)                                | ○         | ○             | ○                            |
| [スクロールしない列数](properties_ListBox.md#number-of-locked-columns)                 | ○         | ○             | ○                            |
| [ドラッグしない列数](properties_ListBox.md#number-of-static-columns)                  | ○         | ○             | ○                            |
| [オブジェクト名](properties_Object.md#object-name)                                  | ○         | ○             | ○                            |
| [右](properties_CoordinatesAndSizing.md#right)                                | ○         | ○             | ○                            |
| [行背景色配列](properties_BackgroundAndBorder.md#row-background-color-array)       | ○         |               |                              |
| [行コントロール配列](properties_ListBox.md#row-control-array)                         | ○         |               |                              |
| [行フォントカラー配列](properties_Text.md#row-font-color-array)                        | ○         |               |                              |
| [行の高さ](properties_CoordinatesAndSizing.md#row-height)                        | ○         |               |                              |
| [行高さ配列](properties_CoordinatesAndSizing.md#row-height-array)                 | ○         |               |                              |
| [行スタイル配列](properties_Text.md#row-style-array)                                | ○         |               |                              |
| [選択された項目](properties_DataSource.md#selected-items)                           |           |               | ○                            |
| [選択モード](properties_ListBox.md#selection-mode)                                | ○         | ○             | ○                            |
| [シングルクリック編集](properties_Entry.md#single-click-edit)                          | ○         | ○             | ○                            |
| [ソート可](properties_Action.md#sortable)                                        | ○         | ○             | ○                            |
| [標準アクション](properties_Action.md#standard-action)                              | ○         |               |                              |
| [スタイル式](properties_Text.md#style-expression)                                 |           | ○             | ○                            |
| [上](properties_CoordinatesAndSizing.md#top)                                  | ○         | ○             | ○                            |
| [透過](properties_BackgroundAndBorder.md#transparent)                          | ○         | ○             | ○                            |
| [型](properties_Object.md#type)                                               | ○         | ○             | ○                            |
| [下線](properties_Text.md#underline)                                           | ○         | ○             | ○                            |
| [変数あるいは式](properties_Object.md#variable-or-expression)                       | ○         | ○             |                              |
| [縦揃え](properties_Text.md#vertical-alignment)                                 | ○         | ○             | ○                            |
| [縦線カラー](properties_Gridlines.md#vertical-line-color)                         | ○         | ○             | ○                            |
| [縦スクロールバー](properties_Appearance.md#vertical-scroll-bar)                     | ○         | ○             | ○                            |
| [縦方向サイズ変更](properties_ResizingOptions.md#vertical-sizing)                    | ○         | ○             | ○                            |
| [表示状態](properties_Display.md#visibility)                                     | ○         | ○             | ○                            |
| [幅](properties_CoordinatesAndSizing.md#width)                                | ○         | ○             | ○                            |


> リストボックスの列、ヘッダーおよびフッターにもそれぞれ固有のプロパティがあります。

### フォームイベント





























| フォームイベント             | 取得される追加プロパティ (メインプロパティについては[Form event](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.ja.html) 参照)                                                                      | コメント                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| On After Edit        | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On After Keystroke   | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On After Sort        | - [column](#additional-properties)
- [columnName](#additional-properties)
- [headerName](#additional-properties)                                                                | *複合フォーミュラはソート不可   
(例: This.firstName + This.lastName)* |
| On Alternative Click | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *配列リストボックスのみ*                                           |
| On Before Data Entry | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Before Keystroke  | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Begin Drag Over   | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Clicked           | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Close Detail      | - [row](#additional-properties)                                                                                                                                                 | *カレントセレクション&命名セレクションリストボックスのみ*                          |
| On Collapse          | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *階層リストボックスのみ*                                           |
| On Column Moved      | - [columnName](#additional-properties)
- [newPosition](#additional-properties)
- [oldPosition](#additional-properties)                                                          |                                                         |
| On Column Resize     | - [column](#additional-properties)
- [columnName](#additional-properties)
- [newSize](#additional-properties)
- [oldSize](#additional-properties)                               |                                                         |
| On Data Change       | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Delete Action     | - [row](#additional-properties)                                                                                                                                                 |                                                         |
| On Display Detail    | - [isRowSelected](#additional-properties)
- [row](#additional-properties)                                                                                                       |                                                         |
| On Double Clicked    | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Drag Over         | - [area](#additional-properties)
- [areaName](#additional-properties)
- [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties) |                                                         |
| On Drop              | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Expand            | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *階層リストボックスのみ*                                           |
| On Footer Click      | - [column](#additional-properties)
- [columnName](#additional-properties)
- [footerName](#additional-properties)                                                                | *配列、カレントセレクション&命名セレクションリストボックスのみ*                       |
| On Getting Focus     | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *追加プロパティの取得はセル編集時のみ*                                    |
| On Header Click      | - [column](#additional-properties)
- [columnName](#additional-properties)
- [headerName](#additional-properties)                                                                |                                                         |
| On Load              |                                                                                                                                                                                 |                                                         |
| On Losing Focus      | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *追加プロパティの取得はセル編集完了時のみ*                                  |
| On Mouse Enter       | - [area](#additional-properties)
- [areaName](#additional-properties)
- [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties) |                                                         |
| On Mouse Leave       |                                                                                                                                                                                 |                                                         |
| On Mouse Move        | - [area](#additional-properties)
- [areaName](#additional-properties)
- [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties) |                                                         |
| On Open Detail       | - [row](#additional-properties)                                                                                                                                                 | *カレントセレクション&命名セレクションリストボックスのみ*                          |
| On Row Moved         | - [newPosition](#additional-properties)
- [oldPosition](#additional-properties)                                                                                                 | *配列リストボックスのみ*                                           |
| On Selection Change  |                                                                                                                                                                                 |                                                         |
| On Scroll            | - [horizontalScroll](#additional-properties)
- [verticalScroll](#additional-properties)                                                                                         |                                                         |
| On Unload            |                                                                                                                                                                                 |                                                         |


#### 追加プロパティ

リストボックスやリストボックス列オブジェクトにて発生するフォームイベントは、次の追加プロパティを返すことがあります:

| プロパティ            | 型       | 説明                                            |
| ---------------- | ------- | --------------------------------------------- |
| area             | テキスト    | リストボックスオブジェクトエリア ("header", "footer", "cell") |
| areaName         | テキスト    | エリアの名称                                        |
| column           | 倍長整数    | 列番号                                           |
| columnName       | テキスト    | 列の名称                                          |
| footerName       | テキスト    | フッターの名称                                       |
| headerName       | テキスト    | ヘッダーの名称                                       |
| horizontalScroll | 倍長整数    | 右方向スクロールの場合は正の数値、左方向の場合は負の数値                  |
| isRowSelected    | boolean | 行が選択されていれば True、でなければ False                   |
| newPosition      | 倍長整数    | 列あるいは行の変更後の位置                                 |
| newSize          | 倍長整数    | 列または行の変更後のサイズ (ピクセル単位)                        |
| oldPosition      | 倍長整数    | 列あるいは行の変更前の位置                                 |
| oldSize          | 倍長整数    | 列または行の変更前のサイズ (ピクセル単位)                        |
| row              | 倍長整数    | 行番号                                           |
| verticalScroll   | 倍長整数    | 下方向スクロールの場合は正の数値、上方向の場合は負の数値                  |


> "偽" カラムや存在しないカラムにてイベントが発生した場合には、主に空の文字列が返されます。

## リストボックス列

リストボックスは、それぞれ固有のプロパティを持つ 1つ以上の列オブジェクトから構成されています。 列を選択するには、フォームエディターでリストボックスオブジェクトが選択されているときに任意の列をクリックします:

![](assets/en/FormObjects/listbox_column.png)

リストボックスの各列毎に標準のプロパティ (テキスト、背景色など) を設定できます。設定すると、リストボックスに対する設定よりもこちらが優先されます。

> 配列型リストボックスのカラムについては、[式タイプ](properties_Object.md#式タイプ) (テキスト、数値、整数、ブール、ピクチャー、時間、日付、あるいはオブジェクト) を定義することができます。 オブジェクト配列を使用するためには、4D View Pro ライセンスが必要になります ([カラム内でのオブジェクト配列の使用 (4D View Pro)](#カラム内でのオブジェクト配列の使用-4d-view-pro)参照)。

### 列特有のプロパティ

[オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式タイプ (配列リストボックス列)](properties_Object.md#式タイプ) - [CSSクラス](properties_Object.md#CSSクラス) - [デフォルト値](properties_DataSource.md#デフォルト値) - [選択リスト](properties_DataSource.md#選択リスト) - [式](properties_DataSource.md#式) - [データタイプ (セレクションおよびコレクションリストボックス列)](properties_DataSource.md#データタイプ) - [関連付け](properties_DataSource.md#関連付け) - [幅](properties_CoordinatesAndSizing.md#幅) - [自動行高](properties_CoordinatesAndSizing.md#自動行高) - [最小幅](properties_CoordinatesAndSizing.md#最小幅) - [最大幅](properties_CoordinatesAndSizing.md#最大幅) - [サイズ変更可](properties_ResizingOptions.md#サイズ変更可) - [入力可](properties_Entry.md#入力可) - [入力フィルター](properties_Entry.md#入力フィルター) - [指定リスト](properties_RangeOfValues.md#指定リスト) - [除外リスト](properties_RangeOfValues.md#除外リスト) - [表示タイプ](properties_Display.md#表示タイプ) - [文字フォーマット](properties_Display.md#文字フォーマット) - [数値フォーマット](properties_Display.md#数値フォーマット) - [テキスト (True時)/テキスト (False時)](properties_Display.md#テキスト-(True時)-テキスト-(False時)) - [日付フォーマット](properties_Display.md#日付フォーマット) - [時間フォーマット](properties_Display.md#時間フォーマット) - [ピクチャーフォーマット](properties_Display.md#ピクチャーフォーマット) - [非表示](properties_Display.md#表示状態) - [ワードラップ](properties_Display.md#ワードラップ) [エリプシスを使用して省略](properties_Display.md#エリプシスを使用して省略) - [背景色](properties_Text.md#背景色) - [交互に使用する背景色](properties_BackgroundAndBorder.md#交互に使用する背景色) - [行背景色配列](properties_BackgroundAndBorder.md#行背景色配列) - [背景色式](properties_BackgroundAndBorder.md#背景色式) - [フォント](properties_Text.md#フォント) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [行スタイル配列](properties_Text.md#行スタイル配列) - [スタイル式](properties_Text.md#スタイル式) - [フォントカラー](properties_Text.md#フォントカラー) - [行フォントカラー配列](properties_Text.md#行フォントカラー配列) - [行フォントカラー式](properties_Text.md#行フォントカラー式) - [横揃え](properties_Text.md#横揃え) - [縦揃え](properties_Text.md#縦揃え) - [マルチスタイル](properties_Text.md#マルチスタイル) - [メソッド](properties_Action.md#メソッド)

### フォームイベント





















| フォームイベント             | 取得される追加プロパティ (メインプロパティについては[Form event](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.ja.html) 参照)                                                                      | コメント                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| On After Edit        | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On After Keystroke   | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On After Sort        | - [column](#additional-properties)
- [columnName](#additional-properties)
- [headerName](#additional-properties)                                                                | *複合フォーミュラはソート不可   
(例: This.firstName + This.lastName)* |
| On Alternative Click | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *配列リストボックスのみ*                                           |
| On Before Data Entry | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Before Keystroke  | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Begin Drag Over   | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Clicked           | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Column Moved      | - [columnName](#additional-properties)
- [newPosition](#additional-properties)
- [oldPosition](#additional-properties)                                                          |                                                         |
| On Column Resize     | - [column](#additional-properties)
- [columnName](#additional-properties)
- [newSize](#additional-properties)
- [oldSize](#additional-properties)                               |                                                         |
| On Data Change       | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Double Clicked    | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Drag Over         | - [area](#additional-properties)
- [areaName](#additional-properties)
- [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties) |                                                         |
| On Drop              | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       |                                                         |
| On Footer Click      | - [column](#additional-properties)
- [columnName](#additional-properties)
- [footerName](#additional-properties)                                                                | *配列、カレントセレクション&命名セレクションリストボックスのみ*                       |
| On Getting Focus     | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *追加プロパティの取得はセル編集時のみ*                                    |
| On Header Click      | - [column](#additional-properties)
- [columnName](#additional-properties)
- [headerName](#additional-properties)                                                                |                                                         |
| On Load              |                                                                                                                                                                                 |                                                         |
| On Losing Focus      | - [column](#additional-properties)
- [columnName](#additional-properties)
- [row](#additional-properties)                                                                       | *追加プロパティの取得はセル編集完了時のみ*                                  |
| On Row Moved         | - [newPosition](#additional-properties)
- [oldPosition](#additional-properties)                                                                                                 | *配列リストボックスのみ*                                           |
| On Scroll            | - [horizontalScroll](#additional-properties)
- [verticalScroll](#additional-properties)                                                                                         |                                                         |
| On Unload            |                                                                                                                                                                                 |                                                         |


## リストボックスヘッダー

> リストボックスのヘッダープロパティにアクセスするためには、リストボックスのプロパティリストで [ヘッダーを表示](properties_Headers.md#ヘッダーを表示) オプションが選択されていなければなりません。

ヘッダーが表示されていれば、フォームエディターでリストボックスオブジェクトが選択されているときに、リストボックスヘッダーをクリックするとヘッダーを選択できます:

![](assets/en/FormObjects/listbox_header.png)

リストボックスの各列ヘッダー毎に標準のテキストプロパティを設定できます。設定すると、リストボックスや列に対する設定よりもこちらが優先されます。

さらに、ヘッダー特有のプロパティを設定することができます。 [カスタマイズされた並び替え](#ソートの管理) などの用途に、ヘッダーの列タイトルの隣、あるいはタイトルの代わりにアイコンを表示することができます。

![](assets/en/FormObjects/lbHeaderIcon.png)

ランタイムにおいてヘッダーで発生したイベントは、[その列のオブジェクトメソッド](#オブジェクトメソッド) が受け取ります。

ヘッダーに `OBJECT SET VISIBLE` コマンドを使用すると、このコマンドに渡した引数に関わらず、そのリストボックスのすべてのヘッダーが対象になります。 たとえば、`OBJECT SET VISIBLE(*;"header3";False)` という命令の場合、指定したヘッダーだけではなく、*header3* が属するリストボックスの全ヘッダーを非表示にします。

### ヘッダー特有のプロパティ

[オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [タイトル](properties_Object.md#タイトル) - [CSSクラス](properties_Object.md#CSSクラス) - [パス名](properties_TextAndPicture.md#ピクチャーパス名) - [アイコンの場所](properties_TextAndPicture.md#アイコンの場所) - [幅](properties_CoordinatesAndSizing.md#幅) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [横揃え](properties_Text.md#横揃え) - [縦揃え](properties_Text.md#縦揃え) - [ヘルプTips](properties_Help.md#ヘルプTips)

## リストボックスフッター

> リストボックスのフッタープロパティにアクセスするためには、リストボックスのプロパティリストで [フッターを表示](properties_Footers.md#フッターを表示) オプションが選択されていなければなりません。

リストボックスは、追加の情報を表示するための入力を受け付けない "フッター" を持つことができます。 表形式で表示されるデータについて、合計や平均などの計算値を表示するためにフッターは通常使用されます。

フッターが表示されていれば、フォームエディターでリストボックスオブジェクトが選択されているときにフッターをクリックすることで選択できます:

![](assets/en/FormObjects/listbox_footers.png)

リストボックスの各列フッター毎に標準のテキストプロパティを設定できます。設定すると、リストボックスや列に対する設定よりもこちらが優先されます。 さらに、フッター特有のプロパティを設定することができます。 [カスタムまたは自動計算](properties_Object.md#変数の計算) をフッターに挿入することができます。

ランタイムにおいてフッターで発生したイベントは、[その列のオブジェクトメソッド](#オブジェクトメソッド) が受け取ります。

フッターに `OBJECT SET VISIBLE` コマンドを使用すると、このコマンドに渡した引数に関わらず、そのリストボックスのすべてのフッターが対象になります。 たとえば、`OBJECT SET VISIBLE(*;"footer3";False)` という命令の場合、指定したフッターだけではなく、*footer3* が属するリストボックスの全フッターを非表示にします。

### フッター特有のプロパティ

[オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型) - [変数の計算](properties_Object.md#変数の計算) - [CSSクラス](properties_Object.md#CSSクラス) - [幅](properties_CoordinatesAndSizing.md#幅) - [文字フォーマット](properties_Display.md#文字フォーマット) - [数値フォーマット](properties_Display.md#数値フォーマット) - [日付フォーマット](properties_Display.md#日付フォーマット) - [時間フォーマット](properties_Display.md#時間フォーマット) - [ピクチャーフォーマット](properties_Display.md#ピクチャーフォーマット) - [ワードラップ](properties_Display.md#ワードラップ) [エリプシスを使用して省略](properties_Display.md#エリプシスを使用して省略) - [背景色](properties_BackgroundAndBorder.md#背景色-塗りカラー) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [横揃え](properties_Text.md#横揃え) - [縦揃え](properties_Text.md#縦揃え) - [ヘルプTips](properties_Help.md#ヘルプTips)

## 入力の管理

リストボックスのセルが入力可能であるには、以下の条件を満たす必要があります:

- セルが属する列が [入力可](properties_Entry.md#入力可) に設定されている (でなければ、その列のセルには入力できません)。
- `On Before Data Entry` イベントで $0 が -1 を返さない。 カーソルがセルに入ると、その列のメソッドで `On Before Data Entry` イベントが生成されます。 このイベントのコンテキストにおいて、$0 に -1 を設定すると、そのセルは入力不可として扱われます。 **Tab** や **Shift+Tab** が押された後にイベントが生成された場合には、フォーカスはそれぞれ次あるいは前のセルに移動します。 $0 が -1 でなければ (デフォルトは 0)、列は入力可であり編集モードに移行します。

2つの配列で構築されるリストボックスを考えてみましょう。1つは日付でもう 1つはテキストです。 日付配列は入力不可ですが、テキスト配列は日付が過去でない場合に入力可とします。

![](assets/en/FormObjects/listbox_entry.png)

*arrText* 列のメソッドは以下の通りです:

```4d
 Case of
    :(FORM event.code=On Before Data Entry) // セルがフォーカスを得たとき
       LISTBOX GET CELL POSITION(*;"lb";$col;$row)
  // セルの特定
       If(arrDate{$row}<Current date) // 過去の日付なら
          $0:=-1 // セルは入力不可
       Else
  // そうでなければ入力可
       End if
 End case
```

`On Before Data Entry` イベントは `On Getting Focus` より前に生成されます。

データの整合性を保つため、セレクション型とエンティティセレクション型のリストボックスにおいては、レコード/エンティティに対する変更はセル内の編集が確定されたときに自動的に保存されます。確定は、以下のような場合を指します:

- セルがアクティブでなくなったとき (ユーザーによるタブキー押下、クリック操作など)
- リストボックスからフォーカスが外れたとき
- フォームからフォーカスが外れたとき

データ入力・編集操作にともなって発生するイベントのシーケンスは次のようになります:

| 動作                                             | リストボックス型            | イベントシーケンス                                                                                                                           |
| ---------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| セルが編集モードに切り替わったとき (ユーザー操作または `EDIT ITEM` コマンド) | すべて                 | On Before Data Entry                                                                                                                |
|                                                | すべて                 | On Getting Focus                                                                                                                    |
| セルの値が編集されたとき                                   | すべて                 | On Before Keystroke                                                                                                                 |
|                                                | すべて                 | On After Keystroke                                                                                                                  |
|                                                | すべて                 | On After Edit                                                                                                                       |
| ユーザーがセルを確定し、セルを移動したとき                          | セレクションリストボックス       | 保存                                                                                                                                  |
|                                                | レコードセレクションリストボックス   | On saving an existing record トリガー (設定されていれば)                                                                                        |
|                                                | セレクションリストボックス       | On Data Change(*)                                                                                                                   |
|                                                | エンティティセレクションリストボックス | エンティティはオートマージオプション、オプティミスティック・ロックモードで保存されます (entity.save( ) を参照ください)。 正常に保存できた場合には、エンティティは更新され最新の状態が表示されます。 保存処理が失敗した場合、エラーが表示されます。 |
|                                                | すべて                 | On Losing Focus                                                                                                                     |


(*) エンティティセレクションリストボックスでの `On Data Change` イベントの場合:

- [カレントの項目](properties_DataSource.md#カレントの項目) オブジェクトには編集前の値が格納されます。
- `This` オブジェクトには、編集後の値が格納されます。

> コレクション/エンティティセレクション型では、式が null に評価される場合にリストボックスでのデータ入力に制約があります。 この場合、セル内の null 値を編集・削除することはできません。

## 選択行の管理

選択行の管理は、リストボックスのタイプが配列か、レコードのセレクションか、あるいはコレクション/エンティティセレクションかによって異なります。

- **セレクションリストボックス**: 選択行は、デフォルトで `$ListboxSetX` と呼ばれる変更可能なセットにより管理されます (X は 0 から始まり、フォーム内のリストボックスの数に応じて一つずつ増加していきます)。 このセットはリストボックスの[プロパティリスト](properties_ListBox.md#ハイライトセット)で定義します。 このセットは 4D が自動で管理します。ユーザーがリストボックス中で 1つ以上の行を選択すると、セットが即座に更新されます。 他方、リストボックスの選択をプログラムから更新するために、"セット" テーマのコマンドを使用することができます。

- **コレクション/エンティティセレクションリストボックス**: 選択項目は、専用のリストボックスプロパティを通して管理されます。
    
    - [カレントの項目](properties_DataSource.md#カレントの項目) は、選択された要素/エンティティを受け取るオブジェクトです。
    - [選択された項目](properties_DataSource.md#選択された項目) は、選択された項目のコレクションです。
    - [カレントの項目の位置](properties_DataSource.md#カレントの項目の位置) は、選択された要素あるいはエンティティの位置を返します。
- **配列リストボックス**: `LISTBOX SELECT ROW` コマンドを使用して、プログラムからリストボックスの行を選択できます。 [リストボックスオブジェクトにリンクされた変数](properties_Object.md#変数あるいは式) は、行選択の取得、設定、保存に使用します。 この変数はブール配列で、4Dが自動的に作成・管理します。 この配列のサイズは、リストボックスのサイズにより決定されます。つまり、各列に関連付けられた配列のうち、最も小さな配列と同じ数の要素を持ちます。 この配列の各要素には、対応する行が選択された場合には `True` が、それ以外の場合は `False` が設定されます。 4D は、ユーザーの動作に応じてこの配列の内容を更新します。 これとは逆に、この配列要素の値を変更して、リストボックス中の選択行を変更することができます。 他方、この配列への要素の挿入や削除はできず、行のタイプ変更もできません。 `Count in array` コマンドを使用して、選択された行の数を調べることができます。 たとえば、以下のメソッドは配列タイプのリストボックスで、最初の行の選択を切り替えます:

```4d
 ARRAY BOOLEAN(tBListBox;10)
  // tBListBox はフォーム内にあるリストボックス変数の名前です
 If(tBListBox{1}=True)
    tBListBox{1}:=False
 Else
    tBListBox{1}:=True
 End if
```

> `OBJECT SET SCROLL POSITION` コマンドは、最初に選択された行または指定された行を表示するようにリストボックスをスクロールします。

### 選択行の見た目のカスタマイズ

リストボックスの [セレクションハイライトを非表示](properties_Appearance.md#セレクションハイライトを非表示) プロパティにチェックを入れている場合には、他のインターフェースオプションを活用してリストボックスの選択行を可視化する必要があります。 ハイライトが非表示になっていても選択行は引き続き 4D によって管理されています。つまり:

- 配列タイプのリストボックスの場合、当該リストボックスにリンクしているブール配列変数から選択行を割り出します。
- セレクションタイプのリストボックスの場合、特定行 (レコード) がリストボックスの [ハイライトセット](properties_ListBox.md#ハイライトセット) プロパティで指定しているセットに含まれているかを調べます。

特定された選択行は、それらの背景色やフォントカラー、フォントスタイルなどをプログラムによって調整することで、選択行を独自の方法で可視化することが可能です。 リストボックスのタイプによって、表示の管理は配列や式を使用しておこないます (後述参照)。

> リストボックスの現アピアランス (フォントカラー、背景色、フォントスタイル等) を使うには `lk inherited` 定数が使用できます。

#### セレクションリストボックス

選択行を特定するには、リストボックスの [ハイライトセット](properties_ListBox.md#ハイライトセット) プロパティで指定されているセットに対象行が含まれているかを調べます: 選択行のアピアランスを定義するには、プロパティリストにて [カラー式またはスタイル式プロパティ](#配列と式の使用) を 1つ以上使います。

次の場合には式が自動的に再評価されることに留意ください:

- リストボックスのセレクションが変わった場合
- リストボックスがフォーカスを得た、あるいは失った場合
- リストボックスが設置されたフォームウィンドウが最前面になった、あるいは最前面ではなくなった場合

#### 配列リストボックス

選択行を特定するには、当該リストボックスにリンクしているブール配列 [変数](properties_Object.md#変数あるいは式) を調べます:

選択行のアピアランスを定義するには、プロパティリストにて [行カラー配列または行スタイル配列プロパティ](#配列と式の使用) を 1つ以上使います。

選択行のアピアランスを定義するリストボックス配列は、`On Selection Change` フォームイベント内で再計算する必要があることに留意が必要です。また、フォーカスの有無を選択行の表示に反映させるには、次のフォームイベント内でもこれらの配列を変更することができます:

- `On Getting Focus` (リストボックスプロパティ)
- `On Losing Focus` (リストボックスプロパティ)
- `On Activate` (フォームプロパティ)
- `On Deactivate` (フォームプロパティ)

##### 例題

システムのハイライトを非表示にして、リストボックスの選択行を緑の背景色で表しました:

![](assets/en/FormObjects/listbox_styles7.png)

配列タイプのリストボックスの場合、[行背景色配列](properties_BackgroundAndBorder.md#行背景色配列) をプログラムにより更新する必要があります。 JSON フォームにおいて、リストボックスに次の行背景色配列を定義した場合:

        "rowFillSource": "_ListboxBackground",
    

リストボックスのオブジェクトメソッドに次のように書けます:

```4d
 Case of
    :(FORM event.code=On Selection Change)
       $n:=Size of array(LB_Arrays)
       ARRAY LONGINT(_ListboxBackground;$n) // 行背景色配列
       For($i;1;$n)
          If(LB_Arrays{$i}=True) // selected
             _ListboxBackground{$i}:=0x0080C080 // 背景色を緑にします
          Else // not selected
             _ListboxBackground{$i}:=lk inherited
          End if
       End for
 End case
```

セレクションタイプのリストボックスで同じ効果を得るには、[ハイライトセット](properties_ListBox.md#ハイライトセット) プロパティで指定されたセットに応じて [背景色式](properties_BackgroundAndBorder.md#背景色式) が更新されるよう、メソッドを利用します。

JSON フォームにおいて、リストボックスに次のハイライトセットおよび背景色式を定義した場合:

        "highlightSet": "$SampleSet",
        "rowFillSource": "UI_SetColor",
    

*UI_SetColor* メソッドに次のように書けます:

```4d
 If(Is in set("$SampleSet"))
    $color:=0x0080C080 // 背景色を緑にします
 Else
    $color:=lk inherited
 End if

 $0:=$color
```

> 階層リストボックスにおいては、[セレクションハイライトを非表示](properties_Appearance.md#セレクションハイライトを非表示) オプションをチェックした場合には、ブレーク行をハイライトすることができません。 同階層のヘッダーの色は個別指定することができないため、任意のブレーク行だけをプログラムでハイライト表示する方法はありません。

## ソートの管理

ヘッダーがクリックされると、リストボックスはデフォルトで標準的なカラムの並べ替えを自動的におこないます。 標準的な並べ替えとは、列の値を英数字順に並べ替え、続けてクリックされると昇順/降順を交互に切り替えます。 すべての列は常に自動で同期されます。

リストボックスの [ソート可](properties_Action.md#ソート可) プロパティの選択を解除すると、ユーザーによる標準の並べ替えを禁止することができます。

開発者は、`LISTBOX SORT COLUMNS` コマンドを使用するか、または `On Header Click` と `On After Sort` フォームイベント (`FORM Event`コマンド参照) を 4D の配列管理コマンドを組み合わせて、独自の並べ替えを設定することができます。

> [ソート可](properties_Action.md#ソート可) プロパティは、ユーザーによる標準の並べ替えにのみ影響します。`LISTBOX SORT COLUMNS` コマンドは、このプロパティを考慮しません。

[列ヘッダー変数](properties_Object.md#変数あるいは式)の値を使用すると、列の現在の並べ替え状況 (読み込み) や並べ替え矢印の表示など、追加情報を管理することができます。

- 変数が 0 のとき、列は並べ替えられておらず、矢印は表示されていません;  
    ![](assets/en/FormObjects/sorticon0.png)

- 変数が 1 のとき、列は昇順で並べ替えられており、並べ替え矢印が表示されています;  
    ![](assets/en/FormObjects/sorticon1.png)

- 変数が 2 のとき、列は降順で並べ替えられており、並べ替え矢印が表示されています。  
    ![](assets/en/FormObjects/sorticon2.png)

変数の値を設定して (たとえば Header2:=2)、ソートを表す矢印の表示を強制することができます。 しかし、列のソート順は変更されません、これを処理するのは開発者の役割です。

> `OBJECT SET FORMAT` コマンドは、カスタマイズされた並べ替えアイコンをサポートする機能をリストボックスヘッダー用に提供しています。

## スタイルとカラー、表示の管理

リストボックスの背景色、フォントカラー、そしてフォントスタイルを設定するためにはいくつかの方法があります:

- [リストボックスオブジェクト](#リストボックスオブジェクト) のプロパティリストを使用
- [列](#リストボックス列) のプロパティリストを使用
- リストボックスまたは列ごとの [配列や式](#配列と式の使用) プロパティを使用
- セルごとのテキストにて定義 ([マルチスタイルテキスト](properties_Text.md#マルチスタイル) の場合)

### 優先順位と継承

優先順位や継承の原理は、複数のレベルにわたって同じプロパティに異なる値が指定された場合に適用されます。

| 優先度  | 設定場所                                    |
| ---- | --------------------------------------- |
| 優先度高 | セル単位 (マルチスタイル使用時)                       |
|      | 列の配列/メソッド                               |
|      | リストボックスの配列/メソッド                         |
|      | 列のプロパティ                                 |
|      | リストボックスのプロパティ                           |
| 優先度低 | メタ情報式 (コレクションまたはエンティティセレクションリストボックスの場合) |


例として、リストボックスのプロパティにてフォントスタイルを設定しながら、列には行スタイル配列を使用して異なるスタイルを設定した場合、後者が有効となります。

それぞれの属性 (スタイル、カラー、背景色) について、デフォルトの値を使用した場合、属性の **継承** がおこなわれます:

- セル属性について: 行の属性値を受け継ぎます
- 行属性について: 列の属性値を受け継ぎます
- 列属性について: リストボックスの属性値を受け継ぎます

このように、高次のレベルの属性値をオブジェクトに継承させたい場合は、定義するコマンドに `lk inherited` 定数 (デフォルト値) を渡すか、対応する行スタイル/カラー配列の要素に直接渡します。 以下のような、標準のフォントスタイルで行の背景色が交互に変わる配列リストボックスを考えます: ![](assets/en/FormObjects/listbox_styles3.png)

以下の変更を加えます:

- リストボックスオブジェクトの [行背景色配列](properties_BackgroundAndBorder.md#行背景色配列) プロパティを使用して、2行目の背景色を赤に変更します。
- リストボックスオブジェクトの [行スタイル配列](properties_Text.md#行スタイル配列) を使用して、4 行目のスタイルをイタリックに変更します。
- 5 列目の列オブジェクトの [行スタイル配列](properties_Text.md#行スタイル配列) を使用して、5 列目の二つの要素を太字に変更します。
- 1、2 列目の列オブジェクトの [行背景色配列](properties_BackgroundAndBorder.md#行背景色配列) を使用して、両列から一つずつ、計二つの背景色を濃い青に変更します:

![](assets/en/FormObjects/listbox_styles3.png)

リストボックスを元の状態に戻すには、以下の手順でおこないます:

- 1、2 列目の行背景色配列の要素 2 に定数 `lk inherited` 定数を渡します。これにより行の赤の背景色を継承します。
- 5 列目の行スタイル配列の要素 3 と 4 に定数 `lk inherited` を渡します。これにより、要素 4 を除いて標準のスタイルを継承します (要素 4 はリストボックスの行スタイル配列にて指定されたイタリックの属性を継承します)。
- リストボックスの行スタイル配列の要素 4 に定数 `lk inherited` を渡します。これにより、4 行目のイタリックのスタイルが除去されます。
- リストボックスの行背景色配列の要素 2 に定数 `lk inherited` を渡します。これにより元の、背景色が交互に変わるリストボックスの状態に戻すことができます。

### 配列と式の使用

リストボックスのタイプに応じて、行のカラーやスタイル、表示について使用できるプロパティが異なります:

| プロパティ   | 配列リストボックス                                                              | セレクションリストボックス                                                         | コレクションまたはエンティティセレクションリストボックス                                                          |
| ------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 背景色     | [行背景色配列](properties_BackgroundAndBorder.md#row-background-color-array) | [背景色式](properties_BackgroundAndBorder.md#background-color-expression) | [背景色式"](properties_BackgroundAndBorder.md#背景色式) または [メタ情報式](properties_Text.md#メタ情報式) |
| フォントカラー | [行フォントカラー配列](properties_Text.md#row-font-color-array)                  | [フォントカラー式](properties_Text.md#font-color-expression)                  | [フォントカラー式](properties_Text.md#フォントカラー式) または [メタ情報式](properties_Text.md#メタ情報式)         |
 フォントスタイル|

[行スタイル配列](properties_Text.md#行スタイル配列)|[スタイル式](properties_Text.md#スタイル式)|[スタイル式](properties_Text.md#スタイル式) または [メタ情報式](properties_Text.md#メタ情報式)| 表示|[行コントロール配列](properties_ListBox.md#行コントロール配列)|-|-| 

## リストボックスの印刷

リストボックスの印刷には 2つの印刷モードがあります: フォームオブジェクトのようにリストボックスを印刷する **プレビューモード** と、フォーム内でリストボックスオブジェクトの印刷方法を制御できる **詳細モード** があります。 フォームエディターで、リストボックスオブジェクトに "印刷" アピアランスを適用できる点に留意してください。

### プレビューモード

プレビューモードでのリストボックスの印刷は、標準の印刷コマンドや **印刷** メニューを使用して、リストボックスを含むフォームをそのまま出力します。 リストボックスはフォーム上に表示されている通りに印刷されます。 このモードでは、オブジェクトの印刷を細かく制御することはできません。とくに、表示されている以上の行を印刷することはできません。

### 詳細モード

このモードでは、リストボックスの印刷は `Print object` コマンドを使用してプログラムにより実行されます (プロジェクトフォームとテーブルフォームがサポートされています)。 `LISTBOX GET PRINT INFORMATION` コマンドを使用してオブジェクトの印刷を制御できます。

このモードでは:

- オブジェクトの高さよりも印刷する行数が少ない場合、リストボックスオブジェクトの高さは自動で減少させられます ("空白" 行は印刷されません)。 他方、オブジェクトの内容に基づき高さが自動で増大することはありません。 実際に印刷されるオブジェクトのサイズは `LISTBOX GET PRINT INFORMATION` コマンドで取得できます。
- リストボックスオブジェクトは "そのまま" 印刷されます。言い換えれば、ヘッダーやグリッド線の表示、表示/非表示行など、現在の表示設定が考慮されます。 これらの設定には印刷される最初の行も含みます。印刷を実行する前に `OBJECT SET SCROLL POSITION` を呼び出すと、リストボックスに印刷される最初の行はコマンドで指定した行になります。 
- 自動メカニズムにより、表示可能な行以上の行数を含むリストボックスの印刷が容易になります。連続して `Print object` を呼び出し、呼び出し毎に別の行のまとまりを印刷することができます。 `LISTBOX GET PRINT INFORMATION` コマンドを使用して、印刷がおこなわれている間の状態をチェックできます。

## 階層リストボックス

A hierarchical list box is a list box in which the contents of the first column appears in hierarchical form. This type of representation is adapted to the presentation of information that includes repeated values and/or values that are hierarchically dependent (country/region/city and so on).

> Only [array type list boxes](#array-list-boxes) can be hierarchical.

Hierarchical list boxes are a particular way of representing data but they do not modify the data structure (arrays). Hierarchical list boxes are managed exactly the same way as regular list boxes.

### Defining the hierarchy

To specify a hierarchical list box, there are several possibilities:

* Manually configure hierarchical elements using the Property list of the form editor (or edit the JSON form).
* Visually generate the hierarchy using the list box management pop-up menu, in the form editor.
* Use the [LISTBOX SET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-SET-HIERARCHY.301-4127969.en.html) and [LISTBOX GET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-GET-HIERARCHY.301-4127970.en.html) commands, described in the *4D Language Reference* manual.

#### Hierarchical List Box property

This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered [when the *dataSource* property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the *Hierarchical List Box* option is selected, corresponding to each *dataSource* array to use as break column. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column.

The first variable always corresponds to the name of the variable for the first column of the list box (the two values are automatically bound). This first variable is always visible and enterable. For example: country. The second variable is also always visible and enterable; it specifies the second hierarchical level. For example: regions. Beginning with the third field, each variable depends on the one preceding it. For example: counties, cities, and so on. A maximum of ten hierarchical levels can be specified. If you remove a value, the whole hierarchy moves up a level.

The last variable is never hierarchical even if several identical values exists at this level. For example, referring to the configuration illustrated above, imagine that arr1 contains the values A A A B B B, arr2 has the values 1 1 1 2 2 2 and arr3 the values X X Y Y Y Z. In this case, A, B, 1 and 2 could appear in collapsed form, but not X and Y:

![](assets/en/FormObjects/property_hierarchicalListBox.png)

This principle is not applied when only one variable is specified in the hierarchy: in this case, identical values may be grouped.

> If you specify a hierarchy based on the first columns of an existing list box, you must then remove or hide these columns (except for the first), otherwise they will appear in duplicate in the list box. If you specify the hierarchy via the pop-up menu of the editor (see below), the unnecessary columns are automatically removed from the list box.

#### Create hierarchy using the contextual menu

When you select at least one column in addition to the first one in a list box object (of the array type) in the form editor, the **Create hierarchy** command is available in the context menu:

![](assets/en/FormObjects/listbox_hierarchy1.png)

This command is a shortcut to define a hierarchy. When it is selected, the following actions are carried out:

* The **Hierarchical list box** option is checked for the object in the Property List.
* The variables of the columns are used to specify the hierarchy. They replace any variables already specified.
* The columns selected no longer appear in the list box (except for the title of the first one).

Example: given a list box whose first columns contain Country, Region, City and Population. When Country, Region and City are selected, if you choose **Create hierarchy** in the context menu, a three-level hierarchy is created in the first column, columns 2 and 3 are removed and the Population column becomes the second:

![](assets/en/FormObjects/listbox_hierarchy2.png)

##### Cancel hierarchy

When the first column is selected and already specified as hierarchical, you can use the **Cancel hierarchy** command. When you choose this command, the following actions are carried out:

* The **Hierarchical list box** option is deselected for the object,
* The hierarchical levels 2 to X are removed and transformed into columns added to the list box.

### How it works

When a form containing a hierarchical list box is opened for the first time, by default all the rows are expanded.

A break row and a hierarchical "node" are automatically added in the list box when values are repeated in the arrays. For example, imagine a list box containing four arrays specifying cities, each city being characterized by its country, its region, its name and its number of inhabitants:

![](assets/en/FormObjects/hierarch1.png)

If this list box is displayed in hierarchical form (the first three arrays being included in the hierarchy), you obtain:

![](assets/en/FormObjects/hierarch2.png)

The arrays are not sorted before the hierarchy is constructed. If, for example, an array contains the data AAABBAACC, the hierarchy obtained is:

> A B A C

To expand or collapse a hierarchical "node," you can just click on it. If you **Alt+click** (Windows) or **Option+click** (macOS) on the node, all its sub-elements will be expanded or collapsed as well. These operations can also be carried out by programming using the `LISTBOX EXPAND` and `LISTBOX COLLAPSE` commands.

When values of the date or time type are included in a hierarchical list box, they are displayed in the short system format.

#### Sorts in hierarchical list boxes

In a list box in hierarchical mode, a standard sort (carried out by clicking on the header of a list box column) is always constructed as follows:

- In the first place, all the levels of the hierarchical column (first column) are automatically sorted by ascending order.
- The sort is then carried out by ascending or descending order (according to the user action) on the values of the column that was clicked.
- All the columns are synchronized. 
- During subsequent sorts carried out on non-hierarchical columns of the list box, only the last level of the first column is sorted. It is possible to modify the sorting of this column by clicking on its header.

Given for example the following list box, in which no specific sort is specified:

![](assets/en/FormObjects/hierarch3.png)

If you click on the "Population" header to sort the populations by ascending (or alternately descending) order, the data appear as follows:

![](assets/en/FormObjects/hierarch4.png)

As for all list boxes, you can [disable the standard sort mechanism](properties_Action.md#sortable) and manage sorts using programming.

#### Selections and positions in hierarchical list boxes

A hierarchical list box displays a variable number of rows on screen according to the expanded/collapsed state of the hierarchical nodes. This does not however mean that the number of rows of the arrays vary. Only the display is modified, not the data. It is important to understand this principle because programmed management of hierarchical list boxes is always based on the data of the arrays, not on the displayed data. In particular, the break rows added automatically are not taken into account in the display options arrays (see below).

Let’s look at the following arrays for example:

![](assets/en/FormObjects/hierarch5.png)

If these arrays are represented hierarchically, the row "Quimper" will not be displayed on the second row, but on the fourth, because of the two break rows that are added:

![](assets/en/FormObjects/hierarch6.png)

Regardless of how the data are displayed in the list box (hierarchically or not), if you want to change the row containing "Quimper" to bold, you must use the statement Style{2} = bold. Only the position of the row in the arrays is taken into account.

This principle is implemented for internal arrays that can be used to manage:

- colors
- background colors
- styles
- hidden rows
- selections

For example, if you want to select the row containing Rennes, you must pass:

```4d
 ->MyListbox{3}:=True
```

Non-hierarchical representation: ![](assets/en/FormObjects/hierarch7.png) Hierarchical representation: ![](assets/en/FormObjects/hierarch8.png)

> If one or more rows are hidden because their parents are collapsed, they are no longer selected. Only the rows that are visible (either directly or by scrolling) can be selected. In other words, rows cannot be both hidden and selected.

As with selections, the `LISTBOX GET CELL POSITION` command will return the same values for a hierarchical list box and a non-hierarchical list box. This means that in both of the examples below, `LISTBOX GET CELL POSITION` will return the same position: (3;2).

*Non-hierarchical representation:* ![](assets/en/FormObjects/hierarch9.png)

*Hierarchical representation:* ![](assets/en/FormObjects/hierarch10.png)

When all the rows of a sub-hierarchy are hidden, the break line is automatically hidden. In the above example, if rows 1 to 3 are hidden, the "Brittany" break row will not appear.

#### Break rows

If the user selects a break row, `LISTBOX GET CELL POSITION` returns the first occurrence of the row in the corresponding array. In the following case:

![](assets/en/FormObjects/hierarch11.png)

... `LISTBOX GET CELL POSITION` returns (2;4). To select a break row by programming, you will need to use the `LISTBOX SELECT BREAK` command.

Break rows are not taken into account in the internal arrays used to manage the graphic appearance of list boxes (styles and colors). It is however possible to modify these characteristics for break rows via the graphic management commands for objects. You simply need to execute the appropriate commands on the arrays that constitute the hierarchy.

Given for example the following list box (the names of the associated arrays are specified in parentheses):

*Non-hierarchical representation:* ![](assets/en/FormObjects/hierarch12.png)

*Hierarchical representation:* ![](assets/en/FormObjects/hierarch13.png)

In hierarchical mode, break levels are not taken into account by the style modification arrays named `tStyle` and `tColors`. To modify the color or style of break levels, you must execute the following statements:

```4d
 OBJECT SET RGB COLORS(T1;0x0000FF;0xB0B0B0)
 OBJECT SET FONT STYLE(T2;Bold)
```

> In this context, only the syntax using the array variable can function with the object property commands because the arrays do not have any associated object.

Result:

![](assets/en/FormObjects/hierarch14.png)

#### Optimized management of expand/collapse

You can optimize hierarchical list boxes display and management using the `On Expand` and `On Collapse` form events.

A hierarchical list box is built from the contents of its arrays so it can only be displayed when all these arrays are loaded into memory. This makes it difficult to build large hierarchical list boxes based on arrays generated from data (through the `SELECTION TO ARRAY` command), not only because of the display speed but also the memory used.

Using the `On Expand` and `On Collapse` form events can overcome these constraints: for example, you can display only part of the hierarchy and load/unload the arrays on the fly, based on user actions. In the context of these events, the `LISTBOX GET CELL POSITION` command returns the cell where the user clicked in order to expand or collapse a row.

In this case, you must fill and empty arrays through the code. The principles to be implemented are:

- When the list box is displayed, only the first array must be filled. However, you must create a second array with empty values so that the list box displays the expand/collapse buttons: ![](assets/en/FormObjects/hierarch15.png)

- When a user clicks on an expand button, you can process the `On Expand` event. The `LISTBOX GET CELL POSITION` command returns the cell concerned and lets you build the appropriate hierarchy: you fill the first array with the repeated values and the second with the values sent from the `SELECTION TO ARRAY` command and you insert as many rows as needed in the list box using the `LISTBOX INSERT ROWS` command. ![](assets/en/FormObjects/hierarch16.png)

- When a user clicks on a collapse button, you can process the `On Collapse` event. The `LISTBOX GET CELL POSITION` command returns the cell concerned: you remove as many rows as needed from the list box using the `LISTBOX DELETE ROWS` command.

## Object arrays in columns (4D View Pro)

List box columns can handle object arrays. Since object arrays can contain different kinds of data, this powerful new feature allows you to mix different input types in the rows of a single column, and display various widgets as well. For example, you could insert a text input in the first row, a check box in the second, and a drop-down list in the third. Object arrays also provide access to new kinds of widgets, such as buttons or color pickers.

The following list box was designed using an object array:

![](assets/en/FormObjects/listbox_column_objectArray.png)

> **Note about Licensing**: The ability to use object arrays in list boxes is a first step to the upcoming "4D View Pro" tool that will progressively replace the 4D View plug-in. Using this feature requires you to have a valid 4D View license. For more information, please refer to the 4D Web site.

### Configuring an object array column

To assign an object array to a list box column, you just need to set the object array name in either the Property list ("Variable Name" field), or using the [LISTBOX INSERT COLUMN](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-INSERT-COLUMN.301-4311153.en.html) command, like with any array-based column. In the Property list, you can now select Object as a "Expression Type" for the column:

![](assets/en/FormObjects/listbox_column_objectArray_config.png)

Standard properties related to coordinates, size, and style are available for object columns. You can define them using the Property list, or by programming the style, font color, background color and visibility for each row of an object-type list box column. These types of columns can also be hidden.

However, the Data Source theme is not available for object-type list box columns. In fact, the contents of each column cell are based on attributes found in the corresponding element of the object array. Each array element can define:

the value type (mandatory): text, color, event, etc. the value itself (optional): used for input/output. the cell content display (optional): button, list, etc. additional settings (optional): depend on the value type To define these properties, you need to set the appropriate attributes in the object (available attributes are listed below). For example, you can write "Hello World!" in an object column using this simple code:

```4d
ARRAY OBJECT(obColumn;0) //column array
 C_OBJECT($ob) //first element
 OB SET($ob;"valueType";"text") //defines the value type (mandatory)
 OB SET($ob;"value";"Hello World!") //defines the value
 APPEND TO ARRAY(obColumn;$ob)  
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld.png)

> Display format and entry filters cannot be set for an object column. They automatically depend on the value type.

#### valueType and data display

When a list box column is associated with an object array, the way a cell is displayed, entered, or edited, is based on the valueType attribute of the array element. Supported valueType values are:

* "text": for a text value
* "real": for a numeric value that can include separators like a \<space>, <.>, or <,>
* "integer": for an integer value
* "boolean": for a True/False value
* "color": to define a background color
* "event": to display a button with a label.

4D uses default widgets with regards to the "valueType" value (i.e., a "text" is displayed as a text input widget, a "boolean" as a check box), but alternate displays are also available through options (*e.g.*, a real can also be represented as a drop-down menu). The following table shows the default display as well as alternatives for each type of value:

| valueType | Default widget                                 | Alternative widget(s)                                                                          |
| --------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| テキスト      | text input                                     | drop-down menu (required list) or combo box (choice list)                                      |
| 実数        | controlled text input (numbers and separators) | drop-down menu (required list) or combo box (choice list)                                      |
| integer   | controlled text input (numbers only)           | drop-down menu (required list) or combo box (choice list) or three-states check box            |
| boolean   | check box                                      | drop-down menu (required list)                                                                 |
| color     | background color                               | テキスト                                                                                           |
| event     | button with label                              |                                                                                                |
|           |                                                | All widgets can have an additional unit toggle button or ellipsis button attached to the cell. |


You set the cell display and options using specific attributes in each object (see below).

#### Display formats and entry filters

You cannot set display formats or entry filters for columns of object-type list boxes. They are automatically defined according to the value type. These are listed in the following table:

| Value type | Default format                                             | Entry control           |
| ---------- | ---------------------------------------------------------- | ----------------------- |
| テキスト       | same as defined in object                                  | any (no control)        |
| 実数         | same as defined in object (using system decimal separator) | "0-9" and "." and "-"   |
|            |                                                            | "0-9" and "." if min>=0 |
| integer    | same as defined in object                                  | "0-9" and "-"           |
|            |                                                            | "0-9" if min>=0         |
| ブール        | check box                                                  | N/A                     |
| color      | N/A                                                        | N/A                     |
| event      | N/A                                                        | N/A                     |


### Attributes

Each element of the object array is an object that can contain one or more attributes that will define the cell contents and data display (see example above).

The only mandatory attribute is "valueType" and its supported values are "text", "real", "integer", "boolean", "color", and "event". The following table lists all the attributes supported in list box object arrays, depending on the "valueType" value (any other attributes are ignored). Display formats are detailed and examples are provided below.

|                       | valueType                               | テキスト | 実数 | integer | boolean | color | event |
| --------------------- | --------------------------------------- | ---- | -- | ------- | ------- | ----- | ----- |
| *Attributes*          | *説明*                                    |      |    |         |         |       |       |
| value                 | cell value (input or output)            | x    | x  | x       |         |       |       |
| min                   | minimum value                           |      | x  | x       |         |       |       |
| max                   | maximum value                           |      | x  | x       |         |       |       |
| behavior              | "threeStates" value                     |      |    | x       |         |       |       |
| requiredList          | drop-down list defined in object        | x    | x  | x       |         |       |       |
| choiceList            | combo box defined in object             | x    | x  | x       |         |       |       |
| requiredListReference | 4D list ref, depends on "saveAs" value  | x    | x  | x       |         |       |       |
| requiredListName      | 4D list name, depends on "saveAs" value | x    | x  | x       |         |       |       |
| saveAs                | "reference" or "value"                  | x    | x  | x       |         |       |       |
| choiceListReference   | 4D list ref, display combo box          | x    | x  | x       |         |       |       |
| choiceListName        | 4D list name, display combo box         | x    | x  | x       |         |       |       |
| unitList              | array of X elements                     | x    | x  | x       |         |       |       |
| unitReference         | index of selected element               | x    | x  | x       |         |       |       |
| unitsListReference    | 4D list ref for units                   | x    | x  | x       |         |       |       |
| unitsListName         | 4D list name for units                  | x    | x  | x       |         |       |       |
| alternateButton       | add an alternate button                 | x    | x  | x       | x       | x     |       |


#### value

Cell values are stored in the "value" attribute. This attribute is used for input as well as output. It can also be used to define default values when using lists (see below).

```4d
 ARRAY OBJECT(obColumn;0) //column array
 C_OBJECT($ob1)
 $entry:="Hello world!"
 OB SET($ob1;"valueType";"text")
 OB SET($ob1;"value";$entry) // if the user enters a new value, $entry will contain the edited value
 C_OBJECT($ob2)
 OB SET($ob2;"valueType";"real")
 OB SET($ob2;"value";2/3)
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"boolean")
 OB SET($ob3;"value";True)

 APPEND TO ARRAY(obColumn;$ob1)
 APPEND TO ARRAY(obColumn;$ob2)
 APPEND TO ARRAY(obColumn;$ob3)
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_value.png)

> Null values are supported and result in an empty cell.

#### min and max

When the "valueType" is "real" or "integer", the object also accepts min and max attributes with appropriate values (values must be of the same type as the valueType).

These attributes can be used to control the range of input values. When a cell is validated (when it loses the focus), if the input value is lower than the min value or greater than the max value, then it is rejected. In this case, the previous value is maintained and a tip displays an explanation.

```4d
 C_OBJECT($ob3)
 $entry3:=2015
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";$entry3)
 OB SET($ob3;"min";2000)
 OB SET($ob3;"max";3000)
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_minMax.png)

#### behavior

The behavior attribute provides variations to the regular representation of values. In 4D v15, a single variation is proposed:

| Attribute | Available value(s) | valueType(s) | 説明                                                                                                                                                                                   |
| --------- | ------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| behavior  | threeStates        | integer      | Represents a numeric value as a three-states check box.  
2=semi-checked, 1=checked, 0=unchecked, -1=invisible, -2=unchecked disabled, -3=checked disabled, -4=semi-checked disabled |


```4d
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";-3)
 C_OBJECT($ob4)
 OB SET($ob4;"valueType";"integer")
 OB SET($ob4;"value";-3)
 OB SET($ob4;"behavior";"threeStates")
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_behavior.png)

#### requiredList and choiceList

When a "choiceList" or a "requiredList" attribute is present inside the object, the text input is replaced by a drop-down list or a combo box, depending of the attribute:

* If the attribute is "choiceList", the cell is displayed as a combo box. This means that the user can select or type a value.
* If the attribute is "requiredList" then the cell is displayed as a drop-down list and the user can only select one of the values provided in the list.

In both cases, a "value" attribute can be used to preselect a value in the widget.

> The widget values are defined through an array. If you want to assign an existing 4D list to the widget, you need to use the "requiredListReference", "requiredListName", "choiceListReference", or "choiceListName" attributes.

例: 

* You want to display a drop-down list with only two options: "Open" or "Closed". "Closed" must be preselected:

```4d
    ARRAY TEXT($RequiredList;0)
    APPEND TO ARRAY($RequiredList;"Open")
    APPEND TO ARRAY($RequiredList;"Closed")
    C_OBJECT($ob)
    OB SET($ob;"valueType";"text")
    OB SET($ob;"value";"Closed")
    OB SET ARRAY($ob;"requiredList";$RequiredList)
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_openClosed.png)

* You want to accept any integer value, but display a combo box to suggest the most common values:

```4d
    ARRAY LONGINT($ChoiceList;0)
    APPEND TO ARRAY($ChoiceList;5)
    APPEND TO ARRAY($ChoiceList;10)
    APPEND TO ARRAY($ChoiceList;20)
    APPEND TO ARRAY($ChoiceList;50)
    APPEND TO ARRAY($ChoiceList;100)
    C_OBJECT($ob)
    OB SET($ob;"valueType";"integer")
    OB SET($ob;"value";10) //10 as default value
    OB SET ARRAY($ob;"choiceList";$ChoiceList)
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_commonValues.png)

#### requiredListName and requiredListReference

The "requiredListName" and "requiredListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Lists editor of the Tool box) or by programming (using the New list command). The cell will then be displayed as a drop-down list. This means that the user can only select one of the values provided in the list.

Use "requiredListName" or "requiredListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.

> * If you want to define these values through a simple array, you need to use the "requiredList" attribute.
> * If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

例: 

* You want to display a drop-down list based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green"), save it as a value and display "blue" by default:

![](assets/en/FormObjects/listbox_column_objectArray_colors.png)

```4d
    C_OBJECT($ob)
    OB SET($ob;"valueType";"text")
    OB SET($ob;"saveAs";"value")
    OB SET($ob;"value";"blue")
    OB SET($ob;"requiredListName";"colors") 
```

![](assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)

* You want to display a drop-down list based on a list defined by programming and save it as a reference:

```4d
    <>List:=New list
    APPEND TO LIST(<>List;"Paris";1)
    APPEND TO LIST(<>List;"London";2)
    APPEND TO LIST(<>List;"Berlin";3)
    APPEND TO LIST(<>List;"Madrid";4)
    C_OBJECT($ob)
    OB SET($ob;"valueType";"integer")
    OB SET($ob;"saveAs";"reference")
    OB SET($ob;"value";2) //displays London by default
    OB SET($ob;"requiredListReference";<>List)
```

    ![](assets/en/FormObjects/listbox_column_objectArray_cities.png)
    

#### choiceListName and choiceListReference

The "choiceListName" and "choiceListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Tool box) or by programming (using the New list command). The cell is then displayed as a combo box, which means that the user can select or type a value.

Use "choiceListName" or "choiceListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.

> * If you want to define these values through a simple array, you need to use the "choiceList" attribute.
> * If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

例: 

You want to display a combo box based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green") and display "green" by default:

![](assets/en/FormObjects/listbox_column_objectArray_colors.png)

```4d
 C_OBJECT($ob)
 OB SET($ob;"valueType";"text")
 OB SET($ob;"value";"blue")
 OB SET($ob;"choiceListName";"colors")
```

![](../assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)

#### unitsList, unitsListName, unitsListReference and unitReference

You can use specific attributes to add units associated with cell values (*e.g.*: "10 cm", "20 pixels", etc.). To define the unit list, you can use one of the following attributes:

* "unitsList": an array containing the x elements used to define the available units (e.g.: "cm", "inches", "km", "miles", etc.). Use this attribute to define units within the object.
* "unitsListReference": a reference to a 4D list containing available units. Use this attribute to define units with a 4D list created with the [New list](https://doc.4d.com/4Dv15/4D/15.6/New-list.301-3818474.en.html) command.
* "unitsListName": a name of a design-based 4D list that contains available units. Use this attribute to define units with a 4D list created in the Tool box.

Regardless of the way the unit list is defined, it can be associated with the following attribute:

* "unitReference": a single value that contains the index (from 1 to x) of the selected item in the "unitList", "unitsListReference" or "unitsListName" values list.

The current unit is displayed as a button that cycles through the "unitList", "unitsListReference" or "unitsListName" values each time it is clicked (e.g., "pixels" -> "rows" -> "cm" -> "pixels" -> etc.)

例: 

We want to set up a numeric input followed by two possible units: "rows" or "pixels". The current value is "2" + "lines". We use values defined directly in the object ("unitsList" attribute):

```4d
ARRAY TEXT($_units;0)
APPEND TO ARRAY($_units;"lines")
APPEND TO ARRAY($_units;"pixels")
C_OBJECT($ob)
OB SET($ob;"valueType";"integer")
OB SET($ob;"value";2) // 2 "units"
OB SET($ob;"unitReference";1) //"lines"
OB SET ARRAY($ob;"unitsList";$_units)
```

![](assets/en/FormObjects/listbox_column_objectArray_unitList.png)

#### alternateButton

If you want to add an ellipsis button [...] to a cell, you just need to pass the "alternateButton" with the True value in the object. The button will be displayed in the cell automatically.

When this button is clicked by a user, an `On Alternate Click` event will be generated, and you will be able to handle it however you want (see the "Event management" paragraph for more information).

例: 

```4d
C_OBJECT($ob1)
$entry:="Hello world!"
OB SET($ob;"valueType";"text")
OB SET($ob;"alternateButton";True)
OB SET($ob;"value";$entry)
```

![](assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

#### color valueType

The "color" valueType allows you to display either a color or a text.

* If the value is a number, a colored rectangle is drawn inside the cell. 例: 
    
    ```4d
    C_OBJECT($ob4)
    OB SET($ob4;"valueType";"color")
    OB SET($ob4;"value";0x00FF0000)
    ```
    
    ![](assets/en/FormObjects/listbox_column_objectArray_colorValue.png)

* If the value is a text, then the text is displayed (*e.g.*: "value";"Automatic").

#### event valueType

The "event" valueType displays a simple button that generates an `On Clicked` event when clicked. No data or value can be passed or returned.

Optionally, you can pass a "label" attribute.

例: 

```4d
C_OBJECT($ob)
OB SET($ob;"valueType";"event")
OB SET($ob;"label";"Edit...")
```

![](assets/en/FormObjects/listbox_column_objectArray_eventValueType.png)

### Event management

Several events can be handled while using an object list box array:

* **On Data Change**: An `On Data Change` event is triggered when any value has been modified either: 
    * in a text input zone
    * in a drop-down list
    * in a combo box area
    * in a unit button (switch from value x to value x+1)
    * in a check box (switch between checked/unchecked)
* **On Clicked**: When the user clicks on a button installed using the "event" *valueType* attribute, an `On Clicked` event will be generated. This event is managed by the programmer.
* **On Alternative Click**: When the user clicks on an ellipsis button ("alternateButton" attribute), an `On Alternative Click` event will be generated. This event is managed by the programmer.