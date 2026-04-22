---
id: listbox-object
title: List Box Object
---

## 配列リストボックス

配列リストボックスでは、それぞれの列に 4D の 1次元配列を割り当てなければなりません。 ポインター配列を除きすべてのタイプの配列を使用できま す。 行数は配列の要素数により決定されます。 行数は配列の要素数により決定されます。

デフォルトで 4D は各列に “ColumnX” という名前を割り当てます。 You can change it, as well as other column properties, in the [column properties](listbox-column.md#column-specific-properties). 列ごとの表示フォーマットを指定するには、`OBJECT SET FORMAT` コマンドも使用できます。

> 配列タイプのリストボックスは、特別なメカニズムをもつ [階層モード](listbox_overview.md#階層リストボックス) で表示することができます。

配列タイプのリストボックスでは、入力あるいは表示される値は 4Dランゲージで制御します。 列に [選択リスト](properties_DataSource.md#選択リスト) を割り当てて、データ入力を制御することもできます。
リストボックスのハイレベルコマンド (`LISTBOX INSERT ROWS` や `LISTBOX DELETE ROWS` 等) や配列操作コマンドを使用して、列の値を管理します。 たとえば、列の内容を初期化するには、以下の命令を使用できます:

```4d
ARRAY TEXT(varCol;size)
```

リストを使用することもできます:

```4d
LIST TO ARRAY("ListName";varCol)
```

> **警告**: 異なる配列サイズの列がリストボックスに含まれる場合、もっとも小さい配列サイズの数だけを表示します。 そのため、各配列の要素数は同じにしなければなりません。 リストボックスの列が一つでも空の場合 (ランゲージにより配列が正しく定義またはサイズ設定されなかったときに発生します)、リストボックスは何も表示しません。 そのため、各配列の要素数は同じにしなければなりません。 リストボックスの列が一つでも空の場合 (ランゲージにより配列が正しく定義またはサイズ設定されなかったときに発生します)、リストボックスは何も表示しません。

## セレクションリストボックス

このタイプのリストボックスでは、列ごとにフィールド (例: `[Employees]LastName`) や式を割り当てます。 式は 1つ以上のフィールド (たとえば `[Employees]FirstName+“ ”[Employees]LastName`) または単にフォーミュラ (たとえば `String(Milliseconds)`) を使用できます。 式にはプロジェクトメソッド、変数、あるいは配列項目も指定できます。 You can use the [`LISTBOX SET COLUMN FORMULA`](../commands/listbox-set-column-formula) and [`LISTBOX INSERT COLUMN FORMULA`](../commands/listbox-insert-column-formula) commands to modify columns programmatically. 式は 1つ以上のフィールド (たとえば `[Employees]FirstName+“ ”[Employees]LastName`) または単にフォーミュラ (たとえば `String(Milliseconds)`) を使用できます。 式にはプロジェクトメソッド、変数、あるいは配列項目も指定できます。 `(あるいはスカラー値のコレクションの場合は`This.value`)。 カラムをプログラムで変更するには、`LISTBOX SET COLUMN FORMULA`および`LISTBOX INSERT COLUMN FORMULA\` コマンドを使用します。

それぞれの行はセレクションのレコードを基に評価されます。セレクションは **カレントセレクション** または **命名セレクション**です。

デー タソースがカレントセレクションである場合、データベースに対しておこなわれた変更はリストボックスに自動で反映され、またリストボックスへの変更も自動で データベースに適用されます。 つまりカレントセレクションは常に両方で同じです。

## コレクションまたはエンティティセレクションリストボックス

このタイプのリストボックスでは、各カラムに式が割り当てられている必要があります。 各行の中身はコレクション要素ごと、あるいはエンティティセレクションのエンティティごとに評価されます。 各行の中身はコレクション要素ごと、あるいはエンティティセレクションのエンティティごとに評価されます。

コレクションの各要素、またはエンティティセレクションの各エンティティは、[This](../Concepts/classes.md#this) キーワードを用いてオブジェクトとして取得します。 コレクションの各要素、またはエンティティセレクションの各エンティティは、[This](../Concepts/classes.md#this) キーワードを用いてオブジェクトとして取得します。 カラムの式にはプロパティパス、プロジェクトメソッド、変数、あるいはフォーミュラが指定可能で、`This` を通して得た各エンティティあるいはコレクション要素オブジェクトが利用できます。例: `This.<propertyPath>` (あるいはスカラー値のコレクションの場合は `This.value`)。 `(あるいはスカラー値のコレクションの場合は`This.value`)。 カラムをプログラムで変更するには、`LISTBOX SET COLUMN FORMULA`および`LISTBOX INSERT COLUMN FORMULA\` コマンドを使用します。

データソースがエンティティセレクションの場合、リストボックス側に対しておこなった変更は自動的にデータベースに保存されます。 その一方で、データベース側に対しておこなった変更は、該当エンティティがリロードされてはじめてリストボックス側に反映されます。 その一方で、データベース側に対しておこなった変更は、該当エンティティがリロードされてはじめてリストボックス側に反映されます。

データソースがコレクションの場合、リストボックス内の値に変更をおこなった場合、その変更はコレクションにも反映されます。 データソースがコレクションの場合、リストボックス内の値に変更をおこなった場合、その変更はコレクションにも反映されます。 その一方で、コレクションに対して、たとえば [Collection クラス](../API/CollectionClass.md)の様々な関数を使用して変更をおこなった場合、コレクション変数を自らに再代入することにより明示的に 4D に通知する必要があり、それによってリストボックスのコンテンツは更新されます。 例: 例:

```4d
myCol:=myCol.push("new value") // リストボックスに new value を表示
```

### プロパティ一覧

提供されるプロパティはリストボックスのタイプに依存します。

| プロパティ                                                                    | 配列リストボックス | セレクションリストボックス | コレクションまたはエンティティセレクションリストボックス |
| ------------------------------------------------------------------------ | --------- | ------------- | ---------------------------- |
| [交互に使用する背景色](properties_BackgroundAndBorder.md#交互に使用する背景色)               | X         | X             | X                            |
| [背景色](properties_BackgroundAndBorder.md#背景色塗りカラー)                        | X         | X             | X                            |
| [太字](properties_Text.md#太字)                                              | X         | X             | X                            |
| [背景色式](properties_BackgroundAndBorder.md#背景色式)                           |           | X             | X                            |
| [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル)                     | X         | X             | X                            |
| [下](properties_CoordinatesAndSizing.md#下)                                | X         | X             | X                            |
| [クラス](properties_Object.md#cssクラス)                                       | X         | X             | X                            |
| [コレクションまたはエンティティセレクション](properties_Object.md#コレクションまたはエンティティセレクション)      |           | X             | X                            |
| [カラム自動リサイズ](properties_ResizingOptions.md#カラム自動リサイズ)                     | X         | X             | X                            |
| [カレントの項目](properties_DataSource.md#カレントの項目)                              |           |               | X                            |
| [カレントの項目の位置](properties_DataSource.md#カレントの項目の位置)                        |           |               | X                            |
| [データソース](properties_Object.md#データソース)                                    | X         | X             | X                            |
| [詳細フォーム名](properties_ListBox.md#詳細フォーム名)                                 |           | X             |                              |
| [ヘッダーを表示](properties_Headers.md#ヘッダーを表示)                                 | X         | X             | X                            |
| [フッターを表示](properties_Footers.md#フッターを表示)                                 | X         | X             | X                            |
| [行をダブルクリック](properties_ListBox.md#行をダブルクリック)                             |           | X             |                              |
| [ドラッグ有効](properties_Action.md#ドラッグ有効)                                    | X         | X             | X                            |
| [ドロップ有効](properties_Action.md#ドロップ有効)                                    | X         | X             | X                            |
| [フォーカス可](properties_Entry.md#フォーカス可)                                     | X         | X             | X                            |
| [フォント](properties_Text.md#フォント)                                          | X         | X             | X                            |
| [フォントカラー](properties_Text.md#フォントカラー)                                    | X         | X             | X                            |
| [フォントカラー式](properties_Text.md#フォントカラー式)                                  |           | X             | X                            |
| [フォントサイズ](properties_Text.md#フォントサイズ)                                    | X         | X             | X                            |
| [高さ (リストボックス)](properties_CoordinatesAndSizing.md#高さ) | X         | X             | X                            |
| [高さ (ヘッダー)](properties_Headers.md#高さ)                 | X         | X             | X                            |
| [高さ (フッター)](properties_Footers.md#高さ)                 | X         | X             | X                            |
| [追加の空白の行を非表示](properties_BackgroundAndBorder.md#追加の空白の行を非表示)             | X         | X             | X                            |
| [フォーカスの四角を隠す](properties_Appearance.md#フォーカスの四角を隠す)                      | X         | X             | X                            |
| [セレクションハイライトを非表示](properties_Appearance.md#セレクションハイライトを非表示)              | X         | X             | X                            |
| [階層リストボックス](properties_Object.md#配列リストボックス)                              | X         |               |                              |
| [ハイライトセット](properties_ListBox.md#ハイライトセット)                               |           | X             |                              |
| [横揃え](properties_Text.md#横揃え)                                            | X         | X             | X                            |
| [横線カラー](properties_Gridlines.md#横線カラー)                                   | X         | X             | X                            |
| [横スクロールバー](properties_Appearance.md#縦スクロールバー)                            | X         | X             | X                            |
| [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更)                       | X         | X             | X                            |
| [イタリック](properties_Text.md#イタリック)                                        | X         | X             | X                            |
| [左](properties_CoordinatesAndSizing.md#左)                                | X         | X             | X                            |
| [マスターテーブル](properties_DataSource.md#マスターテーブル)                            |           | X             |                              |
| [メタ情報式](properties_Text.md#メタ情報式)                                        |           |               | X                            |
| [メソッド](properties_Action.md#メソッド)                                        | X         | X             | X                            |
| [行の移動可](properties_Action.md#行の移動可)                                      | X         |               |                              |
| [命名セレクション](properties_DataSource.md#命名セレクション)                            |           | X             |                              |
| [列数](properties_ListBox.md#列数)                                           | X         | X             | X                            |
| [スクロールしない列数](properties_ListBox.md#スクロールしない列数)                           | X         | X             | X                            |
| [ドラッグしない列数](properties_ListBox.md#ドラッグしない列数)                             | X         | X             | X                            |
| [オブジェクト名](properties_Object.md#オブジェクト名)                                  | X         | X             | X                            |
| [右](properties_CoordinatesAndSizing.md#右)                                | X         | X             | X                            |
| [行背景色配列](properties_BackgroundAndBorder.md#行背景色配列)                       | X         |               |                              |
| [行コントロール配列](properties_ListBox.md#行コントロール配列)                             | X         |               |                              |
| [行フォントカラー配列](properties_Text.md#行フォントカラー式)                               | X         |               |                              |
| [行の高さ](properties_CoordinatesAndSizing.md#行の高さ)                          | X         |               |                              |
| [行高さ配列](properties_CoordinatesAndSizing.md#行高さ配列)                        | X         |               |                              |
| [行スタイル配列](properties_Text.md#行スタイル配列)                                    | X         |               |                              |
| [選択された項目](properties_DataSource.md#選択された項目)                              |           |               | X                            |
| [選択モード](properties_ListBox.md#選択モード)                                     | X         | X             | X                            |
| [シングルクリック編集](properties_Entry.md#シングルクリック編集)                             | X         | X             | X                            |
| [ソート可](properties_Action.md#ソート可)                                        | X         | X             | X                            |
| [標準アクション](properties_Action.md#標準アクション)                                  | X         |               |                              |
| [スタイル式](properties_Text.md#スタイル式)                                        |           | X             | X                            |
| [上](properties_CoordinatesAndSizing.md#上)                                | X         | X             | X                            |
| [透過](properties_BackgroundAndBorder.md#透過)                               | X         | X             | X                            |
| [タイプ](properties_Object.md#タイプ)                                          | X         | X             | X                            |
| [下線](properties_Text.md#下線)                                              | X         | X             | X                            |
| [変数あるいは式](properties_Object.md#変数あるいは式)                                  | X         | X             |                              |
| [縦揃え](properties_Text.md#縦揃え)                                            | X         | X             | X                            |
| [縦線カラー](properties_Gridlines.md#縦線カラー)                                   | X         | X             | X                            |
| [縦スクロールバー](properties_Appearance.md#縦スクロールバー)                            | X         | X             | X                            |
| [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更)                       | X         | X             | X                            |
| [表示状態](properties_Display.md#表示状態)                                       | X         | X             | X                            |
| [幅](properties_CoordinatesAndSizing.md#幅)                                | X         | X             | X                            |

> リストボックスの列、ヘッダーおよびフッターにもそれぞれ固有のプロパティがあります。

### フォームイベント

| フォームイベント             | 取得される追加プロパティ (メインプロパティについては[Form event](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.ja.html) 参照)            | コメント                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On After Keystroke   | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On After Sort        | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[headerName](#追加プロパティ)</li>                                                | *複合フォーミュラはソート不可 <br/>(例: This.firstName + This.lastName)* |
| On Alternative Click | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       | *配列リストボックスのみ*                                                                                                                |
| On Before Data Entry | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On Before Keystroke  | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On Begin Drag Over   | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On Clicked           | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On Close Detail      | <li>[row](#追加プロパティ)</li>                                                                                                                 | *カレントセレクション&命名セレクションリストボックスのみ*                                                                           |
| On Collapse          | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       | *階層リストボックスのみ*                                                                                                                |
| On Column Moved      | <li>[columnName](#追加プロパティ)</li><li>[newPosition](#追加プロパティ)</li><li>[oldPosition](#追加プロパティ)</li>                                          |                                                                                                                              |
| On Column Resize     | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[newSize](#追加プロパティ)</li><li>[oldSize](#追加プロパティ)</li>                       |                                                                                                                              |
| On Data Change       | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On Delete Action     | <li>[row](#追加プロパティ)</li>                                                                                                                 |                                                                                                                              |
| On Display Detail    | <li>[isRowSelected](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                                               |                                                                                                                              |
| On Double Clicked    | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On Drag Over         | <li>[area](#追加プロパティ)</li><li>[areaName](#追加プロパティ)</li><li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li> |                                                                                                                              |
| On Drop              | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       |                                                                                                                              |
| On Expand            | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       | *階層リストボックスのみ*                                                                                                                |
| On Footer Click      | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[footerName](#追加プロパティ)</li>                                                | *配列、カレントセレクション&命名セレクションリストボックスのみ*                                                                        |
| On Getting Focus     | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       | *追加プロパティの取得はセル編集時のみ*                                                                                                         |
| On Header Click      | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[headerName](#追加プロパティ)</li>                                                |                                                                                                                              |
| On Load              |                                                                                                                                          |                                                                                                                              |
| On Losing Focus      | <li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li>                                                       | *追加プロパティの取得はセル編集完了時のみ*                                                                                                       |
| On Mouse Enter       | <li>[area](#追加プロパティ)</li><li>[areaName](#追加プロパティ)</li><li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li> |                                                                                                                              |
| On Mouse Leave       |                                                                                                                                          |                                                                                                                              |
| On Mouse Move        | <li>[area](#追加プロパティ)</li><li>[areaName](#追加プロパティ)</li><li>[column](#追加プロパティ)</li><li>[columnName](#追加プロパティ)</li><li>[row](#追加プロパティ)</li> |                                                                                                                              |
| On Open Detail       | <li>[row](#追加プロパティ)</li>                                                                                                                 | *カレントセレクション&命名セレクションリストボックスのみ*                                                                           |
| On Row Moved         | <li>[newPosition](#追加プロパティ)</li><li>[oldPosition](#追加プロパティ)</li>                                                                         | *配列リストボックスのみ*                                                                                                                |
| On Selection Change  |                                                                                                                                          |                                                                                                                              |
| On Scroll            | <li>[horizontalScroll](#追加プロパティ)</li><li>[verticalScroll](#追加プロパティ)</li>                                                                 |                                                                                                                              |
| On Unload            |                                                                                                                                          |                                                                                                                              |

#### 追加プロパティ {#additional-properties}

リストボックスやリストボックス列オブジェクトにて発生するフォームイベントは、次の追加プロパティを返すことがあります:

| プロパティ            | 型       | 説明                                                               |
| ---------------- | ------- | ---------------------------------------------------------------- |
| area             | text    | リストボックスオブジェクトエリア ("header", "footer", "cell") |
| areaName         | text    | エリアの名称                                                           |
| column           | longint | 列番号                                                              |
| columnName       | text    | 列の名称                                                             |
| footerName       | text    | フッターの名称                                                          |
| headerName       | text    | ヘッダーの名称                                                          |
| horizontalScroll | longint | 右方向スクロールの場合は正の数値、左方向の場合は負の数値                                     |
| isRowSelected    | boolean | 行が選択されていれば true、でなければ false                                      |
| newPosition      | longint | 列あるいは行の変更後の位置                                                    |
| newSize          | longint | 列または行の変更後のサイズ (ピクセル単位)                        |
| oldPosition      | longint | 列あるいは行の変更前の位置                                                    |
| oldSize          | longint | 列または行の変更前のサイズ (ピクセル単位)                        |
| row              | longint | 行番号                                                              |
| verticalScroll   | longint | 下方向スクロールの場合は正の数値、上方向の場合は負の数値                                     |

> "偽" カラムや存在しないカラムにてイベントが発生した場合には、主に空の文字列が返されます。
