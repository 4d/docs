---
id: getting-started
title: はじめに
---

4D View Pro is a [4D component](Concepts/components.md) that includes a [4D form area](FormObjects/viewProArea_overview.md) and specific [commands](commands.md). これにより、先進的なスプレッドシート機能をプロジェクトに埋め込むことが可能です。

![](../assets/en/ViewPro/vpSpreadsheet.png)

スプレッドシートとは、セルのグリッドを格納したアプリケーションのことで、これらのセルに情報を入力したり、計算を実行させたり、あるいはピクチャーを表示したりすることができます。 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://developer.mescius.com/spreadjs) integrated in 4D.

フォームに 4D View Pro エリアを埋め込むことで、4D View Pro コマンドを使ってスプレッドシートドキュメントを読み込んだり書き出したりすることができます。

## インストールとアクティベーション

4D View Pro 機能は 4D に直接含まれているため、配布と運用が容易です。 追加のインストールは必要ありません。

しかしながら、4D View Pro はライセンスを必要とします。 これらの機能を使用するには、アプリケーションにおいて当該ライセンスを有効化しておく必要があります。 4D View ライセンスがインストールされていない場合、4D View Pro 機能を必要とするオブジェクトのコンテンツはランタイムでは表示されず、エラーメッセージだけが表示されます:

![](../assets/en/ViewPro/licenseError.png)

## 4D View Pro エリアを挿入する

4D View Pro documents are displayed and edited manually in a [4D form object](FormObjects/viewProArea_overview.md) named 4D View Pro. このオブジェクトを選択するには、オブジェクトバーの最後のツールをクリックします:

![](../assets/en/ViewPro/vpArea.png)

You can also select a preconfigured 4D View Pro area in the [Object library](FormEditor/objectLibrary.md).

> 4D View Pro areas can also be [created and used offscreen](commands/vp-run-offscreen-area.md).

You can [configure the area](configuring.md) using the Property List and 4D View Pro commands.

## セレクション、入力、およびナビゲージョンの基本

スプレッドシートは行と列から構成されています。 各行には番号が割り当てられています。 各列には文字 (アルファベットの文字数を超えた場合には文字のグループ) が割り当てられています。 行と列の交差する場所がセルと呼ばれます。 セルを選択したり、そのコンテンツを編集したりすることができます。

### セル、列、および行の選択

- セルを選択するには、単にセルをクリックするか、キーボードの矢印キーを使用します。 その中身 (あるいは式) がセル内に表示されます。

- 複数の連続したセルを選択するには、マウスをセレクションの端から端へとドラッグします。 また、Shiftキーを押しながらセレクションの二つの端をクリックすることでも選択可能です。

- To select all cells in the spreadsheet, click on the cell at the top left of the area:
  ![](../assets/en/ViewPro/vpSelectAll.PNG)

- 列を選択するには、対応する文字 (アルファベット) をクリックします。

- 行を選択するには、対応する番号をクリックします。

- To select a group of cells that are not continuous, hold down the **Ctrl** key (Windows) or **Command** key (Mac) and click on each cell to be selected.

- セルの選択を解除するには、スプレッドシート内のどこかをクリックすれば選択解除されます。

### データの入力

セルをダブルクリックすると、そのセル内で入力モードに入ります。 セルが空でない場合、挿入カーソルはセルのコンテンツの最後に置かれます。

![](../assets/en/ViewPro/vpInput.PNG)

セルが選択されていれば、たとえ挿入カーソルが非表示であってもデータを直接入力することができます。 その場合、入力した内容はセルのコンテンツを上書きします。

The **Tab** key validates the cell input and selects the cell to its right. Combining the **Shift + Tab** keys validates the cell input and selects the cell to its left.

The **Carriage return** key validates the cell input and selects the cell below it. Combining the **Shift + Carriage return** keys validates the cell input and selects the cell above it.

方向キー (矢印) を使用すると、矢印の方向へとセルの選択を移動することができます。

### コンテキストメニューの使い方

4D View Pro エリアでは、コピー/ペーストといた標準の編集機能だけでなく、基本的なスプレッドシート機能も備えている自動コンテキストメニューを利用することができます:

![](../assets/en/ViewPro/vpContext.PNG)

> コンテキストメニューのコピー/カット/ペースト機能はスプレッドシートエリア内でのみ動作し、システムのペーストボードにはアクセスしません。 System shortcuts such as **Ctrl+c/Ctrl+v** works however and can be used to exchange data between the area and other applications.

