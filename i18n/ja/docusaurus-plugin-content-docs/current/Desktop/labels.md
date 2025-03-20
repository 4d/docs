---
id: labels
title: ラベル
---

4Dのラベルエディターにより、さまざまなラベルを容易に印刷することができます。 ラベルエディターを使用し、次の操作を行うことができます:

- 宛名やファイルフォルダー、ファイルカードなど、その他数々のニーズに対応するラベルをデザインする。
- 装飾用のオブジェクトを作成し、ラベルテンプレートに挿入する。
- ラベルに使用するフォント、フォントサイズ、書体を指定する。
- 各ページの縦と横に印刷するラベル数を指定する。
- 各レコードにつき印刷するラベル数を指定する。
- ラベルページのマージンを指定する。
- 各ラベルまたは各レコードを印刷する際に実行するメソッドを指定する。
- プレビューを作成し、ラベルを印刷する。

:::note

ラベルは、[フォームエディター](../FormEditor/formEditor.md) を使用して作成することもできます。 変数を含むラベルや、フォームエディターの描画用ツールを利用する特殊なラベルを作成しそれらをラベルエディターや [`PRINT LABEL`](../commands-legacy/print-label.md) コマンドを使用して印刷したい場合には、フォームエディターを使用してください。

:::

ラベルエディターを使用して、ラベルの作成やフォーマット、印刷を行います。 ラベルエディター には、ラベルを設計したり、ラベル用紙上でのラベル位置を決めるための各種設定が用意されています。 例えば、宛名ラベルを作成する場合、1行目に相手先の 名字と名前、2行目にその人の住所を納めたラベルを設計することができます。 ラベルエディターでは、ページ上のラベル数を指定したり、ラベル用紙のマージ ンを指定することで、ラベルテキストがラベルの中央に配置されるようデザインを調整することができます。
ラベルデザインが完成したら、いつでも再利用できるようにディスクに保存することができます。

ラベルエディターは、次のように開きます:

- デザインモードでは、**ツール**メニュー、あるいは4Dツールバーにあるツールボタンのメニューから\*\*ラベル...\*\*を選択します。
 または
- アプリケーションモードでは、 [`PRINT LABEL`](../commands-legacy/print-label.md) コマンドを使用します。

![](../assets/en/Desktop/label-wizard.png)

ラベルページはラベルの内容を指定するために使用し、レイアウトページはページ上のラベルサイズや位置を指定するために使用します。

![](../assets/en/Desktop/label-buttons.png)

## ラベルページ

ラベルページには、ラベルのデザインやフォーマットを行うための設定があります。

### フィールドのリスト

カレントテーブルのフィールド名が階層リスト形式で表示されます。 そのテーブルが別のテーブルにリレートしている場合は、外部キーフィー ルドにプラス記号 (Windows) または矢印 (Macintosh) が表示されます。 リレートフィールドを展開すると、リレートテーブルのフィールドを表示することができます。 リレートテーブルのフィールドはインデント (字下げ) されます。 リストから右のラベルプレビューエリアにドラッグすると、フィールドをラベルテンプレートに追加できます。

:::note 注記

- クイックレポートエディターのフィールドリストには、非表示属性が設定されていないテーブルとフィールドだけが表示されます。
- [オブジェクト型](../Concepts/dt_object.md) のフィールドは、ラベルエディターではサポートされていません。

:::

この検索エリアでは入力した文字列を含むフィールドのみに表示を限定することができます:

![](../assets/en/Desktop/label-filter.png)

### ラベルプレビューエリア