クリックしたエリアに応じて、メニューには次の選択肢が表示されます:

- click on a column or row header: **Insert**, **Delete**, **Hide**, or **Unhide** the contents
- セルあるいはセルレンジのクリック:
  - **Filter**: allows hiding row through filters (see "Filtering rows" in the [SpreadJS documentation](https://developer.mescius.com/spreadjs/docs/)).
  - **Sort**: sorts the column contents.
  - **Insert Comment**: allows user to enter a comment for an area. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:\
    ![](../assets/en/ViewPro/vpContext2.PNG)

## 4D View Pro コマンドの使い方

4D View Pro コマンドは、ほかの 4Dランゲージコマンドと同様に 4D のコードエディターにて使用することができます。

Since 4D View Pro is a built-in 4D component, you can access its list of commands from the Explorer, in the **Component Methods** section:

![component-methods](../assets/en/ViewPro/explorer-methods.png)

For a detailed list, see [Commands](commands.md).

### 4D View Proのエリアの操作

4D View Pro エリアは、複数のオブジェクトや要素を扱います。

![](../assets/en/ViewPro/vpDocument.PNG)

Most of 4D View Pro commands require a _vpAreaName_ parameter, which is the [**4D View Pro form area name**](FormObjects/viewProArea_overview.md) (4D form object). This name is the [object name](FormObjects/properties_Object.md#object-name) property.

たとえば、"myVpArea" という名前の 4D View Pro エリアの列数を設定するには、次のように書きます:

```4d
VP SET COLUMN COUNT("myVpArea";5)
```

> When loading a 4D View Pro object in a form area, 4D generates the [On VP Ready](../Events/onVpReady.md) form event once the whole area is loaded. エリアを操作する 4D View Pro コードはこのイベント内で実行する必要があります。 そうでない場合はエラーが返されます。

### レンジオブジェクトの使い方

Some 4D View Pro commands require a _rangeObj_ parameter. 4D View Pro におけるレンジとは、スプレッドシート内の特定のエリアを参照するオブジェクトです。 このエリアは、1つ以上のセルで構成されます。 4D View Pro コマンドを使って、作成したレンジを他のコマンドに受け渡し、ドキュメントの特定箇所に対して読み取りや書き込み操作をおこなうことができます。

たとえば、次のセルに対応するレンジオブジェクトを作成したい場合:

![](../assets/en/ViewPro/vp-cells.png)

You can use the [VP Cells](commands/vp-cells.md) method:

```4d
var $myRange : Object
$myRange:=VP Cells("ViewProArea";2;4;2;3) // C5 から D7
```

You can then pass `$myRange` to another 4D View Pro method to modify these cells (for example add a border to the set of cells with [VP SET BORDER](commands/vp-set-border.md)).

4D View Pro のレンジオブジェクトは、いくつかのプロパティで構成されます:

- area - 4D View Pro エリアの名称
- ranges - レンジオブジェクトのコレクション。 各レンジオブジェクトで利用できるプロパティは、レンジオブジェクトの種類によって異なります。 For example, a column range object will only include the _.column_ and _.sheet_ properties.

| プロパティ  |                                                                                       | タイプ        | 説明                                                         | 利用可能な対象                                            |
| ------ | ------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------- | -------------------------------------------------- |
| area   |                                                                                       | text       | 4D View Pro フォームオブジェクト名                                    | 常に利用可能                                             |
| ranges |                                                                                       | collection | レンジのコレクション                                                 | 常に利用可能                                             |
|        | \[ ].name        | text       | レンジ名                                                       | name                                               |
|        | \[ ].sheet       | number     | シートのインデックス (デフォルトではカレントシートのインデックス; 0起点) | cell, cells, row, rows, column, columns, all, name |
|        | \[ ].row         | number     | 行のインデックス (0起点)                          | cell, cells, row, rows                             |
|        | \[ ].rowCount    | number     | 行の数                                                        | cells, rows                                        |
|        | \[ ].column      | number     | 列のインデックス (0起点)                          | cell, cells, column, columns                       |
|        | \[ ].columnCount | number     | 列の数                                                        | cells, columns                                     |

## ドキュメントのインポートとエクスポート

4D View Pro は、複数のドキュメント形式のインポートおよびエクスポートに対応しています:

- .4vp
- .xlsx
- .txt と .csv
- .sjs
- .pdf (エクスポートのみ)

For more details, check out the description of [VP IMPORT DOCUMENT](commands/vp-import-document.md) and [VP EXPORT DOCUMENT](commands/vp-export-document.md).