このエリアを使用して、ラベルに表示させるすべてのオブジェクトの配置を調整し、ラベルを設計します。 白い長方形は一つのラベルを表します(ラベルの大きさは [レイアウトページ](#レイアウトページ)) を指定できます)。ラベルにはフィールドをドラッグすることができます。

- ラベルにはフィールドをドラッグすることができます。
- 一つ目のフィールドの上に他のフィールをドロップする事で二つのフィールドを結合する事もできます。 これらは自動的にスペースで区切られます。<br/>
 ![](../assets/en/Desktop/label-concat.png)<br/>
 **Shift** キーを押しながらドロップすると、改行で区切られます。 これによって、住所などの複数のフィールドにまたがるラベル(住所1、住所2など)を、住所が一行で済む場合にも無駄な余白行を作らずに作成する事ができることができます。
- **フォーミュラ** ツール ![](../assets/en/Desktop/label-tool6.png) (あるいはコンテキストメニュー内の **ツール>フォーミュラ**) を選択しながらエリアを描画することで、ラベルにフォーミュラを追加することができます。 すると **フォーミュラエディター** が表示されます:
 ![](../assets/en/Desktop/label-formula1.png)<br/>
 例えば、 [`String`](../commands-legacy/string.md) コマンドを使用してフィールドにフォーマットを適用することができます:<br/>

![](../assets/en/Desktop/label-formula2.png)<br/>

:::note

フォーミュラエディター内では、データベースにおいて"許可された"メソッドしか入力できないという点に注意して下さい。 許可されたメソッドは [プロジェクト設定](../settings/security.md#オプション) と [`SET ALLOWED METHODS`](../commands/set-allowed-methods.md) コマンドによります。

:::

- OS のデスクトップからピクチャーファイル、またはラベルファイル(".4lbp" ファイル) をドラッグ&ドロップすることができます。

- エリアを変更するには、中身をダブルクリックして編集モードにスイッチして下さい。 フィールドやフォーミュラをダブルクリックすると、 **フォーミュラエディター** が表示され、これにより項目を削除や変更することができます:
 ![](../assets/en/Desktop/label-formula.png)

### 使用するフォーム

このドロップダウンリストを使用すると選択したテーブルフォームをラベルテンプレートとして定義できるようになります。 選択されたフォームはラベルの作成に特化している必要があります。
この場合、ラベルエディターは部分的に無効化される事になります：[レイアウトページ](#layout-page) の機能のみが使用可能です。これによりフォームに基づいたページの設定が可能です。 選択されたフォームのイメージは、ラベルプレビューエリアに表示されます。
フォームを使用する場合、4Dはそれに関連づけられたあらゆるフォームメソッド・オブジェクトメソッドを実行します。 このオプションを使用する場合、各レコードあるいは各ラベルに対して実行するプロジェクトメソッドを指定し、変数を割り当てることができます(以下の [この例題](#フォームとメソッドを使用してラベルを印刷する) を参照して下さい)。 エディター自身を使用してラベルを作成したい場合、**フォームなし** オプションを選ぶ必要があります。

:::note 注記

- このメニューに表示されるフォームは、[特定のJSON ファイル](#controlling-available-forms-and-methods) を使用する事によって制限する事ができます。
- データベースにテーブルフォームが何も含まれていない場合には、このメニューは表示されません。

:::

### グラフィックエリアコマンド

エディターのグラフィックエリアではツールバーとコンテキストメニューの両方が使え、これを使ってラベリテンプレートをデザインするすることができます。

ツールバーの左側にはオブジェクトの選択と挿入のためのコマンドを含めるためのツールバーがあります。 これらのツールはエリアのコンテキストメニュー内の**ツール >** コマンドによってもアクセスする事ができます。

| アイコン                                      | ツール名        | 説明                                                                                                                       |
| ----------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![](../assets/en/Desktop/label-tool1.png) | セレクション      | 選択ツール。単一のオブジェクトをクリックするか、複数のオブジェクトを指定する選択範囲を選んでください。 隣り合っていない複数のオブジェクトを選択するためには、 **Shift** キーを押しながら選択したオブジェクトを一つずつ選んで下さい。 |
| ![](../assets/en/Desktop/label-tool2.png) | 線作成ツール      |                                                                                                                          |
| ![](../assets/en/Desktop/label-tool3.png) | 四角作成ツール     | 四角または角の丸い四角を作成できます。                                                                                                      |
| ![](../assets/en/Desktop/label-tool4.png) | 円作成ツール      |                                                                                                                          |
| ![](../assets/en/Desktop/label-tool5.png) | テキスト挿入ツール   | 四角形を描画して内部にテキストを入力して下さい。 テキストエリアであればどのようなものでも編集可能です。フィールド参照を含んでいるものも編集可能で、これらに対してはダブルクリックして下さい。                          |
| ![](../assets/en/Desktop/label-tool6.png) | フォーミュラ挿入ツール | 四角形を描画して **フォーミュラエディター** を表示して下さい。これを使用して動的なラベルコンテンツ(フィールドやフォーミュラ)を定義することができます。                       |

以下のショートカットを使用する事で、キーボードの矢印キーを使用してより細かくオブジェクトを移動・リサイズすることができます:

- キーボードの矢印キーを押すと、選択されたオブジェクトを1ピクセルずつ移動させます。
- **Shift** + 矢印キーは、選択されたオブジェクトを10ピクセルずつ移動させます。
- **Ctrl** + 矢印キーは、オブジェクトの選択範囲を1ピクセルずつ拡大または縮小させます。
- **Ctrl** + **Shift** + 矢印キーは、オブジェクトの選択範囲を10ピクセルずつ拡大または縮小します。

右側のツールバーにはラベルテンプレートの項目を変更するのに使用するコマンドが含まれます:

| アイコン                                       | ツール名      | 説明                                                                                                                                                          |
| ------------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/Desktop/label-tool7.png)  | 塗りカラー     | 全てのカラーアイコンは選択されたカラーを表示します                                                                                                                                   |
| ![](../assets/en/Desktop/label-tool8.png)  | 線カラー      |                                                                                                                                                             |
| ![](../assets/en/Desktop/label-tool9.png)  | 線の太さ      |                                                                                                                                                             |
| ![](../assets/en/Desktop/label-tool10.png) | フォントメニュー  | フォントとそのサイズに加え、テキストスタイル、選択されたテキストのブロックのカラーと行揃えを設定します。                                                                                                        |
| ![](../assets/en/Desktop/label-tool11.png) | 揃えと間隔ツール  | 揃えオプションを利用するためには二つ以上のオブジェクトを選択する必要があります。 "間隔"ツールは三つ以上のオブジェクトに対して水平あるいは垂直方向の間隔を自動的に同じ幅に揃えることを意味します。 最終的な間隔は選択範囲内にある既存の幅(または高さ)全ての平均になります。 |
| ![](../assets/en/Desktop/label-tool12.png) | オブジェクトレベル | オブジェクトを最前面に、あるいは複数のオブジェクトを一つレベルを上げるか下げるかします。                                                                                                                |

## レイアウトページ

レイアウトページには、現在の印刷条件に基づいたラベル印刷用の各種設定が用意されています。

![](../assets/en/Desktop/label-layout.png)

- **Labels Order**: Specifies whether labels should be printed in the direction of the rows or the columns.
- **Rows** and **Columns**: Set the number of labels to be printed by "row" and by "column" on each sheet. These settings determine the label size when the "Automatic resizing" option is enabled.
- **Labels per record**: Sets the number of copies to print for each label (copies are printed consecutively).
- **Print Setup...**: Sets the format of the page on which the sheet of labels will be printed. When you click this button, the setup dialog box for the printer selected in your system appears. By default, the sheet of labels is generated based on an A4 page in portrait mode.
 **Note:** The sheet created by the editor is based on the logical page of the printer, i.e. the physical page (for instance, an A4 page) less the margins that cannot be used on each side of the sheet. The physical margins of the page are shown by blue lines in the preview area.
- **Unit**: Changes the units in which you specify your label and label page measurements. You can use points, millimeters, centimeters, or inches.
- **Automatic resizing**: Means that 4D automatically calculates the size of the labels (i.e. the Width and Height parameters) according to the values set in all the other parameters. When this option is checked, the label size is adjusted each time you modify a page parameter. The Width and Height parameters can no longer be set manually.
- **Width** and **Height**: Sets the height and width of each label manually. They cannot be edited when the **Automatic resizing** option is checked.
- **Margins** (Top, Right, Left, Bottom): Sets the margins of your sheet. These margins are symbolized by blue lines in the preview area. Clicking on **Use printer margins** replicates, in the preview area, the margin information provided by the selected printer (these values can be modified).
- **Gaps**: Set the amount of vertical and/or horizontal space between label rows and columns.
- **Method**: Lets you trigger a specific method that will be run at print time. For example, you can execute a method that posts the date and time that each label was printed. This feature is also useful when you print labels using a dedicated table form, in which case you can fill variables from a method.
 To be eligible for label processing, a project method must comply with the following settings:
 - it must be "allowed" for the database (allowed methods depend on [project settings](../settings/security.md#options) and the [`SET ALLOWED METHODS`](../commands/set-allowed-methods.md) command), otherwise it will not be displayed in the **Apply** menu.
 - it must have the [Shared by components and host database](../Project/code-overview.md#shared-by-components-and-host-database) option.
  See also [this example](#printing-labels-using-forms-and-methods-example) below.

:::note

For advanced needs, you can restrict the list of methods available using a [specific json file](#controlling-available-forms-and-methods).
The **For each: Record or Label** options are used to specify whether to run the method once per label or once per record. This control has meaning only if you are printing more than one copy of each label and you are also executing a method at print time.

:::

- **Layout preview**: Provides a reduced view of how an entire page of labels will look, based on the dimensions you enter in the Label editor. The page preview also reflects the paper size selected in the Print Setup dialog box. You can also use this area to designate the first label on the page to be printed (this option only affects the first sheet in the case of multi-page printing). This can be useful, for example, when you want to print on a sheet of adhesive labels, part of which has already been used. You can also select the first label on the page to be printed by clicking on it:

![](../assets/en/Desktop/label-start.png)

## Printing labels using forms and methods (example)

You can use dedicated table forms and project methods to print labels with calculated variables. This simple example shows how to configure the different elements.

1. In a dedicated table form, add your label field(s) and variable(s).
 Here, in a table form named "label", we added the *myVar* variable:
 ![](../assets/en/Desktop/label-example1.png)

2. Create a `setMyVar` project method with the following code:

```4d
 var myVar+=1
```

3. Set the project method as ["Shared by components and host database"](../Project/code-overview.md#shared-by-components-and-host-database).

4. Before displaying the Label editor, make sure the project method is allowed by executing this code:

```4d
 ARRAY TEXT($methods;1)
 $methods{1}:="setMyVar"
 SET ALLOWED METHODS($methods)
```

5. Open the Label editor and use your form:
 ![](../assets/en/Desktop/label-example2.png)

6. In the Layout page, select the method:
 ![](../assets/en/Desktop/label-example3.png)

Then you can print your labels:
![](../assets/en/Desktop/label-example4.png)

## Controlling available forms and methods

The Label editor includes an advanced feature allowing you to restrict which project forms and methods (within "allowed" methods) can be selected in the dialog box:

- in the **Form to use** menu on the "Label" page and/or
- in the **Apply (method)** menu on the "Layout" page.

1. Create a JSON file named **labels.json** and put it in the [Resources folder](../Project/architecture.md#resources) of the project.
2. In this file, add the names of forms and/or project methods that you want to be able to select in the Label editor menus.

The contents of the **labels.json** file should be similar to:

```json
[ 
    {"tableId":2,"forms":[],"methods":["myMethod1","myMethod2"]},
    {"tableId":1,"forms":["Sample Label 1","Sample Label 2"],"methods":[]}
]
```

If no **labels.json** file has been defined, then no filtering is applied.

## Managing label files

4D allows you to save each label design in a file that you can open subsequently from within the wizard. By saving your label designs, you can build a label library adapted to your specific needs. Each label design stores the settings defined on the Label and Layout pages.

You can drag and drop label files from your desktop onto the label design area.

Label designs are managed using the **Load** and **Save** buttons of the tool bar.

- To load a label design, click on the **Load** button and designate the design you want to load by means of the File Open dialog box (if a label design is already present in the wizard, 4D replaces it by the one you have loaded).
- To save a label design, click on the **Save** button and indicate the name and location of the design to be created.

### File format

The file extension of 4D labels saved by the wizard is ".4lbp". Note that this format is open since it is written internally in XML.

### Preloading label files

The Label Wizard allows you to store label files within your application, so that label designs can be selected and opened by the user directly using the **Load** button.

To do this, you just need to create a folder named `Labels` within the [Resources folder](../Project/architecture.md#resources) of the project and then copy your label files into it:

![](../assets/en/Desktop/label-resources.png)

:::note

Both standard ".4lbp" files and files generated by the former wizard (".4lb") files are supported.

:::

When the Label Wizard starts, if this folder is detected and contains valid label files, a pop-up icon is added to the **Load** button. Label designs can then be selected through a menu line:

![](../assets/en/Desktop/label-resources2.png)

